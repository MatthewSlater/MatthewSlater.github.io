if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/js/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('acw-v1').then(function (cache) {
          return cache.addAll([
            '/index.html',
            '/js/matrix.js',
            '/js/vector.js',
            '/js/sceneNode.js',
            '/js/house.js',
            '/js/door.js',
            '/js/roof.js',
            '/js/wall.js',
            '/js/window.js'
          ]);
      })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
      fetch(event.request).catch(function () {
          return caches.match(event.request);
      })
    );
});