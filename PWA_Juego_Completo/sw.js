// Service Worker para PWA
const CACHE_NAME = 'juego-uno-no-corresponde-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Imágenes del juego
  'Bosque desenfocado 2.jpg',
  'Bosque enfocado 1.jpg',
  'Bosque enfocado 2.jpg',
  'Bosque enfocado.jpg',
  'Paisaje Borroso.jpg',
  'Paisaje_Nitido.jpg',
  'Paisaje_nitido_1.jpg',
  'paisaje_nitido_2.jpg',
  'beber aclohol pertenece1.jpg',
  'comer mal pertenece.jpg',
  'fumar pertenece.jpeg',
  'comer manzaz no pertenece.jpg',
  'pertenece0.jpg',
  'pertence1.jpeg',
  'pertence2.png',
  'nopertenece.jpg',
  'habito saludable aguapertence1.jpg',
  'habito saludable bici pertenece3.jpg',
  'habito saludable ensalada pertenece2.jpg',
  'habitno no saludable gaseosano pertenece.jpg',
  'control_cerebro_si.jpg',
  'control corazon pertenece1.jpg',
  'control presion pertenece.jpeg',
  'control pulmones Pulmones No.jpg',
  'templateACV-1 copia.jpg',
  'templateACV-2 copia.jpg'
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
