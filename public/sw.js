if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts("fallback-jwWMEEj32skZ1EwQSbFNU.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/127.3ae4a77a54f37057.js",revision:"3ae4a77a54f37057"},{url:"/_next/static/chunks/1bfc9850-1e17b43425dfafcd.js",revision:"1e17b43425dfafcd"},{url:"/_next/static/chunks/252f366e-ce449a80ab8c2793.js",revision:"ce449a80ab8c2793"},{url:"/_next/static/chunks/29107295-8619d3a1a46e5850.js",revision:"8619d3a1a46e5850"},{url:"/_next/static/chunks/346.48f67022965ee887.js",revision:"48f67022965ee887"},{url:"/_next/static/chunks/370-268fe069ab0dcdf5.js",revision:"268fe069ab0dcdf5"},{url:"/_next/static/chunks/381.a35bfdfa8c5b5646.js",revision:"a35bfdfa8c5b5646"},{url:"/_next/static/chunks/400.689483374d0df36d.js",revision:"689483374d0df36d"},{url:"/_next/static/chunks/408.2f0f910d176483bd.js",revision:"2f0f910d176483bd"},{url:"/_next/static/chunks/675-ad37e7e4a38efbd8.js",revision:"ad37e7e4a38efbd8"},{url:"/_next/static/chunks/697.43a4585287852d1e.js",revision:"43a4585287852d1e"},{url:"/_next/static/chunks/709.02747c26afe949f8.js",revision:"02747c26afe949f8"},{url:"/_next/static/chunks/733.d641b312db7f2a66.js",revision:"d641b312db7f2a66"},{url:"/_next/static/chunks/741.01561e5511926703.js",revision:"01561e5511926703"},{url:"/_next/static/chunks/75fc9c18-0cf132890bf6dedc.js",revision:"0cf132890bf6dedc"},{url:"/_next/static/chunks/7f0c75c1.8ad33fb2f903b198.js",revision:"8ad33fb2f903b198"},{url:"/_next/static/chunks/886.5b7dc3e01766b885.js",revision:"5b7dc3e01766b885"},{url:"/_next/static/chunks/898.bac2614fd1dc204b.js",revision:"bac2614fd1dc204b"},{url:"/_next/static/chunks/902.8e9c8cada4ab34ea.js",revision:"8e9c8cada4ab34ea"},{url:"/_next/static/chunks/956.b2f6b6e6293bc11a.js",revision:"b2f6b6e6293bc11a"},{url:"/_next/static/chunks/961.7e465c0609d8ee0b.js",revision:"7e465c0609d8ee0b"},{url:"/_next/static/chunks/980.2e45ed1bad273406.js",revision:"2e45ed1bad273406"},{url:"/_next/static/chunks/d64684d8.c9b9ad5c232bd44b.js",revision:"c9b9ad5c232bd44b"},{url:"/_next/static/chunks/eabe11fc.5ab48b8b78c2fba7.js",revision:"5ab48b8b78c2fba7"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-62d1391230fa3096.js",revision:"62d1391230fa3096"},{url:"/_next/static/chunks/pages/404-db5caed129db6837.js",revision:"db5caed129db6837"},{url:"/_next/static/chunks/pages/500-68dcef2d1c30ad17.js",revision:"68dcef2d1c30ad17"},{url:"/_next/static/chunks/pages/_app-22c6910014468516.js",revision:"22c6910014468516"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-9723a28ac2827811.js",revision:"9723a28ac2827811"},{url:"/_next/static/chunks/pages/add-f27eab2a72852b77.js",revision:"f27eab2a72852b77"},{url:"/_next/static/chunks/pages/blog/%5Bblogid%5D-f6a14fba02600643.js",revision:"f6a14fba02600643"},{url:"/_next/static/chunks/pages/index-b52479b3758feb7e.js",revision:"b52479b3758feb7e"},{url:"/_next/static/chunks/pages/search-34a32933f34e7cd5.js",revision:"34a32933f34e7cd5"},{url:"/_next/static/chunks/pages/u/%5Buid%5D-8251e4895bc70a5b.js",revision:"8251e4895bc70a5b"},{url:"/_next/static/chunks/pages/welcome-fb55eb40d026ae95.js",revision:"fb55eb40d026ae95"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-c677f46cf5b4b0b9.js",revision:"c677f46cf5b4b0b9"},{url:"/_next/static/css/04cacb911bc8edb7.css",revision:"04cacb911bc8edb7"},{url:"/_next/static/css/1c6c20d1f3e2f449.css",revision:"1c6c20d1f3e2f449"},{url:"/_next/static/css/3bcf7d0e55bdd458.css",revision:"3bcf7d0e55bdd458"},{url:"/_next/static/css/3c3347b626e2e17f.css",revision:"3c3347b626e2e17f"},{url:"/_next/static/css/440cd53fd2a16dde.css",revision:"440cd53fd2a16dde"},{url:"/_next/static/css/458a6e05bc245ea1.css",revision:"458a6e05bc245ea1"},{url:"/_next/static/css/48e3c294e23b33ea.css",revision:"48e3c294e23b33ea"},{url:"/_next/static/css/4dc33e56d90b7619.css",revision:"4dc33e56d90b7619"},{url:"/_next/static/css/512e1b0285eb95f8.css",revision:"512e1b0285eb95f8"},{url:"/_next/static/css/5577dfd2c7a21e17.css",revision:"5577dfd2c7a21e17"},{url:"/_next/static/css/89bba082e8cd0b9f.css",revision:"89bba082e8cd0b9f"},{url:"/_next/static/css/bb839a908a36d229.css",revision:"bb839a908a36d229"},{url:"/_next/static/css/c2b9965da8bd93a7.css",revision:"c2b9965da8bd93a7"},{url:"/_next/static/css/c6ac318137489f05.css",revision:"c6ac318137489f05"},{url:"/_next/static/css/f49390d9882a7c5a.css",revision:"f49390d9882a7c5a"},{url:"/_next/static/css/f530c0c436ace597.css",revision:"f530c0c436ace597"},{url:"/_next/static/css/f6ccf6fea3aab9df.css",revision:"f6ccf6fea3aab9df"},{url:"/_next/static/css/f8c6f19ee91c446e.css",revision:"f8c6f19ee91c446e"},{url:"/_next/static/jwWMEEj32skZ1EwQSbFNU/_buildManifest.js",revision:"78bedd7eec1db779b6ab00e0b838bfd2"},{url:"/_next/static/jwWMEEj32skZ1EwQSbFNU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/43fe60c8baf92215.woff2",revision:"93f03b50edda354e4e6df6c3f5558c27"},{url:"/_next/static/media/6a640e4ab43e4f27.woff2",revision:"4a8d401177458b03b9dc575473ea4693"},{url:"/_next/static/media/b897bcc8a64c7158.p.woff2",revision:"e27d5ac8c6b65ef044382651394fae47"},{url:"/_offline",revision:"jwWMEEj32skZ1EwQSbFNU"},{url:"/favicon.ico",revision:"ad195f97bd4ed47638f8d7ad1cf6c79a"},{url:"/logo192.png",revision:"18291ddf72e0f0d96f10e830d52f0ddc"},{url:"/logo384.png",revision:"b3f2480317c172c0fe546bf7fbee4def"},{url:"/logo512.png",revision:"f0056645a0cf8d7aba9ebd3d47ef69d3"},{url:"/manifest.json",revision:"ff834d29314190841400b458f4cfe24a"},{url:"/thumbnail.webp",revision:"5524ca7ada9adef79f0d00e69ad4bed4"},{url:"/user.webp",revision:"922dde69be08fa8b62e97282616e430f"},{url:"/welcome.mp4",revision:"ca56e6a0ef6c1d6ea433dfc5a6dd23df"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
