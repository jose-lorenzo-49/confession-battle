# 🚀 GUÍA DE DESPLIEGUE - Confession Battle

## 📋 Pre-requisitos
- Cuenta en GitHub (ya configurada ✅)
- Elegir plataforma de hosting

---

## 🌐 OPCIÓN 1: Vercel (RECOMENDADO - Más Fácil)

### Por qué Vercel:
- ✅ Deploy automático desde GitHub
- ✅ HTTPS gratis
- ✅ CDN global
- ✅ Deploy en 2 minutos

### Pasos:

1. **Ir a Vercel**
   ```
   https://vercel.com
   ```

2. **Conectar GitHub**
   - Click en "Import Project"
   - Selecciona tu repo: `jose-lorenzo-49/confession-battle`

3. **Configurar proyecto**
   - Framework Preset: `Other`
   - Root Directory: `./`
   - Build Command: (dejar vacío)
   - Output Directory: `./`

4. **Deploy**
   - Click "Deploy"
   - Esperar 1-2 minutos
   - ¡Listo! Tu URL será: `https://confession-battle.vercel.app`

### Variables de entorno (si usas MongoDB):
```
MONGO_URI=tu_conexion_mongodb
PORT=3000
NODE_ENV=production
```

---

## 🎨 OPCIÓN 2: Netlify (Solo Frontend)

### Por qué Netlify:
- ✅ Súper rápido para sitios estáticos
- ✅ HTTPS gratis
- ✅ Dominio personalizado fácil

### Pasos:

1. **Ir a Netlify**
   ```
   https://netlify.com
   ```

2. **Nuevo sitio desde Git**
   - "Add new site" → "Import from Git"
   - Conecta GitHub
   - Selecciona `jose-lorenzo-49/confession-battle`

3. **Build settings**
   - Build command: (vacío)
   - Publish directory: `.`

4. **Deploy**
   - Click "Deploy site"
   - ¡Listo! Tu URL: `https://tu-nombre.netlify.app`

---

## 🐳 OPCIÓN 3: Render (Con Backend Node.js)

### Por qué Render:
- ✅ Soporte completo para Node.js
- ✅ Base de datos incluida
- ✅ Plan gratuito generoso

### Pasos:

1. **Ir a Render**
   ```
   https://render.com
   ```

2. **Nuevo Web Service**
   - "New" → "Web Service"
   - Conecta GitHub repo

3. **Configuración**
   - Name: `confession-battle`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`

4. **Variables de entorno**
   ```
   MONGO_URI=tu_mongodb_uri
   PORT=3000
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Esperar 3-5 minutos

---

## 🔥 OPCIÓN 4: GitHub Pages (Gratis, Solo Frontend)

### Pasos:

1. **Renombrar archivo**
   ```bash
   mv confession-battle.html index.html
   git add .
   git commit -m "Rename for GitHub Pages"
   git push
   ```

2. **Activar GitHub Pages**
   - Ve a tu repo en GitHub
   - Settings → Pages
   - Source: `main` branch
   - Folder: `/ (root)`
   - Save

3. **Esperar 2 minutos**
   - Tu URL: `https://jose-lorenzo-49.github.io/confession-battle/`

---

## 📱 POST-DEPLOY: Compartir

### Mensaje para grupos de WhatsApp:

```
⚠️ EXCLUSIVO 2DO CICLO INDUSTRIAL ⚠️

🤫 App de CONFESIONES ANÓNIMAS

Ya hay 78 confesiones SALVAJES:
- Profes que no dan clase
- Drama de Villena
- Wong el fantasma
- Secretos de exámenes
- Y mucho más...

🔗 Link: [TU_URL_AQUI]

🚨 100% anónimo | Cero rastreo
Solo 2do ciclo (por ahora)

Las confesiones más votadas tienen +3K votos 🔥
```

### Hashtags para redes sociales:
```
#ConfessionBattle #UNMSM #Industrial #2doCiclo #Confesiones
```

---

## 🛡️ SEGURIDAD POST-DEPLOY

1. **Monitorear reportes**
   - Revisar confesiones reportadas diariamente
   - Eliminar contenido inapropiado

2. **Rate limiting** (si crece mucho)
   - Implementar límite de envío de confesiones
   - 1 confesión cada 10 minutos por IP

3. **Backup de datos**
   - Exportar confesiones semanalmente
   - Guardar en JSON local

---

## 📊 ANALYTICS (Opcional)

### Google Analytics:
Agregar en `<head>` de `confession-battle.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_ID');
</script>
```

---

## 🎯 SIGUIENTE NIVEL

### Dominio personalizado (opcional):
1. Comprar dominio: `confessionbattle.com` (~$10/año)
2. Configurar en Vercel/Netlify:
   - Settings → Domains
   - Add custom domain
   - Configurar DNS según instrucciones

### Base de datos real:
1. MongoDB Atlas (gratis hasta 512MB)
2. Configurar en `.env`:
   ```
   MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/confessions
   ```

---

## ✅ CHECKLIST DE DEPLOY

- [ ] Código en GitHub actualizado
- [ ] Plataforma elegida (Vercel/Netlify/Render)
- [ ] Deploy exitoso
- [ ] URL funcionando
- [ ] Botón compartir probado
- [ ] Confesiones cargando correctamente
- [ ] Modo responsive funcionando
- [ ] Mensaje de WhatsApp preparado
- [ ] Primera compartida en grupo

---

## 🆘 TROUBLESHOOTING

### Error: "Cannot find module"
```bash
npm install
git add package-lock.json
git commit -m "Add dependencies"
git push
```

### Error: "Module not found: confesiones-seed.js"
- Verificar que `confesiones-seed.js` esté en el mismo directorio
- Verificar que esté incluido en el commit

### Confesiones no cargan:
- Abrir DevTools (F12)
- Ver errores en consola
- Verificar que `CONFESIONES` y `CATEGORIAS` estén definidos

---

## 🚀 LISTO PARA LANZAR

1. Elige tu plataforma favorita
2. Sigue los pasos
3. Obtén tu URL
4. ¡Comparte con 2do ciclo!

**Recomendación:** Empieza con Vercel (más fácil y rápido).

¿Necesitas ayuda? Contacto: confessionbattle@protonmail.com
