// Service Worker script (service-worker.js)
const CACHE_NAME = 'my-cache-v1';
/*const urlsToCache = [
  '/',
  '/index.html',
  '/service-worker.js'
];*/

self.addEventListener('install', event => {
    console.log('Service Worker installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        //return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
  
          return fetch(event.request)
          ///un
            .then(response => {
              const clonedResponse = response.clone();
  
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, clonedResponse);
                });
  
              return response;
            })
        })
    );
  });

  
  self.addEventListener('activate', event => {
    console.log('Service Worker activated');
  });