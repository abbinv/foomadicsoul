const CACHE_NAME = 'foomadicsoul-v1';
const urlsToCache = [
  '/',
  '/assets/js/common.js',
  '/assets/js/ads-config.js',
  '/assets/css/responsive.css',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});