!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1);var n=document.querySelector(".btn-replay"),o=document.querySelector(".btn-reset"),u=Array.from(document.querySelectorAll(".letter")),c=[];function a(e){"transform"===e.propertyName&&e.target.classList.remove("sound")}window.addEventListener("keydown",(function(e){var t=document.querySelector('audio[data-letter="'.concat(e.keyCode,'"]')),r=document.querySelector('div[data-letter="'.concat(e.keyCode,'"]'));t&&(r.classList.add("sound"),t.currentTime=0,t.play(),c.push(r.dataset.letter),u.forEach((function(e){return e.addEventListener("transitionend",a)})))}));n.addEventListener("click",(function(){c.forEach((function(e,t){setTimeout((function(){var t,r;t=e,r=document.querySelector('audio[data-letter="'.concat(t,'"]')),document.querySelector('div[data-letter="'.concat(t,'"]')).classList.add("sound"),r.currentTime=0,r.play()}),500*(t+1))}))})),o.addEventListener("click",(function(){c=[]}))},function(e,t,r){}]);