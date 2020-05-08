/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  "/precache-manifest.a6a9e7e1a73970cf52597e491993be51.js"
=======
  "/precache-manifest.716ecca182646b221fba971536b2d8c1.js"
>>>>>>> 3c3e8ae113cc1e714f40592b7658fb11f9e3c5f8
=======
  "/precache-manifest.cd2a4fb5b90630829fafccfeef390a4e.js"
>>>>>>> 96a054147322f75234b85df8baa6d4f02e480e1b
=======
  "/precache-manifest.39a02709fe61ed1bc10a646114b90b18.js"
>>>>>>> 7d1b892d19eaada41fdaf41ac41302f8689efb25
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
