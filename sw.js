// Service Worker for Tools Park
const CACHE_NAME = 'tools-park-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/tools.html',
  '/about.html',
  '/contact.html',
  '/css/professional.css',
  '/js/main-clean.js',
  '/components/header.html',
  '/components/footer.html'
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