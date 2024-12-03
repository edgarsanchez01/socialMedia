const CACHE_NAME = 'plex-cache-v1';
const urlsToCache = [
  '/', // Página principal
  '/favicon.ico', // Ícono
  '/manifest.json', // Manifest
  '/icons/icon-192x192.png', // Ícono
  '/icons/icon-512x512.png', // Ícono
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Archivos cacheados:', urlsToCache);
      return cache.addAll(urlsToCache);
    })
  );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activado');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Borrando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar solicitudes
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Excluir rutas de API o autenticación
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/signin') || url.pathname.startsWith('/auth/')) {
    console.log('[Service Worker] Pasando por la red:', url.pathname);
    return; // No interceptar estas solicitudes
  }

  console.log('[Service Worker] Interceptando:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch((error) => {
      console.error('[Service Worker] Error al manejar fetch:', error);
    })
  );
});
