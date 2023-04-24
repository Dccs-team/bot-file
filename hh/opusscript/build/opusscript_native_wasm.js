
var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Module) {
  Module = Module || {};


var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa,ba;g.ready=new Promise(function(b,a){aa=b;ba=a});var r={},t;for(t in g)g.hasOwnProperty(t)&&(r[t]=g[t]);var ca=!1,v=!1,ea=!1,fa=!1;ca="object"===typeof window;v="function"===typeof importScripts;ea="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;fa=!ca&&!ea&&!v;var w="",ha,y,ia,ja;
if(ea)w=v?require("path").dirname(w)+"/":__dirname+"/",ha=function(b,a){ia||(ia=require("fs"));ja||(ja=require("path"));b=ja.normalize(b);return ia.readFileSync(b,a?null:"utf8")},y=function(b){b=ha(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),g.inspect=function(){return"[Emscripten Module object]"};else if(fa)"undefined"!=typeof read&&(ha=function(b){return read(b)}),y=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));
b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ca||v)v?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src),_scriptDir&&(w=_scriptDir),0!==w.indexOf("blob:")?w=w.substr(0,w.lastIndexOf("/")+1):w="",ha=function(b){var a=new XMLHttpRequest;a.open("GET",b,!1);a.send(null);
return a.responseText},v&&(y=function(b){var a=new XMLHttpRequest;a.open("GET",b,!1);a.responseType="arraybuffer";a.send(null);return new Uint8Array(a.response)});var ka=g.print||console.log.bind(console),z=g.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(g[t]=r[t]);r=null;var la;g.wasmBinary&&(la=g.wasmBinary);var noExitRuntime;g.noExitRuntime&&(noExitRuntime=g.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var ma,na=!1;
function assert(b,a){b||A("Assertion failed: "+a)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(b,a,c){var d=a+c;for(c=a;b[c]&&!(c>=d);)++c;if(16<c-a&&b.subarray&&oa)return oa.decode(b.subarray(a,c));for(d="";a<c;){var e=b[a++];if(e&128){var f=b[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var l=b[a++]&63;e=224==(e&240)?(e&15)<<12|f<<6|l:(e&7)<<18|f<<12|l<<6|b[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}
function qa(b,a,c){var d=B;if(0<c){c=a+c-1;for(var e=0;e<b.length;++e){var f=b.charCodeAt(e);if(55296<=f&&57343>=f){var l=b.charCodeAt(++e);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(a>=c)break;d[a++]=f}else{if(2047>=f){if(a+1>=c)break;d[a++]=192|f>>6}else{if(65535>=f){if(a+2>=c)break;d[a++]=224|f>>12}else{if(a+3>=c)break;d[a++]=240|f>>18;d[a++]=128|f>>12&63}d[a++]=128|f>>6&63}d[a++]=128|f&63}}d[a]=0}}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function ta(b,a){var c=b>>1;for(var d=c+a/2;!(c>=d)&&ua[c];)++c;c<<=1;if(32<c-b&&sa)return sa.decode(B.subarray(b,c));c="";for(d=0;!(d>=a/2);++d){var e=C[b+2*d>>1];if(0==e)break;c+=String.fromCharCode(e)}return c}function va(b,a,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=a;c=c<2*b.length?c/2:b.length;for(var e=0;e<c;++e)C[a>>1]=b.charCodeAt(e),a+=2;C[a>>1]=0;return a-d}function wa(b){return 2*b.length}
function xa(b,a){for(var c=0,d="";!(c>=a/4);){var e=D[b+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function ya(b,a,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=a;c=d+c-4;for(var e=0;e<b.length;++e){var f=b.charCodeAt(e);if(55296<=f&&57343>=f){var l=b.charCodeAt(++e);f=65536+((f&1023)<<10)|l&1023}D[a>>2]=f;a+=4;if(a+4>c)break}D[a>>2]=0;return a-d}
function za(b){for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);55296<=d&&57343>=d&&++c;a+=4}return a}var Aa,E,B,C,ua,D,F,Ba,Ca;function Da(){var b=ma.buffer;Aa=b;g.HEAP8=E=new Int8Array(b);g.HEAP16=C=new Int16Array(b);g.HEAP32=D=new Int32Array(b);g.HEAPU8=B=new Uint8Array(b);g.HEAPU16=ua=new Uint16Array(b);g.HEAPU32=F=new Uint32Array(b);g.HEAPF32=Ba=new Float32Array(b);g.HEAPF64=Ca=new Float64Array(b);g.HEAP64=new BigInt64Array(b)}var Ea,Fa=[],Ga=[],Ha=[],Ia=[];Ga.push({ba:function(){Ja()}});
function Ka(){var b=g.preRun.shift();Fa.unshift(b)}var G=0,La=null,H=null;g.preloadedImages={};g.preloadedAudios={};function A(b){if(g.onAbort)g.onAbort(b);z(b);na=!0;b=new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");ba(b);throw b;}var I="opusscript_native_wasm.wasm";if(String.prototype.startsWith?!I.startsWith("data:application/octet-stream;base64,"):0!==I.indexOf("data:application/octet-stream;base64,")){var Ma=I;I=g.locateFile?g.locateFile(Ma,w):w+Ma}
function Na(b){var a=I;try{a:{try{if(a==I&&la){var c=new Uint8Array(la);break a}if(y){c=y(a);break a}throw"sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";}catch(f){A(f)}c=void 0}var d=new WebAssembly.Module(c);var e=new WebAssembly.Instance(d,b)}catch(f){throw b=f.toString(),z("failed to compile wasm module: "+b),(0<=b.indexOf("imported Memory")||0<=b.indexOf("memory import"))&&z("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."),
f;}return[e,d]}var J,Pa;function Qa(b){for(;0<b.length;){var a=b.shift();if("function"==typeof a)a(g);else{var c=a.ba;"number"===typeof c?void 0===a.W?Ea.get(c)():Ea.get(c)(a.W):c(void 0===a.W?null:a.W)}}}function Ra(b){this.D=b-16;this.qa=function(a){D[this.D+8>>2]=a};this.na=function(a){D[this.D+0>>2]=a};this.oa=function(){D[this.D+4>>2]=0};this.ma=function(){E[this.D+12>>0]=0};this.pa=function(){E[this.D+13>>0]=0};this.ga=function(a,c){this.qa(a);this.na(c);this.oa();this.ma();this.pa()}}
var Sa=0;function Ta(b){switch(b){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+b);}}var Ua=void 0;function K(b){for(var a="";B[b];)a+=Ua[B[b++]];return a}var L={},M={},Va={};function Wa(b){if(void 0===b)return"_unknown";b=b.replace(/[^a-zA-Z0-9_]/g,"$");var a=b.charCodeAt(0);return 48<=a&&57>=a?"_"+b:b}
function Xa(b,a){b=Wa(b);return(new Function("body","return function "+b+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(a)}function Ya(b){var a=Error,c=Xa(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var N=void 0;function O(b){throw new N(b);}var Za=void 0;function $a(b){throw new Za(b);}function P(b,a,c){function d(h){h=c(h);h.length!==b.length&&$a("Mismatched type converter count");for(var n=0;n<b.length;++n)Q(b[n],h[n])}b.forEach(function(h){Va[h]=a});var e=Array(a.length),f=[],l=0;a.forEach(function(h,n){M.hasOwnProperty(h)?e[n]=M[h]:(f.push(h),L.hasOwnProperty(h)||(L[h]=[]),L[h].push(function(){e[n]=M[h];++l;l===f.length&&d(e)}))});0===f.length&&d(e)}
function Q(b,a,c){c=c||{};if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=a.name;b||O('type "'+d+'" must have a positive integer typeid pointer');if(M.hasOwnProperty(b)){if(c.fa)return;O("Cannot register type '"+d+"' twice")}M[b]=a;delete Va[b];L.hasOwnProperty(b)&&(a=L[b],delete L[b],a.forEach(function(e){e()}))}function ab(b){return{count:b.count,P:b.P,S:b.S,D:b.D,G:b.G,I:b.I,J:b.J}}
function bb(b){O(b.C.G.F.name+" instance already deleted")}var cb=!1;function db(){}function eb(b){--b.count.value;0===b.count.value&&(b.I?b.J.N(b.I):b.G.F.N(b.D))}function R(b){if("undefined"===typeof FinalizationGroup)return R=function(a){return a},b;cb=new FinalizationGroup(function(a){for(var c=a.next();!c.done;c=a.next())c=c.value,c.D?eb(c):console.warn("object already deleted: "+c.D)});R=function(a){cb.register(a,a.C,a.C);return a};db=function(a){cb.unregister(a.C)};return R(b)}
var fb=void 0,gb=[];function hb(){for(;gb.length;){var b=gb.pop();b.C.P=!1;b["delete"]()}}function S(){}var ib={};function jb(b,a,c){if(void 0===b[a].H){var d=b[a];b[a]=function(){b[a].H.hasOwnProperty(arguments.length)||O("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+b[a].H+")!");return b[a].H[arguments.length].apply(this,arguments)};b[a].H=[];b[a].H[d.O]=d}}
function kb(b,a){g.hasOwnProperty(b)?(O("Cannot register public name '"+b+"' twice"),jb(g,b,b),g.hasOwnProperty(void 0)&&O("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),g[b].H[void 0]=a):g[b]=a}function lb(b,a,c,d,e,f,l,h){this.name=b;this.constructor=a;this.R=c;this.N=d;this.K=e;this.da=f;this.T=l;this.aa=h;this.ia=[]}
function ob(b,a,c){for(;a!==c;)a.T||O("Expected null or instance of "+c.name+", got an instance of "+a.name),b=a.T(b),a=a.K;return b}function pb(b,a){if(null===a)return this.X&&O("null is not a valid "+this.name),0;a.C||O('Cannot pass "'+U(a)+'" as a '+this.name);a.C.D||O("Cannot pass deleted object as a pointer of type "+this.name);return ob(a.C.D,a.C.G.F,this.F)}
function qb(b,a){if(null===a){this.X&&O("null is not a valid "+this.name);if(this.V){var c=this.ja();null!==b&&b.push(this.N,c);return c}return 0}a.C||O('Cannot pass "'+U(a)+'" as a '+this.name);a.C.D||O("Cannot pass deleted object as a pointer of type "+this.name);!this.U&&a.C.G.U&&O("Cannot convert argument of type "+(a.C.J?a.C.J.name:a.C.G.name)+" to parameter type "+this.name);c=ob(a.C.D,a.C.G.F,this.F);if(this.V)switch(void 0===a.C.I&&O("Passing raw pointer to smart pointer is illegal"),this.ra){case 0:a.C.J===
this?c=a.C.I:O("Cannot convert argument of type "+(a.C.J?a.C.J.name:a.C.G.name)+" to parameter type "+this.name);break;case 1:c=a.C.I;break;case 2:if(a.C.J===this)c=a.C.I;else{var d=a.clone();c=this.ka(c,rb(function(){d["delete"]()}));null!==b&&b.push(this.N,c)}break;default:O("Unsupporting sharing policy")}return c}
function sb(b,a){if(null===a)return this.X&&O("null is not a valid "+this.name),0;a.C||O('Cannot pass "'+U(a)+'" as a '+this.name);a.C.D||O("Cannot pass deleted object as a pointer of type "+this.name);a.C.G.U&&O("Cannot convert argument of type "+a.C.G.name+" to parameter type "+this.name);return ob(a.C.D,a.C.G.F,this.F)}function tb(b){return this.fromWireType(F[b>>2])}function ub(b,a,c){if(a===c)return b;if(void 0===c.K)return null;b=ub(b,a,c.K);return null===b?null:c.aa(b)}var vb={};
function wb(b,a){for(void 0===a&&O("ptr should not be undefined");b.K;)a=b.T(a),b=b.K;return vb[a]}function xb(b,a){a.G&&a.D||$a("makeClassHandle requires ptr and ptrType");!!a.J!==!!a.I&&$a("Both smartPtrType and smartPtr must be specified");a.count={value:1};return R(Object.create(b,{C:{value:a}}))}function V(b,a,c,d){this.name=b;this.F=a;this.X=c;this.U=d;this.V=!1;this.N=this.ka=this.ja=this.Z=this.ra=this.ha=void 0;void 0!==a.K?this.toWireType=qb:(this.toWireType=d?pb:sb,this.L=null)}
function yb(b,a){g.hasOwnProperty(b)||$a("Replacing nonexistant public symbol");g[b]=a;g[b].O=void 0}function W(b,a){b=K(b);var c=Ea.get(a);"function"!==typeof c&&O("unknown function pointer with signature "+b+": "+a);return c}var zb=void 0;function Ab(b){b=Bb(b);var a=K(b);X(b);return a}function Cb(b,a){function c(f){e[f]||M[f]||(Va[f]?Va[f].forEach(c):(d.push(f),e[f]=!0))}var d=[],e={};a.forEach(c);throw new zb(b+": "+d.map(Ab).join([", "]));}
function Db(b){var a=Function;if(!(a instanceof Function))throw new TypeError("new_ called with constructor type "+typeof a+" which is not a function");var c=Xa(a.name||"unknownFunctionName",function(){});c.prototype=a.prototype;c=new c;b=a.apply(c,b);return b instanceof Object?b:c}function Eb(b){for(;b.length;){var a=b.pop();b.pop()(a)}}
function Fb(b,a,c,d,e){var f=a.length;2>f&&O("argTypes array size mismatch! Must at least get return value and 'this' types!");var l=null!==a[1]&&null!==c,h=!1;for(c=1;c<a.length;++c)if(null!==a[c]&&void 0===a[c].L){h=!0;break}var n="void"!==a[0].name,k="",m="";for(c=0;c<f-2;++c)k+=(0!==c?", ":"")+"arg"+c,m+=(0!==c?", ":"")+"arg"+c+"Wired";b="return function "+Wa(b)+"("+k+") {\nif (arguments.length !== "+(f-2)+") {\nthrowBindingError('function "+b+" called with ' + arguments.length + ' arguments, expected "+
(f-2)+" args!');\n}\n";h&&(b+="var destructors = [];\n");var p=h?"destructors":"null";k="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[O,d,e,Eb,a[0],a[1]];l&&(b+="var thisWired = classParam.toWireType("+p+", this);\n");for(c=0;c<f-2;++c)b+="var arg"+c+"Wired = argType"+c+".toWireType("+p+", arg"+c+"); // "+a[c+2].name+"\n",k.push("argType"+c),d.push(a[c+2]);l&&(m="thisWired"+(0<m.length?", ":"")+m);b+=(n?"var rv = ":"")+"invoker(fn"+(0<m.length?", ":"")+m+");\n";if(h)b+=
"runDestructors(destructors);\n";else for(c=l?1:2;c<a.length;++c)f=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==a[c].L&&(b+=f+"_dtor("+f+"); // "+a[c].name+"\n",k.push(f+"_dtor"),d.push(a[c].L));n&&(b+="var ret = retType.fromWireType(rv);\nreturn ret;\n");k.push(b+"}\n");return Db(k).apply(null,d)}function Gb(b,a){for(var c=[],d=0;d<b;d++)c.push(D[(a>>2)+d]);return c}var Hb=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function rb(b){switch(b){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var a=Hb.length?Hb.pop():Y.length;Y[a]={la:1,value:b};return a}}function U(b){if(null===b)return"null";var a=typeof b;return"object"===a||"array"===a||"function"===a?b.toString():""+b}function Ib(b,a){switch(a){case 2:return function(c){return this.fromWireType(Ba[c>>2])};case 3:return function(c){return this.fromWireType(Ca[c>>3])};default:throw new TypeError("Unknown float type: "+b);}}
function Jb(b,a,c){switch(a){case 0:return c?function(d){return E[d]}:function(d){return B[d]};case 1:return c?function(d){return C[d>>1]}:function(d){return ua[d>>1]};case 2:return c?function(d){return D[d>>2]}:function(d){return F[d>>2]};default:throw new TypeError("Unknown integer type: "+b);}}for(var Kb=[null,[],[]],Lb=Array(256),Mb=0;256>Mb;++Mb)Lb[Mb]=String.fromCharCode(Mb);Ua=Lb;N=g.BindingError=Ya("BindingError");Za=g.InternalError=Ya("InternalError");
S.prototype.isAliasOf=function(b){if(!(this instanceof S&&b instanceof S))return!1;var a=this.C.G.F,c=this.C.D,d=b.C.G.F;for(b=b.C.D;a.K;)c=a.T(c),a=a.K;for(;d.K;)b=d.T(b),d=d.K;return a===d&&c===b};S.prototype.clone=function(){this.C.D||bb(this);if(this.C.S)return this.C.count.value+=1,this;var b=R(Object.create(Object.getPrototypeOf(this),{C:{value:ab(this.C)}}));b.C.count.value+=1;b.C.P=!1;return b};
S.prototype["delete"]=function(){this.C.D||bb(this);this.C.P&&!this.C.S&&O("Object already scheduled for deletion");db(this);eb(this.C);this.C.S||(this.C.I=void 0,this.C.D=void 0)};S.prototype.isDeleted=function(){return!this.C.D};S.prototype.deleteLater=function(){this.C.D||bb(this);this.C.P&&!this.C.S&&O("Object already scheduled for deletion");gb.push(this);1===gb.length&&fb&&fb(hb);this.C.P=!0;return this};V.prototype.ea=function(b){this.Z&&(b=this.Z(b));return b};
V.prototype.Y=function(b){this.N&&this.N(b)};V.prototype.argPackAdvance=8;V.prototype.readValueFromPointer=tb;V.prototype.deleteObject=function(b){if(null!==b)b["delete"]()};
V.prototype.fromWireType=function(b){function a(){return this.V?xb(this.F.R,{G:this.ha,D:c,J:this,I:b}):xb(this.F.R,{G:this,D:b})}var c=this.ea(b);if(!c)return this.Y(b),null;var d=wb(this.F,c);if(void 0!==d){if(0===d.C.count.value)return d.C.D=c,d.C.I=b,d.clone();d=d.clone();this.Y(b);return d}d=this.F.da(c);d=ib[d];if(!d)return a.call(this);d=this.U?d.$:d.pointerType;var e=ub(c,this.F,d.F);return null===e?a.call(this):this.V?xb(d.F.R,{G:d,D:e,J:this,I:b}):xb(d.F.R,{G:d,D:e})};
g.getInheritedInstanceCount=function(){return Object.keys(vb).length};g.getLiveInheritedInstances=function(){var b=[],a;for(a in vb)vb.hasOwnProperty(a)&&b.push(vb[a]);return b};g.flushPendingDeletes=hb;g.setDelayFunction=function(b){fb=b;gb.length&&fb&&fb(hb)};zb=g.UnboundTypeError=Ya("UnboundTypeError");g.count_emval_handles=function(){for(var b=0,a=5;a<Y.length;++a)void 0!==Y[a]&&++b;return b};g.get_first_emval=function(){for(var b=5;b<Y.length;++b)if(void 0!==Y[b])return Y[b];return null};
var Ob={i:function(b){return Nb(b+16)+16},h:function(b,a,c){(new Ra(b)).ga(a,c);Sa++;throw b;},k:function(b,a,c,d,e){var f=Ta(c);a=K(a);Q(b,{name:a,fromWireType:function(l){return!!l},toWireType:function(l,h){return h?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var h=E;else if(2===c)h=C;else if(4===c)h=D;else throw new TypeError("Unknown boolean type size: "+a);return this.fromWireType(h[l>>f])},L:null})},t:function(b,a,c,d,e,f,l,h,n,k,m,p,q){m=K(m);f=W(e,f);h&&(h=W(l,h));k&&(k=
W(n,k));q=W(p,q);var x=Wa(m);kb(x,function(){Cb("Cannot construct "+m+" due to unbound types",[d])});P([b,a,c],d?[d]:[],function(u){u=u[0];if(d){var ra=u.F;var da=ra.R}else da=S.prototype;u=Xa(x,function(){if(Object.getPrototypeOf(this)!==Oa)throw new N("Use 'new' to construct "+m);if(void 0===T.M)throw new N(m+" has no accessible constructor");var mb=T.M[arguments.length];if(void 0===mb)throw new N("Tried to invoke ctor of "+m+" with invalid number of parameters ("+arguments.length+") - expected ("+
Object.keys(T.M).toString()+") parameters instead!");return mb.apply(this,arguments)});var Oa=Object.create(da,{constructor:{value:u}});u.prototype=Oa;var T=new lb(m,u,Oa,q,ra,f,h,k);ra=new V(m,T,!0,!1);da=new V(m+"*",T,!1,!1);var nb=new V(m+" const*",T,!1,!0);ib[b]={pointerType:da,$:nb};yb(x,u);return[ra,da,nb]})},m:function(b,a,c,d,e,f,l){var h=Gb(c,d);a=K(a);f=W(e,f);P([],[b],function(n){function k(){Cb("Cannot call "+m+" due to unbound types",h)}n=n[0];var m=n.name+"."+a,p=n.F.constructor;void 0===
p[a]?(k.O=c-1,p[a]=k):(jb(p,a,m),p[a].H[c-1]=k);P([],h,function(q){q=[q[0],null].concat(q.slice(1));q=Fb(m,q,null,f,l);void 0===p[a].H?(q.O=c-1,p[a]=q):p[a].H[c-1]=q;return[]});return[]})},s:function(b,a,c,d,e,f){assert(0<a);var l=Gb(a,c);e=W(d,e);var h=[f],n=[];P([],[b],function(k){k=k[0];var m="constructor "+k.name;void 0===k.F.M&&(k.F.M=[]);if(void 0!==k.F.M[a-1])throw new N("Cannot register multiple constructors with identical number of parameters ("+(a-1)+") for class '"+k.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");
k.F.M[a-1]=function(){Cb("Cannot construct "+k.name+" due to unbound types",l)};P([],l,function(p){k.F.M[a-1]=function(){arguments.length!==a-1&&O(m+" called with "+arguments.length+" arguments, expected "+(a-1));n.length=0;h.length=a;for(var q=1;q<a;++q)h[q]=p[q].toWireType(n,arguments[q-1]);q=e.apply(null,h);Eb(n);return p[0].fromWireType(q)};return[]});return[]})},d:function(b,a,c,d,e,f,l,h){var n=Gb(c,d);a=K(a);f=W(e,f);P([],[b],function(k){function m(){Cb("Cannot call "+p+" due to unbound types",
n)}k=k[0];var p=k.name+"."+a;h&&k.F.ia.push(a);var q=k.F.R,x=q[a];void 0===x||void 0===x.H&&x.className!==k.name&&x.O===c-2?(m.O=c-2,m.className=k.name,q[a]=m):(jb(q,a,p),q[a].H[c-2]=m);P([],n,function(u){u=Fb(p,u,k,f,l);void 0===q[a].H?(u.O=c-2,q[a]=u):q[a].H[c-2]=u;return[]});return[]})},r:function(b,a){a=K(a);Q(b,{name:a,fromWireType:function(c){var d=Y[c].value;4<c&&0===--Y[c].la&&(Y[c]=void 0,Hb.push(c));return d},toWireType:function(c,d){return rb(d)},argPackAdvance:8,readValueFromPointer:tb,
L:null})},j:function(b,a,c){c=Ta(c);a=K(a);Q(b,{name:a,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+U(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Ib(a,c),L:null})},b:function(b,a,c,d,e){function f(k){return k}a=K(a);-1===e&&(e=4294967295);var l=Ta(c);if(0===d){var h=32-8*c;f=function(k){return k<<h>>>h}}var n=-1!=a.indexOf("unsigned");Q(b,{name:a,fromWireType:f,toWireType:function(k,
m){if("number"!==typeof m&&"boolean"!==typeof m)throw new TypeError('Cannot convert "'+U(m)+'" to '+this.name);if(m<d||m>e)throw new TypeError('Passing a number "'+U(m)+'" from JS side to C/C++ side to an argument of type "'+a+'", which is outside the valid range ['+d+", "+e+"]!");return n?m>>>0:m|0},argPackAdvance:8,readValueFromPointer:Jb(a,l,0!==d),L:null})},a:function(b,a,c){function d(f){f>>=2;var l=F;return new e(Aa,l[f+1],l[f])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,
Uint32Array,Float32Array,Float64Array][a];c=K(c);Q(b,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{fa:!0})},f:function(b,a){a=K(a);var c="std::string"===a;Q(b,{name:a,fromWireType:function(d){var e=F[d>>2];if(c)for(var f=d+4,l=0;l<=e;++l){var h=d+4+l;if(l==e||0==B[h]){f=f?pa(B,f,h-f):"";if(void 0===n)var n=f;else n+=String.fromCharCode(0),n+=f;f=h+1}}else{n=Array(e);for(l=0;l<e;++l)n[l]=String.fromCharCode(B[d+4+l]);n=n.join("")}X(d);return n},toWireType:function(d,e){e instanceof
ArrayBuffer&&(e=new Uint8Array(e));var f="string"===typeof e;f||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||O("Cannot pass non-string to std::string");var l=(c&&f?function(){for(var k=0,m=0;m<e.length;++m){var p=e.charCodeAt(m);55296<=p&&57343>=p&&(p=65536+((p&1023)<<10)|e.charCodeAt(++m)&1023);127>=p?++k:k=2047>=p?k+2:65535>=p?k+3:k+4}return k}:function(){return e.length})(),h=Nb(4+l+1);F[h>>2]=l;if(c&&f)qa(e,h+4,l+1);else if(f)for(f=0;f<l;++f){var n=e.charCodeAt(f);
255<n&&(X(h),O("String has UTF-16 code units that do not fit in 8 bits"));B[h+4+f]=n}else for(f=0;f<l;++f)B[h+4+f]=e[f];null!==d&&d.push(X,h);return h},argPackAdvance:8,readValueFromPointer:tb,L:function(d){X(d)}})},e:function(b,a,c){c=K(c);if(2===a){var d=ta;var e=va;var f=wa;var l=function(){return ua};var h=1}else 4===a&&(d=xa,e=ya,f=za,l=function(){return F},h=2);Q(b,{name:c,fromWireType:function(n){for(var k=F[n>>2],m=l(),p,q=n+4,x=0;x<=k;++x){var u=n+4+x*a;if(x==k||0==m[u>>h])q=d(q,u-q),void 0===
p?p=q:(p+=String.fromCharCode(0),p+=q),q=u+a}X(n);return p},toWireType:function(n,k){"string"!==typeof k&&O("Cannot pass non-string to C++ string type "+c);var m=f(k),p=Nb(4+m+a);F[p>>2]=m>>h;e(k,p+4,m+a);null!==n&&n.push(X,p);return p},argPackAdvance:8,readValueFromPointer:tb,L:function(n){X(n)}})},l:function(b,a){a=K(a);Q(b,{sa:!0,name:a,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},g:function(){A()},n:function(b,a,c){B.copyWithin(b,a,a+c)},c:function(b){b>>>=0;var a=B.length;
if(2147483648<b)return!1;for(var c=1;4>=c;c*=2){var d=a*(1+.2/c);d=Math.min(d,b+100663296);d=Math.max(16777216,b,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-Aa.byteLength+65535>>>16);Da();var e=1;break a}catch(f){}e=void 0}if(e)return!0}return!1},p:function(){return 0},q:function(){},o:function(b,a,c,d){for(var e=0,f=0;f<c;f++){for(var l=D[a+8*f>>2],h=D[a+(8*f+4)>>2],n=0;n<h;n++){var k=B[l+n],m=Kb[b];0===k||10===k?((1===b?ka:z)(pa(m,0)),m.length=0):m.push(k)}e+=h}D[d>>2]=
e;return 0}},Z=function(){function b(c){g.asm=c.exports;ma=g.asm.u;Da();Ea=g.asm.z;G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==La&&(clearInterval(La),La=null),H&&(c=H,H=null,c()))}var a={a:Ob};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(a,b)}catch(c){return z("Module.instantiateWasm callback failed with error: "+c),!1}a=Na(a);b(a[0],a[1]);return g.asm}(),Ja=g.___wasm_call_ctors=Z.v;g._opus_strerror=Z.w;
var Nb=g._malloc=Z.x,X=g._free=Z.y,Bb=g.___getTypeName=Z.A;g.___embind_register_native_and_builtin_types=Z.B;
g.setValue=function(b,a,c){c=c||"i8";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":E[b>>0]=a;break;case "i8":E[b>>0]=a;break;case "i16":C[b>>1]=a;break;case "i32":D[b>>2]=a;break;case "i64":Pa=[a>>>0,(J=a,1<=+Math.abs(J)?0<J?(Math.min(+Math.floor(J/4294967296),4294967295)|0)>>>0:~~+Math.ceil((J-+(~~J>>>0))/4294967296)>>>0:0)];D[b>>2]=Pa[0];D[b+4>>2]=Pa[1];break;case "float":Ba[b>>2]=a;break;case "double":Ca[b>>3]=a;break;default:A("invalid type for setValue: "+c)}};
g.getValue=function(b,a){a=a||"i8";"*"===a.charAt(a.length-1)&&(a="i32");switch(a){case "i1":return E[b>>0];case "i8":return E[b>>0];case "i16":return C[b>>1];case "i32":return D[b>>2];case "i64":return D[b>>2];case "float":return Ba[b>>2];case "double":return Ca[b>>3];default:A("invalid type for getValue: "+a)}return null};var Pb;H=function Qb(){Pb||Rb();Pb||(H=Qb)};
function Rb(){function b(){if(!Pb&&(Pb=!0,g.calledRun=!0,!na)){Qa(Ga);Qa(Ha);aa(g);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var a=g.postRun.shift();Ia.unshift(a)}Qa(Ia)}}if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ka();Qa(Fa);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}
g.run=Rb;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();noExitRuntime=!0;Rb();


  return Module
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Module;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Module; });
else if (typeof exports === 'object')
  exports["Module"] = Module;
