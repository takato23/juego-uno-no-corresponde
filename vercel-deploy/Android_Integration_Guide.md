# 📱 Integración en Android - WebView

## Opción 1: WebView en tu app existente

### 1. Agregar WebView a tu layout XML:
```xml
<WebView
    android:id="@+id/webview"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

### 2. Configurar WebView en tu Activity:
```java
WebView webView = findViewById(R.id.webview);
WebSettings webSettings = webView.getSettings();
webSettings.setJavaScriptEnabled(true);
webSettings.setDomStorageEnabled(true);
webSettings.setLoadWithOverviewMode(true);
webSettings.setUseWideViewPort(true);

// Cargar el juego
webView.loadUrl("https://tu-juego.vercel.app");
```

### 3. Permisos en AndroidManifest.xml:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## Opción 2: App nativa simple

### 1. Crear nueva app Android
### 2. Agregar WebView como única actividad
### 3. Configurar para cargar tu juego online

## Opción 3: PWA (Progressive Web App)

### 1. Agregar manifest.json al juego
### 2. Configurar service worker
### 3. Instalar como app nativa desde el navegador

## Ventajas de cada opción:

**WebView:**
- ✅ Integración perfecta en tu app
- ✅ Control total del comportamiento
- ✅ Acceso a funciones nativas
- ✅ Funciona offline (si cargas los archivos localmente)

**PWA:**
- ✅ No necesitas desarrollar app nativa
- ✅ Se instala como app real
- ✅ Funciona offline
- ✅ Actualizaciones automáticas

**App nativa simple:**
- ✅ Control total
- ✅ Personalización completa
- ✅ Integración con sistema Android
