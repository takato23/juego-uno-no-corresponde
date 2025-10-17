// Service Worker para PWA
const CACHE_NAME = 'juego-uno-no-corresponde-v1';
const urlsToCache = [
  '/juego-uno-no-corresponde/',
  '/juego-uno-no-corresponde/index.html',
  '/juego-uno-no-corresponde/manifest.json',
  // Imágenes del juego
  '/juego-uno-no-corresponde/Bosque desenfocado 2.jpg',
  '/juego-uno-no-corresponde/Bosque enfocado 1.jpg',
  '/juego-uno-no-corresponde/Bosque enfocado 2.jpg',
  '/juego-uno-no-corresponde/Bosque enfocado.jpg',
  '/juego-uno-no-corresponde/Paisaje Borroso.jpg',
  '/juego-uno-no-corresponde/Paisaje_Nitido.jpg',
  '/juego-uno-no-corresponde/Paisaje_nitido_1.jpg',
  '/juego-uno-no-corresponde/paisaje_nitido_2.jpg',
  '/juego-uno-no-corresponde/beber aclohol pertenece1.jpg',
  '/juego-uno-no-corresponde/comer mal pertenece.jpg',
  '/juego-uno-no-corresponde/fumar pertenece.jpeg',
  '/juego-uno-no-corresponde/comer manzaz no pertenece.jpg',
  '/juego-uno-no-corresponde/pertenece0.jpg',
  '/juego-uno-no-corresponde/pertence1.jpeg',
  '/juego-uno-no-corresponde/pertence2.png',
  '/juego-uno-no-corresponde/nopertenece.jpg',
  '/juego-uno-no-corresponde/habito saludable aguapertence1.jpg',
  '/juego-uno-no-corresponde/habito saludable bici pertenece3.jpg',
  '/juego-uno-no-corresponde/habito saludable ensalada pertenece2.jpg',
  '/juego-uno-no-corresponde/habitno no saludable gaseosano pertenece.jpg',
  '/juego-uno-no-corresponde/control_cerebro_si.jpg',
  '/juego-uno-no-corresponde/control corazon pertenece1.jpg',
  '/juego-uno-no-corresponde/control presion pertenece.jpeg',
  '/juego-uno-no-corresponde/control pulmones Pulmones No.jpg',
  '/juego-uno-no-corresponde/templateACV-1 copia.jpg',
  '/juego-uno-no-corresponde/templateACV-2 copia.jpg'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requests
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
