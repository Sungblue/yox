!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Yox=e()}(this,function(){"use strict";var t=!0,e=!1,n=null,r=void 0,i="component",o="transition",u="function",c="absoluteKeypath",a="undefined"!=typeof window?window:r,f="undefined"!=typeof document?document:r;function s(){}var p={},v=[],d="";function h(t){return t!==r}var l=Object.prototype.toString;function m(t,e){return"numeric"===e?w(t):l.call(t).toLowerCase()==="[object "+e+"]"}function y(t){return typeof t===u}function g(t){return Array.isArray(t)}function x(t){return t!==n&&"object"==typeof t}function b(t){return"string"==typeof t}function $(t){return"number"==typeof t}function k(t){return"boolean"==typeof t}function w(t){return $(t)||b(t)&&!isNaN(parseFloat(t))&&isFinite(t)}var C={is:m,func:y,array:g,object:x,string:b,number:$,boolean:k,numeric:w};function T(t,e,n){if(y(t))return g(n)?t.apply(e,n):h(e)?t.call(e,n):h(n)?t(n):t()}var E=function(t,e){this.type=t,this.originalEvent=e};function A(t,n,r){var i=t.length;if(i)if(r)for(var o=i-1;o>=0&&n(t[o],o,t)!==e;o--);else for(var u=0;u<i&&n(t[u],u,t)!==e;u++);}function P(t,e){return t.join(e)}function S(t,e){t[t.length]=e}function L(t,e){t.unshift(e)}function N(t,e,n){g(e)?A(e,function(e){n(t,e)}):n(t,e)}function O(t,e){N(t,e,S)}function j(t,e){N(t,e,L)}function q(t){return g(t)?t:T([].slice,t)}function z(t,e,n){var r={};return A(t,function(t){r[e?t[e]:t]=n||t}),r}function K(t,n,r){var i=-1;return A(t,function(t,o){if(r===e?t==n:t===n)return i=o,e}),i}function M(t,e,n){return K(t,e,n)>=0}function I(t){var e=t.length;if(e>0)return t[e-1]}function D(t){return t.pop()}function U(n,r,i){var o=0;return A(n,function(t,u){(i===e?t==r:t===r)&&(n.splice(u,1),o++)},t),o}function Y(t){return!g(t)||!t.length}E.prototype.preventDefault=function(){if(!this.isPrevented){var e=this.originalEvent;e&&e.preventDefault(),this.isPrevented=t}return this},E.prototype.stopPropagation=function(){if(!this.isStoped){var e=this.originalEvent;e&&e.stopPropagation(),this.isStoped=t}return this},E.prototype.prevent=function(){return this.preventDefault()},E.prototype.stop=function(){return this.stopPropagation()};var B={each:A,join:P,push:O,unshift:j,toArray:q,toObject:z,indexOf:K,has:M,last:I,pop:D,remove:U,falsy:Y},F=/-([a-z])/gi,H=/\B([A-Z])/g,W={},G={};function J(t,e,n){return $(n)?e===n?d:t.slice(e,n):t.slice(e)}function R(t,e,n){return t.indexOf(e,h(n)?n:0)}function Z(t,e,n){return t.lastIndexOf(e,h(n)?n:t.length)}function _(t,e){return R(t,e)>=0}function Q(t,e){return 0===R(t,e)}function V(t,e){return t.charCodeAt(e||0)}function X(t){return!b(t)||!t.length}var tt={camelize:function(t){return W[t]||(W[t]=t.replace(F,function(t,e){return e.toUpperCase()})),W[t]},hyphenate:function(t){return G[t]||(G[t]=t.replace(H,function(t,e){return"-"+e.toLowerCase()})),G[t]},trim:function(t){return X(t)?d:t.trim()},slice:J,indexOf:R,lastIndexOf:Z,has:_,startsWith:Q,endsWith:function(t,e){var n=t.length-e.length;return n>=0&&Z(t,e)===n},charAt:function(t,e){return t.charAt(e||0)},codeAt:V,falsy:X};function et(t,e){return e===r&&(e=d),t!=n&&t.toString?t.toString():e}var nt=".",rt={};function it(t,e){return t===e?e.length:Q(t,e+=nt)?e.length:-1}function ot(n,r){if(X(n))r(n,t);else for(var i=0,o=0;t;){if(!((o=R(n,nt,i))>0)){r(J(n,i),t);break}if(r(J(n,i,o),e)===e)break;i=o+1}}function ut(t){return b(t)?t:$(t)?et(t):d}function ct(t,e){return t=ut(t),e=ut(e),t===d?e:e!==d?t+nt+e:t}function at(t){return _(t,"*")}function ft(t,e){var n=rt[e];n||(n=e.replace(/\./g,"\\.").replace(/\*\*/g,"([.\\w]+?)").replace(/\*/g,"(\\w+)"),n=rt[e]=new RegExp("^"+n+"$"));var r=t.match(n);if(r)return r[1]}function st(t){return Object.keys(t)}function pt(t){return!x(t)||g(t)||!st(t).length}function vt(t,e){return t.length-e.length}function dt(t,e){return e.length-t.length}function ht(t,e){return st(t).sort(e?dt:vt)}function lt(t,n){for(var r in t)if(n(t[r],r)===e)break}function mt(t,e){return h(t[e])||t.hasOwnProperty(e)}function yt(t){lt(t,function(e,n){delete t[n]})}function gt(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return A(e,function(e){lt(e,function(e,n){t[n]=e})}),t}function xt(t,e){var n=t;return g(t)?e?(n=[],A(t,function(t,r){n[r]=xt(t,e)})):n=t.slice():x(t)&&(n={},lt(t,function(t,r){n[r]=e?xt(t,e):t})),n}var bt={};function $t(t,i){return ot(i,function(i,o){if(t==n)return t=r,e;var u=t[i],c=h(u)||t.hasOwnProperty(i);u&&y(u.get)&&(u=u.get()),o?c?(bt.value=u,t=bt):t=r:t=u}),t}function kt(t,n,r,i){ot(n,function(n,o){if(o)t[n]=r;else if(t[n])t=t[n];else{if(!i)return e;t=t[n]={}}})}var wt={keys:st,falsy:pt,sort:ht,each:lt,has:mt,clear:yt,extend:gt,copy:xt,get:$t,set:kt},Ct="undefined"!=typeof console?console:n,Tt=/yox/.test(et(s));function Et(){if(a){var t=a.DEBUG;if(k(t))return t}return Tt}function At(t){Ct&&Et()&&Ct.warn("[Yox warn]: "+t)}function Pt(t){throw new Error("[Yox fatal]: "+t)}var St={log:function(t){Ct&&Et()&&Ct.log("[Yox log]: "+t)},warn:At,error:function(t){Ct&&Ct.error("[Yox error]: "+t)},fatal:Pt},Lt=function(t){this.ns=t||e,this.listeners={}};function Nt(t,e){var n={name:e,ns:d};if(t){var r=R(e,".");r>=0&&(n.name=J(e,0,r),n.ns=J(e,r+1))}return n}function Ot(e){return x(e)?function(t){return e===t}:y(e)?function(t){return e===t.fn}:function(e){return t}}function jt(t,e){return!t.length||t===e.ns}function qt(t){return y(t)&&/native code/.test(et(t))}Lt.prototype.fire=function(n,r,i){var o,u,c;n instanceof E?(o=n,u=n.type,c=x(r)?[o,r]:o):(u=n,r&&(c=r));var a=this,f=Nt(a.ns,u),s=f.name,p=f.ns,v=a.listeners[s],d=t;return v&&A(xt(v),function(t,n,f){if((i?i(t,r):jt(p,t))&&M(f,t)){o&&(o.listener=t.fn);var s=T(t.fn,t.ctx,c);return t.num=t.num?t.num+1:1,t.num===t.max&&a.off(u,t),o&&(s===e?o.prevent().stop():o.isStoped&&(s=e)),s===e?d=e:void 0}}),d},Lt.prototype.has=function(n,r){var i=this.listeners,o=Nt(this.ns,n),u=o.name,c=o.ns,a=t,f=Ot(r),s=function(t){return A(t,function(t){if(f(t)&&jt(c,t))return a=e}),a};return u?i[u]&&s(i[u]):c&&lt(i,s),!a},Lt.prototype.on=function(t,e,n){var r=this,i=r.listeners,o=function(t,e){if(t){var o=y(t)?{fn:t}:t;if(x(o)&&y(o.fn)){n&&gt(o,n);var u=Nt(r.ns,e),c=u.name,a=u.ns;return o.ns=a,void O(i[c]||(i[c]=[]),o)}}Pt("注册 "+e+" 事件失败")};b(t)?o(e,t):lt(t,o)},Lt.prototype.off=function(e,n){var r=this.listeners;if(e){var i=Nt(this.ns,e),o=i.name,u=i.ns,c=Ot(n),a=function(e,n){A(e,function(t,e,n){c(t)&&jt(u,t)&&n.splice(e,1)},t),e.length||delete r[n]};o?r[o]&&a(r[o],o):u&&lt(r,a)}else this.listeners={}},typeof setImmediate===u&&qt(setImmediate)&&setImmediate;var zt,Kt=typeof MessageChannel===u&&qt(MessageChannel)?function(t){var e=new MessageChannel;e.port1.onmessage=t,e.port2.postMessage(1)}:setTimeout,Mt=function(){this.nextTasks=[]};Mt.shared=function(){return zt||(zt=new Mt),zt},Mt.prototype.append=function(t){O(this.nextTasks,t),this.start()},Mt.prototype.prepend=function(t){j(this.nextTasks,t),this.start()},Mt.prototype.start=function(){var t=this;1===t.nextTasks.length&&Kt(function(){t.run()})},Mt.prototype.clear=function(){this.nextTasks.length=0},Mt.prototype.run=function(){var t=this.nextTasks;t.length&&(this.nextTasks=[],A(t,T))};var It="$slot_",Dt="lazy",Ut="model",Yt="event",Bt="binding",Ft="$id",Ht="$vnode",Wt="$loading",Gt="$component",Jt="$leaving";function Rt(t,e,n){var r=e.node,i=e.nativeAttrs,o=n&&n.nativeAttrs;if(i||o){var u=i||p,c=o||p;lt(u,function(e,n){c[n]&&e.value===c[n].value||t.attr(r,n,e.value)}),lt(c,function(e,n){u[n]||t.removeAttr(r,n)})}}function Zt(t,e,n){var r=e.node,i=e.nativeProps,o=n&&n.nativeProps;if(i||o){var u=i||p,c=o||p;lt(u,function(e,n){c[n]&&e.value===c[n].value||t.prop(r,n,e.value)}),lt(c,function(e,n){u[n]||t.removeProp(r,n,e.hint)})}}function _t(t,e){var n=t.data,r=t.directives,i=e&&e.directives;if(r||i){var o=n[Gt]||t.node,u=e&&t.keypath!==e.keypath,c=r||p,a=i||p;lt(c,function(n,r){var i=n.hooks,c=i.bind,f=i.unbind;a[r]?(n.value!==a[r].value||u)&&(f&&f(o,a[r],e),c(o,n,t)):c(o,n,t)}),lt(a,function(t,n){if(!c[n]){var r=t.hooks.unbind;r&&r(o,t,e)}})}}function Qt(t){var e=t.directives;if(e){var n=t.data[Gt]||t.node;lt(e,function(e){var r=e.hooks.unbind;r&&r(n,e,t)})}}function Vt(t,e){var n,r=t.data,i=t.ref,o=t.props,u=t.slots,c=t.context;if(t.isComponent?(n=r[Gt],e&&(o&&n.set(n.checkPropTypes(o)),u&&n.set(u))):n=t.node,i){var a=c.$refs;a&&(a[i]=n)}}function Xt(t,e){return t.tag===e.tag&&t.key===e.key}function te(t,e,n){for(var r,i,o;e<=n;)(i=t[e])&&(o=i.key)&&(r||(r={}),r[o]=e),e++;return r||p}function ee(t,e,n,r){r?t.before(e,n,r):t.append(e,n)}function ne(t,n){if(n){var r=(t.parent||t.context).create(n,t,t.node),i=r.$el;return i?t.node=i:Pt("子组件没有创建元素，那还玩个毛啊"),t.data[Gt]=r,t.data[Wt]=e,Vt(t),_t(t),r}Pt("component ["+t.tag+"] is not found.")}var re=0;function ie(){var t={};return t[Ft]=++re,t}function oe(n,r){var o=r.tag,u=r.node,c=r.data,a=r.isComponent,f=r.isComment,s=r.isText,p=r.children,v=r.text,d=r.html,l=r.context;if(!u||!c)if(c=ie(),r.data=c,s)r.node=n.createText(v);else if(f)r.node=n.createComment(v);else if(a){var m=t;l.component(o,function(t){h(c[Wt])?c[Wt]&&(c[Ht]&&(r=c[Ht],delete c[Ht]),pe(r,ne(r,t))):(ne(r,t),m=e)}),m&&(r.node=n.createComment(i),c[Wt]=t)}else u=r.node=n.createElement(r.tag),p?ue(n,u,p):v?n.append(u,n.createText(v)):d&&n.html(u,d),Rt(n,r),Zt(n,r),Vt(r),_t(r)}function ue(t,e,n,r,i,o){for(var u,c=r||0,a=h(i)?i:n.length-1;c<=a;)oe(t,u=n[c]),ce(t,e,u,o),c++}function ce(e,n,r,i){var o=r.node,u=r.data,c=r.context,a=e.parent(o);if(i?e.before(n,o,i.node):e.append(n,o),!a){var f;if(r.isComponent){var s=u[Gt];s&&(f=function(){pe(r,s)})}else r.isStatic||r.isText||r.isComment||(f=function(){pe(r)});f&&c.nextTick(f,t)}}function ae(t,e,n,r,i){for(var o,u=r||0,c=h(i)?i:n.length-1;u<=c;)(o=n[u])&&fe(t,e,o),u++}function fe(t,e,n){var i=n.node;if(n.isStatic||n.isText||n.isComment)t.remove(e,i);else{var o,u=function(){se(t,n),t.remove(e,i)};if(n.isComponent&&!(o=n.data[Gt]))return void u();!function(t,e,n){var i=t.data,o=t.transition;e&&!o&&(o=e.$vnode.transition);if(o){var u=o.leave;if(u)return void u(t.node,i[Jt]=function(){i[Jt]&&(n(),i[Jt]=r)})}n()}(n,o,u)}}function se(t,n){var r=n.data,i=n.children;if(n.isComponent){var o=r[Gt];o?n.context===n.parent&&(Qt(n),o.destroy()):r[Wt]=e}else Qt(n),i&&A(i,function(e){se(t,e)})}function pe(t,e){var n=t.data,r=t.transition;if(e&&!r&&(r=e.$vnode.transition),T(n[Jt]),r){var i=r.enter;if(i)return void i(t.node,s)}}function ve(t,e,n){if(e!==n){var i=n.node,o=n.data;if(!Xt(e,n)){var u=t.parent(i);return oe(t,e),void(u&&(ce(t,u,e,n),fe(t,u,n)))}if(e.node=i,e.data=o,n.isComponent&&o[Wt])o[Ht]=e;else if(!e.isStatic||!n.isStatic){Rt(t,e,n),Zt(t,e,n),Vt(e,n),_t(e,n);var c=e.text,a=e.html,f=e.children,s=n.text,p=n.html,v=n.children;b(c)?c!==s&&t.text(i,c):b(a)?a!==p&&t.html(i,a):f&&v?f!==v&&function(t,e,n,i){for(var o,u,c=0,a=n.length-1,f=n[c],s=n[a],p=0,v=i.length-1,d=i[p],l=i[v];p<=v&&c<=a;)f?s?d?l?Xt(f,d)?(ve(t,f,d),f=n[++c],d=i[++p]):Xt(s,l)?(ve(t,s,l),s=n[--a],l=i[--v]):Xt(s,d)?(ve(t,s,d),ee(t,e,d.node,t.next(l.node)),s=n[--a],d=i[++p]):Xt(f,l)?(ve(t,f,l),ee(t,e,l.node,d.node),f=n[++c],l=i[--v]):(o||(o=te(i,p,v)),h(u=f.key?o[f.key]:r)?(ve(t,f,i[u]),i[u]=r):oe(t,f),ce(t,e,f,d),f=n[++c]):l=i[--v]:d=i[++p]:s=n[--a]:f=n[++c];p>v?ue(t,e,n,c,a,n[a+1]):c>a&&ae(t,e,i,p,v)}(t,i,f,v):f?((b(s)||b(p))&&t.text(i,d),ue(t,i,f)):v?ae(t,i,v):(b(s)||b(p))&&t.text(i,d)}}}function de(t,e){return e===r&&(e=0),w(t)?+t:e}var he={"+":{exec:function(t){return+t}},"-":{exec:function(t){return-t}},"~":{exec:function(t){return~t}},"!":{exec:function(t){return!t}},"!!":{exec:function(t){return!!t}}},le={"*":{prec:14,exec:function(t,e){return t*e}},"/":{prec:14,exec:function(t,e){return t/e}},"%":{prec:14,exec:function(t,e){return t%e}},"+":{prec:13,exec:function(t,e){return t+e}},"-":{prec:13,exec:function(t,e){return t-e}},"<<":{prec:12,exec:function(t,e){return t<<e}},">>":{prec:12,exec:function(t,e){return t>>e}},">>>":{prec:12,exec:function(t,e){return t>>>e}},"<":{prec:11,exec:function(t,e){return t<e}},"<=":{prec:11,exec:function(t,e){return t<=e}},">":{prec:11,exec:function(t,e){return t>e}},">=":{prec:11,exec:function(t,e){return t>=e}},"==":{prec:10,exec:function(t,e){return t==e}},"!=":{prec:10,exec:function(t,e){return t!=e}},"===":{prec:10,exec:function(t,e){return t===e}},"!==":{prec:10,exec:function(t,e){return t!==e}},"&":{prec:9,exec:function(t,e){return t&e}},"^":{prec:8,exec:function(t,e){return t^e}},"|":{prec:7,exec:function(t,e){return t|e}},"&&":{prec:6,exec:function(t,e){return t&&e}},"||":{prec:5,exec:function(t,e){return t||e}},"->":{prec:0,exec:function(t,e){return t>e?function(n){for(var r=t,i=0;r>e;r--)n(r,i++)}:function(n){for(var r=t,i=0;r<e;r++)n(r,i++)}}},"=>":{prec:0,exec:function(t,e){return t>e?function(n){for(var r=t,i=0;r>=e;r--)n(r,i++)}:function(n){for(var r=t,i=0;r<=e;r++)n(r,i++)}}}},me=2,ye=3,ge=4,xe=13;var be;be=d,JSON.stringify(be),P(["c","d","e","f","g","a","h","i","b"],",");function $e(t){return t===r}var ke={};function we(t,e,n){return ke[t.type](t,e,n)}function Ce(t,e,n,r){(t[e]||(t[e]={}))[n]=r}function Te(n,i,u,a,f,s){var v,h=d,l={$keypath:h},m=[h,l],b=[],$={},k=function(t,r,o,u,c,a){var f=ct(t[r],o),s=t[r+1];if(u.absoluteKeypath=f,$e(a)&&(a=f),v&&mt(v,o))return v[o];if(mt(s,o))return s[o];if(mt(s,"$item")){if(s=s.$item,o===d)return s;if(s&&mt(s,o))return s[o]}var p=n.get(f,k,c);if(p===k){if(u.lookup!==e&&r>1)return k(t,r-=2,o,u,c,a);if(!(p=$t(i,o)))return u.absoluteKeypath=a,void At("data ["+u.raw+"] is not found.");p=p.value}return p},w=function(t,e,r){var i=r||m,o=i.length;return we(t,function(t,n){return k(i,o-2*((n.offset||0)+1),t,n,e)},n)},C=function(e,n){var r=n.expr,i=w(r,t),o=ct(Bt,n.name),u=a[Bt];return u&&Ce(e,"directives",o,{type:Bt,name:n.name,key:o,hooks:u,binding:r.absoluteKeypath,hint:n.hint}),i},P=function(t){return function(e,r){e.type!==t&&(e=new E(t,e)),n.fire(e,r)}},S=function(t,i,o){return function(u,c){var a,f=n[t];u instanceof E?(i?(v={$event:u,$data:c},a=T(f,n,i(o)),v=r):a=T(f,n,c?[u,c]:u),a===e&&u.prevent().stop()):T(f,n,i?i(o):r)}},L=function(t,e){return function(){return t(e)}},N=function(t,e){var n=w(t);return e?et(n):n},j=function(t,e){return w(t,r,e)},q=function(t,e){z(N(t,e))},z=function(e){var r=I(b);if(r){var i=I(r);i&&i.isText?i.text+=e:O(r,{isText:t,text:e,context:n,keypath:h})}},K=function(e,r,i,u){if(r&&(A(r,function(n){var r=n.name,i=n.value;switch(n.type){case me:n.binding&&(i=C(e,n)),e.isComponent?Ce(e,"props",r,i):Ce(e,"nativeAttrs",r,{name:r,value:i});break;case ge:Ce(e,"nativeProps",r,{name:r,value:n.binding?C(e,n):i,hint:n.hint});break;case ye:!function(e,n){var r,i,u,c,s,p=n.name,v=n.modifier,d=n.value,h=ct(p,v);switch(p){case Yt:i=a[Yt],c=n.event?P(n.event):S(n.method,n.args,m);break;case o:return void((s=f[d])?e.transition=s:Pt("transition ["+d+"] is not found."));case Ut:i=a[Ut],e.model=w(n.expr,t),r=n.expr.absoluteKeypath;break;case Dt:return void Ce(e,"lazy",v,d);default:i=a[v],n.method?c=S(n.method,n.args,m):u=L(n.getter,m)}i?Ce(e,"directives",h,{type:p,name:v,key:h,value:d,binding:r,hooks:i,getter:u,handler:c}):Pt("directive ["+h+"] is not found.")}(e,n);break;case xe:!function(t,e){var n=e.expr,r=w(n,e.binding);if(x(r)&&!g(r)){lt(r,function(e,n){Ce(t,"props",n,e)});var i=n[c];if(i){var o=ct(Bt,i),u=a[Bt];u&&Ce(t,"directives",o,{type:Bt,name:d,key:o,hooks:u,binding:ct(i,"*")})}}else At("["+n.raw+"] 不是对象，延展个毛啊")}(e,n)}}),e.directives&&!e.lazy&&(e.lazy=p)),i)b.push(e.children=[]),i(),D(b);else if(u){var s={};lt(u,function(t,e){b.push([]),t(),s[e]=D(b)}),e.slots=s}e.context=n,e.keypath=h;var v=I(b);return v&&O(v,e),e},M=function(t,e){var r=I(b),i=n.get(t);i?A(i,function(t){O(r,t),t.isComponent&&(t.parent=n)}):e&&e()},U=function(t,e){$[t]=e},Y=function(t){if($[t])$[t]();else{var e=u[t];e?e(N,j,q,z,K,M,U,Y,B):Pt('partial "'+t+'" is not found.')}},B=function(t,e,n){var i,o;y(e)?(o=e,i=r):(o=n,i=e);var u=w(t),a=t[c],f=a||ct(h,t.raw),s=function(t,e){var n=h,r=l,u=m;h=ct(f,e),l={},O(m=xt(m),h),O(m,l),l.$keypath=h,a||(l.$item=t),i&&(l[i]=e),o(t,e),h=n,l=r,m=u};g(u)?A(u,s):x(u)?lt(u,s):y(u)&&u(s)};return s(N,j,q,z,K,M,U,Y,B)}ke[1]=function(t){return t.value},ke[2]=function(t,e){return e(t.name,t)},ke[3]=function(t,e,n){var i,o,u=t.props,c=t.staticKeypath;if($e(c)){2===(i=u[0]).type?c=i.name:o=we(i,e,n);for(var a=1,f=u.length;a<f;a++)c=ct(c,we(u[a],e,n))}return h(o)?(o=$t(o,c))?o.value:r:e?e(c,t):void 0},ke[4]=function(t,e,n){return he[t.operator].exec(we(t.arg,e,n))},ke[5]=function(t,e,n){return le[t.operator].exec(we(t.left,e,n),we(t.right,e,n))},ke[6]=function(t,e,n){return we(t.test,e,n)?we(t.yes,e,n):we(t.no,e,n)},ke[7]=function(t,e,n){return t.elements.map(function(t){return we(t,e,n)})},ke[8]=function(t,e,n){var r={};return A(t.keys,function(i,o){r[i]=we(t.values[o],e,n)}),r},ke[9]=function(t,e,n){return T(we(t.callee,e,n),n,t.args.map(function(t){return we(t,e,n)}))};var Ee={sync:t},Ae={sync:e},Pe=function(e,n,r,i,o,u,c){var a=this;a.keypath=e,a.sync=n,a.cache=r,a.deps=[],a.context=o.context,a.observer=o,a.getter=u,a.setter=c,a.unique={},a.callback=function(n,r,i){var u=a.value,c=a.get(t);c!==u&&o.diff(e,c,u)},(a.fixed=!Y(i))&&(A(i,function(t){a.add(t)}),a.bind())};function Se(t,n){var r;return A(t,function(t){var i=it(n,t);if(i>=0)return r={name:t,prop:J(n,i)},e}),r}function Le(t,e){if(t==n||e===d)return t;var r=$t(t,e);return r?r.value:void 0}function Ne(e,n,i,o,u){var c=function(t,n,r){if(n!==r){var i=ct(e,t);A(o,function(t){h(ft(i,t))&&u(t,i,n,r)}),Ne(i,n,r,o,u)}};(function(e,n,i){var o=b(e),u=b(n);if(o||u)return i("length",o?e.length:r,u?n.length:r),t})(n,i,c)||function(e,n,i){var o=g(e),u=g(n);if(o||u){var c=o?e.length:r,a=u?n.length:r;i("length",c,a);for(var f=0,s=Math.max(c||0,a||0);f<s;f++)i(f,e?e[f]:r,n?n[f]:r);return t}}(n,i,c)||function(t,e,n){var r=x(t),i=x(e);(r||i)&&(t=r?t:p,e=i?e:p,r&&lt(t,function(t,r){t!==e[r]&&n(r,t,e[r])}),i&&lt(e,function(e,r){e!==t[r]&&n(r,t[r],e)}))}(n,i,c)}function Oe(t,e,n,r,i,o){var u;lt(r,function(r,c){if(at(c))h(ft(t,c))?o(c,t,e,n):i&&(u?O(u,c):u=[c]);else{var a=it(c,t);if(a>=0){var f=J(c,a),s=Le(e,f),p=Le(n,f);s!==p&&o(c,c,s,p)}}}),u&&Ne(t,e,n,u,o)}function je(t,e){if(t.count&&e)return t.count--,e[0]!==e[1]}function qe(e){return e===t?{immediate:t}:x(e)?xt(e):{}}Pe.build=function(e,n,r){var i,o,u=t,c=t,a=v;if(y(r)?i=r:x(r)&&(k(r.cache)&&(u=r.cache),k(r.sync)&&(c=r.sync),g(r.deps)&&(a=r.deps),y(r.get)&&(i=r.get),y(r.set)&&(o=r.set)),i)return new Pe(e,c,u,a,n,i,o)},Pe.prototype.get=function(t){var e=this.getter,n=this.context;if(this.cache){if(t||!mt(this,"value"))if(this.fixed)this.value=T(e,n);else{this.unbind();var r=Pe.current;Pe.current=this,this.value=T(e,n),this.bind(),Pe.current=r}}else this.value=T(e,n);return this.value},Pe.prototype.set=function(t){var e=this.setter,n=this.context;e&&e.call(n,t)},Pe.prototype.add=function(e){this.unique[e]=t},Pe.prototype.bind=function(){var t=this.unique,e=this.deps,n=this.observer,r=this.callback,i=this.sync;lt(t,function(t,o){O(e,o),n.watch(o,r,i?Ee:Ae)}),this.unique={}},Pe.prototype.unbind=function(){var e=this.deps,n=this.observer,r=this.callback;A(e,function(t){n.unwatch(t,r)},t),e.length=0};var ze=function(t,e){this.data=t||{},this.context=e||this,this.nextTask=new Mt,this.syncEmitter=new Lt,this.asyncEmitter=new Lt,this.asyncChanges={}};ze.prototype.get=function(t,e,n){var r,i,o=Pe.current,u=this.data,c=this.computed,a=this.reversedComputedKeys;if(t===d)return u;if(o&&!n&&o.add(t),c){if(i=c[t])return i.get();if(a){var f=Se(a,t);f&&f.prop&&(r=$t(c[f.name].get(),f.prop))}}return r||(r=$t(u,t)),r?r.value:e},ze.prototype.set=function(t,e){var n=this,r=n.data,i=n.computed,o=n.reversedComputedKeys,u=function(t,e){var u=n.get(e);if(t!==u){var c;if(i&&((c=i[e])&&c.set(t),o)){var a=Se(o,e);if(a&&a.prop&&(c=i[a.name])){var f=c.get();(x(f)||g(f))&&kt(f,a.prop,t)}}c||kt(r,e,t),n.diff(e,t,u)}};b(t)?u(e,t):x(t)&&lt(t,u)},ze.prototype.diff=function(e,n,i){var o=this,u=o.syncEmitter,c=o.asyncEmitter,a=o.asyncChanges,f=36!==V(e);Oe(e,n,i,u.listeners,f,function(t,e,n,r){u.fire(t,[n,r,e])}),Oe(e,n,i,c.listeners,f,function(e,n,i,u){A(c.listeners[e],function(t){t.count++});var f=(a[n]||(a[n]={value:u,list:[]})).list;M(f,e)||O(f,e),o.pending||(o.pending=t,o.nextTask.append(function(){o.pending&&(o.pending=r,o.diffAsync())}))})},ze.prototype.diffAsync=function(){var t=this,e=t.asyncEmitter,n=t.asyncChanges;t.asyncChanges={},lt(n,function(n,r){var i=[t.get(r),n.value,r];A(n.list,function(t){e.fire(t,i,je)})})},ze.prototype.addComputed=function(e,n){var r=Pe.build(e,this,n);if(r)return this.computed||(this.computed={}),this.computed[e]=r,this.reversedComputedKeys=ht(this.computed,t),r},ze.prototype.removeComputed=function(e){var n=this.computed;n&&mt(n,e)&&(delete n[e],this.reversedComputedKeys=ht(n,t))},ze.prototype.watch=function(t,e,n){var i=this,o=i.context,u=i.syncEmitter,c=i.asyncEmitter,a=function(t,e,n){x(e)&&(k(e.immediate)&&(n.immediate=e.immediate),k(e.sync)&&(n.sync=e.sync),k(e.once)&&(n.once=e.once),y(e.watcher)&&(e=e.watcher));var a=n.sync?u:c;if(y(e)){var f={fn:e,ctx:o,count:0};n.once&&(f.max=1),a.on(t,f)}else Pt("watcher should be a function.");n.immediate&&T(e,o,[i.get(t),r,t])};b(t)?y(e)||x(e)?a(t,e,qe(n)):Pt("watcher should be a function or object."):lt(t,function(t,e){a(e,t,{})})},ze.prototype.unwatch=function(t,e){this.syncEmitter.off(t,e),this.asyncEmitter.off(t,e)},ze.prototype.toggle=function(t){var e=!this.get(t);return this.set(t,e),e},ze.prototype.increase=function(t,e,n){var r=de(this.get(t),0)+(e||1);if(!$(n)||r<=n)return this.set(t,r),r},ze.prototype.decrease=function(t,e,n){var r=de(this.get(t),0)-(e||1);if(!$(n)||r>=n)return this.set(t,r),r},ze.prototype.insert=function(n,r,i){var o=this.get(n),u=(o=g(o)?xt(o):[]).length;if(i===t||i===u)o.push(r);else if(i===e||0===i)o.unshift(r);else{if(!(i>0&&i<u))return;o.splice(i,0,r)}return this.set(n,o),t},ze.prototype.append=function(e,n){return this.insert(e,n,t)},ze.prototype.prepend=function(t,n){return this.insert(t,n,e)},ze.prototype.removeAt=function(e,n){var r=this.get(e);if(g(r)&&n>=0&&n<r.length)return(r=xt(r)).splice(n,1),this.set(e,r),t},ze.prototype.remove=function(e,n){var r=this.get(e);if(g(r)&&U(r=xt(r),n))return this.set(e,r),t},ze.prototype.copy=function(t,e){return xt(t,e)},ze.prototype.destroy=function(){this.syncEmitter.off(),this.asyncEmitter.off(),this.nextTask.clear(),yt(this)};var Ke=f,Me="textContent",Ie=s,De=s,Ue=s,Ye=s,Be=s;Ke&&($e(Ke.body[Me])&&(Me="innerText"),Ke.addEventListener?(Ie=function(t,n,r){t.addEventListener(n,r,e)},De=function(t,n,r){t.removeEventListener(n,r,e)}):(Ie=function(t,e,n){t.attachEvent("on"+e,n)},De=function(t,e,n){t.detachEvent("on"+e,n)}),Ke.body.classList?(Ue=function(t,e){t.classList.add(e)},Ye=function(t,e){t.classList.remove(e)}):(Ue=function(t,e){var n=t.className.split(Fe);M(n,e)||(O(n,e),t.className=P(n,Fe))},Ye=function(t,e){var n=t.className.split(Fe);U(n,e)&&(t.className=P(n,Fe))}),Be=Ke.querySelector?function(t){var e=Ke.querySelector(t);if(e)return e}:function(t){35===V(t,0)&&(t=J(t,1));var e=Ke.getElementById(t);if(e)return e});var Fe=" ",He={svg:"http://www.w3.org/2000/svg"},We={},Ge={createElement:function(t,e){return e?Ke.createElementNS(He.svg,t):Ke.createElement(t)},createText:function(t){return Ke.createTextNode(t)},createComment:function(t){return Ke.createComment(t)},createEvent:function(t,e){return t},prop:function(t,n,r){if(!h(r))return $t(t,n);kt(t,n,r,e)},removeProp:function(t,n,r){kt(t,n,3===r?e:d,e)},attr:function(t,e,r){if(h(r))t.setAttribute(e,r);else{var i=t.getAttribute(e);if(i!=n)return i}},removeAttr:function(t,e){t.removeAttribute(e)},before:function(t,e,n){t.insertBefore(e,n)},append:function(t,e){t.appendChild(e)},replace:function(t,e,n){t.replaceChild(e,n)},remove:function(t,e){t.removeChild(e)},parent:function(t){var e=t.parentNode;if(e)return e},next:function(t){var e=t.nextSibling;if(e)return e},find:Be,tag:function(t){if(1===t.nodeType)return t.tagName.toLowerCase()},text:function(t,e){if(!h(e))return t[Me];t[Me]=e},html:function(t,e){if(!h(e))return t.innerHTML;t.innerHTML=e},addClass:Ue,removeClass:Ye,on:function(t,e,n,r){var i=t.$emitter||(t.$emitter=new Lt),o=i.nativeListeners||(i.nativeListeners={});if(!o[e]){var u=We[e],c=function(e){i.fire(e instanceof E?e:new E(e.type,Ge.createEvent(e,t)))};o[e]=c,u?u.on(t,c):Ie(t,e,c)}i.on(e,{fn:n,ctx:r})},off:function(t,e,n){var i=t.$emitter,o=i.listeners,u=i.nativeListeners;if(i.off(e,n),u&&!i.has(e)){var c=We[e],a=u[e];c?c.off(t,a):De(t,e,a),delete u[e]}pt(o)&&(t.$emitter=r)},specialEvents:We};function Je(t,e,r){var i;return function(){if(!i){var o=q(arguments);r&&T(t,n,o),i=setTimeout(function(){i=0,r||T(t,n,o)},e)}}}We.input={on:function(n,r){var i=e;Ge.on(n,"compositionstart",r.compositionstart=function(){i=t}),Ge.on(n,"compositionend",r.compositionend=function(t){i=e,t.type="input",r(t)}),Ie(n,"input",r.input=function(t){i||r(t)})},off:function(t,e){Ge.off(t,"compositionstart",e.compositionstart),Ge.off(t,"compositionend",e.compositionend),De(t,"input",e.input),e.compositionstart=e.compositionend=e.input=r}};var Re=z(["click","tap"]),Ze={bind:function(e,n,r){var i=n.name,o=n.handler,u=r.lazy[i]||r.lazy[d];if(o)if(u&&(u===t?i="change":o=Je(o,u,Re[i])),r.isComponent){var c=e;c.on(i,o),r.data[n.key]=function(){c.off(i,o)}}else{var a=e;Ge.on(a,i,o),r.data[n.key]=function(){Ge.off(a,i,o)}}},unbind:function(t,e,n){T(n.data[e.key])}};function _e(t){return h(t.value)?t.value:t.text}var Qe={sync:t},Ve={set:function(t,e,n){t.value=et(n.get(e))},sync:function(t,e,n){n.set(e,t.value)},name:"value"},Xe={set:function(t,e,n){t.set(t.$model,n.get(e))},sync:function(t,e,n){n.set(e,t.get(t.$model))},name:"value"},tn={radio:{set:function(t,e,n){t.checked=t.value===et(n.get(e))},sync:function(t,e,n){t.checked&&n.set(e,t.value)},name:"checked"},checkbox:{set:function(t,n,r){var i=r.get(n);t.checked=g(i)?M(i,t.value,e):k(i)?i:!!i},sync:function(t,n,r){var i=r.get(n);g(i)?t.checked?r.append(n,t.value):r.removeAt(n,K(i,t.value,e)):r.set(n,t.checked)},name:"checked"},select:{set:function(t,n,r){var i=r.get(n);A(q(t.options),t.multiple?function(t){t.selected=M(i,_e(t),e)}:function(n,r){if(_e(n)==i)return t.selectedIndex=r,e})},sync:function(t,e,n){var r=q(t.options);if(t.multiple){var i=[];A(r,function(t){t.selected&&O(i,_e(t))}),Y(i)&&Y(n.get(e))||n.set(e,i)}else n.set(e,_e(r[t.selectedIndex]))},name:"value"}},en={bind:function(n,r,i){var o,u,c,a,f=r.binding,s=i.context,p=i.nativeProps,v=i.lazy[Ut]||i.lazy[d],h=function(){m||c.set(o||u,f,s)},l=function(){m=t,c.sync(o||u,f,s),m=e},m=e;v&&v!==t&&(l=Je(l,v)),i.isComponent?(c=Xe,(o=n).watch(o.$model,l)):(c=tn[(u=n).type]||tn[Ge.tag(u)],a="change",c||(c=Ve,v!==t&&(a="input")),p&&mt(p,c.name)||h(),Ge.on(u,a,l)),s.watch(f,h,Qe),i.data[r.key]=function(){i.isComponent?o.unwatch(o.$model,l):Ge.off(u,a,l),s.unwatch(f,h)}},unbind:function(t,e,n){T(n.data[e.key])}},nn={bind:function(t,e,n){var r=e.binding;if(r){var i=at(r),o=function(o,u,c){var a=i?ft(c,r):e.name;n.isComponent?t.set(a,o):h(e.hint)?Ge.prop(t,a,o):Ge.attr(t,a,o)};n.context.watch(r,o),n.data[e.key]=function(){n.context.unwatch(r,o)}}},unbind:function(t,e,n){T(n.data[e.key])}};var rn={},on={},un={},cn={},an={},fn=/^[#.][-\w+]+$/,sn=function n(u){var c=this;x(u)||(u=p),c.$options=u,T(u.beforeCreate,c,u);var a=u.el,f=u.data,s=u.props,v=u.model,h=u.parent,l=u.replace,m=u.computed,g=u.template,$=u.transitions,k=u.components,w=u.directives,C=u.partials,E=u.filters,A=u.slots,P=u.events,S=u.methods,L=u.watchers,N=u.extensions;N&&gt(c,N),v&&(c.$model=v);var O=s?c.checkPropTypes(s):{};A&&gt(O,A),s&&x(f)&&At('"data" option expected to be a function.');var j=c.$observer=new ze(O,c);m&&lt(m,function(t,e){j.addComputed(e,t)});var q=y(f)?T(f,c,u):f;x(q)&&lt(q,function(t,e){mt(O,e)?At('"'+e+'" is already defined as a prop. Use prop default value instead.'):O[e]=t}),c.$emitter=new Lt(t);var z,K=e;if(b(g)?fn.test(g)&&((z=Ge.find(g))?(g=Ge.html(z),z=r):Pt('"'+g+'" 选择器找不到对应的元素')):g=r,a)if(b(a)){var M=a;fn.test(M)?(z=Ge.find(M))||Pt('"'+M+'" 选择器找不到对应的元素'):Pt('"el" option 格式错误')}else z=a;z&&!l&&(K=t,Ge.append(z,z=Ge.createComment(d))),h&&(c.$parent=h),pn(c,o,$),pn(c,i,k),pn(c,"directive",w),pn(c,"partial",C),pn(c,"filter",E),S&&lt(S,function(t,e){c[e]&&Pt('"'+e+'" method is conflicted with built-in methods.'),c[e]=t}),T(u.afterCreate,c),g?(c.$template=n.compile(g),j.addComputed("$template",{sync:e,get:function(){return c.render()}}),(L=L?xt(L):{}).$template=function(t){c.update(t,c.$vnode)},z||(K=t,z=Ge.createComment(d)),c.update(c.get("$template"),function(t,e,n,r,i){return{tag:t.tag(e),data:ie(),isComment:n,node:e,context:r,keypath:i}}(Ge,z,K,c,d))):z&&Pt("有 el 没 template 是几个意思？"),P&&c.on(P),L&&j.nextTask.prepend(function(){c.$observer&&c.watch(L)})};sn.use=function(t){t.install(sn)},sn.nextTick=function(t){Mt.shared().append(t)},sn.compile=function(t,e){return new Function("return "+t)()},sn.directive=function(t,e){if(b(t)&&!e)return dn(rn,t);hn(rn,t,e)},sn.transition=function(t,e){if(b(t)&&!e)return dn(on,t);hn(on,t,e)},sn.component=function(t,e){if(b(t)){if(!e)return dn(un,t);if(y(e))return void vn(un,t,e)}hn(un,t,e)},sn.partial=function(t,e){if(b(t)&&!e)return dn(cn,t);hn(cn,t,e,sn.compile)},sn.filter=function(t,e){if(b(t)&&!e)return dn(an,t);hn(an,t,e)},sn.checkPropTypes=function(n,r){var i=xt(n);return lt(r,function(r,o){var c,a=r.type,f=r.value,s=r.required,p=n[o];(y(s)&&(s=s(n)),h(p))?a?(X(a)?Y(a)||A(a,function(n){if(m(p,n))return c=t,e}):c=m(p,a),c!==t&&At('The prop "'+o+'" type is not matched.')):At('The prop "'+o+'" in propTypes has no type.'):s?At('The prop "'+o+'" is marked as required, but its value is not found.'):h(f)&&(i[o]=a===u?f:y(f)?f(n):f)}),i},sn.prototype.addComputed=function(t,e){return this.$observer.addComputed(t,e)},sn.prototype.removeComputed=function(t){this.$observer.removeComputed(t)},sn.prototype.get=function(t,e,n){return this.$observer.get(t,e,n)},sn.prototype.set=function(t,e){var n=this.$observer;n&&n.set(t,e)},sn.prototype.on=function(t,e){return this.$emitter.on(t,e,{ctx:this}),this},sn.prototype.once=function(t,e){return this.$emitter.on(t,e,{ctx:this,max:1}),this},sn.prototype.off=function(t,e){return this.$emitter.off(t,e),this},sn.prototype.fire=function(e,n,r){var i,o,u=e instanceof E?e:new E(e);return u.target||(u.target=this),x(n)?i=n:n===t&&(r=t),(o=this.$emitter.fire(u,i))&&(r?this.$children&&A(this.$children,function(e){return o=e.fire(u,n,t)}):this.$parent&&(o=this.$parent.fire(u,n))),o},sn.prototype.watch=function(t,e,n){return this.$observer.watch(t,e,n),this},sn.prototype.watchOnce=function(e,n,r){var i=qe(r);return i.once=t,this.$observer.watch(e,n,i),this},sn.prototype.unwatch=function(t,e){return this.$observer.unwatch(t,e),this},sn.prototype.directive=function(t,e){var n=this.$directives;if(b(t)&&!e)return dn(n,t,sn.directive);hn(n||(this.$directives={}),t,e)},sn.prototype.transition=function(t,e){var n=this.$transitions;if(b(t)&&!e)return dn(n,t,sn.transition);hn(n||(this.$transitions={}),t,e)},sn.prototype.component=function(t,e){var n=this.$components;if(b(t)){if(!e)return dn(n,t,sn.component);if(y(e))return void(vn(n,t,e)||vn(un,t,e))}hn(n||(this.$components={}),t,e)},sn.prototype.partial=function(t,e){var n=this.$partials;if(b(t)&&!e)return dn(n,t,sn.partial);hn(n||(this.$partials={}),t,e,sn.compile)},sn.prototype.filter=function(t,e){var n=this.$filters;if(b(t)&&!e)return dn(n,t,sn.filter);hn(n||(this.$filters={}),t,e)},sn.prototype.forceUpdate=function(){var e=this.$vnode,n=this.$observer;if(e){var r=n.computed.$template,i=r.get();n.nextTask.run(),i===r.get()&&this.update(r.get(t),e)}},sn.prototype.render=function(){return Te(this,ln(this.$filters,an),ln(this.$partials,cn),ln(this.$directives,rn),ln(this.$transitions,on),this.$template)},sn.prototype.update=function(t,e){var n,r=this,i=r.$vnode,o=r.$options;r.$refs={},i?(T(o.beforeUpdate,r),ve(Ge,t,e),n=o.afterUpdate):(T(o.beforeMount,r),ve(Ge,t,e),r.$el=t.node,n=o.afterMount),r.$vnode=t,n&&r.nextTick(function(){r.$vnode&&T(n,r)})},sn.prototype.checkPropTypes=function(t){var e=this.$options.propTypes;return e?sn.checkPropTypes(t,e):t},sn.prototype.create=function(e,n,r){if((e=xt(e)).parent=this,n){r&&(e.el=r,e.replace=t);var i=n.slots,o=n.props,u=n.model;if(i&&(e.slots=i),h(u)){o||(o={});var c=e.model||"value";mt(o,c)||(o[c]=u),e.model=c}e.props=o}var a=new sn(e);return O(this.$children||(this.$children=[]),a),a},sn.prototype.destroy=function(){var t=this.$options,e=this.$emitter,n=this.$observer;T(t.beforeDestroy,this);var r=this.$vnode,i=this.$parent;i&&i.$children&&U(i.$children,this),r&&function(t,e,n){if(n){var r=t.parent(e.node);r?fe(t,r,e):Pt("没有 parentNode 无法销毁 vnode")}else se(t,e)}(Ge,r,!i),e.off(),n.destroy(),yt(this),T(t.afterDestroy,this)},sn.prototype.nextTick=function(t,e){var n=this.$observer.nextTask;e?n.prepend(t):n.append(t)},sn.prototype.toggle=function(t){return this.$observer.toggle(t)},sn.prototype.increase=function(t,e,n){return this.$observer.increase(t,e,n)},sn.prototype.decrease=function(t,e,n){return this.$observer.decrease(t,e,n)},sn.prototype.insert=function(t,e,n){return this.$observer.insert(t,e,n)},sn.prototype.append=function(t,e){return this.$observer.append(t,e)},sn.prototype.prepend=function(t,e){return this.$observer.prepend(t,e)},sn.prototype.removeAt=function(t,e){return this.$observer.removeAt(t,e)},sn.prototype.remove=function(t,e){return this.$observer.remove(t,e)},sn.prototype.copy=function(t,e){return this.$observer.copy(t,e)},sn.version="1.0.0-alpha",sn.is=C,sn.array=B,sn.object=wt,sn.string=tt,sn.logger=St,sn.Event=E,sn.Emitter=Lt;{function pn(t,e,n){y(n)?t[e](T(n,t)):x(n)&&t[e](n)}function vn(e,n,i){if(e&&mt(e,n)){var o=e[n];if(y(o)){var u=o.$queue;u?O(u,i):(u=o.$queue=[i],o(function(t){o.$queue=r,e[n]=t,A(u,function(e){e(t)})}))}else i(o);return t}}function dn(t,e,n){return t&&t[e]?t[e]:n?n(e):void 0}function hn(t,e,n,r){b(e)?t[e]=r?r(n):n:lt(e,function(e,n){t[n]=r?r(e):e})}function ln(t,e){return t&&e?gt({},e,t):t||e}sn.directive({event:Ze,model:en,binding:nn}),sn.filter({hasSlot:function(t){return h(this.get(It+t))}})}return sn});
