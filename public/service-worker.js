const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
];

// Instalar el Service Worker y agregar archivos al caché
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Archivos en caché');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activar el Service Worker y limpiar cachés antiguas
self.addEventListener('activate', (event) => {
  console.log('Service Worker activado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Caché vieja eliminada:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Interceptar solicitudes y servir desde la caché
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
