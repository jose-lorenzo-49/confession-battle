const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Conexión a MongoDB (solo para confesiones)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/confessions';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB conectado'))
    .catch(err => console.error('❌ Error conectando MongoDB:', err));

// Schema para Confesiones
const confessionSchema = new mongoose.Schema({
    text: { type: String, required: true, maxlength: 300 },
    category: { type: String, required: true },
    icon: { type: String, required: true },
    votes: { type: Number, default: 0 },
    reports: { type: Number, default: 0 },
    approved: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Confession = mongoose.model('Confession', confessionSchema);

// Schema para Votes
const voteSchema = new mongoose.Schema({
    winnerId: { type: String, required: true },
    loserId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Vote = mongoose.model('Vote', voteSchema);

// 🔥 API ENDPOINTS

// 1️⃣ Obtener confesiones aprobadas
app.get('/api/confessions', async (req, res) => {
    try {
        const confessions = await Confession.find({ approved: true })
            .sort({ votes: -1 });
        res.json(confessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2️⃣ Obtener top 3
app.get('/api/top3', async (req, res) => {
    try {
        const top3 = await Confession.find({ approved: true })
            .sort({ votes: -1 })
            .limit(3);
        res.json(top3);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3️⃣ Registrar un voto
app.post('/api/vote', async (req, res) => {
    try {
        const { winnerId, loserId } = req.body;

        // Incrementar votos del ganador
        await Confession.updateOne(
            { _id: winnerId },
            { $inc: { votes: 1 } }
        );

        // Guardar registro del voto
        const vote = new Vote({ winnerId, loserId });
        await vote.save();

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4️⃣ Enviar nueva confesión
app.post('/api/confessions', async (req, res) => {
    try {
        const { text, category, icon } = req.body;

        // Validaciones básicas
        if (!text || text.length > 300) {
            return res.status(400).json({ error: 'Texto inválido' });
        }

        // Filtro básico de palabras prohibidas (nombres propios, datos personales)
        const forbiddenPatterns = /\b(21\d{6}|24\d{6}|25\d{6}|DNI|celular|\d{9})\b/gi;
        if (forbiddenPatterns.test(text)) {
            return res.status(400).json({ error: 'No se permiten datos personales' });
        }

        const confession = new Confession({
            text,
            category,
            icon,
            approved: false // Requiere moderación
        });

        await confession.save();
        res.json({ success: true, message: 'Confesión enviada para revisión' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5️⃣ Reportar confesión
app.post('/api/confessions/:id/report', async (req, res) => {
    try {
        await Confession.updateOne(
            { _id: req.params.id },
            { $inc: { reports: 1 } }
        );
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 6️⃣ Estadísticas
app.get('/api/stats', async (req, res) => {
    try {
        const totalConfessions = await Confession.countDocuments({ approved: true });
        const totalVotes = await Vote.countDocuments();
        
        res.json({ totalConfessions, totalVotes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Servir el HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'confession-battle.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📊 API disponible en http://localhost:${PORT}/api`);
});
