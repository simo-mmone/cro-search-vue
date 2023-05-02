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
workbox.routing.registerRoute(new RegExp('^.*/search/structures'), new workbox.strategies.CacheFirst ({"cacheName":"fetchStructureList","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
workbox.routing.registerRoute(new RegExp('^.*/search/filter'), new workbox.strategies.CacheFirst ({"cacheName":"fetchFormFilter","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
workbox.routing.registerRoute(new RegExp('/nuxttest/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/nuxttest/'), new workbox.strategies.NetworkFirst ({}), 'GET')
