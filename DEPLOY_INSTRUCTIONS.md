# 🚀 INSTRUCCIONES PARA DESPLEGAR EN FIREBASE

## Pasos para desplegar tu juego:

### 1. Instalar Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Iniciar sesión en Firebase
```bash
firebase login
```
- Se abrirá el navegador
- Inicia sesión con tu cuenta de Google
- Autoriza Firebase CLI

### 3. Inicializar proyecto Firebase
```bash
firebase init hosting
```
- Selecciona "Use an existing project" o crea uno nuevo
- Public directory: `.` (punto)
- Single-page app: `No`
- Overwrite index.html: `No`

### 4. Desplegar
```bash
firebase deploy
```

### 5. ¡Listo!
Tu juego estará en: `https://tu-proyecto-id.web.app`

## 🎯 Alternativa MÁS SIMPLE: Surge.sh

Si Firebase te da problemas, usa Surge:

```bash
npm install -g surge
surge
```
- Te pedirá email y contraseña
- Te dará una URL instantánea como: `https://tu-juego.surge.sh`

## 📱 Para usar en Android:
1. Abrir Chrome en Android
2. Ir a tu URL
3. Menú → "Agregar a pantalla de inicio"
4. ¡Se instala como app!

## 🔧 Si tienes problemas:
- Usa Surge.sh (más simple)
- O GitHub Pages (más confiable)
- O Netlify (arrastrar y soltar)
