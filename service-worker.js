"use strict";var precacheConfig=[["/bankeeper/index.html","c00b766da1555b4857adc03f69fd8bf5"],["/bankeeper/static/css/main.fd35f895.css","85944e00ead081bd4065e67ba0eaf761"],["/bankeeper/static/js/main.cf91c05a.js","9e859033a29bd513957a386ff1d0d0a5"],["/bankeeper/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/bankeeper/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/bankeeper/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/bankeeper/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/bankeeper/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/bankeeper/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/bankeeper/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/bankeeper/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/bankeeper/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/bankeeper/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/bankeeper/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/bankeeper/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/bankeeper/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/bankeeper/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/bankeeper/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/bankeeper/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/bankeeper/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});