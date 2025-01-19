/*! For license information please see tsub-middleware.js.LICENSE.txt */
(self.webpackChunkmarketing_with_google_verification_tag=self.webpackChunkmarketing_with_google_verification_tag||[]).push([[10],{5152:(t,r,e)=>{"use strict";e.r(r),e.d(r,{tsubMiddleware:()=>s});var n=e(6905),s=function(t){return function(r){var e=r.payload,s=r.integration,o=r.next;new n.Store(t).getRulesByDestinationName(s).forEach((function(t){for(var r=t.matchers,s=t.transformers,i=0;i<r.length;i++)if(n.matches(e.obj,r[i])&&(e.obj=n.transform(e.obj,s[i]),null===e.obj))return o(null)})),o(e)}}},6905:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.Store=r.matches=r.transform=void 0;var s=e(8581);Object.defineProperty(r,"transform",{enumerable:!0,get:function(){return n(s).default}});var o=e(6898);Object.defineProperty(r,"matches",{enumerable:!0,get:function(){return n(o).default}});var i=e(6720);Object.defineProperty(r,"Store",{enumerable:!0,get:function(){return n(i).default}})},6898:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e(2300));function o(t,r){if(!Array.isArray(t))return!0===i(t,r);var e,n,s,f,p=t[0];switch(p){case"!":return!o(t[1],r);case"or":for(var l=1;l<t.length;l++)if(o(t[l],r))return!0;return!1;case"and":for(l=1;l<t.length;l++)if(!o(t[l],r))return!1;return!0;case"=":case"!=":return function(t,r,e,n){switch(a(t)&&(t=o(t,n)),a(r)&&(r=o(r,n)),"object"==typeof t&&"object"==typeof r&&(t=JSON.stringify(t),r=JSON.stringify(r)),e){case"=":return t===r;case"!=":return t!==r;default:throw new Error("Invalid operator in compareItems: ".concat(e))}}(i(t[1],r),i(t[2],r),p,r);case"<=":case"<":case">":case">=":return function(t,r,e,n){if(a(t)&&(t=o(t,n)),a(r)&&(r=o(r,n)),"number"!=typeof t||"number"!=typeof r)return!1;switch(e){case"<=":return t<=r;case">=":return t>=r;case"<":return t<r;case">":return t>r;default:throw new Error("Invalid operator in compareNumbers: ".concat(e))}}(i(t[1],r),i(t[2],r),p,r);case"contains":return s=i(t[1],r),f=i(t[2],r),"string"==typeof s&&"string"==typeof f&&-1!==s.indexOf(f);case"match":return e=i(t[1],r),n=i(t[2],r),"string"==typeof e&&"string"==typeof n&&function(t,r){var e,n;t:for(;t.length>0;){var s,o;if(s=(e=u(t)).star,o=e.chunk,t=e.pattern,s&&""===o)return!0;var i=c(o,r),a=i.t,f=i.ok,p=i.err;if(p)return!1;if(!f||!(0===a.length||t.length>0)){if(s)for(var l=0;l<r.length;l++){if(a=(n=c(o,r.slice(l+1))).t,f=n.ok,p=n.err,f){if(0===t.length&&a.length>0)continue;r=a;continue t}if(p)return!1}return!1}r=a}return 0===r.length}(n,e);case"lowercase":var v=i(t[1],r);return"string"!=typeof v?null:v.toLowerCase();case"typeof":return typeof i(t[1],r);case"length":return function(t){return null===t?0:Array.isArray(t)||"string"==typeof t?t.length:NaN}(i(t[1],r));default:throw new Error("FQL IR could not evaluate for token: ".concat(p))}}function i(t,r){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,s.default)(r,t)}function a(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function u(t){for(var r={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),r.star=!0;var e,n=!1;t:for(e=0;e<t.length;e++)switch(t[e]){case"\\":e+1<t.length&&e++;break;case"[":n=!0;break;case"]":n=!1;break;case"*":if(!n)break t}return r.chunk=t.slice(0,e),r.pattern=t.slice(e),r}function c(t,r){for(var e,n,s={t:"",ok:!1,err:!1};t.length>0;){if(0===r.length)return s;switch(t[0]){case"[":var o=r[0];r=r.slice(1);var i=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(i=!1,t=t.slice(1));for(var a=!1,u=0;;){if(t.length>0&&"]"===t[0]&&u>0){t=t.slice(1);break}var c,p="";if(c=(e=f(t)).char,t=e.newChunk,e.err)return s;if(p=c,"-"===t[0]&&(p=(n=f(t.slice(1))).char,t=n.newChunk,n.err))return s;c<=o&&o<=p&&(a=!0),u++}if(a!==i)return s;break;case"?":r=r.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return s.err=!0,s;default:if(t[0]!==r[0])return s;r=r.slice(1),t=t.slice(1)}}return s.t=r,s.ok=!0,s.err=!1,s}function f(t){var r={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?(r.err=!0,r):(r.char=t[0],r.newChunk=t.slice(1),0===r.newChunk.length&&(r.err=!0),r)}r.default=function(t,r){if(!r)throw new Error("No matcher supplied!");switch(r.type){case"all":return!0;case"fql":return function(t,r){if(!t)return!1;try{t=JSON.parse(t)}catch(r){throw new Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(r))}var e=o(t,r);return"boolean"==typeof e&&e}(r.ir,t);default:throw new Error("Matcher of type ".concat(r.type," unsupported."))}}},6720:(t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var r=[],e=0,n=this.rules;e<n.length;e++){var s=n[e];s.destinationName!==t&&void 0!==s.destinationName||r.push(s)}return r},t}();r.default=e},8581:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0});var s=n(e(7461)),o=n(e(2300)),i=n(e(4141)),a=e(959),u=e(1412);function c(t,r){for(var e in r.drop)if(r.drop.hasOwnProperty(e)){var n=""===e?t:(0,o.default)(t,e);if("object"==typeof n&&null!==n)for(var s=0,i=r.drop[e];s<i.length;s++)delete n[i[s]]}}function f(t,r){for(var e in r.allow)if(r.allow.hasOwnProperty(e)){var n=""===e?t:(0,o.default)(t,e);if("object"==typeof n&&null!==n)for(var s in n)n.hasOwnProperty(s)&&-1===r.allow[e].indexOf(s)&&delete n[s]}}function p(t,r){var e=JSON.parse(JSON.stringify(t));for(var n in r.map)if(r.map.hasOwnProperty(n)){var s=r.map[n],i=n.split("."),c=void 0;if(i.length>1?(i.pop(),c=(0,o.default)(e,i.join("."))):c=t,"object"==typeof c){if(s.copy){var f=(0,o.default)(e,s.copy);void 0!==f&&(0,a.dset)(t,n,f)}else if(s.move){var p=(0,o.default)(e,s.move);void 0!==p&&(0,a.dset)(t,n,p),(0,u.unset)(t,s.move)}else s.hasOwnProperty("set")&&(0,a.dset)(t,n,s.set);if(s.to_string){var l=(0,o.default)(t,n);if("string"==typeof l||"object"==typeof l&&null!==l)continue;void 0!==l?(0,a.dset)(t,n,JSON.stringify(l)):(0,a.dset)(t,n,"undefined")}}}}function l(t,r){return!(r.sample.percent<=0)&&(r.sample.percent>=1||(r.sample.path?function(t,r){var e=(0,o.default)(t,r.sample.path),n=(0,s.default)(JSON.stringify(e)),a=-64,u=[];v(n.slice(0,8),u);for(var c=0,f=0;f<64&&1!==u[f];f++)c++;if(0!==c){var p=[];v(n.slice(9,16),p),a-=c,u.splice(0,c),p.splice(64-c),u=u.concat(p)}return u[63]=0===u[63]?1:0,(0,i.default)(parseInt(u.join(""),2),a)<r.sample.percent}(t,r):(e=r.sample.percent,Math.random()<=e)));var e}function v(t,r){for(var e=0;e<8;e++)for(var n=t[e],s=128;s>=1;s/=2)n-s>=0?(n-=s,r.push(1)):r.push(0)}r.default=function(t,r){for(var e=t,n=0,s=r;n<s.length;n++){var o=s[n];switch(o.type){case"drop":return null;case"drop_properties":c(e,o.config);break;case"allow_properties":f(e,o.config);break;case"sample_event":if(l(e,o.config))break;return null;case"map_properties":p(e,o.config);break;case"hash_properties":break;default:throw new Error('Transformer of type "'.concat(o.type,'" is unsupported.'))}}return e}},1412:function(t,r,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(r,"__esModule",{value:!0}),r.unset=void 0;var s=n(e(2300));r.unset=function(t,r){if((0,s.default)(t,r)){for(var e=r.split("."),n=e.pop();e.length&&"\\"===e[e.length-1].slice(-1);)n=e.pop().slice(0,-1)+"."+n;for(;e.length;)t=t[r=e.shift()];return delete t[n]}return!0}},3441:t=>{"use strict";var r="function"==typeof Float64Array?Float64Array:void 0;t.exports=r},2466:(t,r,e)=>{"use strict";var n,s=e(8782),o=e(3441),i=e(9955);n=s()?o:i,t.exports=n},9955:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},8968:(t,r,e)=>{"use strict";var n,s=e(642),o=e(5720),i=e(1161);n=s()?o:i,t.exports=n},1161:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},5720:t=>{"use strict";var r="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=r},8396:(t,r,e)=>{"use strict";var n,s=e(1490),o=e(4326),i=e(6997);n=s()?o:i,t.exports=n},6997:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},4326:t=>{"use strict";var r="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=r},7379:(t,r,e)=>{"use strict";var n,s=e(2526),o=e(5326),i=e(1296);n=s()?o:i,t.exports=n},1296:t=>{"use strict";t.exports=function(){throw new Error("not implemented")}},5326:t=>{"use strict";var r="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=r},2301:t=>{"use strict";var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},8782:(t,r,e)=>{"use strict";var n=e(8129);t.exports=n},8129:(t,r,e)=>{"use strict";var n=e(1918),s=e(2301);t.exports=function(){var t,r;if("function"!=typeof s)return!1;try{r=new s([1,3.14,-3.14,NaN]),t=n(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}},3031:(t,r,e)=>{"use strict";var n=e(1522);t.exports=n},1522:t=>{"use strict";var r=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&r.call(t,e)}},4132:(t,r,e)=>{"use strict";var n=e(267);t.exports=n},267:t=>{"use strict";t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},1769:(t,r,e)=>{"use strict";var n=e(8024);t.exports=n},8024:(t,r,e)=>{"use strict";var n=e(4132)();t.exports=function(){return n&&"symbol"==typeof Symbol.toStringTag}},642:(t,r,e)=>{"use strict";var n=e(3941);t.exports=n},3941:(t,r,e)=>{"use strict";var n=e(2116),s=e(7683),o=e(9214);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=new o(r=[1,3.14,-3.14,s+1,s+2]),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},9214:t=>{"use strict";var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},1490:(t,r,e)=>{"use strict";var n=e(1669);t.exports=n},1669:(t,r,e)=>{"use strict";var n=e(4780),s=e(7999),o=e(9204);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=new o(r=[1,3.14,-3.14,s+1,s+2]),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},9204:t=>{"use strict";var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},2526:(t,r,e)=>{"use strict";var n=e(8529);t.exports=n},8529:(t,r,e)=>{"use strict";var n=e(8678),s=e(6757),o=e(4849);t.exports=function(){var t,r;if("function"!=typeof o)return!1;try{r=new o(r=[1,3.14,-3.14,s+1,s+2]),t=n(r)&&1===r[0]&&3===r[1]&&r[2]===s-2&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}},4849:t=>{"use strict";var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},1918:(t,r,e)=>{"use strict";var n=e(4321);t.exports=n},4321:(t,r,e)=>{"use strict";var n=e(2518),s="function"==typeof Float64Array;t.exports=function(t){return s&&t instanceof Float64Array||"[object Float64Array]"===n(t)}},7640:(t,r,e)=>{"use strict";var n=e(7379),s={uint16:e(8968),uint8:n};t.exports=s},5319:(t,r,e)=>{"use strict";var n=e(6050);t.exports=n},6050:(t,r,e)=>{"use strict";var n,s,o=e(7640);(s=new o.uint16(1))[0]=4660,n=52===new o.uint8(s.buffer)[0],t.exports=n},2116:(t,r,e)=>{"use strict";var n=e(283);t.exports=n},283:(t,r,e)=>{"use strict";var n=e(2518),s="function"==typeof Uint16Array;t.exports=function(t){return s&&t instanceof Uint16Array||"[object Uint16Array]"===n(t)}},4780:(t,r,e)=>{"use strict";var n=e(7699);t.exports=n},7699:(t,r,e)=>{"use strict";var n=e(2518),s="function"==typeof Uint32Array;t.exports=function(t){return s&&t instanceof Uint32Array||"[object Uint32Array]"===n(t)}},8678:(t,r,e)=>{"use strict";var n=e(8761);t.exports=n},8761:(t,r,e)=>{"use strict";var n=e(2518),s="function"==typeof Uint8Array;t.exports=function(t){return s&&t instanceof Uint8Array||"[object Uint8Array]"===n(t)}},1211:t=>{"use strict";t.exports=1023},176:t=>{"use strict";t.exports=1023},7729:t=>{"use strict";t.exports=2147483647},21:t=>{"use strict";t.exports=2146435072},4207:t=>{"use strict";t.exports=2147483648},7094:t=>{"use strict";t.exports=-1023},7702:t=>{"use strict";t.exports=1023},2174:t=>{"use strict";t.exports=-1074},5491:(t,r,e)=>{"use strict";var n=e(5267).NEGATIVE_INFINITY;t.exports=n},5390:(t,r,e)=>{"use strict";var n=e(5267).NEGATIVE_INFINITY;t.exports=n},2395:t=>{"use strict";var r=Number.POSITIVE_INFINITY;t.exports=r},2658:t=>{"use strict";var r=Number.POSITIVE_INFINITY;t.exports=r},8896:t=>{"use strict";t.exports=22250738585072014e-324},7683:t=>{"use strict";t.exports=65535},7999:t=>{"use strict";t.exports=4294967295},6757:t=>{"use strict";t.exports=255},341:(t,r,e)=>{"use strict";var n=e(5876);t.exports=n},5876:(t,r,e)=>{"use strict";var n=e(2395),s=e(5491);t.exports=function(t){return t===n||t===s}},708:(t,r,e)=>{"use strict";var n=e(6875);t.exports=n},6875:t=>{"use strict";t.exports=function(t){return t!=t}},5268:(t,r,e)=>{"use strict";var n=e(9227);t.exports=n},9227:t=>{"use strict";t.exports=function(t){return Math.abs(t)}},8787:(t,r,e)=>{"use strict";var n=e(3630);t.exports=n},3630:(t,r,e)=>{"use strict";var n=e(4207),s=e(7729),o=e(1947),i=e(8816),a=e(7300),u=[0,0];t.exports=function(t,r){var e,c;return o.assign(t,u,1,0),e=u[0],e&=s,c=i(r),a(e|=c&=n,u[1])}},4141:(t,r,e)=>{"use strict";var n=e(3306);t.exports=n},3306:(t,r,e)=>{"use strict";var n=e(2658),s=e(5390),o=e(176),i=e(7702),a=e(7094),u=e(2174),c=e(708),f=e(341),p=e(8787),l=e(561),v=e(8600),y=e(1947),h=e(7300),d=[0,0],x=[0,0];t.exports=function(t,r){var e,g;return 0===t||c(t)||f(t)?t:(l(d,t),r+=d[1],(r+=v(t=d[0]))<u?p(0,t):r>i?t<0?s:n:(r<=a?(r+=52,g=2220446049250313e-31):g=1,y(x,t),e=x[0],e&=2148532223,g*h(e|=r+o<<20,x[1])))}},5267:(t,r,e)=>{"use strict";var n=e(8442);t.exports=n},8442:t=>{"use strict";t.exports=Number},8600:(t,r,e)=>{"use strict";var n=e(1039);t.exports=n},1039:(t,r,e)=>{"use strict";var n=e(8816),s=e(21),o=e(1211);t.exports=function(t){var r=n(t);return(r=(r&s)>>>20)-o|0}},7300:(t,r,e)=>{"use strict";var n=e(6683);t.exports=n},2665:(t,r,e)=>{"use strict";var n,s,o;!0===e(5319)?(s=1,o=0):(s=0,o=1),n={HIGH:s,LOW:o},t.exports=n},6683:(t,r,e)=>{"use strict";var n=e(8396),s=e(2466),o=e(2665),i=new s(1),a=new n(i.buffer),u=o.HIGH,c=o.LOW;t.exports=function(t,r){return a[u]=t,a[c]=r,i[0]}},5238:(t,r,e)=>{"use strict";var n;n=!0===e(5319)?1:0,t.exports=n},8816:(t,r,e)=>{"use strict";var n=e(6919);t.exports=n},6919:(t,r,e)=>{"use strict";var n=e(8396),s=e(2466),o=e(5238),i=new s(1),a=new n(i.buffer);t.exports=function(t){return i[0]=t,a[o]}},4512:(t,r,e)=>{"use strict";var n=e(8896),s=e(341),o=e(708),i=e(5268);t.exports=function(t,r,e,a){return o(t)||s(t)?(r[a]=t,r[a+e]=0,r):0!==t&&i(t)<n?(r[a]=4503599627370496*t,r[a+e]=-52,r):(r[a]=t,r[a+e]=0,r)}},561:(t,r,e)=>{"use strict";var n=e(4517),s=e(80);n(s,"assign",e(4512)),t.exports=s},80:(t,r,e)=>{"use strict";var n=e(4512);t.exports=function(t){return n(t,[0,0],1,0)}},4290:(t,r,e)=>{"use strict";var n=e(8396),s=e(2466),o=e(278),i=new s(1),a=new n(i.buffer),u=o.HIGH,c=o.LOW;t.exports=function(t,r,e,n){return i[0]=t,r[n]=a[u],r[n+e]=a[c],r}},1947:(t,r,e)=>{"use strict";var n=e(4517),s=e(8454);n(s,"assign",e(4290)),t.exports=s},278:(t,r,e)=>{"use strict";var n,s,o;!0===e(5319)?(s=1,o=0):(s=0,o=1),n={HIGH:s,LOW:o},t.exports=n},8454:(t,r,e)=>{"use strict";var n=e(4290);t.exports=function(t){return n(t,[0,0],1,0)}},4517:(t,r,e)=>{"use strict";var n=e(9188);t.exports=n},9188:(t,r,e)=>{"use strict";var n=e(2255);t.exports=function(t,r,e){n(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}},6744:t=>{"use strict";var r=Object.defineProperty;t.exports=r},4074:t=>{"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;t.exports=r},5885:(t,r,e)=>{"use strict";var n=e(4074);t.exports=function(){try{return n({},"x",{}),!0}catch(t){return!1}}},2255:(t,r,e)=>{"use strict";var n,s=e(5885),o=e(6744),i=e(3444);n=s()?o:i,t.exports=n},3444:t=>{"use strict";var r=Object.prototype,e=r.toString,n=r.__defineGetter__,s=r.__defineSetter__,o=r.__lookupGetter__,i=r.__lookupSetter__;t.exports=function(t,a,u){var c,f,p,l;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof u||null===u||"[object Array]"===e.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((f="value"in u)&&(o.call(t,a)||i.call(t,a)?(c=t.__proto__,t.__proto__=r,delete t[a],t[a]=u.value,t.__proto__=c):t[a]=u.value),p="get"in u,l="set"in u,f&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(t,a,u.get),l&&s&&s.call(t,a,u.set),t}},2518:(t,r,e)=>{"use strict";var n,s=e(1769),o=e(9896),i=e(9567);n=s()?i:o,t.exports=n},9896:(t,r,e)=>{"use strict";var n=e(9600);t.exports=function(t){return n.call(t)}},9567:(t,r,e)=>{"use strict";var n=e(3031),s=e(4698),o=e(9600);t.exports=function(t){var r,e,i;if(null==t)return o.call(t);e=t[s],r=n(t,s);try{t[s]=void 0}catch(r){return o.call(t)}return i=o.call(t),r?t[s]=e:delete t[s],i}},9600:t=>{"use strict";var r=Object.prototype.toString;t.exports=r},4698:t=>{"use strict";var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},2300:function(t){t.exports=function(t,r,e,n,s){for(r=r.split?r.split("."):r,n=0;n<r.length;n++)t=t?t[r[n]]:s;return t===s?e:t}},959:(t,r)=>{r.dset=function(t,r,e){r.split&&(r=r.split("."));for(var n,s,o=0,i=r.length,a=t;o<i&&"__proto__"!==(s=r[o++])&&"constructor"!==s&&"prototype"!==s;)a=a[s]=o===i?e:typeof(n=a[s])==typeof r?n:0*r[o]!=0||~(""+r[o]).indexOf(".")?{}:[]}},7461:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>o});for(var n=[],s=0;s<64;)n[s]=0|4294967296*Math.sin(++s%Math.PI);function o(t){var r,e,o,i=[r=1732584193,e=4023233417,~r,~e],a=[],u=unescape(encodeURI(t))+"",c=u.length;for(t=--c/4+2|15,a[--t]=8*c;~c;)a[c>>2]|=u.charCodeAt(c)<<8*c--;for(s=u=0;s<t;s+=16){for(c=i;u<64;c=[o=c[3],r+((o=c[0]+[r&e|~r&o,o&r|~o&e,r^e^o,e^(r|~o)][c=u>>4]+n[u]+~~a[s|15&[u,5*u+1,3*u+5,7*u][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+u++%4])|o>>>-c),r,e])r=0|c[1],e=c[2];for(u=4;u;)i[--u]+=c[u]}for(t="";u<32;)t+=(i[u>>3]>>4*(1^u++)&15).toString(16);return t}}}]);