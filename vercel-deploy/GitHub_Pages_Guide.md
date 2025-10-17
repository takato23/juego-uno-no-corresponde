# 🚀 Desplegar en GitHub Pages (RÁPIDO y GRATIS)

## Pasos para subir a GitHub Pages:

### 1. Crear repositorio en GitHub
1. Ir a [github.com](https://github.com)
2. Hacer clic en "New repository"
3. Nombre: `juego-uno-no-corresponde`
4. Marcar "Public"
5. Crear repositorio

### 2. Subir archivos
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/juego-uno-no-corresponde.git
cd juego-uno-no-corresponde

# Copiar todos los archivos del juego aquí
# (todos los .html, .jpg, .jpeg, .png, manifest.json, etc.)

# Subir a GitHub
git add .
git commit -m "Juego educativo ACV - Uno no corresponde"
git push origin main
```

### 3. Activar GitHub Pages
1. Ir al repositorio en GitHub
2. Ir a "Settings" → "Pages"
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Save

### 4. ¡Listo!
Tu juego estará en: `https://tu-usuario.github.io/juego-uno-no-corresponde`

## Ventajas de GitHub Pages:
- ✅ **MÁS RÁPIDO** que Vercel/Netlify
- ✅ **GRATIS** para siempre
- ✅ **CDN global** (rápido en todo el mundo)
- ✅ **HTTPS automático**
- ✅ **Actualizaciones automáticas**

## Para usar en Android:
1. Abrir navegador Chrome en Android
2. Ir a tu URL de GitHub Pages
3. Agregar a pantalla de inicio (se comporta como app)
4. ¡Listo! Funciona perfectamente offline después de cargar
