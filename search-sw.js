importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')


// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching

async function getBody(request) {

  var clonedReq = request.clone();
  var blob = await clonedReq.blob();
  var blobtext = await blob.text();
  return blobtext;
}
/*
const handlerCb = ({url, event, params}) => {
  return caches.open('customDetailCache').then(function (cache) {


    var body = getBody(event.request);


    return body.then(function (cbody) {

      const myeventRequestClone = new Request(event.request.url + "?body=" + encodeURIComponent(cbody),
        {
          method: 'GET',
          body: event.request.body,
          credentials: event.request.credentials,
          headers: event.request.headers,
          referrer: event.request.referrer,
          redirect: event.request.redirect,
          referrerPolicy: event.request.referrerPolicy,
          mode: event.request.mode,
          cache: event.request.cache,
          destination: event.request.destination,
          integrity: event.request.integrity,
          isHistoryNavigation: event.request.isHistoryNavigation,
          keepalive: event.request.keepalive,
          bodyUsed: event.request.bodyUsed
        });



      return cache.match(myeventRequestClone).then(function (response) {

        if (response !== undefined) {
          console.error("hit");
          return response;
        }


        return fetch(event.request).then(function (networkResponse) {
          console.error("miss");
          cache.put(myeventRequestClone, networkResponse.clone());

          return networkResponse;

        });
      }).catch(function (error) {

        console.error('Error in fetch handler:', error);
        throw error;
      });

    });
  });
}*/

//workbox.routing.registerRoute(
//  new RegExp('^.*/search/detail'),
//  handlerCb,
//  'POST'
//);

//workbox.routing.registerRoute(new RegExp('^.*/search/structures'), new workbox.strategies.CacheFirst({
//  "cacheName": "fetchStructureList",
//  "cacheExpiration": {"maxEntries": 100, "maxAgeSeconds": 86400}
//}), 'GET')

//workbox.routing.registerRoute(new RegExp('^.*/search/filter'), new workbox.strategies.CacheFirst({
//  "cacheName": "fetchFormFilter",
//  "cacheExpiration": {"maxEntries": 100, "maxAgeSeconds": 86400}
//}), 'GET')
//workbox.routing.registerRoute(new RegExp('/nuxttest/_nuxt/'), new workbox.strategies.CacheFirst({}), 'GET')
//workbox.routing.registerRoute(new RegExp('/nuxttest/'), new workbox.strategies.NetworkFirst({}), 'GET')
