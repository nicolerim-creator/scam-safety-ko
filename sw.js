const CACHE_NAME = 'scam-shield-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.svg',
  './icons/icon-512.svg',
  './icons/hero-elder.svg',
  './icons/lesson-prize.png',
  './icons/tip-payapp.svg',
  './icons/tip-wire.svg',
  './icons/tip-crypto.svg',
  './icons/tip-gift.svg',
  './icons/tip-gov.svg',
  './icons/tip-talk.svg',
  './icons/tip-remote.svg',
  './icons/tip-links.svg',
  './icons/tip-family.svg',
  './icons/tip-callback.svg',
  './icons/tip-hangup.svg',
  './icons/lesson-romance.png',
  './icons/lesson-tech.png',
  './icons/lesson-family.png',
  './icons/lesson-toll.png',
  './icons/lesson-email.png',
  './icons/lesson-text.png',
  './icons/lesson-phone.png',
  './icons/logo-color.png',
  './icons/logo-white.png',
  './icons/icon-prize.svg',
  './icons/icon-romance.svg',
  './icons/icon-tech.svg',
  './icons/icon-family.svg',
  './icons/icon-toll.svg',
  './icons/icon-email.svg',
  './icons/icon-text.svg',
  './icons/icon-phone.svg',
  './icons/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        // Optionally cache new requests
        return response;
      }).catch(() => {
        // Offline fallback
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
