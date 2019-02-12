!function(e,t,n,r){(n=e.createElement(t)).async=1,n.src="//"+(location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",(r=e.getElementsByTagName(t)[0]).parentNode.insertBefore(n,r)}(document,"script"),function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";var A="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,n=(function(z){!function(){function $(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}$.normalize=function(e){return Array.isArray(e)?$("[",void 0,void 0,$.normalizeChildren(e),void 0,void 0):null!=e&&"object"!=typeof e?$("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},$.normalizeChildren=function(e){for(var t=0;t<e.length;t++)e[t]=$.normalize(e[t]);return e};var u=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,s={},f={}.hasOwnProperty;function c(e){for(var t in e)if(f.call(e,t))return!1;return!0}function e(e){var t,n=arguments[1],r=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var o=s[e]||function(e){for(var t,n="div",r=[],o={};t=u.exec(e);){var i=t[1],l=t[2];if(""===i&&""!==l)n=l;else if("#"===i)o.id=l;else if("."===i)r.push(l);else if("["===t[3][0]){var a=t[6];a&&(a=a.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(a):o[t[4]]=""===a?a:a||!0}}return 0<r.length&&(o.className=r.join(" ")),s[e]={tag:n,attrs:o}}(e);if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},r=1),arguments.length===r+1)t=arguments[r],Array.isArray(t)||(t=[t]);else for(t=[];r<arguments.length;)t.push(arguments[r++]);var i=$.normalizeChildren(t);return"string"==typeof e?function(e,t,n){var r,o,i=!1,l=t.className||t.class;if(!c(e.attrs)&&!c(t)){var a={};for(var u in t)f.call(t,u)&&(a[u]=t[u]);t=a}for(var u in e.attrs)f.call(e.attrs,u)&&(t[u]=e.attrs[u]);for(var u in void 0!==l&&(void 0!==t.class&&(t.class=void 0,t.className=l),null!=e.attrs.className&&(t.className=e.attrs.className+" "+l)),t)if(f.call(t,u)&&"key"!==u){i=!0;break}return Array.isArray(n)&&1===n.length&&null!=n[0]&&"#"===n[0].tag?o=n[0].children:r=n,$(e.tag,t.key,i?t:void 0,r,o)}(o,n,i):$(e,n.key,n,i)}e.trust=function(e){return null==e&&(e=""),$("<",void 0,void 0,e,void 0,void 0)},e.fragment=function(e,t){return $("[",e.key,e,$.normalizeChildren(t),void 0,void 0)};var t=e;if((d=function(e){if(!(this instanceof d))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var i=this,l=[],a=[],o=t(l,!0),u=t(a,!1),s=i._instance={resolvers:l,rejectors:a},f="function"==typeof setImmediate?setImmediate:setTimeout;function t(r,o){return function t(n){var e;try{if(!o||null==n||"object"!=typeof n&&"function"!=typeof n||"function"!=typeof(e=n.then))f(function(){o||0!==r.length||console.error("Possible unhandled promise rejection:",n);for(var e=0;e<r.length;e++)r[e](n);l.length=0,a.length=0,s.state=o,s.retry=function(){t(n)}});else{if(n===i)throw new TypeError("Promise can't be resolved w/ itself");c(e.bind(n))}}catch(e){u(e)}}}function c(e){var n=0;function t(t){return function(e){0<n++||t(e)}}var r=t(u);try{e(t(o),r)}catch(e){r(e)}}c(e)}).prototype.then=function(e,t){var o,i,l=this._instance;function n(t,e,n,r){e.push(function(e){if("function"!=typeof t)n(e);else try{o(t(e))}catch(e){i&&i(e)}}),"function"==typeof l.retry&&r===l.state&&l.retry()}var r=new d(function(e,t){o=e,i=t});return n(e,l.resolvers,o,!0),n(t,l.rejectors,i,!1),r},d.prototype.catch=function(e){return this.then(null,e)},d.resolve=function(t){return t instanceof d?t:new d(function(e){e(t)})},d.reject=function(n){return new d(function(e,t){t(n)})},d.all=function(a){return new d(function(n,r){var o=a.length,i=0,l=[];if(0===a.length)n([]);else for(var e=0;e<a.length;e++)!function(t){function e(e){i++,l[t]=e,i===o&&n(l)}null==a[t]||"object"!=typeof a[t]&&"function"!=typeof a[t]||"function"!=typeof a[t].then?e(a[t]):a[t].then(e,r)}(e)})},d.race=function(r){return new d(function(e,t){for(var n=0;n<r.length;n++)r[n].then(e,t)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=d);var d=window.Promise}else if(void 0!==A){void 0===A.Promise&&(A.Promise=d);d=A.Promise}var p=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var r=[];for(var t in e)o(t,e[t]);return r.join("&");function o(e,t){if(Array.isArray(t))for(var n=0;n<t.length;n++)o(e+"["+n+"]",t[n]);else if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)o(e+"["+n+"]",t[n]);else r.push(encodeURIComponent(e)+(null!=t&&""!==t?"="+encodeURIComponent(t):""))}},m=new RegExp("^file://","i"),n=function(u,r){var t,i=0;function l(){var o=0;function i(){0==--o&&"function"==typeof t&&t()}return function t(n){var r=n.then;return n.then=function(){o++;var e=r.apply(n,arguments);return e.then(i,function(e){if(i(),0===o)throw e}),t(e)},n}}function s(e,t){if("string"==typeof e){var n=e;null==(e=t||{}).url&&(e.url=n)}return e}function f(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function c(e,t){var n=p(t);if(""!==n){var r=e.indexOf("?")<0?"?":"&";e+=r+n}return e}function d(t){try{return""!==t?JSON.parse(t):null}catch(e){throw new Error(t)}}function v(e){return e.responseText}function h(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}return{request:function(a,e){var t=l();a=s(a,e);var n=new r(function(r,o){null==a.method&&(a.method="GET"),a.method=a.method.toUpperCase();var e="GET"!==a.method&&"TRACE"!==a.method&&("boolean"!=typeof a.useBody||a.useBody);"function"!=typeof a.serialize&&(a.serialize="undefined"!=typeof FormData&&a.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof a.deserialize&&(a.deserialize=d),"function"!=typeof a.extract&&(a.extract=v),a.url=f(a.url,a.data),e?a.data=a.serialize(a.data):a.url=c(a.url,a.data);var i=new u.XMLHttpRequest,l=!1,t=i.abort;for(var n in i.abort=function(){l=!0,t.call(i)},i.open(a.method,a.url,"boolean"!=typeof a.async||a.async,"string"==typeof a.user?a.user:void 0,"string"==typeof a.password?a.password:void 0),a.serialize!==JSON.stringify||!e||a.headers&&a.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),a.deserialize!==d||a.headers&&a.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),a.withCredentials&&(i.withCredentials=a.withCredentials),a.headers)({}).hasOwnProperty.call(a.headers,n)&&i.setRequestHeader(n,a.headers[n]);"function"==typeof a.config&&(i=a.config(i,a)||i),i.onreadystatechange=function(){if(!l&&4===i.readyState)try{var e=a.extract!==v?a.extract(i,a):a.deserialize(a.extract(i,a));if(200<=i.status&&i.status<300||304===i.status||m.test(a.url))r(h(a.type,e));else{var t=new Error(i.responseText);for(var n in e)t[n]=e[n];o(t)}}catch(e){o(e)}},e&&null!=a.data?i.send(a.data):i.send()});return!0===a.background?n:t(n)},jsonp:function(o,e){var t=l();o=s(o,e);var n=new r(function(t,e){var n=o.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+i++,r=u.document.createElement("script");u[n]=function(e){r.parentNode.removeChild(r),t(h(o.type,e)),delete u[n]},r.onerror=function(){r.parentNode.removeChild(r),e(new Error("JSONP request failed")),delete u[n]},null==o.data&&(o.data={}),o.url=f(o.url,o.data),o.data[o.callbackKey||"callback"]=n,r.src=c(o.url,o.data),u.document.documentElement.appendChild(r)});return!0===o.background?n:t(n)},setCompletionCallback:function(e){t=e}}}(window,d),r=function(e){var l,d=e.document,s=d.createDocumentFragment(),t={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function v(e){return e.attrs&&e.attrs.xmlns||t[e.tag]}function b(e,t,n,r,o,i,l){for(var a=n;a<r;a++){var u=t[a];null!=u&&x(e,u,o,l,i)}}function x(e,t,n,r,o){var i,l,a,u=t.tag;if("string"!=typeof u)return function(e,t,n,r,o){{if(p(t,n),null==t.instance)return t.domSize=0,s;var i=x(e,t.instance,n,r,o);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,z(e,i,o),i}}(e,t,n,r,o);switch(t.state={},null!=t.attrs&&T(t.attrs,t,n),u){case"#":return i=e,a=o,(l=t).dom=d.createTextNode(l.children),z(i,l.dom,a),l.dom;case"<":return h(e,t,o);case"[":return function(e,t,n,r,o){var i=d.createDocumentFragment();if(null!=t.children){var l=t.children;b(i,l,0,l.length,n,null,r)}return t.dom=i.firstChild,t.domSize=i.childNodes.length,z(e,i,o),i}(e,t,n,r,o);default:return function(e,t,n,r,o){var i=t.tag,l=t.attrs,a=l&&l.is,u=(r=v(t)||r)?a?d.createElementNS(r,i,{is:a}):d.createElementNS(r,i):a?d.createElement(i,{is:a}):d.createElement(i);t.dom=u,null!=l&&function(e,t,n){for(var r in t)w(e,r,null,t[r],n)}(t,l,r);if(z(e,u,o),null!=t.attrs&&null!=t.attrs.contenteditable)g(t);else if(null!=t.text&&(""!==t.text?u.textContent=t.text:t.children=[$("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var s=t.children;b(u,s,0,s.length,n,null,r),c=(f=t).attrs,"select"===f.tag&&null!=c&&("value"in c&&w(f,"value",null,c.value,void 0),"selectedIndex"in c&&w(f,"selectedIndex",null,c.selectedIndex,void 0))}var f,c;return u}(e,t,n,r,o)}}function h(e,t,n){var r={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(t.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",o=d.createElement(r);o.innerHTML=t.children,t.dom=o.firstChild,t.domSize=o.childNodes.length;for(var i,l=d.createDocumentFragment();i=o.firstChild;)l.appendChild(i);return z(e,l,n),l}function p(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(n=e.state.view).$$reentrantLock$$)return s;n.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(n=e.tag).$$reentrantLock$$)return s;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&T(e.attrs,e,t),T(e._state,e,t),e.instance=$.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null}function m(e,t,n,r,o,i,l){if(t!==n&&(null!=t||null!=n))if(null==t)b(e,n,0,n.length,o,i,l);else if(null==n)A(t,0,t.length,n);else{if(t.length===n.length){for(var a=!1,u=0;u<n.length;u++)if(null!=n[u]&&null!=t[u]){a=null==n[u].key&&null==t[u].key;break}if(a){for(u=0;u<t.length;u++)t[u]!==n[u]&&(null==t[u]&&null!=n[u]?x(e,n[u],o,l,E(t,u+1,i)):null==n[u]?A(t,u,u+1,n):k(e,t[u],n[u],o,E(t,u+1,i),r,l));return}}if(r=r||function(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}(t,n)){var s=t.pool;t=t.concat(t.pool)}for(var f,c=0,d=0,v=t.length-1,h=n.length-1;c<=v&&d<=h;){if((m=t[c])!==(g=n[d])||r)if(null==m)c++;else if(null==g)d++;else if(m.key===g.key){var p=null!=s&&c>=t.length-s.length||null==s&&r;d++,k(e,m,g,o,E(t,++c,i),p,l),r&&m.tag===g.tag&&z(e,C(m),i)}else{if((m=t[v])!==g||r)if(null==m)v--;else if(null==g)d++;else{if(m.key!==g.key)break;p=null!=s&&v>=t.length-s.length||null==s&&r;k(e,m,g,o,E(t,v+1,i),p,l),(r||d<h)&&z(e,C(m),E(t,c,i)),v--,d++}else v--,d++}else c++,d++}for(;c<=v&&d<=h;){var m,g;if((m=t[v])!==(g=n[h])||r)if(null==m)v--;else if(null==g)h--;else if(m.key===g.key){p=null!=s&&v>=t.length-s.length||null==s&&r;k(e,m,g,o,E(t,v+1,i),p,l),r&&m.tag===g.tag&&z(e,C(m),i),null!=m.dom&&(i=m.dom),v--,h--}else{if(f||(f=S(t,v)),null!=g){var y=f[g.key];if(null!=y){var w=t[y];p=null!=s&&y>=t.length-s.length||null==s&&r;k(e,w,g,o,E(t,v+1,i),r,l),z(e,C(w),i),t[y].skip=!0,null!=w.dom&&(i=w.dom)}else{i=x(e,g,o,l,i)}}h--}else v--,h--;if(h<d)break}b(e,n,d,h+1,o,i,l),A(t,c,v+1,n)}}function k(e,t,n,r,o,i,l){var a,u,s,f,c=t.tag;if(c===n.tag){if(n.state=t.state,n._state=t._state,n.events=t.events,!i&&function(e,t){var n,r;null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t));return!(void 0===n&&void 0===r||n||r||(e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,0))}(n,t))return;if("string"==typeof c)switch(null!=n.attrs&&(i?(n.state={},T(n.attrs,n,r)):O(n.attrs,n,r)),c){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(t,n);break;case"<":a=e,s=n,f=o,(u=t).children!==s.children?(C(u),h(a,s,f)):(s.dom=u.dom,s.domSize=u.domSize);break;case"[":!function(e,t,n,r,o,i,l){m(e,t.children,n.children,r,o,i,l);var a=0,u=n.children;if((n.dom=null)!=u){for(var s=0;s<u.length;s++){var f=u[s];null!=f&&null!=f.dom&&(null==n.dom&&(n.dom=f.dom),a+=f.domSize||1)}1!==a&&(n.domSize=a)}}(e,t,n,i,r,o,l);break;default:!function(e,t,n,r,o){var i=t.dom=e.dom;o=v(t)||o,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)w(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||N(o)?"key"!==o&&e.dom.removeAttribute(o):j(e,o,void 0))})(t,e.attrs,t.attrs,o),null!=t.attrs&&null!=t.attrs.contenteditable?g(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[$("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[$("#",void 0,void 0,t.text,void 0,void 0)]),m(i,e.children,t.children,n,r,null,o))}(t,n,i,r,l)}else!function(e,t,n,r,o,i,l){if(i)p(n,r);else{if(n.instance=$.normalize(n._state.view.call(n.state,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");null!=n.attrs&&O(n.attrs,n,r),O(n._state,n,r)}null!=n.instance?(null==t.instance?x(e,n.instance,r,l,o):k(e,t.instance,n.instance,r,o,i,l),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(y(t.instance,null),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,r,o,i,l)}else y(t,null),x(e,n,r,l,o)}function S(e,t){var n={},r=0;for(r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function C(e){var t=e.domSize;if(null==t&&null!=e.dom)return e.dom;var n=d.createDocumentFragment();if(0<t){for(var r=e.dom;--t;)n.appendChild(r.nextSibling);n.insertBefore(r,n.firstChild)}return n}function E(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function z(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function g(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function A(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:y(i,r))}}function y(r,o){var e,i=1,l=0;r.attrs&&"function"==typeof r.attrs.onbeforeremove&&(null!=(e=r.attrs.onbeforeremove.call(r.state,r))&&"function"==typeof e.then&&(i++,e.then(t,t)));"string"!=typeof r.tag&&"function"==typeof r._state.onbeforeremove&&(null!=(e=r._state.onbeforeremove.call(r.state,r))&&"function"==typeof e.then&&(i++,e.then(t,t)));function t(){if(++l===i&&(function e(t){t.attrs&&"function"==typeof t.attrs.onremove&&t.attrs.onremove.call(t.state,t);if("string"!=typeof t.tag)"function"==typeof t._state.onremove&&t._state.onremove.call(t.state,t),null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(r),r.dom)){var e=r.domSize||1;if(1<e)for(var t=r.dom;--e;)a(t.nextSibling);a(r.dom),null==o||null!=r.domSize||null!=(n=r.attrs)&&(n.oncreate||n.onupdate||n.onbeforeremove||n.onremove)||"string"!=typeof r.tag||(o.pool?o.pool.push(r):o.pool=[r])}var n}t()}function a(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function w(e,t,n,r,o){var i=e.dom;if("key"!==t&&"is"!==t&&(n!==r||(l=e,"value"===(a=t)||"checked"===a||"selectedIndex"===a||"selected"===a&&l.dom===d.activeElement)||"object"==typeof r)&&void 0!==r&&!N(t)){var l,a,u,s,f=t.indexOf(":");if(-1<f&&"xlink"===t.substr(0,f))i.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(f+1),r);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof r)j(e,t,r);else if("style"===t)!function(e,t,n){t===n&&(e.style.cssText="",t=null);if(null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{for(var r in"string"==typeof t&&(e.style.cssText=""),n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}(i,n,r);else if(t in i&&("href"!==(s=t)&&"list"!==s&&"form"!==s&&"width"!==s&&"height"!==s)&&void 0===o&&!((u=e).attrs.is||-1<u.tag.indexOf("-"))){if("value"===t){var c=""+r;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===c&&e.dom===d.activeElement)return;if("select"===e.tag)if(null===r){if(-1===e.dom.selectedIndex&&e.dom===d.activeElement)return}else if(null!==n&&e.dom.value===c&&e.dom===d.activeElement)return;if("option"===e.tag&&null!=n&&e.dom.value===c)return}if("input"===e.tag&&"type"===t)return void i.setAttribute(t,r);i[t]=r}else"boolean"==typeof r?r?i.setAttribute(t,""):i.removeAttribute(t):i.setAttribute("className"===t?"class":t,r)}}function N(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function j(e,t,n){var r=e.dom,o="function"!=typeof l?n:function(e){var t=n.call(r,e);return l.call(r,e),t};if(t in r)r[t]="function"==typeof n?o:null;else{var i=t.slice(2);if(void 0===e.events&&(e.events={}),e.events[t]===o)return;null!=e.events[t]&&r.removeEventListener(i,e.events[t],!1),"function"==typeof n&&(e.events[t]=o,r.addEventListener(i,e.events[t],!1))}}function T(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function O(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}return{render:function(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var n=[],r=d.activeElement,o=e.namespaceURI;null==e.vnodes&&(e.textContent=""),Array.isArray(t)||(t=[t]),m(e,e.vnodes,$.normalizeChildren(t),!1,n,null,"http://www.w3.org/1999/xhtml"===o?void 0:o),e.vnodes=t,null!=r&&d.activeElement!==r&&r.focus();for(var i=0;i<n.length;i++)n[i]()},setEventCallback:function(e){return l=e}}};var o=function(e){var t=r(e);t.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:n()});var l=[];function a(e){var t=l.indexOf(e);-1<t&&l.splice(t,2)}function n(){for(var e=1;e<l.length;e+=2)l[e]()}return{subscribe:function(e,t){var n,r,o,i;a(e),l.push(e,(n=t,r=0,o=null,i="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout,function(){var e=Date.now();0===r||16<=e-r?(r=e,n()):null===o&&(o=i(function(){o=null,n(),r=Date.now()},16-(e-r)))}))},unsubscribe:a,redraw:n,render:t.render}}(window);n.setCompletionCallback(o.redraw);var i;t.mount=(i=o,function(e,t){if(null===t)return i.render(e,[]),void i.unsubscribe(e);if(null==t.view&&"function"!=typeof t)throw new Error("m.mount(element, component) expects a component, not a vnode");i.subscribe(e,function(){i.render(e,$(t))}),i.redraw()});var l,a,v,h,g,y,w,b,x,k=d,S=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),s=n;-1<l.indexOf("[")&&u.pop();for(var f=0;f<u.length;f++){var c=u[f],d=u[f+1],v=""==d||!isNaN(parseInt(d,10)),h=f===u.length-1;if(""===c)null==r[l=u.slice(0,f).join()]&&(r[l]=0),c=r[l]++;null==s[c]&&(s[c]=h?a:v?[]:{}),s=s[c]}}return n},C=function(f){var n,c="function"==typeof f.history.pushState,r="function"==typeof setImmediate?setImmediate:setTimeout;function e(e){var t=f.location[e].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===e&&"/"!==t[0]&&(t="/"+t),t}function d(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=-1<r?r:-1<o?o:e.length;if(-1<r){var l=-1<o?o:e.length,a=S(e.slice(r+1,l));for(var u in a)t[u]=a[u]}if(-1<o){var s=S(e.slice(o+1));for(var u in s)n[u]=s[u]}return e.slice(0,i)}var v={prefix:"#!",getPath:function(){switch(v.prefix.charAt(0)){case"#":return e("hash").slice(v.prefix.length);case"?":return e("search").slice(v.prefix.length)+e("hash");default:return e("pathname").slice(v.prefix.length)+e("search")+e("hash")}},setPath:function(e,n,t){var r={},o={};if(e=d(e,r,o),null!=n){for(var i in n)r[i]=n[i];e=e.replace(/:([^\/]+)/g,function(e,t){return delete r[t],n[t]})}var l=p(r);l&&(e+="?"+l);var a=p(o);if(a&&(e+="#"+a),c){var u=t?t.state:null,s=t?t.title:null;f.onpopstate(),t&&t.replace?f.history.replaceState(u,s,v.prefix+e):f.history.pushState(u,s,v.prefix+e)}else f.location.href=v.prefix+e}};return v.defineRoutes=function(a,u,s){function e(){var r=v.getPath(),o={},e=d(r,o,o),t=f.history.state;if(null!=t)for(var n in t)o[n]=t[n];for(var i in a){var l=new RegExp("^"+i.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(l.test(e))return void e.replace(l,function(){for(var e=i.match(/:[^\/]+/g)||[],t=[].slice.call(arguments,1,-2),n=0;n<e.length;n++)o[e[n].replace(/:|\./g,"")]=decodeURIComponent(t[n]);u(a[i],o,r,i)})}s(r,o)}var t;c?f.onpopstate=(t=e,function(){null==n&&(n=r(function(){n=null,t()}))}):"#"===v.prefix.charAt(0)&&(f.onhashchange=e),e()},v};t.route=(l=window,a=o,b=C(l),(x=function(e,t,n){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var i=function(){null!=v&&a.render(e,v($(h,g.key,g)))},l=function(e){if(e===t)throw new Error("Could not resolve default route "+t);b.setPath(t,null,{replace:!0})};b.defineRoutes(n,function(t,n,r){var o=w=function(e,t){o===w&&(h=null==t||"function"!=typeof t.view&&"function"!=typeof t?"div":t,g=n,y=r,w=null,v=(e.render||function(e){return e}).bind(e),i())};t.view||"function"==typeof t?o({},t):t.onmatch?k.resolve(t.onmatch(n,r)).then(function(e){o(t,e)},l):o(t,"div")},l),a.subscribe(e,i)}).set=function(e,t,n){null!=w&&((n=n||{}).replace=!0),w=null,b.setPath(e,t,n)},x.get=function(){return y},x.prefix=function(e){b.prefix=e},x.link=function(e){e.dom.setAttribute("href",b.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(b.prefix)&&(t=t.slice(b.prefix.length)),x.set(t,void 0,void 0)}}},x.param=function(e){return void 0!==g&&void 0!==e?g[e]:g},x),t.withAttr=function(t,n,r){return function(e){n.call(r||this,t in e.currentTarget?e.currentTarget[t]:e.currentTarget.getAttribute(t))}};var E=r(window);t.render=E.render,t.redraw=o.redraw,t.request=n.request,t.jsonp=n.jsonp,t.parseQueryString=S,t.buildQueryString=p,t.version="1.1.6",t.vnode=$,z.exports=t}()}(e={exports:{}},e.exports),e.exports),r=".pa4.sans-serif",o="h1.med-gray.f3",i="a.link.underline-hover.blue",t="ul.list.pl0",l="li.mv1",a=[{path:"/page",module:{view:function(e){var t=e.attrs;return n(r,[n(o,t.title||"Page"),n(i,{href:"/",oncreate:n.route.link},"Back")])}},name:"Link to Page"}],u={view:function(){return n(r,[n(o,"Home"),n(t,a.map(function(e){return n(l,n(i,{href:e.path,oncreate:n.route.link},e.name))}))])}};n.route.prefix("");var s=document.querySelector("#app"),f={"/":u};a.forEach(function(e){return f[e.path]=e.module}),n.route(s,"/",f)});
//# sourceMappingURL=bundle.js.map
