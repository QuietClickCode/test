
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}
function cv(a){if(!cj[a]){var b=f("<"+a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),c.body.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write("<!doctype><html><body></body></html>");b=cl.createElement(a),cl.body.appendChild(b),d=f.css(b,"display"),c.body.removeChild(ck)}
cj[a]=d}
return cj[a]}
function cu(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}
function ct(){cq=b}
function cs(){setTimeout(ct,0);return cq=f.now()}
function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}
catch(b){}}
function ch(){try{return new a.XMLHttpRequest}
catch(b){}}
function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}
return c}
function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}
if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}
k||(k=i)}
j=j||k}
if(j){j!==f[0]&&f.unshift(j);return d[j]}}
function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bF.test(a)?d(a,e):b_(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}
function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bU,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}
function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bQ),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}
function bD(a,b,c){var d=b==="width"?bx:by,e=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return e;f.each(d,function(){c||(e-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?e+=parseFloat(f.css(a,"margin"+this))||0:e-=parseFloat(f.css(a,"border"+this+"Width"))||0});return e}
function bn(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}
function bm(a){f.nodeName(a,"input")?bl(a):a.getElementsByTagName&&f.grep(a.getElementsByTagName("input"),bl)}
function bl(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}
function bk(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}
function bj(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}
else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}
function bi(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}
function bh(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
function X(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(S.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}
return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}
function W(a){return!a||!a.parentNode||a.parentNode.nodeType===11}
function O(a,b){return(a&&a!=="*"?a+".":"")+b.replace(A,"`").replace(B,"&")}
function N(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(y,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}
for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}
return b}}
function L(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}
function F(){return!0}
function E(){return!1}
function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}
function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}
function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"$1-$2").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}
catch(g){}
f.data(a,c,d)}
else d=b}
return d}
var c=a.document,d=a.navigator,e=a.location,f=function(){function H(){if(!e.isReady){try{c.documentElement.doScroll("left")}
catch(a){setTimeout(H,1);return}
e.ready()}}
var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=d.userAgent,x,y,z,A=Object.prototype.toString,B=Object.prototype.hasOwnProperty,C=Array.prototype.push,D=Array.prototype.slice,E=String.prototype.trim,F=Array.prototype.indexOf,G={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}
if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}
if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}
h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}
this.context=c,this.selector=a;return this}
return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}
if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.1",length:0,size:function(){return this.length},toArray:function(){return D.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?C.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:C,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}
return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;y.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!y){y=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",z),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}
catch(d){}
c.documentElement.doScroll&&b&&H()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):G[A.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;if(a.constructor&&!B.call(a,"constructor")&&!B.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a);return c===b||B.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b,c,d){a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),d=c.documentElement,(!d||!d.nodeName||d.nodeName==="parsererror")&&e.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}
else for(;g<h;)if(c.apply(a[g++],d)===!1)break}
else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}
else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:E?function(a){return a==null?"":E.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?C.call(c,a):e.merge(c,a)}
return c},inArray:function(a,b){if(F)return F.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}
if(!e.isFunction(a))return b;var f=D.call(arguments,2),g=function(){return a.apply(c,f.concat(D.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}
if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}
return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}
e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){G["[object "+b+"]"]=b.toLowerCase()}),x=e.uaMatch(w),x.browser&&(e.browser[x.browser]=!0,e.browser.version=x.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?z=function(){c.removeEventListener("DOMContentLoaded",z,!1),e.ready()}:c.attachEvent&&(z=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",z),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}
return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}
finally{b=[e,f],c=0}}
return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g](h)}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}
var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}
var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}
else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};f=c.createElement("select"),g=f.appendChild(c.createElement("option")),h=a.getElementsByTagName("input")[0],j={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},h.checked=!0,j.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,j.optDisabled=!g.disabled;try{delete a.test}
catch(s){j.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function b(){j.noCloneEvent=!1,a.detachEvent("onclick",b)}),a.cloneNode(!0).fireEvent("onclick")),h=c.createElement("input"),h.value="t",h.setAttribute("type","radio"),j.radioValue=h.value==="t",h.setAttribute("checked","checked"),a.appendChild(h),k=c.createDocumentFragment(),k.appendChild(a.firstChild),j.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",l=c.createElement("body"),m={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};for(q in m)l.style[q]=m[q];l.appendChild(a),b.insertBefore(l,b.firstChild),j.appendChecked=h.checked,j.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,j.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",j.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",n=a.getElementsByTagName("td"),r=n[0].offsetHeight===0,n[0].style.display="",n[1].style.display="none",j.reliableHiddenOffsets=r&&n[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(i=c.createElement("div"),i.style.width="0",i.style.marginRight="0",a.appendChild(i),j.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(i,null)||{marginRight:0}).marginRight,10)||0)===0),l.innerHTML="",b.removeChild(l);if(a.attachEvent)for(q in{submit:1,change:1,focusin:1})p="on"+q,r=p in a,r||(a.setAttribute(p,"return;"),r=typeof a[p]=="function"),j[q+"Bubbles"]=r;return j}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([a-z])([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g=f.expando,h=typeof c=="string",i,j=a.nodeType,k=j?f.cache:a,l=j?a[f.expando]:a[f.expando]&&f.expando;if((!l||e&&l&&!k[l][g])&&h&&d===b)return;l||(j?a[f.expando]=l=++f.uuid:l=f.expando),k[l]||(k[l]={},j||(k[l].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?k[l][g]=f.extend(k[l][g],c):k[l]=f.extend(k[l],c);i=k[l],e&&(i[g]||(i[g]={}),i=i[g]),d!==b&&(i[f.camelCase(c)]=d);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[f.camelCase(c)]:i}},removeData:function(b,c,d){if(!!f.acceptData(b)){var e=f.expando,g=b.nodeType,h=g?f.cache:b,i=g?b[f.expando]:f.expando;if(!h[i])return;if(c){var j=d?h[i][e]:h[i];if(j){delete j[c];if(!l(j))return}}
if(d){delete h[i][e];if(!l(h[i]))return}
var k=h[i][e];f.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=k):g&&(f.support.deleteExpando?delete b[f.expando]:b.removeAttribute?b.removeAttribute(f.expando):b[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}
return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}
return d}
if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}
return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}
typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u=/\:/,v,w;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}
catch(c){}})},addClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.addClass(a.call(this,b,c.attr("class")||""))});if(a&&typeof a=="string"){var b=(a||"").split(o);for(var c=0,d=this.length;c<d;c++){var e=this[c];if(e.nodeType===1)if(!e.className)e.className=a;else{var g=" "+e.className+" ",h=e.className;for(var i=0,j=b.length;i<j;i++)g.indexOf(" "+b[i]+" ")<0&&(h+=" "+b[i]);e.className=f.trim(h)}}}
return this},removeClass:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a=="string"||a===b){var c=(a||"").split(o);for(var d=0,e=this.length;d<e;d++){var g=this[d];if(g.nodeType===1&&g.className)if(a){var h=(" "+g.className+" ").replace(n," ");for(var i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}
else g.className=""}}
return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){var d=f(this);d.toggleClass(a.call(this,c,d.attr("class"),b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}
else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;return(e.value||"").replace(p,"")}
return b}
var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}
if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);c=j&&f.attrFix[c]||c,i=f.attrHooks[c],i||(!t.test(c)||typeof d!="boolean"&&d!==b&&d.toLowerCase()!==c.toLowerCase()?v&&(f.nodeName(a,"form")||u.test(c))&&(i=v):i=w);if(d!==b){if(d===null){f.removeAttr(a,c);return b}
if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}
if(i&&"get"in i&&j)return i.get(a,c);h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.support.getSetAttribute?a.removeAttribute(b):(f.attr(a,b,""),a.removeAttributeNode(a.getAttributeNode(b))),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},tabIndex:{get:function(a){var c=a.getAttributeNode("tabIndex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);c=i&&f.propFix[c]||c,h=f.propHooks[c];return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==b?g:a[c]},propHooks:{}}),w={get:function(a,c){return a[f.propFix[c]||c]?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=b),a.setAttribute(c,c.toLowerCase()));return c}},f.attrHooks.value={get:function(a,b){if(v&&f.nodeName(a,"button"))return v.get(a,b);return a.value},set:function(a,b,c){if(v&&f.nodeName(a,"button"))return v.set(a,b,c);a.value=b}},f.support.getSetAttribute||(f.attrFix=f.propFix,v=f.attrHooks.name=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);if(d){d.nodeValue=b;return b}}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var x=Object.prototype.hasOwnProperty,y=/\.(.*)$/,z=/^(?:textarea|input|select)$/i,A=/\./g,B=/ /g,C=/[^\w\s.|`]/g,D=function(a){return a.replace(C,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=E;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}
p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}
a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=E);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}
c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),D).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}
continue}
o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}
if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete t[h]}
if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}
if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}
catch(p){}
n&&(e[l]=n),f.event.triggered=b}}
return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}
return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}
a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,O(a.origType,a.selector),f.extend({},a,{handler:N,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,O(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?F:E):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=F;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=F;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=F,this.stopPropagation()},isDefaultPrevented:E,isPropagationStopped:E,isImmediatePropagationStopped:E};var G=function(a){var b=a.relatedTarget;a.type=a.data;try{if(b&&b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&f.event.handle.apply(this,arguments)}
catch(d){}},H=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?H:G,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?H:G)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&f(b).closest("form").length&&L("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&L("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var I,J=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},K=function(c){var d=c.target,e,g;if(!!z.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=J(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:K,beforedeactivate:K,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&K.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&K.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",J(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in I)f.event.add(this,c+".specialChange",I[c]);return z.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return z.test(this.nodeName)}},I=f.event.special.change.filters,I.focus=I.beforeactivate}
f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}
var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}
if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var M={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}
if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}
if(d===!1||f.isFunction(d))e=d||E,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=y.exec(h),k="",j&&(k=j[0],h=h.replace(y,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}
l=h,M[h]?(a.push(M[h]+k),h=h+k):h=(M[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+O(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+O(h,m),e)}
return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}
if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}
else if(k.filter(b,[i]).length>0){j=i;break}}
i=i[a]}
d[g]=j}}}
function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}
i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}
i=i[a]}
d[g]=j}}}
var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}
else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}
else n=x=[]}
n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}
return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}
d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}
if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}
if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}
if(a===h)if(g==null)k.error(a);else break;h=a}
return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}
e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}
else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}
else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}
else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}
k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}
var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}
return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}
catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}
var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}
if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}
if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}
return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}
return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}
if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}
try{return p(e.querySelectorAll(b),f)}
catch(j){}}
else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}
catch(s){}
finally{n||m.removeAttribute("id")}}}
return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}
catch(f){e=!0}
k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}
catch(g){}
return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var P=/Until$/,Q=/^(?:parents|prevUntil|prevAll)/,R=/,/,S=/^.[^:#\[\.,]*$/,T=Array.prototype.slice,U=f.expr.match.POS,V={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}
return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(X(this,a,!1),"not",a)},filter:function(a){return this.pushStack(X(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=U.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}
return c}
var l=U.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}
g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}
c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a=="string")return f.inArray(this[0],a?f(a):this.parent().children());return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(W(c[0])||W(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=T.call(arguments);P.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!V[a]?f.unique(e):e,(this.length>1||R.test(d))&&Q.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y=/ jQuery\d+="(?:\d+|null)"/g,Z=/^\s+/,$=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,_=/<([\w:]+)/,ba=/<tbody/i,bb=/<|&#?\w+;/,bc=/<(?:script|object|embed|option|style)/i,bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}
return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}
return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Y,""):null;if(typeof a=="string"&&!bc.test(a)&&(f.support.leadingWhitespace||!Z.test(a))&&!bg[(_.exec(a)||["",""])[1].toLowerCase()]){a=a.replace($,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}
catch(e){this.empty().append(a)}}
else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}
return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bh(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}
k.length&&f.each(k,bn)}
return this}}),f.buildFragment=function(a,b,d){var e,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!bc.test(a[0])&&(f.support.checkClone||!bd.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}
for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}
return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bj(a,d),e=bk(a),g=bk(d);for(h=0;e[h];++h)bj(e[h],g[h])}
if(b){bi(a,d);if(c){e=bk(a),g=bk(d);for(h=0;e[h];++h)bi(e[h],g[h])}}
return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bb.test(k))k=b.createTextNode(k);else{k=k.replace($,"<$1></$2>");var l=(_.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=ba.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&Z.test(k)&&o.insertBefore(b.createTextNode(Z.exec(k)[0]),o.firstChild),k=o.childNodes}
var r;if(!f.support.appendChecked)if(k[0]&&typeof(r=k.length)=="number")for(i=0;i<r;i++)bm(k[i]);else bm(k);k.nodeType?h.push(k):h=f.merge(h,k)}
if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}
d.appendChild(h[j])}}
return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}
h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bo=/alpha\([^)]*\)/i,bp=/opacity=([^)]*)/,bq=/-([a-z])/ig,br=/([A-Z]|^ms)/g,bs=/^-?\d+(?:px)?$/i,bt=/^-?\d/,bu=/^[+\-]=/,bv=/[^+\-\.\de]+/g,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB,bC=function(a,b){return b.toUpperCase()};f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}
return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0,widows:!0,orphans:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}
h=typeof d;if(h==="number"&&isNaN(d)||d==null)return;h==="string"&&bu.test(d)&&(d=+d.replace(bv,"")+parseFloat(f.css(a,c))),h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}
catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bq,bC)}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){a.offsetWidth!==0?e=bD(a,b,d):f.swap(a,bw,function(){e=bD(a,b,d)});if(e<=0){e=bz(a,b,b),e==="0px"&&bB&&(e=bB(a,b,b));if(e!=null)return e===""||e==="auto"?"0px":e}
if(e<0||e==null){e=a.style[b];return e===""||e==="auto"?"0px":e}
return typeof e=="string"?e:e+"px"}},set:function(a,b){if(!bs.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bp.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle;c.zoom=1;var e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.filter=bo.test(g)?g.replace(bo,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,c){var d,e,g;c=c.replace(br,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bs.test(d)&&bt.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bE=/%20/g,bF=/\[\]$/,bG=/\r?\n/g,bH=/#.*$/,bI=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bJ=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bK=/^(?:about|app|app\-storage|.+\-extension|file|widget):$/,bL=/^(?:GET|HEAD)$/,bM=/^\/\//,bN=/\?/,bO=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bP=/^(?:select|textarea)/i,bQ=/\s+/,bR=/([?&])_=[^&]*/,bS=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bT=f.fn.load,bU={},bV={},bW,bX;try{bW=e.href}
catch(bY){bW=c.createElement("a"),bW.href="",bW=bW.href}
bX=bS.exec(bW.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bT)return bT.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}
var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bO,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bP.test(this.nodeName)||bJ.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bG,"\r\n")}}):{name:b.name,value:c.replace(bG,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?f.extend(!0,a,f.ajaxSettings,b):(b=a,a=f.extend(!0,f.ajaxSettings,b));for(var c in{context:1,url:1})c in b?a[c]=b[c]:c in f.ajaxSettings&&(a[c]=f.ajaxSettings[c]);return a},ajaxSettings:{url:bW,isLocal:bK.test(bX[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML}},ajaxPrefilter:bZ(bU),ajaxTransport:bZ(bV),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a?4:0;var o,r,u,w=l?ca(d,v,l):b,x,y;if(a>=200&&a<300||a===304){if(d.ifModified){if(x=v.getResponseHeader("Last-Modified"))f.lastModified[k]=x;if(y=v.getResponseHeader("Etag"))f.etag[k]=y}
if(a===304)c="notmodified",o=!0;else try{r=cb(d,w),c="success",o=!0}
catch(z){c="parsererror",u=z}}
else{u=c;if(!c||a)c="error",a<0&&(a=0)}
v.status=a,v.statusText=c,o?h.resolveWith(e,[r,c,v]):h.rejectWith(e,[v,c,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,c]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}
typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}
return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bI.exec(n))o[c[1].toLowerCase()]=c[2]}
c=o[a.toLowerCase()]}
return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}
return this},d.url=((a||d.url)+"").replace(bH,"").replace(bM,bX[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bQ),d.crossDomain==null&&(r=bS.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bX[1]&&r[2]==bX[2]&&(r[3]||(r[1]==="http:"?80:443))==(bX[3]||(bX[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bU,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bL.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bN.test(d.url)?"&":"?")+d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bR,"$1_="+x);d.url=y+(y===d.url?(bN.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", */*; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}
for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bV,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}
catch(z){status<2?w(-1,z):f.error(z)}}
return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bE,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}
catch(k){}
h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}
catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}
catch(p){e||g(-1,p)}
m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq,cr=a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}
return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}
for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cv(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}
b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cm.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=cn.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this),f.isFunction(d.old)&&d.old.call(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function h(a){return d.step(a)}
var d=this,e=f.fx,g;this.startTime=cq||cs(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,h.elem=this.elem,h()&&f.timers.push(h)&&!co&&(cr?(co=1,g=function(){co&&(cr(g),e.tick())},cr(g)):co=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cq||cs(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}
return!1}
e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}
catch(d){}
var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}
if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}
return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){return this[0]?parseFloat(f.css(this[0],d,"padding")):null},f.fn["outer"+c]=function(a){return this[0]?parseFloat(f.css(this[0],d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c];return e.document.compatMode==="CSS1Compat"&&g||e.document.body["client"+c]||g}
if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var h=f.css(e,d),i=parseFloat(h);return f.isNaN(i)?h:i}
return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f})(window);
jQuery.ui||function(c){c.ui={version:"1.8.1",plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")=="hidden")return false;b=b&&b=="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,f,g){return c.ui.isOverAxis(a,d,f)&&c.ui.isOverAxis(b,e,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==undefined)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b=="absolute"||b=="relative"||b=="fixed"){b=parseInt(a.css("zIndex"));if(!isNaN(b)&&b!=0)return b}
a=a.parent()}}
return 0}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b||"area"==b?a.href||!isNaN(d):!isNaN(d))&&!c(a)["area"==b?"parents":"closest"](":hidden").length},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}})}(jQuery);;(function(b){var j=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add(this).each(function(){b(this).triggerHandler("remove")});return j.call(b(this),a,c)})};b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}
b.expr[":"][f]=function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend({},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.substring(0,1)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==undefined){h=i;return false}}):this.each(function(){var g=b.data(this,a);if(g){d&&g.option(d);g._init()}else b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){this.element=b(c).data(this.widgetName,this);this.options=b.extend(true,{},this.options,b.metadata&&b.metadata.get(c)[this.widgetName],a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a,e=this;if(arguments.length===0)return b.extend({},e.options);if(typeof a==="string"){if(c===undefined)return this.options[a];d={};d[a]=c}
b.each(d,function(f,h){e._setOption(f,h)});return e},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}
this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);;(function(c){c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){if(a._preventClickEvent){a._preventClickEvent=false;b.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}
this._mouseMoveDelegate=function(d){return b._mouseMove(d)};this._mouseUpDelegate=function(d){return b._mouseUp(d)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);c.browser.safari||a.preventDefault();return a.originalEvent.mouseHandled=true}},_mouseMove:function(a){if(c.browser.msie&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}
if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=a.target==this._mouseDownEvent.target;this._mouseStop(a)}
return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);;(function(c){c.ui=c.ui||{};var m=/left|center|right/,n=/top|center|bottom/,p=c.fn.position,q=c.fn.offset;c.fn.position=function(a){if(!a||!a.of)return p.apply(this,arguments);a=c.extend({},a);var b=c(a.of),d=(a.collision||"flip").split(" "),e=a.offset?a.offset.split(" "):[0,0],g,h,i;if(a.of.nodeType===9){g=b.width();h=b.height();i={top:0,left:0}}else if(a.of.scrollTo&&a.of.document){g=b.width();h=b.height();i={top:b.scrollTop(),left:b.scrollLeft()}}else if(a.of.preventDefault){a.at="left top";g=h=0;i={top:a.of.pageY,left:a.of.pageX}}else{g=b.outerWidth();h=b.outerHeight();i=b.offset()}
c.each(["my","at"],function(){var f=(a[this]||"").split(" ");if(f.length===1)f=m.test(f[0])?f.concat(["center"]):n.test(f[0])?["center"].concat(f):["center","center"];f[0]=m.test(f[0])?f[0]:"center";f[1]=n.test(f[1])?f[1]:"center";a[this]=f});if(d.length===1)d[1]=d[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(a.at[0]==="right")i.left+=g;else if(a.at[0]==="center")i.left+=g/2;if(a.at[1]==="bottom")i.top+=h;else if(a.at[1]==="center")i.top+=h/2;i.left+=e[0];i.top+=e[1];return this.each(function(){var f=c(this),k=f.outerWidth(),l=f.outerHeight(),j=c.extend({},i);if(a.my[0]==="right")j.left-=k;else if(a.my[0]==="center")j.left-=k/2;if(a.my[1]==="bottom")j.top-=l;else if(a.my[1]==="center")j.top-=l/2;j.left=parseInt(j.left);j.top=parseInt(j.top);c.each(["left","top"],function(o,r){c.ui.position[d[o]]&&c.ui.position[d[o]][r](j,{targetWidth:g,targetHeight:h,elemWidth:k,elemHeight:l,offset:e,my:a.my,at:a.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(j,{using:a.using}))})};c.ui.position={fit:{left:function(a,b){var d=c(window);b=a.left+b.elemWidth-d.width()-d.scrollLeft();a.left=b>0?a.left-b:Math.max(0,a.left)},top:function(a,b){var d=c(window);b=a.top+b.elemHeight-d.height()-d.scrollTop();a.top=b>0?a.top-b:Math.max(0,a.top)}},flip:{left:function(a,b){if(b.at[0]!=="center"){var d=c(window);d=a.left+b.elemWidth-d.width()-d.scrollLeft();var e=b.my[0]==="left"?-b.elemWidth:b.my[0]==="right"?b.elemWidth:0,g=-2*b.offset[0];a.left+=a.left<0?e+b.targetWidth+g:d>0?e-b.targetWidth+g:0}},top:function(a,b){if(b.at[1]!=="center"){var d=c(window);d=a.top+b.elemHeight-d.height()-d.scrollTop();var e=b.my[1]==="top"?-b.elemHeight:b.my[1]==="bottom"?b.elemHeight:0,g=b.at[1]==="top"?b.targetHeight:-b.targetHeight,h=-2*b.offset[1];a.top+=a.top<0?e+b.targetHeight+h:d>0?e+g+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(a,b){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var d=c(a),e=d.offset(),g=parseInt(c.curCSS(a,"top",true),10)||0,h=parseInt(c.curCSS(a,"left",true),10)||0;e={top:b.top-e.top+g,left:b.left-e.left+h};"using"in b?b.using.call(a,e):d.css(e)};c.fn.offset=function(a){var b=this[0];if(!b||!b.ownerDocument)return null;if(a)return this.each(function(){c.offset.setOffset(this,a)});return q.call(this)}}})(jQuery);;(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}
this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}
this.position=b.position}
if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}
if(!this.element[0]||!this.element[0].parentNode)return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}
if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}
if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}
return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.1"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g._refreshItems();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}
this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}
f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}
var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}
if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);;(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",a,this.ui(c));return this.element}
return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.1"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;switch(c){case"fit":return i<e&&g<k&&j<f&&h<l;case"intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case"pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case"touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}
c[f].visible=c[f].element.css("display")!="none";if(c[f].visible){c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight};e=="mousedown"&&c[f]._activate.call(c[f],b)}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}
if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}
this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})}}})(jQuery);;(function(d){d.widget("ui.resizable",d.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");d.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&d.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(d('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}
this.handles=a.handles||(!d(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var e=0;e<c.length;e++){var g=d.trim(c[e]),f=d('<div class="ui-resizable-handle '+("ui-resizable-"+g)+'"></div>');/sw|se|ne|nw/.test(g)&&f.css({zIndex:++a.zIndex});"se"==g&&f.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[g]=".ui-resizable-"+g;this.element.append(f)}}
this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==String)this.handles[i]=d(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=d(this.handles[i],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,l);this._proportionallyResize()}
d(this.handles[i])}};this._renderAxis(this.element);this._handles=d(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();d(this.element).addClass("ui-resizable-autohide").hover(function(){d(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){d(this).addClass("ui-resizable-autohide");b._handles.hide()}})}
this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){d(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}
this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(d(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),e=this.element;this.resizing=true;this.documentScroll={top:d(document).scrollTop(),left:d(document).scrollLeft()};if(e.is(".ui-draggable")||/absolute/.test(e.css("position")))e.css({position:"absolute",top:c.top,left:c.left});d.browser.opera&&/relative/.test(e.css("position"))&&e.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var g=m(this.helper.css("top"));if(a.containment){c+=d(a.containment).scrollLeft()||0;g+=d(a.containment).scrollTop()||0}
this.offset=this.helper.offset();this.position={left:c,top:g};this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};this.originalPosition={left:c,top:g};this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;a=d(".ui-resizable-"+this.axis).css("cursor");d("body").css("cursor",a=="auto"?this.axis+"-resize":a);e.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,e=this._change[this.axis];if(!e)return false;c=e.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var e=this._proportionallyResizeElements,g=e.length&&/textarea/i.test(e[0].nodeName);e=g&&d.ui.hasScroll(e[0],"left")?0:c.sizeDiff.height;g={width:c.size.width-(g?0:c.sizeDiff.width),height:c.size.height-e};e=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var f=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(d.extend(g,{top:f,left:e}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}
d("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(k(b.left))this.position.left=b.left;if(k(b.top))this.position.top=b.top;if(k(b.height))this.size.height=b.height;if(k(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,e=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(e=="sw"){b.left=a.left+(c.width-b.width);b.top=null}
if(e=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}
return b},_respectSize:function(b){var a=this.options,c=this.axis,e=k(b.width)&&a.maxWidth&&a.maxWidth<b.width,g=k(b.height)&&a.maxHeight&&a.maxHeight<b.height,f=k(b.width)&&a.minWidth&&a.minWidth>b.width,h=k(b.height)&&a.minHeight&&a.minHeight>b.height;if(f)b.width=a.minWidth;if(h)b.height=a.minHeight;if(e)b.width=a.maxWidth;if(g)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,l=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(f&&l)b.left=i-a.minWidth;if(e&&l)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(g&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var e=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],g=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=d.map(e,function(f,h){f=parseInt(f,10)||0;h=parseInt(g[h],10)||0;return f+h})}
d.browser.msie&&(d(b).is(":hidden")||d(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||d('<div style="overflow:hidden;"></div>');var a=d.browser.msie&&d.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return d.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return d.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))},ne:function(b,a,c){return d.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return d.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){d.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});d.extend(d.ui.resizable,{version:"1.8.1"});d.ui.plugin.add("resizable","alsoResize",{start:function(){var b=d(this).data("resizable").options,a=function(c){d(c).each(function(){d(this).data("resizable-alsoresize",{width:parseInt(d(this).width(),10),height:parseInt(d(this).height(),10),left:parseInt(d(this).css("left"),10),top:parseInt(d(this).css("top"),10)})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];a(b.alsoResize)}else d.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(){var b=d(this).data("resizable"),a=b.options,c=b.originalSize,e=b.originalPosition,g={height:b.size.height-c.height||0,width:b.size.width-c.width||0,top:b.position.top-e.top||0,left:b.position.left-e.left||0},f=function(h,i){d(h).each(function(){var j=d(this),l=d(this).data("resizable-alsoresize"),p={};d.each((i&&i.length?i:["width","height","top","left"])||["width","height","top","left"],function(n,o){if((n=(l[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(/relative/.test(j.css("position"))&&d.browser.opera){b._revertToRelativePosition=true;j.css({position:"absolute",top:"auto",left:"auto"})}
j.css(p)})};typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?d.each(a.alsoResize,function(h,i){f(h,i)}):f(a.alsoResize)},stop:function(){var b=d(this).data("resizable");if(b._revertToRelativePosition&&d.browser.opera){b._revertToRelativePosition=false;el.css({position:"relative"})}
d(this).removeData("resizable-alsoresize-start")}});d.ui.plugin.add("resizable","animate",{stop:function(b){var a=d(this).data("resizable"),c=a.options,e=a._proportionallyResizeElements,g=e.length&&/textarea/i.test(e[0].nodeName),f=g&&d.ui.hasScroll(e[0],"left")?0:a.sizeDiff.height;g={width:a.size.width-(g?0:a.sizeDiff.width),height:a.size.height-f};f=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(d.extend(g,h&&f?{top:h,left:f}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};e&&e.length&&d(e[0]).css({width:i.width,height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});d.ui.plugin.add("resizable","containment",{start:function(){var b=d(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof d?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=d(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:d(document),left:0,top:0,width:d(document).width(),height:d(document).height()||document.body.parentNode.scrollHeight}}else{var e=d(a),g=[];d(["Top","Right","Left","Bottom"]).each(function(i,j){g[i]=m(e.css("padding"+j))});b.containerOffset=e.offset();b.containerPosition=e.position();b.containerSize={height:e.innerHeight()-g[3],width:e.innerWidth()-g[1]};c=b.containerOffset;var f=b.containerSize.height,h=b.containerSize.width;h=d.ui.hasScroll(a,"left")?a.scrollWidth:h;f=d.ui.hasScroll(a)?a.scrollHeight:f;b.parentData={element:a,left:c.left,top:c.top,width:h,height:f}}}},resize:function(b){var a=d(this).data("resizable"),c=a.options,e=a.containerOffset,g=a.position;b=a._aspectRatio||b.shiftKey;var f={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))f=e;if(g.left<(a._helper?e.left:0)){a.size.width+=a._helper?a.position.left-e.left:a.position.left-f.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?e.left:0}
if(g.top<(a._helper?e.top:0)){a.size.height+=a._helper?a.position.top-e.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?e.top:0}
a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-f.left:a.offset.left-f.left)+a.sizeDiff.width);e=Math.abs((a._helper?a.offset.top-f.top:a.offset.top-e.top)+a.sizeDiff.height);g=a.containerElement.get(0)==a.element.parent().get(0);f=/relative|absolute/.test(a.containerElement.css("position"));if(g&&f)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=a.size.width/a.aspectRatio}
if(e+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-e;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=d(this).data("resizable"),a=b.options,c=b.containerOffset,e=b.containerPosition,g=b.containerElement,f=d(b.helper),h=f.offset(),i=f.outerWidth()-b.sizeDiff.width;f=f.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(g.css("position"))&&d(this).css({left:h.left-e.left-c.left,width:i,height:f});b._helper&&!a.animate&&/static/.test(g.css("position"))&&d(this).css({left:h.left-e.left-c.left,width:i,height:f})}});d.ui.plugin.add("resizable","ghost",{start:function(){var b=d(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=d(this).data("resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=d(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});d.ui.plugin.add("resizable","grid",{resize:function(){var b=d(this).data("resizable"),a=b.options,c=b.size,e=b.originalSize,g=b.originalPosition,f=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-e.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-e.height)/(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(f)){b.size.width=e.width+h;b.size.height=e.height+a}else if(/^(ne)$/.test(f)){b.size.width=e.width+h;b.size.height=e.height+a;b.position.top=g.top-a}else{if(/^(sw)$/.test(f)){b.size.width=e.width+h;b.size.height=e.height+a}else{b.size.width=e.width+h;b.size.height=e.height+a;b.position.top=g.top-a}
b.position.left=g.left-h}}});var m=function(b){return parseInt(b,10)||0},k=function(b){return!isNaN(parseInt(b,10))}})(jQuery);;(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var d=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(d.options.filter,d.element[0]);f.each(function(){var c=e(this),b=c.offset();e.data(this,"selectable-item",{element:this,$element:c,left:b.left,top:b.top,right:b.left+c.outerWidth(),bottom:b.top+c.outerHeight(),startselected:false,selected:c.hasClass("ui-selected"),selecting:c.hasClass("ui-selecting"),unselecting:c.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e(document.createElement("div")).css({border:"1px dotted black"}).addClass("ui-selectable-helper")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(d){var f=this;this.opos=[d.pageX,d.pageY];if(!this.options.disabled){var c=this.options;this.selectees=e(c.filter,this.element[0]);this._trigger("start",d);e(c.appendTo).append(this.helper);this.helper.css({"z-index":100,position:"absolute",left:d.clientX,top:d.clientY,width:0,height:0});c.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!d.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",d,{unselecting:b.element})}});e(d.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){b.$element.removeClass("ui-unselecting").addClass("ui-selecting");b.unselecting=false;b.selecting=true;b.selected=true;f._trigger("selecting",d,{selecting:b.element});return false}})}},_mouseDrag:function(d){var f=this;this.dragged=true;if(!this.options.disabled){var c=this.options,b=this.opos[0],g=this.opos[1],h=d.pageX,i=d.pageY;if(b>h){var j=h;h=b;b=j}
if(g>i){j=i;i=g;g=j}
this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(c.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(c.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}
if(a.unselecting){a.$element.removeClass("ui-unselecting");a.unselecting=false}
if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",d,{selecting:a.element})}}else{if(a.selecting)if(d.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}
f._trigger("unselecting",d,{unselecting:a.element})}
if(a.selected)if(!d.metaKey&&!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",d,{unselecting:a.element})}}}});return false}},_mouseStop:function(d){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var c=e.data(this,"selectable-item");c.$element.removeClass("ui-unselecting");c.unselecting=false;c.startselected=false;f._trigger("unselected",d,{unselected:c.element})});e(".ui-selecting",this.element[0]).each(function(){var c=e.data(this,"selectable-item");c.$element.removeClass("ui-selecting").addClass("ui-selected");c.selecting=false;c.selected=true;c.startselected=true;f._trigger("selected",d,{selected:c.element})});this._trigger("stop",d);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.1"})})(jQuery);;(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a==="disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(self,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}
this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}
if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}
if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}
c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a)}
this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}
this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp();this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}
this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem);return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});return c.join("&")},toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}
c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}
for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b],e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}
e=e.offset();c.left=e.left;c.top=e.top}
if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}
return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}
b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",a,this._uiHash(this));this.containers[e].containerCache.over=0}
if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-f)<b){b=Math.abs(h-f);e=this.items[g]}}
if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}
if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}
if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}
return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}
for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}
this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}
return false}
b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}
this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.1"})})(jQuery);;(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()==location.href.toLowerCase()}},_create:function(){var a=this.options,b=this;this.running=0;this.element.addClass("ui-accordion ui-widget ui-helper-reset");this.element[0].nodeName=="UL"&&this.element.children("li").addClass("ui-accordion-li-fix");this.headers=this.element.find(a.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){c(this).removeClass("ui-state-focus")});this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(a.navigation){var d=this.element.find("a").filter(a.navigationFilter);if(d.length){var f=d.closest(".ui-accordion-header");this.active=f.length?f:d.closest(".ui-accordion-content").prev()}}
this.active=this._findActive(this.active||a.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");this.active.next().addClass("ui-accordion-content-active");this._createIcons();this.resize();this.element.attr("role","tablist");this.headers.attr("role","tab").bind("keydown",function(g){return b._keydown(g)}).next().attr("role","tabpanel");this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();this.active.length?this.active.attr("aria-expanded","true").attr("tabIndex","0"):this.headers.eq(0).attr("tabIndex","0");c.browser.safari||this.headers.find("a").attr("tabIndex","-1");a.event&&this.headers.bind(a.event+".accordion",function(g){b._clickHandler.call(b,g,this);g.preventDefault()})},_createIcons:function(){var a=this.options;if(a.icons){c("<span/>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.find(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");if(a.autoHeight||a.fillHeight)b.css("height","");return this},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();b&&this._createIcons()}},_keydown:function(a){var b=c.ui.keyCode;if(!(this.options.disabled||a.altKey||a.ctrlKey)){var d=this.headers.length,f=this.headers.index(a.target),g=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:g=this.headers[(f+1)%d];break;case b.LEFT:case b.UP:g=this.headers[(f-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);a.preventDefault()}
if(g){c(a.target).attr("tabIndex","-1");c(g).attr("tabIndex","0");g.focus();return false}
return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}
b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height())}).height(b)}
return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a=="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]==this.active[0];d.active=d.collapsible&&b?false:c(".ui-accordion-header",this.element).index(a);if(!(this.running||!d.collapsible&&b)){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}
e=a.next();f=this.active.next();g={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):e,oldContent:f};d=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(e,f,g,b,d)}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var f=this.active.next(),g={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:f},e=this.active=c([]);this._toggle(e,f,g)}},_toggle:function(a,b,d,f,g){var e=this.options,k=this;this.toShow=a;this.toHide=b;this.data=d;var i=function(){if(k)return k._completed.apply(k,arguments)};this._trigger("changestart",null,this.data);this.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&f?{toShow:c([]),toHide:b,complete:i,down:g,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:i,down:g,autoHeight:e.autoHeight||e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;f=c.ui.accordion.animations;var h=e.duration,j=e.animated;if(j&&!f[j]&&!c.easing[j])j="slide";f[j]||(f[j]=function(l){this.slide(l,{easing:j,duration:h||700})});f[j](d)}else{if(e.collapsible&&f)a.toggle();else{b.hide();a.show()}
i(true)}
b.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();a.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()},_completed:function(a){var b=this.options;this.running=a?0:--this.running;if(!this.running){b.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.1",animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),f=0,g={},e={},k;b=a.toShow;k=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(i,h){e[h]="hide";i=(""+c.css(a.toShow[0],h)).match(/^([\d+-.]+)(.*)$/);g[h]={value:i[1],unit:i[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(e,{step:function(i,h){if(h.prop=="height")f=h.end-h.start===0?0:(h.now-h.start)/(h.end-h.start);a.toShow[0].style[h.prop]=f*g[h.prop].value+g[h.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css("width",k);a.toShow.css({overflow:d});a.complete()}})}else a.toHide.animate({height:"hide"},a);else a.toShow.animate({height:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);;(function(e){e.widget("ui.autocomplete",{options:{minLength:1,delay:300},_create:function(){var a=this,b=this.element[0].ownerDocument;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){var d=e.ui.keyCode;switch(c.keyCode){case d.PAGE_UP:a._move("previousPage",c);break;case d.PAGE_DOWN:a._move("nextPage",c);break;case d.UP:a._move("previous",c);c.preventDefault();break;case d.DOWN:a._move("next",c);c.preventDefault();break;case d.ENTER:a.menu.active&&c.preventDefault();case d.TAB:if(!a.menu.active)return;a.menu.select(c);break;case d.ESCAPE:a.element.val(a.term);a.close(c);break;case d.LEFT:case d.RIGHT:case d.SHIFT:case d.CONTROL:case d.ALT:break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){a.search(null,c)},a.options.delay);break}}).bind("focus.autocomplete",function(){a.selectedItem=null;a.previous=a.element.val()}).bind("blur.autocomplete",function(c){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)});this._initSource();this.response=function(){return a._response.apply(a,arguments)};this.menu=e("<ul></ul>").addClass("ui-autocomplete").appendTo("body",b).menu({focus:function(c,d){d=d.item.data("item.autocomplete");false!==a._trigger("focus",null,{item:d})&&/^key/.test(c.originalEvent.type)&&a.element.val(d.value)},selected:function(c,d){d=d.item.data("item.autocomplete");false!==a._trigger("select",c,{item:d})&&a.element.val(d.value);a.close(c);c=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=c}
a.selectedItem=d},blur:function(){a.menu.element.is(":visible")&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");e.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();e.Widget.prototype.destroy.call(this)},_setOption:function(a){e.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource()},_initSource:function(){var a,b;if(e.isArray(this.options.source)){a=this.options.source;this.source=function(c,d){d(e.ui.autocomplete.filter(a,c.term))}}else if(typeof this.options.source==="string"){b=this.options.source;this.source=function(c,d){e.getJSON(b,c,d)}}else this.source=this.options.source},search:function(a,b){a=a!=null?a:this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search")!==false)return this._search(a)},_search:function(a){this.term=this.element.addClass("ui-autocomplete-loading").val();this.source({term:a},this.response)},_response:function(a){if(a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this._trigger("close",a);this.menu.element.hide();this.menu.deactivate()}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return e.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return e.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1),c;this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();this.menu.element.show().position({my:"left top",at:"left bottom",of:this.element,collision:"none"});a=b.width("").width();c=this.element.width();b.width(Math.max(a,c))},_renderMenu:function(a,b){var c=this;e.each(b,function(d,f){c._renderItem(a,f)})},_renderItem:function(a,b){return e("<li></li>").data("item.autocomplete",b).append("<a>"+b.label+"</a>").appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});e.extend(e.ui.autocomplete,{escapeRegex:function(a){return a.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")},filter:function(a,b){var c=new RegExp(e.ui.autocomplete.escapeRegex(b),"i");return e.grep(a,function(d){return c.test(d.label||d.value||d)})}})})(jQuery);(function(e){e.widget("ui.menu",{_create:function(){var a=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(b){if(e(b.target).closest(".ui-menu-item a").length){b.preventDefault();a.select(b)}});this.refresh()},refresh:function(){var a=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(b){a.activate(b,e(this).parent())}).mouseleave(function(){a.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.attr("scrollTop"),f=this.element.height();if(c<0)this.element.attr("scrollTop",d+c);else c>f&&this.element.attr("scrollTop",d+c-f+b.height())}
this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",a,{item:b})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(a,b,c){if(this.active){a=this.active[a+"All"](".ui-menu-item").eq(0);a.length?this.activate(c,a):this.activate(c,this.element.children(b))}else this.activate(c,this.element.children(b))},nextPage:function(a){if(this.hasScroll())if(!this.active||this.last())this.activate(a,this.element.children(":first"));else{var b=this.active.offset().top,c=this.element.height(),d=this.element.children("li").filter(function(){var f=e(this).offset().top-b-c+e(this).height();return f<10&&f>-10});d.length||(d=this.element.children(":last"));this.activate(a,d)}else this.activate(a,this.element.children(!this.active||this.last()?":first":":last"))},previousPage:function(a){if(this.hasScroll())if(!this.active||this.first())this.activate(a,this.element.children(":last"));else{var b=this.active.offset().top,c=this.element.height();result=this.element.children("li").filter(function(){var d=e(this).offset().top-b+c-e(this).height();return d<10&&d>-10});result.length||(result=this.element.children(":first"));this.activate(a,result)}else this.activate(a,this.element.children(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})})(jQuery);;(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,e=a([]);if(c)e=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return e};a.widget("ui.button",{options:{text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",i);this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",e="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(e)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var f=b.element[0];h(f).not(f).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(f){if(c.disabled)return false;if(f.keyCode==a.ui.keyCode.SPACE||f.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(f){f.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}
this._setOption("disabled",c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){this.buttonElement=this.element.parents().last().find("[for="+this.element.attr("id")+"]");this.element.addClass("ui-helper-hidden-accessible");var b=this.element.is(":checked");b&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement,c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary;if(d.primary||d.secondary){b.addClass("ui-button-text-icon"+(e?"s":""));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){b.addClass(e?"ui-button-icons-only":"ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon");this.hasTitle||b.attr("title",c)}}else b.addClass("ui-button-text-only")}}});a.widget("ui.buttonset",{_create:function(){this.element.addClass("ui-buttonset");this._init()},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(":button, :submit, :reset, :checkbox, :radio, a, :data(button)").filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);;(function(c){c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");var a=this,b=a.options,d=b.title||a.originalTitle||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}
c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==b.uiDialog[0])d=Math.max(d,c(this).css("z-index"))});c.ui.dialog.maxZ=d}
return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}
a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;d.next().length&&d.appendTo("body");a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===f[0]&&e.shiftKey){g.focus(1);return false}}});c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();a._trigger("open");a._isOpen=true;return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,function(){return!(d=true)});if(d){c.each(a,function(g,f){g=c('<button type="button"></button>').text(g).click(function(){f.apply(b.element[0],arguments)}).appendTo(e);c.fn.button&&g.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}
var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,originalSize:f.originalSize,position:f.position,size:f.size}}
a=a===undefined?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",f,b(h))},stop:function(f,h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0];a=a||c.ui.dialog.prototype.options.position;if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(e,g){if(+b[e]===b[e]){d[e]=b[e];b[e]=g}})}else if(typeof a==="object"){if("left"in a){b[0]="left";d[0]=a.left}else if("right"in a){b[0]="right";d[0]=-a.right}
if("top"in a){b[1]="top";d[1]=a.top}else if("bottom"in a){b[1]="bottom";d[1]=-a.bottom}}(a=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position({my:b.join(" "),at:b.join(" "),offset:d.join(" "),of:window,collision:"fit",using:function(e){var g=c(this).css(e).offset().top;g<0&&c(this).css("top",e.top-g)}});a||this.uiDialog.hide()},_setOption:function(a,b){var d=this,e=d.uiDialog,g=e.is(":data(resizable)"),f=false;switch(a){case"beforeclose":a="beforeClose";break;case"buttons":d._createButtons(b);break;case"closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case"dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case"disabled":b?e.addClass("ui-dialog-disabled"):e.removeClass("ui-dialog-disabled");break;case"draggable":b?d._makeDraggable():e.draggable("destroy");break;case"height":f=true;break;case"maxHeight":g&&e.resizable("option","maxHeight",b);f=true;break;case"maxWidth":g&&e.resizable("option","maxWidth",b);f=true;break;case"minHeight":g&&e.resizable("option","minHeight",b);f=true;break;case"minWidth":g&&e.resizable("option","minWidth",b);f=true;break;case"position":d._position(b);break;case"resizable":g&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case"title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break;case"width":f=true;break}
c.Widget.prototype._setOption.apply(d,arguments);f&&d._size()},_size:function(){var a=this.options,b;this.element.css({width:"auto",minHeight:0,height:0});b=this.uiDialog.css({height:"auto",width:a.width}).height();this.element.css(a.height==="auto"?{minHeight:Math.max(a.minHeight-b,0),height:"auto"}:{minHeight:0,height:Math.max(a.height-b,0)}).show();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.1",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}
return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){return c(d.target).zIndex()>=c.ui.dialog.overlay.maxZ})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}
var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){this.oldInstances.push(this.instances.splice(c.inArray(a,this.instances),1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var b=0;c.each(this.instances,function(){b=Math.max(b,this.css("z-index"))});this.maxZ=b},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);;(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}
d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),g,h,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");g=b._start(c,f);if(g===false)return}
break}
i=b.options.step;g=b.options.values&&b.options.values.length?(h=b.values(f)):(h=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:h=b._valueMin();break;case d.ui.keyCode.END:h=b._valueMax();break;case d.ui.keyCode.PAGE_UP:h=g+(b._valueMax()-b._valueMin())/5;break;case d.ui.keyCode.PAGE_DOWN:h=g-(b._valueMax()-b._valueMin())/5;break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=g+i;break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(g===b._valueMin())return;h=g-i;break}
b._slide(c,f,h);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,g,h,i;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c={x:b.pageX,y:b.pageY};e=this._normValueFromMouse(c);f=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(j){var k=Math.abs(e-h.values(j));if(f>k){f=k;g=d(this);i=j}});if(a.range===true&&this.values(1)===a.min){i+=1;g=d(this.handles[i])}
if(this._start(b,i)===false)return false;this._mouseSliding=true;h._handleIndex=i;g.addClass("ui-state-active").focus();a=g.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-g.width()/2,top:b.pageY-a.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)};e=this._normValueFromMouse(c);this._slide(b,i,e);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}
a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}
return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}
this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}
this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=this._trimAlignValue(b);this._refreshValue();this._change(null,0)}
return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}
if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}
this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}
break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<this._valueMin())return this._valueMin();if(b>this._valueMax())return this._valueMax();var a=this.options.step,c=b%a;b=b-c;if(c>=a/2)b+=a;return parseFloat(b.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,g={},h,i,j,k;if(this.options.values&&this.options.values.length)this.handles.each(function(l){f=(c.values(l)-c._valueMin())/(c._valueMax()-c._valueMin())*100;g[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](g,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(l===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);if(l===1)c.range[e?"animate":"css"]({width:f-h+"%"},{queue:false,duration:a.animate})}else{if(l===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(l===1)c.range[e?"animate":"css"]({height:f-h+"%"},{queue:false,duration:a.animate})}
h=f});else{i=this.value();j=this._valueMin();k=this._valueMax();f=k!==j?(i-j)/(k-j)*100:0;g[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](g,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.1"})})(jQuery);;(function(d){var s=0,u=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:'<li><a href="#{href}"><span>#{label}</span></a></li>'},_create:function(){this._tabify(true)},_setOption:function(c,e){if(c=="selected")this.options.collapsible&&e==this.options.selected||this.select(e);else{this.options[c]=e;this._tabify()}},_tabId:function(c){return c.title&&c.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+++s},_sanitizeSelector:function(c){return c.replace(/:/g,"\\:")},_cookie:function(){var c=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+(++u));return d.cookie.apply(null,[c].concat(d.makeArray(arguments)))},_ui:function(c,e){return{tab:c,panel:e,index:this.anchors.index(c)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var c=d(this);c.html(c.data("label.tabs")).removeData("label.tabs")})},_tabify:function(c){function e(g,f){g.css({display:""});!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}
this.list=this.element.find("ol,ul").eq(0);this.lis=d("li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);var a=this,b=this.options,h=/^#.+/;this.anchors.each(function(g,f){var j=d(f).attr("href"),l=j.split("#")[0],p;if(l&&(l===location.toString().split("#")[0]||(p=d("base")[0])&&l===p.href)){j=f.hash;f.href=j}
if(h.test(j))a.panels=a.panels.add(a._sanitizeSelector(j));else if(j!="#"){d.data(f,"href.tabs",j);d.data(f,"load.tabs",j.replace(/#.*$/,""));j=a._tabId(f);f.href="#"+j;f=d("#"+j);if(!f.length){f=d(b.panelTemplate).attr("id",j).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}
a.panels=a.panels.add(f)}else b.disabled.push(g)});if(c){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(b.selected===undefined){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){b.selected=g;return false}});if(typeof b.selected!="number"&&b.cookie)b.selected=parseInt(a._cookie(),10);if(typeof b.selected!="number"&&this.lis.filter(".ui-tabs-selected").length)b.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));b.selected=b.selected||(this.lis.length?0:-1)}else if(b.selected===null)b.selected=-1;b.selected=b.selected>=0&&this.anchors[b.selected]||b.selected<0?b.selected:0;b.disabled=d.unique(b.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(b.selected,b.disabled)!=-1&&b.disabled.splice(d.inArray(b.selected,b.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(b.selected>=0&&this.anchors.length){this.panels.eq(b.selected).removeClass("ui-tabs-hide");this.lis.eq(b.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[b.selected],a.panels[b.selected]))});this.load(b.selected)}
d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else b.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));this.element[b.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");b.cookie&&this._cookie(b.selected,b.cookie);c=0;for(var i;i=this.lis[c];c++)d(i)[d.inArray(c,b.disabled)!=-1&&!d(i).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");b.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(b.event!="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}
var m,o;if(b.fx)if(d.isArray(b.fx)){m=b.fx[0];o=b.fx[1]}else m=o=b.fx;var q=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},r=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};this.anchors.bind(b.event+".tabs",function(){var g=this,f=d(this).closest("li"),j=a.panels.filter(":not(.ui-tabs-hide)"),l=d(a._sanitizeSelector(this.hash));if(f.hasClass("ui-tabs-selected")&&!b.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}
b.selected=a.anchors.index(this);a.abort();if(b.collapsible)if(f.hasClass("ui-tabs-selected")){b.selected=-1;b.cookie&&a._cookie(b.selected,b.cookie);a.element.queue("tabs",function(){r(g,j)}).dequeue("tabs");this.blur();return false}else if(!j.length){b.cookie&&a._cookie(b.selected,b.cookie);a.element.queue("tabs",function(){q(g,l)});a.load(a.anchors.index(this));this.blur();return false}
b.cookie&&a._cookie(b.selected,b.cookie);if(l.length){j.length&&a.element.queue("tabs",function(){r(g,j)});a.element.queue("tabs",function(){q(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},destroy:function(){var c=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(b,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});c.cookie&&this._cookie(null,c.cookie);return this},add:function(c,e,a){if(a===undefined)a=this.anchors.length;var b=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,c).replace(/#\{label\}/g,e));c=!c.indexOf("#")?c.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var i=d("#"+c);i.length||(i=d(h.panelTemplate).attr("id",c).data("destroy.tabs",true));i.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);i.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);i.insertBefore(this.panels[a])}
h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");i.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]))});this.load(0)}
this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(c){var e=this.options,a=this.lis.eq(c).remove(),b=this.panels.eq(c).remove();if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(c+(c+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=c}),function(h){return h>=c?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],b[0]));return this},enable:function(c){var e=this.options;if(d.inArray(c,e.disabled)!=-1){this.lis.eq(c).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=c});this._trigger("enable",null,this._ui(this.anchors[c],this.panels[c]));return this}},disable:function(c){var e=this.options;if(c!=e.selected){this.lis.eq(c).addClass("ui-state-disabled");e.disabled.push(c);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]))}
return this},select:function(c){if(typeof c=="string")c=this.anchors.index(this.anchors.filter("[href$="+c+"]"));else if(c===null)c=-1;if(c==-1&&this.options.collapsible)c=this.options.selected;this.anchors.eq(c).trigger(this.options.event+".tabs");return this},load:function(c){var e=this,a=this.options,b=this.anchors.eq(c)[0],h=d.data(b,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(b,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(c).addClass("ui-state-processing");if(a.spinner){var i=d("span",b);i.data("label.tabs",i.html()).html(a.spinner)}
this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){d(e._sanitizeSelector(b.hash)).html(k);e._cleanup();a.cache&&d.data(b,"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[c],e.panels[c]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[c],e.panels[c]));try{a.ajaxOptions.error(k,n,c,b)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}
this._cleanup();return this},url:function(c,e){this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.1"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(c,e){var a=this,b=this.options,h=a._rotate||(a._rotate=function(i){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=b.selected;a.select(++k<a.anchors.length?k:0)},c);i&&i.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(i){i.clientX&&a.rotate(null)}:function(){t=b.selected;h()});if(c){this.element.bind("tabsshow",h);this.anchors.bind(b.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(b.event+".tabs",e);delete this._rotate;delete this._unrotate}
return this}})})(jQuery);;(function(d){function J(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"_default",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible"></div>')}
function E(a,b){d.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}
d.extend(d.ui,{datepicker:{version:"1.8.1"}});var y=(new Date).getTime();d.extend(J.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){E(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}
e=a.nodeName.toLowerCase();f=e=="div"||e=="span";if(!a.id)a.id="dp"+(++this.uuid);var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}
a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}
return i};b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}
a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),true);this._updateDatepicker(b);this._updateAlternate(b)}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){a="dp"+(++this.uuid);this._dialogInput=d('<input type="text" id="'+a+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}
E(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}
if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true);E(e.settings,f);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass,b.dpDiv).add(d("td."+d.datepicker._currentClass,b.dpDiv));c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}
return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");E(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}
var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}
c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=d.datepicker._getBorders(b.dpDiv);b.dpDiv.find("iframe.ui-datepicker-cover").css({left:-i[0],top:-i[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a)).find("iframe.ui-datepicker-cover").css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){d(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);var e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input.focus()},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),k=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>k&&k>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1);)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}
this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}
this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){a=this._getInst(d(a)[0]);a.input&&a._selectingMonthYear&&!d.browser.msie&&a.input.focus();a._selectingMonthYear=!a._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;for(var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,k=c=-1,l=-1,u=-1,j=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"?4:p=="o"?3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,w,G){p=o(p)?G:w;for(w=0;w<p.length;w++)if(b.substr(s,p[w].length)==p[w]){s+=p[w].length;return w+1}
throw"Unknown name at position "+s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(j)if(a.charAt(z)=="'"&&!o("'"))j=false;else r();else switch(a.charAt(z)){case"d":l=m("d");break;case"D":n("D",f,h);break;case"o":u=m("o");break;case"m":k=m("m");break;case"M":k=n("M",i,g);break;case"y":c=m("y");break;case"@":var v=new Date(m("@"));c=v.getFullYear();k=v.getMonth()+1;l=v.getDate();break;case"!":v=new Date((m("!")-this._ticksTo1970)/1E4);c=v.getFullYear();k=v.getMonth()+1;l=v.getDate();break;case"'":if(o("'"))r();else j=true;break;default:r()}
if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){k=1;l=u;do{e=this._getDaysInMonth(c,k-1);if(l<=e)break;k++;l-=e}while(1)}
v=this._daylightSavingAdjust(new Date(c,k-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=k||v.getDate()!=l)throw"Invalid date";return v},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=j+1<a.length&&a.charAt(j+1)==o)&&j++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},k=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var j=0;j<a.length;j++)if(u)if(a.charAt(j)=="'"&&!i("'"))u=false;else l+=a.charAt(j);else switch(a.charAt(j)){case"d":l+=g("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case"m":l+=g("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),h,c);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=b.getTime()*1E4+this._ticksTo1970;break;case"'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(j)}
return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}
return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}
a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}
var g=(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,k=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=u.exec(h);j;){switch(j[2]||"d"){case"d":case"D":g+=parseInt(j[1],10);break;case"w":case"W":g+=parseInt(j[1],10)*7;break;case"m":case"M":l+=parseInt(j[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(k,l));break;case"y":case"Y":k+=parseInt(j[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(k,l));break}
j=u.exec(h)}
return new Date(k,l,g)};if(b=(b=b==null?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):b)&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}
return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),k=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),j=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}
if(o){var n=this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=j&&n<j?j:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}
a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-k,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+k+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+k,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+k+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";k=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&a.currentDay?u:b;k=!h?k:this.formatDate(k,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._gotoToday('#"+a.id+"');\">"+k+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;k=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),w=this._get(a,"showOtherMonths"),G=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var K=this._getDefaultDate(a),H="",C=0;C<i[0];C++){for(var L="",D=0;D<i[1];D++){var M=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(D){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}
x+='">'}
x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&C==0?c?f:n:"")+(/all|right/.test(t)&&C==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,j,o,C>0||D>0,z,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var A=k?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=(t+h)%7;A+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}
x+=A+"</tr></thead><tbody>";A=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,A);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;A=l?6:Math.ceil((t+A)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var N=0;N<A;N++){x+="<tr>";var O=!k?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var F=p?p.apply(a.input?a.input[0]:null,[q]):[true,""],B=q.getMonth()!=g,I=B&&!G||!F[0]||j&&q<j||o&&q>o;O+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(B?" ui-datepicker-other-month":"")+(q.getTime()==M.getTime()&&g==a.selectedMonth&&a._keyEvent||K.getTime()==q.getTime()&&K.getTime()==M.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(B&&!w?"":" "+F[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!B||w)&&F[2]?' title="'+F[2]+'"':"")+(I?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(B&&!w?"&#xa0;":I?'<span class="ui-state-default">'+q.getDate()+"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==u.getTime()?" ui-state-active":"")+(B?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}
x+=O+"</tr>"}
g++;if(g>11){g=0;m++}
x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&D==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");L+=x}
H+=L}
H+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return H},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var k=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),j='<div class="ui-datepicker-title">',o="";if(h||!k)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}
u||(j+=o+(h||!(k&&l)?"&#xa0;":""));if(h||!l)j+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(j+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)j+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";j+="</select>"}
j+=this._get(a,"yearSuffix");if(u)j+=(h||!(k&&l)?"&#xa0;":"")+o;j+="</div>";return j},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}
b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=function(a){if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}
var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new J;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.1";window["DP_jQuery_"+y]=d})(jQuery);;(function(b){b.widget("ui.progressbar",{options:{value:0},_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===undefined)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){switch(a){case"value":this.options.value=c;this._refreshValue();this._trigger("change");break}
b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;if(a<this._valueMin())a=this._valueMin();if(a>this._valueMax())a=this._valueMax();return a},_valueMin:function(){return 0},_valueMax:function(){return 100},_refreshValue:function(){var a=this.value();this.valueDiv[a===this._valueMax()?"addClass":"removeClass"]("ui-corner-right").width(a+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.1"})})(jQuery);;jQuery.effects||function(f){function k(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return l.transparent;return l[f.trim(c).toLowerCase()]}
function q(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return k(b)}
function m(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}
function n(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in r||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}
return c}
function s(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}
function j(c,a,b,d){if(typeof c=="object"){d=a;b=null;a=c;c=a.effect}
if(f.isFunction(a)){d=a;b=null;a={}}
if(f.isFunction(b)){d=b;b=null}
if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}
a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:f.fx.speeds[b]||f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}
f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=q(b.elem,a);b.end=k(b.end);b.colorInit=true}
b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var l={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},o=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,d){if(f.isFunction(b)){d=b;b=null}
return this.each(function(){var e=f(this),g=e.attr("style")||" ",h=n(m.call(this)),p,t=e.attr("className");f.each(o,function(u,i){c[i]&&e[i+"Class"](c[i])});p=n(m.call(this));e.attr("className",t);e.animate(s(h,p),a,b,function(){f.each(o,function(u,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)})})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===undefined?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.1",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case"top":b=0;break;case"middle":b=0.5;break;case"bottom":b=1;break;default:b=c[0]/a.height}
switch(c[1]){case"left":c=0;break;case"center":c=0.5;break;case"right":c=1;break;default:c=c[1]/a.width}
return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0})}
return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=j.apply(this,arguments);a={options:a[1],duration:a[2],callback:a[3]};var b=f.effects[c];return b&&!f.fx.off?b.call(this,a):this},_show:f.fn.show,show:function(c){if(!c||typeof c=="number"||f.fx.speeds[c])return this._show.apply(this,arguments);else{var a=j.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(!c||typeof c=="number"||f.fx.speeds[c])return this._hide.apply(this,arguments);else{var a=j.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(!c||typeof c=="number"||f.fx.speeds[c]||typeof c=="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=j.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==undefined)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==undefined)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==undefined)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);;(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","left"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);;(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","left"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}
for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}
if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}
a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);;(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","left","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,c/2)}
var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);;(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","left","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e=="show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);;(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);;(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","left"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);;(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);;(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}
if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}
b.animate({opacity:animateTo},duration,a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);;(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}
f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}
if(g=="hide"){a.from.opacity=1;a.to.opacity=0}}
e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","left","width","height","overflow","opacity"],g=["position","top","left","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}
var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}
if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}
if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}
c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);child.to=c.effects.setTransition(child,f,d.to.y,child.to)}
if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}
child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}
a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);;(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","left"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);;(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","left"],e=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(e=="show")a.css(f,b=="pos"?-g:g);var i={};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);;(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);;
(function($){$.fn.autofill=function(text_value){return this.each(function(){var obj=$(this);if(text_value==null){text_value=obj.attr("title");}
if(document.activeElement!=obj[0]){obj.val(text_value);}
obj.focus(function(){if(obj.val()==text_value){obj.val('');}}).blur(function(){if(obj.val()==''){obj.val(text_value);}});});};})(jQuery);
(function($)
{$.fn.carousel=function(params)
{var params=$.extend({direction:"horizontal",loop:false,dispItems:1,pagination:false,paginationPosition:"inside",paginationType:"all",nextBtn:'<a role="button">Next</a>',prevBtn:'<a role="button">Previous</a>',buttonsAlign:"left",btnsPosition:"inside",nextBtnInsert:"appendTo",prevBtnInsert:"prependTo",nextBtnInsertFn:false,prevBtnInsertFn:false,autoSlide:false,autoSlideInterval:3000,delayAutoSlide:false,combinedClasses:false,effect:"slide",slideEasing:"swing",animSpeed:"normal",equalWidths:"true",verticalMargin:0,callback:function(){},useAddress:false,adressIdentifier:"carousel",tabLabel:function(tabNum)
{return tabNum;}},params);if(params.btnsPosition=="outside")
{params.prevBtnInsert="insertBefore";params.nextBtnInsert="insertAfter";}
params.delayAutoSlide=params.delayAutoSlide||params.autoSlideInterval;return this.each(function()
{var env={$elts:{},params:params,launchOnLoad:[]};env.$elts.carousel=$(this).addClass("js");env.$elts.content=$(this).children().css({position:"absolute","top":0});env.$elts.wrap=env.$elts.content.wrap('<div class="carousel-wrap"></div>').parent().css({overflow:"hidden",position:"relative"});env.steps={first:0,count:env.$elts.content.children().length};env.steps.last=env.steps.count-1;if(env.params.buttonPosition="below"){env.$elts.buttonrow=$(this).parent().children(".carousel-button-row");if(env.$elts.buttonrow.length<1){env.$elts.buttonrow=$(this.appendChild(document.createElement("div"))).addClass("carousel-button-row");$(this).append(env.$elts.buttonrow);}
if(env.params.buttonsAlign=='right')
{env.$elts.buttonrow.addClass("LayoutHAlignRight");env.$elts.buttons=$(env.$elts.buttonrow[0].appendChild(document.createElement("div"))).addClass("LayoutHAlignItems");env.$elts.buttonrow.append(env.$elts.buttons);}
else if(env.params.buttonsAlign=='split')
{env.$elts.buttons=$(env.$elts.buttonrow[0].appendChild(document.createElement("div"))).addClass("LayoutHAlignItems");env.$elts.buttonrow.append(env.$elts.buttons);}
else
{env.$elts.buttons=env.$elts.buttonrow;}
env.$elts.buttons.addClass("carousel-buttons");if($.isFunction(env.params.prevBtnInsertFn))
{env.$elts.prevBtn=env.params.prevBtnInsertFn(env.$elts.buttons);}
else
{env.$elts.prevBtn=$(params.prevBtn)[params.prevBtnInsert](env.$elts.buttons);}
if($.isFunction(env.params.nextBtnInsertFn))
{env.$elts.nextBtn=env.params.nextBtnInsertFn(env.$elts.buttons);}
else
{env.$elts.nextBtn=$(params.nextBtn)[params.nextBtnInsert](env.$elts.buttons);}
if(env.params.buttonsAlign=='right')
{env.$elts.prevBtn.wrap('<div class="LayoutHItem"></div>');env.$elts.nextBtn.wrap('<div class="LayoutHItem"></div>');}
else if(env.params.buttonsAlign=='split')
{env.$elts.prevBtn.wrap('<div class="LayoutHItem"></div>');env.$elts.nextBtn.wrap('<div class="LayoutHItemRight"></div>');}}
env.$elts.nextBtn.addClass("carousel-control next carousel-next");env.$elts.prevBtn.addClass("carousel-control previous carousel-previous");initButtonsEvents(env);if(env.params.pagination)
{initPagination(env);}
initAddress(env);$(function()
{var $items=env.$elts.content.children();var $maxHeight=0;$items.each(function()
{$item=$(this);$itemHeight=$item.outerHeight();if($itemHeight>$maxHeight)
{$maxHeight=$itemHeight;}});if(env.params.verticalMargin>0)
{$maxHeight=$maxHeight+env.params.verticalMargin;}
$items.height($maxHeight);var $firstItem=env.$elts.content.children(":first");env.itemWidth=$firstItem.outerWidth(true);if(params.direction=="vertical")
{env.contentWidth=env.itemWidth;}
else
{if(params.equalWidths)
{env.contentWidth=env.itemWidth*env.steps.count;}
else
{env.contentWidth=(function()
{var totalWidth=0;env.$elts.content.children().each(function()
{totalWidth+=$(this).outerWidth(true);});return totalWidth;})();}}
env.$elts.content.width(env.contentWidth+1);env.itemHeight=$maxHeight;if(params.direction=="vertical")
{env.$elts.content.css({height:env.itemHeight*env.steps.count+"px"});env.$elts.content.parent().css({height:env.itemHeight*env.params.dispItems+"px"});}
else
{env.$elts.content.parent().css({height:env.itemHeight+"px",display:"block"});env.$elts.carousel.css({height:env.itemHeight+"px"});}
updateButtonsState(env);$.each(env.launchOnLoad,function(i,fn)
{fn();});if(env.params.autoSlide)
{window.setTimeout(function()
{env.autoSlideInterval=window.setInterval(function()
{goToStep(env,getRelativeStep(env,"next"));},env.params.autoSlideInterval);},env.params.delayAutoSlide);}});});};function initButtonsEvents(env)
{env.$elts.nextBtn.add(env.$elts.prevBtn).bind("enable",function()
{var $this=$(this).unbind("click").bind("click",function()
{goToStep(env,getRelativeStep(env,($this.is(".next")?"next":"prev")));stopAutoSlide(env);}).removeClass("disabled");if(env.params.combinedClasses)
{$this.removeClass("next-disabled previous-disabled");}}).bind("disable",function()
{var $this=$(this).unbind("click").addClass("disabled");if(env.params.combinedClasses)
{if($this.is(".next"))
{$this.addClass("next-disabled");}
else
{if($this.is(".previous"))
{$this.addClass("previous-disabled");}}}}).hover(function()
{$(this).toggleClass("hover");});}
function initPagination(env)
{if(env.params.btnsPosition="below"){env.$elts.pagination=$('<div class="center-wrap LayoutHItem carousel-pagination"></div>')[((env.params.paginationPosition=="outside")?"insertAfter":"prependTo")](env.$elts.buttons);}
env.$elts.paginationBtns=$([]);if(env.params.paginationType=='single'){var pageTotal;env.$elts.content.find("li").each(function(i)
{if(i%env.params.dispItems==0)
{env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<span class="UIHide"><a role="button">'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</a></span>').data("firstStep",i));pageTotal=env.$elts.paginationBtns.length;}});env.$elts.paginationBtns.length=0;env.$elts.content.find("li").each(function(i)
{if(i%env.params.dispItems==0)
{env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<span><span class="LayoutHItem TextStrong LayoutSmallGutterLeft">'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</span><span class="LayoutHItem LayoutSmallGutterLeft">of</span><span class="LayoutHItem TextStrong LayoutSmallGutterLeft">'+pageTotal+'</span></span>').data("firstStep",i));}});}
else
{env.$elts.content.find("li").each(function(i)
{if(i%env.params.dispItems==0)
{env.$elts.paginationBtns=env.$elts.paginationBtns.add($('<a role="button"><span>'+env.params.tabLabel(env.$elts.paginationBtns.length+1)+'</span></a>').data("firstStep",i));}});}
env.$elts.paginationBtns.css({display:"none"});env.$elts.paginationBtns.each(function()
{$(this).appendTo(env.$elts.pagination);});env.$elts.paginationBtns.slice(0,1).addClass("active Link LinkPointer");env.launchOnLoad.push(function(){env.$elts.paginationBtns.click(function(e){goToStep(env,$(this).data("firstStep"));stopAutoSlide(env);}).css({display:""});});}
function initAddress(env)
{if(env.params.useAddress&&$.isFunction($.fn.address))
{$.address.init(function(e)
{var pathNames=$.address.pathNames();if(pathNames[0]===env.params.adressIdentifier&&!!pathNames[1])
{goToStep(env,pathNames[1]-1);}
else
{$.address.value('/'+env.params.adressIdentifier+'/1');}}).change(function(e)
{var pathNames=$.address.pathNames();if(pathNames[0]===env.params.adressIdentifier&&!!pathNames[1])
{goToStep(env,pathNames[1]-1);}});}
else
{env.params.useAddress=false;}}
function goToStep(env,step)
{env.params.callback(step);transition(env,step);env.steps.first=step;updateButtonsState(env);if(env.params.useAddress)
{$.address.value('/'+env.params.adressIdentifier+'/'+(step+1));}}
function getRelativeStep(env,position)
{if(position=="prev")
{if((env.steps.first-env.params.dispItems)>=0)
{return env.steps.first-env.params.dispItems;}
else
{return((env.params.loop)?(env.steps.count-env.params.dispItems):false);}}
else
{if(position=="next")
{if((env.steps.first+env.params.dispItems)<env.steps.count)
{return env.steps.first+env.params.dispItems;}
else
{return((env.params.loop)?0:false);}}}}
function transition(env,step)
{switch(env.params.effect)
{case"no":if(env.params.direction=="vertical")
{env.$elts.content.css("top",-(env.itemHeight*step)+"px");}
else
{env.$elts.content.css("left",-(env.itemWidth*step)+"px");}
break;case"fade":if(env.params.direction=="vertical")
{env.$elts.content.fadeOut(env.params.animSpeed).fadeOut(env.params.animSpeed,function()
{env.$elts.content.css("top",-(env.itemHeight*step)+"px");}).fadeIn(env.params.animSpeed);}
else
{env.$elts.content.fadeOut(env.params.animSpeed,function()
{env.$elts.content.css("left",-(env.itemWidth*step)+"px");}).fadeIn(env.params.animSpeed);}
break;default:if(env.params.direction=="vertical")
{env.$elts.content.stop().animate({top:-(env.itemHeight*step)+"px"},env.params.animSpeed,env.params.slideEasing);}
else
{env.$elts.content.stop().animate({left:-(env.itemWidth*step)+"px"},env.params.animSpeed,env.params.slideEasing);}
break;}}
function updateButtonsState(env)
{if(getRelativeStep(env,"prev")!==false)
{env.$elts.prevBtn.trigger("enable");}
else
{env.$elts.prevBtn.trigger("disable");}
if(getRelativeStep(env,"next")!==false)
{env.$elts.nextBtn.trigger("enable");}
else
{env.$elts.nextBtn.trigger("disable");}
if(env.params.pagination&&env.params.paginationType=="all")
{env.$elts.paginationBtns.removeClass("active").addClass("Link LinkPointer").filter(function()
{return($(this).data("firstStep")==env.steps.first)}).addClass("active").removeClass("Link LinkPointer");}
if(env.params.pagination&&env.params.paginationType=="single")
{env.$elts.paginationBtns.removeClass("active").addClass("Link LinkPointer carousel-hidden").filter(function()
{return($(this).data("firstStep")==env.steps.first)}).addClass("active").removeClass("Link LinkPointer carousel-hidden");}}
function stopAutoSlide(env)
{if(!!env.autoSlideInterval)
{window.clearInterval(env.autoSlideInterval);}}})(jQuery);
(function($){if($.fn.caroSlider)
{return;}
$.fn.caroslider=$.fn.caroSlider=function(options,configs)
{if(this.length==0)
{debug(true,'No element found for "'+this.selector+'".');return this;}
if(this.length>1)
{return this.each(function(){$(this).caroSlider(options,configs);});}
var $cfs=this,$tt0=this[0],starting_position=false;if($cfs.data('_cfs_isCarousel'))
{starting_position=$cfs.triggerHandler('_cfs_triggerEvent','currentPosition');$cfs.trigger('_cfs_triggerEvent',['destroy',true]);}
var FN={};FN._cfs_init=function(o,setOrig,start)
{o=go_getObject($tt0,o);o.items=go_getItemsObject($tt0,o.items);o.scroll=go_getScrollObject($tt0,o.scroll);o.auto=go_getAutoObject($tt0,o.auto);o.prev=go_getPrevNextObject($tt0,o.prev);o.next=go_getPrevNextObject($tt0,o.next);o.pagination=go_getPaginationObject($tt0,o.pagination);o.swipe=go_getSwipeObject($tt0,o.swipe);o.mousewheel=go_getMousewheelObject($tt0,o.mousewheel);if(setOrig)
{opts_orig=$.extend(true,{},$.fn.caroSlider.defaults,o);}
opts=$.extend(true,{},$.fn.caroSlider.defaults,o);opts.d=cf_getDimensions(opts);crsl.direction=(opts.direction=='up'||opts.direction=='left')?'next':'prev';var a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');if(is_true(opts.cookie))
{opts.cookie='caroslider_cookie_'+conf.serialNumber;}
opts.maxDimension=ms_getMaxDimension(opts,avail_primary);opts.items=in_complementItems(opts.items,opts,a_itm,start);opts[opts.d['width']]=in_complementPrimarySize(opts[opts.d['width']],opts,a_itm);opts[opts.d['height']]=in_complementSecondarySize(opts[opts.d['height']],opts,a_itm);if(opts.responsive)
{if(!is_percentage(opts[opts.d['width']]))
{opts[opts.d['width']]='100%';}}
if(is_percentage(opts[opts.d['width']]))
{crsl.upDateOnWindowResize=true;crsl.primarySizePercentage=opts[opts.d['width']];opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);if(!opts.items.visible)
{opts.items.visibleConf.variable=true;}}
if(opts.responsive)
{opts.usePadding=false;opts.padding=[0,0,0,0];opts.align=false;opts.items.visibleConf.variable=false;}
else
{if(!opts.items.visible)
{opts=in_complementVisibleItems(opts,avail_primary);}
if(!opts[opts.d['width']])
{if(!opts.items.visibleConf.variable&&is_number(opts.items[opts.d['width']])&&opts.items.filter=='*')
{opts[opts.d['width']]=opts.items.visible*opts.items[opts.d['width']];opts.align=false;}
else
{opts[opts.d['width']]='variable';}}
if(is_undefined(opts.align))
{opts.align=(is_number(opts[opts.d['width']]))?'center':false;}
if(opts.items.visibleConf.variable)
{opts.items.visible=gn_getVisibleItemsNext(a_itm,opts,0);}}
if(opts.items.filter!='*'&&!opts.items.visibleConf.variable)
{opts.items.visibleConf.org=opts.items.visible;opts.items.visible=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
opts.items.visible=cf_getItemsAdjust(opts.items.visible,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;if(opts.responsive)
{if(!opts.items.visibleConf.min)
{opts.items.visibleConf.min=opts.items.visible;}
if(!opts.items.visibleConf.max)
{opts.items.visibleConf.max=opts.items.visible;}
opts=in_getResponsiveValues(opts,a_itm,avail_primary);}
else
{opts.padding=cf_getPadding(opts.padding);if(opts.align=='top')
{opts.align='left';}
else if(opts.align=='bottom')
{opts.align='right';}
switch(opts.align)
{case'center':case'left':case'right':if(opts[opts.d['width']]!='variable')
{opts=in_getAlignPadding(opts,a_itm);opts.usePadding=true;}
break;default:opts.align=false;opts.usePadding=(opts.padding[0]==0&&opts.padding[1]==0&&opts.padding[2]==0&&opts.padding[3]==0)?false:true;break;}}
if(!is_number(opts.scroll.duration))
{opts.scroll.duration=500;}
if(is_undefined(opts.scroll.items))
{opts.scroll.items=(opts.responsive||opts.items.visibleConf.variable||opts.items.filter!='*')?'visible':opts.items.visible;}
opts.auto=$.extend(true,{},opts.scroll,opts.auto);opts.prev=$.extend(true,{},opts.scroll,opts.prev);opts.next=$.extend(true,{},opts.scroll,opts.next);opts.pagination=$.extend(true,{},opts.scroll,opts.pagination);opts.auto=go_complementAutoObject($tt0,opts.auto);opts.prev=go_complementPrevNextObject($tt0,opts.prev);opts.next=go_complementPrevNextObject($tt0,opts.next);opts.pagination=go_complementPaginationObject($tt0,opts.pagination);opts.swipe=go_complementSwipeObject($tt0,opts.swipe);opts.mousewheel=go_complementMousewheelObject($tt0,opts.mousewheel);if(opts.synchronise)
{opts.synchronise=cf_getSynchArr(opts.synchronise);}
if(opts.auto.onPauseStart)
{opts.auto.onTimeoutStart=opts.auto.onPauseStart;deprecated('auto.onPauseStart','auto.onTimeoutStart');}
if(opts.auto.onPausePause)
{opts.auto.onTimeoutPause=opts.auto.onPausePause;deprecated('auto.onPausePause','auto.onTimeoutPause');}
if(opts.auto.onPauseEnd)
{opts.auto.onTimeoutEnd=opts.auto.onPauseEnd;deprecated('auto.onPauseEnd','auto.onTimeoutEnd');}
if(opts.auto.pauseDuration)
{opts.auto.timeoutDuration=opts.auto.pauseDuration;deprecated('auto.pauseDuration','auto.timeoutDuration');}};FN._cfs_build=function(){$cfs.data('_cfs_isCarousel',true);var a_itm=$cfs.children(),orgCSS=in_mapCss($cfs,['textAlign','float','position','top','right','bottom','left','zIndex','width','height','marginTop','marginRight','marginBottom','marginLeft']),newPosition='relative';switch(orgCSS.position)
{case'absolute':case'fixed':newPosition=orgCSS.position;break;}
if(conf.wrapper=='parent')
{sz_storeOrigCss($wrp);}
else
{$wrp.css(orgCSS);}
$wrp.css({'overflow':'hidden','position':newPosition});sz_storeOrigCss($cfs);$cfs.data('_cfs_origCssZindex',orgCSS.zIndex);$cfs.css({'textAlign':'left','float':'none','position':'absolute','top':0,'right':'auto','bottom':'auto','left':0,'marginTop':0,'marginRight':0,'marginBottom':0,'marginLeft':0});sz_storeMargin(a_itm,opts);sz_storeOrigCss(a_itm);if(opts.responsive)
{sz_setResponsiveSizes(opts,a_itm);}};FN._cfs_bind_events=function(){FN._cfs_unbind_events();$cfs.bind(cf_e('stop',conf),function(e,imm){e.stopPropagation();if(!crsl.isStopped)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('stopped',conf));}}
crsl.isStopped=true;if(opts.auto.play)
{opts.auto.play=false;$cfs.trigger(cf_e('pause',conf),imm);}
return true;});$cfs.bind(cf_e('finish',conf),function(e){e.stopPropagation();if(crsl.isScrolling)
{sc_stopScroll(scrl);}
return true;});$cfs.bind(cf_e('pause',conf),function(e,imm,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);if(imm&&crsl.isScrolling)
{scrl.isStopped=true;var nst=getTime()-scrl.startTime;scrl.duration-=nst;if(scrl.pre)
{scrl.pre.duration-=nst;}
if(scrl.post)
{scrl.post.duration-=nst;}
sc_stopScroll(scrl,false);}
if(!crsl.isPaused&&!crsl.isScrolling)
{if(res)
{tmrs.timePassed+=getTime()-tmrs.startTime;}}
if(!crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.addClass(cf_c('paused',conf));}}
crsl.isPaused=true;if(opts.auto.onTimeoutPause)
{var dur1=opts.auto.timeoutDuration-tmrs.timePassed,perc=100-Math.ceil(dur1*100/opts.auto.timeoutDuration);opts.auto.onTimeoutPause.call($tt0,perc,dur1);}
return true;});$cfs.bind(cf_e('play',conf),function(e,dir,del,res){e.stopPropagation();tmrs=sc_clearTimers(tmrs);var v=[dir,del,res],t=['string','number','boolean'],a=cf_sortParams(v,t);dir=a[0];del=a[1];res=a[2];if(dir!='prev'&&dir!='next')
{dir=crsl.direction;}
if(!is_number(del))
{del=0;}
if(!is_boolean(res))
{res=false;}
if(res)
{crsl.isStopped=false;opts.auto.play=true;}
if(!opts.auto.play)
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped: Not scrolling.');}
if(crsl.isPaused)
{if(opts.auto.button)
{opts.auto.button.removeClass(cf_c('stopped',conf));opts.auto.button.removeClass(cf_c('paused',conf));}}
crsl.isPaused=false;tmrs.startTime=getTime();var dur1=opts.auto.timeoutDuration+del;dur2=dur1-tmrs.timePassed;perc=100-Math.ceil(dur2*100/dur1);if(opts.auto.progress)
{tmrs.progress=setInterval(function(){var pasd=getTime()-tmrs.startTime+tmrs.timePassed,perc=Math.ceil(pasd*100/dur1);opts.auto.progress.updater.call(opts.auto.progress.bar[0],perc);},opts.auto.progress.interval);}
tmrs.auto=setTimeout(function(){if(opts.auto.progress)
{opts.auto.progress.updater.call(opts.auto.progress.bar[0],100);}
if(opts.auto.onTimeoutEnd)
{opts.auto.onTimeoutEnd.call($tt0,perc,dur2);}
if(crsl.isScrolling)
{$cfs.trigger(cf_e('play',conf),dir);}
else
{$cfs.trigger(cf_e(dir,conf),opts.auto);}},dur2);if(opts.auto.onTimeoutStart)
{opts.auto.onTimeoutStart.call($tt0,perc,dur2);}
return true;});$cfs.bind(cf_e('resume',conf),function(e){e.stopPropagation();if(scrl.isStopped)
{scrl.isStopped=false;crsl.isPaused=false;crsl.isScrolling=true;scrl.startTime=getTime();sc_startScroll(scrl,conf);}
else
{$cfs.trigger(cf_e('play',conf));}
return true;});$cfs.bind(cf_e('prev',conf)+' '+cf_e('next',conf),function(e,obj,num,clb,que){e.stopPropagation();if(crsl.isStopped||$cfs.is(':hidden'))
{e.stopImmediatePropagation();return debug(conf,'Carousel stopped or hidden: Not scrolling.');}
var minimum=(is_number(opts.items.minimum))?opts.items.minimum:opts.items.visible+1;if(minimum>itms.total)
{e.stopImmediatePropagation();return debug(conf,'Not enough items ('+itms.total+' total, '+minimum+' needed): Not scrolling.');}
var v=[obj,num,clb,que],t=['object','number/string','function','boolean'],a=cf_sortParams(v,t);obj=a[0];num=a[1];clb=a[2];que=a[3];var eType=e.type.slice(conf.events.prefix.length);if(!is_object(obj))
{obj={};}
if(is_function(clb))
{obj.onAfter=clb;}
if(is_boolean(que))
{obj.queue=que;}
obj=$.extend(true,{},opts[eType],obj);if(obj.conditions&&!obj.conditions.call($tt0,eType))
{e.stopImmediatePropagation();return debug(conf,'Callback "conditions" returned false.');}
if(!is_number(num))
{if(opts.items.filter!='*')
{num='visible';}
else
{var arr=[num,obj.items,opts[eType].items];for(var a=0,l=arr.length;a<l;a++)
{if(is_number(arr[a])||arr[a]=='page'||arr[a]=='visible'){num=arr[a];break;}}}
switch(num){case'page':e.stopImmediatePropagation();return $cfs.triggerHandler(cf_e(eType+'Page',conf),[obj,clb]);break;case'visible':if(!opts.items.visibleConf.variable&&opts.items.filter=='*')
{num=opts.items.visible;}
break;}}
if(scrl.isStopped)
{$cfs.trigger(cf_e('resume',conf));$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);e.stopImmediatePropagation();return debug(conf,'Carousel resumed scrolling.');}
if(obj.duration>0)
{if(crsl.isScrolling)
{if(obj.queue)
{if(obj.queue=='last')
{queu=[];}
if(obj.queue!='first'||queu.length==0)
{$cfs.trigger(cf_e('queue',conf),[eType,[obj,num,clb]]);}}
e.stopImmediatePropagation();return debug(conf,'Carousel currently scrolling.');}}
tmrs.timePassed=0;$cfs.trigger(cf_e('slide_'+eType,conf),[obj,num]);if(opts.synchronise)
{var s=opts.synchronise,c=[obj,num];for(var j=0,l=s.length;j<l;j++){var d=eType;if(!s[j][2])
{d=(d=='prev')?'next':'prev';}
if(!s[j][1])
{c[0]=s[j][0].triggerHandler('_cfs_triggerEvent',['configuration',d]);}
c[1]=num+s[j][3];s[j][0].trigger('_cfs_triggerEvent',['slide_'+d,c]);}}
return true;});$cfs.bind(cf_e('slide_prev',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==0)
{if(opts.infinite)
{$cfs.trigger(cf_e('next',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.visibleConf.variable)
{nI=gn_getVisibleItemsPrev(a_itm,opts,itms.total-1);}
else if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsPrevFilter(a_itm,opts,itms.total-1,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
if(!opts.circular)
{if(itms.total-nI<itms.first)
{nI=itms.total-itms.first;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);if(opts.items.visible+nI<=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNext(a_itm,opts,itms.total-nI),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,itms.total-nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items backward.');itms.first+=nI;while(itms.first>=itms.total)
{itms.first-=itms.total;}
if(!opts.circular)
{if(itms.first==0&&sO.onEnd)
{sO.onEnd.call($tt0,'prev');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
$cfs.children().slice(itms.total-nI,itms.total).prependTo($cfs);if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsPrev(a_itm,opts,nI),i_new=gi_getNewItemsPrev(a_itm,opts),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var oL=(pL<0)?opts.padding[opts.d[3]]:0;var hiddenitems=false,i_skp=$();if(opts.items.visible<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_new_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_wsz={},a_cur={},a_old={},a_new={},a_lef={},a_lef_vis={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'cover':case'cover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visible),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
sz_resetMargin(a_itm,opts,true);if(pR>=0)
{sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);}
if(pL>=0)
{sz_resetMargin(i_cur_l,opts,opts.padding[opts.d[3]]);}
if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=-(i_siz-oL);a_lef_vis[opts.d['left']]=-(i_siz_vis-oL);a_wsz[opts.d['left']]=w_siz[opts.d['width']];var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingnew=function(){},_a_paddingnew=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);break;}
switch(sO.fx)
{case'crossfade':case'uncover':case'uncover-fade':$cf2.children().slice(0,nI).remove();$cf2.children().slice(opts.items.visibleConf.old).remove();break;case'cover':case'cover-fade':$cf2.children().slice(opts.items.visible).remove();$cf2.css(a_lef_vis);break;}
$cfs.css(a_lef);scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{if(i_new_l.not(i_cur_l).length)
{a_cur[opts.d['marginRight']]=i_cur_l.data('_cfs_origCssMargin');if(pL<0)
{i_cur_l.css(a_cur);}
else
{_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}}
switch(sO.fx)
{case'cover':case'cover-fade':$cf2.children().eq(nI-1).css(a_cur);break;}
if(i_new_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};}
if(pR>=0)
{a_new[opts.d['marginRight']]=i_new_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]];_s_paddingnew=function(){i_new_l.css(a_new);};_a_paddingnew=function(){scrl.anims.push([i_new_l,a_new]);};}}
_position=function(){$cfs.css(a_cfs);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();i_old=$($cfs.children().slice(itms.total-(opts.items.visible-overFill)).get().concat($cfs.children().slice(0,overFill).get()));}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{var l_itm=$cfs.children().eq(opts.items.visible+nI-1);l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'prev',a_dur,w_siz);_onafter=function(){sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'cover':scrl.anims.push([$cf2,a_cfs,function(){_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'cover-fade':scrl.anims.push([$cfs,{'opacity':0}]);scrl.anims.push([$cf2,a_cfs,function(){$cfs.css({'opacity':1});_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();_onafter();}]);_a_wrapper();break;case'uncover':scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_wsz,_onafter]);_a_wrapper();_s_paddingold();_s_paddingnew();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingnew();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slide_next',conf),function(e,sO,nI){e.stopPropagation();var a_itm=$cfs.children();if(!opts.circular)
{if(itms.first==opts.items.visible)
{if(opts.infinite)
{$cfs.trigger(cf_e('prev',conf),itms.total-1);}
return e.stopImmediatePropagation();}}
sz_resetMargin(a_itm,opts);if(!is_number(nI))
{if(opts.items.filter!='*')
{var xI=(is_number(sO.items))?sO.items:gn_getVisibleOrg($cfs,opts);nI=gn_getScrollItemsNextFilter(a_itm,opts,0,xI);}
else
{nI=opts.items.visible;}
nI=cf_getAdjust(nI,opts,sO.items,$tt0);}
var lastItemNr=(itms.first==0)?itms.total:itms.first;if(!opts.circular)
{if(opts.items.visibleConf.variable)
{var vI=gn_getVisibleItemsNext(a_itm,opts,nI),xI=gn_getVisibleItemsPrev(a_itm,opts,lastItemNr-1);}
else
{var vI=opts.items.visible,xI=opts.items.visible;}
if(nI+vI>lastItemNr)
{nI=lastItemNr-xI;}}
opts.items.visibleConf.old=opts.items.visible;if(opts.items.visibleConf.variable)
{var vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);while(opts.items.visible-nI>=vI&&nI<itms.total)
{nI++;vI=cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(a_itm,opts,nI,lastItemNr),opts,opts.items.visibleConf.adjust,$tt0);}
opts.items.visible=vI;}
else if(opts.items.filter!='*')
{var vI=gn_getVisibleItemsNextFilter(a_itm,opts,nI);opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);}
sz_resetMargin(a_itm,opts,true);if(nI==0)
{e.stopImmediatePropagation();return debug(conf,'0 items to scroll: Not scrolling.');}
debug(conf,'Scrolling '+nI+' items forward.');itms.first-=nI;while(itms.first<0)
{itms.first+=itms.total;}
if(!opts.circular)
{if(itms.first==opts.items.visible&&sO.onEnd)
{sO.onEnd.call($tt0,'next');}
if(!opts.infinite)
{nv_enableNavi(opts,itms.first,conf);}}
if(itms.total<opts.items.visible+nI)
{$cfs.children().slice(0,(opts.items.visible+nI)-itms.total).clone(true).appendTo($cfs);}
var a_itm=$cfs.children(),i_old=gi_getOldItemsNext(a_itm,opts),i_new=gi_getNewItemsNext(a_itm,opts,nI),i_cur_l=a_itm.eq(nI-1),i_old_l=i_old.last(),i_new_l=i_new.last();sz_resetMargin(a_itm,opts);var pL=0,pR=0;if(opts.align)
{var p=cf_getAlignPadding(i_new,opts);pL=p[0];pR=p[1];}
var hiddenitems=false,i_skp=$();if(opts.items.visibleConf.old<nI)
{i_skp=a_itm.slice(opts.items.visibleConf.old,nI);if(sO.fx=='directscroll')
{var orgW=opts.items[opts.d['width']];hiddenitems=i_skp;i_cur_l=i_old_l;sc_hideHiddenItems(hiddenitems);opts.items[opts.d['width']]='variable';}}
var $cf2=false,i_siz=ms_getTotalSize(a_itm.slice(0,nI),opts,'width'),w_siz=cf_mapWrapperSizes(ms_getSizes(i_new,opts,true),opts,!opts.usePadding),i_siz_vis=0,a_cfs={},a_cfs_vis={},a_cur={},a_old={},a_lef={},a_dur=sc_getDuration(sO,opts,nI,i_siz);switch(sO.fx)
{case'uncover':case'uncover-fade':i_siz_vis=ms_getTotalSize(a_itm.slice(0,opts.items.visibleConf.old),opts,'width');break;}
if(hiddenitems)
{opts.items[opts.d['width']]=orgW;}
if(opts.align)
{if(opts.padding[opts.d[1]]<0)
{opts.padding[opts.d[1]]=0;}}
sz_resetMargin(a_itm,opts,true);sz_resetMargin(i_old_l,opts,opts.padding[opts.d[1]]);if(opts.align)
{opts.padding[opts.d[1]]=pR;opts.padding[opts.d[3]]=pL;}
a_lef[opts.d['left']]=(opts.usePadding)?opts.padding[opts.d[3]]:0;var _s_wrapper=function(){},_a_wrapper=function(){},_s_paddingold=function(){},_a_paddingold=function(){},_s_paddingcur=function(){},_a_paddingcur=function(){},_onafter=function(){},_moveitems=function(){},_position=function(){};switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':case'uncover':case'uncover-fade':$cf2=$cfs.clone(true).appendTo($wrp);$cf2.children().slice(opts.items.visibleConf.old).remove();break;}
switch(sO.fx)
{case'crossfade':case'cover':case'cover-fade':$cfs.css('zIndex',1);$cf2.css('zIndex',0);break;}
scrl=sc_setScroll(a_dur,sO.easing,conf);a_cfs[opts.d['left']]=-i_siz;a_cfs_vis[opts.d['left']]=-i_siz_vis;if(pL<0)
{a_cfs[opts.d['left']]+=pL;}
if(opts[opts.d['width']]=='variable'||opts[opts.d['height']]=='variable')
{_s_wrapper=function(){$wrp.css(w_siz);};_a_wrapper=function(){scrl.anims.push([$wrp,w_siz]);};}
if(opts.usePadding)
{var i_new_l_m=i_new_l.data('_cfs_origCssMargin');if(pR>=0)
{i_new_l_m+=opts.padding[opts.d[1]];}
i_new_l.css(opts.d['marginRight'],i_new_l_m);if(i_cur_l.not(i_old_l).length)
{a_old[opts.d['marginRight']]=i_old_l.data('_cfs_origCssMargin');}
_s_paddingold=function(){i_old_l.css(a_old);};_a_paddingold=function(){scrl.anims.push([i_old_l,a_old]);};var i_cur_l_m=i_cur_l.data('_cfs_origCssMargin');if(pL>0)
{i_cur_l_m+=opts.padding[opts.d[3]];}
a_cur[opts.d['marginRight']]=i_cur_l_m;_s_paddingcur=function(){i_cur_l.css(a_cur);};_a_paddingcur=function(){scrl.anims.push([i_cur_l,a_cur]);};}
_position=function(){$cfs.css(a_lef);};var overFill=opts.items.visible+nI-itms.total;_moveitems=function(){if(overFill>0)
{$cfs.children().slice(itms.total).remove();}
var l_itm=$cfs.children().slice(0,nI).appendTo($cfs).last();if(overFill>0)
{i_new=gi_getCurrentItems(a_itm,opts);}
sc_showHiddenItems(hiddenitems);if(opts.usePadding)
{if(itms.total<opts.items.visible+nI){var i_cur_l=$cfs.children().eq(opts.items.visible-1);i_cur_l.css(opts.d['marginRight'],i_cur_l.data('_cfs_origCssMargin')+opts.padding[opts.d[1]]);}
l_itm.css(opts.d['marginRight'],l_itm.data('_cfs_origCssMargin'));}};var cb_arguments=sc_mapCallbackArguments(i_old,i_skp,i_new,nI,'next',a_dur,w_siz);_onafter=function(){$cfs.css('zIndex',$cfs.data('_cfs_origCssZindex'));sc_afterScroll($cfs,$cf2,sO);crsl.isScrolling=false;clbk.onAfter=sc_fireCallbacks($tt0,sO,'onAfter',cb_arguments,clbk);queu=sc_fireQueue($cfs,queu,conf);if(!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}};crsl.isScrolling=true;tmrs=sc_clearTimers(tmrs);clbk.onBefore=sc_fireCallbacks($tt0,sO,'onBefore',cb_arguments,clbk);switch(sO.fx)
{case'none':$cfs.css(a_cfs);_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();_onafter();break;case'fade':scrl.anims.push([$cfs,{'opacity':0},function(){_s_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();scrl=sc_setScroll(a_dur,sO.easing,conf);scrl.anims.push([$cfs,{'opacity':1},_onafter]);sc_startScroll(scrl,conf);}]);break;case'crossfade':$cfs.css({'opacity':0});scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,{'opacity':1},_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'cover':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'cover-fade':$cfs.css(opts.d['left'],$wrp[opts.d['width']]());scrl.anims.push([$cf2,{'opacity':0}]);scrl.anims.push([$cfs,a_lef,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_moveitems();break;case'uncover':scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;case'uncover-fade':$cfs.css({'opacity':0});scrl.anims.push([$cfs,{'opacity':1}]);scrl.anims.push([$cf2,a_cfs_vis,_onafter]);_a_wrapper();_s_paddingold();_s_paddingcur();_position();_moveitems();break;default:scrl.anims.push([$cfs,a_cfs,function(){_position();_moveitems();_onafter();}]);_a_wrapper();_a_paddingold();_a_paddingcur();break;}
sc_startScroll(scrl,conf);cf_setCookie(opts.cookie,$cfs,conf);$cfs.trigger(cf_e('updatePageStatus',conf),[false,w_siz]);return true;});$cfs.bind(cf_e('slideTo',conf),function(e,num,dev,org,obj,dir,clb){e.stopPropagation();var v=[num,dev,org,obj,dir,clb],t=['string/number/object','number','boolean','object','string','function'],a=cf_sortParams(v,t);obj=a[3];dir=a[4];clb=a[5];num=gn_getItemIndex(a[0],a[1],a[2],itms,$cfs);if(num==0)
{return false;}
if(!is_object(obj))
{obj=false;}
if(dir!='prev'&&dir!='next')
{if(opts.circular)
{dir=(num<=itms.total/2)?'next':'prev';}
else
{dir=(itms.first==0||itms.first>num)?'next':'prev';}}
if(dir=='prev')
{num=itms.total-num;}
$cfs.trigger(cf_e(dir,conf),[obj,num,clb]);return true;});$cfs.bind(cf_e('prevPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur-1,obj,'prev',clb]);});$cfs.bind(cf_e('nextPage',conf),function(e,obj,clb){e.stopPropagation();var cur=$cfs.triggerHandler(cf_e('currentPage',conf));return $cfs.triggerHandler(cf_e('slideToPage',conf),[cur+1,obj,'next',clb]);});$cfs.bind(cf_e('slideToPage',conf),function(e,pag,obj,dir,clb){e.stopPropagation();if(!is_number(pag))
{pag=$cfs.triggerHandler(cf_e('currentPage',conf));}
var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp)-1;if(pag<0)
{pag=max;}
if(pag>max)
{pag=0;}
return $cfs.triggerHandler(cf_e('slideTo',conf),[pag*ipp,0,true,obj,dir,clb]);});$cfs.bind(cf_e('jumpToStart',conf),function(e,s){e.stopPropagation();if(s)
{s=gn_getItemIndex(s,0,true,itms,$cfs);}
else
{s=0;}
s+=itms.first;if(s!=0)
{if(itms.total>0)
{while(s>itms.total)
{s-=itms.total;}}
$cfs.prepend($cfs.children().slice(s,itms.total));}
return true;});$cfs.bind(cf_e('synchronise',conf),function(e,s){e.stopPropagation();if(s)
{s=cf_getSynchArr(s);}
else if(opts.synchronise)
{s=opts.synchronise;}
else
{return debug(conf,'No carousel to synchronise.');}
var n=$cfs.triggerHandler(cf_e('currentPosition',conf)),x=true;for(var j=0,l=s.length;j<l;j++)
{if(!s[j][0].triggerHandler(cf_e('slideTo',conf),[n,s[j][3],true]))
{x=false;}}
return x;});$cfs.bind(cf_e('queue',conf),function(e,dir,opt){e.stopPropagation();if(is_function(dir))
{dir.call($tt0,queu);}
else if(is_array(dir))
{queu=dir;}
else if(!is_undefined(dir))
{queu.push([dir,opt]);}
return queu;});$cfs.bind(cf_e('insertItem',conf),function(e,itm,num,org,dev){e.stopPropagation();var v=[itm,num,org,dev],t=['string/object','string/number/object','boolean','number'],a=cf_sortParams(v,t);itm=a[0];num=a[1];org=a[2];dev=a[3];if(is_object(itm)&&!is_jquery(itm))
{itm=$(itm);}
else if(is_string(itm))
{itm=$(itm);}
if(!is_jquery(itm)||itm.length==0)
{return debug(conf,'Not a valid object.');}
if(is_undefined(num))
{num='end';}
sz_storeMargin(itm,opts);sz_storeOrigCss(itm);var orgNum=num,before='before';if(num=='end')
{if(org)
{if(itms.first==0)
{num=itms.total-1;before='after';}
else
{num=itms.first;itms.first+=itm.length;}
if(num<0)
{num=0;}}
else
{num=itms.total-1;before='after';}}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);}
var $cit=$cfs.children().eq(num);if($cit.length)
{$cit[before](itm);}
else
{debug(conf,'Correct insert-position not found! Appending item to the end.');$cfs.append(itm);}
if(orgNum!='end'&&!org)
{if(num<itms.first)
{itms.first+=itm.length;}}
itms.total=$cfs.children().length;if(itms.first>=itms.total)
{itms.first-=itms.total;}
$cfs.trigger(cf_e('updateSizes',conf));$cfs.trigger(cf_e('linkAnchors',conf));return true;});$cfs.bind(cf_e('removeItem',conf),function(e,num,org,dev){e.stopPropagation();var v=[num,org,dev],t=['string/number/object','boolean','number'],a=cf_sortParams(v,t);num=a[0];org=a[1];dev=a[2];var removed=false;if(num instanceof $&&num.length>1)
{$removed=$();num.each(function(i,el){var $rem=$cfs.trigger(cf_e('removeItem',conf),[$(this),org,dev]);if($rem)
{$removed=$removed.add($rem);}});return $removed;}
if(is_undefined(num)||num=='end')
{$removed=$cfs.children().last();}
else
{num=gn_getItemIndex(num,dev,org,itms,$cfs);var $removed=$cfs.children().eq(num);if($removed.length)
{if(num<itms.first)
{itms.first-=$removed.length;}}}
if($removed&&$removed.length)
{$removed.detach();itms.total=$cfs.children().length;$cfs.trigger(cf_e('updateSizes',conf));}
return $removed;});$cfs.bind(cf_e('onBefore',conf)+' '+cf_e('onAfter',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length);if(is_array(fn))
{clbk[eType]=fn;}
if(is_function(fn))
{clbk[eType].push(fn);}
return clbk[eType];});$cfs.bind(cf_e('currentPosition',conf),function(e,fn){e.stopPropagation();if(itms.first==0)
{var val=0;}
else
{var val=itms.total-itms.first;}
if(is_function(fn))
{fn.call($tt0,val);}
return val;});$cfs.bind(cf_e('currentPage',conf),function(e,fn){e.stopPropagation();var ipp=opts.pagination.items||opts.items.visible,max=Math.ceil(itms.total/ipp-1),nr;if(itms.first==0)
{nr=0;}
else if(itms.first<itms.total%ipp)
{nr=0;}
else if(itms.first==ipp&&!opts.circular)
{nr=max;}
else
{nr=Math.round((itms.total-itms.first)/ipp);}
if(nr<0)
{nr=0;}
if(nr>max)
{nr=max;}
if(is_function(fn))
{fn.call($tt0,nr);}
return nr;});$cfs.bind(cf_e('currentVisible',conf),function(e,fn){e.stopPropagation();var $i=gi_getCurrentItems($cfs.children(),opts);if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('slice',conf),function(e,f,l,fn){e.stopPropagation();if(itms.total==0)
{return false;}
var v=[f,l,fn],t=['number','number','function'],a=cf_sortParams(v,t);f=(is_number(a[0]))?a[0]:0;l=(is_number(a[1]))?a[1]:itms.total;fn=a[2];f+=itms.first;l+=itms.first;if(items.total>0)
{while(f>itms.total)
{f-=itms.total;}
while(l>itms.total)
{l-=itms.total;}
while(f<0)
{f+=itms.total;}
while(l<0)
{l+=itms.total;}}
var $iA=$cfs.children(),$i;if(l>f)
{$i=$iA.slice(f,l);}
else
{$i=$($iA.slice(f,itms.total).get().concat($iA.slice(0,l).get()));}
if(is_function(fn))
{fn.call($tt0,$i);}
return $i;});$cfs.bind(cf_e('isPaused',conf)+' '+cf_e('isStopped',conf)+' '+cf_e('isScrolling',conf),function(e,fn){e.stopPropagation();var eType=e.type.slice(conf.events.prefix.length),value=crsl[eType];if(is_function(fn))
{fn.call($tt0,value);}
return value;});$cfs.bind(cf_e('configuration',conf),function(e,a,b,c){e.stopPropagation();var reInit=false;if(is_function(a))
{a.call($tt0,opts);}
else if(is_object(a))
{opts_orig=$.extend(true,{},opts_orig,a);if(b!==false)reInit=true;else opts=$.extend(true,{},opts,a);}
else if(!is_undefined(a))
{if(is_function(b))
{var val=eval('opts.'+a);if(is_undefined(val))
{val='';}
b.call($tt0,val);}
else if(!is_undefined(b))
{if(typeof c!=='boolean')c=true;eval('opts_orig.'+a+' = b');if(c!==false)reInit=true;else eval('opts.'+a+' = b');}
else
{return eval('opts.'+a);}}
if(reInit)
{sz_resetMargin($cfs.children(),opts);FN._cfs_init(opts_orig);FN._cfs_bind_buttons();var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);}
return opts;});$cfs.bind(cf_e('linkAnchors',conf),function(e,$con,sel){e.stopPropagation();if(is_undefined($con))
{$con=$('body');}
else if(is_string($con))
{$con=$($con);}
if(!is_jquery($con)||$con.length==0)
{return debug(conf,'Not a valid object.');}
if(!is_string(sel))
{sel='a.caroslider';}
$con.find(sel).each(function(){var h=this.hash||'';if(h.length>0&&$cfs.children().index($(h))!=-1)
{$(this).unbind('click').click(function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),h);});}});return true;});$cfs.bind(cf_e('updatePageStatus',conf),function(e,build,sizes){e.stopPropagation();if(!opts.pagination.container)
{return;}
var ipp=opts.pagination.items||opts.items.visible,pgs=Math.ceil(itms.total/ipp);if(build)
{if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();opts.pagination.container.each(function(){for(var a=0;a<pgs;a++)
{var i=$cfs.children().eq(gn_getItemIndex(a*ipp,0,true,itms,$cfs));$(this).append(opts.pagination.anchorBuilder.call(i[0],a+1));}});}
opts.pagination.container.each(function(){$(this).children().unbind(opts.pagination.event).each(function(a){$(this).bind(opts.pagination.event,function(e){e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[a*ipp,-opts.pagination.deviation,true,opts.pagination]);});});});}
var selected=$cfs.triggerHandler(cf_e('currentPage',conf))+opts.pagination.deviation;if(selected>=pgs)
{selected=0;}
if(selected<0)
{selected=pgs-1;}
opts.pagination.container.each(function(){$(this).children().removeClass(cf_c('selected',conf)).eq(selected).addClass(cf_c('selected',conf));});return true;});$cfs.bind(cf_e('updateSizes',conf),function(e){var vI=opts.items.visible,a_itm=$cfs.children(),avail_primary=ms_getParentSize($wrp,opts,'width');itms.total=a_itm.length;if(crsl.primarySizePercentage)
{opts.maxDimension=avail_primary;opts[opts.d['width']]=ms_getPercentage(avail_primary,crsl.primarySizePercentage);}
else
{opts.maxDimension=ms_getMaxDimension(opts,avail_primary);}
if(opts.responsive)
{opts.items.width=opts.items.sizesConf.width;opts.items.height=opts.items.sizesConf.height;opts=in_getResponsiveValues(opts,a_itm,avail_primary);vI=opts.items.visible;sz_setResponsiveSizes(opts,a_itm);}
else if(opts.items.visibleConf.variable)
{vI=gn_getVisibleItemsNext(a_itm,opts,0);}
else if(opts.items.filter!='*')
{vI=gn_getVisibleItemsNextFilter(a_itm,opts,0);}
if(!opts.circular&&itms.first!=0&&vI>itms.first){if(opts.items.visibleConf.variable)
{var nI=gn_getVisibleItemsPrev(a_itm,opts,itms.first)-itms.first;}
else if(opts.items.filter!='*')
{var nI=gn_getVisibleItemsPrevFilter(a_itm,opts,itms.first)-itms.first;}
else
{var nI=opts.items.visible-itms.first;}
debug(conf,'Preventing non-circular: sliding '+nI+' items backward.');$cfs.trigger(cf_e('prev',conf),nI);}
opts.items.visible=cf_getItemsAdjust(vI,opts,opts.items.visibleConf.adjust,$tt0);opts.items.visibleConf.old=opts.items.visible;opts=in_getAlignPadding(opts,a_itm);var sz=sz_setSizes($cfs,opts);$cfs.trigger(cf_e('updatePageStatus',conf),[true,sz]);nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);return sz;});$cfs.bind(cf_e('destroy',conf),function(e,orgOrder){e.stopPropagation();tmrs=sc_clearTimers(tmrs);$cfs.data('_cfs_isCarousel',false);$cfs.trigger(cf_e('finish',conf));if(orgOrder)
{$cfs.trigger(cf_e('jumpToStart',conf));}
sz_restoreOrigCss($cfs.children());sz_restoreOrigCss($cfs);FN._cfs_unbind_events();FN._cfs_unbind_buttons();if(conf.wrapper=='parent')
{sz_restoreOrigCss($wrp);}
else
{$wrp.replaceWith($cfs);}
return true;});$cfs.bind(cf_e('debug',conf),function(e){debug(conf,'Carousel width: '+opts.width);debug(conf,'Carousel height: '+opts.height);debug(conf,'Item widths: '+opts.items.width);debug(conf,'Item heights: '+opts.items.height);debug(conf,'Number of items visible: '+opts.items.visible);if(opts.auto.play)
{debug(conf,'Number of items scrolled automatically: '+opts.auto.items);}
if(opts.prev.button)
{debug(conf,'Number of items scrolled backward: '+opts.prev.items);}
if(opts.next.button)
{debug(conf,'Number of items scrolled forward: '+opts.next.items);}
return conf.debug;});$cfs.bind('_cfs_triggerEvent',function(e,n,o){e.stopPropagation();return $cfs.triggerHandler(cf_e(n,conf),o);});};FN._cfs_unbind_events=function(){$cfs.unbind(cf_e('',conf));$cfs.unbind(cf_e('',conf,false));$cfs.unbind('_cfs_triggerEvent');};FN._cfs_bind_buttons=function(){FN._cfs_unbind_buttons();nv_showNavi(opts,itms.total,conf);nv_enableNavi(opts,itms.first,conf);if(opts.auto.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.auto.pauseOnHover);$wrp.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}
if(opts.auto.button)
{opts.auto.button.bind(cf_e(opts.auto.event,conf,false),function(e){e.preventDefault();var ev=false,pC=null;if(crsl.isPaused)
{ev='play';}
else if(opts.auto.pauseOnEvent)
{ev='pause';pC=bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);}
if(ev)
{$cfs.trigger(cf_e(ev,conf),pC);}});}
if(opts.prev.button)
{opts.prev.button.bind(cf_e(opts.prev.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('prev',conf));});if(opts.prev.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.prev.pauseOnHover);opts.prev.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.next.button)
{opts.next.button.bind(cf_e(opts.next.event,conf,false),function(e){e.preventDefault();$cfs.trigger(cf_e('next',conf));});if(opts.next.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.next.pauseOnHover);opts.next.button.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.pagination.container)
{if(opts.pagination.pauseOnHover)
{var pC=bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);opts.pagination.container.bind(cf_e('mouseenter',conf,false),function(){$cfs.trigger(cf_e('pause',conf),pC);}).bind(cf_e('mouseleave',conf,false),function(){$cfs.trigger(cf_e('resume',conf));});}}
if(opts.prev.key||opts.next.key)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k==opts.next.key)
{e.preventDefault();$cfs.trigger(cf_e('next',conf));}
if(k==opts.prev.key)
{e.preventDefault();$cfs.trigger(cf_e('prev',conf));}});}
if(opts.pagination.keys)
{$(document).bind(cf_e('keyup',conf,false,true,true),function(e){var k=e.keyCode;if(k>=49&&k<58)
{k=(k-49)*opts.items.visible;if(k<=itms.total)
{e.preventDefault();$cfs.trigger(cf_e('slideTo',conf),[k,0,true,opts.pagination]);}}});}
if($.fn.swipe)
{var isTouch='ontouchstart'in window;if((isTouch&&opts.swipe.onTouch)||(!isTouch&&opts.swipe.onMouse))
{var scP=$.extend(true,{},opts.prev,opts.swipe),scN=$.extend(true,{},opts.next,opts.swipe),swP=function(){$cfs.trigger(cf_e('prev',conf),[scP])},swN=function(){$cfs.trigger(cf_e('next',conf),[scN])};switch(opts.direction)
{case'up':case'down':opts.swipe.options.swipeUp=swN;opts.swipe.options.swipeDown=swP;break;default:opts.swipe.options.swipeLeft=swN;opts.swipe.options.swipeRight=swP;}
if(crsl.swipe)
{$cfs.swipe('destroy');}
$wrp.swipe(opts.swipe.options);$wrp.css('cursor','move');crsl.swipe=true;}}
if($.fn.mousewheel)
{if(opts.mousewheel)
{var mcP=$.extend(true,{},opts.prev,opts.mousewheel),mcN=$.extend(true,{},opts.next,opts.mousewheel);if(crsl.mousewheel)
{$wrp.unbind(cf_e('mousewheel',conf,false));}
$wrp.bind(cf_e('mousewheel',conf,false),function(e,delta){e.preventDefault();if(delta>0)
{$cfs.trigger(cf_e('prev',conf),[mcP]);}
else
{$cfs.trigger(cf_e('next',conf),[mcN]);}});crsl.mousewheel=true;}}
if(opts.auto.play)
{$cfs.trigger(cf_e('play',conf),opts.auto.delay);}
if(crsl.upDateOnWindowResize)
{var resizeFn=function(e){$cfs.trigger(cf_e('finish',conf));if(opts.auto.pauseOnResize&&!crsl.isPaused)
{$cfs.trigger(cf_e('play',conf));}
sz_resetMargin($cfs.children(),opts);$cfs.trigger(cf_e('updateSizes',conf));};var $w=$(window),onResize=null;if($.debounce&&conf.onWindowResize=='debounce')
{onResize=$.debounce(200,resizeFn);}
else if($.throttle&&conf.onWindowResize=='throttle')
{onResize=$.throttle(300,resizeFn);}
else
{var _windowWidth=0,_windowHeight=0;onResize=function(){var nw=$w.width(),nh=$w.height();if(nw!=_windowWidth||nh!=_windowHeight)
{resizeFn();_windowWidth=nw;_windowHeight=nh;}};}
$w.bind(cf_e('resize',conf,false,true,true),onResize);}};FN._cfs_unbind_buttons=function(){var ns1=cf_e('',conf),ns2=cf_e('',conf,false);ns3=cf_e('',conf,false,true,true);$(document).unbind(ns3);$(window).unbind(ns3);$wrp.unbind(ns2);if(opts.auto.button)
{opts.auto.button.unbind(ns2);}
if(opts.prev.button)
{opts.prev.button.unbind(ns2);}
if(opts.next.button)
{opts.next.button.unbind(ns2);}
if(opts.pagination.container)
{opts.pagination.container.unbind(ns2);if(opts.pagination.anchorBuilder)
{opts.pagination.container.children().remove();}}
if(crsl.swipe)
{$cfs.swipe('destroy');$wrp.css('cursor','default');crsl.swipe=false;}
if(crsl.mousewheel)
{crsl.mousewheel=false;}
nv_showNavi(opts,'hide',conf);nv_enableNavi(opts,'removeClass',conf);};if(is_boolean(configs))
{configs={'debug':configs};}
var crsl={'direction':'next','isPaused':true,'isScrolling':false,'isStopped':false,'mousewheel':false,'swipe':false},itms={'total':$cfs.children().length,'first':0},tmrs={'auto':null,'progress':null,'startTime':getTime(),'timePassed':0},scrl={'isStopped':false,'duration':0,'startTime':0,'easing':'','anims':[]},clbk={'onBefore':[],'onAfter':[]},queu=[],conf=$.extend(true,{},$.fn.caroSlider.configs,configs),opts={},opts_orig=$.extend(true,{},options),$wrp=(conf.wrapper=='parent')?$cfs.parent():$cfs.wrap('<'+conf.wrapper.element+' class="'+conf.wrapper.classname+'" />').parent();conf.selector=$cfs.selector;conf.serialNumber=$.fn.caroSlider.serialNumber++;conf.transition=(conf.transition&&$.fn.transition)?'transition':'animate';FN._cfs_init(opts_orig,true,starting_position);FN._cfs_build();FN._cfs_bind_events();FN._cfs_bind_buttons();if(is_array(opts.items.start))
{var start_arr=opts.items.start;}
else
{var start_arr=[];if(opts.items.start!=0)
{start_arr.push(opts.items.start);}}
if(opts.cookie)
{start_arr.unshift(parseInt(cf_getCookie(opts.cookie),10));}
if(start_arr.length>0)
{for(var a=0,l=start_arr.length;a<l;a++)
{var s=start_arr[a];if(s==0)
{continue;}
if(s===true)
{s=window.location.hash;if(s.length<1)
{continue;}}
else if(s==='random')
{s=Math.floor(Math.random()*itms.total);}
if($cfs.triggerHandler(cf_e('slideTo',conf),[s,0,true,{fx:'none'}]))
{break;}}}
var siz=sz_setSizes($cfs,opts),itm=gi_getCurrentItems($cfs.children(),opts);if(opts.onCreate)
{opts.onCreate.call($tt0,{'width':siz.width,'height':siz.height,'items':itm});}
$cfs.trigger(cf_e('updatePageStatus',conf),[true,siz]);$cfs.trigger(cf_e('linkAnchors',conf));if(conf.debug)
{$cfs.trigger(cf_e('debug',conf));}
return $cfs;};$.fn.caroSlider.serialNumber=1;$.fn.caroSlider.defaults={'synchronise':false,'infinite':true,'circular':true,'responsive':false,'direction':'left','items':{'start':0},'scroll':{'easing':'swing','duration':500,'pauseOnHover':false,'event':'click','queue':false}};$.fn.caroSlider.configs={'debug':false,'transition':false,'onWindowResize':'throttle','events':{'prefix':'','namespace':'cfs'},'wrapper':{'element':'div','classname':'caroslider_wrapper'},'classnames':{}};$.fn.caroSlider.pageAnchorBuilder=function(nr){return'<a href="#"><span>'+nr+'</span></a>';};$.fn.caroSlider.progressbarUpdater=function(perc){$(this).css('width',perc+'%');};$.fn.caroSlider.cookie={get:function(n){n+='=';var ca=document.cookie.split(';');for(var a=0,l=ca.length;a<l;a++)
{var c=ca[a];while(c.charAt(0)==' ')
{c=c.slice(1);}
if(c.indexOf(n)==0)
{return c.slice(n.length);}}
return 0;},set:function(n,v,d){var e="";if(d)
{var date=new Date();date.setTime(date.getTime()+(d*24*60*60*1000));e="; expires="+date.toGMTString();}
document.cookie=n+'='+v+e+'; path=/';},remove:function(n){$.fn.caroSlider.cookie.set(n,"",-1);}};function sc_setScroll(d,e,c){if(c.transition=='transition')
{if(e=='swing')
{e='ease';}}
return{anims:[],duration:d,orgDuration:d,easing:e,startTime:getTime()};}
function sc_startScroll(s,c){for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];if(!b)
{continue;}
b[0][c.transition](b[1],s.duration,s.easing,b[2]);}}
function sc_stopScroll(s,finish){if(!is_boolean(finish))
{finish=true;}
if(is_object(s.pre))
{sc_stopScroll(s.pre,finish);}
for(var a=0,l=s.anims.length;a<l;a++)
{var b=s.anims[a];b[0].stop(true);if(finish)
{b[0].css(b[1]);if(is_function(b[2]))
{b[2]();}}}
if(is_object(s.post))
{sc_stopScroll(s.post,finish);}}
function sc_afterScroll($c,$c2,o){if($c2)
{$c2.remove();}
switch(o.fx){case'fade':case'crossfade':case'cover-fade':case'uncover-fade':$c.css('filter','');$c.css('opacity',1);break;}}
function sc_fireCallbacks($t,o,b,a,c){if(o[b])
{o[b].call($t,a);}
if(c[b].length)
{for(var i=0,l=c[b].length;i<l;i++)
{c[b][i].call($t,a);}}
return[];}
function sc_fireQueue($c,q,c){if(q.length)
{$c.trigger(cf_e(q[0][0],c),q[0][1]);q.shift();}
return q;}
function sc_hideHiddenItems(hiddenitems){hiddenitems.each(function(){var hi=$(this);hi.data('_cfs_isHidden',hi.is(':hidden')).hide();});}
function sc_showHiddenItems(hiddenitems){if(hiddenitems)
{hiddenitems.each(function(){var hi=$(this);if(!hi.data('_cfs_isHidden'))
{hi.show();}});}}
function sc_clearTimers(t){if(t.auto)
{clearTimeout(t.auto);}
if(t.progress)
{clearInterval(t.progress);}
return t;}
function sc_mapCallbackArguments(i_old,i_skp,i_new,s_itm,s_dir,s_dur,w_siz){return{'width':w_siz.width,'height':w_siz.height,'items':{'old':i_old,'skipped':i_skp,'visible':i_new},'scroll':{'items':s_itm,'direction':s_dir,'duration':s_dur}};}
function sc_getDuration(sO,o,nI,siz){var dur=sO.duration;if(sO.fx=='none')
{return 0;}
if(dur=='auto')
{dur=o.scroll.duration/o.scroll.items*nI;}
else if(dur<10)
{dur=siz/dur;}
if(dur<1)
{return 0;}
if(sO.fx=='fade')
{dur=dur/2;}
return Math.round(dur);}
function nv_showNavi(o,t,c){var minimum=(is_number(o.items.minimum))?o.items.minimum:o.items.visible+1;if(t=='show'||t=='hide')
{var f=t;}
else if(minimum>t)
{debug(c,'Not enough items ('+t+' total, '+minimum+' needed): Hiding navigation.');var f='hide';}
else
{var f='show';}
var s=(f=='show')?'removeClass':'addClass',h=cf_c('hidden',c);if(o.auto.button)
{o.auto.button[f]()[s](h);}
if(o.prev.button)
{o.prev.button[f]()[s](h);}
if(o.next.button)
{o.next.button[f]()[s](h);}
if(o.pagination.container)
{o.pagination.container[f]()[s](h);}}
function nv_enableNavi(o,f,c){if(o.circular||o.infinite)return;var fx=(f=='removeClass'||f=='addClass')?f:false,di=cf_c('disabled',c);if(o.auto.button&&fx)
{o.auto.button[fx](di);}
if(o.prev.button)
{var fn=fx||(f==0)?'addClass':'removeClass';o.prev.button[fn](di);}
if(o.next.button)
{var fn=fx||(f==o.items.visible)?'addClass':'removeClass';o.next.button[fn](di);}}
function go_getObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
else if(is_undefined(obj))
{obj={};}
return obj;}
function go_getItemsObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{obj={'visible':obj};}
else if(obj=='variable')
{obj={'visible':obj,'width':obj,'height':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getScrollObject($tt,obj){obj=go_getObject($tt,obj);if(is_number(obj))
{if(obj<=50)
{obj={'items':obj};}
else
{obj={'duration':obj};}}
else if(is_string(obj))
{obj={'easing':obj};}
else if(!is_object(obj))
{obj={};}
return obj;}
function go_getNaviObject($tt,obj){obj=go_getObject($tt,obj);if(is_string(obj))
{var temp=cf_getKeyCode(obj);if(temp==-1)
{obj=$(obj);}
else
{obj=temp;}}
return obj;}
function go_getAutoObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_boolean(obj))
{obj={'play':obj};}
else if(is_number(obj))
{obj={'timeoutDuration':obj};}
if(obj.progress)
{if(is_string(obj.progress)||is_jquery(obj.progress))
{obj.progress={'bar':obj.progress};}}
return obj;}
function go_complementAutoObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(!is_boolean(obj.play))
{obj.play=true;}
if(!is_number(obj.delay))
{obj.delay=0;}
if(is_undefined(obj.pauseOnEvent))
{obj.pauseOnEvent=true;}
if(!is_boolean(obj.pauseOnResize))
{obj.pauseOnResize=true;}
if(!is_number(obj.timeoutDuration))
{obj.timeoutDuration=(obj.duration<10)?2500:obj.duration*5;}
if(obj.progress)
{if(is_function(obj.progress.bar))
{obj.progress.bar=obj.progress.bar.call($tt);}
if(is_string(obj.progress.bar))
{obj.progress.bar=$(obj.progress.bar);}
if(obj.progress.bar)
{if(!is_function(obj.progress.updater))
{obj.progress.updater=$.fn.caroSlider.progressbarUpdater;}
if(!is_number(obj.progress.interval))
{obj.progress.interval=50;}}
else
{obj.progress=false;}}
return obj;}
function go_getPrevNextObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'button':obj};}
else if(is_number(obj))
{obj={'key':obj};}
return obj;}
function go_complementPrevNextObject($tt,obj){if(is_function(obj.button))
{obj.button=obj.button.call($tt);}
if(is_string(obj.button))
{obj.button=$(obj.button);}
if(is_string(obj.key))
{obj.key=cf_getKeyCode(obj.key);}
return obj;}
function go_getPaginationObject($tt,obj){obj=go_getNaviObject($tt,obj);if(is_jquery(obj))
{obj={'container':obj};}
else if(is_boolean(obj))
{obj={'keys':obj};}
return obj;}
function go_complementPaginationObject($tt,obj){if(is_function(obj.container))
{obj.container=obj.container.call($tt);}
if(is_string(obj.container))
{obj.container=$(obj.container);}
if(!is_number(obj.items))
{obj.items=false;}
if(!is_boolean(obj.keys))
{obj.keys=false;}
if(!is_function(obj.anchorBuilder)&&!is_false(obj.anchorBuilder))
{obj.anchorBuilder=$.fn.caroSlider.pageAnchorBuilder;}
if(!is_number(obj.deviation))
{obj.deviation=0;}
return obj;}
function go_getSwipeObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_undefined(obj))
{obj={'onTouch':false};}
if(is_true(obj))
{obj={'onTouch':obj};}
else if(is_number(obj))
{obj={'items':obj};}
return obj;}
function go_complementSwipeObject($tt,obj){if(!is_boolean(obj.onTouch))
{obj.onTouch=true;}
if(!is_boolean(obj.onMouse))
{obj.onMouse=false;}
if(!is_object(obj.options))
{obj.options={};}
if(!is_boolean(obj.options.triggerOnTouchEnd))
{obj.options.triggerOnTouchEnd=false;}
return obj;}
function go_getMousewheelObject($tt,obj){if(is_function(obj))
{obj=obj.call($tt);}
if(is_true(obj))
{obj={};}
else if(is_number(obj))
{obj={'items':obj};}
else if(is_undefined(obj))
{obj=false;}
return obj;}
function go_complementMousewheelObject($tt,obj){return obj;}
function gn_getItemIndex(num,dev,org,items,$cfs){if(is_string(num))
{num=$(num,$cfs);}
if(is_object(num))
{num=$(num,$cfs);}
if(is_jquery(num))
{num=$cfs.children().index(num);if(!is_boolean(org))
{org=false;}}
else
{if(!is_boolean(org))
{org=true;}}
if(!is_number(num))
{num=0;}
if(!is_number(dev))
{dev=0;}
if(org)
{num+=items.first;}
num+=dev;if(items.total>0)
{while(num>=items.total)
{num-=items.total;}
while(num<0)
{num+=items.total;}}
return num;}
function gn_getVisibleItemsPrev(i,o,s){var t=0,x=0;for(var a=s;a>=0;a--)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
if(a==0)
{a=i.length;}
x++;}}
function gn_getVisibleItemsPrevFilter(i,o,s){return gn_getItemsPrevFilter(i,o.items.filter,o.items.visibleConf.org,s);}
function gn_getScrollItemsPrevFilter(i,o,s,m){return gn_getItemsPrevFilter(i,o.items.filter,m,s);}
function gn_getItemsPrevFilter(i,f,m,s){var t=0,x=0;for(var a=s,l=i.length;a>=0;a--)
{x++;if(x==l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==0)
{a=l;}}}
function gn_getVisibleOrg($c,o){return o.items.visibleConf.org||$c.children().slice(0,o.items.visible).filter(o.items.filter).length;}
function gn_getVisibleItemsNext(i,o,s){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{var j=i.eq(a);t+=(j.is(':visible'))?j[o.d['outerWidth']](true):0;if(t>o.maxDimension)
{return x;}
x++;if(x==l+1)
{return x;}
if(a==l)
{a=-1;}}}
function gn_getVisibleItemsNextTestCircular(i,o,s,l){var v=gn_getVisibleItemsNext(i,o,s);if(!o.circular)
{if(s+v>l)
{v=l-s;}}
return v;}
function gn_getVisibleItemsNextFilter(i,o,s){return gn_getItemsNextFilter(i,o.items.filter,o.items.visibleConf.org,s,o.circular);}
function gn_getScrollItemsNextFilter(i,o,s,m){return gn_getItemsNextFilter(i,o.items.filter,m+1,s,o.circular)-1;}
function gn_getItemsNextFilter(i,f,m,s,c){var t=0,x=0;for(var a=s,l=i.length-1;a<=l;a++)
{x++;if(x>=l)
{return x;}
var j=i.eq(a);if(j.is(f))
{t++;if(t==m)
{return x;}}
if(a==l)
{a=-1;}}}
function gi_getCurrentItems(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsPrev(i,o,n){return i.slice(n,o.items.visibleConf.old+n);}
function gi_getNewItemsPrev(i,o){return i.slice(0,o.items.visible);}
function gi_getOldItemsNext(i,o){return i.slice(0,o.items.visibleConf.old);}
function gi_getNewItemsNext(i,o,n){return i.slice(n,o.items.visible+n);}
function sz_storeMargin(i,o,d){if(o.usePadding)
{if(!is_string(d))
{d='_cfs_origCssMargin';}
i.each(function(){var j=$(this),m=parseInt(j.css(o.d['marginRight']),10);if(!is_number(m))
{m=0;}
j.data(d,m);});}}
function sz_resetMargin(i,o,m){if(o.usePadding)
{var x=(is_boolean(m))?m:false;if(!is_number(m))
{m=0;}
sz_storeMargin(i,o,'_cfs_tempCssMargin');i.each(function(){var j=$(this);j.css(o.d['marginRight'],((x)?j.data('_cfs_tempCssMargin'):m+j.data('_cfs_origCssMargin')));});}}
function sz_storeOrigCss(i){i.each(function(){var j=$(this);j.data('_cfs_origCss',j.attr('style')||'');});}
function sz_restoreOrigCss(i){i.each(function(){var j=$(this);j.attr('style',j.data('_cfs_origCss')||'');});}
function sz_setResponsiveSizes(o,all){var visb=o.items.visible,newS=o.items[o.d['width']],seco=o[o.d['height']],secp=is_percentage(seco);all.each(function(){var $t=$(this),nw=newS-ms_getPaddingBorderMargin($t,o,'Width');$t[o.d['width']](nw);if(secp)
{$t[o.d['height']](ms_getPercentage(nw,seco));}});}
function sz_setSizes($c,o){var $w=$c.parent(),$i=$c.children(),$v=gi_getCurrentItems($i,o),sz=cf_mapWrapperSizes(ms_getSizes($v,o,true),o,false);$w.css(sz);if(o.usePadding)
{var p=o.padding,r=p[o.d[1]];if(o.align&&r<0)
{r=0;}
var $l=$v.last();$l.css(o.d['marginRight'],$l.data('_cfs_origCssMargin')+r);$c.css(o.d['top'],p[o.d[0]]);$c.css(o.d['left'],p[o.d[3]]);}
$c.css(o.d['width'],sz[o.d['width']]+(ms_getTotalSize($i,o,'width')*2));$c.css(o.d['height'],ms_getLargestSize($i,o,'height'));return sz;}
function ms_getSizes(i,o,wrapper){return[ms_getTotalSize(i,o,'width',wrapper),ms_getLargestSize(i,o,'height',wrapper)];}
function ms_getLargestSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]];}
dim=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight';return ms_getTrueLargestSize(i,o,dim);}
function ms_getTrueLargestSize(i,o,dim){var s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var m=(j.is(':visible'))?j[o.d[dim]](true):0;if(s<m)
{s=m;}}
return s;}
function ms_getTotalSize(i,o,dim,wrapper){if(!is_boolean(wrapper))
{wrapper=false;}
if(is_number(o[o.d[dim]])&&wrapper)
{return o[o.d[dim]];}
if(is_number(o.items[o.d[dim]]))
{return o.items[o.d[dim]]*i.length;}
var d=(dim.toLowerCase().indexOf('width')>-1)?'outerWidth':'outerHeight',s=0;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);s+=(j.is(':visible'))?j[o.d[d]](true):0;}
return s;}
function ms_getParentSize($w,o,d){var isVisible=$w.is(':visible');if(isVisible)
{$w.hide();}
var s=$w.parent()[o.d[d]]();if(isVisible)
{$w.show();}
return s;}
function ms_getMaxDimension(o,a){return(is_number(o[o.d['width']]))?o[o.d['width']]:a;}
function ms_hasVariableSizes(i,o,dim){var s=false,v=false;for(var a=0,l=i.length;a<l;a++)
{var j=i.eq(a);var c=(j.is(':visible'))?j[o.d[dim]](true):0;if(s===false)
{s=c;}
else if(s!=c)
{v=true;}
if(s==0)
{v=true;}}
return v;}
function ms_getPaddingBorderMargin(i,o,d){return i[o.d['outer'+d]](true)-i[o.d[d.toLowerCase()]]();}
function ms_getPercentage(s,o){if(is_percentage(o))
{o=parseInt(o.slice(0,-1),10);if(!is_number(o))
{return s;}
s*=o/100;}
return s;}
function cf_e(n,c,pf,ns,rd){if(!is_boolean(pf))
{pf=true;}
if(!is_boolean(ns))
{ns=true;}
if(!is_boolean(rd))
{rd=false;}
if(pf)
{n=c.events.prefix+n;}
if(ns)
{n=n+'.'+c.events.namespace;}
if(ns&&rd)
{n+=c.serialNumber;}
return n;}
function cf_c(n,c){return(is_string(c.classnames[n]))?c.classnames[n]:n;}
function cf_mapWrapperSizes(ws,o,p){if(!is_boolean(p))
{p=true;}
var pad=(o.usePadding&&p)?o.padding:[0,0,0,0];var wra={};wra[o.d['width']]=ws[0]+pad[1]+pad[3];wra[o.d['height']]=ws[1]+pad[0]+pad[2];return wra;}
function cf_sortParams(vals,typs){var arr=[];for(var a=0,l1=vals.length;a<l1;a++)
{for(var b=0,l2=typs.length;b<l2;b++)
{if(typs[b].indexOf(typeof vals[a])>-1&&is_undefined(arr[b]))
{arr[b]=vals[a];break;}}}
return arr;}
function cf_getPadding(p){if(is_undefined(p))
{return[0,0,0,0];}
if(is_number(p))
{return[p,p,p,p];}
if(is_string(p))
{p=p.split('px').join('').split('em').join('').split(' ');}
if(!is_array(p))
{return[0,0,0,0];}
for(var i=0;i<4;i++)
{p[i]=parseInt(p[i],10);}
switch(p.length)
{case 0:return[0,0,0,0];case 1:return[p[0],p[0],p[0],p[0]];case 2:return[p[0],p[1],p[0],p[1]];case 3:return[p[0],p[1],p[2],p[1]];default:return[p[0],p[1],p[2],p[3]];}}
function cf_getAlignPadding(itm,o){var x=(is_number(o[o.d['width']]))?Math.ceil(o[o.d['width']]-ms_getTotalSize(itm,o,'width')):0;switch(o.align)
{case'left':return[0,x];case'right':return[x,0];case'center':default:return[Math.ceil(x/2),Math.floor(x/2)];}}
function cf_getDimensions(o){var dm=[['width','innerWidth','outerWidth','height','innerHeight','outerHeight','left','top','marginRight',0,1,2,3],['height','innerHeight','outerHeight','width','innerWidth','outerWidth','top','left','marginBottom',3,2,1,0]];var dl=dm[0].length,dx=(o.direction=='right'||o.direction=='left')?0:1;var dimensions={};for(var d=0;d<dl;d++)
{dimensions[dm[0][d]]=dm[dx][d];}
return dimensions;}
function cf_getAdjust(x,o,a,$t){var v=x;if(is_function(a))
{v=a.call($t,v);}
else if(is_string(a))
{var p=a.split('+'),m=a.split('-');if(m.length>p.length)
{var neg=true,sta=m[0],adj=m[1];}
else
{var neg=false,sta=p[0],adj=p[1];}
switch(sta)
{case'even':v=(x%2==1)?x-1:x;break;case'odd':v=(x%2==0)?x-1:x;break;default:v=x;break;}
adj=parseInt(adj,10);if(is_number(adj))
{if(neg)
{adj=-adj;}
v+=adj;}}
if(!is_number(v)||v<1)
{v=1;}
return v;}
function cf_getItemsAdjust(x,o,a,$t){return cf_getItemAdjustMinMax(cf_getAdjust(x,o,a,$t),o.items.visibleConf);}
function cf_getItemAdjustMinMax(v,i){if(is_number(i.min)&&v<i.min)
{v=i.min;}
if(is_number(i.max)&&v>i.max)
{v=i.max;}
if(v<1)
{v=1;}
return v;}
function cf_getSynchArr(s){if(!is_array(s))
{s=[[s]];}
if(!is_array(s[0]))
{s=[s];}
for(var j=0,l=s.length;j<l;j++)
{if(is_string(s[j][0]))
{s[j][0]=$(s[j][0]);}
if(!is_boolean(s[j][1]))
{s[j][1]=true;}
if(!is_boolean(s[j][2]))
{s[j][2]=true;}
if(!is_number(s[j][3]))
{s[j][3]=0;}}
return s;}
function cf_getKeyCode(k){if(k=='right')
{return 39;}
if(k=='left')
{return 37;}
if(k=='up')
{return 38;}
if(k=='down')
{return 40;}
return-1;}
function cf_setCookie(n,$c,c){if(n)
{var v=$c.triggerHandler(cf_e('currentPosition',c));$.fn.caroSlider.cookie.set(n,v);}}
function cf_getCookie(n){var c=$.fn.caroSlider.cookie.get(n);return(c=='')?0:c;}
function in_mapCss($elem,props){var css={};for(var p=0,l=props.length;p<l;p++)
{css[props[p]]=$elem.css(props[p]);}
return css;}
function in_complementItems(obj,opt,itm,sta){if(!is_object(obj.visibleConf))
{obj.visibleConf={};}
if(!is_object(obj.sizesConf))
{obj.sizesConf={};}
if(obj.start==0&&is_number(sta))
{obj.start=sta;}
if(is_object(obj.visible))
{obj.visibleConf.min=obj.visible.min;obj.visibleConf.max=obj.visible.max;obj.visible=false;}
else if(is_string(obj.visible))
{if(obj.visible=='variable')
{obj.visibleConf.variable=true;}
else
{obj.visibleConf.adjust=obj.visible;}
obj.visible=false;}
else if(is_function(obj.visible))
{obj.visibleConf.adjust=obj.visible;obj.visible=false;}
if(!is_string(obj.filter))
{obj.filter=(itm.filter(':hidden').length>0)?':visible':'*';}
if(!obj[opt.d['width']])
{if(opt.responsive)
{debug(true,'Set a '+opt.d['width']+' for the items!');obj[opt.d['width']]=ms_getTrueLargestSize(itm,opt,'outerWidth');}
else
{obj[opt.d['width']]=(ms_hasVariableSizes(itm,opt,'outerWidth'))?'variable':itm[opt.d['outerWidth']](true);}}
if(!obj[opt.d['height']])
{obj[opt.d['height']]=(ms_hasVariableSizes(itm,opt,'outerHeight'))?'variable':itm[opt.d['outerHeight']](true);}
obj.sizesConf.width=obj.width;obj.sizesConf.height=obj.height;return obj;}
function in_complementVisibleItems(opt,avl){if(opt.items[opt.d['width']]=='variable')
{opt.items.visibleConf.variable=true;}
if(!opt.items.visibleConf.variable){if(is_number(opt[opt.d['width']]))
{opt.items.visible=Math.floor(opt[opt.d['width']]/opt.items[opt.d['width']]);}
else
{opt.items.visible=Math.floor(avl/opt.items[opt.d['width']]);opt[opt.d['width']]=opt.items.visible*opt.items[opt.d['width']];if(!opt.items.visibleConf.adjust)
{opt.align=false;}}
if(opt.items.visible=='Infinity'||opt.items.visible<1)
{debug(true,'Not a valid number of visible items: Set to "variable".');opt.items.visibleConf.variable=true;}}
return opt;}
function in_complementPrimarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerWidth');}
return obj;}
function in_complementSecondarySize(obj,opt,all){if(obj=='auto')
{obj=ms_getTrueLargestSize(all,opt,'outerHeight');}
if(!obj)
{obj=opt.items[opt.d['height']];}
return obj;}
function in_getAlignPadding(o,all){var p=cf_getAlignPadding(gi_getCurrentItems(all,o),o);o.padding[o.d[1]]=p[1];o.padding[o.d[3]]=p[0];return o;}
function in_getResponsiveValues(o,all,avl){var visb=cf_getItemAdjustMinMax(Math.ceil(o[o.d['width']]/o.items[o.d['width']]),o.items.visibleConf);if(visb>all.length)
{visb=all.length;}
var newS=Math.floor(o[o.d['width']]/visb);o.items.visible=visb;o.items[o.d['width']]=newS;o[o.d['width']]=visb*newS;return o;}
function bt_pauseOnHoverConfig(p){if(is_string(p))
{var i=(p.indexOf('immediate')>-1)?true:false,r=(p.indexOf('resume')>-1)?true:false;}
else
{var i=r=false;}
return[i,r];}
function bt_mousesheelNumber(mw){return(is_number(mw))?mw:null}
function is_null(a){return(a===null);}
function is_undefined(a){return(is_null(a)||typeof a=='undefined'||a===''||a==='undefined');}
function is_array(a){return(a instanceof Array);}
function is_jquery(a){return(a instanceof jQuery);}
function is_object(a){return((a instanceof Object||typeof a=='object')&&!is_null(a)&&!is_jquery(a)&&!is_array(a));}
function is_number(a){return((a instanceof Number||typeof a=='number')&&!isNaN(a));}
function is_string(a){return((a instanceof String||typeof a=='string')&&!is_undefined(a)&&!is_true(a)&&!is_false(a));}
function is_function(a){return(a instanceof Function||typeof a=='function');}
function is_boolean(a){return(a instanceof Boolean||typeof a=='boolean'||is_true(a)||is_false(a));}
function is_true(a){return(a===true||a==='true');}
function is_false(a){return(a===false||a==='false');}
function is_percentage(x){return(is_string(x)&&x.slice(-1)=='%');}
function getTime(){return new Date().getTime();}
function deprecated(o,n){debug(true,o+' is DEPRECATED, support for it will be removed. Use '+n+' instead.');}
function debug(d,m){if(!is_undefined(window.console)&&!is_undefined(window.console.log))
{if(is_object(d))
{var s=' ('+d.selector+')';d=d.debug;}
else
{var s='';}
if(!d)
{return false;}
if(is_string(m))
{m='caroSlider'+s+': '+m;}
else
{m=['caroSlider'+s+':',m];}
window.console.log(m);}
return false;}
$.extend($.easing,{'quadratic':function(t){var t2=t*t;return t*(-t2*t+4*t2-6*t+4);},'cubic':function(t){return t*(4*t*t-9*t+6);},'elastic':function(t){var t2=t*t;return t*(33*t2*t2-106*t2*t+126*t2-67*t+15);}});})(jQuery);
(function($){var defaults={vertical:false,rtl:false,start:1,offset:1,size:null,scroll:3,visible:null,animation:'normal',easing:'swing',auto:0,wrap:null,initCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,buttonNextHTML:'<div></div>',buttonPrevHTML:'<div></div>',buttonNextEvent:'click',buttonPrevEvent:'click',buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},windowLoaded=false;$(window).bind('load.jcarousel',function(){windowLoaded=true;});$.jcarousel=function(e,o){this.options=$.extend({},defaults,o||{});this.locked=false;this.autoStopped=false;this.container=null;this.clip=null;this.list=null;this.buttonNext=null;this.buttonPrev=null;this.buttonNextState=null;this.buttonPrevState=null;if(!o||o.rtl===undefined){this.options.rtl=($(e).attr('dir')||$('html').attr('dir')||'').toLowerCase()=='rtl';}
this.wh=!this.options.vertical?'width':'height';this.lt=!this.options.vertical?(this.options.rtl?'right':'left'):'top';var skin='',split=e.className.split(' ');for(var i=0;i<split.length;i++){if(split[i].indexOf('jcarousel-skin')!=-1){$(e).removeClass(split[i]);skin=split[i];break;}}
if(e.nodeName.toUpperCase()=='UL'||e.nodeName.toUpperCase()=='OL'){this.list=$(e);this.container=this.list.parent();if(this.container.hasClass('jcarousel-clip')){if(!this.container.parent().hasClass('jcarousel-container')){this.container=this.container.wrap('<div></div>');}
this.container=this.container.parent();}else if(!this.container.hasClass('jcarousel-container')){this.container=this.list.wrap('<div></div>').parent();}}else{this.container=$(e);this.list=this.container.find('ul,ol').eq(0);}
if(skin!==''&&this.container.parent()[0].className.indexOf('jcarousel-skin')==-1){this.container.wrap('<div class=" '+skin+'"></div>');}
this.clip=this.list.parent();if(!this.clip.length||!this.clip.hasClass('jcarousel-clip')){this.clip=this.list.wrap('<div></div>').parent();}
this.buttonNext=$('.jcarousel-next',this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null){this.buttonNext=this.clip.after(this.options.buttonNextHTML).next();}
this.buttonNext.addClass(this.className('jcarousel-next'));this.buttonPrev=$('.jcarousel-prev',this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null){this.buttonPrev=this.clip.after(this.options.buttonPrevHTML).next();}
this.buttonPrev.addClass(this.className('jcarousel-prev'));this.clip.addClass(this.className('jcarousel-clip')).css({overflow:'hidden',position:'relative'});this.list.addClass(this.className('jcarousel-list')).css({overflow:'hidden',position:'relative',top:0,margin:0,padding:0}).css((this.options.rtl?'right':'left'),0);this.container.addClass(this.className('jcarousel-container')).css({position:'relative'});if(!this.options.vertical&&this.options.rtl){this.container.addClass('jcarousel-direction-rtl').attr('dir','rtl');}
var di=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var li=this.list.children('li');var self=this;if(li.size()>0){var wh=0,j=this.options.offset;li.each(function(){self.format(this,j++);wh+=self.dimension(this,di);});this.list.css(this.wh,(wh+100)+'px');if(!o||o.size===undefined){this.options.size=li.size();}}
this.container.css('display','block');this.buttonNext.css('display','block');this.buttonPrev.css('display','block');this.funcNext=function(){self.next();};this.funcPrev=function(){self.prev();};this.funcResize=function(){self.reload();};if(this.options.initCallback!==null){this.options.initCallback(this,'init');}
if(!windowLoaded&&$.browser.safari){this.buttons(false,false);$(window).bind('load.jcarousel',function(){self.setup();});}else{this.setup();}};var $jc=$.jcarousel;$jc.fn=$jc.prototype={jcarousel:'0.2.7'};$jc.fn.extend=$jc.extend=$.extend;$jc.fn.extend({setup:function(){this.first=null;this.last=null;this.prevFirst=null;this.prevLast=null;this.animating=false;this.timer=null;this.tail=null;this.inTail=false;if(this.locked){return;}
this.list.css(this.lt,this.pos(this.options.offset)+'px');var p=this.pos(this.options.start,true);this.prevFirst=this.prevLast=null;this.animate(p,false);$(window).unbind('resize.jcarousel',this.funcResize).bind('resize.jcarousel',this.funcResize);},reset:function(){this.list.empty();this.list.css(this.lt,'0px');this.list.css(this.wh,'10px');if(this.options.initCallback!==null){this.options.initCallback(this,'reset');}
this.setup();},reload:function(){if(this.tail!==null&&this.inTail){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+this.tail);}
this.tail=null;this.inTail=false;if(this.options.reloadCallback!==null){this.options.reloadCallback(this);}
if(this.options.visible!==null){var self=this;var di=Math.ceil(this.clipping()/this.options.visible),wh=0,lt=0;this.list.children('li').each(function(i){wh+=self.dimension(this,di);if(i+1<self.first){lt=wh;}});this.list.css(this.wh,wh+'px');this.list.css(this.lt,-lt+'px');}
this.scroll(this.first,false);},lock:function(){this.locked=true;this.buttons();},unlock:function(){this.locked=false;this.buttons();},size:function(s){if(s!==undefined){this.options.size=s;if(!this.locked){this.buttons();}}
return this.options.size;},has:function(i,i2){if(i2===undefined||!i2){i2=i;}
if(this.options.size!==null&&i2>this.options.size){i2=this.options.size;}
for(var j=i;j<=i2;j++){var e=this.get(j);if(!e.length||e.hasClass('jcarousel-item-placeholder')){return false;}}
return true;},get:function(i){return $('.jcarousel-item-'+i,this.list);},add:function(i,s){var e=this.get(i),old=0,n=$(s);if(e.length===0){var c,j=$jc.intval(i);e=this.create(i);while(true){c=this.get(--j);if(j<=0||c.length){if(j<=0){this.list.prepend(e);}else{c.after(e);}
break;}}}else{old=this.dimension(e);}
if(n.get(0).nodeName.toUpperCase()=='LI'){e.replaceWith(n);e=n;}else{e.empty().append(s);}
this.format(e.removeClass(this.className('jcarousel-item-placeholder')),i);var di=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;var wh=this.dimension(e,di)-old;if(i>0&&i<this.first){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-wh+'px');}
this.list.css(this.wh,$jc.intval(this.list.css(this.wh))+wh+'px');return e;},remove:function(i){var e=this.get(i);if(!e.length||(i>=this.first&&i<=this.last)){return;}
var d=this.dimension(e);if(i<this.first){this.list.css(this.lt,$jc.intval(this.list.css(this.lt))+d+'px');}
e.remove();this.list.css(this.wh,$jc.intval(this.list.css(this.wh))-d+'px');},next:function(){if(this.tail!==null&&!this.inTail){this.scrollTail(false);}else{this.scroll(((this.options.wrap=='both'||this.options.wrap=='last')&&this.options.size!==null&&this.last==this.options.size)?1:this.first+this.options.scroll);}},prev:function(){if(this.tail!==null&&this.inTail){this.scrollTail(true);}else{this.scroll(((this.options.wrap=='both'||this.options.wrap=='first')&&this.options.size!==null&&this.first==1)?this.options.size:this.first-this.options.scroll);}},scrollTail:function(b){if(this.locked||this.animating||!this.tail){return;}
this.pauseAuto();var pos=$jc.intval(this.list.css(this.lt));pos=!b?pos-this.tail:pos+this.tail;this.inTail=!b;this.prevFirst=this.first;this.prevLast=this.last;this.animate(pos);},scroll:function(i,a){if(this.locked||this.animating){return;}
this.pauseAuto();this.animate(this.pos(i),a);},pos:function(i,fv){var pos=$jc.intval(this.list.css(this.lt));if(this.locked||this.animating){return pos;}
if(this.options.wrap!='circular'){i=i<1?1:(this.options.size&&i>this.options.size?this.options.size:i);}
var back=this.first>i;var f=this.options.wrap!='circular'&&this.first<=1?1:this.first;var c=back?this.get(f):this.get(this.last);var j=back?f:f-1;var e=null,l=0,p=false,d=0,g;while(back?--j>=i:++j<i){e=this.get(j);p=!e.length;if(e.length===0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));c[back?'before':'after'](e);if(this.first!==null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length){e=this.add(j,g.clone(true));}}}
c=e;d=this.dimension(e);if(p){l+=d;}
if(this.first!==null&&(this.options.wrap=='circular'||(j>=1&&(this.options.size===null||j<=this.options.size)))){pos=back?pos+d:pos-d;}}
var clipping=this.clipping(),cache=[],visible=0,v=0;c=this.get(i-1);j=i;while(++visible){e=this.get(j);p=!e.length;if(e.length===0){e=this.create(j).addClass(this.className('jcarousel-item-placeholder'));if(c.length===0){this.list.prepend(e);}else{c[back?'before':'after'](e);}
if(this.first!==null&&this.options.wrap=='circular'&&this.options.size!==null&&(j<=0||j>this.options.size)){g=this.get(this.index(j));if(g.length){e=this.add(j,g.clone(true));}}}
c=e;d=this.dimension(e);if(d===0){throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');}
if(this.options.wrap!='circular'&&this.options.size!==null&&j>this.options.size){cache.push(e);}else if(p){l+=d;}
v+=d;if(v>=clipping){break;}
j++;}
for(var x=0;x<cache.length;x++){cache[x].remove();}
if(l>0){this.list.css(this.wh,this.dimension(this.list)+l+'px');if(back){pos-=l;this.list.css(this.lt,$jc.intval(this.list.css(this.lt))-l+'px');}}
var last=i+visible-1;if(this.options.wrap!='circular'&&this.options.size&&last>this.options.size){last=this.options.size;}
if(j>last){visible=0;j=last;v=0;while(++visible){e=this.get(j--);if(!e.length){break;}
v+=this.dimension(e);if(v>=clipping){break;}}}
var first=last-visible+1;if(this.options.wrap!='circular'&&first<1){first=1;}
if(this.inTail&&back){pos+=this.tail;this.inTail=false;}
this.tail=null;if(this.options.wrap!='circular'&&last==this.options.size&&(last-visible+1)>=1){var m=$jc.margin(this.get(last),!this.options.vertical?'marginRight':'marginBottom');if((v-m)>clipping){this.tail=v-clipping-m;}}
if(fv&&i===this.options.size&&this.tail){pos-=this.tail;this.inTail=true;}
while(i-->first){pos+=this.dimension(this.get(i));}
this.prevFirst=this.first;this.prevLast=this.last;this.first=first;this.last=last;return pos;},animate:function(p,a){if(this.locked||this.animating){return;}
this.animating=true;var self=this;var scrolled=function(){self.animating=false;if(p===0){self.list.css(self.lt,0);}
if(!self.autoStopped&&(self.options.wrap=='circular'||self.options.wrap=='both'||self.options.wrap=='last'||self.options.size===null||self.last<self.options.size||(self.last==self.options.size&&self.tail!==null&&!self.inTail))){self.startAuto();}
self.buttons();self.notify('onAfterAnimation');if(self.options.wrap=='circular'&&self.options.size!==null){for(var i=self.prevFirst;i<=self.prevLast;i++){if(i!==null&&!(i>=self.first&&i<=self.last)&&(i<1||i>self.options.size)){self.remove(i);}}}};this.notify('onBeforeAnimation');if(!this.options.animation||a===false){this.list.css(this.lt,p+'px');scrolled();}else{var o=!this.options.vertical?(this.options.rtl?{'right':p}:{'left':p}):{'top':p};this.list.animate(o,this.options.animation,this.options.easing,scrolled);}},startAuto:function(s){if(s!==undefined){this.options.auto=s;}
if(this.options.auto===0){return this.stopAuto();}
if(this.timer!==null){return;}
this.autoStopped=false;var self=this;this.timer=window.setTimeout(function(){self.next();},this.options.auto*1000);},stopAuto:function(){this.pauseAuto();this.autoStopped=true;},pauseAuto:function(){if(this.timer===null){return;}
window.clearTimeout(this.timer);this.timer=null;},buttons:function(n,p){if(n==null){n=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='first')||this.options.size===null||this.last<this.options.size);if(!this.locked&&(!this.options.wrap||this.options.wrap=='first')&&this.options.size!==null&&this.last>=this.options.size){n=this.tail!==null&&!this.inTail;}}
if(p==null){p=!this.locked&&this.options.size!==0&&((this.options.wrap&&this.options.wrap!='last')||this.first>1);if(!this.locked&&(!this.options.wrap||this.options.wrap=='last')&&this.options.size!==null&&this.first==1){p=this.tail!==null&&this.inTail;}}
var self=this;if(this.buttonNext.size()>0){this.buttonNext.unbind(this.options.buttonNextEvent+'.jcarousel',this.funcNext);if(n){this.buttonNext.bind(this.options.buttonNextEvent+'.jcarousel',this.funcNext);}
this.buttonNext[n?'removeClass':'addClass'](this.className('jcarousel-next-disabled')).attr('disabled',n?false:true);if(this.options.buttonNextCallback!==null&&this.buttonNext.data('jcarouselstate')!=n){this.buttonNext.each(function(){self.options.buttonNextCallback(self,this,n);}).data('jcarouselstate',n);}}else{if(this.options.buttonNextCallback!==null&&this.buttonNextState!=n){this.options.buttonNextCallback(self,null,n);}}
if(this.buttonPrev.size()>0){this.buttonPrev.unbind(this.options.buttonPrevEvent+'.jcarousel',this.funcPrev);if(p){this.buttonPrev.bind(this.options.buttonPrevEvent+'.jcarousel',this.funcPrev);}
this.buttonPrev[p?'removeClass':'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled',p?false:true);if(this.options.buttonPrevCallback!==null&&this.buttonPrev.data('jcarouselstate')!=p){this.buttonPrev.each(function(){self.options.buttonPrevCallback(self,this,p);}).data('jcarouselstate',p);}}else{if(this.options.buttonPrevCallback!==null&&this.buttonPrevState!=p){this.options.buttonPrevCallback(self,null,p);}}
this.buttonNextState=n;this.buttonPrevState=p;},notify:function(evt){var state=this.prevFirst===null?'init':(this.prevFirst<this.first?'next':'prev');this.callback('itemLoadCallback',evt,state);if(this.prevFirst!==this.first){this.callback('itemFirstInCallback',evt,state,this.first);this.callback('itemFirstOutCallback',evt,state,this.prevFirst);}
if(this.prevLast!==this.last){this.callback('itemLastInCallback',evt,state,this.last);this.callback('itemLastOutCallback',evt,state,this.prevLast);}
this.callback('itemVisibleInCallback',evt,state,this.first,this.last,this.prevFirst,this.prevLast);this.callback('itemVisibleOutCallback',evt,state,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(cb,evt,state,i1,i2,i3,i4){if(this.options[cb]==null||(typeof this.options[cb]!='object'&&evt!='onAfterAnimation')){return;}
var callback=typeof this.options[cb]=='object'?this.options[cb][evt]:this.options[cb];if(!$.isFunction(callback)){return;}
var self=this;if(i1===undefined){callback(self,state,evt);}else if(i2===undefined){this.get(i1).each(function(){callback(self,this,i1,state,evt);});}else{var call=function(i){self.get(i).each(function(){callback(self,this,i,state,evt);});};for(var i=i1;i<=i2;i++){if(i!==null&&!(i>=i3&&i<=i4)){call(i);}}}},create:function(i){return this.format('<li></li>',i);},format:function(e,i){e=$(e);var split=e.get(0).className.split(' ');for(var j=0;j<split.length;j++){if(split[j].indexOf('jcarousel-')!=-1){e.removeClass(split[j]);}}
e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-'+i)).css({'float':(this.options.rtl?'right':'left'),'list-style':'none'}).attr('jcarouselindex',i);return e;},className:function(c){return c+' '+c+(!this.options.vertical?'-horizontal':'-vertical');},dimension:function(e,d){var el=e.jquery!==undefined?e[0]:e;var old=!this.options.vertical?(el.offsetWidth||$jc.intval(this.options.itemFallbackDimension))+$jc.margin(el,'marginLeft')+$jc.margin(el,'marginRight'):(el.offsetHeight||$jc.intval(this.options.itemFallbackDimension))+$jc.margin(el,'marginTop')+$jc.margin(el,'marginBottom');if(d==null||old==d){return old;}
var w=!this.options.vertical?d-$jc.margin(el,'marginLeft')-$jc.margin(el,'marginRight'):d-$jc.margin(el,'marginTop')-$jc.margin(el,'marginBottom');$(el).css(this.wh,w+'px');return this.dimension(el);},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-$jc.intval(this.clip.css('borderLeftWidth'))-$jc.intval(this.clip.css('borderRightWidth')):this.clip[0].offsetHeight-$jc.intval(this.clip.css('borderTopWidth'))-$jc.intval(this.clip.css('borderBottomWidth'));},index:function(i,s){if(s==null){s=this.options.size;}
return Math.round((((i-1)/s)-Math.floor((i-1)/s))*s)+1;}});$jc.extend({defaults:function(d){return $.extend(defaults,d||{});},margin:function(e,p){if(!e){return 0;}
var el=e.jquery!==undefined?e[0]:e;if(p=='marginRight'&&$.browser.safari){var old={'display':'block','float':'none','width':'auto'},oWidth,oWidth2;$.swap(el,old,function(){oWidth=el.offsetWidth;});old.marginRight=0;$.swap(el,old,function(){oWidth2=el.offsetWidth;});return oWidth2-oWidth;}
return $jc.intval($.css(el,p));},intval:function(v){v=parseInt(v,10);return isNaN(v)?0:v;}});$.fn.jcarousel=function(o){if(typeof o=='string'){var instance=$(this).data('jcarousel'),args=Array.prototype.slice.call(arguments,1);return instance[o].apply(instance,args);}else{return this.each(function(){$(this).data('jcarousel',new $jc(this,o));});}};})(jQuery);
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}
if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}
if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}
if(options.secure===true){returnValue.secure=options.secure;}}
return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}
if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}
cookies[name]=value;}
return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else{returnValue[cookieName[item]]=null;}}}else{returnValue=cookies;}
return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}
for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}
return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}
if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else{throw new Error('cookies.set() received non-string value and could not serialize.');}}
var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}
if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}
for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}
return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}
defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else{value=$this.html();}
if(typeof value!=='string'||value===''){value=null;}
$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else{$this.html(value);}}
break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();
$(document).ready(function()
{var customSelect=$(".CustomSelect");if(customSelect.length>0)
{customSelect.jqDropDown();}});(function($,window)
{var DropDown=function(element,settings)
{settings=$.extend({},$.fn.jqDropDown.defaults,settings);var $dropdown=$(element),listWidth,$container,defaultOption=settings.defaultOption,selectedLabel,$toggleLink,$options,effect=settings.effect,effectSpeed=settings.effectSpeed,$optList=$('<ul class="'+settings.optionListName+'" style="display:none;"></ul>');listWidth=$dropdown.width();$dropdown.hide().after('<div class="'+settings.containerName+'" style="position:relative;"></div>');if(defaultOption&&defaultOption!=='')
{selectedLabel=defaultOption;}
else
{selectedLabel=$dropdown.find('option[selected]').text()||$dropdown.find('option:eq(0)').text();}
$toggleLink=$('<a href="#" class="'+settings.toggleBtnName+'">'+selectedLabel+'</a>');$container=$dropdown.next('div.'+settings.containerName);$container.append($toggleLink);$optList.append(BuildOptionList($dropdown,settings));$options=$optList.find('a');$toggleLink.after($optList);ApplyStyle($container,listWidth,settings);$(document).bind('mousedown',function(e)
{var $target=$(e.target);if($(document.activeElement).hasClass(settings.toggleBtnName)||$(document.activeElement).hasClass(settings.optionListName))
{if(!$target.hasClass(settings.optionGroupName)&&!$target.hasClass(settings.toggleBtnName))
{if($target.parents().filter($optList).length)
{$toggleLink.data('index',$optList.find('li').index($target.parent())).focus();UpdateValue($toggleLink,$target,settings);}
else if($(document.activeElement).hasClass(settings.toggleBtnName)&&$optList.is(':visible').length)
{effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();return false;}
else if($(document.activeElement).hasClass(settings.toggleBtnName)&&!$optList.filter(':visible').length)
{$toggleLink.blur();return false;}
else if(settings.modal)
{return false;}
effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();return false;}
else
{return false;}}});$options.bind('mouseenter click',function(e)
{var $this=$(this);e.preventDefault();$optList.find('a.selected').removeClass('selected');$this.addClass('selected');$toggleLink.data('index',$optList.find('li').index($this.parent()));});$toggleLink.bind('mousedown keydown focusout click',function(e)
{var $this=$(this),$targetOption,selectedIndex=$this.data('index')||0,indexChanged=false,$selectedOption,$options=$optList.find('a'),key;if(e.type==='mousedown'&&e.which===1)
{settings.beforeToggle.call(this);UpdateListDirection($this,$optList,settings);$options.removeClass('selected');$this.focus();$optList.find('li:eq('+selectedIndex+') a').addClass('selected');if($optList.is(':hidden'))
{effect==='fade'?$('.'+settings.optionListName).fadeOut(effectSpeed):$('.'+settings.optionListName).hide();effect==='fade'?$optList.fadeIn(effectSpeed):$optList.show();}
else
{effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();}
settings.afterToggle.call(this);}
if(e.type==='keydown')
{switch(e.keyCode)
{case 9:case 27:effect==='fade'?$optList.fadeOut(effectSpeed):$optList.hide();break;case 13:$(document).trigger('mousedown',[{target:$optList.find('li:eq('+$this.data('index')+') a:eq(0)')}]);break;case 38:e.preventDefault();$options.removeClass('selected');for(i=selectedIndex-1;i>=0;i--)
{$targetOption=$optList.find('li:eq('+(i)+')');if(!$targetOption.hasClass(settings.optionGroupName))
{selectedIndex=i;break;}}
break;case 40:e.preventDefault();$options.removeClass('selected');for(i=selectedIndex+1;i<$optList.find('li').length;i++)
{$targetOption=$optList.find('li:eq('+(i)+')');if(!$targetOption.hasClass(settings.optionGroupName))
{selectedIndex=i;break;}}
break;default:key=String.fromCharCode(e.which).toLowerCase();for(i=selectedIndex+1;i<$optList.find('li').length;i++)
{$targetOption=$optList.find('li:eq('+(i)+')');if($targetOption.text().slice(0,1).toLowerCase()===key&&!$targetOption.hasClass(settings.optionGroupName))
{$options.removeClass('selected');selectedIndex=i;indexChanged=true;break;}}
if(!indexChanged)
{for(var i=0;i<selectedIndex;i++)
{$targetOption=$optList.find('li:eq('+(i)+')');if($targetOption.text().slice(0,1).toLowerCase()===key&&!$targetOption.hasClass(settings.optionGroupName))
{$options.removeClass('selected');selectedIndex=i;break;}}}
break;}
$this.data('index',selectedIndex);$selectedOption=$optList.find('li:eq('+$this.data('index')+') a:eq(0)');$selectedOption.addClass('selected');UpdateValue($this,$selectedOption,settings);}
else
{return false;}});};function UpdateValue($target,$elem,settings)
{var $ph,val;if($elem&&$elem.text()!=='')
{$target.text($elem.text()).append('<span class="CPodSelectLinkArrow"></span>');}
if(settings.placeholder)
{$ph=$(settings.placeholder);settings.useValue?val=$elem.attr('rel'):val=$elem.text();if($ph.is('input'))
{$ph.val(val);}
else
{$ph.text(val);}}
settings.optionChanged.call(this);}
function BuildOptionList($list,settings)
{var optList,i,listItem='',$curItem,isSelected='';if(settings.data.length)
{optList=settings.data;}
else
{optList=$list.find('option,optgroup');}
if(settings.defaultOption&&settings.defaultOption!=='')
{listItem+='<li class="'+settings.optionName+'"><a href="#">'+settings.defaultOption+'</a></li>';}
for(i=0;i<optList.length;i++)
{$curItem=$(optList[i]);if($curItem.is(':selected')&&!settings.defaultOption)
{isSelected='selected';}
if($curItem.is('option'))
{listItem+='<li class="'+settings.optionName+'"><a class="'+isSelected+'" href="#" rel="'+$curItem.attr('value')+'">'+$curItem.text()+'</a></li>';}
else
{listItem+='<li class="'+settings.optionGroupName+'"><span class="CPodSelectLinkArrow"></span>'+$curItem.attr('label')+'</li>';}
isSelected='';}
return listItem;}
function ApplyStyle($container,lisWidth,settings)
{var $list=$container.find('ul:eq(0)'),$listItems=$container.find('ul > li > a'),$toggleLink=$container.find('a:eq(0)'),toggleLinkPadding=parseInt($toggleLink.css("padding-left"),10)+parseInt($toggleLink.css("padding-right"),10),defaultOpt_padding;UpdateListDirection($toggleLink,$list,settings);if(settings.defaultStyle)
{$container.find('li.'+settings.optionGroupName).length>0?defaultOpt_padding=25:defaultOpt_padding=10;$toggleLink.css({width:lisWidth-toggleLinkPadding}).append('<span class="CPodSelectLinkArrow"></span>');$list.css({width:200+toggleLinkPadding});$listItems.css({'padding-left':defaultOpt_padding});}}
function UpdateListDirection($toggleLink,$list,settings)
{var topPos,toggleLinkPadding,borderWidth,$select=$('select'),counter,direction;toggleLinkPadding=parseInt($toggleLink.css("padding-top"),10)+parseInt($toggleLink.css("padding-bottom"),10)||0;borderWidth=parseInt($toggleLink.css("border-top-width"),10)+parseInt($toggleLink.css("border-bottom-width"),10)||0;if(direction==='up'||(($toggleLink.offset().top+$list.height()+20)>$(window).height()+$(window).scrollTop())&&($toggleLink.offset().top>$list.height()+20))
{topPos=-($list.height()+toggleLinkPadding-borderWidth);direction='up';}
else
{topPos=$toggleLink.height()+toggleLinkPadding+borderWidth;direction='down';}
$list.css({top:topPos});if($.browser.msie&&$.browser.version==='6.0'||$.browser.version==='7.0')
{direction==='up'?counter=0:counter=$select.length;$select.each(function()
{$(this).next('div').css({'z-index':counter});if(direction==='up')
{counter+=1;}
else
{counter-=1;}});}}
$.fn.jqDropDown=function(options)
{return this.each(function()
{var $this=$(this);if($this.data('jqDropDown'))
{return;}
var dropdown=new DropDown(this,options);$this.data('jqDropDown',dropdown);});};$.fn.jqDropDown.Debug=function($obj)
{if(window.console&&window.console.log)
{window.console.log('hilight selection count: '+$obj.text());}};$.fn.jqDropDown.defaults={effect:'default',effectSpeed:400,modal:false,data:{},defaultOption:null,containerName:'ddContainer',toggleBtnName:'ddToggle',optionListName:'ddOptionList',optionGroupName:'optgroup',optionName:'ddOption',defaultStyle:true,placeholder:null,useValue:true,direction:'down',beforeToggle:function()
{},afterToggle:function()
{},optionChanged:function()
{}};}(jQuery,window,undefined));
(function($){$.format=(function(){var parseMonth=function(value){switch(value){case"Jan":return"01";case"Feb":return"02";case"Mar":return"03";case"Apr":return"04";case"May":return"05";case"Jun":return"06";case"Jul":return"07";case"Aug":return"08";case"Sep":return"09";case"Oct":return"10";case"Nov":return"11";case"Dec":return"12";default:return value;}};var parseTime=function(value){var retValue=value;if(retValue.indexOf(".")!==-1){retValue=retValue.substring(0,retValue.indexOf("."));}
var values3=retValue.split(":");if(values3.length===3){hour=values3[0];minute=values3[1];second=values3[2];return{time:retValue,hour:hour,minute:minute,second:second};}else{return{time:"",hour:"",minute:"",second:""};}};return{date:function(value,format){try{var year=null;var month=null;var dayOfMonth=null;var time=null;if(typeof value.getFullYear==="function"){year=value.getFullYear();month=value.getMonth()+1;dayOfMonth=value.getDate();time=parseTime(value.toTimeString());}else{var values=value.split(" ");switch(values.length){case 6:year=values[5];month=parseMonth(values[1]);dayOfMonth=values[2];time=parseTime(values[3]);break;case 2:var values2=values[0].split("-");year=values2[0];month=values2[1];dayOfMonth=values2[2];time=parseTime(values[1]);break;default:return value;}}
var pattern="";var retValue="";for(i=0;i<format.length;i++){var currentPattern=format.charAt(i);pattern+=currentPattern;switch(pattern){case"dd":retValue+=dayOfMonth;pattern="";break;case"MM":retValue+=month;pattern="";break;case"yyyy":retValue+=year;pattern="";break;case"HH":retValue+=time.hour;pattern="";break;case"hh":retValue+=(time.hour===0?12:time.hour<13?time.hour:time.hour-12);pattern="";break;case"mm":retValue+=time.minute;pattern="";break;case"ss":retValue+=time.second;pattern="";break;case"a":retValue+=time.hour>12?"PM":"AM";pattern="";break;case" ":retValue+=currentPattern;pattern="";break;case"/":retValue+=currentPattern;pattern="";break;case":":retValue+=currentPattern;pattern="";break;default:if(pattern.length===2&&pattern.indexOf("y")!==0){retValue+=pattern.substring(0,1);pattern=pattern.substring(1,2);}else if((pattern.length===3&&pattern.indexOf("yyy")===-1)){pattern="";}}}
return retValue;}catch(e){console.log(e);return value;}}};}());}(jQuery));$(document).ready(function(){$(".shortDateFormat").each(function(idx,elem){if($(elem).is(":input")){$(elem).val($.format.date($(elem).val(),'dd/MM/yyyy'));}else{$(elem).text($.format.date($(elem).text(),'dd/MM/yyyy'));}});$(".longDateFormat").each(function(idx,elem){if($(elem).is(":input")){$(elem).val($.format.date($(elem).val(),'dd/MM/yyyy hh:mm:ss'));}else{$(elem).text($.format.date($(elem).text(),'dd/MM/yyyy hh:mm:ss'));}});});
(function($){$.fn.extend({disable:function(){return this.each(function(){$(this).attr({disabled:true});});},enable:function(){return this.each(function(){$(this).removeAttr('disabled');});},toggleDisabled:function(disable){switch(typeof(disable)){case"boolean":break;case"number":disable=disable>0;break;default:disable=!this.is(':disabled');}
return $(this)[disable?"disable":"enable"]();},toggleEnabled:function(enable){switch(typeof(enable)){case"boolean":break;case"number":enable=enable>0;break;default:enable=this.is(':disabled');}
return $(this)[enable?"enable":"disable"]();}});})(jQuery);
if(jQuery)(function($){$.extend($.fn,{selectBox:function(method,data){var typeTimer,typeSearch='',isMac=navigator.platform.match(/mac/i);var init=function(select,data){if(navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i))return false;if(select.tagName.toLowerCase()!=='select')return false;select=$(select);if(select.data('selectBox-control'))return false;var control=$('<a class="selectBox" />'),options,settings=data||{},multiple=!!select.attr('multiple'),inline=multiple||parseInt(select.attr('size'))>1,lastSelected,formLabel,ariaLabelledBy='';select.data('_tmp',0);control.addClass(select.attr('class')).attr('id','selectBox-control-'+(select.attr('id')?select.attr('id'):select[0][$.expando])).attr('tabindex',parseInt(select.attr('tabindex'))).css('display','inline-block').bind('focus.selectBox',function(){if(this!==document.activeElement&&document.body!==document.activeElement)$(document.activeElement).blur();if(control.hasClass('selectBox-active'))return;control.addClass('selectBox-active');if(control.data('selectBox-last-selected'))addHover(select,control.data('selectBox-last-selected'));select.trigger('focus');}).bind('blur.selectBox',function(){if(!control.hasClass('selectBox-active'))return;control.removeClass('selectBox-active').removeClass('selectBox-multiselect');select.trigger('blur');});if(!$(window).data('selectBox-bindings')){$(window).data('selectBox-bindings',true).bind('scroll.selectBox',hideMenus).bind('resize.selectBox',hideMenus);}
if(select.attr('title'))control.attr('title',select.attr('title'));if(select.attr('disabled'))control.addClass('selectBox-disabled').attr('aria-disabled',true);$('label[for="'+select.attr('id')+'"]').each(function(index,element){if(!element.id)element.id=control.attr('id')+'-label'+index;ariaLabelledBy=control.attr('aria-labelledby')||'';ariaLabelledBy=ariaLabelledBy.length?ariaLabelledBy+' '+element.id:element.id;control.attr('aria-labelledby',ariaLabelledBy)});select.closest('label').each(function(index,element){if(!element.id)element.id=control.attr('id')+'-label'+index;ariaLabelledBy=control.attr('aria-labelledby')||'';ariaLabelledBy=ariaLabelledBy.length?ariaLabelledBy+' '+element.id:element.id;control.attr('aria-labelledby',ariaLabelledBy)});if(select.attr('aria-labelledby'))
{ariaLabelledBy=control.attr('aria-labelledby')||'';ariaLabelledBy=ariaLabelledBy.length?ariaLabelledBy+' '+select.attr('aria-labelledby'):select.attr('aria-labelledby');control.attr('aria-labelledby',ariaLabelledBy);}
if(select.attr('aria-label'))control.attr('aria-label',select.attr('aria-label'));select.bind('click.selectBox',function(event){control.focus();event.preventDefault();});if(inline){options=getOptions(select,'inline');control.attr('role','listbox').attr('aria-multiselectable',multiple).append(options).data('selectBox-options',options).addClass('selectBox-inline selectBox-menuShowing').bind('keydown.selectBox',function(event){handleKeyDown(select,event);}).bind('keypress.selectBox',function(event){handleKeyPress(select,event);}).bind('mousedown.selectBox',function(event){if($(event.target).is('A.selectBox-inline'))event.preventDefault();if(!control.hasClass('selectBox-active'))control.focus();}).insertAfter(select);if(!select[0].style.height){var size=select.attr('size')?parseInt(select.attr('size')):5;var tmp=control.clone().removeAttr('id').css({position:'absolute',top:'-9999em'}).show().appendTo('body');tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');var optionHeight=parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());tmp.remove();control.height(optionHeight*size);}
disableSelection(control);}else{var label=$('<span class="selectBox-label" />'),arrow=$('<span class="selectBox-arrow"><span class="selectBox-arrow-icon"></span></span>');label.attr('id','selectBox-label-'+control.attr('id')).attr('class',getLabelClass(select)).text(getLabelText(select));options=getOptions(select,'dropdown');ariaLabelledBy=ariaLabelledBy.length?label.attr('id')+' '+ariaLabelledBy:label.attr('id');control.attr('role','combobox').attr('aria-readonly',true).attr('aria-expanded',false).attr('aria-owns','selectBox-dropdown-menu-'+(select.attr('id')?select.attr('id'):select[0][$.expando])).attr('aria-labelledby',ariaLabelledBy).data('selectBox-options',options).addClass('selectBox-dropdown').append(label).append(arrow).bind('mousedown.selectBox',function(event){if(control.hasClass('selectBox-menuShowing')){hideMenus();}else{event.stopPropagation();options.data('selectBox-down-at-x',event.screenX).data('selectBox-down-at-y',event.screenY);showMenu(select);}}).bind('keydown.selectBox',function(event){handleKeyDown(select,event);}).bind('keypress.selectBox',function(event){handleKeyPress(select,event);}).bind('open.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true)return;showMenu(select);}).bind('close.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true)return;hideMenus();}).insertAfter(select);options.attr('aria-labelledby',ariaLabelledBy).insertAfter(control);var labelWidth=control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft'));label.width(labelWidth);disableSelection(control);}
select.removeData('_tmp').addClass('selectBox').data('selectBox-control',control).data('selectBox-settings',settings).hide();adjustWidth(select);lastSelected=options.find('.selectBox-selected').last();if(lastSelected.length){control.data('selectBox-last-selected',lastSelected);control.attr('aria-activedescendant',lastSelected.attr('id'));keepOptionInView(select,lastSelected,true);}};var getOptions=function(select,type){var options,option,i=0
_getOptions=function(select,options){select.children('OPTION, OPTGROUP').each(function(){if($(this).is('OPTION')){var parentNode=$(this).parent().is('OPTGROUP')?options.find('.selectBox-optgroup:last ul'):options;if($(this).length>0){option=generateOption($(this),parentNode);option.find('A').attr('id',options.attr('id')+'-'+(i++));}else{parentNode.append('<li role="presentation"><a>\u00A0</a></li>')}}else{i++;var optgroup=$('<li id="selectBox-optgroup-'+i+'" class="selectBox-optgroup" role="presentation" />').append('<span id="selectBox-optgroup-'+i+'-label">'+$(this).attr('label')+'</span>').append('<ul aria-labelledby="selectBox-optgroup-'+i+'-label"></ul>');options.append(optgroup);options=_getOptions($(this),options);}});return options;};switch(type){case'inline':options=$('<ul class="selectBox-options" role="presentation" />');options.attr('id','selectBox-menu-'+(select.attr('id')?select.attr('id'):select[0][$.expando]));options=_getOptions(select,options);options.find('A').bind('mouseover.selectBox',function(event){addHover(select,$(this).parent());}).bind('mouseout.selectBox',function(event){removeHover(select,$(this).parent());}).bind('mousedown.selectBox',function(event){event.preventDefault();if(!select.selectBox('control').hasClass('selectBox-active'))select.selectBox('control').focus();}).bind('mouseup.selectBox',function(event){hideMenus();addHover(select,$(this).parent());selectOption(select,$(this).parent(),event);keepOptionInView(select,$(this).parent());});disableSelection(options);return options;case'dropdown':options=$('<ul class="selectBox-dropdown-menu selectBox-options" role="listbox" />');options.attr('id','selectBox-dropdown-menu-'+(select.attr('id')?select.attr('id'):select[0][$.expando]));options=_getOptions(select,options);options.data('selectBox-select',select).css('display','none').find('A').bind('mousedown.selectBox',function(event){event.preventDefault();if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');hideMenus();}}).bind('mouseup.selectBox',function(event){if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){return;}else{options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');}
selectOption(select,$(this).parent(),event);hideMenus();}).bind('mouseover.selectBox',function(event){addHover(select,$(this).parent());}).bind('mouseout.selectBox',function(event){removeHover(select,$(this).parent());});var classes=select.attr('class')||'';if(classes!==''){classes=classes.split(' ');for(var i in classes)options.addClass(classes[i]+'-selectBox-dropdown-menu');}
disableSelection(options);return options;}};var getLabelClass=function(select){var selected=$(select).find('OPTION:selected');return('selectBox-label '+(selected.attr('class')||'')).replace(/\s+$/,'');};var getLabelText=function(select){var selected=$(select).find('OPTION:selected');return selected.text()||'\u00A0';};var setLabel=function(select){select=$(select);var control=select.data('selectBox-control');if(!control)return;control.find('.selectBox-label').attr('class',getLabelClass(select)).text(getLabelText(select));};var adjustWidth=function(select){select=$(select);var settings=select.data('selectBox-settings'),control=select.data('selectBox-control');if(!control)return;var inline=!!select.attr('multiple')||parseInt(select.attr('size'))>1,options=control.data('selectBox-options'),label=control.find('.selectBox-label').first(),arrow=control.find('.selectBox-arrow').first(),len=0,testLength,longestOption,cachedLabelHtml,selectCSSWidth=select[0].style.width,selectCSSMinWidth=select[0].style.minWidth,selectCSSMaxWidth=select[0].style.maxWidth,originalWidth=control.width(),newWidth;control.width(select.width());if(label.length)label.width(control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft')));if(settings.autoSize&&!select[0].style.width)
{options.find('A').each(function(index,element){testLength=$(element).text().length;if(testLength>len){len=testLength;longestOption=$(element);}});if(longestOption)
{if(!inline){cachedLabelHtml=label.html();label.html(longestOption.html()).css({overflow:'visible',width:'auto'});newWidth=Math.max(label.outerWidth()+arrow.outerWidth(),select.width());if(selectCSSMinWidth)newWidth=Math.max(parseInt(selectCSSMinWidth),newWidth);if(selectCSSMaxWidth)newWidth=Math.min(parseInt(selectCSSMaxWidth),newWidth);control.width(newWidth);label.width(control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft'))).html(cachedLabelHtml).css({overflow:'hidden'});}else{control.css({overflow:'visible',width:'auto'});if(longestOption.outerWidth()>originalWidth)
{newWidth=Math.max(longestOption.outerWidth(),select.width());if(options.height()>control.height())newWidth+=13;if(selectCSSMinWidth)newWidth=Math.max(parseInt(selectCSSMinWidth),newWidth);if(selectCSSMaxWidth)newWidth=Math.min(parseInt(selectCSSMaxWidth),newWidth);control.css({overflow:'auto'}).width(newWidth);}else
{control.css({overflow:'auto'}).width(originalWidth);}}}}};var destroy=function(select){select=$(select);var control=select.data('selectBox-control');if(!control)return;var options=control.data('selectBox-options');options.remove();control.remove();select.removeClass('selectBox').removeData('selectBox-control').data('selectBox-control',null).removeData('selectBox-settings').data('selectBox-settings',null).show();};var refresh=function(select){select=$(select);select.selectBox('options',select.html());adjustWidth(select);};var showMenu=function(select){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options');if(control.hasClass('selectBox-disabled'))return false;hideMenus();var borderBottomWidth=isNaN(control.css('borderBottomWidth'))?0:parseInt(control.css('borderBottomWidth'));options.width(control.innerWidth());if(select.triggerHandler('beforeopen'))return false;var dispatchOpenEvent=function(){select.triggerHandler('open',{_selectBox:true});};switch(settings.menuTransition){case'fade':options.fadeIn(settings.menuSpeed,dispatchOpenEvent);break;case'slide':options.slideDown(settings.menuSpeed,dispatchOpenEvent);break;default:options.show(settings.menuSpeed,dispatchOpenEvent);break;}
if(!settings.menuSpeed)dispatchOpenEvent();var li=control.data('selectBox-last-selected')?control.data('selectBox-last-selected'):options.find('.selectBox-selected:last');keepOptionInView(select,li,true);addHover(select,li);control.addClass('selectBox-menuShowing').attr('aria-expanded',true);$(document).bind('mousedown.selectBox',function(event){if($(event.target).parents().andSelf().hasClass('selectBox-options'))return;hideMenus();});};var hideMenus=function(){if($(".selectBox-dropdown-menu:visible").length===0)return;$(document).unbind('mousedown.selectBox');$(".selectBox-dropdown-menu").each(function(){var options=$(this),select=options.data('selectBox-select'),control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),lastSelected=options.find('.selectBox-selected');if(select.triggerHandler('beforeclose'))return false;var dispatchCloseEvent=function(){select.triggerHandler('close',{_selectBox:true});};control.data('selectBox-last-selected',lastSelected).attr('aria-expanded',false).attr('aria-activedescendant',lastSelected.find('A').attr('id'));options.attr('aria-activedescendant',control.attr('aria-activedescendant'));if(settings){switch(settings.menuTransition){case'fade':options.fadeOut(settings.menuSpeed,dispatchCloseEvent);break;case'slide':options.slideUp(settings.menuSpeed,dispatchCloseEvent);break;default:options.hide(settings.menuSpeed,dispatchCloseEvent);break;}
if(!settings.menuSpeed)dispatchCloseEvent();control.removeClass('selectBox-menuShowing');}else{$(this).hide();$(this).triggerHandler('close',{_selectBox:true});$(this).removeClass('selectBox-menuShowing');}});};var selectOption=function(select,li,event){select=$(select);li=$(li);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options'),lis=options.find('li:not(.selectBox-optgroup, .selectBox-disabled)'),lastSelected=control.data('selectBox-last-selected'),dir=-1,affectedOptions,selectedOptions;if(control.hasClass('selectBox-disabled'))return false;if(li.length===0||li.hasClass('selectBox-disabled'))return false;if(select.attr('multiple')){if(event.shiftKey&&lastSelected){li.toggleClass('selectBox-selected');if(li.hasClass('selectBox-selected')){li.find('A').attr('aria-selected',true);}else{li.find('A').removeAttr('aria-selected');}
var affectedOptions;if(lis.index(li)>lis.index(lastSelected)){affectedOptions=lis.slice(lis.index(lastSelected),lis.index(li));}else{affectedOptions=lis.slice(lis.index(li),lis.index(lastSelected)+1);}
affectedOptions=affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');if(li.hasClass('selectBox-selected')){affectedOptions.addClass('selectBox-selected').find('A').attr('aria-selected',true);}else{affectedOptions.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');}
if(event.type=='keydown')
{switch(event.keyCode)
{case 37:case 38:{dir=1;break;}
case 39:case 40:{dir=0;break;}}
if(affectedOptions.index(lastSelected)==dir)
{if(li.hasClass('selectBox-selected')&&!lastSelected.hasClass('selectBox-selected')){li.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');}else{li.addClass('selectBox-selected').find('A').attr('aria-selected',true);}}
if(event.keyCode!=13&&event.keyCode!=32)
{selectedOptions=options.find('.selectBox-selected');var startSelected=selectedOptions.index(li),startLi=lis.index(li),lastIndex=startLi,testIndex,i,contiguous=true;for(i=startSelected;i>=0;i--)
{testIndex=lis.index(selectedOptions.eq(i));if(Math.abs(testIndex-lastIndex)>1)
contiguous=false;if(!contiguous)
selectedOptions.eq(i).removeClass('selectBox-selected').find('A').removeAttr('aria-selected');lastIndex=testIndex;}
contiguous=true;lastIndex=startLi;for(i=startSelected;i<selectedOptions.length;i++)
{testIndex=lis.index(selectedOptions.eq(i))
if(Math.abs(testIndex-lastIndex)>1)
contiguous=false;if(!contiguous)
selectedOptions.eq(i).removeClass('selectBox-selected').find('A').removeAttr('aria-selected');lastIndex=testIndex;}}}}else if((isMac&&event.metaKey)||(!isMac&&event.ctrlKey)||control.hasClass('selectBox-multiselect')){if(event.type!='keydown'||(event.keyCode==13||event.keyCode==32||event.keyCode==65)){if(event.keyCode==65){li.addClass('selectBox-selected');}else{li.toggleClass('selectBox-selected');}
if(li.hasClass('selectBox-selected')){li.find('A').attr('aria-selected',true);}else{li.find('A').removeAttr('aria-selected');}}}else{lis.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');li.addClass('selectBox-selected').find('A').attr('aria-selected',true);}}else if(event.type!='keydown'||!((isMac&&event.metaKey)||(!isMac&&event.ctrlKey))){lis.removeClass('selectBox-selected').find('A').removeAttr('aria-selected');li.addClass('selectBox-selected').find('A').attr('aria-selected',true);}
if(control.hasClass('selectBox-dropdown')&&li.hasClass('selectBox-selected')){control.find('.selectBox-label').text(li.text());}
var i=0,selection=[];if(select.attr('multiple')){control.find('.selectBox-selected A').each(function(){selection[i++]=$(this).attr('rel');});}else{selection=options.find('.selectBox-selected A').attr('rel');}
control.data('selectBox-last-selected',li).attr('aria-activedescendant',li.find('A').attr('id'));options.attr('aria-activedescendant',control.attr('aria-activedescendant'));if(select.val()!==selection){select.val(selection);setLabel(select);select.trigger('change');}
return true;};var addHover=function(select,li){select=$(select);li=$(li);var control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');li.addClass('selectBox-hover');};var removeHover=function(select,li){select=$(select);li=$(li);var control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');};var keepOptionInView=function(select,li,center){if(!li||li.length===0)return;select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),scrollBox=control.hasClass('selectBox-dropdown')?options:options.parent(),top=parseInt(li.offset().top-scrollBox.position().top),bottom=parseInt(top+li.outerHeight());if(center){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop()-(scrollBox.height()/2));}else{if(top<0){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop());}
if(bottom>scrollBox.height()){scrollBox.scrollTop((li.offset().top+li.outerHeight())-scrollBox.offset().top+scrollBox.scrollTop()-scrollBox.height());}}};var handleKeyDown=function(select,event){select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),settings=select.data('selectBox-settings'),totalOptions=0,i=0,currentIndex=0,selectableOptions=options.find('LI:not(.selectBox-optgroup, .selectBox-disabled)'),lis=options.find('LI'),lastSelected=control.data('selectBox-last-selected'),lastHovered=options.find('.selectBox-hover:first'),multiple=!!select.attr('multiple'),pageHeight,optionHeight,size;if(control.hasClass('selectBox-disabled'))return;switch(event.keyCode){case 8:event.preventDefault();typeSearch='';break;case 9:case 27:hideMenus();removeHover(select);control.focus();break;case 13:if(control.hasClass('selectBox-menuShowing')){event.preventDefault();selectOption(select,lastHovered,event);keepOptionInView(select,lastHovered);if(control.hasClass('selectBox-dropdown'))
{hideMenus();control.focus();}}else{showMenu(select);}
break;case 32:if(control.hasClass('selectBox-menuShowing')){event.preventDefault();selectOption(select,lastHovered,event);keepOptionInView(select,lastHovered);}
break;case 33:event.preventDefault();currentIndex=lastSelected?lis.index(lastSelected):lis.index(options.find('.selectBox-hover'));pageHeight=control.hasClass('selectBox-dropdown')?options.height():control.height();optionHeight=parseInt(options.find('A:first').outerHeight());size=(select.attr('size'))?parseInt(select.attr('size')):Math.floor(pageHeight/optionHeight);var newIndex=Math.max(0,currentIndex-size),prev=lis.eq(newIndex);totalOptions=lis.length;i=newIndex;while(prev.length===0||prev.hasClass('selectBox-disabled')||prev.hasClass('selectBox-optgroup')){prev=lis.eq(i-1);if(prev.length===0||i<=0){prev=selectableOptions.eq(0);}
if(--i<=0)break;}
addHover(select,prev);selectOption(select,prev,event);keepOptionInView(select,prev);break;case 34:event.preventDefault();currentIndex=lastSelected?lis.index(lastSelected):lis.index(options.find('.selectBox-hover'));pageHeight=control.hasClass('selectBox-dropdown')?options.height():control.height();optionHeight=parseInt(options.find('A:first').outerHeight());size=(select.attr('size'))?parseInt(select.attr('size')):Math.floor(pageHeight/optionHeight);var newIndex=Math.min(lis.length-1,currentIndex+size),next=lis.eq(newIndex);totalOptions=lis.length;i=newIndex;while(next.length===0||next.hasClass('selectBox-disabled')||next.hasClass('selectBox-optgroup')){next=lis.eq(i+1);if(next.length===0||i>=(totalOptions-1)){next=selectableOptions.eq(selectableOptions.length-1);}
if(++i>=totalOptions)break;}
addHover(select,next);selectOption(select,next,event);keepOptionInView(select,next);break;case 35:event.preventDefault();addHover(select,selectableOptions.last());selectOption(select,selectableOptions.last(),event);keepOptionInView(select,selectableOptions.last());break;case 36:event.preventDefault();addHover(select,selectableOptions.first());selectOption(select,selectableOptions.first(),event);keepOptionInView(select,selectableOptions.first());break;case 38:case 37:event.preventDefault();if(control.hasClass('selectBox-menuShowing')&&!event.altKey){currentIndex=lastSelected?selectableOptions.index(lastSelected):selectableOptions.index(options.find('.selectBox-hover'));if(currentIndex==0&&(!settings.loopOptions||select.attr('multiple')))break;var prev=selectableOptions.eq(currentIndex-1);totalOptions=selectableOptions.length;i=currentIndex-1;while(prev.length===0||prev.hasClass('selectBox-disabled')||prev.hasClass('selectBox-optgroup')){prev=selectableOptions.eq(i-1);if(prev.length===0){if(settings.loopOptions){prev=selectableOptions.eq(selectableOptions.length-1);}else{prev=selectableOptions.eq(0);}
break;}
if(--i<=0)break;}
addHover(select,prev);selectOption(select,prev,event);keepOptionInView(select,prev);}else if(event.altKey){hideMenus();}else{showMenu(select);}
break;case 40:case 39:event.preventDefault();if(control.hasClass('selectBox-menuShowing')){currentIndex=lastSelected?selectableOptions.index(lastSelected):selectableOptions.index(options.find('.selectBox-hover'));if(currentIndex==selectableOptions.length-1&&(!settings.loopOptions||select.attr('multiple')))break;var next=selectableOptions.eq(currentIndex+1);totalOptions=selectableOptions.length;i=currentIndex+1;while(next.length===0||next.hasClass('selectBox-disabled')||next.hasClass('selectBox-optgroup')){next=selectableOptions.eq(i+1);if(next.length===0){if(settings.loopOptions){next=selectableOptions.eq(0);}else{next=selectableOptions.eq(selectableOptions.length-1);}}
if(++i>=totalOptions)break;}
addHover(select,next);selectOption(select,next,event);keepOptionInView(select,next);}else{showMenu(select);}
break;case 119:if(multiple&&event.shiftKey)
{event.preventDefault();control.toggleClass('selectBox-multiselect');}
break;case 65:if(multiple&&((isMac&&event.metaKey)||(!isMac&&event.ctrlKey)))
{event.preventDefault();event.stopPropagation();selectableOptions.not(lastHovered).each(function(index,element){selectOption(select,$(element),event);});addHover(select,lastHovered);selectOption(select,lastHovered,event);keepOptionInView(select,lastHovered);}
break;}};var handleKeyPress=function(select,event){select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),i=0,start=0,o,label,found=false,selectableOptions=options.find('LI:not(.selectBox-optgroup, .selectBox-disabled)'),lastHovered=options.find('.selectBox-hover'),newString=String.fromCharCode(event.charCode||event.keyCode);if(control.hasClass('selectBox-disabled'))return;switch(event.keyCode){case 9:case 27:case 13:case 32:case 38:case 37:case 40:case 39:break;default:if(!control.hasClass('selectBox-menuShowing'))showMenu(select);event.preventDefault();clearTimeout(typeTimer);typeSearch+=newString!=typeSearch?newString:'';for(i=0;i<selectableOptions.length;i++)
{o=selectableOptions.eq(i);if(o.is(lastHovered)){start=(typeSearch.length==1)?i+1:i;break;}}
for(i=start;i<selectableOptions.length;i++){o=selectableOptions.eq(i);label=$.trim(o.text());if(label.substring(0,typeSearch.length).toLowerCase()===typeSearch.toLowerCase())
{found=true;addHover(select,o);keepOptionInView(select,o);break;}}
if(!found)
{for(i=0;i<start;i++){o=selectableOptions.eq(i);label=$.trim(o.text());if(label.substring(0,typeSearch.length).toLowerCase()===typeSearch.toLowerCase())
{addHover(select,o);keepOptionInView(select,o);break;}}}
typeTimer=setTimeout(function(){typeSearch='';},1000);break;}};var enable=function(select){select=$(select);select.attr('disabled',false);var control=select.data('selectBox-control');if(!control)return;control.removeClass('selectBox-disabled').removeAttr('aria-disabled');};var disable=function(select){select=$(select);select.attr('disabled',true);var control=select.data('selectBox-control');if(!control)return;control.addClass('selectBox-disabled').attr('aria-disabled',true);};var setValue=function(select,value){select=$(select);select.val(value);value=select.val();if(value===null){value=select.children().first().val();select.val(value);}
var control=select.data('selectBox-control');if(!control)return;var settings=select.data('selectBox-settings'),options=control.data('selectBox-options');setLabel(select);options.find('.selectBox-selected').removeClass('selectBox-selected').find('A').removeAttr('aria-selected');options.find('A').each(function(){if(typeof(value)==='object'){for(var i=0;i<value.length;i++){if($(this).attr('rel')==value[i]){$(this).attr('aria-selected',true).parent().addClass('selectBox-selected');}}}else{if($(this).attr('rel')==value){$(this).attr('aria-selected',true).parent().addClass('selectBox-selected');}}});if(settings.change)settings.change.call(select);};var setOptions=function(select,options){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings');switch(typeof(data)){case'string':select.html(data);break;case'object':select.html('');for(var i in data){if(data[i]===null)continue;if(typeof(data[i])==='object'){var optgroup=$('<optgroup label="'+i+'" />');for(var j in data[i]){optgroup.append('<option value="'+j+'">'+data[i][j]+'</option>');}
select.append(optgroup);}else{var option=$('<option value="'+i+'">'+data[i]+'</option>');select.append(option);}}
break;}
if(!control)return;control.data('selectBox-options').remove();var type=control.hasClass('selectBox-dropdown')?'dropdown':'inline';options=getOptions(select,type);control.data('selectBox-options',options);switch(type){case'inline':control.append(options);break;case'dropdown':setLabel(select);options.insertAfter(control);break;}};var disableSelection=function(selector){$(selector).css({'MozUserSelect':'none','WebkitUserSelect':'none','MsUserSelect':'none','OUserSelect':'none'}).bind('selectstart',function(event){event.preventDefault();});};var generateOption=function(self,parentNode){var li=$('<li role="presentation" />'),a=$('<a role="option" />');li.addClass(self.attr('class'));li.data(self.data());a.attr('rel',self.val()).text(self.text());li.append(a);if(self.attr('disabled'))li.addClass('selectBox-disabled').find('A').attr('aria-disabled',true);if(self.attr('selected'))li.addClass('selectBox-selected').find('A').attr('aria-selected',true);parentNode.append(li);return li;};switch(method){case'control':return $(this).data('selectBox-control');case'settings':if(!data)return $(this).data('selectBox-settings');$(this).each(function(){$(this).data('selectBox-settings',$.extend(true,$(this).data('selectBox-settings'),data));adjustWidth(this);});break;case'options':if(data===undefined)return $(this).data('selectBox-control').data('selectBox-options');$(this).each(function(){setOptions(this,data);});break;case'value':if(data===undefined)return $(this).val();$(this).each(function(){setValue(this,data);});break;case'refresh':$(this).each(function(){refresh(this);});break;case'enable':$(this).each(function(){enable(this);});break;case'disable':$(this).each(function(){disable(this);});break;case'destroy':$(this).each(function(){destroy(this);});break;default:$(this).each(function(){init(this,method);});break;}
return $(this);}});})(jQuery);
var droidDeviceProfile={id:"Motorola Droid",frag:/droid build/};var nexusDeviceProfile={id:"Google Nexus One",frag:/Android 2/i};var palmPreDeviceProfile={id:"Palm Pre",frag:/525.27.1 pre/i};var genericAndroid2DeviceProfile={id:"Generic Android 2 device",frag:/Android 2/i};var genericAndroid1DeviceProfile={id:"Generic Android 1 device",frag:/Android 1/i};var genericWebOSDeviceProfile={id:"genericWebOS Device",frag:/webos/i};var win311DeviceProfile={id:"Windows 3.11",frag:/win16/i};var win95ADeviceProfile={id:"Windows 95",frag:/windows 95/i};var win95BDeviceProfile={id:"Windows 95",frag:/win95/i};var win95CDeviceProfile={id:"Windows 95",frag:/win_95/i};var win2000ADeviceProfile={id:"Windows 2000",frag:/windows 2000/i};var win2000BDeviceProfile={id:"Windows 2000",frag:/windows nt 5.0/i};var winServer2003DeviceProfile={id:"Windows Server 2003",frag:/windows nt 5.2/i};var winNT40ADeviceProfile={id:"Windows NT 4.0",frag:/windows nt 4.0/i};var winNT40BDeviceProfile={id:"Windows NT 4.0",frag:/winnt/i};var winNT40CDeviceProfile={id:"Windows NT 4.0",frag:/windows nt/i};var winmeDeviceProfile={id:"Windows ME",frag:/windows me/i};var openBSDDeviceProfile={id:"OpenBSD",frag:/openbsd/i};var sunOSDeviceProfile={id:"Sun OS",frag:/sunos/i};var linuxADeviceProfile={id:"Linux",frag:/linux/i};var linuxBDeviceProfile={id:"Linux",frag:/x11/i};var QNXDeviceProfile={id:"QNX",frag:/qnx/i};var beosDeviceProfile={id:"BeOS",frag:/beos/i};var os2DeviceProfile={id:"OS2",frag:/OS\/2/i};var winxpDeviceProfile={id:"Windows XP",frag:/windows xp/i};var winxp2DeviceProfile={id:"Windows XP",frag:/windows nt 5.1/i};var win7ADeviceProfile={id:"Windows 7",frag:/windows nt 6.1/i};var win7BDeviceProfile={id:"Windows 7",frag:/windows nt 7.01/i};var winvistaDeviceProfile={id:"Windows Vista",frag:/windows nt 6.0/i};var macosx106DeviceProfile={id:"Snow Leopard",frag:/mac os x 10.6/i};var macosx105DeviceProfile={id:"Leopard",frag:/mac os x 10.5/i};var macosA={id:"Mac OS",frag:/mac_powerpc/i};var macosB={id:"Mac OS",frag:/macintosh/i};var androidOSFamily={id:"Android OS",frag:/android /i,devices:[droidDeviceProfile,nexusDeviceProfile,genericAndroid1DeviceProfile,genericAndroid2DeviceProfile]};var webOSFamily={id:"webOS",frag:/webOS\/1.3.5/i,devices:[palmPreDeviceProfile,genericWebOSDeviceProfile]};var macOSFamily={id:"Mac OS",frag:/mac os/i,devices:[macosx105DeviceProfile,macosx106DeviceProfile,macosA,macosB]};var winOSFamily={id:"Windows",frag:/windows/i,devices:[winxpDeviceProfile,winxp2DeviceProfile,win7ADeviceProfile,win7BDeviceProfile,winvistaDeviceProfile,win311DeviceProfile,win95ADeviceProfile,win95BDeviceProfile,win95CDeviceProfile,winServer2003DeviceProfile,winNT40ADeviceProfile,winNT40BDeviceProfile,winNT40CDeviceProfile,winmeDeviceProfile]};var linuxOSFamily={id:"Linux",frag:/linux/i,devices:[openBSDDeviceProfile,sunOSDeviceProfile,linuxADeviceProfile,linuxBDeviceProfile,QNXDeviceProfile,beosDeviceProfile,os2DeviceProfile]};var desktopDeviceCategory={id:"Desktop",osFamilies:[macOSFamily,winOSFamily,linuxOSFamily]};var mobileDeviceCategory={id:"Mobile",osFamilies:[androidOSFamily,webOSFamily]};var unknownDeviceCategory={id:"Unidentified Platform"};var categories=[mobileDeviceCategory,desktopDeviceCategory];function identifyDevice(d,ua){if(ua.search(d.frag)>-1){return{device:d.id};}else
return null;}
function identifyOS(os,ua){var deviceInfo=null;var olen=os.devices.length;for(var k=0;k<olen;k++){deviceInfo=identifyDevice(os.devices[k],ua);if(deviceInfo!=null)break;}
if(deviceInfo!=null)deviceInfo.os=os.id;return deviceInfo;}
function identifyCategory(cat,ua){var osInfo=null;var jlen=cat.osFamilies.length;for(var j=0;j<jlen;j++){osInfo=identifyOS(cat.osFamilies[j],ua);if(osInfo!=null)break;}
if(osInfo!=null)osInfo.category=cat.id;return osInfo;}
function identifyCategories(cats,ua){var categoryInfo=null;var clen=cats.length;for(var i=0;i<clen;i++){categoryInfo=identifyCategory(cats[i],ua);if(categoryInfo!=null)break;}
if(!categoryInfo)categoryInfo={};if(!categoryInfo.device)categoryInfo.device='unknown';if(!categoryInfo.os)categoryInfo.os='unknown';if(!categoryInfo.category)categoryInfo.category=unknownDeviceCategory.id;return categoryInfo;}
function getCategoriesInfo(){return identifyCategories(categories,navigator.userAgent.toLowerCase());}
var info=getCategoriesInfo();function displayCategoriesInfo(){alert('isDesktop:'+isDesktop()+', os:'+info.os+', device:'+info.device);}
function isDroid(){return(info.device==droidDeviceProfile.id);}
function isNexus(){return(info.device==nexusDeviceProfile.id);}
function isDesktop(){return(info.category==desktopDeviceCategory.id);}
function isLinuxDesktop(){return(info.os==linuxOSFamily.id);}
function isWinDesktop(){return(info.os==winOSFamily.id);}
function isMacDesktop(){return(info.os==macOSFamily.id);}
function simulateDroid(){info.device=droidDeviceProfile.id;info.category=mobileDeviceCategory.id;info.os=androidOSFamily.id;};
(function($){var LEFT="left",RIGHT="right",UP="up",DOWN="down",NONE="none",AUTO="auto",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH='ontouchstart'in window,PLUGIN_NS='TouchSwipe';var defaults={fingers:1,threshold:75,maxTimeThreshold:null,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto",fallbackToMouseEvents:true};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&typeof method==='string'){if(plugin[method]){return plugin[method].apply(this,Array.prototype.slice.call(arguments,1));}else{$.error('Method '+method+' does not exist on jQuery.swipe');}}
else if(!plugin&&(typeof method==='object'||!method)){return init.apply(this,arguments);}
return $this;};$.fn.swipe.defaults=defaults;$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL};$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN};$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO};$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:ALL_FINGERS};function init(options){if(options&&(options.allowPageScroll===undefined&&(options.swipe!==undefined||options.swipeStatus!==undefined))){options.allowPageScroll=NONE;}
if(!options){options={};}
options=$.extend({},$.fn.swipe.defaults,options);return this.each(function(){var $this=$(this);var plugin=$this.data(PLUGIN_NS);if(!plugin){plugin=new touchSwipe(this,options);$this.data(PLUGIN_NS,plugin);}});}
function touchSwipe(element,options){var useTouchEvents=(SUPPORTS_TOUCH||!options.fallbackToMouseEvents),START_EV=useTouchEvents?'touchstart':'mousedown',MOVE_EV=useTouchEvents?'touchmove':'mousemove',END_EV=useTouchEvents?'touchend':'mouseup',CANCEL_EV='touchcancel';var distance=0;var direction=null;var duration=0;var $element=$(element);var phase="start";var fingerCount=0;var start={x:0,y:0};var end={x:0,y:0};var delta={x:0,y:0};var startTime=0;var endTime=0;try{$element.bind(START_EV,touchStart);$element.bind(CANCEL_EV,touchCancel);}
catch(e){$.error('events not supported '+START_EV+','+CANCEL_EV+' on jQuery.swipe');}
this.enable=function(){$element.bind(START_EV,touchStart);$element.bind(CANCEL_EV,touchCancel);return $element;};this.disable=function(){removeListeners();return $element;};this.destroy=function(){removeListeners();$element.data(PLUGIN_NS,null);return $element;};function touchStart(event){event=event.originalEvent;var ret,evt=SUPPORTS_TOUCH?event.touches[0]:event;phase=PHASE_START;if(SUPPORTS_TOUCH){fingerCount=event.touches.length;}
else{event.preventDefault();}
distance=0;direction=null;duration=0;if(!SUPPORTS_TOUCH||(fingerCount===options.fingers||options.fingers===ALL_FINGERS)){start.x=end.x=evt.pageX;start.y=end.y=evt.pageY;startTime=getTimeStamp();if(options.swipeStatus){ret=triggerHandler(event,phase);}}
else{touchCancel(event);}
if(ret===false){phase=PHASE_CANCEL;triggerHandler(event,phase);return ret;}
else{$element.bind(MOVE_EV,touchMove);$element.bind(END_EV,touchEnd);}};function touchMove(event){event=event.originalEvent;if(phase===PHASE_END||phase===PHASE_CANCEL)
return;var ret,evt=SUPPORTS_TOUCH?event.touches[0]:event;end.x=evt.pageX;end.y=evt.pageY;endTime=getTimeStamp();direction=calculateDirection();if(SUPPORTS_TOUCH){fingerCount=event.touches.length;}
phase=PHASE_MOVE;validateDefaultEvent(event,direction);if((fingerCount===options.fingers||options.fingers===ALL_FINGERS)||!SUPPORTS_TOUCH){distance=calculateDistance();duration=calculateDuration();if(options.swipeStatus){ret=triggerHandler(event,phase,direction,distance,duration);}
if(!options.triggerOnTouchEnd){var cancel=!validateSwipeTime();if(validateSwipeDistance()===true){phase=PHASE_END;ret=triggerHandler(event,phase);}else if(cancel){phase=PHASE_CANCEL;triggerHandler(event,phase);}}}
else{phase=PHASE_CANCEL;triggerHandler(event,phase);}
if(ret===false){phase=PHASE_CANCEL;triggerHandler(event,phase);}}
function touchEnd(event){event=event.originalEvent;event.preventDefault();endTime=getTimeStamp();distance=calculateDistance();direction=calculateDirection();duration=calculateDuration();if(options.triggerOnTouchEnd||(options.triggerOnTouchEnd===false&&phase===PHASE_MOVE)){phase=PHASE_END;if(((fingerCount===options.fingers||options.fingers===ALL_FINGERS)||!SUPPORTS_TOUCH)&&end.x!==0){var cancel=!validateSwipeTime();if((validateSwipeDistance()===true||validateSwipeDistance()===null)&&!cancel)
{triggerHandler(event,phase);}
else if(cancel||validateSwipeDistance()===false){phase=PHASE_CANCEL;triggerHandler(event,phase);}}
else{phase=PHASE_CANCEL;triggerHandler(event,phase);}}
else if(phase===PHASE_MOVE){phase=PHASE_CANCEL;triggerHandler(event,phase);}
$element.unbind(MOVE_EV,touchMove,false);$element.unbind(END_EV,touchEnd,false);}
function touchCancel(){fingerCount=0;start.x=0;start.y=0;end.x=0;end.y=0;delta.x=0;delta.y=0;endTime=0;startTime=0;}
function triggerHandler(event,phase){var ret=undefined;if(options.swipeStatus){ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount);}
if(phase===PHASE_CANCEL){if(options.click&&(fingerCount===1||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance===0)){ret=options.click.call($element,event,event.target);}}
if(phase==PHASE_END){if(options.swipe){ret=options.swipe.call($element,event,direction,distance,duration,fingerCount);}
switch(direction){case LEFT:if(options.swipeLeft){ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount);}
break;case RIGHT:if(options.swipeRight){ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount);}
break;case UP:if(options.swipeUp){ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount);}
break;case DOWN:if(options.swipeDown){ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount);}
break;}}
if(phase===PHASE_CANCEL||phase===PHASE_END){touchCancel(event);}
return ret;}
function validateSwipeDistance(){if(options.threshold!==null){return distance>=options.threshold;}
return null;}
function validateSwipeTime(){var result;if(options.maxTimeThreshold){if(duration>=options.maxTimeThreshold){result=false;}else{result=true;}}
else{result=true;}
return result;}
function validateDefaultEvent(event,direction){if(options.allowPageScroll===NONE){event.preventDefault();}else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:if((options.swipeLeft&&auto)||(!auto&&options.allowPageScroll!=HORIZONTAL)){event.preventDefault();}
break;case RIGHT:if((options.swipeRight&&auto)||(!auto&&options.allowPageScroll!=HORIZONTAL)){event.preventDefault();}
break;case UP:if((options.swipeUp&&auto)||(!auto&&options.allowPageScroll!=VERTICAL)){event.preventDefault();}
break;case DOWN:if((options.swipeDown&&auto)||(!auto&&options.allowPageScroll!=VERTICAL)){event.preventDefault();}
break;}}}
function calculateDuration(){return endTime-startTime;}
function calculateDistance(){return Math.round(Math.sqrt(Math.pow(end.x-start.x,2)+Math.pow(end.y-start.y,2)));}
function caluculateAngle(){var x=start.x-end.x;var y=end.y-start.y;var r=Math.atan2(y,x);var angle=Math.round(r*180/Math.PI);if(angle<0){angle=360-Math.abs(angle);}
return angle;}
function calculateDirection(){var angle=caluculateAngle();if((angle<=45)&&(angle>=0)){return LEFT;}else if((angle<=360)&&(angle>=315)){return LEFT;}else if((angle>=135)&&(angle<=225)){return RIGHT;}else if((angle>45)&&(angle<135)){return DOWN;}else{return UP;}}
function getTimeStamp(){var now=new Date();return now.getTime();}
function removeListeners(){$element.unbind(START_EV,touchStart);$element.unbind(CANCEL_EV,touchCancel);$element.unbind(MOVE_EV,touchMove);$element.unbind(END_EV,touchEnd);}}})(jQuery);
$(document).ready(function()
{$('body').append('<div class="ModalCPodSelect" />');var modalCPod=$(".ModalCPodSelect");modalCPod.dialog({modal:false,bgiframe:true,autoOpen:false,resizable:false,draggable:false,closeOnClick:false,closeOnEscape:true,width:200,dialogClass:'CPodSelectDialog',height:'auto',close:function()
{modalCPod.empty();$('body').removeClass('ModalCPodSelectPanel');modalCPod.dialog('option','position',['center','center']);}});$('.ModalCPodSelect-button').click(function(event)
{modalCPod.dialog("close");$('body').addClass('ModalCPodSelectPanel');var offsetX=(event.clientX-100);modalCPod.dialog('option','position',[offsetX,event.clientY]).load(this.href,function()
{$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});});modalCPod.focus();modalCPod.dialog('open');return false;});$('.ModalCPodSelect-button-inline').click(function(event)
{$('body').addClass('ModalCPodSelectPanel');var urlAry=this.href.split("#");var hiddenDiv=urlAry[1];$('.ModalCPodSelect').empty().html($('#'+hiddenDiv).html());$('.ModalCPodSelect').dialog('option','position',[event.clientX,event.clientY]);$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});modalCPod.focus();modalCPod.dialog('open');return false;});$('.ModalCPodSelect .CPodSelectAccordian .CPodContent li a').live("click",function(event){event.preventDefault();modalCPod.dialog("close");});});
$(document).ready(function()
{$('body').append('<div class="ModalTip" />');var modalTip=$(".ModalTip");modalTip.dialog({modal:false,bgiframe:true,autoOpen:false,resizable:false,draggable:false,closeOnClick:false,width:340,height:'auto',close:function()
{modalTip.empty();$('body').removeClass('ModalTipPanel');modalTip.dialog('option','position',['center','center']);}});$('.ModalTip-button').click(function(event)
{$('body').addClass('ModalTipPanel');modalTip.dialog('option','position',[event.clientX,event.clientY]).load(this.href,function()
{$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});});modalTip.focus();modalTip.dialog('open');return false;});$('.ModalTip-Hover').bind({mouseenter:function(){var ipHeight=$('#CheckoutProdInfo').height();$('#CheckoutProdInfoShadow').height(ipHeight+14);$('#CheckoutProdInfoShadow').show();$('#CheckoutProdInfo').show();if($('#SiteFooter')!=null){$('#RegionPanel').hide();}},mouseleave:function(){$('#CheckoutProdInfoShadow').hide();$('#CheckoutProdInfo').hide();}});$('.ModalTip-button-inline').click(function(event)
{$('body').addClass('ModalTipPanel');var urlAry=this.href.split("#");var hiddenDiv=urlAry[1];modalTip.empty().html($('#'+hiddenDiv).html());modalTip.dialog('option','position',[event.clientX,event.clientY]);$('.ui-dialog-close').hover(function()
{$(this).addClass("ui-state-hover");return false;},function()
{$(this).removeClass("ui-state-hover");return false;});modalTip.focus();modalTip.dialog('open');return false;});});
(function($,c,b){$.map("click dblclick mousemove mousedown mouseup mouseover mouseout touchstart touchend touchmove change select submit keydown keypress keyup".split(" "),function(d){a(d)});a("focusin","focus"+b);a("focusout","blur"+b);$.addOutsideEvent=a;function a(g,e){e=e||g+b;var d=$(),h=g+"."+e+"-special-event";$.event.special[e]={setup:function(){d=d.add(this);if(d.length===1){$(c).bind(h,f)}},teardown:function(){d=d.not(this);if(d.length===0){$(c).unbind(h)}},add:function(i){var j=i.handler;i.handler=function(l,k){l.target=k;j.apply(this,arguments)}}};function f(i){$(d).each(function(){var j=$(this);if(this!==i.target&&!j.has(i.target).length){j.triggerHandler(e,[i.target])}})}}})(jQuery,document,"outside");
(function($,window,undefined){'$:nomunge';var elems=$([]),jq_resize=$.resize=$.extend($.resize,{}),timeout_id,str_setTimeout='setTimeout',str_resize='resize',str_data=str_resize+'-special-event',str_delay='delay',str_throttle='throttleWindow';jq_resize[str_delay]=250;jq_resize[str_throttle]=true;$.event.special[str_resize]={setup:function(){if(!jq_resize[str_throttle]&&this[str_setTimeout]){return false;}
var elem=$(this);elems=elems.add(elem);$.data(this,str_data,{w:elem.width(),h:elem.height()});if(elems.length===1){loopy();}},teardown:function(){if(!jq_resize[str_throttle]&&this[str_setTimeout]){return false;}
var elem=$(this);elems=elems.not(elem);elem.removeData(str_data);if(!elems.length){clearTimeout(timeout_id);}},add:function(handleObj){if(!jq_resize[str_throttle]&&this[str_setTimeout]){return false;}
var old_handler;function new_handler(e,w,h){var elem=$(this),data=$.data(this,str_data);data.w=w!==undefined?w:elem.width();data.h=h!==undefined?h:elem.height();old_handler.apply(this,arguments);};if($.isFunction(handleObj)){old_handler=handleObj;return new_handler;}else{old_handler=handleObj.handler;handleObj.handler=new_handler;}}};function loopy(){timeout_id=window[str_setTimeout](function(){elems.each(function(){var elem=$(this),width=elem.width(),height=elem.height(),data=$.data(this,str_data);if(width!==data.w||height!==data.h){elem.trigger(str_resize,[data.w=width,data.h=height]);}});loopy();},jq_resize[str_delay]);};})(jQuery,this);
(function(window,undefined){'$:nomunge';var $=window.jQuery||window.Cowboy||(window.Cowboy={}),jq_throttle;$.throttle=jq_throttle=function(delay,no_trailing,callback,debounce_mode){var timeout_id,last_exec=0;if(typeof no_trailing!=='boolean'){debounce_mode=callback;callback=no_trailing;no_trailing=undefined;}
function wrapper(){var that=this,elapsed=+new Date()-last_exec,args=arguments;function exec(){last_exec=+new Date();callback.apply(that,args);};function clear(){timeout_id=undefined;};if(debounce_mode&&!timeout_id){exec();}
timeout_id&&clearTimeout(timeout_id);if(debounce_mode===undefined&&elapsed>delay){exec();}else if(no_trailing!==true){timeout_id=setTimeout(debounce_mode?clear:exec,debounce_mode===undefined?delay-elapsed:delay);}};if($.guid){wrapper.guid=callback.guid=callback.guid||$.guid++;}
return wrapper;};$.debounce=function(delay,at_begin,callback){return callback===undefined?jq_throttle(delay,at_begin,false):jq_throttle(delay,callback,at_begin!==false);};})(this);
(function($){$.extend({__stringPrototype:function(str){var splitCheck=("a b".split(/\w/)[0]==" ");function makeRegExpGlobal(p){if(!p.source){return p;}
var mods="g"+((p.ignoreCase)?"i":"")+((p.multiline)?"m":"");return new RegExp(p.source,mods);}
this.str=str;this.JSONFilter=/^\/\*-secure-([\s\S]*)\*\/\s*$/;this.ScriptFragment='<script[^>]*>([\\S\\s]*?)<\/script>';this.specialChar={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\'};this.blank=function(s){return/^\s*$/.test(this.s(s)||' ');};this.camelize=function(s){var a=this.s(s).split('-'),i;s=[a[0]];for(i=1;i<a.length;i++){s.push(a[i].charAt(0).toUpperCase()+a[i].substring(1));}
this.str=s.join('');return this;};this.capitalize=function(s){s=this.s(s);this.str=s.charAt(0).toUpperCase()+s.substring(1).toLowerCase();return this;};this.dasherize=function(s){this.str=this.s(s).split('_').join('-');return this;};this.empty=function(s){return(s)?(s==''):(this.str=='');};this.endsWith=function(pattern,s){s=this.s(s);var d=s.length-pattern.length;return d>=0&&s.lastIndexOf(pattern)===d;};this.escapeHTML=function(s){this.str=this.s(s).split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;');return this;};this.evalJSON=function(sanitize,s){s=this.s(s);var json=this.unfilterJSON(false,s).str;try{if(!sanitize||this.isJSON(json)){return eval('('+json+')');}}catch(e){}
throw new SyntaxError('Badly formed JSON string: '+s);};this.evalScripts=function(s){var scriptTags=this.extractScripts(this.s(s)),results=[];if(scriptTags.length>0){for(var i=0;i<scriptTags.length;i++){results.push(eval(scriptTags[i]));}}
return results;};this.extractScripts=function(s){var matchAll=new RegExp(this.ScriptFragment,'img'),matchOne=new RegExp(this.ScriptFragment,'im'),scriptMatches=this.s(s).match(matchAll)||[],scriptTags=[];if(scriptMatches.length>0){for(var i=0;i<scriptMatches.length;i++){scriptTags.push(scriptMatches[i].match(matchOne)[1]||'');}}
return scriptTags;};this.gsub=function(pattern,replacement,s){s=this.s(s);if($.isFunction(replacement)){var match=s.match(makeRegExpGlobal(pattern));if(match==null){return this;}
s=this.sub(pattern,replacement,match.length,s).str;}
else{s=s.split(pattern).join(replacement);}
this.str=s;return this;};this.include=function(pattern,s){return this.s(s).indexOf(pattern)>-1;};this.inspect=function(useDoubleQuotes,s){s=this.s(s);var specialChar=this.specialChar,escapedString=this.gsub(/[\x00-\x1f\\]/,function(match){var character=specialChar[match[0]];return character?character:'\\u00'+match[0].charCodeAt().toPaddedString(2,16);},s).str;this.str=(useDoubleQuotes)?'"'+escapedString.replace(/"/g,'\\"')+'"':"'"+escapedString.replace(/'/g,'\\\'')+"'";return this;};this.interpolate=function(obj,pattern,s){s=this.s(s);if(!pattern){pattern=/(^|.|\r|\n)(\#\{\s*(\w+)\s*\})/;}
var count=0,length=s.length,match;while(pattern.match(s)&&count++<length){match=pattern.exec(s);s=this.gsub(match[2],obj[match[3]],s).str;}
this.str=s;return this;};this.isJSON=function(s){s=this.s(s);if(this.blank(s)){return false;}
s=s.replace(/\\./g,'@').replace(/"[^"\\\n\r]*"/g,'');return(/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(s);};this.scan=function(pattern,replacement,s){s=this.s(s);this.gsub(pattern,replacement,s).str=s;return this;};this.startsWith=function(pattern,s){return this.s(s).indexOf(pattern)===0;};this.strip=function(s){this.str=$.trim(this.s(s));return this;};this.stripScripts=function(s){this.str=this.s(s).replace(new RegExp(this.ScriptFragment,'img'),'');return this;};this.stripTags=function(s){this.str=this.s(s).replace(/<\/?[^>]+>/gi,'');return this;};this.sub=function(pattern,replacement,count,s){s=this.s(s);count=(!count)?1:count;if(count<0||isNaN(count)){return this;}
pattern=makeRegExpGlobal(pattern);var sarray=s.split(pattern),matches=s.match(pattern);if(splitCheck&&typeof(pattern)=="object"){if(count==matches.length)++count;if(s.indexOf(matches[0])==0)sarray.unshift("");if(s.lastIndexOf(matches[matches.length-1])==s.length-matches[matches.length-1].length)sarray.push("");}
s=sarray[0];for(var i=1;i<sarray.length;i++){if(i<=count){if($.isFunction(replacement)){s+=replacement(matches[i-1]||matches)+sarray[i];}else{s+=replacement+sarray[i];}}else{s+=(matches[i-1]||matches)+sarray[i];}}
this.str=s;return this;};this.succ=function(s){s=this.s(s);this.str=s.slice(0,s.length-1)+String.fromCharCode(s.charCodeAt(s.length-1)+1);return this;};this.times=function(count,s){this.str=count<1?"":(new Array(count+1)).join(this.s(s));return this;};this.toJSON=function(s){return this.inspect(true,this.s(s));};this.toQueryParams=function(separator,s){s=this.s(s);var paramsList=s.substring(s.indexOf('?')+1).split('#')[0].split(separator||'&'),params={},i,key,value,pair;for(i=0;i<paramsList.length;i++){pair=paramsList[i].split('=');key=decodeURIComponent(pair[0]);value=(pair[1])?decodeURIComponent(pair[1]):undefined;if(params[key]){if(typeof params[key]=="string"){params[key]=[params[key]];}
params[key].push(value);}else{params[key]=value;}}
return params;};this.truncate=function(length,truncation,s){s=this.s(s);length=length||30;truncation=(!truncation)?'...':truncation;s=(s.length>length)?s.slice(0,length-truncation.length)+truncation:String(s);this.str=s;return this;};this.underscore=function(s){this.gsub(/[A-Z]/,function(m){return"_"+m.toLowerCase();},this.s(s));if(this.str.substring(0,1)=="_"){this.str=this.str.substring(1);}
return this;};this.unescapeHTML=function(s){this.str=this.stripTags(this.s(s)).str.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');return this;};this.unfilterJSON=function(filter,s){s=this.s(s);filter=filter||this.JSONFilter;var filtered=s.match(filter);this.str=(filtered!==null)?filtered[1]:s;return this;};this.value=function(){return this.str;};this.s=function(s){return(s)?s:this.str;};},string:function(str){if(str===String.prototype){$.extend(String.prototype,new $.__stringPrototype());}
else{return new $.__stringPrototype(str);}}});$.__stringPrototype.parseQuery=$.__stringPrototype.toQueryParams;})(jQuery);
(function(){$.widget("jv.treeList",{options:{selectable:true},_create:function()
{var w=this,control=$(this.element);w._initItem(control.find('dl'));var $lisOpen=control.find('dt.ui-treeList-open');w.openNode($lisOpen);control.find('a.treeList').bind('click keypress',function(event)
{if(event.type=='keypress'&&event.which!='13')
{return;}
var treeButtonLength=control.find('dt').length,treeButtonsClosed=control.find('dt.ui-state-default').length;if(treeButtonsClosed<treeButtonLength)
{event.preventDefault();w.closeNode(control.find('dt'));}
else
{event.preventDefault();w.openNode(control.find('dt'));}});control.find('dt a.ui-treeList-toggle').bind('click keypress',function(event)
{if(event.type=='keypress'&&event.which!='13')
{return;}
var t=$(event.target).parents('dt');if(t.hasClass('ui-state-default'))
{event.preventDefault();w.openNode(t);}
else
{event.preventDefault();w.closeNode(t);}});},destroy:function()
{$(this.element+'a.treeList').unbind('click');$(this.element).find('dl').removeClass('ui-treeList ui-widget ui-widget-content').find('dt').unbind('mouseenter mouseleave').removeClass('ui-treeList-item ui-widget-content ui-state-default ui-state-hover').remove().unbind('click');$.Widget.prototype.destroy.call(this);},_initItem:function($lis)
{$lis.addClass('ui-treeList ui-widget ui-widget-content').find('dt').addClass('ui-treeList-item ui-widget-content ui-state-default').hover(function()
{$(this).addClass('ui-state-hover');return false;},function()
{$(this).removeClass('ui-state-hover');return false;}).wrapInner('<div class="TreeListFloat" />').prepend('<div class="TreeListArrow"><span class="ui-widget ui-widget-content ui-icon ui-icon-triangle-1-e"></span></div>').wrapInner('<div class="LayoutBreakAfter TreeListPad" />').end().children('dd').addClass('TreeListPad').hide().end().find('dt a').addClass('ui-treeList-toggle');},openNode:function($lisOpen)
{if($lisOpen)
{$lisOpen.removeClass('ui-state-default').next('dd').show().end().find('.ui-icon-triangle-1-e').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');$lisOpen.find(".TreeListPreview").hide();}},closeNode:function($lisClose)
{if($lisClose)
{$lisClose.addClass('ui-state-default').next('dd').hide().end().find('.ui-icon-triangle-1-s').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-e');$lisClose.find(".TreeListPreview").show();}}});})(jQuery);
$(document).ready(function()
{$('.SignInLink').live('click',function(){$('.CreateNewLink').removeClass("ActiveLink");if(!($(this).hasClass("ActiveLink")))
{$(this).addClass("ActiveLink");$(".CreateNewContent").hide();$(".SignInContent").show();}});$('.CreateNewLink').live('click',function(){$('.SignInLink').removeClass("ActiveLink");if(!($(this).hasClass("ActiveLink")))
{$(this).addClass("ActiveLink");$(".SignInContent").hide();$(".CreateNewContent").show();}});});
$(document).ready(function()
{$(".SubscriptionCheckout").click(function(){if($(this).hasClass("DisableFade"))
{return false;}});$(".TermsConditions").click(function(){if($(this).is(":checked"))
{$(".SubscriptionCheckout").removeClass("DisableFade");}
else
{$(".SubscriptionCheckout").addClass("DisableFade");}});$("#CartPromotionApply").click(function(){if($(this).hasClass("DisableFadeGrey"))
{return false;}
else{}});$("#CartPromotion").keyup(function(){if(!($(this).val()==""))
{$("#CartPromotionApply").removeClass("DisableFadeGrey");}
else{$("#CartPromotionApply").addClass("DisableFadeGrey");}});$("#CartShippingApply").click(function(){if($(this).hasClass("DisableFadeGrey"))
{return false;}
else{}});$("#ShippingCode").keyup(function(){if(!($(this).val()==""))
{$("#CartShippingApply").removeClass("DisableFadeGrey");}
else{$("#CartShippingApply").addClass("DisableFadeGrey");}});});
URLParser=(function(){var pageURL=window.location.toString();var urlArray=new Array();var pathArray=new Array();urlArray=pageURL.split('//');pathArray=urlArray[1].split('/');var subDomain=pathArray[0].split('.')[0];var locale=pathArray[1];locale=((locale.length==2)||(locale=="ca_fr")||(locale=="africa")||(locale=="be_en")||(locale=="be_fr")||(locale=="be_nl")||(locale=="eeurope")||(locale=="il_en")||(locale=="il_he")||(locale=="lu_de")||(locale=="lu_en")||(locale=="lu_fr")||(locale=="mena_ar")||(locale=="mena_fr")||(locale=="ch_de")||(locale=="ch_fr")||(locale=="ch_it")||(locale=="hk_zh")||(locale=="hk_en")||(locale=="sea"))?locale:"en_us";if(locale=="en_us"){pathArray.splice(1,0,locale);}
var siteLevel=pathArray[2];var siteSection=pathArray[3];var productName=(siteLevel=="products")?product=pathArray[3]:"";var siteSubSection=pathArray[4];var productSection=(siteLevel=="products")?product=pathArray[4]:"";var productSubSection=(siteLevel=="products")?product=pathArray[5]:"";var fileName;$.each(pathArray,function(part){});return{"url":window.location,"path":window.location.pathname,"protocol":window.location.protocol,"hash":window.location.hash,"subDomain":subDomain,"host":pathArray[0],"locale":locale,"siteLevel":siteLevel,"siteSection":siteSection,"productName":productName,"siteSubSection":siteSubSection,"productSection":productSection,"productSubSection":productSubSection,"fileName":fileName};})();
$(document).ready(function()
{var PageToolsUrl=location.href;var PageToolsTitle=document.title;var bitLySuccess=false;var bitLyShortURL;function bitLy()
{if($.browser.msie)
{bitLySuccess=false;}
else
{var account=$('meta[name=area]').attr("content");switch(account)
{case'devnet':var bitLyLogin='edsulliva';var bitLyApiKey='R_3466dc7c929862c7b400574c56d3eb6b';break;case'products':bitLyLogin='adobesm';bitLyApiKey='R_214c6d683f4ce59a161ce18046883b5d';break;default:bitLyLogin='adobesm';bitLyApiKey='R_214c6d683f4ce59a161ce18046883b5d';}
var bitLyApi='http://api.bit.ly/v3/shorten?';var bitLyFormat='xml';var bitLyURL=bitLyApi+'login='+bitLyLogin+'&apiKey='+bitLyApiKey+'&longUrl='+encodeURIComponent(PageToolsUrl)+'&format='+bitLyFormat;$.ajax({type:'GET',contentType:'application/x-www-form-urlencoded',dataType:bitLyFormat,url:bitLyURL,async:false,success:function(xml)
{$(xml).find("url").each(function()
{bitLySuccess=true;bitLyShortURL=$(this).text();});},error:function()
{}});}}
$('.Facebook-button').click(function(event)
{event.preventDefault();bitLy();if(bitLySuccess)
{window.open('http://www.facebook.com/sharer.php?u='+bitLyShortURL+'&t='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}
else
{window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(PageToolsUrl)+'&t='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}});$('.Twitter-button').click(function(event)
{event.preventDefault();bitLy();if(bitLySuccess)
{window.open('http://twitter.com/share?text='+encodeURIComponent(PageToolsTitle)+'&url='+bitLyShortURL+'&data-counturl='+encodeURIComponent(PageToolsUrl),'sharer','toolbar=0,status=0,width=775,height=436');}
else
{window.open('http://twitter.com/share?text='+encodeURIComponent(PageToolsTitle)+'&url='+encodeURIComponent(PageToolsUrl),'sharer','toolbar=0,status=0,width=775,height=436');}});$('.LinkedIn-button').click(function(event)
{event.preventDefault();bitLy();if(bitLySuccess)
{window.open('http://www.linkedin.com/shareArticle?mini=true&url='+bitLyShortURL+'&title='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}
else
{window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(PageToolsUrl)+'&title='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');}});$('.Weibo-button').click(function(event)
{event.preventDefault();window.open('http://service.weibo.com/share/share.php?url='+encodeURIComponent(PageToolsUrl)+'&title='+encodeURIComponent(PageToolsTitle),'sharer','toolbar=0,status=0,width=626,height=436');});$('.PayPal-button').click(function(event)
{event.preventDefault();window.open('https://www.paypal.com/us/cgi-bin/webscr?cmd=xpt/Marketing/popup/OLCWhatIsPayPal-outside','olcwhatispaypal','toolbar=0,status=0,width=400,height=350');});if($.browser.msie||$.browser.mozilla||window.opera)
{$('.Bookmark-button').click(function(event)
{event.preventDefault();var BookmarkUrl=parent.location.protocol+'//'+location.host+window.location.pathname;var BookmarkTitle=$('title').html();if($.browser.mozilla)
{window.sidebar.addPanel(BookmarkTitle,BookmarkUrl,"");}
else if($.browser.msie)
{window.external.AddFavorite(BookmarkUrl,BookmarkTitle);}
else if(window.opera)
{$(this).attr("href",BookmarkUrl);$(this).attr("title",BookmarkTitle);$(this).attr("rel","sidebar");$(this).click();}});}
else
{$('.IconBookmark').remove();$('.Bookmark-button').remove();}
$('.Print-button').click(function(event)
{event.preventDefault();window.print();});$('.RouterClose').click(function()
{var IconTarget=$(this).attr('rel');$('#'+IconTarget).hide("pulsate",{times:1},600);});$('.LinkDownload').hover(function()
{$(this).find('a').css('cursor','default');var DownloadHover=$(this).find('a').attr('rel');$(this).addClass("Link"+DownloadHover);},function()
{$(this).find('a').css('cursor','');var DownloadHover=$(this).find('a').attr('rel');$(this).removeClass("Link"+DownloadHover);});$('.RouterMore').hover(function()
{$(this).removeClass("RouterMore");$(this).addClass("RouterMoreHover");},function()
{$(this).removeClass("RouterMoreHover");$(this).addClass("RouterMore");});$('.RouterEducation').hover(function()
{$(this).removeClass("RouterEducation");$(this).addClass("RouterEducationHover");},function()
{$(this).removeClass("RouterEducationHover");$(this).addClass("RouterEducation");});$('.RouterFacebook').hover(function()
{$(this).removeClass("RouterFacebook");$(this).addClass("RouterFacebookHover");},function()
{$(this).removeClass("RouterFacebookHover");$(this).addClass("RouterFacebook");});$('.RouterTwitter').hover(function()
{$(this).removeClass("RouterTwitter");$(this).addClass("RouterTwitterHover");},function()
{$(this).removeClass("RouterTwitterHover");$(this).addClass("RouterTwitter");});$('.RouterRSS').hover(function()
{$(this).removeClass("RouterRSS");$(this).addClass("RouterRSSHover");},function()
{$(this).removeClass("RouterRSSHover");$(this).addClass("RouterRSS");});$('.RouterAIGA').hover(function()
{$(this).removeClass("RouterAIGA");$(this).addClass("RouterAIGAHover");},function()
{$(this).removeClass("RouterAIGAHover");$(this).addClass("RouterAIGA");});});
(function($,undefined){$.jCacher=new function(){var cache=this;var $this=$(this);cache.version="1.0.0";cache.count=0;var currentTimeout;var nextKey;var nextCheck;var store=new storage(false);var addMilliseconds=function(date,milliseconds){return new Date(date.getTime()+milliseconds);};var removeItem=function(key,reason){var itm=store.getCacheItem(key);if(key!==null&&key!==undefined&&itm!==null){cache.count--;var mappings=store.getDependencyMappings(key);store.removeCacheItem(key);onitemremoved(itm,reason);for(var i=0;i<mappings.length;i++){removeItem(mappings[i],"dependencyChanged");}}
return itm!==undefined;};var validate=function(){var now=new Date();var items=store.getCacheItems();var rebuildSchedule=false;for(var i=0;i<items.length;i++){var item=items[i];if(item.expires<=now){rebuildSchedule=true;removeItem(item.key,"expired");}}
if(rebuildSchedule){schedule();}};var schedule=function(item){if(item===undefined){nextCheck=null;nextKey=null;if(currentTimeout){clearTimeout(currentTimeout);}
var items=store.getCacheItems();for(var i=0;i<items.length;i++){var itm=items[i];if(nextCheck){if(itm.expires<nextCheck){nextCheck=itm.expires;nextKey=itm.key;}}
else{nextCheck=itm.expires;nextKey=itm.key;}}
if(nextCheck){setTimer();}
else{currentTimeout=null;}}
else if(nextCheck==undefined||(nextCheck&&item.expires<nextCheck)){if(currentTimeout){clearTimeout(currentTimeout);}
nextCheck=item.expires;setTimer();}};var setTimer=function(){if(nextCheck){var now=new Date();var timeUntilNextCheck=nextCheck.getTime()-now.getTime()+100;if(timeUntilNextCheck>0){currentTimeout=setTimeout(validate,timeUntilNextCheck);}
else{validate();}}}
var onitemremoved=function(item,reason){$this.trigger("itemremoved",[item,reason]);};cache.itemremoved=function(fn){$this.bind("itemremoved",fn);};cache.add=function(key,value,slidingExpiration,absoluteExpiration,dependencies,onRemoved){if(value!==undefined){if(store.getCacheKeys().indexOf(key)==-1){cache.count++;}
var expires;if(slidingExpiration||absoluteExpiration){if(slidingExpiration){expires=addMilliseconds(new Date(),(slidingExpiration*1000));}
else if(absoluteExpiration){expires=absoluteExpiration;}}
if(dependencies){store.registerDependencies(key,dependencies);}
var item=new cacheItem(key,value,expires,slidingExpiration)
store.addCacheItem(item);if(expires&&(nextCheck===undefined||expires<nextCheck)||(nextKey==key||nextCheck===null)){schedule(item);}}};cache.get=function(key){var itm=store.getCacheItem(key);if(itm){var now=new Date();if(itm.slidingExpiration){itm.expires=addMilliseconds(now,(itm.slidingExpiration*1000));if((key==nextKey)||(nextCheck&&itm.expires<nextCheck)){schedule();}
else{var b=true;}}
if(itm.expires&&itm.expires<now){return null;}
return itm;}
return null;};cache.remove=function(key){if(key!==undefined&&key!==null&&key!==NaN&&cache.count>0){return removeItem(key,"removed");if(nextKey==key){schedule();}}};cache.clear=function(){if(cache.count>0){cache.count=0;store.clear();if(currentTimeout!==null){clearTimeout(currentTimeout);currentTimeout=null;}}};if(store.getCacheItems().length>0){schedule();}}
function cacheItem(key,value,expires,slidingExpiration){this.key=key;this.value=value;this.expires=expires;this.slidingExpiration=slidingExpiration;}
function dependencyMapper(key,mappings){this.key=key;this.mappings=mappings;}
function storage(useLocalStorage){var _items=[];var _keys=[];var _dependencyMappings=[];(function(){if(useLocalStorage&&window.localStorage){if(!window.localStorage.jCacher){window.localStorage.jCacher=jQuery.toJSON({items:[],dependencyMappings:[]});}
else{var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);for(var i=0;i<cacheItem.items.length;i++){var item=cacheItem.items[i];item.expires=new Date(item.expires);_items.push(item);}
_dependencyMappings=cacheItem.dependencyMappings;}
for(var i=0;i<_items.length;i++){_keys.push(_items[i].key);}}})();this.getCacheItem=function(key){var index=$.inArray(key,_keys);return index>-1?_items[index]:null;};this.getCacheItems=function(){return _items;};this.removeCacheItem=function(key){var indexToRemove=_keys.indexOf(key);if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);cacheItem.dependencyMappings.splice(indexToRemove,1);cacheItem.items.splice(indexToRemove,1);window.localStorage.jCacher=jQuery.toJSON(cacheItem);}
_items.splice(indexToRemove,1);_keys.splice(indexToRemove,1);_dependencyMappings.splice(indexToRemove,1);};this.addCacheItem=function(value){var index=_keys.indexOf(value.key);if(index==-1){var mapper=new dependencyMapper(value.key,[]);_items.push(value);_keys.push(value.key);_dependencyMappings.push(mapper);if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);var jsonValue=(function(){var obj=new Object();obj.expires=value.expires.getTime();obj.key=value.key;obj.value=value.value;obj.slidingExpiration=value.slidingExpiration;return obj;})();cacheItem.items.push(jsonValue);cacheItem.dependencyMappings.push(mapper);window.localStorage.jCacher=jQuery.toJSON(cacheItem);}}
else{_items[index]=value;if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);cacheItem.items[index]=value;window.localStorage.jCacher=jQuery.toJSON(cacheItem);}}};this.getCacheKeys=function(){return _keys;};this.registerDependencies=function(key,dependencies){for(var i=0;i<dependencies.length;i++){var mappingsIndex=_keys.indexOf(dependencies[i]);if(mappingsIndex!=-1){if(_dependencyMappings[mappingsIndex].mappings.indexOf(key)==-1){_dependencyMappings[mappingsIndex].mappings.push(key);if(useLocalStorage&&window.localStorage){var cacheItem=jQuery.parseJSON(window.localStorage.jCacher);cacheItem.dependencyMappings[mappingsIndex].mappings.push(key);window.localStorage.jCacher=jQuery.toJSON(cacheItem);}}}}};this.getDependencyMappings=function(key){var index=_keys.indexOf(key);return index>-1?_dependencyMappings[index].mappings:null;};this.clear=function(){if(window.localStorage){window.localStorage.removeItem("jCacher");}
_items=[];_dependencyMappings=[];_keys=[];};};})(jQuery);
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}
var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}
function l(a){"string"===typeof a&&this.parse(a);return this}
function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}
function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}
function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}
function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);return g(a,"ms")}
d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]="";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);
adobe={version:"1.0",release:"dotcom",msgs:{TYPERR:"argument is not of type "},vrbls:{},vrbl:function(name,value){if(name===undefined){return adobe.vrbls;}
if(value===undefined){return adobe.vrbls[String(name)];}
return adobe.vrbls[String(name)]=value;}};adobe.dom={};adobe.fn={};adobe.http={};adobe.reflow={dispatchers:{},createDispatcher:function(name,documentElement){return(adobe.reflow.dispatchers[name]=new adobe.reflow.Dispatcher(documentElement||document));},getDispatcherByName:function(name){return adobe.reflow.dispatchers[name];}};adobe.ui={};
var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",ON_READY_STATE_CHANGE="onreadystatechange",win=window,doc=document,nav=navigator,plugin=false,domLoadFnArr=[main],regObjArr=[],objIdArr=[],listenersArr=[],storedAltContent,storedAltContentId,storedCallbackFn,storedCallbackObj,isDomLoaded=false,isExpressInstallActive=false,dynamicStylesheet,dynamicStylesheetMedia,autoHideShow=true,ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF,u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=eval("/*@cc_on!@*/false"),playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d&&!(typeof nav.mimeTypes!=UNDEF&&nav.mimeTypes[FLASH_MIME_TYPE]&&!nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)){plugin=true;ie=false;d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}
else if(typeof win.ActiveXObject!=UNDEF){try{var a=new ActiveXObject(SHOCKWAVE_FLASH_AX);if(a){d=a.GetVariable("$version");if(d){ie=true;d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}}
catch(e){}}
return{w3:w3cdom,pv:playerVersion,wk:webkit,ie:ie,win:windows,mac:mac};}(),onDomLoad=function(){if(!ua.w3){return;}
if((typeof doc.readyState!=UNDEF&&doc.readyState=="complete")||(typeof doc.readyState==UNDEF&&(doc.getElementsByTagName("body")[0]||doc.body))){callDomLoadFunctions();}
if(!isDomLoaded){if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,false);}
if(ua.ie&&ua.win){doc.attachEvent(ON_READY_STATE_CHANGE,function(){if(doc.readyState=="complete"){doc.detachEvent(ON_READY_STATE_CHANGE,arguments.callee);callDomLoadFunctions();}});if(win==top){(function(){if(isDomLoaded){return;}
try{doc.documentElement.doScroll("left");}
catch(e){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}}
if(ua.wk){(function(){if(isDomLoaded){return;}
if(!/loaded|complete/.test(doc.readyState)){setTimeout(arguments.callee,0);return;}
callDomLoadFunctions();})();}
addLoadEvent(callDomLoadFunctions);}}();function callDomLoadFunctions(){if(isDomLoaded){return;}
try{var t=doc.getElementsByTagName("body")[0].appendChild(createElement("span"));t.parentNode.removeChild(t);}
catch(e){return;}
isDomLoaded=true;var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]();}}
function addDomLoadEvent(fn){if(isDomLoaded){fn();}
else{domLoadFnArr[domLoadFnArr.length]=fn;}}
function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false);}
else if(typeof win.attachEvent!=UNDEF){addListener(win,"onload",fn);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn();};}
else{win.onload=fn;}}
function main(){if(plugin){testPlayerVersion();}
else{matchVersions();}}
function testPlayerVersion(){var b=doc.getElementsByTagName("body")[0];var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);var t=b.appendChild(o);if(t){var counter=0;(function(){if(typeof t.GetVariable!=UNDEF){var d=t.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");ua.pv=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}
else if(counter<10){counter++;setTimeout(arguments.callee,10);return;}
b.removeChild(o);t=null;matchVersions();})();}
else{matchVersions();}}
function matchVersions(){var rl=regObjArr.length;if(rl>0){for(var i=0;i<rl;i++){var id=regObjArr[i].id;var cb=regObjArr[i].callbackFn;var cbObj={success:false,id:id};if(ua.pv[0]>0){var obj=getElementById(id);if(obj){if(hasPlayerVersion(regObjArr[i].swfVersion)&&!(ua.wk&&ua.wk<312)){setVisibility(id,true);if(cb){cbObj.success=true;cbObj.ref=getObjectById(id);cb(cbObj);}}
else if(regObjArr[i].expressInstall&&canExpressInstall()){var att={};att.data=regObjArr[i].expressInstall;att.width=obj.getAttribute("width")||"0";att.height=obj.getAttribute("height")||"0";if(obj.getAttribute("class")){att.styleclass=obj.getAttribute("class");}
if(obj.getAttribute("align")){att.align=obj.getAttribute("align");}
var par={};var p=obj.getElementsByTagName("param");var pl=p.length;for(var j=0;j<pl;j++){if(p[j].getAttribute("name").toLowerCase()!="movie"){par[p[j].getAttribute("name")]=p[j].getAttribute("value");}}
showExpressInstall(att,par,id,cb);}
else{displayAltContent(obj);if(cb){cb(cbObj);}}}}
else{setVisibility(id,true);if(cb){var o=getObjectById(id);if(o&&typeof o.SetVariable!=UNDEF){cbObj.success=true;cbObj.ref=o;}
cb(cbObj);}}}}}
function getObjectById(objectIdStr){var r=null;var o=getElementById(objectIdStr);if(o&&o.nodeName=="OBJECT"){if(typeof o.SetVariable!=UNDEF){r=o;}
else{var n=o.getElementsByTagName(OBJECT)[0];if(n){r=n;}}}
return r;}
function canExpressInstall(){return!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)&&!(ua.wk&&ua.wk<312);}
function showExpressInstall(att,par,replaceElemIdStr,callbackFn){isExpressInstallActive=true;storedCallbackFn=callbackFn||null;storedCallbackObj={success:false,id:replaceElemIdStr};var obj=getElementById(replaceElemIdStr);if(obj){if(obj.nodeName=="OBJECT"){storedAltContent=abstractAltContent(obj);storedAltContentId=null;}
else{storedAltContent=obj;storedAltContentId=replaceElemIdStr;}
att.id=EXPRESS_INSTALL_ID;if(typeof att.width==UNDEF||(!/%$/.test(att.width)&&parseInt(att.width,10)<310)){att.width="310";}
if(typeof att.height==UNDEF||(!/%$/.test(att.height)&&parseInt(att.height,10)<137)){att.height="137";}
doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",fv="MMredirectURL="+win.location.toString().replace(/&/g,"%26")+"&MMplayerType="+pt+"&MMdoctitle="+doc.title;if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+fv;}
else{par.flashvars=fv;}
if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceElemIdStr+="SWFObjectNew";newObj.setAttribute("id",replaceElemIdStr);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
createSWF(att,par,replaceElemIdStr);}}
function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";(function(){if(obj.readyState==4){obj.parentNode.removeChild(obj);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.replaceChild(abstractAltContent(obj),obj);}}
function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML;}
else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName=="PARAM")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true));}}}}}
return ac;}
function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(ua.wk&&ua.wk<312){return r;}
if(el){if(typeof attObj.id==UNDEF){attObj.id=id;}
if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){parObj.movie=attObj[i];}
else if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"';}
else if(i.toLowerCase()!="classid"){att+=' '+i+'="'+attObj[i]+'"';}}}
var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />';}}
el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+'>'+par+'</object>';objIdArr[objIdArr.length]=attObj.id;r=getElementById(attObj.id);}
else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m]);}
else if(m.toLowerCase()!="classid"){o.setAttribute(m,attObj[m]);}}}
for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n.toLowerCase()!="movie"){createObjParam(o,n,parObj[n]);}}
el.parentNode.replaceChild(o,el);r=o;}}
return r;}
function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p);}
function removeSWF(id){var obj=getElementById(id);if(obj&&obj.nodeName=="OBJECT"){if(ua.ie&&ua.win){obj.style.display="none";(function(){if(obj.readyState==4){removeObjectInIE(id);}
else{setTimeout(arguments.callee,10);}})();}
else{obj.parentNode.removeChild(obj);}}}
function removeObjectInIE(id){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=null;}}
obj.parentNode.removeChild(obj);}}
function getElementById(id){var el=null;try{el=doc.getElementById(id);}
catch(e){}
return el;}
function createElement(el){return doc.createElement(el);}
function addListener(target,eventType,fn){target.attachEvent(eventType,fn);listenersArr[listenersArr.length]=[target,eventType,fn];}
function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10)||0;v[2]=parseInt(v[2],10)||0;return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;}
function createCSS(sel,decl,media,newStyle){if(ua.ie&&ua.mac){return;}
var h=doc.getElementsByTagName("head")[0];if(!h){return;}
var m=(media&&typeof media=="string")?media:"screen";if(newStyle){dynamicStylesheet=null;dynamicStylesheetMedia=null;}
if(!dynamicStylesheet||dynamicStylesheetMedia!=m){var s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media",m);dynamicStylesheet=h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){dynamicStylesheet=doc.styleSheets[doc.styleSheets.length-1];}
dynamicStylesheetMedia=m;}
if(ua.ie&&ua.win){if(dynamicStylesheet&&typeof dynamicStylesheet.addRule==OBJECT){dynamicStylesheet.addRule(sel,decl);}}
else{if(dynamicStylesheet&&typeof doc.createTextNode!=UNDEF){dynamicStylesheet.appendChild(doc.createTextNode(sel+" {"+decl+"}"));}}}
function setVisibility(id,isVisible){if(!autoHideShow){return;}
var v=isVisible?"visible":"hidden";if(isDomLoaded&&getElementById(id)){getElementById(id).style.visibility=v;}
else{createCSS("#"+id,"visibility:"+v);}}
function urlEncodeIfNecessary(s){var regex=/[\\\"<>\.;]/;var hasBadChars=regex.exec(s)!=null;return hasBadChars&&typeof encodeURIComponent!=UNDEF?encodeURIComponent(s):s;}
var cleanup=function(){if(ua.ie&&ua.win){window.attachEvent("onunload",function(){var ll=listenersArr.length;for(var i=0;i<ll;i++){listenersArr[i][0].detachEvent(listenersArr[i][1],listenersArr[i][2]);}
var il=objIdArr.length;for(var j=0;j<il;j++){removeSWF(objIdArr[j]);}
for(var k in ua){ua[k]=null;}
ua=null;for(var l in swfobject){swfobject[l]=null;}
swfobject=null;});}}();return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr,callbackFn){if(ua.w3&&objectIdStr&&swfVersionStr){var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr;regObj.expressInstall=xiSwfUrlStr;regObj.callbackFn=callbackFn;regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false);}
else if(callbackFn){callbackFn({success:false,id:objectIdStr});}},getObjectById:function(objectIdStr){if(ua.w3){return getObjectById(objectIdStr);}},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var callbackObj={success:false,id:replaceElemIdStr};if(ua.w3&&!(ua.wk&&ua.wk<312)&&swfUrlStr&&replaceElemIdStr&&widthStr&&heightStr&&swfVersionStr){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){widthStr+="";heightStr+="";var att={};if(attObj&&typeof attObj===OBJECT){for(var i in attObj){att[i]=attObj[i];}}
att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par={};if(parObj&&typeof parObj===OBJECT){for(var j in parObj){par[j]=parObj[j];}}
if(flashvarsObj&&typeof flashvarsObj===OBJECT){for(var k in flashvarsObj){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+k+"="+flashvarsObj[k];}
else{par.flashvars=k+"="+flashvarsObj[k];}}}
if(hasPlayerVersion(swfVersionStr)){var obj=createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true);}
callbackObj.success=true;callbackObj.ref=obj;}
else if(xiSwfUrlStr&&canExpressInstall()){att.data=xiSwfUrlStr;showExpressInstall(att,par,replaceElemIdStr,callbackFn);return;}
else{setVisibility(replaceElemIdStr,true);}
if(callbackFn){callbackFn(callbackObj);}});}
else if(callbackFn){callbackFn(callbackObj);}},switchOffAutoHideShow:function(){autoHideShow=false;},ua:ua,getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3){return createSWF(attObj,parObj,replaceElemIdStr);}
else{return undefined;}},showExpressInstall:function(att,par,replaceElemIdStr,callbackFn){if(ua.w3&&canExpressInstall()){showExpressInstall(att,par,replaceElemIdStr,callbackFn);}},removeSWF:function(objElemIdStr){if(ua.w3){removeSWF(objElemIdStr);}},createCSS:function(selStr,declStr,mediaStr,newStyleBoolean){if(ua.w3){createCSS(selStr,declStr,mediaStr,newStyleBoolean);}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(q){if(/\?/.test(q)){q=q.split("?")[1];}
if(param==null){return urlEncodeIfNecessary(q);}
var pairs=q.split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=")+1)));}}}
return"";},expressInstallCallback:function(){if(isExpressInstallActive){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj&&storedAltContent){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block";}}
if(storedCallbackFn){storedCallbackFn(storedCallbackObj);}}
isExpressInstallActive=false;}}};}();
swfobject.replaceSWF=function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn){var el=document.getElementById(replaceElemIdStr);if(el.nodeName=="OBJECT"||el.nodeName=="EMBED"){var parent=el.parentNode;swfobject.removeSWF(replaceElemIdStr);parent.appendChild(document.createElement("div")).setAttribute("id",replaceElemIdStr);}
swfobject.embedSWF(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj,callbackFn);};
function setSWFDimensions(objID,width,height){if(objID&&width&&height){var fObj=document.getElementById(objID);var fEmb=document.getElementById(objID+'-embed');if(fObj&&fObj.style){fObj.style.width=width+'px';fObj.style.height=height+'px';}
if(fEmb!=null){fEmb.width=width;fEmb.height=height;if(fEmb.style){fEmb.style.width=width+'px';fEmb.style.height=height+'px';}}}};
adobe.dom.createStyleSheet=function(htmlheadelement,href){if(htmlheadelement===undefined||htmlheadelement.nodeType!=1){throw(new TypeError("argument is not an element"));}
if(htmlheadelement.nodeName!="HEAD"){throw(new TypeError("element argument must be a <head> tag"));}
if(href===undefined){throw(new TypeError("argument is undefined"));}
var sheet=null;if(document.createStyleSheet){document.createStyleSheet(href);sheet=document.styleSheets[document.styleSheets.length-1];}else if(document.createElement){sheet=document.createElement("link");sheet.setAttribute("rel","stylesheet");sheet.setAttribute("href",href);htmlheadelement.appendChild(sheet);}
return sheet;};adobe.dom.getStyleSheetsByProperty=function(prop){var sheets=[];for(var i=0,l=window.document.styleSheets.length;i<l;i++){if(window.document.styleSheets[i].hasOwnProperty(prop)){sheets.push(window.document.styleSheets[i]);}}
return sheets;};adobe.dom.disableStyleSheet=function(sheet){if(sheet===undefined||sheet===null){return sheet;}
sheet.disabled=true;return sheet;};adobe.dom.enableStyleSheet=function(sheet){if(sheet===undefined||sheet===null){return sheet;}
sheet.disabled=false;if(sheet.removeAttribute){sheet.removeAttribute("disabled");}
return sheet;};adobe.dom.CSSStyleSheet=function(href){this.setHref(href);this.disabled=false;this.element=null;};adobe.dom.CSSStyleSheet.prototype={setHref:function(href){this.href=href.toString();},enable:function(htmlheadelement){if(this.element==null){this.element=adobe.dom.createStyleSheet(htmlheadelement,this.href);}else{adobe.dom.enableStyleSheet(this.element);}
this.disabled=false;},disable:function(){adobe.dom.disableStyleSheet(this.element);this.disabled=true;},toString:function(){return"[Object adobe.dom.StyleSheet]"}};
adobe.dom.FaaS=function(target)
{$.ajaxSetup({async:false});this.target=target;this.targetID='#'+this.target;this.targetObj=$('#'+this.target);this.countryChange=false;this.industryChange=false;this.q_Obj=new Object();this.wsFaaSServerUrl=new Object();this.wsformTemplateTag=new Object();this.wsFaaSSourceSystem=new Object();this.wsSourceSystemQuestionId=new Object();this.wsFormTypeQuestionId=new Object();this.wsFormSubtypeQuestionId=new Object();this.wsProductInterestSKUQuestionId=new Object();this.wsInternalCampaignIdQuestionId=new Object();this.wsQuestionTypeHidden=new Object();this.wsQuestionTypeHiddenList=new Object();this.selectedFormTemplate=new Object();this.wsParameters=new Object();this.formDetailData=new Object();this.templateOptions=new Array();this.formSubtypeString=new Object();return this;};adobe.dom.FaaS.prototype={faasCountryChange:function()
{window.countryChange=$.proxy(this.countryChange,this);$(this.targetID+' div.14 select').each(function()
{if($(this).length>0&&typeof _faas_country_onChange_state=='function')
{$(this).selectBox().unbind('change');$(this).selectBox().change(function()
{_faas_country_onChange_state();if(typeof _faas_country_onChange_state_required=='function'){_faas_country_onChange_state_required();}
if(typeof _faas_country_onChange_zipcode_required=='function'){_faas_country_onChange_zipcode_required();}
if(typeof _faas_country_onChange_southKoreaPermission1=='function'){_faas_country_onChange_southKoreaPermission1();}
if(typeof _faas_country_onChange_southKoreaPermission2=='function'){_faas_country_onChange_southKoreaPermission2();}
if(typeof _faas_country_onChange_southKoreaPermission3=='function'){_faas_country_onChange_southKoreaPermission3();}
if(typeof _faas_country_onChange_southKoreaPermission4=='function'){_faas_country_onChange_southKoreaPermission4();}
if(typeof _faas_country_onChange_southKoreaPermission1_required=='function'){_faas_country_onChange_southKoreaPermission1_required();}
if(typeof _faas_country_onChange_southKoreaPermission2_required=='function'){_faas_country_onChange_southKoreaPermission2_required();}
if(typeof _faas_country_onChange_southKoreaPermission4_required=='function'){_faas_country_onChange_southKoreaPermission4_required();}
if(typeof _faas_country_onChange_salutation=='function'){_faas_country_onChange_salutation();}
if(typeof _faas_country_onChange_disclaimer=='function'){_faas_country_onChange_disclaimer();}
window.countryChange=true;});}});},countryChangeCallback:function()
{if(window.countryChange)
{window.faasSelectBox=$.proxy(this.faasSelectBox,this);window.targetID=this.targetID;$(window.targetID+' div.15 select').selectBox('destroy');window.faasSelectBox(window.targetID+' div.15 select',true);}},faasIndustryChange:function()
{window.industryChange=$.proxy(this.industryChange,this);$(this.targetID+' div.18 select').each(function()
{if($(this).length>0&&typeof _faas_industry_onChange_numUnits=='function')
{$(this).selectBox().unbind('change');$(this).selectBox().change(function()
{_faas_industry_onChange_numUnits();window.industryChange=true;});}});},industryChangeCallback:function()
{if(window.industryChange)
{window.faasSelectBox=$.proxy(this.faasSelectBox,this);window.targetID=this.targetID;$(window.targetID+' div.23 select').selectBox('destroy');window.faasSelectBox(window.targetID+' div.23 select',false,true);}},faasSelectBox:function(target,country,industry)
{var tar=(target!=null)?target:this.targetID+' div.row select';window.faasCountryChange=$.proxy(this.faasCountryChange,this);window.faasIndustryChange=$.proxy(this.faasIndustryChange,this);$(tar).each(function()
{var selectWidth=$(this).parent().width();$(this).addClass('selectBox-Blue').css('width',selectWidth);adobe.ui.selectBox($(this));if(country)
{window.faasCountryChange();_faas_country_onChange_state_required();}
if(industry)
{window.faasIndustryChange();}});},formReflow:function()
{var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{$(this.targetID+' LayoutSlimGrid-1 input, '+this.targetID+' LayoutSlimGrid-1-2 input').each(function()
{$(this).css('maxWidth','349px');});}
else
{$(this.targetID+' LayoutSlimGrid-1 input, '+this.targetID+' LayoutSlimGrid-1-2 input').each(function()
{$(this).css('maxWidth','');});}}},formStyle:function()
{$(this.targetID).css('width','100%');$(this.targetID+' div.row').each(function()
{$(this).addClass('LayoutRow LayoutBreakAfter');});$(this.targetID+' p.note').each(function()
{$(this).addClass('LayoutRow LayoutBreakAfter LayoutCellSides');});$(this.targetID+' div.dropdownlist label, '+this.targetID+' div.textfield label, '+this.targetID+' div.textarea label').each(function()
{$(this).wrap('<div class="LayoutGrid-1 LayoutSlimGrid-1-2"><div class="LayoutCellLeft LayoutSmallRow"></div></div>');});$(this.targetID+' div.dropdownlist input[type=text], '+this.targetID+' div.dropdownlist select, '+this.targetID+' div.dropdownlist textarea, '+this.targetID+' div.textfield input[type=text], '+this.targetID+' div.textfield select, '+this.targetID+' div.textfield textarea, '+this.targetID+' div.textarea textarea').each(function()
{$(this).wrap('<div class="LayoutGrid-2-3 LayoutSlimGrid-1-2" />');});$(this.targetID+' div.checkbox label, '+this.targetID+' div.checkboxlist label').each(function()
{$(this).wrap('<div class="LayoutGrid-2-3 LayoutSlimGrid-2"><div class="LayoutCellRight LayoutSmallRow"></div></div>');});$(this.targetID+' div.row input[type=text], '+this.targetID+' div.row textarea').each(function()
{$(this).addClass('FormInputFull LayoutSmallRow');});$(this.targetID+' div.row input[type=checkbox]').each(function()
{$(this).addClass('LayoutGutter').wrap('<div class="LayoutGrid-1 LayoutSlimGrid-1"><div class="LayoutBreakAfter"><div class="LayoutRight LayoutSmallRow"></div></div></div>');});$(this.targetID+' div.legal h1').each(function()
{$(this).addClass('LayoutCellSides');});$(this.targetID+' div.row input[type=submit]').each(function()
{$(this).addClass('Button ButtonYellow').wrap('<div class="LayoutGrid-1-3 LayoutSlimGrid-1-2 LayoutH"><div class="LayoutHItemRight"></div></div>');});$(this.targetID+' div.errorSummary').wrap('<div class="LayoutHidden LayoutZero" />');$(this.targetID+' .errorMessage, '+this.targetID+' span.required').each(function()
{$(this).addClass('FormError');});$(this.targetID+' .errorMessage').each(function()
{$(this).addClass('LayoutSmallRow TextSmall LayoutCellSides').parent().addClass('LayoutGrid-4 LayoutSlimGrid-1-2');});this.faasSelectBox();this.faasCountryChange();this.faasIndustryChange();this.formReflow();$(this.targetID+' .legalnotice').each(function()
{$(this).addClass('LayoutRow LayoutCellSides').wrap('<div class="LayoutGrid-1-4 LayoutSlimGrid-1-2" />');});$(this.targetID+' .clear-both').each(function()
{$(this).remove();});window.formReflow=$.proxy(this.formReflow,this);$(document).bind("adobe.reflow.LayoutChange",function()
{window.formReflow();});},formQuestions:function(question,value)
{var tempObj=new Object();tempObj[question]=value;this.q_Obj=$.extend(this.q_Obj,tempObj);},formInit:function(id,l,d)
{l=(l!=null)?l:"en_us";d=(d!=null)?d:"http://www.adobe.com";var faasScript=this.wsFaaSServerUrl+"faas/service/jquery.faas-3.0.0.js",hostProtocol=(document.location.protocol=='https:'?'https':'http'),pi=faasScript.indexOf('://');if(pi>=0)
{faasScript=hostProtocol+faasScript.substring(pi);}
else
{faasScript=hostProtocol+'://'+faasScript;}
obj=this.targetObj;var pi=d.indexOf('http');if(pi<0)
{d=document.location.protocol+'//'+window.location.host+d;if(!$.string(d).endsWith('.html')||!$.string(d).endsWith('.htm'))
{d+='.html';}}
window.formStyle=$.proxy(this.formStyle,this);window.countryChangeCallback=$.proxy(this.countryChangeCallback,this);window.industryChangeCallback=$.proxy(this.industryChangeCallback,this);window.getFormSubtypeName=$.proxy(this.getFormSubtypeName,this);window.formQuestions=this.q_Obj;adobe.http.getScript(faasScript).done(function()
{obj.faas({id:id,l:l,d:d,ar:true,test:false,q:{},pc:{1:'js',2:'faas_submission',3:'sfdc',4:'demandbase'},p:{js:window.formQuestions,faas_submission:{},sfdc:{},demandbase:{}},as:false,o:{},e:{formRenderedCallback:function(data,ajax)
{window.formStyle();},afterSubmitCallback:function(data)
{if(data.data.destination.indexOf("?")==-1)
{data.data.destination+="?form_subtype="+window.getFormSubtypeName();}
else
{data.data.destination+="&form_subtype="+window.getFormSubtypeName();}},afterEventFinishedCallback:function()
{window.countryChangeCallback();window.industryChangeCallback();}}});});},setFaaSServerUrl:function(url)
{var newUrl;if(!$.string(url).endsWith('/')){var str1=url;newUrl=str1.concat("/");}else{newUrl=url;}
this.wsFaaSServerUrl=newUrl;},setFormTemplateTag:function(tag)
{this.wsformTemplateTag=tag;},setFormTypeQuestionId:function(qId)
{this.wsFormTypeQuestionId=qId;},setFormSubtypeQuestionId:function(qId)
{this.wsFormSubtypeQuestionId=qId;},setSourceSystemQuestionId:function(qId)
{this.wsSourceSystemQuestionId=qId;},setProductInterestSKUQuestionId:function(qId)
{this.wsProductInterestSKUQuestionId=qId;},setInternalCampaignIdQuestionId:function(qId)
{this.wsInternalCampaignIdQuestionId=qId;},setQuestionTypeHidden:function(q)
{this.wsQuestionTypeHidden=q;},setQuestionTypeHiddenList:function(q)
{this.wsQuestionTypeHiddenList=q;},setSelectedFormTemplate:function(t)
{this.selectedFormTemplate=t;},setWSParameters:function(p)
{this.wsParameters=p;},setFormDetailData:function(d)
{this.formDetailData=d;},setSourceSystem:function(s)
{this.wsFaaSSourceSystem=s;},setFormSubtypeString:function(s){this.formSubtypeString=s;},preloadFormTemplates:function()
{var wsUrl=this.wsFaaSServerUrl+'faas/api/form/?'+this.wsParameters,hostProtocol=(document.location.protocol=='https:'?'https':'http'),pi=wsUrl.indexOf('://');if(pi>=0)
{wsUrl=hostProtocol+wsUrl.substring(pi);}
else
{wsUrl=hostProtocol+'://'+wsUrl;}
window.templateOpt=this.templateOptions;$.getJSON(wsUrl,{tags:this.wsformTemplateTag,active:1},function(data)
{for(var i=0;i<data.length;i++)
{window.templateOpt.push({"value":data[i].id,"text":data[i].name});}}).complete(function()
{});},populateFormData:function(src)
{window.selectedFormTemplate=this.selectedFormTemplate;if(window.selectedFormTemplate>0)
{window.populateFormType=$.proxy(this.populateFormType,this);window.populateFormSubtype=$.proxy(this.populateFormSubtype,this);window.populateProductInterestSKU=$.proxy(this.populateProductInterestSKU,this);window.populateInternalCampaignId=$.proxy(this.populateInternalCampaignId,this);window.populateFormType(src);window.populateFormSubtype(src);window.populateProductInterestSKU(src);window.populateInternalCampaignId(src);}},retrieveFormData:function(formId,src)
{if(formId<=0||formId=='SELECT')
{return;}
window.populateFormData=$.proxy(this.populateFormData,this);window.setSelectedFormTemplate=$.proxy(this.setSelectedFormTemplate,this);window.setFormDetailData=$.proxy(this.setFormDetailData,this);window.setSelectedFormTemplate(formId);var wsformUrl=this.wsFaaSServerUrl,wsUrl=wsformUrl+'faas/api/form/'+formId+'?'+this.wsParameters,hostProtocol=(document.location.protocol=='https:'?'https':'http'),pi=wsUrl.indexOf('://');if(pi>=0)
{wsUrl=hostProtocol+wsUrl.substring(pi);}
else
{wsUrl=hostProtocol+'://'+wsUrl;}
$.getJSON(wsUrl,{tags:this.wsformTemplateTag,active:1},function(data)
{window.setFormDetailData(data);if(src)
{window.populateFormData(src);}}).complete(function()
{}).success(function()
{});},getFormSubtypeId:function(){if(!this.formSubtypeString)
return;var i=(this.formSubtypeString).indexOf('/');if(i>0){return(this.formSubtypeString).substring(0,i);}},getFormSubtypeName:function(){if(!this.formSubtypeString)
return;var i=(this.formSubtypeString).indexOf('/');if(i>0){return(this.formSubtypeString).substring(i+1);}},populateFormType:function(field)
{var options=new Array();var showFormType=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsFormTypeQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHiddenList)
{var questionCollection=curQuestion.collection;for(var j=0;j<questionCollection.collectionValues.length;j++)
{showFormType=true;options.push({"value":questionCollection.collectionValues[j].id,"text":questionCollection.collectionValues[j].displayText.phrase});}}}
var panel=field.findParentByType('tabpanel'),formType=panel.find('name','./formType')[0];if(showFormType)
{formType.setValue();formType.show();formType.setOptions(options);formType.doLayout();}
else
{options.push({"value":"NA","text":"NA"});formType.setOptions(options);formType.setValue(["NA"]);}},populateFormSubtype:function(field)
{var options=new Array(),showFormSubtype=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsFormSubtypeQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHiddenList)
{var questionCollection=curQuestion.collection;for(var j=0;j<questionCollection.collectionValues.length;j++)
{showFormSubtype=true;options.push({"value":questionCollection.collectionValues[j].id+'/'+questionCollection.collectionValues[j].displayText.phrase,"text":questionCollection.collectionValues[j].displayText.phrase});}}}
var panel=field.findParentByType('tabpanel'),formSubtype=panel.find('name','./formSubtype')[0];if(showFormSubtype)
{formSubtype.setValue();formSubtype.show();formSubtype.setOptions(options);formSubtype.doLayout();}
else
{options.push({"value":"NA","text":"NA"});formSubtype.setOptions(options);formSubtype.setValue(["NA"]);}},populateProductInterestSKU:function(field)
{var options=new Array(),showProductInterestSKU=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsProductInterestSKUQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHiddenList)
{var questionCollection=curQuestion.collection;for(var j=0;j<questionCollection.collectionValues.length;j++)
{showProductInterestSKU=true;options.push({"value":questionCollection.collectionValues[j].id,"text":questionCollection.collectionValues[j].displayText.phrase});}}}
var panel=field.findParentByType('tabpanel'),productInterestSKU=panel.find('name','./sku')[0];if(showProductInterestSKU)
{productInterestSKU.setValue();productInterestSKU.show();productInterestSKU.setOptions(options);productInterestSKU.doLayout();}
else
{options.push({"value":"NA","text":"NA"});productInterestSKU.setOptions(options);productInterestSKU.setValue(["NA"]);}},populateInternalCampaignId:function(field)
{var options=new Array(),showInternalCampaignId=false;for(var i=0;i<this.formDetailData.formQuestions.length;i++)
{var curQuestionId=this.formDetailData.formQuestions[i].question.id,curQuestion=this.formDetailData.formQuestions[i].question;if(curQuestionId==this.wsInternalCampaignIdQuestionId&&curQuestion.question_type_id==this.wsQuestionTypeHidden)
{showInternalCampaignId=true;}}
var panel=field.findParentByType('tabpanel'),internalCampaignId=panel.find('name','./intCampaignId')[0];if(showInternalCampaignId)
{internalCampaignId.setValue();internalCampaignId.show();}
else
{internalCampaignId.setValue("999999999999999999");}},getTemplateOptions:function()
{return this.templateOptions;},execute:function()
{}};
adobe.dom.param=function(param)
{var query=window.location.search,sep="&",hash='';if(query.indexOf(param)!=-1)
{$('a').each(function()
{var link=$(this).attr('href');if(link!=undefined)
{if(link.indexOf("?")==-1)
{sep="?";}
if(link.indexOf("#")!=-1)
{hash=link.split("#");link=hash[0];hash="#"+hash[1];}
$(this).attr('href',link+sep+param+hash);}});}};
adobe.fn.ApexPageFilter=function(e)
{var menuBarID="#"+e,menuBar=$(menuBarID),menuControlID="MenuControl",menuControl=$('#'+menuControlID);if(menuControl[0]==null)
{$('<div/>',{id:menuControlID}).appendTo('body');menuControl=$('#'+menuControlID);}
var menuDropWidth=$(menuBarID+' .MenuDrop').width();var menuPanelWidth=$(menuBarID+' .MenuDropPanel').width();var menuWidth;if(menuDropWidth>menuPanelWidth)
{menuWidth=menuDropWidth+1+"px";}
else
{menuWidth=menuPanelWidth+1+"px";}
$(menuBarID+' .MenuDrop').css('width','230px');$(menuBarID+' .MenuDropPanel').css('width','230px');var menuCheckHover=function(target)
{if(menuControl.hasClass('MenuClose'))
{target.find("div[class*='MenuDrop']").removeClass("MenuDropHover").unbind('mouseenter mouseleave');target.find("div[class='MenuDrop']").addClass("MenuDropOpen");}
else
{target.find("div[class*='MenuDrop']").removeClass("MenuDropOpen");target.find("div[class='MenuDrop']").hover(function()
{$(this).addClass("MenuDropHover");},function()
{$(this).removeClass("MenuDropHover");});}};menuCheckHover(menuBar);menuBar.find("div[class*='MenuDropName']").bind('click',function()
{var menuPanel=menuBar.find("div[class*='MenuDropPanel']");if(menuControl.hasClass('MenuClose'))
{$('.MenuDropPanel').fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');}
if(menuPanel.hasClass('MenuShow'))
{menuPanel.fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuCheckHover(menuBar);}
else
{menuPanel.show(000).addClass('MenuShow');menuControl.addClass('MenuClose');menuCheckHover(menuBar);menuControl.unbind('click');menuControl.bind('click',function()
{$(menuBarID+' .MenuDropPanel').fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuCheckHover(menuBar);});$('body').unbind('keyup');$('body').bind('keyup',function(event)
{if(event.keyCode=='27')
{event.preventDefault();$(menuBarID+' .MenuDropPanel').fadeOut('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuCheckHover(menuBar);}});}
return false;});var menuDropItem=new Array();$(menuBarID+' .MenuDropItem').each(function(i)
{$(this).attr('id',e+'MenuDropItem'+[i]);menuDropItem[i]='#'+$(this).attr('id');if($(menuBarID+' .MenuDropItemSelected').size()==0)
{$(menuDropItem[0]).addClass('MenuDropItemSelected');}
$(menuDropItem[i]).bind('click',function()
{$(menuBarID+' .MenuDropItem').removeClass('MenuDropItemSelected');$(this).addClass('MenuDropItemSelected');});});};
adobe.fn.buildTreeList=function(selectorStr){if(selectorStr.length<1){return;}
var myElement=$(selectorStr);if(myElement.length<1){return;}
myElement.treeList();};
adobe.fn.changeRegionFooter=function(regioncode){if($.string(regioncode).startsWith('be_')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','be',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('ca')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','ca',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('eeur')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','eu',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('hk_')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','cn',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('lu_')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','lu',{domain:'adobe.com',hoursToLive:8760});}
else if($.string(regioncode).startsWith('uk')){$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion','gb',{domain:'adobe.com',hoursToLive:8760});}
else{$.cookies.set('international',regioncode,{domain:'adobe.com',hoursToLive:8760});$.cookies.set('storeregion',regioncode,{domain:'adobe.com',hoursToLive:8760});}
var currURL=window.location.pathname+window.location.search;var geoArray=["africa","ap","at","au","be_en","be_fr","be_nl","bg","br","ca","ca_fr","ch_de","ch_fr","ch_it","cn","cz","de","dk","eeurope","ee","es","fi","fr","hk_en","hk_zh","hr","hu","ie","il_en","il_he","in","it","jp","kr","la","lt","lu_de","lu_en","lu_fr","lv","mena_ar","mena_en","mena_fr","mx","nl","no","nz","pl","pt","ro","ru","si","se","sea","sk","tr","tw","ua","uk"];$.each(geoArray,function(){if($.string(currURL).startsWith('/'+this+'/')){currURL=currURL.replace('/'+this+'/','/');return false;}});if(($.string(currURL).startsWith('/cfusion'))&&(regioncode=='us')){newURL="/";homeURL="/";}
else if(($.string(currURL).startsWith('/cfusion'))&&(regioncode!='us')){newURL="/"+regioncode+"/";homeURL="/"+regioncode+"/";}
else if(regioncode!='us'){newURL="/"+regioncode+currURL;homeURL="/"+regioncode+"/";}
else{newURL=currURL;homeURL="/";}
$.ajax({url:newURL,type:'HEAD',error:function(){window.location=homeURL;},success:function(){window.location=newURL;}});};
adobe.fn.colorBox=function(target)
{target=$(target);var cdnPrefix=adobe.http.cdnprefix();if($(window).width()>640)
{$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.colorbox.js',function(data,textStatus)
{if(textStatus=="success")
{target.colorbox();}});}
else
{target.click(function()
{return true;});}};
adobe.fn.cookies=function(target,method,cookie,cookieValue,domain,path,expire,secure)
{cookieValue=cookieValue||'';var status=null,traditionalCookie=null,targetDiv=$('#'+target),body=$('body'),special=target+'SpecialCookie',specialObj=$('#'+special),debug=false;if(specialObj.length==0)
{$('<div id="'+special+'" class="LayoutHidden LayoutZero">').appendTo(body);specialObj=$('#'+special);if(debug){console.log("'special' object not found, creating it: "+special+": "+specialObj);}}
if(method==null||method==''||cookie==null||cookie=='')
{if(debug){console.log("'method' or 'cookie' was empty. "+method+" "+cookie);}
return;}
switch(method)
{case'get':if(debug){console.log("method = get");}
adobeGetCookie();break;case'set':if(debug){console.log("method = set");}
adobeSetCookie();break;case'delete':if(debug){console.log("method = delete");}
adobeDelCookie();break;}
function setExpire()
{if(debug){console.log("running setExpire()");}
var today=new Date(),year=today.getFullYear()+30,month=today.getMonth(),date=today.getDate();return new Date(year,month,date);}
function showButtons(status)
{if(status===true||status==null||traditionalCookie==null)
{targetDiv.find('.CookieValid').hide();targetDiv.find('.CookieInvalid').show();targetDiv.find('.CookieOptIn').hide();targetDiv.find('.CookieOptOut').show();targetDiv.find('.CookieValue').html('');}
else
{targetDiv.find('.CookieValid').show();targetDiv.find('.CookieInvalid').hide();targetDiv.find('.CookieOptIn').show();targetDiv.find('.CookieOptOut').hide();targetDiv.find('.CookieValue').html(status);}}
function cookieType(thisCookie)
{var type,imageRegex=/([^\s]+(?=\.(jpg|jpeg|gif|png))\.\2)/gm;if(thisCookie.match(imageRegex)!=null)
{type="image";}
else if(thisCookie.match("^http")!=null)
{type="address";}
else
{type="cookie";}
if(debug){console.log("cookieType found type = "+type);}
return type;}
function adobeGetCookie(cookieItem)
{cookieItem=(cookieItem!=null)?[cookieItem]:cookie;if(debug){console.log("adobeGetCookie running with item(s) = "+cookieItem);}
$.each(cookieItem,function(index,value)
{if(debug){console.log("each cookie value = "+value);}
var findCookieType=cookieType(value);if(findCookieType=="cookie")
{status=$.cookies.get(value);traditionalCookie=1;showButtons(status);}});if(traditionalCookie==null)
{if(debug){console.log("No traditional cookies found, hiding buttons");}
showButtons(status);}
if(debug){console.log("running showButtons(status). status = "+status);}}
function adobeTestCookie(cookieItem)
{if($.cookies.test())
{if(debug){console.log("$.cookies.test() passed "+$.cookies.test());}
var cookieOptions={domain:(domain!=null&&domain!='')?domain:document.domain,path:(path!=null&&path!='')?path:'/',expiresAt:(expire!=null&&expire!='')?new Date(expire):setExpire(),secure:(secure&&secure!='')?true:false};if(debug){console.log("setting the cookie: "+cookieItem);}
$.cookies.set(cookieItem,cookieValue,cookieOptions);adobeGetCookie(cookieItem);}
else
{var noCookies=$('#'+target+'NoCookies');status="There was a problem testing cookies. Either you've disabled this ability, or your browser doesn't seem to support cookies. Please enable cookies and refresh your browser, or update your browser.";if(noCookies.length==0)
{$('<div id="'+noCookies+'" class="LayoutRow LayoutHItem TextWarning">').appendTo(targetDiv).html(status);}}}
function adobeSetCookie()
{if(debug){console.log("cookie(s) being SET = "+cookie);}
$.each(cookie,function(index,value)
{if(debug){console.log("cookie value = "+value);}
var findCookieType=cookieType(value);if(findCookieType!='cookie')
{if(findCookieType=="image")
{if(debug){console.log("Found an 'image' = "+value);}
window.open(value,'_blank');}
else if(findCookieType=="address")
{if(debug){console.log("Found an 'address', using $.get() to grab it = "+value);}
window.open(value,'_blank');}
if(traditionalCookie==null)
{$('#'+target+'-CookiesSet').show();}}
else
{if(debug){console.log("Found a traditional 'cookie', running adobeTestCookie");}
adobeTestCookie(value);}});}
function adobeDelCookie()
{var cookieOptions={domain:(domain!=null&&domain!='')?domain:document.domain,path:(path!=null&&path!='')?path:'/'};$.each(cookie,function(index,value)
{if(debug){console.log("cookie value = "+value);}
var findCookieType=cookieType(value);if(findCookieType=="image")
{specialObj.empty();if(debug){console.log(value+" looked like an 'image' type. Removing it from the DOM. Checking 'specialObj's html: "+specialObj.html());}}
else if(findCookieType=="address")
{if(debug){console.log("Cookie is a URL. Not much we can do here except hope this URL is an actual API to delete the cookie.");}}
else
{$.cookies.del(value,cookieOptions);if(debug){console.log("cookie being DELETED = "+value);}
adobeGetCookie(value);}});}};
var hash=location.hash;var deepLinkMap=new Object();if(hash!=null&&hash!=''){$(document).ready(function(){var deepLink=deepLinkMap[hash];if(deepLink!=undefined&&deepLink!=''){$('#'+deepLinkMap[hash]+' a[name='+deepLinkMap[hash]+']').click();}});};
adobe.fn.embedMediaPlayer=(function($){var defaults={defaultType:"flash"};function getDefaults(){if(typeof defaults.autoPlay=="undefined"){defaults.autoPlay=swfobject.getQueryParamValue('autoPlay')||"";}
if(typeof defaults.allowFullScreen=="undefined"){defaults.allowFullScreen=swfobject.getQueryParamValue('allowFullScreen')||"";}
return defaults;}
function getDeepLink(id){var hash=location.hash;var chapterIdDeepLink='';var out={};if(hash!=null&&hash!=''){var hashArray=hash.split("_split_");if(hashArray!=null&&hashArray.length>=2){if(hashArray[0]=='#'+id){chapterIdDeepLink=hashArray[hashArray.length-1];out.chapterID=chapterIdDeepLink;}}}
return out;}
var supportsTouch=Boolean("ontouchstart"in window),expressInstall="/include/flash/expressInstall.swf",flashVersion="10.1";return(function(id,options){if(!id){return;}
options=$.extend({},getDefaults(),options);if(!supportsTouch&&options.defaultType=="flash"){if(options.flash){swfobject.embedSWF(options.flash,id,options.width,options.height,flashVersion,expressInstall,$.extend(options.flashVars,getDeepLink(id)),options.flashParams,options.flashAttrs);}}else{$("#"+id).find(".FlashAltCanvas").remove();var bach_opts={width:"100%"};if(options.height){bach_opts.height=String(options.height);}
if('msgSrcError'in options){bach_opts.msgSrcError=String(options.msgSrcError);}
if('msgUIError'in options){bach_opts.msgUIError=String(options.msgUIError);}
$(options.playlistThis).removeClass("LayoutHidden").bach_player(bach_opts);}});})(jQuery);
adobe.fn.embedVideo=function(srcs,id,attrs){function setAttr(video,user_attrs,config_attr){if(user_attrs[config_attr.attr]===undefined){return;}
var user_attr_value=user_attrs[config_attr.attr];if(user_attr_value===undefined){return;}
if(config_attr.setEvent===undefined){video.setAttribute(String(config_attr.attr),user_attr_value);return;}
if(user_attr_value==config_attr.value||config_attr.value=="*"){if(config_attr.value=="*"){config_attr.setValue=user_attr_value;}else{video.setAttribute(String(config_attr.attr),config_attr.value);}
var set_func=function(event){var video=event.target;if(config_attr.setValue!==undefined){this[config_attr.setAttr]=config_attr.setValue;}
if(typeof config_attr.setFunction=="function"){config_attr.setFunction(video);}
jQuery(video).unbind(config_attr.setEvent,set_func);};jQuery(video).bind(config_attr.setEvent,set_func);}}
function replaceNode(replacement,current){replacement.style.visibility="visible";return current.parentNode.replaceChild(replacement,current);}
function replaceNodeHandler(event){jQuery(this).unbind("error adobe.event.media.nosource",replaceNodeHandler);replaceNode(event.data.replacement,this);}
function attachSources(video,srcs){var srcEl;for(var i=0;i<srcs.length;i++){var src=srcs[i];if(src.src!==undefined){srcEl=window.document.createElement("source");srcEl.setAttribute("src",String(src.src));if(src.type!==undefined){srcEl.setAttribute("type",String(src.type));}
video.appendChild(srcEl);}}
if(srcEl){jQuery(srcEl).bind("error",{video:video},function(event){jQuery(event.data.video).triggerHandler("adobe.event.media.nosource");});}}
if(!srcs||srcs.length<1||!id){return null;}
var altElement=window.document.getElementById(String(id));if(altElement==null||altElement.parentNode==null){return null;}
var video=window.document.createElement('video'),canPlay=Boolean(video.canPlayType);if(!canPlay){return null;}
var allowed_attrs=[{attr:"id"},{attr:"audio",value:"muted",setEvent:"loadstart",setAttr:"muted",setValue:true},{attr:"autoplay",value:"autoplay",setEvent:"canplay",setFunction:function(video){video.play();}},{attr:"controls"},{attr:"height"},{attr:"loop"},{attr:"poster"},{attr:"preload"},{attr:"src"},{attr:"volume",value:"*",setEvent:"loadstart",setAttr:"volume"},{attr:"width"}];attrs=attrs||{};for(var i=0;i<allowed_attrs.length;i++){setAttr(video,attrs,allowed_attrs[i]);}
jQuery(video).bind("error adobe.event.media.nosource",{current:video,replacement:altElement},replaceNodeHandler);attachSources(video,srcs);altElement=replaceNode(video,altElement);return video;};
adobe.fn.evidon=function(trigger)
{var evidonID=$('#'+trigger),d=document,pixel,page_id,URL_SCHEME=(d.location.protocol=='https:'?'https':'http'),CDN_URL=(URL_SCHEME=='https'?'https://info.evidon.com/c/betrad/pub/':'http://cdn.betrad.com/pub/');if((evidonID!=null)&&(hideEvidon!=true)&&isDesktop())
{evidonID.show();if((URLParser.host=="www.adobe.com")||(URLParser.host=="adobe.com")||(URLParser.host=="get.adobe.com"||(URLParser.host=="get2.adobe.com")||(URLParser.host=="get3.adobe.com"))||(URLParser.host=="kb2.adobe.com")||(URLParser.host=="community.adobe.com")||(URLParser.host=="helpx.adobe.com")||(URLParser.host=="store1.adobe.com")||(URLParser.host=="store2.adobe.com")||(URLParser.host=="store3.adobe.com"))
{if(URLParser.locale=="de")
{page_id="322";}
else if(URLParser.locale=="fr")
{page_id="324";}
else if(URLParser.locale=="uk")
{page_id="323";}
else if(URLParser.locale=="se")
{page_id="1013";}
else if(URLParser.locale=="at")
{page_id="1012";}
else if(URLParser.locale=="ch_de")
{page_id="1010";}
else if(URLParser.locale=="ch_fr")
{page_id="1009";}
else if(URLParser.locale=="ch_it")
{page_id="1011";}
else
{page_id="86";}}
else
{if(URLParser.locale=="de")
{page_id="327";}
else if(URLParser.locale=="fr")
{page_id="326";}
else if(URLParser.locale=="uk")
{page_id="328";}
else if(URLParser.locale=="se")
{page_id="1024";}
else if(URLParser.locale=="at")
{page_id="1021";}
else if(URLParser.locale=="ch_de")
{page_id="1020";}
else if(URLParser.locale=="ch_fr")
{page_id="1022";}
else if(URLParser.locale=="ch_it")
{page_id="1023";}
else
{page_id="126";}}
evidonID.bind('click',function(e)
{e.preventDefault();var link=this;function appendScript(url,callback)
{var head=d.getElementsByTagName('head')[0]||d.documentElement,loaded=false,script=d.createElement('script');function onload(){script.onload=script.onreadystatechange=null;head.removeChild(script);callback();}
script.src=url;script.onreadystatechange=function(){if(!loaded&&(this.readyState=='loaded'||this.readyState=='complete')){loaded=true;onload();}};script.onload=onload;head.insertBefore(script,head.firstChild);}
appendScript(URL_SCHEME+'://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js',function(){appendScript(CDN_URL+'pub1.js',function(){BAPW.i(link,{pid:page_id,ocid:414},false);});});});pixel=d.createElement('img');pixel.src=URL_SCHEME+'://l.betrad.com/pub/p.gif?pid='+page_id+'&ocid='+'414'+'&ii=1&r='+Math.random();pixel.height='1';pixel.width='1';pixel.className='SiteFooterEvidonPixel';d.body.appendChild(pixel);}};
adobe.fn.focusHashElement=function(){var hashId=window.location.hash;if(hashId.length<=1){return;}
var node=document.getElementById(hashId);if(node==null){return;}
if(node.nodeType!=1){return;}
var hasIndex=node.getAttribute("tabindex")!=null;var hasRef=node.getAttribute("href")!=null;if(!hasRef&&!hasIndex){if(node.hasAttribute("tabindex")){node.setAttribute("tabindex","0");}else{var target=$(node).find("a");if(target.length<1){target=$(node).find("area");if(target.length<1){target=$(node).find("*[tabindex]");}}
if(target.length>0){node=target.first();}else{node.setAttribute("tabindex","0");}}}
$(node).focus();};
adobe.fn.formcentralIframeResize=function(target,height,width)
{var iframeObj=$('#'+target);var buffer=20;var maxIframeWidth="709px";function pageY(elem){return elem.offsetParent?(elem.offsetTop+pageY(elem.offsetParent)):elem.offsetTop;}
if(height==""||height=="undefined"){height=document.documentElement.clientHeight;height-=pageY(document.getElementById(target))+buffer;height=(height<0)?0:height;height=height+50+'px';}else{height=height+'px';}
if(width==""||width=="undefined"){width='100%';}else{width=width+'px';}
iframeObj.css('width',width).css('maxWidth',maxIframeWidth);iframeObj.css('height',height);};
adobe.fn.handleCartButton=function(event){if(!cart){return;}
var distMethod=event.data.distmethod;var storeType=event.data.storetype;var categoryPath=event.data.categorypath;var productName=event.data.productname;var promoID=event.data.promoid;event.preventDefault();cart.setCategoryPath(categoryPath);cart.setProductName(productName);cart.setDistributionMethod(distMethod);cart.setStoreType(storeType);cart.setEmailTrackingId(promoID);cart.openCartOverlay();};
adobe.fn.handleHashChangeForTreeList=function(){var hashId=window.location.hash;var myTree;if(hashId.length>1){myTree=$(window.document.getElementById(hashId)).closest(".ui-treeList");}else{myTree=$(".ui-treeList").first();}
if(myTree.length==0){return;}
var myNode=$(hashId).closest(".ui-treeList-item");if(myNode.length==0){myNode=myTree.find(".ui-treeList-item");}
myTree.treeList('openNode',myNode);};
adobe.fn.handleModalButton=function(event){if(event.data===undefined){return;}
if(jQuery(window).width()>(parseInt(event.data.width)||0)){var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{window.location=event.data.href;}
else
{event.preventDefault();adobe.fn.openModal(event.data);}}
else
{event.preventDefault();adobe.fn.openModal(event.data);}}};
$.getURLParameter=function(name){return decodeURIComponent((location.search.match(RegExp("[?&]"+name+"=([^&]*)"))||[,""])[1]);}
adobe.fn.initGeorouting=function(){if(($('#Georouting').length)&&!($.cookies.get('georouting_presented'))&&($(window).width()>750)){if((URLParser.siteLevel=="solutions")||(URLParser.siteLevel=="products")||($.string(URLParser.siteLevel).startsWith('solutions.html'))||($.string(URLParser.siteLevel).startsWith('index.html'))||($.string(URLParser.siteLevel).startsWith('?'))||(URLParser.siteLevel=="")){adobe.fn.georoutingModalSearch();}}}
adobe.fn.georoutingModalSearch=function(){var referrerURL=$(document)[0].referrer;if(referrerURL!=""){var referrerDomain=referrerURL.split('/')[2];if($.string(referrerDomain).endsWith('adobe.com')){adobe.fn.georoutingModalIP();}
else{if($.string(referrerDomain).startsWith('www.')){referrerDomain=referrerDomain.replace(/www\./,'');}
var pageName=referrerDomain.replace(/\./g,'_');var fileName="/etc/pagetables/georouting_search/"+pageName+".modal.html";$.ajax({url:fileName,type:'HEAD',success:function(){$.cookies.set('georouting_presented','true',{domain:'adobe.com',hoursToLive:720});(function($){adobe.fn.openModal({width:"auto",height:"auto",target:"georouting_modal-ui",href:fileName,title:""});})(jQuery);},error:function(){adobe.fn.georoutingModalIP();}});}}
else{adobe.fn.georoutingModalIP();}}
adobe.fn.georoutingModalIP=function(){var testCountry=$.getURLParameter("testCountry");if(testCountry!=""){tntGeocountry=testCountry;}
if(typeof tntGeocountry!=='undefined'){if(tntGeocountry!=""){var newGeocountry=tntGeocountry.replace(/[^A-Za-z]+/g,'');var fileName="/etc/pagetables/georouting_ip/us_"+newGeocountry+".modal.html";$.ajax({url:fileName,type:'HEAD',success:function(){$.cookies.set('georouting_presented','true',{domain:'adobe.com',hoursToLive:720});(function($){adobe.fn.openModal({width:"auto",height:"auto",target:"georouting_modal-ui",href:fileName,title:""});})(jQuery);}});}}};
adobe.fn.initGlobalFooter=function(){var countryCode=$.cookies.get('international');if(countryCode){$('#sfRegionSet').show();$('#sfRegion').hide();}
else{$('#sfRegionSet').hide();$('#sfRegion').show();}
if(isDesktop()){$('#RegionPanel').bind("clickoutside focusout",function(){$('#RegionPanel').hide();});$('#sfRegion, #sfRegionChange, #sfRegionClose').bind("click",function(){$('#RegionPanel').toggle();if($('#SiteHeader')!=null){$('#WelcomePanel').hide();$('#WelcomePanelShadow').hide();}
return false;});}};
var supportsTouch='ontouchstart'in window||navigator.msMaxTouchPoints;var ua=navigator.userAgent,myEvent=(ua.match(/iPad/i))?"touchstart":"click";function equalizeHeights(divsToSize){tallestDivHeight=0;divsToSize.each(function(){divHeight=$(this).height();if(divHeight>tallestDivHeight){tallestDivHeight=divHeight;}});divsToSize.height(tallestDivHeight);}
adobe.fn.initGlobalNav=function(){if(!$('#SiteHeader').length||$('.ApexSiteHeaderBar').length>0){return;}
var screenName=$('#screenName');IMS_SCOPE="AdobeID,openid,sao.creative_cloud";IMS_AUTH_ENDPOINT=null;IMS_LOGOUT_ENDPOINT=null;IMS_AUTH_CHECK_ENDPOINT=null;IMS_CLIENT_ID=null;if(screenName){WCDServerPresent=$.cookies.get('WCDServer'),RengaRMTPresent=$.cookies.get('RengaRMT'),RmPresent=$.cookies.get('rm'),hostIMSValue=$.cookies.get("gnavHostIMS"),hostIDPValue=$.cookies.get("gnavHostIDP"),clientIDValue=$.cookies.get("gnavClientID");if((hostIMSValue)&&(hostIDPValue)&&(clientIDValue)){IMS_AUTH_ENDPOINT="https://"+hostIMSValue+"/authorize";IMS_LOGOUT_ENDPOINT="https://"+hostIDPValue+"/ims/logout/v1/token";IMS_AUTH_CHECK_ENDPOINT="https://"+hostIDPValue+"/ims/check/v1/token";IMS_CLIENT_ID=clientIDValue;}
if((WCDServerPresent)||(RengaRMTPresent)||(RmPresent)){if((IMS_AUTH_CHECK_ENDPOINT)&&(IMS_CLIENT_ID)){adobe.fn.gnavGetUserName();}
else{adobe.fn.gnavGetIMSInfo();}}
else{adobe.fn.gnavGetSecureCookies();$(document).trigger("profile_loaded");}}
$('#search-input').autofill();$('#globalnav-search').bind('submit',function(){var searchText=$('#search-input').val();if(searchText==""||searchText==null){$('#search-input').blur();return false;}});var signInHREF=$('#shSignIn').attr('href');if($.string(signInHREF).include('?')){signInHREF=signInHREF+"&returnURL="+encodeURIComponent(window.location.href);}else{signInHREF=signInHREF+"?returnURL="+encodeURIComponent(window.location.href);}
$('#shSignIn').attr('href',signInHREF);$('#shSignOut, #shSignOutMobile').bind('click',function(event){event.preventDefault();if((IMS_LOGOUT_ENDPOINT)&&(IMS_CLIENT_ID)&&(IMS_SCOPE)){$.ajax({url:IMS_LOGOUT_ENDPOINT,data:{client_id:IMS_CLIENT_ID,scope:IMS_SCOPE},dataType:'jsonp',timeout:2000}).done(function(){s_adobe=s_gi(window.s_adobe_account);s_adobe.linkTrackVars="prop17";s_adobe.prop17="cc_NotSignedIn";s_adobe.tl(this,'o','adobe.com:GlobalNav:SignOut');if(typeof CQ_Analytics!='undefined'){if(typeof CQ_Analytics.ClientContext!='undefined'){CQ_Analytics.ClientContext.clear();}}
$('#shWelcome').hide();$('#shSignInBlock').show();$('#shSignOutMobile').hide();$('#shSignInMobile').show();setTimeout('$(document).trigger("user_signedout")',1000);}).fail(function(){adobe.fn.cfSignOut();});}
else{adobe.fn.cfSignOut();}});if(isDesktop()){var onDiv=false;var onLink=false;var bubbleExists=false;var timeoutID;function addBubbleMouseover(){$("#MyCartLinkContainer").hover(function(event){if(onDiv||onLink){return false;}
onLink=true;showBubble.call(this,event);},function(event){onLink=false;timeoutID=setTimeout(hideBubble,1000);});}
function hideBubble(){clearTimeout(timeoutID);if(bubbleExists&&!onDiv){$("#CartPanelShadow").fadeOut();bubbleExists=false;$("#MyCartLinkContainer").removeClass("MouseOverHoverCart");enableBodyClick();}}
function showBubble(event){if(bubbleExists){hideBubble();}
var cart=Adobe.Cart.Models.Cart;var itemCount=cart.getInstance().itemCount;if(itemCount>0){if(!cart.modelInSync()){cart.getCart({});}
var ipWidth=485;var ipCartLinkWidth=$('.SiteHeaderCart').width();var cartlinkpos=$('.SiteHeaderCart').position().left;var cartposdiff=ipWidth-ipCartLinkWidth;var cartpos=cartlinkpos-cartposdiff+50;$('#CartPanelShadow').css('left',cartpos+'px').show();if($('#SiteFooter')!=null){$('#RegionPanel').hide();}
enableCartPanel();}
$('#CartPanel').hover(function keepBubbleOpen(){onDiv=true;},function letBubbleClose(event){onDiv=false;hideBubble();});bubbleExists=true;$("#MyCartLinkContainer").addClass("MouseOverHoverCart");}
function keepBubbleOpen(){onDiv=true;}
function letBubbleClose(event){onDiv=false;hideBubble();}
function enableBodyClick(){$('body').click(function(){$('#CartPanelShadow').hide();});}
function enableCartPanel(){$('#CartPanel').click(function(event){event.stopPropagation();});}
addBubbleMouseover();if($('#SiteHeader').is(':visible')){equalizeHeights($("div.SiteHeaderShadowLeft"));}}
if(supportsTouch){$("div.SiteHeaderDropdownLink a.SiteHeaderBarLink").live(myEvent,function(){if($("#"+this.id).parent().hasClass("SiteHeaderBarItemOpen")){$("div.SiteHeaderDropdownLink").removeClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");$("div.SiteHeaderDropdownLink div.SiteHeaderDropPanel").addClass("SiteHeaderDropPanelHidden");window.location=$("#"+this.id).attr("href");return false;}
else{$("div.SiteHeaderDropdownLink").removeClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");$("div.SiteHeaderDropdownLink div.SiteHeaderDropPanel").addClass("SiteHeaderDropPanelHidden");$("#"+this.id).parent().find("div.SiteHeaderDropPanel").removeClass("SiteHeaderDropPanelHidden");$("#"+this.id).parent().addClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");return false;}});$("#SiteHeader").bind(myEvent+"outside",function(el){$("div.SiteHeaderDropdownLink").removeClass("SiteHeaderBarItemOpen SiteHeaderBarItemHover");$("div.SiteHeaderDropdownLink div.SiteHeaderDropPanel").addClass("SiteHeaderDropPanelHidden");});}
var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher){dispatcher.addLayoutEvent(new adobe.reflow.LayoutEvent("sitenavMobile",0,940));dispatcher.updateLayout($(window).width());if(dispatcher.hasLayoutEvent("sitenavMobile")&&dispatcher.getLayoutEvent("sitenavMobile").active){$(document).bind("resize",function(){if($(window).width()>940){equalizeHeights($("div.SiteHeaderShadowLeft"));$(document).unbind("resize");}});setupSiteHeaderMobile();}else{var isSetForMobile=false;$(document).bind("adobe.reflow.LayoutChange",function(event,layoutEvent){if(layoutEvent.name=="sitenavMobile"&&layoutEvent.active&&!isSetForMobile){isSetForMobile=true;setupSiteHeaderMobile();$(document).unbind("adobe.reflow.LayoutChange",setupSiteHeaderMobile);}
else{if(isSetForMobile){$('#shProductsMobileSpan, #shProductsMobile').unbind("click");$('#shSectionsSolutionsMobile').unbind("click");$('#shSectionsCompanyMobile').unbind("click");$('#shSectionsHelpMobile').unbind("click");$('#shSectionsLearningMobile').unbind("click");$('#shSectionsMobile, #shSectionsMobileSpan').unbind("click");$('#shSearchMobile, #shSearchMobileSpan').unbind("click");$('#shSectionsMobileSpan').unbind("clickoutside");$('#shSearchMobileSpan').unbind("clickoutside");}
isSetForMobile=false;}});}}else{setupSiteHeaderMobile();}
function setupSiteHeaderMobile(){$('#search-input-mobile').autofill();$('#shProductsMobileSpan, #shProductsMobile').bind("click",function(){window.location=$('a#shProductsMobile').attr("href");return false;});$('#shSectionsSolutionsMobile').bind("click",function(){window.location=$('a#shSectionsSolutionsMobile').attr("href");return false;});$('#shSectionsCompanyMobile').bind("click",function(){window.location=$('a#shSectionsCompanyMobile').attr("href");return false;});$('#shSectionsHelpMobile').bind("click",function(){window.location=$('a#shSectionsHelpMobile').attr("href");return false;});$('#shSectionsLearningMobile').bind("click",function(){window.location=$('a#shSectionsLearningMobile').attr("href");return false;});$('#shSectionsMobile, #shSectionsMobileSpan').bind("click",function(){if($('#shBarExtendSections').is(':visible')){$('#shBarExtendSections').hide();$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');}else{$('#shBarExtendSections').show();$('#shBarExtendSearch').hide();$('#shBarExtend').addClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSectionsMobileSpan').addClass('SiteHeaderBarItemMobileActive');$('#shSearchMobileSpan').removeClass('SiteHeaderBarItemMobileActive');}
return false;});$('#shSearchMobile, #shSearchMobileSpan').bind("click",function(){if($('#shBarExtendSearch').is(':visible')){$('#shBarExtendSearch').hide();$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSearchMobileSpan').removeClass('SiteHeaderBarItemMobileActive');}else{$('#shBarExtendSearch').show();$('#shBarExtendSections').hide();$('#shBarExtend').addClass('SiteHeaderBarMobileExtendBottomBorder');$('#shSearchMobileSpan').addClass('SiteHeaderBarItemMobileActive');$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#search-input-mobile').autofill();}
return false;});$('#shSectionsMobileSpan').bind("clickoutside",function(el){if($('#shBarExtendSearch').css("display")=='none'){if((el.target.id!="shBarExtendSections")&&(el.target.id!="shBarExtendSections1")&&(el.target.id!="shBarExtendSections2")&&(el.target.id!="shBarExtend")){$('#shSectionsMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shBarExtendSections').hide();}}});$('#shSearchMobileSpan').bind("clickoutside",function(el){if($('#shBarExtendSections').css("display")=='none'){if((el.target.id!="search-input-mobile")&&(el.target.id!="shBarExtendSearch")&&(el.target.id!="shBarExtend")){$('#shSearchMobileSpan').removeClass('SiteHeaderBarItemMobileActive');$('#shBarExtend').removeClass('SiteHeaderBarMobileExtendBottomBorder');$('#shBarExtendSearch').hide();}}});$('#globalnav-search-mobile').bind('submit',function(){var searchText=$('#search-input-mobile').val();if(searchText==""||searchText==null){$('#search-input-mobile').blur();return false;}});}};adobe.fn.gnavGetSecureCookies=function(){$.ajax({url:'https://verify.adobe.com/ssocheck/',dataType:'jsonp',jsonp:false,jsonpCallback:"parseSSOData"}).done(function(response){if("hasSSOCookie"in response){hasSSOCookieValue=response.hasSSOCookie;if(hasSSOCookieValue==true){if((IMS_AUTH_CHECK_ENDPOINT)&&(IMS_CLIENT_ID)){adobe.fn.gnavGetUserName();}
else{adobe.fn.gnavGetIMSInfo();}}}});}
adobe.fn.gnavGetIMSInfo=function(){var adobe_host=window.location.hostname,confURL="https://www.adobe.com/svcs/configurations/clients/adobedotcomIMS/client_aliases/adobedotcom?landscape="+adobe_host;if(($.string(adobe_host).include('stage'))||($.string(adobe_host).include('dev'))||($.string(adobe_host).include('qa'))){var confURL="/svcs/configurations/clients/adobedotcomIMS/client_aliases/adobedotcom?landscape="+adobe_host;}
$.ajax({url:confURL,dataType:'jsonp'}).done(function(response){if(response.configurations.clients[0].client_aliases.properties){var properties={},result={},propertiesRoot=response.configurations.clients[0].client_aliases.properties;for(var i=0;i<propertiesRoot.length;i++){properties[propertiesRoot[i].key]=propertiesRoot[i].value;}
result.attributes=properties;if((result.attributes.imsHost)&&(result.attributes.idpHost)&&(result.attributes.actualClient)){$.cookies.set('gnavHostIMS',result.attributes.imsHost,{domain:'adobe.com',hoursToLive:0});$.cookies.set('gnavHostIDP',result.attributes.idpHost,{domain:'adobe.com',hoursToLive:0});$.cookies.set('gnavClientID',result.attributes.actualClient,{domain:'adobe.com',hoursToLive:0});IMS_AUTH_ENDPOINT="https://"+result.attributes.imsHost+"/authorize";IMS_LOGOUT_ENDPOINT="https://"+result.attributes.idpHost+"/ims/logout/v1/token";IMS_AUTH_CHECK_ENDPOINT="https://"+result.attributes.idpHost+"/ims/check/v1/token";IMS_CLIENT_ID=result.attributes.actualClient;adobe.fn.gnavGetUserName();}}});}
adobe.fn.gnavGetUserName=function(){$.ajax({url:IMS_AUTH_CHECK_ENDPOINT,data:{client_id:IMS_CLIENT_ID,scope:IMS_SCOPE},dataType:'jsonp'}).done(function(response){if("displayName"in response){IMS_USER_PROFILE=response;$(document).trigger("profile_loaded");if(typeof CQ_Analytics!='undefined'){var yodaStore=CQ_Analytics.ClientContext.get("yoda");if(yodaStore){var serviceData={};if("serviceAccounts"in response){if(typeof response.serviceAccounts[0]!="undefined"){var servicesResponse=response.serviceAccounts[0];if("serviceCode"in servicesResponse){yodaStore.setProperty("serviceCode",servicesResponse.serviceCode);}
if("serviceStatus"in servicesResponse){yodaStore.setProperty("serviceStatus",servicesResponse.serviceStatus);}
if("serviceLevel"in servicesResponse){yodaStore.setProperty("serviceLevel",servicesResponse.serviceLevel);}}
else{yodaStore.setProperty("serviceCode","creative_cloud");yodaStore.setProperty("serviceStatus","NOTACTIVE");yodaStore.setProperty("serviceLevel","NONE");}}
else{yodaStore.setProperty("serviceCode","creative_cloud");yodaStore.setProperty("serviceStatus","NOTACTIVE");yodaStore.setProperty("serviceLevel","NONE");}}}
gnavUserDisplayName=response.displayName;$('#screenName').text(gnavUserDisplayName);$('#screenName').trigger("screenNameChange");$('#shWelcome').show();$('#shSignInBlock').hide();$('#shSignOutMobile').show();$('#shSignInMobile').hide();}
else{$('#shWelcome').hide();$('#shSignInBlock').show();$('#shSignOutMobile').hide();$('#shSignInMobile').show();}});}
adobe.fn.cfSignOut=function(){s_adobe=s_gi(window.s_adobe_account);s_adobe.linkTrackVars="prop17";s_adobe.prop17="cc_NotSignedIn";s_adobe.tl(this,'o','adobe.com:GlobalNav:SignOut');var signOutHREF=$('#shSignOutLink').attr('href');if($.string(signOutHREF).startsWith('http')){setTimeout('window.location = "http://www.adobe.com/cfusion/membership/logout.cfm?returnURL=" + encodeURIComponent(window.location.href)',1000);}
else{setTimeout('window.location = "/cfusion/membership/logout.cfm?returnURL=" + encodeURIComponent(window.location.href)',1000);}}
adobe.fn.initGlobalNavAccessibility=function()
{var timeoutInt,focusTimeoutInt,hoverTimeoutInt,tooltipTimeout,flagMouseOver=false,flagEscKey=false,siteHeaderBar,siteHeaderBarDivs,siteHeaderBarItems,siteHeaderDropdownLinks,siteHeaderDropPanels,siteHeaderRows,siteHeaderPanelLinks,siteHeaderLinks,tooltipStringExpandMenu,tooltipStringOpenLink,searchDiv,searchInput,searchInputMobile,shInfo,infoPanel,infoPanelShadow,shSignOutLink,shWelcome,welcomePanel,welcomePanelShadow,welcomeTimeoutId,mirror,keyCodeMap={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},init=function()
{mirror=hasClass(document.body,"Mirror");siteHeader=document.getElementById("SiteHeader");siteHeaderBar=document.getElementById("shBar");siteHeaderBarDivs=siteHeaderBar.getElementsByTagName("DIV");siteHeaderBarItems=getElementsByClassName(siteHeaderBar,"SiteHeaderBarItem");siteHeaderDropdownLinks=getElementsByClassName(siteHeaderBar,"SiteHeaderDropdownLink");siteHeaderDropPanels=getElementsByClassName(siteHeaderBar,"SiteHeaderDropPanel");siteHeaderRows=getElementsByClassName(siteHeaderBar,"SiteHeaderRow");searchDiv=document.getElementById("site-search");searchInput=document.getElementById("search-input");searchDivMobile=document.getElementById("shBarExtendSearch");searchInputMobile=document.getElementById("search-input-mobile");siteHeaderLinks=siteHeaderBar.getElementsByTagName("A");shInfo=document.getElementById("shInfo");infoPanel=document.getElementById("InfoPanel");infoPanelShadow=document.getElementById("InfoPanelShadow");shSignOutLink=document.getElementById("shSignOutLink");shWelcome=document.getElementById("shWelcome");welcomePanel=document.getElementById("WelcomePanel");welcomePanelShadow=document.getElementById("WelcomePanelShadow");if(welcomePanel)welcomePanelLinks=welcomePanel.getElementsByTagName("A");tooltipStringExpandMenu=document.getElementById("tooltipStringExpandMenu");if(tooltipStringExpandMenu)tooltipStringExpandMenu=tooltipStringExpandMenu.innerHTML;tooltipStringOpenLink=document.getElementById("tooltipStringOpenLink");if(tooltipStringOpenLink)tooltipStringOpenLink=tooltipStringOpenLink.innerHTML;var obj,i;if(navigator.platform.indexOf("Win")!=-1)addClass(siteHeaderBar,"os-windows");siteHeader.setAttribute('role','navigation');for(i=0;i<siteHeaderBarDivs.length;i++)
{obj=siteHeaderBarDivs[i];obj.setAttribute('role','presentation');}
for(i=0;i<siteHeaderBarItems.length;i++)
{obj=siteHeaderBarItems[i];obj['data-index']=i;}
for(i=0;i<siteHeaderDropdownLinks.length;i++)
{obj=siteHeaderDropdownLinks[i];obj['data-index']=i;}
for(i=0;i<siteHeaderDropPanels.length;i++)
{obj=siteHeaderDropPanels[i];obj.setAttribute('aria-hidden','true');addClass(obj,'SiteHeaderDropPanelHidden');obj['data-index']=i;addEvent(obj,'mouseover',mouseOverHandler);addEvent(obj,'mouseout',mouseOutHandler);setLinkTabIndexes(obj,"-1");}
for(i=0;i<siteHeaderLinks.length;i++)
{obj=siteHeaderLinks[i];obj['data-index']=i;if(obj.tabIndex===null)
{obj.tabIndex=(hasClass(obj.parentNode,'SiteHeaderPanelHeader')||hasClass(obj.parentNode,'SiteHeaderPanelRow')||hasClass(obj.parentNode,'SiteHeaderPanelLink'))?'-1':'0';obj.setAttribute('tabindex',obj.tabIndex);}
if(hasClass(obj.parentNode,'SiteHeaderDropdownLink'))
{obj.setAttribute('aria-haspopup','true');obj.setAttribute('aria-expanded','false');obj.setAttribute('aria-owns',siteHeaderDropPanels[obj.parentNode['data-index']].id);obj.setAttribute('aria-controls',siteHeaderDropPanels[obj.parentNode['data-index']].id);}
addEvent(obj,'focus',focusHandler);addEvent(obj,'blur',blurHandler);addEvent(obj,'mouseover',mouseOverHandler);addEvent(obj,'mouseout',mouseOutHandler);addEvent(obj,'keydown',keyDownHandler);addEvent(obj,'click',clickHandler);}
if(shInfo&&infoPanel)
{shInfo.setAttribute('href','#InfoPanel');shInfo.setAttribute('aria-describedby','InfoPanel');infoPanel.setAttribute('role','tooltip');infoPanel.style.display="none";infoPanel.setAttribute('aria-hidden','true');infoPanel.tabIndex='-1';if(infoPanelShadow)infoPanelShadow.style.display="none";addEvent(shInfo,"mouseover",shInfo_mouseOverHandler);addEvent(shInfo,"mouseout",shInfo_mouseOutHandler);addEvent(shInfo,"focus",shInfo_focusHandler);addEvent(shInfo,"blur",shInfo_blurHandler);addEvent(shInfo,"click",shInfo_clickHandler);}
if(shWelcome&&welcomePanel)
{shWelcome.setAttribute('aria-haspopup','true');shWelcome.setAttribute('aria-owns','WelcomePanel');welcomePanel.setAttribute('role','menu');welcomePanel.style.display="none";welcomePanelShadow.style.display="none";addEvent(shWelcome,'focus',shWelcome_focusHandler);addEvent(shWelcome,'blur',shWelcome_blurHandler);addEvent(shWelcome,'mouseover',shWelcome_mouseOverHandler);addEvent(shWelcome,'mouseout',shWelcome_mouseOutHandler);addEvent(shWelcome,'keydown',shWelcome_keyDownHandler);addEvent(shWelcome,'click',shWelcome_clickHandler);addEvent(shWelcome,'contextmenu',shWelcome_contextMenuHandler);addEvent(welcomePanel,'mouseover',shWelcome_mouseOverHandler);addEvent(welcomePanel,'mouseout',shWelcome_mouseOutHandler);addEvent(shSignOutLink,'click',shWelcome_hidePanel);for(i=0;i<welcomePanelLinks.length;i++)
{obj=welcomePanelLinks[i];obj.setAttribute('role','menuitem');obj['data-index']=i;obj.tabIndex='-1';addEvent(obj,'focus',shWelcome_focusHandler);addEvent(obj,'blur',shWelcome_blurHandler);addEvent(obj,'mouseover',shWelcome_mouseOverHandler);addEvent(obj,'mouseout',shWelcome_mouseOutHandler);addEvent(obj,'keydown',shWelcome_keyDownHandler);addEvent(obj,'contextmenu',shWelcome_contextMenuHandler);}}
if(searchDiv&&searchInput)
{searchDiv.setAttribute('role','search');searchInput.setAttribute('aria-label','Search');}
if(searchDivMobile&&searchInputMobile)
{searchDivMobile.setAttribute('role','search');searchInputMobile.setAttribute('aria-label','Search');}},shWelcome_contextMenuHandler=function(event)
{event.preventDefault();event.stopPropagation();return false;},shWelcome_mouseOverHandler=function(event)
{clearTimeout(welcomeTimeoutId);clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shWelcome_showPanel();},shWelcome_mouseOutHandler=function(event)
{clearTimeout(welcomeTimeoutId);if(document.activeElement!=shWelcome)
{var welcomePanelLink,i;for(i=0;i<welcomePanelLinks.length;i++)
{if(document.activeElement==welcomePanelLinks[i])
return true;}
welcomeTimeoutId=setTimeout(shWelcome_hidePanel,450);}},shWelcome_focusHandler=function(event)
{clearTimeout(welcomeTimeoutId);clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shWelcome_showPanel();},shWelcome_blurHandler=function(event)
{clearTimeout(welcomeTimeoutId);if(document.activeElement!=shWelcome)
{var welcomePanelLink,i;for(i=0;i<welcomePanelLinks.length;i++)
{if(document.activeElement==welcomePanelLinks[i])
return true;}
welcomeTimeoutId=setTimeout(shWelcome_hidePanel,450);}},shWelcome_keyDownHandler=function(event)
{var node,links,start,j,a,label,candidate,found=false,beforeLink=true;switch(event.keyCode)
{case 38:{event.preventDefault();if(this==shWelcome)
{shWelcome_hidePanel();}else{node=nextTabbableElement(this,true,true);if(node){node.focus();if(node==shWelcome)
{shWelcome_hidePanel();}}}
break;}
case 40:{event.preventDefault();shWelcome_showPanel();node=nextTabbableElement(this,false,true);if(node)
{if(node.parentNode.parentNode!=welcomePanel)
{welcomePanelLinks[0].focus();}else
{node.focus();}}
break;}
case 32:{event.preventDefault();event.stopPropagation();if(event.ctrlKey)
{shWelcome_showPanel();if(this==shWelcome)
{welcomePanelLinks[0].focus();}
return false;}else{shWelcome_hidePanel();window.open(this.href,(this.target||"_self"));return false;}
break;}
case 121:{if(event.ctrlKey)
{event.preventDefault();shWelcome_showPanel();if(this==shWelcome)
welcomePanelLinks[0].focus();return false;}
break;}
default:{links=welcomePanelLinks;var start=0;for(j=0;j<links.length;j++){a=links[j];if(a==this){start=j;break;}}
for(j=start+1;j<links.length;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();found=true;break;}}
if(!found){for(j=0;j<start;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();break;}}}
break;}}},shWelcome_clickHandler=function(event)
{event.preventDefault();event.stopPropagation();clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shWelcome_showPanel();welcomePanelLinks[0].focus();return false;},shWelcome_hidePanel=function()
{clearTimeout(welcomeTimeoutId);welcomePanel.style.display='none';welcomePanel.setAttribute('aria-hidden','true');welcomePanelShadow.style.display='none';removeEvent(document,'keydown',shWelcome_escapeKeyHandler);},shWelcome_showPanel=function()
{clearTimeout(welcomeTimeoutId);welcomePanel.style.display='block';welcomePanel.setAttribute('aria-hidden','false');welcomePanelShadow.style.width=(welcomePanel.clientWidth)+'px';welcomePanelShadow.style.height=(welcomePanel.clientHeight)+'px';welcomePanelShadow.style.display='block';addEvent(document,'keydown',shWelcome_escapeKeyHandler);},shWelcome_escapeKeyHandler=function(event){if(event.keyCode==27)
{if(document.activeElement!=shWelcome)
{var welcomePanelLink,i;for(i=0;i<welcomePanelLinks.length;i++)
{if(document.activeElement==welcomePanelLinks[i])
{shWelcome.focus();break;}}}
shWelcome_hidePanel();}},shInfo_mouseOverHandler=function(event)
{clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shInfo_showPanel();},shInfo_mouseOutHandler=function(event)
{shInfo_hidePanel();},shInfo_focusHandler=function(event)
{clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shInfo_showPanel();},shInfo_blurHandler=function(event)
{shInfo_hidePanel();},shInfo_clickHandler=function(event)
{clearToolTip();hideAndShowSubmenus(this||event.target,'closeall');shInfo_showPanel();event.preventDefault();return false;},shInfo_hidePanel=function()
{infoPanel.style.display='none';infoPanel.setAttribute('aria-hidden','true');infoPanelShadow.style.display='none';removeEvent(document,'keydown',shInfo_escapeKeyHandler);},shInfo_showPanel=function()
{infoPanel.style.display='block';infoPanel.setAttribute('aria-hidden','false');infoPanelShadow.style.height=(infoPanel.clientHeight)+'px';infoPanelShadow.style.display='block';addEvent(document,'keydown',shInfo_escapeKeyHandler);},shInfo_escapeKeyHandler=function(event){if(event.keyCode==27)
shInfo_hidePanel();},hideAndShowSubmenus=function(eventTarget,eventType)
{var siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(eventTarget),current,currentDropPanel,i,ariaHidden;if(eventType=='mouseover'&&hasClass(eventTarget,'SiteHeaderBarLink')&&hasClass(siteHeaderBar,'SiteHeaderBarFocus'))
{flagMouseOver=true;flagEscKey=false;addClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');siteHeaderDropdownLink.getElementsByTagName('A')[0].setAttribute('aria-expanded','true');eventTarget.focus();eventTarget.removeAttribute("title");return;}else if(eventType=='mouseout')
{flagMouseOver=false;}
for(i=0;i<siteHeaderDropdownLinks.length;i++)
{current=siteHeaderDropdownLinks[i];currentDropPanel=siteHeaderDropPanels[i];if(current!=siteHeaderDropdownLink||eventType=='blur')
{removeClass(current,'SiteHeaderBarItemHover');if(current.getElementsByTagName('A')[0]!=document.activeElement)
{removeClass(current,'SiteHeaderBarItemFocus');}
currentDropPanel.setAttribute('aria-hidden','true');current.getElementsByTagName('A')[0].setAttribute('aria-expanded','false');if(eventType=='focus'||eventType=='closeall')
{addClass(currentDropPanel,'SiteHeaderDropPanelHidden');removeClass(current,'SiteHeaderBarItemOpen');setLinkTabIndexes(currentDropPanel,"-1");}}else if(eventType=='mouseout')
{ariaHidden=(siteHeaderDropdownLink&&document.activeElement&&siteHeaderDropdownLink==getClosestSiteHeaderDropdownLink(document.activeElement)&&!hasClass(currentDropPanel,'SiteHeaderDropPanelHidden'))?'false':'true';currentDropPanel.setAttribute('aria-hidden',ariaHidden);current.getElementsByTagName('A')[0].setAttribute('aria-expanded',!ariaHidden);if(ariaHidden=='true')
{removeClass(current,'SiteHeaderBarItemFocus');removeClass(current,'SiteHeaderBarItemHover');removeClass(current,'SiteHeaderBarItemOpen');addClass(currentDropPanel,'SiteHeaderDropPanelHidden');setLinkTabIndexes(currentDropPanel,"-1");}}else
{addClass(current,'SiteHeaderBarItemHover');addClass(current,'SiteHeaderBarItemFocus');if(!hasClass(eventTarget,'SiteHeaderBarLink'))
{addClass(current,'SiteHeaderBarItemOpen');}
if(!flagEscKey&&(eventType==='focus'&&current===siteHeaderDropdownLink&&hasClass(current,'SiteHeaderBarItemOpen'))||eventType==='mouseover')
{currentDropPanel.setAttribute('aria-hidden','false');removeClass(currentDropPanel,'SiteHeaderDropPanelHidden');addClass(current,'SiteHeaderBarItemOpen');setLinkTabIndexes(current,"0");current.getElementsByTagName('A')[0].setAttribute('aria-expanded','true');}}}
if(eventType=='focus')
{addClass(siteHeaderBar,'SiteHeaderBarFocus');if(hasClass(eventTarget,'SiteHeaderBarLink'))
{if(hasClass(eventTarget,'SiteHeaderBarItem'))
{addClass(eventTarget,'SiteHeaderBarItemFocus');}}
flagKeyboardNavigation(true);flagEscKey=false;}else if(eventType=='blur')
{removeClass(siteHeaderBar,'SiteHeaderBarFocus');if(hasClass(eventTarget,'SiteHeaderBarItem')&&hasClass(eventTarget,'SiteHeaderBarLink'))
{removeClass(eventTarget,'SiteHeaderBarItemFocus');}}},focusHandler=function(event)
{clearTimeout(focusTimeoutInt);clearToolTip();var scope=this,siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(this),eventType=event.type||'focus';if(siteHeaderDropdownLink===scope.parentNode&&siteHeaderDropdownLink===siteHeaderDropdownLinks[0])
{if(!hasClass(siteHeaderDropdownLink,"SiteHeaderBarItemOpen")&&tooltipStringExpandMenu)
{scope.setAttribute("title",tooltipStringExpandMenu);}else if(tooltipStringOpenLink)
{scope.setAttribute("title",tooltipStringOpenLink);}else
{scope.removeAttribute("title");}}
if(this.getAttribute("title")&&!flagMouseOver)
{tooltipTimeout=setTimeout(function(){addToolTip(scope);},450);}
if(hasClass(scope.parentNode,"SiteHeaderDropdownLink"))
{if(hasClass(siteHeaderBar,"SiteHeaderBarKeyboardNavigation"))
{hideAndShowSubmenus(scope,eventType);return;}
focusTimeoutInt=setTimeout(function(){clearTimeout(focusTimeoutInt);hideAndShowSubmenus(scope,eventType);},100);return;}
if(hasClass(scope.parentNode,"SiteHeaderPanelLink"))
{addClass(scope.parentNode,"SiteHeaderPanelLinkHover");}else if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink"))
{addClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}
hideAndShowSubmenus(scope,eventType);},blurHandler=function(event)
{clearTimeout(focusTimeoutInt);var scope=this,eventType=event.type||'blur';if(hasClass(scope.parentNode,"SiteHeaderDropdownLink"))
{focusTimeoutInt=setTimeout(function(){clearTimeout(focusTimeoutInt);clearToolTip();scope.removeAttribute("title");removeClass(scope.parentNode,"SiteHeaderBarItemOpen");hideAndShowSubmenus(scope,eventType);},99);return;}
clearToolTip();if(hasClass(scope.parentNode,"SiteHeaderPanelLink"))
{removeClass(scope.parentNode,"SiteHeaderPanelLinkHover");}else if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink"))
{removeClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}
hideAndShowSubmenus(scope,eventType);},mouseOverHandler=function(event)
{clearTimeout(hoverTimeoutInt);clearToolTip();var scope=this,eventType=event.type||'mouseover';if(hasClass(scope.parentNode,"SiteHeaderDropdownLink"))
{scope.removeAttribute("title");}
hideAndShowSubmenus(scope,eventType);if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink"))
{addClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}},mouseOutHandler=function(event)
{clearTimeout(hoverTimeoutInt);clearToolTip();var scope=this,eventType=event.type||'mouseout';if(hasClass(scope.parentNode.parentNode,"SiteHeaderPanelLink")&&document.activeElement!=scope)
{removeClass(scope.parentNode.parentNode,"SiteHeaderPanelLinkHover");}
hoverTimeoutInt=setTimeout(function(){clearTimeout(hoverTimeoutInt);hideAndShowSubmenus(scope,eventType);},500);},keyDownHandler=function(event)
{var siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(this),node,nodeHeaderDropdownLink,links,i;flagEscKey=false;switch(event.keyCode)
{case 9:{flagKeyboardNavigation(true);if(hasClass(siteHeaderDropdownLink,"SiteHeaderBarItemOpen"))
{node=nextTabbableElement(this,event.shiftKey,true);if(node)
{nodeHeaderDropdownLink=getClosestSiteHeaderDropdownLink(node);if(siteHeaderDropdownLink&&nodeHeaderDropdownLink!==siteHeaderDropdownLink)
{event.preventDefault();removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");if(nodeHeaderDropdownLink)
{addClass(nodeHeaderDropdownLink,'SiteHeaderBarItemOpen');}
node.focus();return false;}}}
break;}
case 37:case 39:{event.preventDefault();if((event.keyCode==37&&!mirror)||(event.keyCode==39&&mirror))
{flagKeyboardNavigation(true);if(hasClass(this.parentNode.parentNode.parentNode,"SiteHeaderColumn-2"))
{var nextHeaderColumn=(mirror)?nextElementSibling(this.parentNode.parentNode.parentNode):previousElementSibling(this.parentNode.parentNode.parentNode);if(nextHeaderColumn)
{nextHeaderColumn.getElementsByTagName("A")[0].focus();}
return;}
var nextSiteHeaderRow=getNextSiteHeaderRow(this,true);if(nextSiteHeaderRow){nextSiteHeaderRow.getElementsByTagName("A")[0].focus();return;}
if(siteHeaderDropdownLink&&siteHeaderDropdownLink!=this.parentNode)
{node=previousElementSibling(siteHeaderDropdownLink);if(node&&hasClass(node,'SiteHeaderDropdownLink'))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
node.getElementsByTagName("A")[0].focus();}else
{siteHeaderDropdownLink.getElementsByTagName("A")[0].focus();}}
else
{node=previousElementSibling(this.parentNode===siteHeaderDropdownLink?this.parentNode:this);if(node)
{if(node.nodeName.toLowerCase()=="a")
{node.focus();}
else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();}}else
{i=siteHeaderBarItems.length;while(i>0)
{i--;node=siteHeaderBarItems[i];if(node.nodeName.toLowerCase()=='a'&&focusable(node))
{node.focus();break;}else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();break;};}}}}
else if((event.keyCode==39&&!mirror)||(event.keyCode==37&&mirror))
{flagKeyboardNavigation(true);if(hasClass(this.parentNode.parentNode.parentNode,"SiteHeaderColumn-1"))
{var nextHeaderColumn=(!mirror)?nextElementSibling(this.parentNode.parentNode.parentNode):previousElementSibling(this.parentNode.parentNode.parentNode);if(nextHeaderColumn)
{nextHeaderColumn.getElementsByTagName("A")[0].focus();}
return;}
var nextSiteHeaderRow=getNextSiteHeaderRow(this);if(nextSiteHeaderRow){nextSiteHeaderRow.getElementsByTagName("A")[0].focus();return;}
node=nextElementSibling(siteHeaderDropdownLink||this);if(node)
{if(node.nodeName.toLowerCase()=='a'&&focusable(node))
{node.focus();}
else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();}
else
{i=0;while(i<siteHeaderBarItems.length)
{node=siteHeaderBarItems[i];if(node.nodeName.toLowerCase()=='a'&&focusable(node))
{node.focus();break;}else if(hasClass(node,'SiteHeaderDropdownLink')&&focusable(firstElementChild(node)))
{if(hasClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen'))
{addClass(node,'SiteHeaderBarItemOpen')}
firstElementChild(node).focus();break;}
i++;}}}}
break;}
case 38:{event.preventDefault();clearToolTip();flagKeyboardNavigation(true);if(event.altKey&&siteHeaderDropdownLink)
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,false);return;}
node=nextTabbableElement(this,true,true);if(node)
{nodeHeaderDropdownLink=getClosestSiteHeaderDropdownLink(node);if(siteHeaderDropdownLink&&nodeHeaderDropdownLink!==siteHeaderDropdownLink)
{removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");if(nodeHeaderDropdownLink)
{addClass(nodeHeaderDropdownLink,'SiteHeaderBarItemOpen');}}
node.focus();}
break;}
case 40:{event.preventDefault();clearToolTip();flagKeyboardNavigation(true);node=nextTabbableElement(this,false,true);if(node)
{nodeHeaderDropdownLink=getClosestSiteHeaderDropdownLink(node);if(siteHeaderDropdownLink&&nodeHeaderDropdownLink!==siteHeaderDropdownLink)
{removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");if(nodeHeaderDropdownLink)
{addClass(nodeHeaderDropdownLink,'SiteHeaderBarItemOpen');}}
node.focus();}
break;}
case 27:{event.preventDefault();clearToolTip();hideAndShowSubmenus(this,'focus');flagKeyboardNavigation(false);flagEscKey=true;if(siteHeaderDropdownLink)
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,flagEscKey);}
else
{hideAndShowSubmenus(this,'closeall');}
break;}
case 32:case 13:{event.preventDefault();clearToolTip();flagKeyboardNavigation(false);if(siteHeaderDropdownLink)
{if(hasClass(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],'SiteHeaderDropPanelHidden'))
{addClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');removeClass(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],'SiteHeaderDropPanelHidden');siteHeaderDropPanels[siteHeaderDropdownLink['data-index']].setAttribute('aria-hidden','false');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"0");node=siteHeaderDropdownLink.getElementsByTagName("A")[0];node.setAttribute('aria-expanded','true');if(siteHeaderDropdownLink===siteHeaderDropdownLinks[0])
{if(tooltipStringOpenLink)
{node.setAttribute("title",tooltipStringOpenLink);tooltipTimeout=setTimeout(function(){addToolTip(node);},450);}else
{node.removeAttribute("title");}}}else
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,false);window.open(this.href,(this.target||"_self"));}}
break;}
default:{var start,j,a,label,candidate,found=false,beforeLink=true;if(!siteHeaderDropdownLink)return;links=siteHeaderDropdownLink.getElementsByTagName('A');var start=0;for(j=0;j<links.length;j++){a=links[j];if(a==this){start=j;break;}}
for(j=start+1;j<links.length;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();flagKeyboardNavigation(true);found=true;break;}}
if(!found){for(j=0;j<start;j++){a=links[j];label=a.innerText||a.textContent;if(label.substring(0,1).toLowerCase()==keyCodeMap[event.keyCode]){a.focus();flagKeyboardNavigation(true);break;}}}
break;}}},hideDropPanelAndFocusSiteHeaderDropdownLink=function(siteHeaderDropdownLink,escKey)
{var node;flagEscKey=escKey;removeClass(siteHeaderDropdownLink,'SiteHeaderBarItemOpen');addClass(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],'SiteHeaderDropPanelHidden');siteHeaderDropPanels[siteHeaderDropdownLink['data-index']].setAttribute('aria-hidden','true');setLinkTabIndexes(siteHeaderDropPanels[siteHeaderDropdownLink['data-index']],"-1");node=siteHeaderDropdownLink.getElementsByTagName("A")[0];if(siteHeaderDropdownLink===siteHeaderDropdownLinks[0])
{if(tooltipStringExpandMenu)
{node.setAttribute("title",tooltipStringExpandMenu);tooltipTimeout=setTimeout(function(){addToolTip(node);},450);}else
{node.removeAttribute("title");}}
node.setAttribute('aria-expanded','false');node.focus();flagEscKey=false;},clickHandler=function(event)
{event.stopPropagation();event.preventDefault();event=event||window.event;var scope=event.target;if(scope&&scope.parentNode&&hasClass(scope.parentNode,'SiteHeaderDropdownLink')&&hasClass(siteHeaderDropPanels[scope.parentNode['data-index']],'SiteHeaderDropPanelHidden'))
{clearToolTip();if(scope.parentNode===siteHeaderDropdownLinks[0])
{if(tooltipStringOpenLink)
{scope.setAttribute("title",tooltipStringOpenLink);tooltipTimeout=setTimeout(function(){addToolTip(scope);},450);}else
{scope.removeAttribute("title");}}
scope.setAttribute('aria-expanded','true');addClass(scope.parentNode,'SiteHeaderBarItemOpen');removeClass(siteHeaderDropPanels[scope.parentNode['data-index']],'SiteHeaderDropPanelHidden');siteHeaderDropPanels[scope.parentNode['data-index']].setAttribute('aria-hidden','false');setLinkTabIndexes(siteHeaderDropPanels[scope.parentNode['data-index']],"0");flagKeyboardNavigation(true);}else{var siteHeaderDropdownLink=getClosestSiteHeaderDropdownLink(this);if(siteHeaderDropdownLink)
{hideDropPanelAndFocusSiteHeaderDropdownLink(siteHeaderDropdownLink,false);}
if(event.target){if(hasClass(scope,'SiteHeaderIconNewWindowNoWrap')){window.open(event.target.parentNode.href,(event.target.parentNode.target||"_self"));}
else if(hasClass(scope,'SiteHeaderIconNewWindow')){window.open(event.target.parentNode.parentNode.href,(event.target.parentNode.parentNode.target||"_self"));}
else{window.open(event.target.href,(event.target.target||"_self"));}}
else{if(hasClass(event.srcElement,'SiteHeaderIconNewWindowNoWrap')){window.open(event.srcElement.parentNode.href,(event.srcElement.parentNode.target||"_self"));}
else if(hasClass(event.srcElement,'SiteHeaderIconNewWindow')){window.open(event.srcElement.parentNode.parentNode.href,(event.srcElement.parentNode.parentNode.target||"_self"));}
else{window.open(event.srcElement.href,(event.srcElement.target||"_self"));}}}},mouseMoveHandler=function(event)
{flagKeyboardNavigation(false);},flagKeyboardNavigation=function(bool)
{if(bool)
{addClass(siteHeaderBar,'SiteHeaderBarKeyboardNavigation');addEvent(siteHeaderBar,'mousemove',mouseMoveHandler);addEvent(document.body,"mousedown",bodyClickHandler);}else{removeClass(siteHeaderBar,'SiteHeaderBarKeyboardNavigation');removeEvent(siteHeaderBar,'mousemove',mouseMoveHandler);removeEvent(document.body,"mousedown",bodyClickHandler);}},bodyClickHandler=function(event)
{flagKeyboardNavigation(false);hideAndShowSubmenus(siteHeaderDropdownLinks[0],'closeall');},getClosestSiteHeaderDropdownLink=function(element)
{var siteHeaderBar=document.body,p=element.parentNode;while(p&&p!=siteHeaderBar)
{if(hasClass(p,'SiteHeaderDropdownLink'))
return p;p=p.parentNode;}
return null;},getClosestSiteHeaderRow=function(element)
{var siteHeaderBar=document.body,p=element;while(p&&p!=siteHeaderBar)
{if(hasClass(p,'SiteHeaderRow'))
return p;p=p.parentNode;}
return null;},getNextSiteHeaderRow=function(element,shiftKey)
{var closestSiteHeaderRow=getClosestSiteHeaderRow(element),i,next;if(!closestSiteHeaderRow)return null;for(i=0;i<=siteHeaderRows.length;i++)
{if(closestSiteHeaderRow===siteHeaderRows[i])
break;}
next=(shiftKey)?i-1:i+1;if(next<0||next>siteHeaderRows.length-1)return null;if(getClosestSiteHeaderDropdownLink(siteHeaderRows[next])!=getClosestSiteHeaderDropdownLink(closestSiteHeaderRow))return null;return siteHeaderRows[next];},setLinkTabIndexes=function(element,value)
{var i,ele,elements=element.getElementsByTagName("A");for(i=0;i<elements.length;i++)
{ele=elements[i];if(ele.tabIndex!==null&&ele.tabIndex!=="")
{ele.tabIndex=value;ele.setAttribute('tabindex',value);}}},hasClass=function(element,className)
{var regExp=new RegExp(new RegExp('(\\s*|^)'+className+'(\\s*|$)'));return element.className&&regExp.test(element.className);},addClass=function(element,className)
{if(!hasClass(element,className))element.className+=' '+className;},removeClass=function(element,className)
{if(hasClass(element,className))
{var regExp=new RegExp('^'+className+'(\\s*|$)|\\s*'+className);element.className=element.className.replace(regExp,'');}},getElementsByClassName=function(element,className)
{var a=[],i,ele,elements=element.getElementsByTagName('*');for(i=0;i<elements.length;i++)
{if(hasClass(elements[i],className))a.push(elements[i]);}
return a;},visible=function(element)
{while(element)
{if(element.style&&(element.style.visibility==='hidden'||element.style.display==='none'))
{return false;}
element=element.parentNode;}
return true;},focusable=function(element,isTabIndexNotNaN)
{var nodeName=element.nodeName.toLowerCase(),map,mapName,images,img,i;if('area'===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=='map'){return false;}
images=document.getElementsByTagName('IMG');for(i=0;i<images.length;i++)
{img=images[i];if(img.getAttribute('usemap')==='#'+mapName&&visible(img))
return true;}
return false;}
return(/input|select|textarea|button|object/.test(nodeName)?!element.disabled:'a'==nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);},tabbable=function(element)
{var tabIndex=element.getAttribute('tabindex')?parseInt(element.getAttribute('tabindex')):NaN,isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);},nextTabbableElement=function(element,shiftKey,includeFocusable)
{var i,allElements=document.body.getElementsByTagName('*'),afterElement=false,candidate,current;for(i=0;i<allElements.length;i++)
{current=allElements.item(i);if(current==element)
{afterElement=true;if(candidate&&shiftKey)return candidate;}
else if((includeFocusable&&focusable(current))||tabbable(current))
{candidate=current;if(afterElement)
{return candidate;}}}},addToolTip=function(element,message)
{clearTimeout(tooltipTimeout);var title=message||element.getAttribute('title');if(title)
{element.removeAttribute('title');var tooltip=document.createElement('div'),tooltipId='tooltip_'+element.getAttribute('id'),tooltipSpan=document.createElement('span'),tooltipText=document.createTextNode(title);tooltip.setAttribute('id',tooltipId);tooltip.setAttribute('role','tooltip');addClass(tooltip,'SiteHeaderBarTooltip');tooltipSpan.appendChild(tooltipText);tooltip.appendChild(tooltipSpan);addEvent(tooltip,'focus',tooltip_focusHandler);element.setAttribute('aria-describedby',tooltipId);element.parentNode.insertBefore(tooltip,element.nextSibling);}},tooltip_focusHandler=function(event)
{var node=nextTabbableElement(event.target,false,true);if(node)node.focus();},clearToolTip=function()
{clearTimeout(tooltipTimeout);var tooltips=getElementsByClassName(document,'SiteHeaderBarTooltip'),j;for(j=0;j<tooltips.length;j++)
{var tooltip=tooltips[j],tooltipId=tooltip.getAttribute('id');element=document.getElementById(tooltipId.substring(8));if(element)
{element.setAttribute('title',tooltip.firstChild.firstChild.nodeValue);element.removeAttribute('aria-describedby');}
removeEvent(tooltip,'focus',tooltip_focusHandler);tooltip.parentNode.removeChild(tooltip);}},isAllWhitespace=function(node)
{return!(/[^\t\n\r ]/.test(node.data));},isIgnorable=function(node)
{return(node.nodeType==8)||((node.nodeType==3)&&isAllWhitespace(node));},previousElementSibling=function(sibling)
{while(sibling=sibling.previousSibling)
{if(!isIgnorable(sibling))return sibling;}
return null;},nextElementSibling=function(sibling)
{while(sibling=sibling.nextSibling)
{if(!isIgnorable(sibling))return sibling;}
return null;},lastElementChild=function(parentNode)
{var node=parentNode.lastChild;while(node){if(!isIgnorable(node))return node;node=node.previousSibling;}
return null;},firstElementChild=function(parentNode)
{var node=parentNode.firstChild;while(node){if(!isIgnorable(node))return node;node=node.nextSibling;}
return null;},dataOf=function(textNode)
{var data=textNode.data;data=data.replace(/[\t\n\r ]+/g,' ');if(data.charAt(0)==' ')
data=data.substring(1,data.length);if(data.charAt(data.length-1)==' ')
data=data.substring(0,data.length-1);return data;},addEvent=function(element,type,handler)
{if(element.addEventListener)
{element.addEventListener(type,handler,false);}else
{if(!handler['data-guid'])handler['data-guid']=addEvent.guid++;if(!element['data-events'])element['data-events']={};var handlers=element['data-events'][type];if(!handlers)
{handlers=element['data-events'][type]={};if(element['on'+type])handlers[0]=element['on'+type];element['on'+type]=handleEvent;}
handlers[handler['data-guid']]=handler;}},removeEvent=function(element,type,handler)
{if(element.removeEventListener)
{element.removeEventListener(type,handler,false);}else if(element['data-events']&&element['data-events'][type]&&handler['data-guid'])
delete element['data-events'][type][handler['data-guid']];},handleEvent=function(event)
{event=event||fixEvent(window.event);var returnValue=true;var handlers=this['data-events'][event.type];for(var i in handlers)
{if(!Object.prototype[i])
{this['data-handler']=handlers[i];if(this['data-handler'](event)===false)returnValue=false;}}
if(this['data-handler'])this['data-handler']=null;return returnValue;},fixEvent=function(event)
{event.preventDefault=fixEvent.preventDefault;event.stopPropagation=fixEvent.stopPropagation;return event;};fixEvent.preventDefault=function()
{this.returnValue=false;};fixEvent.stopPropagation=function()
{this.cancelBubble=true;};addEvent.guid=1;addEvent(window,'load',init);};$(document).ready(function(){if((document.getElementById("SiteHeader"))&&(!document.getElementById("loginLinkUrl"))){adobe.fn.initGlobalNavAccessibility();}});
adobe.fn.initReflowComponent=function(dispatcher,headElement,layoutName,cssFile){var css;var dispatcher=dispatcher,head=headElement,layoutName=layoutName,cssFile=cssFile;handleLayoutEvent(null,dispatcher.getLayoutEvent(layoutName));function handleLayoutEvent(event,layoutEvent){if(layoutEvent.name==layoutName){if(!css){css=new adobe.dom.CSSStyleSheet(cssFile);}
css[layoutEvent.active?'enable':'disable'](head);}}
jQuery(document).bind("adobe.reflow.LayoutChange",handleLayoutEvent);};
adobe.fn.initRssFeed=function(id,feedURL)
{function cuttext($text,$max)
{if($text.length>$max)
{$text=$text.substr(0,$max);$text=$text+" [...]";}
return $text;}
if($('#'+id+'feedTitle').length!=0)
{$.getFeed({url:feedURL,success:function(feed)
{$('#'+id+'feedTitle').html(feed.title);$('#'+id+'feedLink .RouterHeadingLink').attr('href',feed.link);var arr=feed.items;var max=140;var textToInsert=[];var i=0;var length=5;for(var a=0;a<length;a+=1)
{var item=arr[a];var date=new Date(item.updated);date=(date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();textToInsert[i++]='<tr>';textToInsert[i++]='<th class="TableCell TableNumber">'+date+'</th>';textToInsert[i++]='<td>';textToInsert[i++]='<a target="_blank" href="'+item.link+'">'+cuttext(item.title,max)+'</a>';textToInsert[i++]='</td>';textToInsert[i++]='</tr>';}
$('#'+id+'feedItems').append(textToInsert.join(''));}});}};
adobe.fn.slider=function(e)
{var scrollPane=$("#"+e+" .ui-slider-pane"),scrollContent=$("#"+e+" .ui-slider-content"),scrollContentItems=$("#"+e+" .ui-slider-content .ui-slider-item"),scrollContentImages=$("#"+e+" .ui-slider-content .ui-slider-item img");var scrollItemsWidth=20;scrollContentItems.each(function()
{scrollItemsWidth+=$(this).innerWidth();});scrollContent.css('width',scrollItemsWidth);var scrollbar=$("#"+e+" .ui-slider-bar").slider({slide:function(event,ui)
{if(scrollContent.width()>scrollPane.width())
{scrollContent.css("margin-left",Math.round(ui.value/100*(scrollPane.width()-scrollContent.width()))+"px");}
else
{scrollContent.css("margin-left",0);}}});scrollbar.width("99%");scrollPane.css("overflow","hidden");var handleHelper=scrollbar.find(".ui-slider-handle").append("<span class='ui-icon ui-icon-grip-dotted-vertical ui-icon-small'></span>").wrap("<div class='ui-handle-helper-parent'></div>").parent();scrollContentImages.each(function()
{$(this).addClass('LayoutHAlignMiddle');});function sizeScrollbar()
{var remainder=scrollContent.width()-scrollPane.width();var proportion=remainder/scrollContent.width();var handleSize=scrollPane.width()-(proportion*scrollPane.width());scrollbar.find(".ui-slider-handle").css({width:handleSize,"margin-left":-handleSize/2});handleHelper.width("").width(scrollbar.width()-handleSize);}
function resetValue()
{var remainder=scrollPane.width()-scrollContent.width();var leftVal=scrollContent.css("margin-left")==="auto"?0:parseInt(scrollContent.css("margin-left"));var percentage=Math.round(leftVal/remainder*100);scrollbar.slider("value",percentage);}
function reflowContent()
{var showing=scrollContent.width()+parseInt(scrollContent.css("margin-left"),10);var gap=scrollPane.width()-showing;if(gap>0)
{scrollContent.css("margin-left",parseInt(scrollContent.css("margin-left"),10)+gap);}}
$(window).resize(function()
{resetValue();sizeScrollbar();reflowContent();});setTimeout(sizeScrollbar,10);};
adobe.fn.openModal=function(config)
{var $=jQuery;function handleWindowResize(event)
{var dimension=event.data.dimension;if(!dimension){return;}
var newsize=$(window)[dimension]();if(newsize==currentWindowSize[dimension])
{return;}
currentWindowSize[dimension]=newsize;var handler=event.data.handler;if(!handler){return;}
event.data.handler();}
var currentWindowSize={width:0,height:0};function createActiveLayoutHandler(element,dimensionKey,position,failSafePosition,dimensionBuffer)
{var dimensionValue=element.dialog("option",dimensionKey);var isAuto=dimensionValue=="auto";var handler=function()
{var viewSize=$(window)[dimensionKey]();if(isAuto)
{element.dialog("option",dimensionKey,dimensionValue);}
var tooBig=element.dialog("widget")[dimensionKey]()>viewSize;if(isAuto&&tooBig)
{element.dialog("option",dimensionKey,viewSize-dimensionBuffer);}
if(tooBig)
{element.dialog("option","position",failSafePosition);var v=parseInt(element.dialog("widget").css(failSafePosition));}
else
{element.dialog("option","position",position);}};if(dimensionValue=="auto")
{handler();element.resize(handler);}
return handler;}
function getValidDimension(dim,buffer)
{var out=parseInt(dim),finalDim='';if($.browser.msie&&parseFloat($.browser.version)>=7.0&&parseFloat($.browser.version)<8.0)
{finalDim="auto";}
else
{if(isNaN(out))
{finalDim="auto";}
else
{finalDim=(out+parseInt(buffer));}}
return finalDim;}
function createOpenModalHandler(config)
{var modal=$("#"+config.target),marginWidth=40,marginHeight=62;modal.dialog({modal:true,title:config.title||"",height:getValidDimension(config.height,marginHeight),width:getValidDimension(config.width,marginWidth),autoOpen:false,resizable:false,draggable:false,closeOnClick:true,open:function()
{if(config.external=="true"){embedSWF();}
if($.browser.msie&&parseFloat($.browser.version)>=8.0&&isNaN(config.height))
{modal.dialog('option','width',(modal.innerWidth()-20));modalRelocate();}
if($.browser.msie&&parseFloat($.browser.version)>=7.0&&parseFloat($.browser.version)<8.0)
{$('.ui-dialog-titlebar').css('width',(modal.innerWidth()-marginWidth));}
if($.browser.msie&&parseFloat($.browser.version)<=7.0)
{}
else
{$(window).bind("scroll",modalRelocate);}
$(window).bind("resize",{dimension:"height",handler:createActiveLayoutHandler(modal,'height','center','center',marginHeight)},handleWindowResize);$(window).bind("resize",{dimension:"width",handler:createActiveLayoutHandler(modal,'width','center','center',marginWidth)},handleWindowResize);if(modal.dialog("option","closeOnClick"))
{$(".ui-widget-overlay").bind('click',function()
{modal.dialog('close');});}},close:function()
{$(window).unbind("resize",handleWindowResize);if($.browser.msie&&parseFloat($.browser.version)<=7.0)
{}
else
{$(window).unbind("scroll",modalRelocate);}
if($.browser.msie&&parseFloat($.browser.version)>=7.0&&parseFloat($.browser.version)<8.0)
{$('.ui-dialog-titlebar').css('width','');}
if(modal.dialog("option","closeOnClick"))
{$(".ui-widget-overlay").unbind('click');}
modal.remove();}});function modalRelocate()
{modal.dialog('option','position',['center','center']);}
function modalLaunch(combinedXObjects,combinedYObjects)
{var modalX=null;var modalY=null;if(combinedXObjects!=null)
{modalX=($(window).width()-combinedXObjects)/2;modal.dialog('option','width',combinedXObjects);}
if(combinedYObjects!=null)
{modalY=($(window).height()-combinedYObjects)/2;modal.dialog('option','height',combinedYObjects);}
if(modalY!=null&&modalX!=null)
{modal.dialog('option','position',[modalX,modalY]);}
modal.dialog('open');}
function embedSWF(){var hrefValue=config.href;var hrefValues=new Array();hrefValues=hrefValue.split('/');var flashvars={fileID:hrefValues[5],context:hrefValues[4],embeded:"true",autoPlay:"true"};var params={menu:"false",wmode:"transparent",allowfullscreen:"true"};var id={'class':'ui-dialog-content ui-widget-content','name':'ui-dialog-content ui-widget-content'};swfobject.embedSWF("http://images.tv.adobe.com/cdn/swf/player.swf",config.target,config.width,config.height,"9.0.0","expressInstall.swf",flashvars,params,id);}
function openModal()
{modal.load(config.href,function(response,status)
{var external=config.external;if(status=="error"&&external=="undefined")
{return true;}
else
{var browserIE=$.browser.msie,browserVersion=parseFloat($.browser.version);if(browserIE&&browserVersion>=7&&browserVersion<8)
{$("#"+config.target).css('maxWidth',config.width);}
if(browserIE&&browserVersion<7)
{if($("#"+config.target+" img").length!=0)
{var newImg=new Image();newImg.src=modal.find("img").attr('src');var combinedXObjects=(newImg.width+marginWidth)-20;var combinedYObjects=newImg.height+marginHeight+11;modal.dialog('option','width',combinedXObjects);modal.dialog('option','height',combinedYObjects);modal.dialog('open');}
else if($("#"+config.target+" object").length!=0)
{combinedXObjects=(parseInt($("#"+config.target+" object").attr('width'))+marginWidth)-20;combinedYObjects=parseInt($("#"+config.target+" object").attr('height'))+marginHeight+8;modalLaunch(combinedXObjects,combinedYObjects);}
else
{var modalWidth=710;if(config.width>0)
{modalWidth=config.width;}
var modalHeight="auto";modal.dialog('option','width',width);modal.dialog('option','height',height);modal.dialog('open');}}
else
{modal.dialog('open');}}});return false;}
openModal();}
if(config===undefined)
{return;}
currentWindowSize.width=$(window).width();if(currentWindowSize.width>(parseInt(config.width)||0))
{var mid=config.target,e=$("#"+mid);if(e[0]==null)
{$('<div/>',{id:mid}).appendTo('body');}
createOpenModalHandler(config);}};
adobe.fn.pageFilter=function(e)
{adobe.fn.pageFilter={};var menuBarID="#"+e,menuBar=$(menuBarID),menuControlID="MenuControl",menuControl=$('#'+menuControlID),menuShow=$(menuBarID+" .MenuShow"),menuButton=$(menuBarID+' .MenuDropButton'),menuPanel=menuBar.find("div[class*='MenuDropPanel']"),menuOpen=false;if(menuControl[0]==null)
{$('<div/>',{id:menuControlID}).appendTo('body');menuControl=$('#'+menuControlID);}
var menuDropWidth=$(menuBarID+' .MenuDrop').width(),menuPanelWidth=$(menuBarID+' .MenuDropPanel').width(),menuModifier=1,menuWidth;if($.browser.msie&&parseFloat($.browser.version)<=8.0)
{menuModifier=menuModifier+22;}
if(menuDropWidth>menuPanelWidth)
{menuWidth=menuDropWidth+menuModifier+"px";}
else
{menuWidth=menuPanelWidth+menuModifier+"px";}
$(menuBarID+' .MenuDrop').css('width',menuWidth);$(menuBarID+' .MenuDropPanel').css('width',menuWidth);menuShow.each(function()
{var targetShow=$(this).attr('rel'),moreLink=$(this).attr('href');$(this).bind('click',function(event)
{event.preventDefault();var menuToggle=$('.MenuToggle');menuToggle.each(function()
{if($(this).attr('id')!='#'+targetShow)
{menuToggle.addClass('UIHide');}});$('#'+targetShow).removeClass('UIHide');var menuSelected=$(menuBarID+' .MenuDropItemSelected').html();menuBar.parents('td').siblings('.MenuMultiPanel').find('a.RouterLink').attr('href',moreLink);menuBar.find('.MenuButton a').html(menuSelected);$('.MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuButton.removeClass('LayoutFlipV');menuControl.removeClass('MenuClose');});});adobe.fn.pageFilter.toggleMenuOn=function()
{menuPanel.slideDown('fast').addClass('MenuShow');menuControl.addClass('MenuClose');menuButton.addClass('LayoutFlipV');menuControl.unbind('click');menuControl.bind('click',function()
{$(menuBarID+' .MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuButton.removeClass('LayoutFlipV');menuControl.removeClass('MenuClose');});$('body').unbind('keyup');$('body').bind('keyup',function(event)
{if(event.keyCode=='27')
{event.preventDefault();$(menuBarID+' .MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuButton.removeClass('LayoutFlipV');menuControl.removeClass('MenuClose');}});};adobe.fn.pageFilter.toggleMenuOff=function()
{$('.MenuDropPanel').slideUp('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuButton.removeClass('LayoutFlipV');menuPanel.slideUp('fast').removeClass('MenuShow');menuControl.removeClass('MenuClose');menuButton.removeClass('LayoutFlipV');};menuBar.find("div[class*='MenuDropName']").bind('click',function()
{if(menuControl.hasClass('MenuClose')&&menuPanel.hasClass('MenuShow'))
{adobe.fn.pageFilter.toggleMenuOff();menuOpen=false;}
else if(!menuOpen)
{adobe.fn.pageFilter.toggleMenuOn();menuOpen=true;}
else
{adobe.fn.pageFilter.toggleMenuOn();}
return false;});var menuDropItem=new Array();$(menuBarID+' .MenuDropItem').each(function(i)
{$(this).attr('id',e+'MenuDropItem'+[i]);menuDropItem[i]='#'+$(this).attr('id');if($(menuBarID+' .MenuDropItemSelected').size()==0)
{$(menuDropItem[0]).addClass('MenuDropItemSelected');}
$(menuDropItem[i]).bind('click',function()
{$(menuBarID+' .MenuDropItem').removeClass('MenuDropItemSelected');$(this).addClass('MenuDropItemSelected');});});};
adobe.fn.ratings=function(target,xml)
{var body=$('body'),rating,num,cdnPrefix=adobe.http.cdnprefix(),xmlInProgress=body.data('XmlDataInProgress'),xmlDataDone=body.data('XmlDataDone');if(xmlDataDone==null)
{if(xmlInProgress==null)
{body.data('XmlDataInProgress','true');var head=$("head")[0],ratingsCss=new adobe.dom.CSSStyleSheet(cdnPrefix+"/include/style/ratings.css");ratingsCss.enable(head);body.bind('XmlDataChange',function(e,id,rating)
{$('#'+id).addClass('StarRatings-'+rating);});$.get(xml,function(dataObject)
{$(dataObject).find("Product").each(function()
{rating=$(this).find('ReviewStatistics').find('AverageOverallRating').text(),num=new Number(rating);rating=num.toFixed(1);rating=rating.replace('.','_');body.data($(this).attr('id'),{productRating:rating});body.data('XmlDataDone','true');body.trigger('XmlDataChange',[$(this).attr('id'),rating]);});});}}
else
{$('#'+target).addClass('StarRatings-'+body.data(target).productRating);}};
adobe.fn.resizeObjectElement=function(objectId,width,height){function setAtt(name,value){if(isNaN(value)){return;}
if(e.hasAttribute(name)){e[name]=value;}
if(e.hasAttribute("style")){e.style[name]=value+"px";}}
var h=parseInt(height),w=parseInt(width),e=window.document.getElementById(objectId.toString());if(e==null){return;}
setAtt("height",h);setAtt("width",w);};
adobe.fn.stockQuote=function(target)
{var stockPod=$('#'+target);if(stockPod!=null&&stockPod!="undefined"){stockPod.find('div.miniQuoteWrapper div.change').each(function(){if(parseFloat($(this).text())>=0){$(this).addClass('StockQuotePositive').html("&#9650;"+$(this).text());}else{$(this).addClass('StockQuoteNegetive').html("&#9660;"+$(this).text());}});stockPod.find('div.miniQuoteWrapper div.symbol').each(function(){if($(this).text().replace(/ /g,'')=="$NASX"){$(this).text("NASDAQ");}});}};adobe.fn.stockQuoteDate=function(d,target){var stockDatePod=$('#'+target);var s=function(a,b){return(1e15+a+"").slice(-b)};if(typeof d==='undefined'){d=new Date();};var dt=s(d.getMonth()+1,2)+'/'+
s(d.getDate(),2)+'/'+
d.getFullYear()+' '+
s(d.getHours(),2)+':'+
s(d.getMinutes(),2)+':'+
s(d.getSeconds(),2);if(stockDatePod!=null&&stockDatePod!="undefined"){stockDatePod.find('div.StockQuoteDate').each(function(){var t=$(this).html()+' '+dt;$(this).html(t);});}};
adobe.fn.toggle=function(click,toggle,toggle2,slide)
{var toggleId=$("#"+toggle),clickId=$("#"+click);toggleId.attr('aria-hidden','true');if(toggle2!=undefined&&toggle2!='')
{var toggleId2=$("#"+toggle2);toggleId2.attr('aria-hidden','true');}
clickId.bind('click',function(e)
{e.preventDefault();(toggleId.attr('aria-hidden')=='true')?toggleId.attr('aria-hidden','false'):toggleId.attr('aria-hidden','true');(slide!=undefined&&slide!='')?toggleId.slideToggle(slide):toggleId.toggle();if(toggle2!=undefined&&toggle2!='')
{(toggleId2.attr('aria-hidden')=='true')?toggleId2.attr('aria-hidden','false'):toggleId2.attr('aria-hidden','true');(slide!=undefined&&slide!='')?toggleId2.slideToggle(slide):toggleId2.toggle();}});};
adobe.http.cdnprefix=function(environment)
{var cdnPrefix,envObj=[],hostProtocol=(document.location.protocol=='https:'?'https':'http'),host=URLParser.host;var cdnAddy=(hostProtocol=='https')?hostProtocol+'://wwwimages2':hostProtocol+'://wwwimages';if(host.match(/qa/g)!=null)
{host='qa';}
switch(host)
{case"www.adobe.com":case"author.corp.adobe.com":case"author-02.corp.adobe.com:4502":case"adobe.com":cdnPrefix=cdnAddy+".adobe.com/www.adobe.com";break;case"www.stage.adobe.com":case"www.stage2.adobe.com":case"author.stage.corp.adobe.com":case"author-s-02.corp.adobe.com:4502":cdnPrefix=cdnAddy+".stage.adobe.com/www.stage.adobe.com";break;case"qa":cdnPrefix="";break;default:cdnPrefix="";break;}
return(environment!=null)?envObj[environment]:cdnPrefix;};
adobe.http.getCookies=function(cookie){function trim(s){return((s===undefined)?"":String(s).replace(/^\s*/,"").replace(/\s*$/,""));}
var o={};if(typeof cookie=='string'){var cookies=cookie.split(";");for(var i=0,l=cookies.length;i<l;i++){var pieces=cookies[i].split("=");var name=trim(pieces[0]),content=trim(pieces[1]);o[name]=new adobe.http.Cookie(name,content);}}
return o;};adobe.http.Cookie=function(name,content){this.setName(name);this.setContent(content);return this;};adobe.http.Cookie.prototype={setName:function(name){this.name=String(name);return this;},setContent:function(content){this.content=(typeof content=='string')?content:"";return this;},setExpires:function(milliseconds){this.expires=isNaN(milliseconds)?0:milliseconds;return this;},setSecure:function(secure){this.secure=Boolean(secure);return this;},setDomain:function(domain){this.domain=encodeURI(String(domain));return this;},setPath:function(path){this.path=encodeURI(String(path));return this;},destroy:function(){this.content="";this.setExpires(-86400000);return this;},toString:function(){var cookie=this.name+"="+this.content;if(!isNaN(this.expires)){var date=new Date();date.setTime(date.getTime()+this.expires);cookie+=";expires="+date.toGMTString();}
if(this.path){cookie+=";path="+this.path;}
if(this.domain){cookie+=";domain="+this.domain;}
if(this.secure){cookie+=";secure";}
return cookie;}};adobe.http.Cookie.is=function(func){return func!==undefined&&adobe.http.Cookie.prototype.isPrototypeOf(func);};
adobe.http.getScript=function(url,options)
{options=$.extend(options||{},{dataType:"script",cache:true,url:url});return jQuery.ajax(options);};
adobe.ui.CartFacade=function(overlay_id,flash_id){this.overlayElement=null;this.distributionMethod="";this.distributionMethodDisplayed="";this.storeTypeDisplayed="";this.categoryPath="";this.categoryPathDisplayed="";this.contextPath="";this._domain="";this.defaultStore="";this.defaultCountry="";this.requiredFlashVersion="0.0.0";this.detectedFlashVersion="";this.storeRegion="";this.storeRegionCookie=new adobe.http.Cookie("storeregion").setPath('/').setExpires(86400002*365);this.productName="";this.emailTrackingId="";this.storeType="";this.o_id=overlay_id;this.f_id=flash_id;this.flashObject=null;};adobe.ui.CartFacade.prototype={closeCartOverlay:function(){if(!this.overlayElement){return;}
this.overlayElement.dialog('close');},getDetectedFlashVersion:function(){if(!this.detectedFlashVersion){var plVersion=swfobject.getFlashPlayerVersion();this.detectedFlashVersion=plVersion.major+"."+plVersion.minor+"."+plVersion.release;}
return this.detectedFlashVersion;},getStoreRegion:function(){if(this.storeRegion){return this.storeRegion;}else{var cookie=adobe.http.getCookies(window.document.cookie).storeregion;if(cookie){return cookie.content;}}
return"";},isOverlaySupported:function(){var supported=this.isFlashVersionSupported();supported=supported&&!(window.opera&&(/^Win/.test(window.navigator.platform)));return supported;},isFlashVersionSupported:function(){var playerVersion=this.itemizeFlashVersion(this.getDetectedFlashVersion());var requiredVersion=this.itemizeFlashVersion(this.requiredFlashVersion);for(var i=0;i<playerVersion.length;i++){var current=playerVersion[i]||0,required=requiredVersion[i]||0;if(current>required){break;}else if(current==required){continue;}else{return false;}}
return true;},itemizeFlashVersion:function(version){var v=String(version).split("."),r=[];for(var i=0,l=v.length;i<l;i++){r.push(parseFloat(v[i]));}
return r;},openCartOverlay:function(){if((this.overlayElement==null)||(this.distributionMethod!=this.distributionMethodDisplayed)||(this.storeType!=this.storeTypeDisplayed||this.categoryPath!=this.categoryPathDisplayed)){var vars={categorypath:this.categoryPath,contextpath:this.contextPath,defaultstore:this.defaultStore,defaultcountry:this.defaultCountry,distmethod:this.distributionMethod,flashversion:this.getDetectedFlashVersion(),omnitureproductname:this.productName,promoid:this.emailTrackingId,storeregion:this.getStoreRegion(),storetype:this.storeType},params={allowScriptAccess:"sameDomain",id:this.f_id},attrs={id:this.f_id,name:this.f_id,allowScriptAccess:"sameDomain"},_this=this;var overlayElement=document.getElementById(this.o_id);if(!overlayElement){var body=document.getElementsByTagName("body")[0];var div=document.createElement("div");div.setAttribute("id",this.o_id);overlayElement=body.appendChild(div);}
this.overlayElement=$("#"+this.o_id);var flashObject=document.getElementById(this.f_id);if(!flashObject){flashObject=overlayElement.appendChild(document.createElement("div"));flashObject.setAttribute("id",this.f_id);}
this.overlayElement.dialog({modal:true,autoOpen:false,dialogClass:"CartDialog",resizable:false,draggable:false,width:850,height:535,closeOnClick:false,open:function(){swfobject.replaceSWF(_this.contextPath+"/swf/store/flex/StatelessStore.swf",_this.f_id,"850","535",_this.requiredFlashVersion,"",vars,params,attrs,function(event){if(event.success){_this.flashObject=document.getElementById(_this.f_id);}});}});this.distributionMethodDisplayed=this.distributionMethod;this.storeTypeDisplayed=this.storeType;this.categoryPathDisplayed=this.categoryPath;}
this.overlayElement.dialog('open');},resizeCartOverlay:function(width,height){if(!this.overlayElement){return;}
if(this.flashObject){this.flashObject.height=height;this.flashObject.width=width;this.flashObject.sizeChanged(1);}
this.overlayElement.dialog("option",{height:height,width:width,position:"center"});},setCategoryPath:function(catpath){this.categoryPath=String(catpath);},setContextPath:function(path){this.contextPath=String(path);},setDefaultCountry:function(countryid){this.defaultCountry=String(countryid);},setDefaultStore:function(storeid){this.defaultStore=String(storeid);},setDistributionMethod:function(distmethod){this.distributionMethod=String(distmethod);},setDomain:function(domain){this._domain=String(domain);this.storeRegionCookie.setDomain(this._domain);},setEmailTrackingId:function(prmid){this.emailTrackingId=String(prmid);},setProductName:function(productname){this.productName=String(productname);},setRequiredFlashVersion:function(version){this.requiredFlashVersion=String(version);},setStoreRegion:function(region){this.storeRegion=String(region);window.document.cookie=this.storeRegionCookie.setContent(this.storeRegion).toString();},setStoreType:function(typestr){this.storeType=String(typestr);}};
var SearchBuddy=(function(){_SearchBuddyInstance=function(){_SearchBuddy={};_SearchBuddy.IDS={gnavForm:"#globalnav-search",siteSearch:"#site-search",searchInput:"#search-input",searchBuddySubmit:"search-buddy-submit",searchLocField:"#searchbuddy-loc",resultsContainer:"sb-results",resultsBody:"sb-results-body",resultsList:"sb-result-list"};_SearchBuddy.CSS={activated:"activated",highlight:"highlight",noResult:"no-result",searchResult:"search-result",pulloutItem:"pullout-item",pulloutContent:"pullout-content",linkList:"link-list",searchSuggestion:"search-suggestion",searchAll:"txtright search-all"};this.initialize();};_SearchBuddyInstance.prototype={initialize:function(URLS,STRINGS){if($(_SearchBuddy.IDS.gnavForm)==null)return;if(!$(_SearchBuddy.IDS.gnavForm).hasClass("searchbuddy"))return;this.URLS=$.extend({searchBuddy:"/cfusion/search/buddy/searchbuddy.cfm",searchResults:"/cfusion/search/index.cfm"},URLS);this.gnavForm=$(_SearchBuddy.IDS.gnavForm);this.siteSearch=$(_SearchBuddy.IDS.siteSearch);this.input=$(_SearchBuddy.IDS.searchInput);if($(_SearchBuddy.IDS.searchLocField).val()==null){this.loc="en_us";}else{this.loc=$(_SearchBuddy.IDS.searchLocField).val();}
this.locJSON=this.loc;this.input.attr("autocomplete","off");this.term=this.input.val();if(this.loc=="en_us"){this.STRINGS=$.extend({searchForElipsis:"Search for...",searchFor:"Search for",seeAllResults:"See all search results &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="de"){this.locJSON="de_de";this.STRINGS=$.extend({searchForElipsis:"Suchen...",searchFor:"Suchen",seeAllResults:"Alle Suchergebnisse anzeigen &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="es_es"){this.STRINGS=$.extend({searchForElipsis:"Buscar...",searchFor:"Buscar",seeAllResults:"Ver todos los resultados de búsqueda &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="fr_fr"){this.STRINGS=$.extend({searchForElipsis:"Rechercher...",searchFor:"Rechercher",seeAllResults:"Voir les résultats de la recherche &#8250;",delay:0.015},STRINGS);}
else if(this.loc=="ja_jp"){this.STRINGS=$.extend({searchForElipsis:"検索...",searchFor:"検索",seeAllResults:"すべての検索結果を見る &#8250;",delay:0.015},STRINGS);}
this.input.keyup($.proxy(this,"handleKeyCheck"));this.gnavForm.bind("submit",$.proxy(this,"handleFormSubmit"));this.goURL="";this.setupForResults();},setupForResults:function(){this.resultsContainer=$('<div />',{"id":_SearchBuddy.IDS.resultsContainer});this.resultsBody=$('<div />',{"id":_SearchBuddy.IDS.resultsBody});this.resultsContainer.appendTo(this.siteSearch);this.resultsBody.appendTo(this.resultsContainer);this.siteSection=URLParser.siteLevel;this.siteSection=(this.siteSection=="")?"home":this.siteSection;this.siteSection=(URLParser.subdomain=="get")?("get:"+this.siteSection):this.siteSection;this.siteSection=(URLParser.subdomain=="kb")?("kb:"+this.siteSection):this.siteSection;this.siteSection+=(URLParser.siteSection==null||URLParser.siteSection=="")?"":":"+URLParser.siteSection;var siteSection_input=$("<input>",{"name":"siteSection","type":"hidden","value":this.siteSection});siteSection_input.appendTo(this.gnavForm);},handleFormSubmit:function(event){var keyCode=event.keyCode||event.which;this.gnavForm.attr('action','/go/gnav_search');if(this.goURL!=""||this.input.val()==""||this.input.val()==this.input.attr("title")){return false;}
if(event.type=="click"||keyCode=="13"||keyCode=="0"){if(this.input.val()==this.input.attr("title"))this.input.val("");this.gnavForm.trigger("submit");}},handleKeyCheck:function(e){var keyEvent=e.keyCode||e.which;this.keyMap={SHIFT:e.shiftKey,ALT:e.altKey,CTRL:e.ctrlKey,ESC:keyEvent==27,RETURN:keyEvent==13,TAB:keyEvent==9,DELETE:keyEvent==8||keyEvent==46,DOWN:keyEvent==40,UP:keyEvent==38,ALPHANUMERIC:((keyEvent>=48&&keyEvent<=57)||(keyEvent>=65&&keyEvent<=90))};if(this.keyMap.ALPHANUMERIC||this.keyMap.DELETE||this.keyMap.BACKSPACE){this.setTerm();}else{this.handleMenuNavigation(e);}},handleMenuNavigation:function(e){if(!this.json){e.preventDefault();return;}
if(this.keyMap.RETURN){e.preventDefault();if(this.input.val()==""||this.input.val()==this.input.attr("title")){return false;}else if(this.goURL==""){this.gnavForm.submit();return false;}else{window.location.href=this.goURL;return;}}
if(this.keyMap.ESC){this.deactivateMenu();this.goURL="";this.input.value="";}
if(this.keyMap.TAB){if(this.goURL.empty()){this.deactivateMenu();}}
if(this.keyMap.DELETE){this.handleResultsMenu();}
var resultLinks=$('#'+_SearchBuddy.IDS.resultsBody+' a');if(this.keyMap.DOWN){e.preventDefault();if(this.selectedIndex<resultLinks.length){if($(resultLinks[this.selectedIndex]).has("img").length)this.selectedIndex++;var currentLink=$(resultLinks[this.selectedIndex]);if(this.selectedIndex>1){var lastLink=resultLinks[this.selectedIndex-1];if($(resultLinks[this.selectedIndex]).has("img").length)lastLink=resultLinks[this.selectedIndex-2];$(lastLink).removeClass(_SearchBuddy.CSS.highlight);}
currentLink.addClass(_SearchBuddy.CSS.highlight);this.selectedIndex++;var linkString=(currentLink.attr("href"))?currentLink.attr("href").toString():false;window.status=(linkString)?linkString:"";this.goURL=(linkString)?linkString:"";}else if(resultLinks.length==1){$(resultLinks[0]).addClass(_SearchBuddy.CSS.highlight);}}
if(this.keyMap.UP){e.preventDefault();this.selectedIndex--;if(this.selectedIndex==1)this.selectedIndex=2;if(this.selectedIndex>1&&this.selectedIndex<resultLinks.length){if($(resultLinks[this.selectedIndex-1]).has("img").length){$(resultLinks[this.selectedIndex]).removeClass(_SearchBuddy.CSS.highlight);this.selectedIndex--;$(resultLinks[this.selectedIndex-1]).addClass(_SearchBuddy.CSS.highlight);}else{$(resultLinks[this.selectedIndex]).removeClass(_SearchBuddy.CSS.highlight);$(resultLinks[this.selectedIndex-1]).addClass(_SearchBuddy.CSS.highlight);}
var linkString=($(resultLinks[this.selectedIndex-1]).attr("href"))?$(resultLinks[this.selectedIndex-1]).attr("href"):"";window.status=linkString;this.goURL=linkString;}}},setTerm:function(){this.term=this.input.val();this.term=this.term.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');if(this.term==""){this.deactivateMenu();}else{_search=this.search(this.term);setTimeout('_search',this.STRINGS.delay);}},search:function(){this.baseURL=this.URLS.searchBuddy;var sURL=this.baseURL+"?pre="+this.term+"&s="+this.siteSection+"&loc="+this.locJSON;$.getJSON(sURL,$.proxy(this,"loadJSON"));this.selectedIndex=1;this.goURL="";},loadJSON:function(originalRequest){this.json=originalRequest;if($('#'+_SearchBuddy.IDS.resultsList)!=null){$('#'+_SearchBuddy.IDS.resultsList).remove();}
if(this.json.HUBLETS.length==0&&this.json.SUGGESTIONS.length==0){this.renderNoResults();}else{this.renderResults();}},activateMenu:function(){$(_SearchBuddy.IDS.siteSearch).addClass(_SearchBuddy.CSS.activated);},deactivateMenu:function(){this.gnavForm.trigger("searchbuddy:closed");if($("#"+_SearchBuddy.IDS.resultsList)!=null){$("#"+_SearchBuddy.IDS.resultsList).remove();this.siteSearch.removeClass(_SearchBuddy.CSS.activated);this.ignoreMouseHover();}},renderNoResults:function(){this.deactivateMenu();this.activateMenu();var dl=$('<dl/>',{"id":_SearchBuddy.IDS.resultsList});var ddLink=this.URLS.searchResults+"?loc="+this.loc+"&term="+this.term;var ddText=this.STRINGS.searchFor+' "'+this.term+'" &#8250;';var dd=$('<dd/>',{'class':_SearchBuddy.CSS.noResult}).html($('<a/>',{'href':ddLink}).html(ddText));this.resultsBody.append(dl);dl.append(dd);this.goURL="";this.watchDocumentClicks();},renderResults:function(json){this.activateMenu();var hublets=this.json.HUBLETS;var suggestions=this.json.SUGGESTIONS;var dl=$('<dl/>',{id:_SearchBuddy.IDS.resultsList});dl.appendTo(this.resultsBody);$.each(hublets,function(index,hub){var sbrIndex="sbr-"+index;var imgURL="http://wwwimages.adobe.com/www.adobe.com/"+hub.ICONURL;var dd=$('<dd/>',{'id':sbrIndex,'class':_SearchBuddy.CSS.searchResult});var image=$('<div/>',{'class':_SearchBuddy.CSS.pulloutItem}).html($('<a/>',{'href':hub.HOMEPAGEURL}).html($('<img>',{'src':imgURL})));var content=$('<div/>',{'class':_SearchBuddy.CSS.pulloutContent});var h4=$('<h4/>',{'href':hub.HOMEPAGEURL}).html($('<a/>',{'href':hub.HOMEPAGEURL}).html(hub.TITLE));var linklist=$('<ul/>',{'class':_SearchBuddy.CSS.linkList});$.each(hub.LINKS,function(index,link){var li=$('<li/>').html($('<a/>',{'href':link.URL}).html(link.TITLE));linklist.append(li);});dl.append(dd);dd.append(image);dd.append(content);content.append(h4).append(linklist);});$.each(suggestions,function(index,suggest){var dd=$('<dd/>',{'id':"sbs-"+index,'class':_SearchBuddy.CSS.searchSuggestion});var link=$('<h4/>').html($('<a/>',{'href':suggest.DESTINATIONURL}).html(suggest.TITLE));var p=$('<p/>').html(suggest.BLURB);dl.append(dd);dd.append(link);dd.append(p);});var searchAllDD=$('<dd/>',{"class":_SearchBuddy.CSS.searchAll});var searchAllLink=$('<a/>',{'id':_SearchBuddy.IDS.searchBuddySubmit}).html(this.STRINGS.seeAllResults).bind({'click':$.proxy(this,"handleFormSubmit"),'keydown':$.proxy(this,"handleFormSubmit")});searchAllDD.append(searchAllLink);dl.append(searchAllDD);this.watchDocumentClicks();this.watchMouseHover();},handleOutsideClicks:function(event){var inResultsContainer=$(event.target).parents('#'+_SearchBuddy.IDS.resultsContainer).length>0;var isInputField=$(event.target).is("#search-input");if(!inResultsContainer&&!isInputField){this.deactivateMenu();this.ignoreDocumentClicks();}},watchDocumentClicks:function(){$(document).bind('click',$.proxy(this,"handleOutsideClicks"));},ignoreDocumentClicks:function(){$(document).unbind('click',$.proxy(this,"handleOutsideClicks"));},handleMouseHover:function(event){$('#'+_SearchBuddy.IDS.resultsList+" a."+_SearchBuddy.CSS.highlight).removeClass(_SearchBuddy.CSS.highlight);this.selectedIndex=1;},watchMouseHover:function(){this.resultsBody.bind('mouseover',$.proxy(this,"handleMouseHover"));},ignoreMouseHover:function(){this.resultsBody.unbind('mouseover',$.proxy(this,"handleMouseHover"));}};return _SearchBuddyInstance;})();$(document).ready(function(){new SearchBuddy();});
adobe.ui.caroSlider=function(target,settings)
{var targetID=$(target),defaultSettings={items:1,circular:true,infinite:true,auto:false,direction:"left",width:"100%",align:"left",mousewheel:true,swipe:{onMouse:true,onTouch:true},prev:{button:target+"_prev",key:"left"},next:{button:target+"_next",key:"right"},pagination:target+"_pagination"},allSettings=$.extend(defaultSettings,settings);targetID.caroSlider(allSettings);};
adobe.ui.formClearInput=function(id,input)
{var target=$("#"+id);if(input==undefined)
{target.find(':input').each(function()
{$(this).bind('click',function()
{switch(this.type)
{case'password':case'text':case'textarea':$(this).val('');break;}});});}
else
{input=$("#"+input);input.bind('click',function()
{switch(this.type)
{case'password':case'text':case'textarea':$(this).val('');break;}});}};
adobe.ui.formDestroy=function(target)
{target=$('#'+target);if(target.html()!='')
{var targetDestroy=target.find('select').attr('id');$('#'+targetDestroy).selectBox('destroy');}};
adobe.ui.formLoad=function(formID,target,dir,ext)
{target='#'+target;if(dir===undefined)
{dir="";}
if(ext===undefined)
{ext=".html";}
$(target).empty();if(target=="#MarketSegment-target")
{$('#MemberType-target').empty();}
var formIDValue=$("#"+formID+" option:selected").val();if(formIDValue!==undefined&&formIDValue!='')
{$.get(dir+formIDValue+ext,function(data)
{$(target).html(data);});}};
adobe.ui.selectSwitch=function(e,toggle)
{var target='';$("#"+e).change(function()
{$("#"+e+" option:selected").each(function()
{if(target!='')
{$('#'+target).addClass("LayoutMinV LayoutMask").removeClass("selectDisabled");$('#'+target+' select').selectBox('value',"");$('#'+target+" .selectDisabled").removeClass("LayoutMinV LayoutMask");}
target=$(this).val();if(target!='')
{$('#'+target).removeClass("LayoutMinV LayoutMask").addClass("selectDisabled");$('#'+target+' select').selectBox('value',"");$('#'+target+" .selectDisabled").addClass("LayoutMinV LayoutMask");}});if(toggle!==undefined&&toggle!='')
{if($("#"+toggle).attr('disabled')&&!$('#'+target).hasClass("selectDisabled"))
{$('#'+toggle).selectBox('enable');}
else
{$('#'+toggle).selectBox('disable');}}});};
adobe.ui.formSubmit=function(formID,click)
{var id=$("#"+formID);if(click!=undefined)
{$(click).bind('click',function()
{if(id)
{id.submit();}});}
else
{if(id)
{id.submit();}}};
adobe.ui.formValidate=function(target,thanks,meta,attr)
{meta=(meta==null)?true:meta;var targetForm=$('#'+target),thanksDiv=$('#'+thanks),cdnPrefix=adobe.http.cdnprefix();if(target!==undefined)
{targetForm.attr('novalidate','novalidate');$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.form.js');targetForm.find(':submit').before('<div id="SubmitStatus" />');var SubmitStatus=$('#SubmitStatus');var validateOptions={wrapper:"div class='LayoutRow'",errorClass:"FormError",errorPlacement:function(error,element)
{var validator=$.data(targetForm[0],'validator'),elementIdOrName=validator.idOrName(element[0]),elementLabel=$('label[for="'+elementIdOrName+'"]').eq(0),isMacOriOS=navigator.userAgent.match(/Mac|iPhone|iPad/i)!=null;if(elementLabel&&!elementLabel.attr('id'))
{elementLabel.attr('id',elementIdOrName+'Label');}
element.data('aria-labelledby',(!elementLabel||isMacOriOS)?elementIdOrName+this.errorClass:elementLabel.attr('id')+' '+elementIdOrName+this.errorClass);error.insertAfter(element.attr({'aria-invalid':'true','aria-labelledby':element.data('aria-labelledby')})).find(this.errorElement).attr({'id':elementIdOrName+this.errorClass});},showErrors:function(errorMap,errorList)
{for(var i=0;errorList[i];i++)
{var error=errorList[i],element=$(error.element);element.attr({'aria-invalid':'true','aria-labelledby':element.data('aria-labelledby')});}
this.defaultShowErrors();},unhighlight:function(element,errorClass,validClass)
{if(element.type==='radio')
{this.findByName(element.name).removeClass(errorClass).addClass(validClass).removeAttrs("aria-invalid aria-labelledby");}else
{$(element).removeClass(errorClass).addClass(validClass).removeAttrs("aria-invalid aria-labelledby");}}};$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.validate.js').done(function()
{if(meta)
{$.getScript(cdnPrefix+'/include/script/jquery/plugins/OnDemand/jquery.metadata.js').done(function()
{attr=(attr==null)?'data-validate':attr;$.metadata.setType("attr",attr);targetForm.find('['+attr+']').each(function()
{if($(this).metadata().required)
{$(this).attr({'aria-required':'true','required':'required'});}});targetForm.validate(validateOptions);});}
else
{targetForm.find('[required]').attr({'aria-required':'true'});targetForm.validate(validateOptions);}});}};
adobe.ui.selectBox=function(target,change,settings)
{var targetID=$(target),dispatcher=adobe.vrbl("reflowDispatcher"),defaultSettings={'menuTransition':'slide','menuSpeed':'fast','autoSize':true},allSettings=$.extend(defaultSettings,settings);if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&!dispatcher.getLayoutEvent("phone").active)
{targetID.selectBox();targetID.selectBox('settings',allSettings);}}
else
{targetID.selectBox();targetID.selectBox('settings',allSettings);}
if(change!=''&&!!change)
{if(change=='toggle')
{var targetOptions=[];targetID.find('option').each(function()
{targetOptions.push($(this).attr('data-toggle'));});targetID.selectBox().change(function()
{var targetShow=$(target+' option:selected').attr('data-toggle'),targetHide=$(this).val();for(i=0;i<targetOptions.length;i++)
{if(targetOptions[i]!=targetShow)
{$('#'+targetOptions[i]).hide();}
else
{$('#'+targetShow).show();}}
targetID.parents('td').siblings('.MenuMultiPanel').find('a.RouterLink').attr('href',targetHide);});}
else
{if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{targetID.change(function()
{location.href=$(this).val();});}
else
{targetID.selectBox().change(function()
{location.href=$(this).val();});}}
else
{targetID.selectBox().change(function()
{location.href=$(this).val();});}}}};
adobe.ui.tabs=function(target,defaultTab)
{var targetID=$("#"+target),dispatcher=adobe.vrbl("reflowDispatcher"),vertTabs=targetID.find('.ui-tabpanel-vertical'),tabsWidth=targetID.width();if(URLParser.hash!=null&&targetID.find(URLParser.hash)!==undefined)
{if(targetID.find(URLParser.hash).length>0)
{defaultTab=parseInt(URLParser.hash.match(/(\d+)$/)[0],10)-1;}}
else
{defaultTab=(defaultTab!=null)?defaultTab:0;}
function createTabs()
{targetID.find('.TabsMobile').hide();targetID.tabs({selected:defaultTab});if(vertTabs.length==0)
{var tabsLI=targetID.find('li.ui-state-default'),tabsCount=tabsLI.length,tabsMaxWidth=tabsWidth/tabsCount,allTabs=0,pxPerChar;if($.browser.msie||$.browser.opera||typeof CQClientLibraryManager!="undefined")
{pxPerChar=10;}
else
{pxPerChar=9;}
tabsLI.each(function()
{allTabs=$(this).width()+allTabs;});if(allTabs>tabsWidth)
{tabsLI.each(function()
{$(this).css('maxWidth',tabsMaxWidth);var str=$(this).find('a').text(),strCount=str.length,tabsWholeMaxWidth=Math.floor((tabsMaxWidth-22))/pxPerChar;if(strCount>tabsWholeMaxWidth)
{str=str.slice(0,tabsWholeMaxWidth-2);$(this).find('a').text(str+'..');}});}}
else
{var vertTabsGrid=targetID.find('.ui-tabpanel-vertical .LayoutGrid-4');if(vertTabsGrid.length>0)
{vertTabsGrid.css('width',vertTabsGrid.innerWidth()+11);}
vertTabsGrid=targetID.find('.ui-tabpanel-vertical .LayoutGrid-2');if(targetID.find('.ui-tabpanel-vertical .LayoutGrid-2').length>0)
{vertTabsGrid.css('width',vertTabsGrid.innerWidth()+11);}
vertTabs.css({minHeight:$('.ui-tabs-vertical').innerHeight()});vertTabs.parents('.LayoutFlushLeft').css('width',vertTabs.innerWidth()+11);}}
function reflowTabs()
{targetID.tabs("destroy");var tabLink='',tabText='';function mobileTabify(me)
{if(targetID.prev('a[name="'+target+'"]').length==0)
{targetID.prepend('<a name="'+target+'"></a>');}
tabLink=$(me).attr('href');tabText=($(me).attr('title')!='')?$(me).attr('title'):$(me).text();if($(tabLink).length>0)
{if($(tabLink).find('.TabsMobile').length!=0)
{$(tabLink).find('.TabsMobile').show();}
else
{$(tabLink).prepend('<a name="'+tabLink+'"></a>'+'<div class="LayoutBreakAfter TabsMobile">'+'<h2 class="LayoutRow TextH3 LayoutHItem">'+tabText+'</h2>'+'<div class="LayoutHItemRight LayoutRow">'+'<a href="#'+target+'">To the top<span class="LayoutSmallGutterLeft Icon IconSmallerTop"></span></a>'+'</div>'+'</div>')}}}
if(vertTabs.length==0)
{targetID.find('li.LayoutHItem a').each(function()
{mobileTabify($(this));});}
else
{targetID.find('.ui-tabpanel-vertical .LayoutGrid-4').css('width','');vertTabs.parents('.LayoutFlushLeft').css('width','');targetID.find('ul.ui-tabs-vertical li a').each(function()
{mobileTabify($(this));});targetID.find('.TabsMobile').addClass('LayoutCellSides');}}
if(dispatcher)
{if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{reflowTabs();}
else
{createTabs();}}
else
{createTabs();}
$(document).bind("adobe.reflow.LayoutChange",function(event,layoutEvent)
{if(layoutEvent.name=="phone")
{if(layoutEvent.active)
{reflowTabs();}
else
{createTabs();}}});};
adobe.reflow.Dispatcher=function(domElement){this.layoutEvents={};this.domElement=domElement;};adobe.reflow.Dispatcher.prototype={addLayoutEvent:function(layoutEvent){if(adobe.reflow.LayoutEvent.is(layoutEvent)){this.layoutEvents[layoutEvent.name]=layoutEvent;}
return this;},getLayoutEvent:function(name){if(this.hasLayoutEvent(name)){return this.layoutEvents[name];}
return new adobe.reflow.LayoutEvent(name);},hasLayoutEvent:function(name){return adobe.reflow.LayoutEvent.is(this.layoutEvents[name]);},removeLayoutEvent:function(name){if(this.hasLayoutEvent(name)){delete this.layoutEvents[name];}
return this;},updateLayout:function(integer){for(prop in this.layoutEvents){var layoutEvent=this.layoutEvents[prop],active=layoutEvent.isActive(),inRange=layoutEvent.isWithinRange(integer);if(active!=inRange){layoutEvent.setActive(inRange);this.fireLayoutChange(layoutEvent);}}
return this;},fireLayoutChange:function(layoutEvent){$(this.domElement).trigger("adobe.reflow.LayoutChange",layoutEvent);}};
adobe.reflow.LayoutEvent=function(name,minRange,maxRange,snapView){this.setName(name);this.setMinRange(minRange);this.setMaxRange(maxRange);this.setActive(false);};adobe.reflow.LayoutEvent.prototype={setName:function(name){this.name=String(name);},setMinRange:function(integer){this.minRange=parseInt(integer);},setMaxRange:function(integer){var value=parseInt(integer);if(isNaN(value)){value=Infinity;}
this.maxRange=value;},isActive:function(){return this.active;},setActive:function(yes){this.active=Boolean(yes);},setSnapView:function(yes){this.snapView=Boolean(yes);},isWithinRange:function(integer){var i=parseInt(integer);return i>=this.minRange&&i<=this.maxRange;}};adobe.reflow.LayoutEvent.is=function(func){return func!==undefined&&adobe.reflow.LayoutEvent.prototype.isPrototypeOf(func);};
$(document).ready(function()
{var dispatcher=adobe.vrbl("reflowDispatcher");if(dispatcher)
{if(dispatcher.hasLayoutEvent("desktopWide")&&dispatcher.getLayoutEvent("desktopWide").active)
{$("html").addClass('Wide');}
else if(dispatcher.hasLayoutEvent("phone")&&dispatcher.getLayoutEvent("phone").active)
{$("html").addClass('Slim');}
$(document).bind("adobe.reflow.LayoutChange",function(event,layoutEvent)
{if(layoutEvent.name=="desktopWide")
{if(layoutEvent.active)
{$("html").addClass('Wide');}
else
{$("html").removeClass('Wide');}}
else if(layoutEvent.name=="phone")
{if(layoutEvent.active)
{$("html").addClass('Slim');}
else
{$("html").removeClass('Slim');}}});}});
$(document).ready(function(){var LOCALE=0;var CATEGORY_PATH=1;var STORE_URL=2;var PRODUCT_NAME=3;var CART_BUTTON_ID=4;var PRICE_TYPE=5;var TAX_INCLUDE=6;$.each($('.CPodPricePlaceHolder'),function(i,placeHolder){if(placeHolder.attributes.rel!=null){var relValue=placeHolder.attributes.rel.value;var relArray=relValue.split('|');if(relArray.length==7){displayPrices(relArray[LOCALE],relArray[CATEGORY_PATH],placeHolder,null,relArray[STORE_URL],relArray[CART_BUTTON_ID],relArray[PRODUCT_NAME],relArray[PRICE_TYPE],relArray[TAX_INCLUDE]);}}});$('#EDUModalContinuShopping').live("click",function(event){event.preventDefault();var button=event.target;var eduCB=$(button).parent().parent().find('#eduQualifiedCB');var eduCBValue=$(eduCB).val();var curMarketSeg=Adobe.Cart.Models.Cart.getMarketSegment();var newMarketSeg=null;if($(eduCB).attr('checked')=='checked'){Adobe.Cart.Models.Cart.setMarketSegment("EDU");$('#CPodEDUToggle').show();$('#CPodEDUSelector').hide();}else{$('#eduErrorText').show();return;}
newMarketSeg=Adobe.Cart.Models.Cart.getMarketSegment();if(curMarketSeg!=newMarketSeg){OpenAjax.hub.publish("marketsegment.change");if(Adobe.PageInfo.ReloadPageOnContinue==null||!Adobe.PageInfo.ReloadPageOnContinue){var url=window.location.href;url=Adobe.Product.Controller.CPod.EduController.removeMarketSegmentParam(url);window.location=url;}else{$('#EDUModal-ui').dialog('close');}}else{$('#EDUModal-ui').dialog('close');}});});var conversionpod=(function($){var PRICE_MAX_THRESHOLD=10;var PRICE_MAIN_CLASS="CPodCostMain";var PRICE_SMALL_CLASS="CPodCostSmall";var REQUEST_TIMEOUT=30000;this.getMarketSegment=function()
{var mktSegment="COM";if(Adobe&&Adobe.PageInfo&&Adobe.PageInfo.marketSegment&&Adobe.PageInfo.marketSegment.length)
{mktSegment=Adobe.PageInfo.marketSegment;}
return mktSegment;};this.displayPrices=function(countryCode,productPath,vollversion,upgrade,storeUrl,cartButtonId,productName,priceType,taxInclude){var newCC=countryCode.substring(countryCode.indexOf('_')+1,countryCode.length);var marketSegment=getMarketSegment();if(marketSegment==="EDU"&&productPath.indexOf("STE")===-1)
{productPath+="STE";}
var key=countryCode+'-'+productPath;var cachedItem=$.jCacher.get(key);if(cachedItem){printPrices(cachedItem,countryCode,productPath,productName,vollversion,cartButtonId,priceType,taxInclude);}else{var priceData={url:storeUrl+'/cfusion/store/services/stateless/jsonshoppingservice.cfc',data:'method=getCategoryPricesByCountry&countryCode='+newCC+'&categoryPath='+productPath+'&marketSegment='+marketSegment+'&uc=1',dataType:'jsonp',jsonp:'callback',jsonpCallback:'getData'+cartButtonId.replace(/-/g,''),timeout:REQUEST_TIMEOUT,success:function(prices){printPrices(prices,countryCode,productPath,productName,vollversion,cartButtonId,priceType,taxInclude);},error:function(xRequest,textStatus,errorThrown){$(".CPodUpgrade").hide();}};try{$.ajax(priceData);}catch(ex){}}};this.printPrices=function(prices,countryCode,productPath,productName,vollversion,cartButtonId,priceType,taxInclude){var marketSegment=getMarketSegment();var isUpgrade=true;var displayPriceType="UPGRADE";if(prices!=null){var origAndLowestPrice=conversionpod.getOriginalAndLowestPriceItem(prices,countryCode,priceType);var price_obj=origAndLowestPrice.lowestItem;var originalPrice=origAndLowestPrice.originalPrice;if(price_obj!=null&&price_obj.priceType!=undefined){displayPriceType=price_obj.priceType;}else if(prices.length==1){displayPriceType="FULL";}
if(price_obj!=null){var href=window.location.href;var queryParams=href.split("?");var promoID="";if(queryParams.length>1){var indParams=queryParams[1].split("&");for(var i=0;i<indParams.length;i++){if(indParams[i].match(/^promoid=/i)){promoID=indParams[i].substr(8);}}}
if(displayPriceType=="UPGRADE"){$(".CPodUpgrade").show();if(cart.isOverlaySupported()){$("#"+cartButtonId).bind("click",{distmethod:"UPGRADE",storetype:marketSegment,categorypath:productPath,productname:productName,promoid:promoID},adobe.fn.handleCartButton);}
$(vollversion).replaceWith(conversionpod.getPriceDisplayHTML(price_obj,originalPrice,taxInclude));return false;}else if(displayPriceType=="FULL"){$(vollversion).replaceWith(conversionpod.getPriceDisplayHTML(price_obj,originalPrice,taxInclude));if(cart.isOverlaySupported()){$("#"+cartButtonId).bind("click",{distmethod:"FULL",storetype:marketSegment,categorypath:productPath,productname:productName,promoid:promoID},adobe.fn.handleCartButton);}
return false;}else if(displayPriceType=="SUB_NEW"){$(".CPodUpgrade").show();if(cart.isOverlaySupported()){$("#"+cartButtonId).bind("click",{distmethod:"SUB_NEW",storetype:marketSegment,categorypath:productPath,productname:productName,promoid:promoID},adobe.fn.handleCartButton);}
$(vollversion).replaceWith(conversionpod.getPriceDisplayHTML(price_obj,originalPrice,taxInclude));return false;}
$(".CPodUpgrade").show();}}};this.getOriginalAndLowestPriceItem=function(prices,countryCode,priceType){function getRawPrice(pObj,price_string)
{price_string=price_string.replace(pObj.CURRENCYSYMBOL,"").replace(pObj.TAXEXCLUSIVELABEL,"").replace(pObj.TAXINCLUSIVELABEL,"");return trimSpace(price_string);}
function getPriceDollar(rawPrice,dollar_delimitor,cent_delimitor)
{var tempvar=rawPrice.split(dollar_delimitor);if(cent_delimitor!="")
{var tempvarlast=tempvar[tempvar.length-1].split(cent_delimitor);tempvar[tempvar.length-1]=tempvarlast[0];}
return tempvar;}
function getPriceCent(rawPrice,cent_delimitor)
{var centStr="";if(cent_delimitor!="")
{var tempvar=rawPrice.split(cent_delimitor);centStr=trimSpace(tempvar[1]);}
return centStr;}
function trimSpace(str)
{return str.replace(/^\s+|\s+$/g,'');}
var origAndLowestPrice;var lowestPrice=-1;var lowestItem=null;var origPrice=null;var fullPrice=null;var upgradePrice=null;var subPrice=null;for(var i=0;i<prices.length;i++){if(prices[i]['PRICETYPE']!=null&&prices[i]['PRICETYPE']!=undefined){if(priceType.toLowerCase()==prices[i]['PRICETYPE'].toLowerCase()){lowestItem=adobe2.ecomm.Format.getFormattedPriceObj(prices[i],countryCode.toLowerCase());origPrice={dollarAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.centDelim):"",dollarAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.centDelim):""};origAndLowestPrice={originalPrice:origPrice,lowestItem:lowestItem};break;}else{var price_obj=adobe2.ecomm.Format.getFormattedPriceObj(prices[i],countryCode.toLowerCase());if(lowestPrice==-1||lowestPrice>Number(price_obj.dollarAmtTaxExc)){lowestPrice=Number(price_obj.dollarAmtTaxExc);lowestItem=price_obj;}}}else{var price_obj=adobe2.ecomm.Format.getFormattedPriceObj(prices[i],countryCode.toLowerCase());if((price_obj!=null)&&(lowestPrice==-1||lowestPrice>Number(price_obj.dollarAmtTaxExc))){lowestPrice=Number(price_obj.dollarAmtTaxExc);lowestItem=price_obj;}}
var origPrice={dollarAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxInc:prices[i].ORIGINALPRICEWITHTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHTAX),lowestItem.centDelim):"",dollarAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.dollarDelim,lowestItem.centDelim):"",centAmtTaxExc:prices[i].ORIGINALPRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(prices[i],prices[i].ORIGINALPRICEWITHOUTTAX),lowestItem.centDelim):""}
origAndLowestPrice={originalPrice:origPrice,lowestItem:lowestItem}}
return origAndLowestPrice;};this.getPriceDisplayHTML=function(priceObj,originalPrice,taxInclude){function getDollarPriceHTML(dollarPrice,localeDelimiter){var tempValue="";for(i=0;i<dollarPrice.length;i++){tempValue=tempValue+dollarPrice[i]+localeDelimiter;}
return tempValue.substring(0,tempValue.length-1);}
var symbol=priceObj.symbol;var dPrice=priceObj.dollarAmtTaxExc;var cPrice=priceObj.centAmtTaxExc;var taxLabel=priceObj.taxLabelExc;var dOrigPrice=originalPrice.dollarAmtTaxExc;var cOrigPrice=originalPrice.centAmtTaxExc;if(taxInclude.length>0&&taxInclude=="true"){dPrice=priceObj.dollarAmtTaxInc;cPrice=priceObj.centAmtTaxInc;taxLabel=priceObj.taxLabelInc;dOrigPrice=originalPrice.dollarAmtTaxInc;cOrigPrice=originalPrice.centAmtTaxInc;}
var priceClass=PRICE_MAIN_CLASS;if(PRICE_MAX_THRESHOLD<(symbol.lenght+dPrice.length+cPrice.length)){priceClass=PRICE_SMALL_CLASS;}
if(dOrigPrice!=null&&dOrigPrice!='undefined'&&dOrigPrice!=""){var origPriceObj={"text":"<div><span class=\"TextStrikeThrough\">"+"<span class=\"CPodCurrency \">"+symbol+"</span>"+"<span class=\""+priceClass+" \">"+getDollarPriceHTML(dOrigPrice,priceObj.dollarDelim)+"</span>"+"<span>"+cOrigPrice+"</span></span></div>"}}
var tempObj={"sp":"","TXLAB":"","SYM":"<span class=\"CPodCurrency\">"+symbol+"</span>","DDDD":"<span class=\""+priceClass+"\">"+getDollarPriceHTML(dPrice,priceObj.dollarDelim)+"</span>","CC":cPrice};if(origPriceObj!=null&&origPriceObj!='undefined'){return origPriceObj.text+(priceObj.mask.replace(new RegExp("(sp|SYM|TXLAB|DDDD|CC)","gi"),function($1){return(tempObj[$1]);}))}
else{return priceObj.mask.replace(new RegExp("(sp|SYM|TXLAB|DDDD|CC)","gi"),function($1){return(tempObj[$1]);})}};return this;})(jQuery);
var downloadWindow;var newWindow;var width;var height;var options;var name;var url;function setPageTitle(title)
{window.document.title=title;}
function popVerisign()
{var urlstr="https://seal.verisign.com/splash?form_file=fdf/splash.fdf&dn=WWW.ADOBE.COM&lang=en";var optionsstr="toolbar=0,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=1";openPopUpWindow(urlstr,'540','450',optionsstr,'verisignWin');}
function openInfoWindow(urlstr,winName,features)
{openPopUpWindow(urlstr,'700','600');}
function openPopUpWindow(urlstr,w,h,optionsstr,namestr)
{if(!urlstr)return;url=urlstr;var optionstest="";optionstest=optionsstr;width=(typeof w=="undefined")?"800":w;height=(typeof h=="undefined")?"600":h;options=(optionstest=="")?"toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=yes":optionsstr;name=(typeof namestr=="undefined")?"_blank":namestr;newWindow=window.open(url,name,"width="+width+",height="+height+","+options);if(newWindow){newWindow.focus();}
else{try{$('app').handleBlockedPopup(url);}
catch(e){}}}
function mmDownload(downloadURL)
{if(adobe.hostEnv["ieV"]!=7){try{frames['download'].location.replace(downloadURL);}catch(e){document.getElementById('download').src=downloadURL;}}
else{downloadWindow=window.open(downloadURL,"_blank","directories=0,location=0,menubar=0,resizable=0,scrollbars=0,status=1,toolbar=0,width=800,height=600");}}
function setStoreCookie(cookie_name,value)
{exp_date=10*365;adobe.Cookie.set(cookie_name,value,exp_date,'/','.adobe.com');};
(function(jQ){jQ.extend({"log":function(){if(arguments.length>0){var args=(arguments.length>1)?Array.prototype.join.call(arguments," "):arguments[0];try{console.log(args);return true;}catch(e){try{opera.postError(args);return true;}catch(e){}}
return false;}}});})(jQuery);
(function(jQ){jQ.extend({createNs:function(ns)
{var o,a;a=ns.split(".");o=window[a[0]]=window[a[0]]||{};jQ.each(a.slice(1),function(i,n)
{o=o[n]=o[n]||{};});return o;},isBoolean:function(o){return typeof o==='boolean';},isDate:function(o){return this.type(o)==='date';},isNull:function(o){return o===null;},isNumber:function(o){return typeof o==='number'&&isFinite(o);},isString:function(o){return typeof o==='string';},isUndefined:function(o){return typeof o==='undefined';},isValue:function(o){var t=this.type(o);switch(t){case'number':return isFinite(o);case'null':case'undefined':return false;default:return!!(t);}},type:function(o){var TYPES={'undefined':'undefined','number':'number','boolean':'boolean','string':'string','[object Function]':'function','[object RegExp]':'regexp','[object Array]':'array','[object Date]':'date','[object Error]':'error'};return TYPES[typeof o]||TYPES[Object.prototype.toString.call(o)]||(o?'object':'null');},hasKey:function(o,k){return(k in o);},mix:function(r,s,ov,wl,mode,merge){if(!s||!r){return r||jQ;}
if(mode){switch(mode){case 1:return jQ.mix(r.prototype,s.prototype,ov,wl,0,merge);case 2:jQ.mix(r.prototype,s.prototype,ov,wl,0,merge);break;case 3:return jQ.mix(r,s.prototype,ov,wl,0,merge);case 4:return jQ.mix(r.prototype,s,ov,wl,0,merge);default:}}
var arr=merge&&jQ.isArray(r),i,l,p;if(wl&&wl.length){for(i=0,l=wl.length;i<l;++i){p=wl[i];if(p in s){if(merge&&jQ.isPlainObject(r[p],true)){jQ.mix(r[p],s[p]);}else if(!arr&&(ov||!(p in r))){r[p]=s[p];}else if(arr){r.push(s[p]);}}}}else{for(i in s){if(merge&&jQ.isPlainObject(r[i],true)){jQ.mix(r[i],s[i]);}else if(!arr&&(ov||!(i in r))){r[i]=s[i];}else if(arr){r.push(s[i]);}}
if(jQ.hasKey(jQ.browser,"msie")){var fn=s.toString;if(jQ.isFunction(fn)&&fn!=Object.prototype.toString){r.toString=fn;}}}
return r;}});})(jQuery);
(function(jQ){jQ.extend({"Array":{hash:function(k,v){var o={},l=k.length,vl=v&&v.length,i;for(i=0;i<l;i=i+1){o[k[i]]=(vl&&vl>i)?v[i]:true;}
return o;},filter:(Array.prototype.filter)?function(a,f,o){return Array.prototype.filter.call(a,f,o);}:function(a,f,o){var results=[];jQ.Array.each(a,function(item,i,a){if(f.call(o,item,i,a)){results.push(item);}});return results;},each:(Array.prototype.forEach)?function(a,f,o){Array.prototype.forEach.call(a||[],f,o||jQ);return jQ;}:function(a,f,o){var l=(a&&a.length)||0,i;for(i=0;i<l;i=i+1){f.call(o||jQ,a[i],i,a);}
return jQ;},some:(Array.prototype.some)?function(a,f,o){return Array.prototype.some.call(a,f,o);}:function(a,f,o){var l=a.length,i;for(i=0;i<l;i=i+1){if(f.call(o,a[i],i,a)){return true;}}
return false;}}});})(jQuery);
(function(jQ){jQ.extend({"UI":{setControlEnabled:function(control,enable){if(enable)
control.removeAttr("disabled");else
control.attr("disabled","disabled");}}});})(jQuery);
jQuery.createNs("adobe2.ecomm");adobe2.ecomm.Format={getFormattedPriceObj:function(pObj,locale)
{function getRawPrice(price_string)
{price_string=price_string.replace(pObj.CURRENCYSYMBOL,"").replace(pObj.TAXEXCLUSIVELABEL,"").replace(pObj.TAXINCLUSIVELABEL,"");return trimSpace(price_string);}
function getPriceDollar(rawPrice,dollar_delimitor,cent_delimitor)
{var tempvar=rawPrice.split(dollar_delimitor);if(cent_delimitor!="")
{var tempvarlast=tempvar[tempvar.length-1].split(cent_delimitor);tempvar[tempvar.length-1]=tempvarlast[0];}
return tempvar;}
function getPriceCent(rawPrice,cent_delimitor)
{var centStr="";if(cent_delimitor!="")
{var tempvar=rawPrice.split(cent_delimitor);centStr=trimSpace(tempvar[1]);}
return centStr;}
function trimSpace(str)
{return str.replace(/^\s+|\s+$/g,'');}
var tempObj;switch(locale)
{case'de_at':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'de_de':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_au':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_be':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_dk':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_fi':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_gb':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_ie':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_lu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_nl':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_no':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_nz':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_pt':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_us':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_xap':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_xeu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'es_es':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_ch':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),"'","."):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),"'","."):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:"'",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'de_ch':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),"'","."):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),"'","."):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:"'",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_fr':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),' ',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),' ',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:"&nbsp;",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'it_it':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'ja_jp':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',',''):[],centAmtTaxInc:"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',',''):[],centAmtTaxExc:"",dollarDelim:",",centDelim:"",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"DDDDspSYMspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'pt_br':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'sv_se':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),' ',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),' ',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:"&nbsp;",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_ca':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_ca':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'es_mx':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'de_lu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_lu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fr_be':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'nl_be':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'it_ch':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),"'","."):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),"'","."):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:"'",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'da_dk':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'fi_fi':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'nl_nl':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'nb_no':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'pt_pt':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'en_hk':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'zh_hk':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'en_sg':tempObj={browsePriceDisplay:"TAX_EXCLUSIVE",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),',','.'):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),'.'):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),',','.'):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),'.'):"",dollarDelim:",",centDelim:".",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMDDDDCC",priceType:pObj.PRICETYPE};return tempObj;break;case'hu_hu':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'bg_bg':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'cs_cz':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'et_ee':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'lt_lt':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'lv_lv':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'pl_pl':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'ro_ro':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'sl_si':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;case'sk_sk':tempObj={browsePriceDisplay:"BOTH",dollarAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHTAX),'.',','):[],centAmtTaxInc:pObj.PRICEWITHTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHTAX),','):"",dollarAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceDollar(getRawPrice(pObj.PRICEWITHOUTTAX),'.',','):[],centAmtTaxExc:pObj.PRICEWITHOUTTAX!=""?getPriceCent(getRawPrice(pObj.PRICEWITHOUTTAX),','):"",dollarDelim:".",centDelim:",",symbol:pObj.CURRENCYSYMBOL!=""?trimSpace(pObj.CURRENCYSYMBOL):"",taxLabelExc:pObj.TAXEXCLUSIVELABEL!=""?pObj.TAXEXCLUSIVELABEL:"",taxLabelInc:pObj.TAXINCLUSIVELABEL!=""?pObj.TAXINCLUSIVELABEL:"",mask:"SYMspDDDDCCspTXLAB",priceType:pObj.PRICETYPE};return tempObj;break;}},getPriceHTML:function(pObjforHTML,locale)
{}};
function saveRegionCookie(region){cart.setStoreRegion(region);}
function saveUbiCartCookie(){var cookie=new adobe.http.Cookie("UBICART",window.location.href.replace(/index_.\.html/,""));cookie.setExpires(86400002*365);cookie.setPath("/");cookie.setDomain(".adobe.com");window.document.cookie=cookie.toString();}
var s_products='';var s_eVar45='';var s_events='';var s_eVar2='';var s_eVar34='';var analyticsEventInterval=null;var omnitureVarsQueue=new Array();function reportAnalyticsEvent(data)
{if(!omnitureVarsQueue)
omnitureVarsQueue=new Array();omnitureVarsQueue[omnitureVarsQueue.length]=data;if(analyticsEventInterval==null)
{analyticsEventInterval=setInterval(sendQueuedAnalyticsEvents,200);}}
function sendQueuedAnalyticsEvents()
{if(omnitureVarsQueue&&omnitureVarsQueue.length>=1)
{var data=omnitureVarsQueue[0];omnitureVarsQueue=omnitureVarsQueue.slice(1);for(var prop in data)
{this[prop]=data[prop];if(this.s&&data[prop]=="")
{this.s[prop.substring(2,prop.length)]="";}}
var ns=s_account;this.s['eVar45']="";s_eVar45="";if(s_eVar34=="none")
{this.s['eVar34']="";s_eVar34="";}
void(s_gs(ns));}
if(omnitureVarsQueue.length==0)
{clearInterval(analyticsEventInterval);analyticsEventInterval=null;}};
$(document).ready(function()
{var OmUrl=window.location.toString();OmUrl=unescape(OmUrl.replace(/_sl_/g,"/"));$('.QuickJump a').click(function()
{OmObject=new Object();OmObject.pageName=OmUrl.toLowerCase()+" JUMP: "+$(this).attr('href');s.t(OmObject);});$('.jcarousel-next').click(function()
{OpenAjax.hub.publish("carousel.next.click");});$('.jcarousel-prev').click(function()
{OpenAjax.hub.publish("carousel.previous.click");});function OmSocialMedia(OmSMType)
{var s=s_gi(s_account),OmArea=$('meta[name=area]').attr("content");s.linkTrackVars="prop36";switch(OmArea)
{case'devnet':s.prop36=s_prop36="ADC: Share "+OmSMType+": "+window.location.pathname;s.tl(this,"o","ADC: Share "+OmSMType+": "+window.location.pathname);break;case'products':s.prop36="Share: "+OmSMType+": "+window.location.pathname;s.tl(this,"o","Social Plugin Share: "+OmSMType);break;default:s.prop36="Share: "+OmSMType+": "+window.location.pathname;s.tl(this,"o","Social Plugin Share: "+OmSMType);break;}}
$('.Facebook-button').click(function()
{OmSocialMedia("Facebook");});$('.Twitter-button').click(function()
{OmSocialMedia("Twitter");});$('.LinkedIn-button').click(function()
{OmSocialMedia("LinkedIn");});});