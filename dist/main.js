(()=>{var e={99:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(15),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body{background:green}\n","",{version:3,sources:["webpack://./src/styles.scss"],names:[],mappings:"AAAA,KACE,gBAAiB",sourcesContent:["body{\n  background: green;\n}"],sourceRoot:""}]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=i(l),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:v(f,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var a=h++;n=p||(p=c(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var c=s(e,t),u=0;u<n.length;u++){var l=i(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=c}}}},698:()=>{class e{constructor(e){this.name=e,this.todos=[]}addToLists(){t.push(this)}assignToDos(e){this.todos.push(e)}deleteList(){let e=t.find((e=>e.name==this.name)),n=t.indexOf(e);n>-1&&t.splice(n,1)}}const t=new Array,n=new e("Tasks");t.push(n);const r=new e("Work");r.addToLists(),r.deleteList(),console.log(t)}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(698),t=n.n(e),r=n(379),o=n.n(r),a=n(99);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=new(t())("Tasks");[].push(i)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJfaSIsIl9hcnJheUxpa2VUb0FycmF5IiwiYXJyIiwibGVuIiwiYXJyMiIsIkFycmF5IiwiX2l0ZW0iLCJpc0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJPYmplY3QiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwidW5kZWZpbmVkIiwiX3MiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXJyIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwibyIsIm1pbkxlbiIsIm4iLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIlR5cGVFcnJvciIsIl9ub25JdGVyYWJsZVJlc3QiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwibWVtbyIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZFN0eWxlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiYXR0cmlidXRlcyIsIm5vbmNlIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJyZXBsYWNlbWVudCIsImZpbHRlciIsIkJvb2xlYW4iLCJhcHBseVRvU2luZ2xldG9uVGFnIiwicmVtb3ZlIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjc3NOb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBseVRvVGFnIiwicmVtb3ZlQXR0cmlidXRlIiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwiYmluZCIsInBhcmVudE5vZGUiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJuZXdPYmoiLCJhbGwiLCJhdG9iIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCIsInNwbGljZSIsIkxpc3QiLCJ0b2RvcyIsImFsbExpc3RzIiwiZmluZCIsImluZGV4T2YiLCJkZWZhdWx0TGlzdCIsImFkZFRvTGlzdHMiLCJkZWxldGVMaXN0IiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoic0ZBR0lBLEUsTUFBMEIsR0FBNEIsS0FFMURBLEVBQXdCQyxLQUFLLENBQUNDLEVBQU9DLEdBQUksMkJBQTRCLEdBQUcsQ0FBQyxRQUFVLEVBQUUsUUFBVSxDQUFDLCtCQUErQixNQUFRLEdBQUcsU0FBVyxtQkFBbUIsZUFBaUIsQ0FBQyxrQ0FBa0Ms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N0osRUFBU3FHLEVBQUssQ0FBRXlELFlBQVksRUFBTUMsSUFBS0gsRUFBV3ZELE1DSjNFZ0QsRUFBb0I5RyxFQUFJLENBQUNnRCxFQUFLeUUsSUFBU3JJLE9BQU9lLFVBQVV1SCxlQUFldEgsS0FBSzRDLEVBQUt5RSxHLG1FQ1FwRSxJQUFJLElBTEgsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixJQU1MLFdBQWYsTUNQTWpCLEVBQWMsSUFBSSxJQUFKLENBQVMsU0FEWixHQUVSbEosS0FBS2tKLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtiYWNrZ3JvdW5kOmdyZWVufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxLQUNFLGdCQUFpQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBMaXN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG5cbiAgYWRkVG9MaXN0cygpIHtcbiAgICBhbGxMaXN0cy5wdXNoKHRoaXMpO1xuICB9XG5cbiAgYXNzaWduVG9Eb3ModG9kb3MpIHtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kb3MpO1xuICB9XG5cbiAgZGVsZXRlTGlzdCgpIHtcbiAgICBsZXQgbGlzdCA9IGFsbExpc3RzLmZpbmQoZSA9PiBlLm5hbWUgPT0gdGhpcy5uYW1lKVxuICAgIGxldCBpbmRleCA9IGFsbExpc3RzLmluZGV4T2YobGlzdCk7XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGFsbExpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGFsbExpc3RzID0gbmV3IEFycmF5KCk7XG5jb25zdCBkZWZhdWx0TGlzdCA9IG5ldyBMaXN0KFwiVGFza3NcIik7XG5hbGxMaXN0cy5wdXNoKGRlZmF1bHRMaXN0KTtcblxuY29uc3QgbmV3TGlzdCA9IG5ldyBMaXN0KCdXb3JrJyk7XG5uZXdMaXN0LmFkZFRvTGlzdHMoKVxubmV3TGlzdC5kZWxldGVMaXN0KClcblxuXG5jb25zb2xlLmxvZyhhbGxMaXN0cylcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL3RvZG9pdGVtcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5jb25zdCBhbGxMaXN0cyA9IFtdO1xuY29uc3QgZGVmYXVsdExpc3QgPSBuZXcgTGlzdCgnVGFza3MnKTtcbmFsbExpc3RzLnB1c2goZGVmYXVsdExpc3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==