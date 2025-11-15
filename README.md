# 🤫 Confession Battle

Plataforma anónima para compartir y votar confesiones universitarias.

## ✨ Características

- 🎭 **100% Anónimo** - No se almacenan datos personales
- 🗳️ **Sistema de Votación** - Estilo FaceMash para confesiones
- 📊 **Ranking en Tiempo Real** - Las mejores confesiones suben
- 🛡️ **Moderación Automática** - Filtros para contenido inapropiado
- 📝 **11 Categorías** - Amor, Académico, Secretos, Humor, etc.

## 🚀 Instalación

```bash
npm install
```

## ▶️ Uso

### Modo Local (Solo Frontend)
```bash
# Abrir directamente en navegador
open confession-battle.html
```

### Modo Servidor (Con Base de Datos)
```bash
# Iniciar servidor
node server.js

# Abrir en navegador
http://localhost:3000
```

## 📦 Tecnologías

- Frontend: HTML, CSS, JavaScript vanilla
- Backend: Node.js + Express
- Base de Datos: MongoDB (opcional)

## 🔒 Privacidad y Seguridad

- ✅ Contenido 100% anónimo generado por usuarios
- ✅ Sin almacenamiento de datos personales
- ✅ Moderación automática y manual
- ✅ Filtros para nombres, DNI, teléfonos
- ✅ Sistema de reportes

## 📋 Reglas

**NO se permite:**
- Nombres, códigos universitarios, DNI
- Números de teléfono o emails
- Amenazas, acoso, difamación
- Contenido ilegal o discriminatorio

## 🛠️ Configuración

Editar `.env` si necesitas cambiar:
```env
MONGO_URI=mongodb://localhost:27017/confessions
PORT=3000
NODE_ENV=development
```

## 📄 Licencia

MIT License - Ver archivo LICENSE

## ⚖️ Legal

Esta plataforma es **independiente** y no está afiliada a ninguna institución educativa. Todo el contenido es generado por usuarios de forma anónima.

Ver `TERMINOS-DE-USO.md` para más información.
