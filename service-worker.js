"use strict";var precacheConfig=[["/framework7-test1/index.html","cdbb641612206625ef1472815ec2cc81"],["/framework7-test1/static/css/main.ad0372c6.css","c30b9f72f8e8573ffa16376ea6ba72bb"],["/framework7-test1/static/js/main.b3818feb.js","0964d8998edde2f1dde30cb8928044c5"],["/framework7-test1/static/media/Framework7Icons-Regular.2e9a0313.woff","2e9a0313ed02aed1e206340feb36ec5c"],["/framework7-test1/static/media/Framework7Icons-Regular.4348368a.ttf","4348368ab857cb57b18e1a87ba8ff284"],["/framework7-test1/static/media/Framework7Icons-Regular.ae8767ca.woff2","ae8767ca8ecf4b090af58eff5dd6d3a7"],["/framework7-test1/static/media/Framework7Icons-Regular.c0087d4d.eot","c0087d4d5ddd32ec52f1859b42956db6"],["/framework7-test1/static/media/MaterialIcons-Regular.012cf6a1.woff","012cf6a10129e2275d79d6adac7f3b02"],["/framework7-test1/static/media/MaterialIcons-Regular.570eb838.woff2","570eb83859dc23dd0eec423a49e147fe"],["/framework7-test1/static/media/MaterialIcons-Regular.a37b0c01.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["/framework7-test1/static/media/MaterialIcons-Regular.e79bfd88.eot","e79bfd88537def476913f3ed52f4f4b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});