(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Tl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Pt={},kr=[],Ye=()=>{},Pm=()=>!1,go=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),wl=e=>e.startsWith("onUpdate:"),Yt=Object.assign,Il=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},xm=Object.prototype.hasOwnProperty,At=(e,t)=>xm.call(e,t),at=Array.isArray,Or=e=>ei(e)==="[object Map]",mo=e=>ei(e)==="[object Set]",wu=e=>ei(e)==="[object Date]",ht=e=>typeof e=="function",qt=e=>typeof e=="string",en=e=>typeof e=="symbol",Vt=e=>e!==null&&typeof e=="object",Rf=e=>(Vt(e)||ht(e))&&ht(e.then)&&ht(e.catch),Sf=Object.prototype.toString,ei=e=>Sf.call(e),Vm=e=>ei(e).slice(8,-1),Cf=e=>ei(e)==="[object Object]",Al=e=>qt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Is=Tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Dm=/-(\w)/g,Fe=_o(e=>e.replace(Dm,(t,n)=>n?n.toUpperCase():"")),km=/\B([A-Z])/g,dr=_o(e=>e.replace(km,"-$1").toLowerCase()),yo=_o(e=>e.charAt(0).toUpperCase()+e.slice(1)),aa=_o(e=>e?`on${yo(e)}`:""),Vn=(e,t)=>!Object.is(e,t),Ni=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Pf=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},xf=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Iu;const vo=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bl(e){if(at(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=qt(r)?Lm(r):bl(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(qt(e)||Vt(e))return e}const Om=/;(?![^(]*\))/g,Nm=/:([^]+)/,Mm=/\/\*[^]*?\*\//g;function Lm(e){const t={};return e.replace(Mm,"").split(Om).forEach(n=>{if(n){const r=n.split(Nm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Rl(e){let t="";if(qt(e))t=e;else if(at(e))for(let n=0;n<e.length;n++){const r=Rl(e[n]);r&&(t+=r+" ")}else if(Vt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Fm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Um=Tl(Fm);function Vf(e){return!!e||e===""}function Bm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Eo(e[r],t[r]);return n}function Eo(e,t){if(e===t)return!0;let n=wu(e),r=wu(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=en(e),r=en(t),n||r)return e===t;if(n=at(e),r=at(t),n||r)return n&&r?Bm(e,t):!1;if(n=Vt(e),r=Vt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Eo(e[a],t[a]))return!1}}return String(e)===String(t)}function $m(e,t){return e.findIndex(n=>Eo(n,t))}const Df=e=>!!(e&&e.__v_isRef===!0),nn=e=>qt(e)?e:e==null?"":at(e)||Vt(e)&&(e.toString===Sf||!ht(e.toString))?Df(e)?nn(e.value):JSON.stringify(e,kf,2):String(e),kf=(e,t)=>Df(t)?kf(e,t.value):Or(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[la(r,i)+" =>"]=s,n),{})}:mo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>la(n))}:en(t)?la(t):Vt(t)&&!at(t)&&!Cf(t)?String(t):t,la=(e,t="")=>{var n;return en(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class jm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function qm(){return Se}let xt;const ca=new WeakSet;class Of{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ca.has(this)&&(ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Au(this),Lf(this);const t=xt,n=je;xt=this,je=!0;try{return this.fn()}finally{Ff(this),xt=t,je=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Pl(t);this.deps=this.depsTail=void 0,Au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let Nf=0,As,bs;function Mf(e,t=!1){if(e.flags|=8,t){e.next=bs,bs=e;return}e.next=As,As=e}function Sl(){Nf++}function Cl(){if(--Nf>0)return;if(bs){let t=bs;for(bs=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;As;){let t=As;for(As=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Lf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ff(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Pl(r),zm(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Na(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Uf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Uf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ls))return;e.globalVersion=Ls;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Na(e)){e.flags&=-3;return}const n=xt,r=je;xt=e,je=!0;try{Lf(e);const s=e.fn(e._value);(t.version===0||Vn(s,e._value))&&(e._value=s,t.version++)}catch(s){throw t.version++,s}finally{xt=n,je=r,Ff(e),e.flags&=-3}}function Pl(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Pl(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function zm(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let je=!0;const Bf=[];function qn(){Bf.push(je),je=!1}function zn(){const e=Bf.pop();je=e===void 0?!0:e}function Au(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=xt;xt=void 0;try{t()}finally{xt=n}}}let Ls=0;class Hm{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!xt||!je||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new Hm(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,$f(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=r)}return n}trigger(t){this.version++,Ls++,this.notify(t)}notify(t){Sl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cl()}}}function $f(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)$f(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ma=new WeakMap,nr=Symbol(""),La=Symbol(""),Fs=Symbol("");function le(e,t,n){if(je&&xt){let r=Ma.get(e);r||Ma.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new xl),s.map=r,s.key=n),s.track()}}function fn(e,t,n,r,s,i){const a=Ma.get(e);if(!a){Ls++;return}const l=c=>{c&&c.trigger()};if(Sl(),t==="clear")a.forEach(l);else{const c=at(e),h=c&&Al(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Fs||!en(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Fs)),t){case"add":c?h&&l(a.get("length")):(l(a.get(nr)),Or(e)&&l(a.get(La)));break;case"delete":c||(l(a.get(nr)),Or(e)&&l(a.get(La)));break;case"set":Or(e)&&l(a.get(nr));break}}Cl()}function br(e){const t=It(e);return t===e?t:(le(t,"iterate",Fs),Me(e)?t:t.map(ce))}function To(e){return le(e=It(e),"iterate",Fs),e}const Km={__proto__:null,[Symbol.iterator](){return ua(this,Symbol.iterator,ce)},concat(...e){return br(this).concat(...e.map(t=>at(t)?br(t):t))},entries(){return ua(this,"entries",e=>(e[1]=ce(e[1]),e))},every(e,t){return cn(this,"every",e,t,void 0,arguments)},filter(e,t){return cn(this,"filter",e,t,n=>n.map(ce),arguments)},find(e,t){return cn(this,"find",e,t,ce,arguments)},findIndex(e,t){return cn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return cn(this,"findLast",e,t,ce,arguments)},findLastIndex(e,t){return cn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return cn(this,"forEach",e,t,void 0,arguments)},includes(...e){return ha(this,"includes",e)},indexOf(...e){return ha(this,"indexOf",e)},join(e){return br(this).join(e)},lastIndexOf(...e){return ha(this,"lastIndexOf",e)},map(e,t){return cn(this,"map",e,t,void 0,arguments)},pop(){return gs(this,"pop")},push(...e){return gs(this,"push",e)},reduce(e,...t){return bu(this,"reduce",e,t)},reduceRight(e,...t){return bu(this,"reduceRight",e,t)},shift(){return gs(this,"shift")},some(e,t){return cn(this,"some",e,t,void 0,arguments)},splice(...e){return gs(this,"splice",e)},toReversed(){return br(this).toReversed()},toSorted(e){return br(this).toSorted(e)},toSpliced(...e){return br(this).toSpliced(...e)},unshift(...e){return gs(this,"unshift",e)},values(){return ua(this,"values",ce)}};function ua(e,t,n){const r=To(e),s=r[t]();return r!==e&&!Me(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gm=Array.prototype;function cn(e,t,n,r,s,i){const a=To(e),l=a!==e&&!Me(e),c=a[t];if(c!==Gm[t]){const p=c.apply(e,i);return l?ce(p):p}let h=n;a!==e&&(l?h=function(p,m){return n.call(this,ce(p),m,e)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,e)}));const d=c.call(a,h,r);return l&&s?s(d):d}function bu(e,t,n,r){const s=To(e);let i=n;return s!==e&&(Me(e)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,e)}):i=function(a,l,c){return n.call(this,a,ce(l),c,e)}),s[t](i,...r)}function ha(e,t,n){const r=It(e);le(r,"iterate",Fs);const s=r[t](...n);return(s===-1||s===!1)&&kl(n[0])?(n[0]=It(n[0]),r[t](...n)):s}function gs(e,t,n=[]){qn(),Sl();const r=It(e)[t].apply(e,n);return Cl(),zn(),r}const Wm=Tl("__proto__,__v_isRef,__isVue"),jf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(en));function Qm(e){en(e)||(e=String(e));const t=It(this);return le(t,"has",e),t.hasOwnProperty(e)}class qf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?i_:Gf:i?Kf:Hf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=at(t);if(!s){let c;if(a&&(c=Km[n]))return c;if(n==="hasOwnProperty")return Qm}const l=Reflect.get(t,n,de(t)?t:r);return(en(n)?jf.has(n):Wm(n))||(s||le(t,"get",n),i)?l:de(l)?a&&Al(n)?l:l.value:Vt(l)?s?Qf(l):wo(l):l}}class zf extends qf{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=ir(i);if(!Me(r)&&!ir(r)&&(i=It(i),r=It(r)),!at(t)&&de(i)&&!de(r))return c?!1:(i.value=r,!0)}const a=at(t)&&Al(n)?Number(n)<t.length:At(t,n),l=Reflect.set(t,n,r,de(t)?t:s);return t===It(s)&&(a?Vn(r,i)&&fn(t,"set",n,r):fn(t,"add",n,r)),l}deleteProperty(t,n){const r=At(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&fn(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!en(n)||!jf.has(n))&&le(t,"has",n),r}ownKeys(t){return le(t,"iterate",at(t)?"length":nr),Reflect.ownKeys(t)}}class Ym extends qf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xm=new zf,Jm=new Ym,Zm=new zf(!0);const Fa=e=>e,bi=e=>Reflect.getPrototypeOf(e);function t_(e,t,n){return function(...r){const s=this.__v_raw,i=It(s),a=Or(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,h=s[e](...r),d=n?Fa:t?Ua:ce;return!t&&le(i,"iterate",c?La:nr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Ri(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function e_(e,t){const n={get(s){const i=this.__v_raw,a=It(i),l=It(s);e||(Vn(s,l)&&le(a,"get",s),le(a,"get",l));const{has:c}=bi(a),h=t?Fa:e?Ua:ce;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&le(It(s),"iterate",nr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=It(i),l=It(s);return e||(Vn(s,l)&&le(a,"has",s),le(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=It(l),h=t?Fa:e?Ua:ce;return!e&&le(c,"iterate",nr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Yt(n,e?{add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear")}:{add(s){!t&&!Me(s)&&!ir(s)&&(s=It(s));const i=It(this);return bi(i).has.call(i,s)||(i.add(s),fn(i,"add",s,s)),this},set(s,i){!t&&!Me(i)&&!ir(i)&&(i=It(i));const a=It(this),{has:l,get:c}=bi(a);let h=l.call(a,s);h||(s=It(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Vn(i,d)&&fn(a,"set",s,i):fn(a,"add",s,i),this},delete(s){const i=It(this),{has:a,get:l}=bi(i);let c=a.call(i,s);c||(s=It(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&fn(i,"delete",s,void 0),h},clear(){const s=It(this),i=s.size!==0,a=s.clear();return i&&fn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=t_(s,e,t)}),n}function Vl(e,t){const n=e_(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(At(n,s)&&s in r?n:r,s,i)}const n_={get:Vl(!1,!1)},r_={get:Vl(!1,!0)},s_={get:Vl(!0,!1)};const Hf=new WeakMap,Kf=new WeakMap,Gf=new WeakMap,i_=new WeakMap;function o_(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(e){return e.__v_skip||!Object.isExtensible(e)?0:o_(Vm(e))}function wo(e){return ir(e)?e:Dl(e,!1,Xm,n_,Hf)}function Wf(e){return Dl(e,!1,Zm,r_,Kf)}function Qf(e){return Dl(e,!0,Jm,s_,Gf)}function Dl(e,t,n,r,s){if(!Vt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const a=a_(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return s.set(e,l),l}function Nr(e){return ir(e)?Nr(e.__v_raw):!!(e&&e.__v_isReactive)}function ir(e){return!!(e&&e.__v_isReadonly)}function Me(e){return!!(e&&e.__v_isShallow)}function kl(e){return e?!!e.__v_raw:!1}function It(e){const t=e&&e.__v_raw;return t?It(t):e}function l_(e){return!At(e,"__v_skip")&&Object.isExtensible(e)&&Pf(e,"__v_skip",!0),e}const ce=e=>Vt(e)?wo(e):e,Ua=e=>Vt(e)?Qf(e):e;function de(e){return e?e.__v_isRef===!0:!1}function gn(e){return Yf(e,!1)}function c_(e){return Yf(e,!0)}function Yf(e,t){return de(e)?e:new u_(e,t)}class u_{constructor(t,n){this.dep=new xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:It(t),this._value=n?t:ce(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Me(t)||ir(t);t=r?t:It(t),Vn(t,n)&&(this._rawValue=t,this._value=r?t:ce(t),this.dep.trigger())}}function Xe(e){return de(e)?e.value:e}const h_={get:(e,t,n)=>t==="__v_raw"?e:Xe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return de(s)&&!de(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Xf(e){return Nr(e)?e:new Proxy(e,h_)}class f_{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return Mf(this,!0),!0}get value(){const t=this.dep.track();return Uf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function d_(e,t,n=!1){let r,s;return ht(e)?r=e:(r=e.get,s=e.set),new f_(r,s,n)}const Si={},zi=new WeakMap;let Jn;function p_(e,t=!1,n=Jn){if(n){let r=zi.get(n);r||zi.set(n,r=[]),r.push(e)}}function g_(e,t,n=Pt){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=K=>s?K:Me(K)||s===!1||s===0?dn(K,1):dn(K);let d,p,m,y,R=!1,P=!1;if(de(e)?(p=()=>e.value,R=Me(e)):Nr(e)?(p=()=>h(e),R=!0):at(e)?(P=!0,R=e.some(K=>Nr(K)||Me(K)),p=()=>e.map(K=>{if(de(K))return K.value;if(Nr(K))return h(K);if(ht(K))return c?c(K,2):K()})):ht(e)?t?p=c?()=>c(e,2):e:p=()=>{if(m){qn();try{m()}finally{zn()}}const K=Jn;Jn=d;try{return c?c(e,3,[y]):e(y)}finally{Jn=K}}:p=Ye,t&&s){const K=p,ft=s===!0?1/0:s;p=()=>dn(K(),ft)}const D=qm(),B=()=>{d.stop(),D&&Il(D.effects,d)};if(i&&t){const K=t;t=(...ft)=>{K(...ft),B()}}let $=P?new Array(e.length).fill(Si):Si;const H=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(t){const ft=d.run();if(s||R||(P?ft.some((nt,I)=>Vn(nt,$[I])):Vn(ft,$))){m&&m();const nt=Jn;Jn=d;try{const I=[ft,$===Si?void 0:P&&$[0]===Si?[]:$,y];c?c(t,3,I):t(...I),$=ft}finally{Jn=nt}}}else d.run()};return l&&l(H),d=new Of(p),d.scheduler=a?()=>a(H,!1):H,y=K=>p_(K,!1,d),m=d.onStop=()=>{const K=zi.get(d);if(K){if(c)c(K,4);else for(const ft of K)ft();zi.delete(d)}},t?r?H(!0):$=d.run():a?a(H.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function dn(e,t=1/0,n){if(t<=0||!Vt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,de(e))dn(e.value,t,n);else if(at(e))for(let r=0;r<e.length;r++)dn(e[r],t,n);else if(mo(e)||Or(e))e.forEach(r=>{dn(r,t,n)});else if(Cf(e)){for(const r in e)dn(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&dn(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(e,t,n,r){try{return r?e(...r):e()}catch(s){Io(s,t,n)}}function rn(e,t,n,r){if(ht(e)){const s=ni(e,t,n,r);return s&&Rf(s)&&s.catch(i=>{Io(i,t,n)}),s}if(at(e)){const s=[];for(let i=0;i<e.length;i++)s.push(rn(e[i],t,n,r));return s}}function Io(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Pt;if(t){let l=t.parent;const c=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,h)===!1)return}l=l.parent}if(i){qn(),ni(i,null,10,[e,c,h]),zn();return}}m_(e,n,s,r,a)}function m_(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const ye=[];let Ge=-1;const Mr=[];let Sn=null,Rr=0;const Jf=Promise.resolve();let Hi=null;function Ol(e){const t=Hi||Jf;return e?t.then(this?e.bind(this):e):t}function __(e){let t=Ge+1,n=ye.length;for(;t<n;){const r=t+n>>>1,s=ye[r],i=Us(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function Nl(e){if(!(e.flags&1)){const t=Us(e),n=ye[ye.length-1];!n||!(e.flags&2)&&t>=Us(n)?ye.push(e):ye.splice(__(t),0,e),e.flags|=1,Zf()}}function Zf(){Hi||(Hi=Jf.then(ed))}function y_(e){at(e)?Mr.push(...e):Sn&&e.id===-1?Sn.splice(Rr+1,0,e):e.flags&1||(Mr.push(e),e.flags|=1),Zf()}function Ru(e,t,n=Ge+1){for(;n<ye.length;n++){const r=ye[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;ye.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function td(e){if(Mr.length){const t=[...new Set(Mr)].sort((n,r)=>Us(n)-Us(r));if(Mr.length=0,Sn){Sn.push(...t);return}for(Sn=t,Rr=0;Rr<Sn.length;Rr++){const n=Sn[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Sn=null,Rr=0}}const Us=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ed(e){try{for(Ge=0;Ge<ye.length;Ge++){const t=ye[Ge];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ni(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ge<ye.length;Ge++){const t=ye[Ge];t&&(t.flags&=-2)}Ge=-1,ye.length=0,td(),Hi=null,(ye.length||Mr.length)&&ed()}}let Ce=null,nd=null;function Ki(e){const t=Ce;return Ce=e,nd=e&&e.type.__scopeId||null,t}function Ba(e,t=Ce,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Nu(-1);const i=Ki(t);let a;try{a=e(...s)}finally{Ki(i),r._d&&Nu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ml(e,t){if(Ce===null)return e;const n=So(Ce),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,a,l,c=Pt]=t[s];i&&(ht(i)&&(i={mounted:i,updated:i}),i.deep&&dn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function Yn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(qn(),rn(c,n,8,[e.el,l,e,t]),zn())}}const v_=Symbol("_vte"),E_=e=>e.__isTeleport;function Ll(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ll(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function rd(e,t){return ht(e)?Yt({name:e.name},t,{setup:e}):e}function sd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $a(e,t,n,r,s=!1){if(at(e)){e.forEach((R,P)=>$a(R,t&&(at(t)?t[P]:t),n,r,s));return}if(Rs(r)&&!s)return;const i=r.shapeFlag&4?So(r.component):r.el,a=s?null:i,{i:l,r:c}=e,h=t&&t.r,d=l.refs===Pt?l.refs={}:l.refs,p=l.setupState,m=It(p),y=p===Pt?()=>!1:R=>At(m,R);if(h!=null&&h!==c&&(qt(h)?(d[h]=null,y(h)&&(p[h]=null)):de(h)&&(h.value=null)),ht(c))ni(c,l,12,[a,d]);else{const R=qt(c),P=de(c);if(R||P){const D=()=>{if(e.f){const B=R?y(c)?p[c]:d[c]:c.value;s?at(B)&&Il(B,i):at(B)?B.includes(i)||B.push(i):R?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else R?(d[c]=a,y(c)&&(p[c]=a)):P&&(c.value=a,e.k&&(d[e.k]=a))};a?(D.id=-1,Re(D,n)):D()}}}vo().requestIdleCallback;vo().cancelIdleCallback;const Rs=e=>!!e.type.__asyncLoader,id=e=>e.type.__isKeepAlive;function T_(e,t){od(e,"a",t)}function w_(e,t){od(e,"da",t)}function od(e,t,n=he){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Ao(t,r,n),n){let s=n.parent;for(;s&&s.parent;)id(s.parent.vnode)&&I_(r,t,n,s),s=s.parent}}function I_(e,t,n,r){const s=Ao(t,e,r,!0);ad(()=>{Il(r[t],s)},n)}function Ao(e,t,n=he,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{qn();const l=ri(n),c=rn(t,n,e,a);return l(),zn(),c});return r?s.unshift(i):s.push(i),i}}const En=e=>(t,n=he)=>{(!js||e==="sp")&&Ao(e,(...r)=>t(...r),n)},A_=En("bm"),Fl=En("m"),b_=En("bu"),R_=En("u"),S_=En("bum"),ad=En("um"),C_=En("sp"),P_=En("rtg"),x_=En("rtc");function V_(e,t=he){Ao("ec",e,t)}const ld="components",D_="directives";function cd(e,t){return hd(ld,e,!0,t)||e}const k_=Symbol.for("v-ndc");function ud(e){return hd(D_,e)}function hd(e,t,n=!0,r=!1){const s=Ce||he;if(s){const i=s.type;if(e===ld){const l=Ey(i,!1);if(l&&(l===t||l===Fe(t)||l===yo(Fe(t))))return i}const a=Su(s[e]||i[e],t)||Su(s.appContext[e],t);return!a&&r?i:a}}function Su(e,t){return e&&(e[t]||e[Fe(t)]||e[yo(Fe(t))])}function fd(e,t,n,r){let s;const i=n,a=at(e);if(a||qt(e)){const l=a&&Nr(e);let c=!1;l&&(c=!Me(e),e=To(e)),s=new Array(e.length);for(let h=0,d=e.length;h<d;h++)s[h]=t(c?ce(e[h]):e[h],h,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(Vt(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=t(e[d],d,c,i)}}else s=[];return s}const ja=e=>e?Dd(e)?So(e):ja(e.parent):null,Ss=Yt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ja(e.parent),$root:e=>ja(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ul(e),$forceUpdate:e=>e.f||(e.f=()=>{Nl(e.update)}),$nextTick:e=>e.n||(e.n=Ol.bind(e.proxy)),$watch:e=>ty.bind(e)}),fa=(e,t)=>e!==Pt&&!e.__isScriptSetup&&At(e,t),O_={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=e;let h;if(t[0]!=="$"){const y=a[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(fa(r,t))return a[t]=1,r[t];if(s!==Pt&&At(s,t))return a[t]=2,s[t];if((h=e.propsOptions[0])&&At(h,t))return a[t]=3,i[t];if(n!==Pt&&At(n,t))return a[t]=4,n[t];qa&&(a[t]=0)}}const d=Ss[t];let p,m;if(d)return t==="$attrs"&&le(e.attrs,"get",""),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Pt&&At(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,At(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return fa(s,t)?(s[t]=n,!0):r!==Pt&&At(r,t)?(r[t]=n,!0):At(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||e!==Pt&&At(e,a)||fa(t,a)||(l=i[0])&&At(l,a)||At(r,a)||At(Ss,a)||At(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:At(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Cu(e){return at(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qa=!0;function N_(e){const t=Ul(e),n=e.proxy,r=e.ctx;qa=!1,t.beforeCreate&&Pu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:R,activated:P,deactivated:D,beforeDestroy:B,beforeUnmount:$,destroyed:H,unmounted:K,render:ft,renderTracked:nt,renderTriggered:I,errorCaptured:v,serverPrefetch:w,expose:A,inheritAttrs:b,components:S,directives:T,filters:pe}=t;if(h&&M_(h,r,null),a)for(const mt in a){const dt=a[mt];ht(dt)&&(r[mt]=dt.bind(n))}if(s){const mt=s.call(n,n);Vt(mt)&&(e.data=wo(mt))}if(qa=!0,i)for(const mt in i){const dt=i[mt],Ae=ht(dt)?dt.bind(n,n):ht(dt.get)?dt.get.bind(n,n):Ye,Ue=!ht(dt)&&ht(dt.set)?dt.set.bind(n):Ye,ke=fe({get:Ae,set:Ue});Object.defineProperty(r,mt,{enumerable:!0,configurable:!0,get:()=>ke.value,set:Nt=>ke.value=Nt})}if(l)for(const mt in l)dd(l[mt],r,n,mt);if(c){const mt=ht(c)?c.call(n):c;Reflect.ownKeys(mt).forEach(dt=>{Cs(dt,mt[dt])})}d&&Pu(d,e,"c");function $t(mt,dt){at(dt)?dt.forEach(Ae=>mt(Ae.bind(n))):dt&&mt(dt.bind(n))}if($t(A_,p),$t(Fl,m),$t(b_,y),$t(R_,R),$t(T_,P),$t(w_,D),$t(V_,v),$t(x_,nt),$t(P_,I),$t(S_,$),$t(ad,K),$t(C_,w),at(A))if(A.length){const mt=e.exposed||(e.exposed={});A.forEach(dt=>{Object.defineProperty(mt,dt,{get:()=>n[dt],set:Ae=>n[dt]=Ae})})}else e.exposed||(e.exposed={});ft&&e.render===Ye&&(e.render=ft),b!=null&&(e.inheritAttrs=b),S&&(e.components=S),T&&(e.directives=T),w&&sd(e)}function M_(e,t,n=Ye){at(e)&&(e=za(e));for(const r in e){const s=e[r];let i;Vt(s)?"default"in s?i=xe(s.from||r,s.default,!0):i=xe(s.from||r):i=xe(s),de(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function Pu(e,t,n){rn(at(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function dd(e,t,n,r){let s=r.includes(".")?Sd(n,r):()=>n[r];if(qt(e)){const i=t[e];ht(i)&&rr(s,i)}else if(ht(e))rr(s,e.bind(n));else if(Vt(e))if(at(e))e.forEach(i=>dd(i,t,n,r));else{const i=ht(e.handler)?e.handler.bind(n):t[e.handler];ht(i)&&rr(s,i,e)}}function Ul(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(h=>Gi(c,h,a,!0)),Gi(c,t,a)),Vt(t)&&i.set(t,c),c}function Gi(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Gi(e,i,n,!0),s&&s.forEach(a=>Gi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=L_[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const L_={data:xu,props:Vu,emits:Vu,methods:ys,computed:ys,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:ys,directives:ys,watch:U_,provide:xu,inject:F_};function xu(e,t){return t?e?function(){return Yt(ht(e)?e.call(this,this):e,ht(t)?t.call(this,this):t)}:t:e}function F_(e,t){return ys(za(e),za(t))}function za(e){if(at(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _e(e,t){return e?[...new Set([].concat(e,t))]:t}function ys(e,t){return e?Yt(Object.create(null),e,t):t}function Vu(e,t){return e?at(e)&&at(t)?[...new Set([...e,...t])]:Yt(Object.create(null),Cu(e),Cu(t??{})):t}function U_(e,t){if(!e)return t;if(!t)return e;const n=Yt(Object.create(null),e);for(const r in t)n[r]=_e(e[r],t[r]);return n}function pd(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let B_=0;function $_(e,t){return function(r,s=null){ht(r)||(r=Yt({},r)),s!=null&&!Vt(s)&&(s=null);const i=pd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:B_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wy,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ht(d.install)?(a.add(d),d.install(h,...p)):ht(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const y=h._ceVNode||Bt(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&t?t(y,d):e(y,d,m),c=!0,h._container=d,d.__vue_app__=h,So(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(rn(l,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Lr;Lr=h;try{return d()}finally{Lr=p}}};return h}}let Lr=null;function Cs(e,t){if(he){let n=he.provides;const r=he.parent&&he.parent.provides;r===n&&(n=he.provides=Object.create(r)),n[e]=t}}function xe(e,t,n=!1){const r=he||Ce;if(r||Lr){const s=Lr?Lr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ht(t)?t.call(r&&r.proxy):t}}const gd={},md=()=>Object.create(gd),_d=e=>Object.getPrototypeOf(e)===gd;function j_(e,t,n,r=!1){const s={},i=md();e.propsDefaults=Object.create(null),yd(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=r?s:Wf(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function q_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,l=It(s),[c]=e.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(bo(e.emitsOptions,m))continue;const y=t[m];if(c)if(At(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const R=Fe(m);s[R]=Ha(c,l,R,y,e,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{yd(e,t,s,i)&&(h=!0);let d;for(const p in l)(!t||!At(t,p)&&((d=dr(p))===p||!At(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ha(c,l,p,void 0,e,!0)):delete s[p]);if(i!==l)for(const p in i)(!t||!At(t,p))&&(delete i[p],h=!0)}h&&fn(e.attrs,"set","")}function yd(e,t,n,r){const[s,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(Is(c))continue;const h=t[c];let d;s&&At(s,d=Fe(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:bo(e.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=It(n),h=l||Pt;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ha(s,c,p,h[p],e,!At(h,p))}}return a}function Ha(e,t,n,r,s,i){const a=e[n];if(a!=null){const l=At(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ht(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ri(s);r=h[n]=c.call(null,t),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===dr(n))&&(r=!0))}return r}const z_=new WeakMap;function vd(e,t,n=!1){const r=n?z_:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},l=[];let c=!1;if(!ht(e)){const d=p=>{c=!0;const[m,y]=vd(p,t,!0);Yt(a,m),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Vt(e)&&r.set(e,kr),kr;if(at(i))for(let d=0;d<i.length;d++){const p=Fe(i[d]);Du(p)&&(a[p]=Pt)}else if(i)for(const d in i){const p=Fe(d);if(Du(p)){const m=i[d],y=a[p]=at(m)||ht(m)?{type:m}:Yt({},m),R=y.type;let P=!1,D=!0;if(at(R))for(let B=0;B<R.length;++B){const $=R[B],H=ht($)&&$.name;if(H==="Boolean"){P=!0;break}else H==="String"&&(D=!1)}else P=ht(R)&&R.name==="Boolean";y[0]=P,y[1]=D,(P||At(y,"default"))&&l.push(p)}}const h=[a,l];return Vt(e)&&r.set(e,h),h}function Du(e){return e[0]!=="$"&&!Is(e)}const Ed=e=>e[0]==="_"||e==="$stable",Bl=e=>at(e)?e.map(Qe):[Qe(e)],H_=(e,t,n)=>{if(t._n)return t;const r=Ba((...s)=>Bl(t(...s)),n);return r._c=!1,r},Td=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ed(s))continue;const i=e[s];if(ht(i))t[s]=H_(s,i,r);else if(i!=null){const a=Bl(i);t[s]=()=>a}}},wd=(e,t)=>{const n=Bl(t);e.slots.default=()=>n},Id=(e,t,n)=>{for(const r in t)(n||r!=="_")&&(e[r]=t[r])},K_=(e,t,n)=>{const r=e.slots=md();if(e.vnode.shapeFlag&32){const s=t._;s?(Id(r,t,n),n&&Pf(r,"_",s,!0)):Td(t,r)}else t&&wd(e,t)},G_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,a=Pt;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:Id(s,t,n):(i=!t.$stable,Td(t,s)),a=t}else t&&(wd(e,t),a={default:1});if(i)for(const l in s)!Ed(l)&&a[l]==null&&delete s[l]},Re=ay;function W_(e){return Q_(e)}function Q_(e,t){const n=vo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=Ye,insertStaticContent:R}=e,P=(_,E,x,M=null,k=null,F=null,G=void 0,q=null,j=!!E.dynamicChildren)=>{if(_===E)return;_&&!ms(_,E)&&(M=O(_),Nt(_,k,F,!0),_=null),E.patchFlag===-2&&(j=!1,E.dynamicChildren=null);const{type:U,ref:st,shapeFlag:Q}=E;switch(U){case Ro:D(_,E,x,M);break;case or:B(_,E,x,M);break;case ga:_==null&&$(E,x,M,G);break;case Te:S(_,E,x,M,k,F,G,q,j);break;default:Q&1?ft(_,E,x,M,k,F,G,q,j):Q&6?T(_,E,x,M,k,F,G,q,j):(Q&64||Q&128)&&U.process(_,E,x,M,k,F,G,q,j,Z)}st!=null&&k&&$a(st,_&&_.ref,F,E||_,!E)},D=(_,E,x,M)=>{if(_==null)r(E.el=l(E.children),x,M);else{const k=E.el=_.el;E.children!==_.children&&h(k,E.children)}},B=(_,E,x,M)=>{_==null?r(E.el=c(E.children||""),x,M):E.el=_.el},$=(_,E,x,M)=>{[_.el,_.anchor]=R(_.children,E,x,M,_.el,_.anchor)},H=({el:_,anchor:E},x,M)=>{let k;for(;_&&_!==E;)k=m(_),r(_,x,M),_=k;r(E,x,M)},K=({el:_,anchor:E})=>{let x;for(;_&&_!==E;)x=m(_),s(_),_=x;s(E)},ft=(_,E,x,M,k,F,G,q,j)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),_==null?nt(E,x,M,k,F,G,q,j):w(_,E,k,F,G,q,j)},nt=(_,E,x,M,k,F,G,q)=>{let j,U;const{props:st,shapeFlag:Q,transition:et,dirs:tt}=_;if(j=_.el=a(_.type,F,st&&st.is,st),Q&8?d(j,_.children):Q&16&&v(_.children,j,null,M,k,da(_,F),G,q),tt&&Yn(_,null,M,"created"),I(j,_,_.scopeId,G,M),st){for(const wt in st)wt!=="value"&&!Is(wt)&&i(j,wt,null,st[wt],F,M);"value"in st&&i(j,"value",null,st.value,F),(U=st.onVnodeBeforeMount)&&Ke(U,M,_)}tt&&Yn(_,null,M,"beforeMount");const ot=Y_(k,et);ot&&et.beforeEnter(j),r(j,E,x),((U=st&&st.onVnodeMounted)||ot||tt)&&Re(()=>{U&&Ke(U,M,_),ot&&et.enter(j),tt&&Yn(_,null,M,"mounted")},k)},I=(_,E,x,M,k)=>{if(x&&y(_,x),M)for(let F=0;F<M.length;F++)y(_,M[F]);if(k){let F=k.subTree;if(E===F||Pd(F.type)&&(F.ssContent===E||F.ssFallback===E)){const G=k.vnode;I(_,G,G.scopeId,G.slotScopeIds,k.parent)}}},v=(_,E,x,M,k,F,G,q,j=0)=>{for(let U=j;U<_.length;U++){const st=_[U]=q?Cn(_[U]):Qe(_[U]);P(null,st,E,x,M,k,F,G,q)}},w=(_,E,x,M,k,F,G)=>{const q=E.el=_.el;let{patchFlag:j,dynamicChildren:U,dirs:st}=E;j|=_.patchFlag&16;const Q=_.props||Pt,et=E.props||Pt;let tt;if(x&&Xn(x,!1),(tt=et.onVnodeBeforeUpdate)&&Ke(tt,x,E,_),st&&Yn(E,_,x,"beforeUpdate"),x&&Xn(x,!0),(Q.innerHTML&&et.innerHTML==null||Q.textContent&&et.textContent==null)&&d(q,""),U?A(_.dynamicChildren,U,q,x,M,da(E,k),F):G||dt(_,E,q,null,x,M,da(E,k),F,!1),j>0){if(j&16)b(q,Q,et,x,k);else if(j&2&&Q.class!==et.class&&i(q,"class",null,et.class,k),j&4&&i(q,"style",Q.style,et.style,k),j&8){const ot=E.dynamicProps;for(let wt=0;wt<ot.length;wt++){const Et=ot[wt],ne=Q[Et],Gt=et[Et];(Gt!==ne||Et==="value")&&i(q,Et,ne,Gt,k,x)}}j&1&&_.children!==E.children&&d(q,E.children)}else!G&&U==null&&b(q,Q,et,x,k);((tt=et.onVnodeUpdated)||st)&&Re(()=>{tt&&Ke(tt,x,E,_),st&&Yn(E,_,x,"updated")},M)},A=(_,E,x,M,k,F,G)=>{for(let q=0;q<E.length;q++){const j=_[q],U=E[q],st=j.el&&(j.type===Te||!ms(j,U)||j.shapeFlag&70)?p(j.el):x;P(j,U,st,null,M,k,F,G,!0)}},b=(_,E,x,M,k)=>{if(E!==x){if(E!==Pt)for(const F in E)!Is(F)&&!(F in x)&&i(_,F,E[F],null,k,M);for(const F in x){if(Is(F))continue;const G=x[F],q=E[F];G!==q&&F!=="value"&&i(_,F,q,G,k,M)}"value"in x&&i(_,"value",E.value,x.value,k)}},S=(_,E,x,M,k,F,G,q,j)=>{const U=E.el=_?_.el:l(""),st=E.anchor=_?_.anchor:l("");let{patchFlag:Q,dynamicChildren:et,slotScopeIds:tt}=E;tt&&(q=q?q.concat(tt):tt),_==null?(r(U,x,M),r(st,x,M),v(E.children||[],x,st,k,F,G,q,j)):Q>0&&Q&64&&et&&_.dynamicChildren?(A(_.dynamicChildren,et,x,k,F,G,q),(E.key!=null||k&&E===k.subTree)&&Ad(_,E,!0)):dt(_,E,x,st,k,F,G,q,j)},T=(_,E,x,M,k,F,G,q,j)=>{E.slotScopeIds=q,_==null?E.shapeFlag&512?k.ctx.activate(E,x,M,G,j):pe(E,x,M,k,F,G,j):De(_,E,j)},pe=(_,E,x,M,k,F,G)=>{const q=_.component=gy(_,M,k);if(id(_)&&(q.ctx.renderer=Z),my(q,!1,G),q.asyncDep){if(k&&k.registerDep(q,$t,G),!_.el){const j=q.subTree=Bt(or);B(null,j,E,x)}}else $t(q,_,E,x,k,F,G)},De=(_,E,x)=>{const M=E.component=_.component;if(iy(_,E,x))if(M.asyncDep&&!M.asyncResolved){mt(M,E,x);return}else M.next=E,M.update();else E.el=_.el,M.vnode=E},$t=(_,E,x,M,k,F,G)=>{const q=()=>{if(_.isMounted){let{next:Q,bu:et,u:tt,parent:ot,vnode:wt}=_;{const re=bd(_);if(re){Q&&(Q.el=wt.el,mt(_,Q,G)),re.asyncDep.then(()=>{_.isUnmounted||q()});return}}let Et=Q,ne;Xn(_,!1),Q?(Q.el=wt.el,mt(_,Q,G)):Q=wt,et&&Ni(et),(ne=Q.props&&Q.props.onVnodeBeforeUpdate)&&Ke(ne,ot,Q,wt),Xn(_,!0);const Gt=pa(_),Xt=_.subTree;_.subTree=Gt,P(Xt,Gt,p(Xt.el),O(Xt),_,k,F),Q.el=Gt.el,Et===null&&oy(_,Gt.el),tt&&Re(tt,k),(ne=Q.props&&Q.props.onVnodeUpdated)&&Re(()=>Ke(ne,ot,Q,wt),k)}else{let Q;const{el:et,props:tt}=E,{bm:ot,m:wt,parent:Et,root:ne,type:Gt}=_,Xt=Rs(E);if(Xn(_,!1),ot&&Ni(ot),!Xt&&(Q=tt&&tt.onVnodeBeforeMount)&&Ke(Q,Et,E),Xn(_,!0),et&&St){const re=()=>{_.subTree=pa(_),St(et,_.subTree,_,k,null)};Xt&&Gt.__asyncHydrate?Gt.__asyncHydrate(et,_,re):re()}else{ne.ce&&ne.ce._injectChildStyle(Gt);const re=_.subTree=pa(_);P(null,re,x,M,_,k,F),E.el=re.el}if(wt&&Re(wt,k),!Xt&&(Q=tt&&tt.onVnodeMounted)){const re=E;Re(()=>Ke(Q,Et,re),k)}(E.shapeFlag&256||Et&&Rs(Et.vnode)&&Et.vnode.shapeFlag&256)&&_.a&&Re(_.a,k),_.isMounted=!0,E=x=M=null}};_.scope.on();const j=_.effect=new Of(q);_.scope.off();const U=_.update=j.run.bind(j),st=_.job=j.runIfDirty.bind(j);st.i=_,st.id=_.uid,j.scheduler=()=>Nl(st),Xn(_,!0),U()},mt=(_,E,x)=>{E.component=_;const M=_.vnode.props;_.vnode=E,_.next=null,q_(_,E.props,M,x),G_(_,E.children,x),qn(),Ru(_),zn()},dt=(_,E,x,M,k,F,G,q,j=!1)=>{const U=_&&_.children,st=_?_.shapeFlag:0,Q=E.children,{patchFlag:et,shapeFlag:tt}=E;if(et>0){if(et&128){Ue(U,Q,x,M,k,F,G,q,j);return}else if(et&256){Ae(U,Q,x,M,k,F,G,q,j);return}}tt&8?(st&16&&ve(U,k,F),Q!==U&&d(x,Q)):st&16?tt&16?Ue(U,Q,x,M,k,F,G,q,j):ve(U,k,F,!0):(st&8&&d(x,""),tt&16&&v(Q,x,M,k,F,G,q,j))},Ae=(_,E,x,M,k,F,G,q,j)=>{_=_||kr,E=E||kr;const U=_.length,st=E.length,Q=Math.min(U,st);let et;for(et=0;et<Q;et++){const tt=E[et]=j?Cn(E[et]):Qe(E[et]);P(_[et],tt,x,null,k,F,G,q,j)}U>st?ve(_,k,F,!0,!1,Q):v(E,x,M,k,F,G,q,j,Q)},Ue=(_,E,x,M,k,F,G,q,j)=>{let U=0;const st=E.length;let Q=_.length-1,et=st-1;for(;U<=Q&&U<=et;){const tt=_[U],ot=E[U]=j?Cn(E[U]):Qe(E[U]);if(ms(tt,ot))P(tt,ot,x,null,k,F,G,q,j);else break;U++}for(;U<=Q&&U<=et;){const tt=_[Q],ot=E[et]=j?Cn(E[et]):Qe(E[et]);if(ms(tt,ot))P(tt,ot,x,null,k,F,G,q,j);else break;Q--,et--}if(U>Q){if(U<=et){const tt=et+1,ot=tt<st?E[tt].el:M;for(;U<=et;)P(null,E[U]=j?Cn(E[U]):Qe(E[U]),x,ot,k,F,G,q,j),U++}}else if(U>et)for(;U<=Q;)Nt(_[U],k,F,!0),U++;else{const tt=U,ot=U,wt=new Map;for(U=ot;U<=et;U++){const ge=E[U]=j?Cn(E[U]):Qe(E[U]);ge.key!=null&&wt.set(ge.key,U)}let Et,ne=0;const Gt=et-ot+1;let Xt=!1,re=0;const wn=new Array(Gt);for(U=0;U<Gt;U++)wn[U]=0;for(U=tt;U<=Q;U++){const ge=_[U];if(ne>=Gt){Nt(ge,k,F,!0);continue}let Oe;if(ge.key!=null)Oe=wt.get(ge.key);else for(Et=ot;Et<=et;Et++)if(wn[Et-ot]===0&&ms(ge,E[Et])){Oe=Et;break}Oe===void 0?Nt(ge,k,F,!0):(wn[Oe-ot]=U+1,Oe>=re?re=Oe:Xt=!0,P(ge,E[Oe],x,null,k,F,G,q,j),ne++)}const vr=Xt?X_(wn):kr;for(Et=vr.length-1,U=Gt-1;U>=0;U--){const ge=ot+U,Oe=E[ge],Er=ge+1<st?E[ge+1].el:M;wn[U]===0?P(null,Oe,x,Er,k,F,G,q,j):Xt&&(Et<0||U!==vr[Et]?ke(Oe,x,Er,2):Et--)}}},ke=(_,E,x,M,k=null)=>{const{el:F,type:G,transition:q,children:j,shapeFlag:U}=_;if(U&6){ke(_.component.subTree,E,x,M);return}if(U&128){_.suspense.move(E,x,M);return}if(U&64){G.move(_,E,x,Z);return}if(G===Te){r(F,E,x);for(let Q=0;Q<j.length;Q++)ke(j[Q],E,x,M);r(_.anchor,E,x);return}if(G===ga){H(_,E,x);return}if(M!==2&&U&1&&q)if(M===0)q.beforeEnter(F),r(F,E,x),Re(()=>q.enter(F),k);else{const{leave:Q,delayLeave:et,afterLeave:tt}=q,ot=()=>r(F,E,x),wt=()=>{Q(F,()=>{ot(),tt&&tt()})};et?et(F,ot,wt):wt()}else r(F,E,x)},Nt=(_,E,x,M=!1,k=!1)=>{const{type:F,props:G,ref:q,children:j,dynamicChildren:U,shapeFlag:st,patchFlag:Q,dirs:et,cacheIndex:tt}=_;if(Q===-2&&(k=!1),q!=null&&$a(q,null,x,_,!0),tt!=null&&(E.renderCache[tt]=void 0),st&256){E.ctx.deactivate(_);return}const ot=st&1&&et,wt=!Rs(_);let Et;if(wt&&(Et=G&&G.onVnodeBeforeUnmount)&&Ke(Et,E,_),st&6)He(_.component,x,M);else{if(st&128){_.suspense.unmount(x,M);return}ot&&Yn(_,null,E,"beforeUnmount"),st&64?_.type.remove(_,E,x,Z,M):U&&!U.hasOnce&&(F!==Te||Q>0&&Q&64)?ve(U,E,x,!1,!0):(F===Te&&Q&384||!k&&st&16)&&ve(j,E,x),M&&Mt(_)}(wt&&(Et=G&&G.onVnodeUnmounted)||ot)&&Re(()=>{Et&&Ke(Et,E,_),ot&&Yn(_,null,E,"unmounted")},x)},Mt=_=>{const{type:E,el:x,anchor:M,transition:k}=_;if(E===Te){Tn(x,M);return}if(E===ga){K(_);return}const F=()=>{s(x),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(_.shapeFlag&1&&k&&!k.persisted){const{leave:G,delayLeave:q}=k,j=()=>G(x,F);q?q(_.el,F,j):j()}else F()},Tn=(_,E)=>{let x;for(;_!==E;)x=m(_),s(_),_=x;s(E)},He=(_,E,x)=>{const{bum:M,scope:k,job:F,subTree:G,um:q,m:j,a:U}=_;ku(j),ku(U),M&&Ni(M),k.stop(),F&&(F.flags|=8,Nt(G,_,E,x)),q&&Re(q,E),Re(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ve=(_,E,x,M=!1,k=!1,F=0)=>{for(let G=F;G<_.length;G++)Nt(_[G],E,x,M,k)},O=_=>{if(_.shapeFlag&6)return O(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const E=m(_.anchor||_.el),x=E&&E[v_];return x?m(x):E};let Y=!1;const W=(_,E,x)=>{_==null?E._vnode&&Nt(E._vnode,null,null,!0):P(E._vnode||null,_,E,null,null,null,x),E._vnode=_,Y||(Y=!0,Ru(),td(),Y=!1)},Z={p:P,um:Nt,m:ke,r:Mt,mt:pe,mc:v,pc:dt,pbc:A,n:O,o:e};let _t,St;return{render:W,hydrate:_t,createApp:$_(W,_t)}}function da({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Y_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ad(e,t,n=!1){const r=e.children,s=t.children;if(at(r)&&at(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Cn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Ad(a,l)),l.type===Ro&&(l.el=a.el)}}function X_(e){const t=e.slice(),n=[0];let r,s,i,a,l;const c=e.length;for(r=0;r<c;r++){const h=e[r];if(h!==0){if(s=n[n.length-1],e[s]<h){t[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<h?i=l+1:a=l;h<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function bd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bd(t)}function ku(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const J_=Symbol.for("v-scx"),Z_=()=>xe(J_);function rr(e,t,n){return Rd(e,t,n)}function Rd(e,t,n=Pt){const{immediate:r,deep:s,flush:i,once:a}=n,l=Yt({},n),c=t&&r||!t&&i!=="post";let h;if(js){if(i==="sync"){const y=Z_();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=Ye,y.resume=Ye,y.pause=Ye,y}}const d=he;l.call=(y,R,P)=>rn(y,d,R,P);let p=!1;i==="post"?l.scheduler=y=>{Re(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,R)=>{R?y():Nl(y)}),l.augmentJob=y=>{t&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=g_(e,t,l);return js&&(h?h.push(m):c&&m()),m}function ty(e,t,n){const r=this.proxy,s=qt(e)?e.includes(".")?Sd(r,e):()=>r[e]:e.bind(r,r);let i;ht(t)?i=t:(i=t.handler,n=t);const a=ri(this),l=Rd(s,i.bind(r),n);return a(),l}function Sd(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ey=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Fe(t)}Modifiers`]||e[`${dr(t)}Modifiers`];function ny(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Pt;let s=n;const i=t.startsWith("update:"),a=i&&ey(r,t.slice(7));a&&(a.trim&&(s=n.map(d=>qt(d)?d.trim():d)),a.number&&(s=n.map(xf)));let l,c=r[l=aa(t)]||r[l=aa(Fe(t))];!c&&i&&(c=r[l=aa(dr(t))]),c&&rn(c,e,6,s);const h=r[l+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,rn(h,e,6,s)}}function Cd(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},l=!1;if(!ht(e)){const c=h=>{const d=Cd(h,t,!0);d&&(l=!0,Yt(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Vt(e)&&r.set(e,null),null):(at(i)?i.forEach(c=>a[c]=null):Yt(a,i),Vt(e)&&r.set(e,a),a)}function bo(e,t){return!e||!go(t)?!1:(t=t.slice(2).replace(/Once$/,""),At(e,t[0].toLowerCase()+t.slice(1))||At(e,dr(t))||At(e,t))}function pa(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:y,ctx:R,inheritAttrs:P}=e,D=Ki(e);let B,$;try{if(n.shapeFlag&4){const K=s||r,ft=K;B=Qe(h.call(ft,K,d,p,y,m,R)),$=l}else{const K=t;B=Qe(K.length>1?K(p,{attrs:l,slots:a,emit:c}):K(p,null)),$=t.props?l:ry(l)}}catch(K){Ps.length=0,Io(K,e,1),B=Bt(or)}let H=B;if($&&P!==!1){const K=Object.keys($),{shapeFlag:ft}=H;K.length&&ft&7&&(i&&K.some(wl)&&($=sy($,i)),H=Br(H,$,!1,!0))}return n.dirs&&(H=Br(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Ll(H,n.transition),B=H,Ki(D),B}const ry=e=>{let t;for(const n in e)(n==="class"||n==="style"||go(n))&&((t||(t={}))[n]=e[n]);return t},sy=(e,t)=>{const n={};for(const r in e)(!wl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function iy(e,t,n){const{props:r,children:s,component:i}=e,{props:a,children:l,patchFlag:c}=t,h=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ou(r,a,h):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!bo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Ou(r,a,h):!0:!!a;return!1}function Ou(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!bo(n,i))return!0}return!1}function oy({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Pd=e=>e.__isSuspense;function ay(e,t){t&&t.pendingBranch?at(e)?t.effects.push(...e):t.effects.push(e):y_(e)}const Te=Symbol.for("v-fgt"),Ro=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),Ps=[];let Pe=null;function Ot(e=!1){Ps.push(Pe=e?null:[])}function ly(){Ps.pop(),Pe=Ps[Ps.length-1]||null}let Bs=1;function Nu(e){Bs+=e,e<0&&Pe&&(Pe.hasOnce=!0)}function xd(e){return e.dynamicChildren=Bs>0?Pe||kr:null,ly(),Bs>0&&Pe&&Pe.push(e),e}function Qt(e,t,n,r,s,i){return xd(J(e,t,n,r,s,i,!0))}function Ur(e,t,n,r,s){return xd(Bt(e,t,n,r,s,!0))}function Wi(e){return e?e.__v_isVNode===!0:!1}function ms(e,t){return e.type===t.type&&e.key===t.key}const Vd=({key:e})=>e??null,Mi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?qt(e)||de(e)||ht(e)?{i:Ce,r:e,k:t,f:!!n}:e:null);function J(e,t=null,n=null,r=0,s=null,i=e===Te?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vd(t),ref:t&&Mi(t),scopeId:nd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ce};return l?($l(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=qt(n)?8:16),Bs>0&&!a&&Pe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pe.push(c),c}const Bt=cy;function cy(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===k_)&&(e=or),Wi(e)){const l=Br(e,t,!0);return n&&$l(l,n),Bs>0&&!i&&Pe&&(l.shapeFlag&6?Pe[Pe.indexOf(e)]=l:Pe.push(l)),l.patchFlag=-2,l}if(Ty(e)&&(e=e.__vccOpts),t){t=uy(t);let{class:l,style:c}=t;l&&!qt(l)&&(t.class=Rl(l)),Vt(c)&&(kl(c)&&!at(c)&&(c=Yt({},c)),t.style=bl(c))}const a=qt(e)?1:Pd(e)?128:E_(e)?64:Vt(e)?4:ht(e)?2:0;return J(e,t,n,r,s,a,i,!0)}function uy(e){return e?kl(e)||_d(e)?Yt({},e):e:null}function Br(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=e,h=t?fy(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Vd(h),ref:t&&t.ref?n&&i?at(i)?i.concat(Mi(t)):[i,Mi(t)]:Mi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Br(e.ssContent),ssFallback:e.ssFallback&&Br(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Ll(d,c.clone(d)),d}function hy(e=" ",t=0){return Bt(Ro,null,e,t)}function $s(e="",t=!1){return t?(Ot(),Ur(or,null,e)):Bt(or,null,e)}function Qe(e){return e==null||typeof e=="boolean"?Bt(or):at(e)?Bt(Te,null,e.slice()):Wi(e)?Cn(e):Bt(Ro,null,String(e))}function Cn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Br(e)}function $l(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(at(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),$l(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!_d(t)?t._ctx=Ce:s===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ht(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[hy(t)]):n=8);e.children=t,e.shapeFlag|=n}function fy(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Rl([t.class,r.class]));else if(s==="style")t.style=bl([t.style,r.style]);else if(go(s)){const i=t[s],a=r[s];a&&i!==a&&!(at(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=r[s])}return t}function Ke(e,t,n,r=null){rn(e,t,7,[n,r])}const dy=pd();let py=0;function gy(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||dy,i={uid:py++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(r,s),emitsOptions:Cd(r,s),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:r.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ny.bind(null,i),e.ce&&e.ce(i),i}let he=null,Qi,Ka;{const e=vo(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Qi=t("__VUE_INSTANCE_SETTERS__",n=>he=n),Ka=t("__VUE_SSR_SETTERS__",n=>js=n)}const ri=e=>{const t=he;return Qi(e),e.scope.on(),()=>{e.scope.off(),Qi(t)}},Mu=()=>{he&&he.scope.off(),Qi(null)};function Dd(e){return e.vnode.shapeFlag&4}let js=!1;function my(e,t=!1,n=!1){t&&Ka(t);const{props:r,children:s}=e.vnode,i=Dd(e);j_(e,r,i,t),K_(e,s,n);const a=i?_y(e,t):void 0;return t&&Ka(!1),a}function _y(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,O_);const{setup:r}=n;if(r){qn();const s=e.setupContext=r.length>1?vy(e):null,i=ri(e),a=ni(r,e,0,[e.props,s]),l=Rf(a);if(zn(),i(),(l||e.sp)&&!Rs(e)&&sd(e),l){if(a.then(Mu,Mu),t)return a.then(c=>{Lu(e,c,t)}).catch(c=>{Io(c,e,0)});e.asyncDep=a}else Lu(e,a,t)}else kd(e,t)}function Lu(e,t,n){ht(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Vt(t)&&(e.setupState=Xf(t)),kd(e,n)}let Fu;function kd(e,t,n){const r=e.type;if(!e.render){if(!t&&Fu&&!r.render){const s=r.template||Ul(e).template;if(s){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Yt(Yt({isCustomElement:i,delimiters:l},a),c);r.render=Fu(s,h)}}e.render=r.render||Ye}{const s=ri(e);qn();try{N_(e)}finally{zn(),s()}}}const yy={get(e,t){return le(e,"get",""),e[t]}};function vy(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,yy),slots:e.slots,emit:e.emit,expose:t}}function So(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xf(l_(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ss)return Ss[n](e)},has(t,n){return n in t||n in Ss}})):e.proxy}function Ey(e,t=!0){return ht(e)?e.displayName||e.name:e.name||t&&e.__name}function Ty(e){return ht(e)&&"__vccOpts"in e}const fe=(e,t)=>d_(e,t,js);function Od(e,t,n){const r=arguments.length;return r===2?Vt(t)&&!at(t)?Wi(t)?Bt(e,null,[t]):Bt(e,t):Bt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wi(n)&&(n=[n]),Bt(e,t,n))}const wy="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ga;const Uu=typeof window<"u"&&window.trustedTypes;if(Uu)try{Ga=Uu.createPolicy("vue",{createHTML:e=>e})}catch{}const Nd=Ga?e=>Ga.createHTML(e):e=>e,Iy="http://www.w3.org/2000/svg",Ay="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,Bu=hn&&hn.createElement("template"),by={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?hn.createElementNS(Iy,e):t==="mathml"?hn.createElementNS(Ay,e):n?hn.createElement(e,{is:n}):hn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>hn.createTextNode(e),createComment:e=>hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bu.innerHTML=Nd(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Bu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ry=Symbol("_vtc");function Sy(e,t,n){const r=e[Ry];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const $u=Symbol("_vod"),Cy=Symbol("_vsh"),Py=Symbol(""),xy=/(^|;)\s*display\s*:/;function Vy(e,t,n){const r=e.style,s=qt(n);let i=!1;if(n&&!s){if(t)if(qt(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Li(r,l,"")}else for(const a in t)n[a]==null&&Li(r,a,"");for(const a in n)a==="display"&&(i=!0),Li(r,a,n[a])}else if(s){if(t!==n){const a=r[Py];a&&(n+=";"+a),r.cssText=n,i=xy.test(n)}}else t&&e.removeAttribute("style");$u in e&&(e[$u]=i?r.display:"",e[Cy]&&(r.display="none"))}const ju=/\s*!important$/;function Li(e,t,n){if(at(n))n.forEach(r=>Li(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dy(e,t);ju.test(n)?e.setProperty(dr(r),n.replace(ju,""),"important"):e[r]=n}}const qu=["Webkit","Moz","ms"],ma={};function Dy(e,t){const n=ma[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return ma[t]=r;r=yo(r);for(let s=0;s<qu.length;s++){const i=qu[s]+r;if(i in e)return ma[t]=i}return t}const zu="http://www.w3.org/1999/xlink";function Hu(e,t,n,r,s,i=Um(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(zu,t.slice(6,t.length)):e.setAttributeNS(zu,t,n):n==null||i&&!Vf(n)?e.removeAttribute(t):e.setAttribute(t,i?"":en(n)?String(n):n)}function Ku(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Nd(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Vf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function Md(e,t,n,r){e.addEventListener(t,n,r)}function ky(e,t,n,r){e.removeEventListener(t,n,r)}const Gu=Symbol("_vei");function Oy(e,t,n,r,s=null){const i=e[Gu]||(e[Gu]={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=Ny(t);if(r){const h=i[t]=Fy(r,s);Md(e,l,h,c)}else a&&(ky(e,l,a,c),i[t]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function Ny(e){let t;if(Wu.test(e)){t={};let r;for(;r=e.match(Wu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dr(e.slice(2)),t]}let _a=0;const My=Promise.resolve(),Ly=()=>_a||(My.then(()=>_a=0),_a=Date.now());function Fy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;rn(Uy(r,n.value),t,5,[r])};return n.value=e,n.attached=Ly(),n}function Uy(e,t){if(at(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Qu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,By=(e,t,n,r,s,i)=>{const a=s==="svg";t==="class"?Sy(e,r,a):t==="style"?Vy(e,n,r):go(t)?wl(t)||Oy(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$y(e,t,r,a))?(Ku(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hu(e,t,r,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!qt(r))?Ku(e,Fe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Hu(e,t,r,a))};function $y(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Qu(t)&&ht(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qu(t)&&qt(n)?!1:t in e}const Yu=e=>{const t=e.props["onUpdate:modelValue"]||!1;return at(t)?n=>Ni(t,n):t},ya=Symbol("_assign"),jy={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=mo(t);Md(e,"change",()=>{const i=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?xf(Yi(a)):Yi(a));e[ya](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,Ol(()=>{e._assigning=!1})}),e[ya]=Yu(r)},mounted(e,{value:t}){Xu(e,t)},beforeUpdate(e,t,n){e[ya]=Yu(n)},updated(e,{value:t}){e._assigning||Xu(e,t)}};function Xu(e,t){const n=e.multiple,r=at(t);if(!(n&&!r&&!mo(t))){for(let s=0,i=e.options.length;s<i;s++){const a=e.options[s],l=Yi(a);if(n)if(r){const c=typeof l;c==="string"||c==="number"?a.selected=t.some(h=>String(h)===String(l)):a.selected=$m(t,l)>-1}else a.selected=t.has(l);else if(Eo(Yi(a),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Yi(e){return"_value"in e?e._value:e.value}const qy=Yt({patchProp:By},by);let Ju;function zy(){return Ju||(Ju=W_(qy))}const Hy=(...e)=>{const t=zy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Gy(r);if(!s)return;const i=t._component;!ht(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Ky(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function Ky(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gy(e){return qt(e)?document.querySelector(e):e}const Ld=new Set,we=new WeakMap,$r=new WeakMap,ar=new WeakMap,Wa=new WeakMap,Wy=new WeakMap,jr=new WeakMap,Xi=new WeakMap,vs=new WeakSet;let Mn,jl=0,ql=0;const pn="__aa_tgt",qs="__aa_del",Ji="__aa_new",Qy=e=>{const t=ev(e);t&&t.forEach(n=>nv(n))},Yy=e=>{e.forEach(t=>{t.target===Mn&&Jy(),we.has(t.target)&&pr(t.target)})};function Xy(e){const t=Wa.get(e);t==null||t.disconnect();let n=we.get(e),r=0;const s=5;n||(n=qr(e),we.set(e,n));const{offsetWidth:i,offsetHeight:a}=Mn,c=[n.top-s,i-(n.left+s+n.width),a-(n.top+s+n.height),n.left-s].map(d=>`${-1*Math.floor(d)}px`).join(" "),h=new IntersectionObserver(()=>{++r>1&&pr(e)},{root:Mn,threshold:1,rootMargin:c});h.observe(e),Wa.set(e,h)}function pr(e){clearTimeout(Xi.get(e));const t=Co(e),n=zs(t)?500:t.duration;Xi.set(e,setTimeout(async()=>{const r=ar.get(e);try{await(r==null?void 0:r.finished),we.set(e,qr(e)),Xy(e)}catch{}},n))}function Jy(){clearTimeout(Xi.get(Mn)),Xi.set(Mn,setTimeout(()=>{Ld.forEach(e=>$d(e,t=>Fd(()=>pr(t))))},100))}function Zy(e){setTimeout(()=>{Wy.set(e,setInterval(()=>Fd(pr.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Fd(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let Qa,Dr;const tv=typeof window<"u"&&"ResizeObserver"in window;tv&&(Mn=document.documentElement,Qa=new MutationObserver(Qy),Dr=new ResizeObserver(Yy),window.addEventListener("scroll",()=>{ql=window.scrollY,jl=window.scrollX}),Dr.observe(Mn));function ev(e){return e.reduce((r,s)=>[...r,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:e.reduce((r,s)=>{if(r===!1)return!1;if(s.target instanceof Element){if(va(s.target),!r.has(s.target)){r.add(s.target);for(let i=0;i<s.target.children.length;i++){const a=s.target.children.item(i);if(a){if(qs in a)return!1;va(s.target,a),r.add(a)}}}if(s.removedNodes.length)for(let i=0;i<s.removedNodes.length;i++){const a=s.removedNodes[i];if(qs in a)return!1;a instanceof Element&&(r.add(a),va(s.target,a),$r.set(a,[s.previousSibling,s.nextSibling]))}}return r},new Set)}function va(e,t){!t&&!(pn in e)?Object.defineProperty(e,pn,{value:e}):t&&!(pn in t)&&Object.defineProperty(t,pn,{value:e})}function nv(e){var t;const n=e.isConnected,r=we.has(e);n&&$r.has(e)&&$r.delete(e),ar.has(e)&&((t=ar.get(e))===null||t===void 0||t.cancel()),Ji in e?Zu(e):r&&n?sv(e):r&&!n?iv(e):Zu(e)}function We(e){return Number(e.replace(/[^0-9.\-]/g,""))}function rv(e){let t=e.parentElement;for(;t;){if(t.scrollLeft||t.scrollTop)return{x:t.scrollLeft,y:t.scrollTop};t=t.parentElement}return{x:0,y:0}}function qr(e){const t=e.getBoundingClientRect(),{x:n,y:r}=rv(e);return{top:t.top+r,left:t.left+n,width:t.width,height:t.height}}function Ud(e,t,n){let r=t.width,s=t.height,i=n.width,a=n.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const h=We(l.paddingTop)+We(l.paddingBottom)+We(l.borderTopWidth)+We(l.borderBottomWidth),d=We(l.paddingLeft)+We(l.paddingRight)+We(l.borderRightWidth)+We(l.borderLeftWidth);r-=d,i-=d,s-=h,a-=h}return[r,i,s,a].map(Math.round)}function Co(e){return pn in e&&jr.has(e[pn])?jr.get(e[pn]):{duration:250,easing:"ease-in-out"}}function Bd(e){if(pn in e)return e[pn]}function zl(e){const t=Bd(e);return t?vs.has(t):!1}function $d(e,...t){t.forEach(n=>n(e,jr.has(e)));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach(s=>s(r,jr.has(r)))}}function Hl(e){return Array.isArray(e)?e:[e]}function zs(e){return typeof e=="function"}function sv(e){const t=we.get(e),n=qr(e);if(!zl(e))return we.set(e,n);let r;if(!t)return;const s=Co(e);if(typeof s!="function"){const i=t.left-n.left,a=t.top-n.top,[l,c,h,d]=Ud(e,t,n),p={transform:`translate(${i}px, ${a}px)`},m={transform:"translate(0, 0)"};l!==c&&(p.width=`${l}px`,m.width=`${c}px`),h!==d&&(p.height=`${h}px`,m.height=`${d}px`),r=e.animate([p,m],{duration:s.duration,easing:s.easing})}else{const[i]=Hl(s(e,"remain",t,n));r=new Animation(i),r.play()}ar.set(e,r),we.set(e,n),r.addEventListener("finish",pr.bind(null,e))}function Zu(e){Ji in e&&delete e[Ji];const t=qr(e);we.set(e,t);const n=Co(e);if(!zl(e))return;let r;if(typeof n!="function")r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[s]=Hl(n(e,"add",t));r=new Animation(s),r.play()}ar.set(e,r),r.addEventListener("finish",pr.bind(null,e))}function th(e,t){var n;e.remove(),we.delete(e),$r.delete(e),ar.delete(e),(n=Wa.get(e))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(qs in e&&delete e[qs],Object.defineProperty(e,Ji,{value:!0,configurable:!0}),t&&e instanceof HTMLElement)for(const r in t)e.style[r]=""},0)}function iv(e){var t;if(!$r.has(e)||!we.has(e))return;const[n,r]=$r.get(e);Object.defineProperty(e,qs,{value:!0,configurable:!0});const s=window.scrollX,i=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=Bd(e))===null||t===void 0||t.appendChild(e),!zl(e))return th(e);const[a,l,c,h]=av(e),d=Co(e),p=we.get(e);(s!==jl||i!==ql)&&ov(e,s,i,d);let m,y={position:"absolute",top:`${a}px`,left:`${l}px`,width:`${c}px`,height:`${h}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!zs(d))Object.assign(e.style,y),m=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:d.duration,easing:"ease-out"});else{const[R,P]=Hl(d(e,"remove",p));(P==null?void 0:P.styleReset)!==!1&&(y=(P==null?void 0:P.styleReset)||y,Object.assign(e.style,y)),m=new Animation(R),m.play()}ar.set(e,m),m.addEventListener("finish",th.bind(null,e,y))}function ov(e,t,n,r){const s=jl-t,i=ql-n,a=document.documentElement.style.scrollBehavior;if(getComputedStyle(Mn).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+s,window.scrollY+i),!e.parentElement)return;const c=e.parentElement;let h=c.clientHeight,d=c.clientWidth;const p=performance.now();function m(){requestAnimationFrame(()=>{if(!zs(r)){const y=h-c.clientHeight,R=d-c.clientWidth;p+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-R,top:window.scrollY-y}),h=c.clientHeight,d=c.clientWidth,m()):document.documentElement.style.scrollBehavior=a}})}m()}function av(e){const t=we.get(e),[n,,r]=Ud(e,t,qr(e));let s=e.parentElement;for(;s&&(getComputedStyle(s).position==="static"||s instanceof HTMLBodyElement);)s=s.parentElement;s||(s=document.body);const i=getComputedStyle(s),a=we.get(s)||qr(s),l=Math.round(t.top-a.top)-We(i.borderTopWidth),c=Math.round(t.left-a.left)-We(i.borderLeftWidth);return[l,c,n,r]}function lv(e,t={}){return Qa&&Dr&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!zs(t)&&!t.disrespectUserMotionPreference||(vs.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),$d(e,pr,Zy,s=>Dr==null?void 0:Dr.observe(s)),zs(t)?jr.set(e,t):jr.set(e,{duration:250,easing:"ease-in-out",...t}),Qa.observe(e,{childList:!0}),Ld.add(e))),Object.freeze({parent:e,enable:()=>{vs.add(e)},disable:()=>{vs.delete(e)},isEnabled:()=>vs.has(e)})}const cv={mounted:(e,t)=>{lv(e,t.value||{})},getSSRProps:()=>({})},uv=cv,hv={install(e){e.directive("auto-animate",uv)}},fv="/logo.png",dv="/cart.svg",pv="/heart.svg",gv="/profile.svg",mv={class:"flex justify-between px-10 border-b border-slate-300"},_v={class:"flex items-center"},yv={class:"flex items-center gap-10"},vv={__name:"Header",props:{cartToggle:Function,totalPrice:Number},setup(e){return(t,n)=>{const r=cd("router-link");return Ot(),Qt("header",mv,[Bt(r,{to:"/"},{default:Ba(()=>n[1]||(n[1]=[J("div",{class:"flex items-center gap-4"},[J("img",{src:fv,alt:"Logo",class:"w-10"}),J("div",null,[J("h2",{class:"text-xl font-bold uppercase"},"vue sneakers"),J("p",{class:"text-slate-400"},"True sneakers shop")])],-1)])),_:1}),J("nav",_v,[J("ul",yv,[J("li",{onClick:n[0]||(n[0]=(...s)=>e.cartToggle&&e.cartToggle(...s)),class:"flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"},[n[2]||(n[2]=J("img",{src:dv,alt:"cart"},null,-1)),J("b",null,nn(e.totalPrice)+" USD",1)]),Bt(r,{to:"/favorites"},{default:Ba(()=>n[3]||(n[3]=[J("li",{class:"flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"},[J("img",{src:pv,alt:"Bookmarks"}),J("span",null,"Favorites")],-1)])),_:1}),n[4]||(n[4]=J("li",{class:"flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black"},[J("img",{src:gv,alt:"profile"}),J("span",null,"Profile")],-1))])])])}}},Ev={class:"flex items-center gap-5 mb-8"},Tv={__name:"DrawerHead",setup(e){const{cartToggle:t}=xe("cart");return(n,r)=>(Ot(),Qt("div",Ev,[(Ot(),Qt("svg",{onClick:r[0]||(r[0]=(...s)=>Xe(t)&&Xe(t)(...s)),class:"transition rotate-180 cursor-pointer opacity-30 hover:opacity-100 hover:-translate-x-1",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r[1]||(r[1]=[J("path",{d:"M1 7H14.7143",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),J("path",{d:"M8.71436 1L14.7144 7L8.71436 13",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))),r[2]||(r[2]=J("h2",{class:"text-2xl font-bold"},"Cart",-1))]))}},wv="/close.svg",Iv={class:"flex items-center w-full gap-4 p-4 border border-slate-200 rounded-xl"},Av=["src","alt"],bv={class:"flex flex-col flex-1"},Rv={class:"flex justify-between flex-1 w-full mt-2"},Sv={class:"flex-1"},Cv={__name:"CartItem",props:{item:Object,onClickRemove:Function},setup(e){return(t,n)=>(Ot(),Qt("div",Iv,[J("img",{class:"w-16 h-16",src:e.item.imageUrl,alt:e.item.title},null,8,Av),J("div",bv,[J("p",null,nn(e.item.name),1),J("div",Rv,[J("b",Sv,nn(e.item.price)+" USD",1),J("img",{onClick:n[0]||(n[0]=(...r)=>e.onClickRemove&&e.onClickRemove(...r)),class:"transition cursor-pointer opacity-40 hover:opacity-100",src:wv})])])]))}},Pv={class:"flex flex-col flex-1 gap-4"},xv={__name:"CartItemList",setup(e){const{cart:t,removeFromCart:n}=xe("cart");return(r,s)=>{const i=ud("auto-animate");return Ml((Ot(),Qt("div",Pv,[(Ot(!0),Qt(Te,null,fd(Xe(t),a=>(Ot(),Ur(Cv,{key:a.id,item:a,"on-click-remove":()=>Xe(n)(a)},null,8,["item","on-click-remove"]))),128))])),[[i]])}}},Vv={class:"flex flex-col items-center justify-center flex-1"},Dv=["src"],kv={class:"mt-4 text-2xl font-medium"},Ov={class:"text-gray-400"},eh={__name:"InfoBlock",props:{title:String,description:String,imageUrl:String},setup(e){return(t,n)=>(Ot(),Qt("div",Vv,[J("img",{height:"100",width:"100",class:"",src:e.imageUrl,alt:"info image"},null,8,Dv),J("h2",kv,nn(e.title),1),J("p",Ov,nn(e.description),1)]))}};var nh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Nv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],a=e[n++],l=e[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],a=s+1<e.length,l=a?e[s+1]:0,c=s+2<e.length,h=c?e[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,y=h&63;c||(y=64,a||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Nv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],l=s<e.length?n[e.charAt(s)]:0;++s;const h=s<e.length?n[e.charAt(s)]:64;++s;const p=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new Mv;const m=i<<2|l>>4;if(r.push(m),h!==64){const y=l<<4&240|h>>2;if(r.push(y),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Mv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lv=function(e){const t=jd(e);return qd.encodeByteArray(t,!0)},Zi=function(e){return Lv(e).replace(/\./g,"")},Fv=function(e){try{return qd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=()=>Uv().__FIREBASE_DEFAULTS__,$v=()=>{if(typeof process>"u"||typeof nh>"u")return;const e=nh.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fv(e[1]);return t&&JSON.parse(t)},Kl=()=>{try{return Bv()||$v()||jv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},qv=e=>{var t,n;return(n=(t=Kl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zv=e=>{const t=qv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zd=()=>{var e;return(e=Kl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Zi(JSON.stringify(n)),Zi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wv(){var e;const t=(e=Kl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Yv(){return!Wv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hd(){try{return typeof indexedDB=="object"}catch{return!1}}function Kd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Xv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="FirebaseError";class Hn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jv,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Zv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Hn(s,l,r)}}function Zv(e,t){return e.replace(tE,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const tE=/\{\$([^}]+)}/g;function to(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],a=t[s];if(rh(i)&&rh(a)){if(!to(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function rh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=1e3,nE=2,rE=4*60*60*1e3,sE=.5;function sh(e,t=eE,n=nE){const r=t*Math.pow(n,e),s=Math.round(sE*r*(Math.random()-.5)*2);return Math.min(rE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){return e&&e._delegate?e._delegate:e}class mn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(aE(t))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zn){return this.instances.has(t)}getOptions(t=Zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zn){return this.component?this.component.multipleInstances?t:Zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oE(e){return e===Zn?void 0:e}function aE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new iE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(vt||(vt={}));const cE={debug:vt.DEBUG,verbose:vt.VERBOSE,info:vt.INFO,warn:vt.WARN,error:vt.ERROR,silent:vt.SILENT},uE=vt.INFO,hE={[vt.DEBUG]:"log",[vt.VERBOSE]:"log",[vt.INFO]:"info",[vt.WARN]:"warn",[vt.ERROR]:"error"},fE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=hE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gl{constructor(t){this.name=t,this._logLevel=uE,this._logHandler=fE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,vt.DEBUG,...t),this._logHandler(this,vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,vt.VERBOSE,...t),this._logHandler(this,vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,vt.INFO,...t),this._logHandler(this,vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,vt.WARN,...t),this._logHandler(this,vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,vt.ERROR,...t),this._logHandler(this,vt.ERROR,...t)}}const dE=(e,t)=>t.some(n=>e instanceof n);let ih,oh;function pE(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gE(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gd=new WeakMap,Ya=new WeakMap,Wd=new WeakMap,Ea=new WeakMap,Wl=new WeakMap;function mE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(Dn(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Gd.set(n,e)}).catch(()=>{}),Wl.set(t,e),t}function _E(e){if(Ya.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});Ya.set(e,t)}let Xa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ya.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wd.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yE(e){Xa=e(Xa)}function vE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ta(this),t,...n);return Wd.set(r,t.sort?t.sort():[t]),Dn(r)}:gE().includes(e)?function(...t){return e.apply(Ta(this),t),Dn(Gd.get(this))}:function(...t){return Dn(e.apply(Ta(this),t))}}function EE(e){return typeof e=="function"?vE(e):(e instanceof IDBTransaction&&_E(e),dE(e,pE())?new Proxy(e,Xa):e)}function Dn(e){if(e instanceof IDBRequest)return mE(e);if(Ea.has(e))return Ea.get(e);const t=EE(e);return t!==e&&(Ea.set(e,t),Wl.set(t,e)),t}const Ta=e=>Wl.get(e);function Qd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(e,t),l=Dn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Dn(a.result),c.oldVersion,c.newVersion,Dn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const TE=["get","getKey","getAll","getAllKeys","count"],wE=["put","add","delete","clear"],wa=new Map;function ah(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(wa.get(t))return wa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=wE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return wa.set(t,i),i}yE(e=>({...e,get:(t,n,r)=>ah(t,n)||e.get(t,n,r),has:(t,n)=>!!ah(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ja="@firebase/app",lh="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Gl("@firebase/app"),bE="@firebase/app-compat",RE="@firebase/analytics-compat",SE="@firebase/analytics",CE="@firebase/app-check-compat",PE="@firebase/app-check",xE="@firebase/auth",VE="@firebase/auth-compat",DE="@firebase/database",kE="@firebase/data-connect",OE="@firebase/database-compat",NE="@firebase/functions",ME="@firebase/functions-compat",LE="@firebase/installations",FE="@firebase/installations-compat",UE="@firebase/messaging",BE="@firebase/messaging-compat",$E="@firebase/performance",jE="@firebase/performance-compat",qE="@firebase/remote-config",zE="@firebase/remote-config-compat",HE="@firebase/storage",KE="@firebase/storage-compat",GE="@firebase/firestore",WE="@firebase/vertexai",QE="@firebase/firestore-compat",YE="firebase",XE="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",JE={[Ja]:"fire-core",[bE]:"fire-core-compat",[SE]:"fire-analytics",[RE]:"fire-analytics-compat",[PE]:"fire-app-check",[CE]:"fire-app-check-compat",[xE]:"fire-auth",[VE]:"fire-auth-compat",[DE]:"fire-rtdb",[kE]:"fire-data-connect",[OE]:"fire-rtdb-compat",[NE]:"fire-fn",[ME]:"fire-fn-compat",[LE]:"fire-iid",[FE]:"fire-iid-compat",[UE]:"fire-fcm",[BE]:"fire-fcm-compat",[$E]:"fire-perf",[jE]:"fire-perf-compat",[qE]:"fire-rc",[zE]:"fire-rc-compat",[HE]:"fire-gcs",[KE]:"fire-gcs-compat",[GE]:"fire-fst",[QE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[YE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=new Map,ZE=new Map,tl=new Map;function ch(e,t){try{e.container.addComponent(t)}catch(n){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ln(e){const t=e.name;if(tl.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;tl.set(t,e);for(const n of eo.values())ch(n,e);for(const n of ZE.values())ch(n,e);return!0}function si(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new Po("app","Firebase",tT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=XE;function Yd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Za,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw kn.create("bad-app-name",{appName:String(s)});if(n||(n=zd()),!n)throw kn.create("no-options");const i=eo.get(s);if(i){if(to(n,i.options)&&to(r,i.config))return i;throw kn.create("duplicate-app",{appName:s})}const a=new lE(s);for(const c of tl.values())a.addComponent(c);const l=new eT(n,r,a);return eo.set(s,l),l}function Xd(e=Za){const t=eo.get(e);if(!t&&e===Za&&zd())return Yd();if(!t)throw kn.create("no-app",{appName:e});return t}function Je(e,t,n){var r;let s=(r=JE[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${t}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(l.join(" "));return}Ln(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebase-heartbeat-database",sT=1,Hs="firebase-heartbeat-store";let Ia=null;function Jd(){return Ia||(Ia=Qd(rT,sT,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hs)}catch(n){console.warn(n)}}}}).catch(e=>{throw kn.create("idb-open",{originalErrorMessage:e.message})})),Ia}async function iT(e){try{const n=(await Jd()).transaction(Hs),r=await n.objectStore(Hs).get(Zd(e));return await n.done,r}catch(t){if(t instanceof Hn)_n.warn(t.message);else{const n=kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(n.message)}}}async function uh(e,t){try{const r=(await Jd()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(t,Zd(e)),await r.done}catch(n){if(n instanceof Hn)_n.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function Zd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=1024,aT=30*24*60*60*1e3;class lT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hh();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=aT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hh(),{heartbeatsToSend:r,unsentEntries:s}=cT(this._heartbeatsCache.heartbeats),i=Zi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _n.warn(n),""}}}function hh(){return new Date().toISOString().substring(0,10)}function cT(e,t=oT){const n=[];let r=e.slice();for(const s of e){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),fh(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fh(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hd()?Kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function fh(e){return Zi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(e){Ln(new mn("platform-logger",t=>new IE(t),"PRIVATE")),Ln(new mn("heartbeat",t=>new lT(t),"PRIVATE")),Je(Ja,lh,e),Je(Ja,lh,"esm2017"),Je("fire-js","")}hT("");var dh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,tp;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,b,S){for(var T=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)T[pe-2]=arguments[pe];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],b=I.g[2];var S=I.g[3],T=v+(S^w&(b^S))+A[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=S+(b^v&(w^b))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(w^S&(v^w))+A[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=w+(v^b&(S^v))+A[3]+3250441966&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(S^w&(b^S))+A[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(b^v&(w^b))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(w^S&(v^w))+A[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=w+(v^b&(S^v))+A[7]+4249261313&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(S^w&(b^S))+A[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(b^v&(w^b))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(w^S&(v^w))+A[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=w+(v^b&(S^v))+A[11]+2304563134&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(S^w&(b^S))+A[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(b^v&(w^b))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(w^S&(v^w))+A[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=w+(v^b&(S^v))+A[15]+1236535329&4294967295,w=b+(T<<22&4294967295|T>>>10),T=v+(b^S&(w^b))+A[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^b&(v^w))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(S^v))+A[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(b^S))+A[0]+3921069994&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^S&(w^b))+A[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^b&(v^w))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(S^v))+A[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(b^S))+A[4]+3889429448&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^S&(w^b))+A[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^b&(v^w))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(S^v))+A[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(b^S))+A[8]+1163531501&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(b^S&(w^b))+A[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^b&(v^w))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^w&(S^v))+A[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(b^S))+A[12]+2368359562&4294967295,w=b+(T<<20&4294967295|T>>>12),T=v+(w^b^S)+A[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^b)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^w)+A[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=w+(b^S^v)+A[14]+4259657740&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^S)+A[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^b)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^w)+A[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=w+(b^S^v)+A[10]+3200236656&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^S)+A[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^b)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^w)+A[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=w+(b^S^v)+A[6]+76029189&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(w^b^S)+A[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^b)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^w)+A[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=w+(b^S^v)+A[2]+3299628645&4294967295,w=b+(T<<23&4294967295|T>>>9),T=v+(b^(w|~S))+A[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~b))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~w))+A[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=w+(S^(b|~v))+A[5]+4237533241&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~S))+A[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~b))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~w))+A[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=w+(S^(b|~v))+A[1]+2240044497&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~S))+A[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~b))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~w))+A[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=w+(S^(b|~v))+A[13]+1309151649&4294967295,w=b+(T<<21&4294967295|T>>>11),T=v+(b^(w|~S))+A[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~b))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~w))+A[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=w+(S^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,A=this.B,b=this.h,S=0;S<v;){if(b==0)for(;S<=w;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<v;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<v;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)I[w++]=this.g[v]>>>A&255;return I};function i(I,v){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function a(I,v){this.h=v;for(var w=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==v||(w[b]=S,A=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(v){return new a([v|0],0>v?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return D(h(-I));for(var v=[],w=1,A=0;I>=w;A++)v[A]=I/w|0,w*=4294967296;return new a(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return D(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(T))):(A=A.j(w),A=A.add(h(T)))}return A}var p=c(0),m=c(1),y=c(16777216);e=a.prototype,e.m=function(){if(P(this))return-D(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},e.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(P(this))return"-"+D(this).toString(I);for(var v=h(Math.pow(I,6)),w=this,A="";;){var b=K(w,v).g;w=B(w,b.j(v));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,R(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},e.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}e.l=function(I){return I=B(this,I),P(I)?-1:R(I)?0:1};function D(I){for(var v=I.g.length,w=[],A=0;A<v;A++)w[A]=~I.g[A];return new a(w,~I.h).add(m)}e.abs=function(){return P(this)?D(this):this},e.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0,b=0;b<=v;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=T>>>16,S&=65535,T&=65535,w[b]=T<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function B(I,v){return I.add(D(v))}e.j=function(I){if(R(this)||R(I))return p;if(P(this))return P(I)?D(this).j(D(I)):D(D(this).j(I));if(P(I))return D(this.j(D(I)));if(0>this.l(y)&&0>I.l(y))return h(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,T=this.i(A)&65535,pe=I.i(b)>>>16,De=I.i(b)&65535;w[2*A+2*b]+=T*De,$(w,2*A+2*b),w[2*A+2*b+1]+=S*De,$(w,2*A+2*b+1),w[2*A+2*b+1]+=T*pe,$(w,2*A+2*b+1),w[2*A+2*b+2]+=S*pe,$(w,2*A+2*b+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new a(w,0)};function $(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function H(I,v){this.g=I,this.h=v}function K(I,v){if(R(v))throw Error("division by zero");if(R(I))return new H(p,p);if(P(I))return v=K(D(I),v),new H(D(v.g),D(v.h));if(P(v))return v=K(I,D(v)),new H(D(v.g),v.h);if(30<I.g.length){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=v;0>=A.l(I);)w=ft(w),A=ft(A);var b=nt(w,1),S=nt(A,1);for(A=nt(A,2),w=nt(w,2);!R(A);){var T=S.add(A);0>=T.l(I)&&(b=b.add(w),S=T),A=nt(A,1),w=nt(w,1)}return v=B(I,b.j(v)),new H(b,v)}for(b=p;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(w),T=S.j(v);P(T)||0<T.l(I);)w-=A,S=h(w),T=S.j(v);R(S)&&(S=m),b=b.add(S),I=B(I,T)}return new H(b,I)}e.A=function(I){return K(this,I).h},e.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&I.i(A);return new a(w,this.h&I.h)},e.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|I.i(A);return new a(w,this.h|I.h)},e.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^I.i(A);return new a(w,this.h^I.h)};function ft(I){for(var v=I.g.length+1,w=[],A=0;A<v;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(w,I.h)}function nt(I,v){var w=v>>5;v%=32;for(var A=I.g.length-w,b=[],S=0;S<A;S++)b[S]=0<v?I.i(S+w)>>>v|I.i(S+w+1)<<32-v:I.i(S+w);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,sr=a}).apply(typeof dh<"u"?dh:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ep,Es,np,Fi,el,rp,sp,ip;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)t:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break t;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&t(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var V=f++;return{value:u(V,o[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function R(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,V){for(var z=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)z[Ct-2]=arguments[Ct];return u.prototype[C].apply(g,z)}}function P(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function D(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,V=g.length||0;o.length=C+V;for(let z=0;z<V;z++)o[C+z]=g[z]}else o.push(g)}}class B{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function H(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ft=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function nt(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function v(o){const u={};for(const f in o)u[f]=o[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let V=0;V<w.length;V++)f=w[V],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function T(){var o=Ae;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class pe{constructor(){this.h=this.g=null}add(u,f){const g=De.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var De=new B(()=>new $t,o=>o.reset());class $t{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,dt=!1,Ae=new pe,Ue=()=>{const o=l.Promise.resolve(void 0);mt=()=>{o.then(ke)}};var ke=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(f){S(f)}var u=De;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}dt=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Mt(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Mt.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function He(o,u){if(Mt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ft){t:{try{K(u.nodeName);var C=!0;break t}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ve[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&He.aa.h.call(this)}}R(He,Mt);var ve={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Y=0;function W(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++Y,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function _t(o){this.src=o,this.g={},this.h=0}_t.prototype.add=function(o,u,f,g,C){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var z=_(o,u,g,C);return-1<z?(u=o[z],f||(u.fa=!1)):(u=new W(u,this.src,V,!!g,C),u.fa=f,o.push(u)),u};function St(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),V;(V=0<=C)&&Array.prototype.splice.call(g,C,1),V&&(Z(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function _(o,u,f,g){for(var C=0;C<o.length;++C){var V=o[C];if(!V.da&&V.listener==u&&V.capture==!!f&&V.ha==g)return C}return-1}var E="closure_lm_"+(1e6*Math.random()|0),x={};function M(o,u,f,g,C){if(Array.isArray(u)){for(var V=0;V<u.length;V++)M(o,u[V],f,g,C);return null}return f=et(f),o&&o[O]?o.K(u,f,h(g)?!!g.capture:!!g,C):k(o,u,f,!1,g,C)}function k(o,u,f,g,C,V){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,Ct=st(o);if(Ct||(o[E]=Ct=new _t(o)),f=Ct.add(u,f,g,z,V),f.proxy)return f;if(g=F(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Tn||(C=z),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(j(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function G(o,u,f,g,C){if(Array.isArray(u))for(var V=0;V<u.length;V++)G(o,u[V],f,g,C);else g=h(g)?!!g.capture:!!g,f=et(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(V=o.g[u],f=_(V,f,g,C),-1<f&&(Z(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete o.g[u],o.h--)))):o&&(o=st(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,f,g,C)),(f=-1<o?u[o]:null)&&q(f))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])St(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(j(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=st(u))?(St(f,o),f.h==0&&(f.src=null,u[E]=null)):Z(o)}}}function j(o){return o in x?x[o]:x[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new He(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&q(o),o=f.call(g,u)}return o}function st(o){return o=o[E],o instanceof _t?o:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function et(o){return typeof o=="function"?o:(o[Q]||(o[Q]=function(u){return o.handleEvent(u)}),o[Q])}function tt(){Nt.call(this),this.i=new _t(this),this.M=this,this.F=null}R(tt,Nt),tt.prototype[O]=!0,tt.prototype.removeEventListener=function(o,u,f,g){G(this,o,u,f,g)};function ot(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Mt(u,o);else if(u instanceof Mt)u.target=u.target||o;else{var C=u;u=new Mt(g,o),A(u,C)}if(C=!0,f)for(var V=f.length-1;0<=V;V--){var z=u.g=f[V];C=wt(z,g,!0,u)&&C}if(z=u.g=o,C=wt(z,g,!0,u)&&C,C=wt(z,g,!1,u)&&C,f)for(V=0;V<f.length;V++)z=u.g=f[V],C=wt(z,g,!1,u)&&C}tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Z(f[g]);delete o.g[u],o.h--}}this.F=null},tt.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},tt.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function wt(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,V=0;V<u.length;++V){var z=u[V];if(z&&!z.da&&z.capture==f){var Ct=z.listener,Jt=z.ha||z.src;z.fa&&St(o.i,z),C=Ct.call(Jt,g)!==!1&&C}}return C&&!g.defaultPrevented}function Et(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function ne(o){o.g=Et(()=>{o.g=null,o.i&&(o.i=!1,ne(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Gt extends Nt{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ne(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(o){Nt.call(this),this.h=o,this.g={}}R(Xt,Nt);var re=[];function wn(o){nt(o.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},o),o.g={}}Xt.prototype.N=function(){Xt.aa.N.call(this),wn(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=l.JSON.stringify,ge=l.JSON.parse,Oe=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Er(){}Er.prototype.h=null;function Vc(o){return o.h||(o.h=o.i())}function Dc(){}var rs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Go(){Mt.call(this,"d")}R(Go,Mt);function Wo(){Mt.call(this,"c")}R(Wo,Mt);var Kn={},kc=null;function ui(){return kc=kc||new tt}Kn.La="serverreachability";function Oc(o){Mt.call(this,Kn.La,o)}R(Oc,Mt);function ss(o){const u=ui();ot(u,new Oc(u))}Kn.STAT_EVENT="statevent";function Nc(o,u){Mt.call(this,Kn.STAT_EVENT,o),this.stat=u}R(Nc,Mt);function me(o){const u=ui();ot(u,new Nc(u,o))}Kn.Ma="timingevent";function Mc(o,u){Mt.call(this,Kn.Ma,o),this.size=u}R(Mc,Mt);function is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function os(){this.g=!0}os.prototype.xa=function(){this.g=!1};function om(o,u,f,g,C,V){o.info(function(){if(o.g)if(V)for(var z="",Ct=V.split("&"),Jt=0;Jt<Ct.length;Jt++){var Tt=Ct[Jt].split("=");if(1<Tt.length){var se=Tt[0];Tt=Tt[1];var ie=se.split("_");z=2<=ie.length&&ie[1]=="type"?z+(se+"="+Tt+"&"):z+(se+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+z})}function am(o,u,f,g,C,V,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+V+" "+z})}function Tr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+cm(o,f)+(g?" "+g:"")})}function lm(o,u){o.info(function(){return"TIMEOUT: "+u})}os.prototype.info=function(){};function cm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var V=C[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return vr(f)}catch{return u}}var hi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qo;function fi(){}R(fi,Er),fi.prototype.g=function(){return new XMLHttpRequest},fi.prototype.i=function(){return{}},Qo=new fi;function In(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new Xt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fc}function Fc(){this.i=null,this.g="",this.h=!1}var Uc={},Yo={};function Xo(o,u,f){o.L=1,o.v=mi(an(u)),o.m=f,o.P=!0,Bc(o,null)}function Bc(o,u){o.F=Date.now(),di(o),o.A=an(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),tu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Fc,o.g=yu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Gt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(re[0]=C.toString()),C=re);for(var V=0;V<C.length;V++){var z=M(f,C[V],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ss(),om(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const u=this.M;u&&ln(o)==3?u.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)t:{const ie=ln(this.g);var u=this.g.Ba();const Ar=this.g.Z();if(!(3>ie)&&(ie!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||ie!=4||u==7||(u==8||0>=Ar?ss(3):ss(2)),Jo(this);var f=this.g.Z();this.X=f;e:if($c(this)){var g=au(this.g);o="";var C=g.length,V=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),as(this);var z="";break e}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(V&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,am(this.i,this.u,this.A,this.l,this.R,ie,f),this.o){if(this.T&&!this.K){e:{if(this.g){var Ct,Jt=this.g;if((Ct=Jt.g?Jt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ct)){var Tt=Ct;break e}}Tt=null}if(f=Tt)Tr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zo(this,f);else{this.o=!1,this.s=3,me(12),Gn(this),as(this);break t}}if(this.P){f=!0;let Be;for(;!this.J&&this.C<z.length;)if(Be=um(this,z),Be==Yo){ie==4&&(this.s=4,me(14),f=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==Uc){this.s=4,me(15),Tr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Tr(this.i,this.l,Be,null),Zo(this,Be);if($c(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||z.length!=0||this.h.h||(this.s=1,me(16),f=!1),this.o=this.o&&f,!f)Tr(this.i,this.l,z,"[Invalid Chunked Response]"),Gn(this),as(this);else if(0<z.length&&!this.W){this.W=!0;var se=this.j;se.g==this&&se.ba&&!se.M&&(se.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ia(se),se.M=!0,me(11))}}else Tr(this.i,this.l,z,null),Zo(this,z);ie==4&&Gn(this),this.o&&!this.J&&(ie==4?pu(this.j,this):(this.o=!1,di(this)))}else Sm(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,me(12)):(this.s=0,me(13)),Gn(this),as(this)}}}catch{}finally{}};function $c(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function um(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?Yo:(f=Number(u.substring(f,g)),isNaN(f)?Uc:(g+=1,g+f>u.length?Yo:(u=u.slice(g,g+f),o.C=g+f,u)))}In.prototype.cancel=function(){this.J=!0,Gn(this)};function di(o){o.S=Date.now()+o.I,jc(o,o.I)}function jc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=is(m(o.ba,o),u)}function Jo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lm(this.i,this.A),this.L!=2&&(ss(),me(17)),Gn(this),this.s=2,as(this)):jc(this,this.S-o)};function as(o){o.j.G==0||o.J||pu(o.j,o)}function Gn(o){Jo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,wn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Zo(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ta(f.h,o))){if(!o.K&&ta(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){t:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)wi(f),Ei(f);else break t;sa(f),me(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=is(m(f.Za,f),6e3));if(1>=Hc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Qn(f,11)}else if((o.K||f.g==o)&&wi(f),!$(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Tt=C[u];if(f.T=Tt[0],Tt=Tt[1],f.G==2)if(Tt[0]=="c"){f.K=Tt[1],f.ia=Tt[2];const se=Tt[3];se!=null&&(f.la=se,f.j.info("VER="+f.la));const ie=Tt[4];ie!=null&&(f.Aa=ie,f.j.info("SVER="+f.Aa));const Ar=Tt[5];Ar!=null&&typeof Ar=="number"&&0<Ar&&(g=1.5*Ar,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Be=o.g;if(Be){const Ai=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var V=g.h;V.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ea(V,V.h),V.h=null))}if(g.D){const oa=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(g.ya=oa,Dt(g.I,g.D,oa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=o;if(g.qa=_u(g,g.J?g.ia:null,g.W),z.K){Kc(g.h,z);var Ct=z,Jt=g.L;Jt&&(Ct.I=Jt),Ct.B&&(Jo(Ct),di(Ct)),g.g=z}else fu(g);0<f.i.length&&Ti(f)}else Tt[0]!="stop"&&Tt[0]!="close"||Qn(f,7);else f.G==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?Qn(f,7):ra(f):Tt[0]!="noop"&&f.l&&f.l.ta(Tt),f.v=0)}}ss(4)}catch{}}var hm=class{constructor(o,u){this.g=o,this.map=u}};function qc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Hc(o){return o.h?1:o.g?o.g.size:0}function ta(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ea(o,u){o.g?o.g.add(u):o.h=u}function Kc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}qc.prototype.cancel=function(){if(this.i=Gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Gc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return P(o.i)}function fm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function dm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Wc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=dm(o),g=fm(o),C=g.length,V=0;V<C;V++)u.call(void 0,g[V],f&&f[V],o)}var Qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var V=o[f].substring(0,g);C=o[f].substring(g+1)}else V=o[f];u(V,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Wn){this.h=o.h,pi(this,o.j),this.o=o.o,this.g=o.g,gi(this,o.s),this.l=o.l;var u=o.i,f=new us;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Yc(this,f),this.m=o.m}else o&&(u=String(o).match(Qc))?(this.h=!1,pi(this,u[1]||"",!0),this.o=ls(u[2]||""),this.g=ls(u[3]||"",!0),gi(this,u[4]),this.l=ls(u[5]||"",!0),Yc(this,u[6]||"",!0),this.m=ls(u[7]||"")):(this.h=!1,this.i=new us(null,this.h))}Wn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(cs(u,Xc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(cs(u,Xc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(cs(f,f.charAt(0)=="/"?_m:mm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",cs(f,vm)),o.join("")};function an(o){return new Wn(o)}function pi(o,u,f){o.j=f?ls(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function gi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Yc(o,u,f){u instanceof us?(o.i=u,Em(o.i,o.h)):(f||(u=cs(u,ym)),o.i=new us(u,o.h))}function Dt(o,u,f){o.i.set(u,f)}function mi(o){return Dt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ls(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function cs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,gm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xc=/[#\/\?@]/g,mm=/[#\?:]/g,_m=/[#\?]/g,ym=/[#\?@]/g,vm=/#/g;function us(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function An(o){o.g||(o.g=new Map,o.h=0,o.i&&pm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}e=us.prototype,e.add=function(o,u){An(this),this.i=null,o=wr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Jc(o,u){An(o),u=wr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Zc(o,u){return An(o),u=wr(o,u),o.g.has(u)}e.forEach=function(o,u){An(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},e.na=function(){An(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let V=0;V<C.length;V++)f.push(u[g])}return f},e.V=function(o){An(this);let u=[];if(typeof o=="string")Zc(this,o)&&(u=u.concat(this.g.get(wr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},e.set=function(o,u){return An(this),this.i=null,o=wr(this,o),Zc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function tu(o,u,f){Jc(o,u),0<f.length&&(o.i=null,o.g.set(wr(o,u),P(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const V=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=V;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),o.push(C)}}return this.i=o.join("&")};function wr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Em(o,u){u&&!o.j&&(An(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Jc(this,g),tu(this,C,f))},o)),o.j=u}function Tm(o,u){const f=new os;if(l.Image){const g=new Image;g.onload=y(bn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=y(bn,f,"TestLoadImage: error",!1,u,g),g.onabort=y(bn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=y(bn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function wm(o,u){const f=new os,g=new AbortController,C=setTimeout(()=>{g.abort(),bn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(V=>{clearTimeout(C),V.ok?bn(f,"TestPingServer: ok",!0,u):bn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),bn(f,"TestPingServer: error",!1,u)})}function bn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Im(){this.g=new Oe}function Am(o,u,f){const g=f||"";try{Wc(o,function(C,V){let z=C;h(C)&&(z=vr(C)),u.push(g+V+"="+encodeURIComponent(z))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function _i(o){this.l=o.Ub||null,this.j=o.eb||!1}R(_i,Er),_i.prototype.g=function(){return new yi(this.l,this.j)},_i.prototype.i=function(o){return function(){return o}}({});function yi(o,u){tt.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(yi,tt),e=yi.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,fs(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hs(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function eu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?hs(this):fs(this),this.readyState==3&&eu(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,hs(this))},e.Qa=function(o){this.g&&(this.response=o,hs(this))},e.ga=function(){this.g&&hs(this)};function hs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,fs(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function fs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nu(o){let u="";return nt(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function na(o,u,f){t:{for(g in f){var g=!1;break t}g=!0}g||(f=nu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Dt(o,u,f))}function Ft(o){tt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ft,tt);var bm=/^https?$/i,Rm=["POST","PUT"];e=Ft.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qo.g(),this.v=this.o?Vc(this.o):Vc(Qo),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(V){ru(this,V);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Rm,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ou(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){ru(this,V)}};function ru(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,su(o),vi(o)}function su(o){o.A||(o.A=!0,ot(o,"complete"),ot(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ot(this,"complete"),ot(this,"abort"),vi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),Ft.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?iu(this):this.bb())},e.bb=function(){iu(this)};function iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ln(o)!=4||o.Z()!=2)){if(o.u&&ln(o)==4)Et(o.Ea,0,o);else if(ot(o,"readystatechange"),ln(o)==4){o.h=!1;try{const z=o.Z();t:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var C=String(o.D).match(Qc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!bm.test(C?C.toLowerCase():"")}f=g}if(f)ot(o,"complete"),ot(o,"success");else{o.m=6;try{var V=2<ln(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",su(o)}}finally{vi(o)}}}}function vi(o,u){if(o.g){ou(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ot(o,"ready");try{f.onreadystatechange=g}catch{}}}function ou(o){o.I&&(l.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function ln(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ge(u)}};function au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sm(o){const u={};o=(o.g&&2<=ln(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=u[C]||[];u[C]=V,V.push(f)}I(u,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function lu(o){this.Aa=0,this.i=[],this.j=new os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,o),this.cb=ds("retryDelaySeedMs",1e4,o),this.Wa=ds("forwardChannelMaxRetries",2,o),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new qc(o&&o.concurrentRequestLimit),this.Da=new Im,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=lu.prototype,e.la=8,e.G=1,e.connect=function(o,u,f,g){me(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=_u(this,null,this.W),Ti(this)};function ra(o){if(cu(o),o.G==3){var u=o.U++,f=an(o.I);if(Dt(f,"SID",o.K),Dt(f,"RID",u),Dt(f,"TYPE","terminate"),ps(o,f),u=new In(o,o.j,u),u.L=2,u.v=mi(an(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=yu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),di(u)}mu(o)}function Ei(o){o.g&&(ia(o),o.g.cancel(),o.g=null)}function cu(o){Ei(o),o.u&&(l.clearTimeout(o.u),o.u=null),wi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ti(o){if(!zc(o.h)&&!o.s){o.s=!0;var u=o.Ga;mt||Ue(),dt||(mt(),dt=!0),Ae.add(u,o),o.B=0}}function Cm(o,u){return Hc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=is(m(o.Ga,o,u),gu(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new In(this,this.j,o);let V=this.o;if(this.S&&(V?(V=v(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(C.H=V,V=null),this.P)t:{for(var u=0,f=0;f<this.i.length;f++){e:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break e}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break t}if(u===4096||f===this.i.length-1){u=f+1;break t}}u=1e3}else u=1e3;u=hu(this,C,u),f=an(this.I),Dt(f,"RID",o),Dt(f,"CVER",22),this.D&&Dt(f,"X-HTTP-Session-Id",this.D),ps(this,f),V&&(this.O?u="headers="+encodeURIComponent(String(nu(V)))+"&"+u:this.m&&na(f,this.m,V)),ea(this.h,C),this.Ua&&Dt(f,"TYPE","init"),this.P?(Dt(f,"$req",u),Dt(f,"SID","null"),C.T=!0,Xo(C,f,null)):Xo(C,f,u),this.G=2}}else this.G==3&&(o?uu(this,o):this.i.length==0||zc(this.h)||uu(this))};function uu(o,u){var f;u?f=u.l:f=o.U++;const g=an(o.I);Dt(g,"SID",o.K),Dt(g,"RID",f),Dt(g,"AID",o.T),ps(o,g),o.m&&o.o&&na(g,o.m,o.o),f=new In(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=hu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ea(o.h,f),Xo(f,g,u)}function ps(o,u){o.H&&nt(o.H,function(f,g){Dt(u,g,f)}),o.l&&Wc({},function(f,g){Dt(u,g,f)})}function hu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;t:{var C=o.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=C[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let Ct=!0;for(let Jt=0;Jt<f;Jt++){let Tt=C[Jt].g;const se=C[Jt].map;if(Tt-=V,0>Tt)V=Math.max(0,C[Jt].g-100),Ct=!1;else try{Am(se,z,"req"+Tt+"_")}catch{g&&g(se)}}if(Ct){g=z.join("&");break t}}}return o=o.i.splice(0,f),u.D=o,g}function fu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;mt||Ue(),dt||(mt(),dt=!0),Ae.add(u,o),o.v=0}}function sa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=is(m(o.Fa,o),gu(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=is(m(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,me(10),Ei(this),du(this))};function ia(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function du(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);Dt(u,"RID","rpc"),Dt(u,"SID",o.K),Dt(u,"AID",o.T),Dt(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Dt(u,"TO",o.ja),Dt(u,"TYPE","xmlhttp"),ps(o,u),o.m&&o.o&&na(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=mi(an(u)),f.m=null,f.P=!0,Bc(f,o)}e.Za=function(){this.C!=null&&(this.C=null,Ei(this),sa(this),me(19))};function wi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function pu(o,u){var f=null;if(o.g==u){wi(o),ia(o),o.g=null;var g=2}else if(ta(o.h,u))f=u.D,Kc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=ui(),ot(g,new Mc(g,f)),Ti(o)}else fu(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Cm(o,u)||g==2&&sa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:Qn(o,5);break;case 4:Qn(o,10);break;case 3:Qn(o,6);break;default:Qn(o,2)}}}function gu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function Qn(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new Wn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pi(g,"https"),mi(g),C?Tm(g.toString(),f):wm(g.toString(),f)}else me(2);o.G=0,o.l&&o.l.sa(u),mu(o),cu(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),me(2)):(this.j.info("Failed to ping google.com"),me(1))};function mu(o){if(o.G=0,o.ka=[],o.l){const u=Gc(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function _u(o,u,f){var g=f instanceof Wn?an(f):new Wn(f);if(g.g!="")u&&(g.g=u+"."+g.g),gi(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var V=new Wn(null);g&&pi(V,g),u&&(V.g=u),C&&gi(V,C),f&&(V.l=f),g=V}return f=o.D,u=o.ya,f&&u&&Dt(g,f,u),Dt(g,"VER",o.la),ps(o,g),g}function yu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ft(new _i({eb:f})):new Ft(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function vu(){}e=vu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ii(){}Ii.prototype.g=function(o,u){return new be(o,u)};function be(o,u){tt.call(this),this.g=new lu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Ir(this)}R(be,tt),be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},be.prototype.close=function(){ra(this.g)},be.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=vr(o),o=f);u.i.push(new hm(u.Ya++,o)),u.G==3&&Ti(u)},be.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,be.aa.N.call(this)};function Eu(o){Go.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){t:{for(const f in u){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(Eu,Go);function Tu(){Wo.call(this),this.status=1}R(Tu,Wo);function Ir(o){this.g=o}R(Ir,vu),Ir.prototype.ua=function(){ot(this.g,"a")},Ir.prototype.ta=function(o){ot(this.g,new Eu(o))},Ir.prototype.sa=function(o){ot(this.g,new Tu)},Ir.prototype.ra=function(){ot(this.g,"b")},Ii.prototype.createWebChannel=Ii.prototype.g,be.prototype.send=be.prototype.o,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,ip=function(){return new Ii},sp=function(){return ui()},rp=Kn,el={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hi.NO_ERROR=0,hi.TIMEOUT=8,hi.HTTP_ERROR=6,Fi=hi,Lc.COMPLETE="complete",np=Lc,Dc.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",tt.prototype.listen=tt.prototype.K,Es=Dc,Ft.prototype.listenOnce=Ft.prototype.L,Ft.prototype.getLastError=Ft.prototype.Ka,Ft.prototype.getLastErrorCode=Ft.prototype.Ba,Ft.prototype.getStatus=Ft.prototype.Z,Ft.prototype.getResponseJson=Ft.prototype.Oa,Ft.prototype.getResponseText=Ft.prototype.oa,Ft.prototype.send=Ft.prototype.ea,Ft.prototype.setWithCredentials=Ft.prototype.Ha,ep=Ft}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const ph="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Gl("@firebase/firestore");function Sr(){return cr.logLevel}function X(e,...t){if(cr.logLevel<=vt.DEBUG){const n=t.map(Ql);cr.debug(`Firestore (${Zr}): ${e}`,...n)}}function yn(e,...t){if(cr.logLevel<=vt.ERROR){const n=t.map(Ql);cr.error(`Firestore (${Zr}): ${e}`,...n)}}function zr(e,...t){if(cr.logLevel<=vt.WARN){const n=t.map(Ql);cr.warn(`Firestore (${Zr}): ${e}`,...n)}}function Ql(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(e="Unexpected state"){const t=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+e;throw yn(t),new Error(t)}function bt(e,t){e||lt()}function ut(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rt extends Hn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ae.UNAUTHENTICATED))}shutdown(){}}class dT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pT{constructor(t){this.t=t,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){bt(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(bt(typeof r.accessToken=="string"),new op(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return bt(t===null||typeof t=="string"),new ae(t)}}class gT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mT{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new gT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _T{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){bt(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(bt(typeof n.token=="string"),this.R=n.token,new _T(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=vT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function gt(e,t){return e<t?-1:e>t?1:0}function Hr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{static now(){return Ht.fromMillis(Date.now())}static fromDate(t){return Ht.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Ht(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new rt(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new rt(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new rt(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new rt(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?gt(this.nanoseconds,t.nanoseconds):gt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static fromTimestamp(t){return new ct(t)}static min(){return new ct(new Ht(0,0))}static max(){return new ct(new Ht(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,n,r){n===void 0?n=0:n>t.length&&lt(),r===void 0?r=t.length-n:r>t.length-n&&lt(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ks.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ks?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class kt extends Ks{construct(t,n,r){return new kt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new rt(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new kt(n)}static emptyPath(){return new kt([])}}const ET=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends Ks{construct(t,n,r){return new te(t,n,r)}static isValidIdentifier(t){return ET.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new rt(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new rt(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new rt(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new rt(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(kt.fromString(t))}static fromName(t){return new it(kt.fromString(t).popFirst(5))}static empty(){return new it(kt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&kt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return kt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new kt(t.slice()))}}function TT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ct.fromTimestamp(r===1e9?new Ht(n+1,0):new Ht(n,r));return new Fn(s,it.empty(),t)}function wT(e){return new Fn(e.readTime,e.key,-1)}class Fn{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Fn(ct.min(),it.empty(),-1)}static max(){return new Fn(ct.max(),it.empty(),-1)}}function IT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=it.comparator(e.documentKey,t.documentKey),n!==0?n:gt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e){if(e.code!==L.FAILED_PRECONDITION||e.message!==AT)throw e;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&lt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):N.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):N.reject(n)}static resolve(t){return new N((n,r)=>{n(t)})}static reject(t){return new N((n,r)=>{r(t)})}static waitFor(t){return new N((n,r)=>{let s=0,i=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(t){let n=N.resolve(!1);for(const r of t)n=n.next(s=>s?N.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new N((r,s)=>{const i=t.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(t[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(t,n){return new N((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function RT(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function es(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}xo.oe=-1;function Vo(e){return e==null}function no(e){return e===0&&1/e==-1/0}function ST(e){return typeof e=="number"&&Number.isInteger(e)&&!no(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=gh(t)),t=PT(e.get(n),t);return gh(t)}function PT(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const i=e.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function gh(e){return e+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function gr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function lp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,n){this.comparator=t,this.root=n||Zt.EMPTY}insert(t,n){return new Lt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(t){return new Lt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pi(this.root,t,this.comparator,!0)}}class Pi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Zt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Zt.RED,this.left=s??Zt.EMPTY,this.right=i??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Zt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Zt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw lt();const t=this.left.check();if(t!==this.right.check())throw lt();return t+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw lt()}get value(){throw lt()}get color(){throw lt()}get left(){throw lt()}get right(){throw lt()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Zt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.comparator=t,this.data=new Lt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _h(this.data.getIterator())}getIteratorFrom(t){return new _h(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Kt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Kt(this.comparator);return n.data=t,n}}class _h{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new $e([])}unionWith(t){let n=new Kt(te.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new $e(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Hr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new cp("Invalid base64 string: "+i):i}}(t);return new ee(n)}static fromUint8Array(t){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new ee(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return gt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const xT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Un(e){if(bt(!!e),typeof e=="string"){let t=0;const n=xT.exec(e);if(bt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ut(e.seconds),nanos:Ut(e.nanos)}}function Ut(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bn(e){return typeof e=="string"?ee.fromBase64String(e):ee.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Do(e){const t=e.mapValue.fields.__previous_value__;return Yl(t)?Do(t):t}function Gs(e){const t=Un(e.mapValue.fields.__local_write_time__.timestampValue);return new Ht(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t,n,r,s,i,a,l,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ws{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ws("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ws&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $n(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Yl(e)?4:kT(e)?9007199254740991:DT(e)?10:11:lt()}function sn(e,t){if(e===t)return!0;const n=$n(e);if(n!==$n(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Gs(e).isEqual(Gs(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Un(s.timestampValue),l=Un(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Bn(s.bytesValue).isEqual(Bn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Ut(s.geoPointValue.latitude)===Ut(i.geoPointValue.latitude)&&Ut(s.geoPointValue.longitude)===Ut(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ut(s.integerValue)===Ut(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ut(s.doubleValue),l=Ut(i.doubleValue);return a===l?no(a)===no(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return Hr(e.arrayValue.values||[],t.arrayValue.values||[],sn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(mh(a)!==mh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!sn(a[c],l[c])))return!1;return!0}(e,t);default:return lt()}}function Qs(e,t){return(e.values||[]).find(n=>sn(n,t))!==void 0}function Kr(e,t){if(e===t)return 0;const n=$n(e),r=$n(t);if(n!==r)return gt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return gt(e.booleanValue,t.booleanValue);case 2:return function(i,a){const l=Ut(i.integerValue||i.doubleValue),c=Ut(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(e,t);case 3:return yh(e.timestampValue,t.timestampValue);case 4:return yh(Gs(e),Gs(t));case 5:return gt(e.stringValue,t.stringValue);case 6:return function(i,a){const l=Bn(i),c=Bn(a);return l.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=gt(l[h],c[h]);if(d!==0)return d}return gt(l.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,a){const l=gt(Ut(i.latitude),Ut(a.latitude));return l!==0?l:gt(Ut(i.longitude),Ut(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return vh(e.arrayValue,t.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=gt(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:vh(y,R)}(e.mapValue,t.mapValue);case 11:return function(i,a){if(i===xi.mapValue&&a===xi.mapValue)return 0;if(i===xi.mapValue)return 1;if(a===xi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=gt(c[p],d[p]);if(m!==0)return m;const y=Kr(l[c[p]],h[d[p]]);if(y!==0)return y}return gt(c.length,d.length)}(e.mapValue,t.mapValue);default:throw lt()}}function yh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return gt(e,t);const n=Un(e),r=Un(t),s=gt(n.seconds,r.seconds);return s!==0?s:gt(n.nanos,r.nanos)}function vh(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Kr(n[s],r[s]);if(i)return i}return gt(n.length,r.length)}function Gr(e){return nl(e)}function nl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Un(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Bn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return it.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nl(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${nl(n.fields[a])}`;return s+"}"}(e.mapValue):lt()}function Ui(e){switch($n(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Do(e);return t?16+Ui(t):16;case 5:return 2*e.stringValue.length;case 6:return Bn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ui(i),0)}(e.arrayValue);case 10:case 11:return function(r){let s=0;return gr(r.fields,(i,a)=>{s+=i.length+Ui(a)}),s}(e.mapValue);default:throw lt()}}function rl(e){return!!e&&"integerValue"in e}function Xl(e){return!!e&&"arrayValue"in e}function Eh(e){return!!e&&"nullValue"in e}function Th(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Bi(e){return!!e&&"mapValue"in e}function DT(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function xs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return gr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=xs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function kT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.value=t}static empty(){return new Ne({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Bi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xs(n)}setAll(t){let n=te.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=xs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Bi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return sn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Bi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){gr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ne(xs(this.value))}}function up(e){const t=[];return gr(e.fields,(n,r)=>{const s=new te([n]);if(Bi(r)){const i=up(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new $e(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n,r,s,i,a,l){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(t){return new ue(t,0,ct.min(),ct.min(),ct.min(),Ne.empty(),0)}static newFoundDocument(t,n,r,s){return new ue(t,1,n,ct.min(),r,s,0)}static newNoDocument(t,n){return new ue(t,2,n,ct.min(),ct.min(),Ne.empty(),0)}static newUnknownDocument(t,n){return new ue(t,3,n,ct.min(),ct.min(),Ne.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ne.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ne.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ue&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,n){this.position=t,this.inclusive=n}}function wh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],a=e.position[s];if(i.field.isKeyField()?r=it.comparator(it.fromName(a.referenceValue),n.key):r=Kr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ih(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!sn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,n="asc"){this.field=t,this.dir=n}}function OT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{}class zt extends hp{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new MT(t,n,r):n==="array-contains"?new UT(t,r):n==="in"?new BT(t,r):n==="not-in"?new $T(t,r):n==="array-contains-any"?new jT(t,r):new zt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new LT(t,r):new FT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return lt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends hp{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new on(t,n)}matches(t){return fp(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fp(e){return e.op==="and"}function dp(e){return NT(e)&&fp(e)}function NT(e){for(const t of e.filters)if(t instanceof on)return!1;return!0}function sl(e){if(e instanceof zt)return e.field.canonicalString()+e.op.toString()+Gr(e.value);if(dp(e))return e.filters.map(t=>sl(t)).join(",");{const t=e.filters.map(n=>sl(n)).join(",");return`${e.op}(${t})`}}function pp(e,t){return e instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(e,t):e instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&pp(a,s.filters[l]),!0):!1}(e,t):void lt()}function gp(e){return e instanceof zt?function(n){return`${n.field.canonicalString()} ${n.op} ${Gr(n.value)}`}(e):e instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(gp).join(" ,")+"}"}(e):"Filter"}class MT extends zt{constructor(t,n,r){super(t,n,r),this.key=it.fromName(r.referenceValue)}matches(t){const n=it.comparator(t.key,this.key);return this.matchesComparison(n)}}class LT extends zt{constructor(t,n){super(t,"in",n),this.keys=mp("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class FT extends zt{constructor(t,n){super(t,"not-in",n),this.keys=mp("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function mp(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>it.fromName(r.referenceValue))}class UT extends zt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Xl(n)&&Qs(n.arrayValue,this.value)}}class BT extends zt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Qs(this.value.arrayValue,n)}}class $T extends zt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Qs(this.value.arrayValue,n)}}class jT extends zt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Xl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(t,n=null,r=[],s=[],i=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Ah(e,t=null,n=[],r=[],s=null,i=null,a=null){return new qT(e,t,n,r,s,i,a)}function Jl(e){const t=ut(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>sl(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Gr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Gr(r)).join(",")),t.ue=n}return t.ue}function Zl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!OT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!pp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ih(e.startAt,t.startAt)&&Ih(e.endAt,t.endAt)}function il(e){return it.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zT(e,t,n,r,s,i,a,l){return new ko(e,t,n,r,s,i,a,l)}function _p(e){return new ko(e)}function bh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function HT(e){return e.collectionGroup!==null}function Vs(e){const t=ut(e);if(t.ce===null){t.ce=[];const n=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Kt(te.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.ce.push(new so(i,r))}),n.has(te.keyField().canonicalString())||t.ce.push(new so(te.keyField(),r))}return t.ce}function Ze(e){const t=ut(e);return t.le||(t.le=KT(t,Vs(e))),t.le}function KT(e,t){if(e.limitType==="F")return Ah(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)});const n=e.endAt?new ro(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ro(e.startAt.position,e.startAt.inclusive):null;return Ah(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ol(e,t,n){return new ko(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Oo(e,t){return Zl(Ze(e),Ze(t))&&e.limitType===t.limitType}function yp(e){return`${Jl(Ze(e))}|lt:${e.limitType}`}function Cr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gp(s)).join(", ")}]`),Vo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Gr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Gr(s)).join(",")),`Target(${r})`}(Ze(e))}; limitType=${e.limitType})`}function No(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):it.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Vs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=wh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Vs(r),s)||r.endAt&&!function(a,l,c){const h=wh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Vs(r),s))}(e,t)}function GT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function vp(e){return(t,n)=>{let r=!1;for(const s of Vs(e)){const i=WT(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WT(e,t,n){const r=e.field.isKeyField()?it.comparator(t.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Kr(c,h):lt()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return lt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){gr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return lp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=new Lt(it.comparator);function vn(){return QT}const Ep=new Lt(it.comparator);function Ts(...e){let t=Ep;for(const n of e)t=t.insert(n.key,n);return t}function Tp(e){let t=Ep;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function tr(){return Ds()}function wp(){return Ds()}function Ds(){return new mr(e=>e.toString(),(e,t)=>e.isEqual(t))}const YT=new Lt(it.comparator),XT=new Kt(it.comparator);function pt(...e){let t=XT;for(const n of e)t=t.add(n);return t}const JT=new Kt(gt);function ZT(){return JT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:no(t)?"-0":t}}function Ip(e){return{integerValue:""+e}}function tw(e,t){return ST(t)?Ip(t):tc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this._=void 0}}function ew(e,t,n){return e instanceof io?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yl(i)&&(i=Do(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,t):e instanceof Ys?bp(e,t):e instanceof Xs?Rp(e,t):function(s,i){const a=Ap(s,i),l=Rh(a)+Rh(s.Pe);return rl(a)&&rl(s.Pe)?Ip(l):tc(s.serializer,l)}(e,t)}function nw(e,t,n){return e instanceof Ys?bp(e,t):e instanceof Xs?Rp(e,t):n}function Ap(e,t){return e instanceof oo?function(r){return rl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class io extends Mo{}class Ys extends Mo{constructor(t){super(),this.elements=t}}function bp(e,t){const n=Sp(t);for(const r of e.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xs extends Mo{constructor(t){super(),this.elements=t}}function Rp(e,t){let n=Sp(t);for(const r of e.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class oo extends Mo{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function Rh(e){return Ut(e.integerValue||e.doubleValue)}function Sp(e){return Xl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function rw(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Ys&&s instanceof Ys||r instanceof Xs&&s instanceof Xs?Hr(r.elements,s.elements,sn):r instanceof oo&&s instanceof oo?sn(r.Pe,s.Pe):r instanceof io&&s instanceof io}(e.transform,t.transform)}class sw{constructor(t,n){this.version=t,this.transformResults=n}}class qe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function $i(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Lo{}function Cp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ec(e.key,qe.none()):new ii(e.key,e.data,qe.none());{const n=e.data,r=Ne.empty();let s=new Kt(te.comparator);for(let i of t.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new _r(e.key,r,new $e(s.toArray()),qe.none())}}function iw(e,t,n){e instanceof ii?function(s,i,a){const l=s.value.clone(),c=Ch(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof _r?function(s,i,a){if(!$i(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Ch(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Pp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function ks(e,t,n,r){return e instanceof ii?function(i,a,l,c){if(!$i(i.precondition,a))return l;const h=i.value.clone(),d=Ph(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof _r?function(i,a,l,c){if(!$i(i.precondition,a))return l;const h=Ph(i.fieldTransforms,c,a),d=a.data;return d.setAll(Pp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(e,t,n,r):function(i,a,l){return $i(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function ow(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Ap(r.transform,s||null);i!=null&&(n===null&&(n=Ne.empty()),n.set(r.field,i))}return n||null}function Sh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,a)=>rw(i,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ii extends Lo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends Lo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Pp(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ch(e,t,n){const r=new Map;bt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],a=i.transform,l=t.data.field(i.field);r.set(i.field,nw(a,l,n[s]))}return r}function Ph(e,t,n){const r=new Map;for(const s of e){const i=s.transform,a=n.data.field(s.field);r.set(s.field,ew(i,a,t))}return r}class ec extends Lo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aw extends Lo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&iw(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=ks(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=ks(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=wp();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Cp(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ct.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),pt())}isEqual(t){return this.batchId===t.batchId&&Hr(this.mutations,t.mutations,(n,r)=>Sh(n,r))&&Hr(this.baseMutations,t.baseMutations,(n,r)=>Sh(n,r))}}class nc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){bt(t.mutations.length===r.length);let s=function(){return YT}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new nc(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt,yt;function hw(e){switch(e){default:return lt();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function xp(e){if(e===void 0)return yn("GRPC error has no .code"),L.UNKNOWN;switch(e){case jt.OK:return L.OK;case jt.CANCELLED:return L.CANCELLED;case jt.UNKNOWN:return L.UNKNOWN;case jt.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case jt.INTERNAL:return L.INTERNAL;case jt.UNAVAILABLE:return L.UNAVAILABLE;case jt.UNAUTHENTICATED:return L.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case jt.NOT_FOUND:return L.NOT_FOUND;case jt.ALREADY_EXISTS:return L.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return L.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case jt.ABORTED:return L.ABORTED;case jt.OUT_OF_RANGE:return L.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return L.UNIMPLEMENTED;case jt.DATA_LOSS:return L.DATA_LOSS;default:return lt()}}(yt=jt||(jt={}))[yt.OK=0]="OK",yt[yt.CANCELLED=1]="CANCELLED",yt[yt.UNKNOWN=2]="UNKNOWN",yt[yt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yt[yt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yt[yt.NOT_FOUND=5]="NOT_FOUND",yt[yt.ALREADY_EXISTS=6]="ALREADY_EXISTS",yt[yt.PERMISSION_DENIED=7]="PERMISSION_DENIED",yt[yt.UNAUTHENTICATED=16]="UNAUTHENTICATED",yt[yt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yt[yt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yt[yt.ABORTED=10]="ABORTED",yt[yt.OUT_OF_RANGE=11]="OUT_OF_RANGE",yt[yt.UNIMPLEMENTED=12]="UNIMPLEMENTED",yt[yt.INTERNAL=13]="INTERNAL",yt[yt.UNAVAILABLE=14]="UNAVAILABLE",yt[yt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=new sr([4294967295,4294967295],0);function xh(e){const t=fw().encode(e),n=new tp;return n.update(t),new Uint8Array(n.digest())}function Vh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new sr([n,r],0),new sr([s,i],0)]}class rc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ws(`Invalid padding: ${n}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new ws(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ie=sr.fromNumber(this.Te)}Ee(t,n,r){let s=t.add(n.multiply(sr.fromNumber(r)));return s.compare(dw)===1&&(s=new sr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=xh(t),[r,s]=Vh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new rc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Te===0)return;const n=xh(t),[r,s]=Vh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,oi.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Fo(ct.min(),s,new Lt(gt),vn(),pt())}}class oi{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new oi(r,n,pt(),pt(),pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n,r,s){this.Re=t,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vp{constructor(t,n){this.targetId=t,this.me=n}}class Dp{constructor(t,n,r=ee.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Dh{constructor(){this.fe=0,this.ge=kh(),this.pe=ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=pt(),n=pt(),r=pt();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:lt()}}),new oi(this.pe,this.ye,t,n,r)}Ce(){this.we=!1,this.ge=kh()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,bt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pw{constructor(t){this.Le=t,this.Be=new Map,this.ke=vn(),this.qe=Vi(),this.Qe=Vi(),this.Ke=new Lt(gt)}$e(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(n,t.Ve):this.We(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.We(n,t.key,t.Ve)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(t.resumeToken));break;default:lt()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.me.count,s=this.Ye(n);if(s){const i=s.target;if(il(i))if(r===0){const a=new it(i.path);this.We(n,a,ue.newNoDocument(a,ct.min()))}else bt(r===1);else{const a=this.Ze(n);if(a!==r){const l=this.Xe(t),c=l?this.et(l,t,a):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Bn(r).toUint8Array()}catch(c){if(c instanceof cp)return zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new rc(a,s,i)}catch(c){return zr(c instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(t,n,r){return n.me.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(l)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Ye(a);if(l){if(i.current&&il(l.target)){const c=new it(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,ue.newNoDocument(c,t))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=pt();this.Qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new Fo(t,n,this.Ke,this.ke,r);return this.ke=vn(),this.qe=Vi(),this.Qe=Vi(),this.Ke=new Lt(gt),s}Ue(t,n){if(!this.je(t))return;const r=this.ot(t,n.key)?2:0;this.ze(t).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.ot(t,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(t)),this.Qe=this.Qe.insert(n,this._t(n).add(t)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(t){this.Be.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let n=this.Be.get(t);return n||(n=new Dh,this.Be.set(t,n)),n}_t(t){let n=this.Qe.get(t);return n||(n=new Kt(gt),this.Qe=this.Qe.insert(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new Kt(gt),this.qe=this.qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||X("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new Dh),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}ot(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function Vi(){return new Lt(it.comparator)}function kh(){return new Lt(it.comparator)}const gw={asc:"ASCENDING",desc:"DESCENDING"},mw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_w={and:"AND",or:"OR"};class yw{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function al(e,t){return e.useProto3Json||Vo(t)?t:{value:t}}function ao(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kp(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function vw(e,t){return ao(e,t.toTimestamp())}function tn(e){return bt(!!e),ct.fromTimestamp(function(n){const r=Un(n);return new Ht(r.seconds,r.nanos)}(e))}function sc(e,t){return ll(e,t).canonicalString()}function ll(e,t){const n=function(s){return new kt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Op(e){const t=kt.fromString(e);return bt(Up(t)),t}function cl(e,t){return sc(e.databaseId,t.path)}function Aa(e,t){const n=Op(t);if(n.get(1)!==e.databaseId.projectId)throw new rt(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rt(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new it(Mp(n))}function Np(e,t){return sc(e.databaseId,t)}function Ew(e){const t=Op(e);return t.length===4?kt.emptyPath():Mp(t)}function ul(e){return new kt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Mp(e){return bt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Oh(e,t,n){return{name:cl(e,t),fields:n.value.mapValue.fields}}function Tw(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:lt()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(bt(d===void 0||typeof d=="string"),ee.fromBase64String(d||"")):(bt(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ee.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(h){const d=h.code===void 0?L.UNKNOWN:xp(h.code);return new rt(d,h.message||"")}(a);n=new Dp(r,s,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Aa(e,r.document.name),i=tn(r.document.updateTime),a=r.document.createTime?tn(r.document.createTime):ct.min(),l=new Ne({mapValue:{fields:r.document.fields}}),c=ue.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new ji(h,d,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Aa(e,r.document),i=r.readTime?tn(r.readTime):ct.min(),a=ue.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ji([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Aa(e,r.document),i=r.removedTargetIds||[];n=new ji([],i,s,null)}else{if(!("filter"in t))return lt();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new uw(s,i),l=r.targetId;n=new Vp(l,a)}}return n}function ww(e,t){let n;if(t instanceof ii)n={update:Oh(e,t.key,t.value)};else if(t instanceof ec)n={delete:cl(e,t.key)};else if(t instanceof _r)n={update:Oh(e,t.key,t.data),updateMask:Vw(t.fieldMask)};else{if(!(t instanceof aw))return lt();n={verify:cl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof io)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof oo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw lt()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:lt()}(e,t.precondition)),n}function Iw(e,t){return e&&e.length>0?(bt(t!==void 0),e.map(n=>function(s,i){let a=s.updateTime?tn(s.updateTime):tn(i);return a.isEqual(ct.min())&&(a=tn(i)),new sw(a,s.transformResults||[])}(n,t))):[]}function Aw(e,t){return{documents:[Np(e,t.path)]}}function bw(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Np(e,s);const i=function(h){if(h.length!==0)return Fp(on.create(h,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Pr(m.field),direction:Cw(m.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=al(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ct:n,parent:s}}function Rw(e){let t=Ew(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){bt(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Lp(p);return m instanceof on&&dp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(R){return new so(xr(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vo(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new ro(y,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,y=p.values||[];return new ro(y,m)}(n.endAt)),zT(t,s,a,i,l,"F",c,h)}function Sw(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return lt()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Lp(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xr(n.unaryFilter.field);return zt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(n.unaryFilter.field);return zt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(n.unaryFilter.field);return zt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(n.unaryFilter.field);return zt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return lt()}}(e):e.fieldFilter!==void 0?function(n){return zt.create(xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return lt()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>Lp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return lt()}}(n.compositeFilter.op))}(e):lt()}function Cw(e){return gw[e]}function Pw(e){return mw[e]}function xw(e){return _w[e]}function Pr(e){return{fieldPath:e.canonicalString()}}function xr(e){return te.fromServerFormat(e.fieldPath)}function Fp(e){return e instanceof zt?function(n){if(n.op==="=="){if(Th(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NAN"}};if(Eh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Th(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NAN"}};if(Eh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(n.field),op:Pw(n.op),value:n.value}}}(e):e instanceof on?function(n){const r=n.getFilters().map(s=>Fp(s));return r.length===1?r[0]:{compositeFilter:{op:xw(n.op),filters:r}}}(e):lt()}function Vw(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Up(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n,r,s,i=ct.min(),a=ct.min(),l=ee.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(t){return new xn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t){this.ht=t}}function kw(e){const t=Rw({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ol(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(){this.ln=new Nw}addToCollectionParentIndex(t,n){return this.ln.add(n),N.resolve()}getCollectionParents(t,n){return N.resolve(this.ln.getEntries(n))}addFieldIndex(t,n){return N.resolve()}deleteFieldIndex(t,n){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,n){return N.resolve()}getDocumentsMatchingTarget(t,n){return N.resolve(null)}getIndexType(t,n){return N.resolve(0)}getFieldIndexes(t,n){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,n){return N.resolve(Fn.min())}getMinOffsetFromCollectionGroup(t,n){return N.resolve(Fn.min())}updateCollectionGroup(t,n,r){return N.resolve()}updateIndexEntries(t,n){return N.resolve()}}class Nw{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Kt(kt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Kt(kt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ee{static withCacheSize(t){return new Ee(t,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.DEFAULT_COLLECTION_PERCENTILE=10,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ee.DEFAULT=new Ee(41943040,Ee.DEFAULT_COLLECTION_PERCENTILE,Ee.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ee.DISABLED=new Ee(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Wr(0)}static Qn(){return new Wr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh([e,t],[n,r]){const s=gt(e,n);return s===0?gt(t,r):s}class Mw{constructor(t){this.Gn=t,this.buffer=new Kt(Mh),this.zn=0}jn(){return++this.zn}Hn(t){const n=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Mh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Lw{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){X("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){es(n)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ts(n)}await this.Yn(3e5)})}}class Fw{constructor(t,n){this.Zn=t,this.params=n}calculateTargetCount(t,n){return this.Zn.Xn(t).next(r=>Math.floor(n/100*r))}nthSequenceNumber(t,n){if(n===0)return N.resolve(xo.oe);const r=new Mw(n);return this.Zn.forEachTarget(t,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(t,n,r){return this.Zn.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.Zn.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Nh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nh):this.tr(t,n))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(t,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(t,r))).next(p=>(h=Date.now(),Sr()<=vt.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Uw(e,t){return new Fw(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.changes=new mr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ue.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&ks(r.mutation,s,$e.empty(),Ht.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,pt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=pt()){const s=tr();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let a=Ts();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const r=tr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,pt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,r,s){let i=vn();const a=Ds(),l=function(){return Ds()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof _r)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ks(d.mutation,h,d.mutation.getFieldMask(),Ht.now())):a.set(h.key,$e.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new $w(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(t,n){const r=Ds();let s=new Lt((a,l)=>a-l),i=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||$e.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||pt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=wp();d.forEach(m=>{if(!i.has(m)){const y=Cp(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(t,h,p))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(a){return it.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):HT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):N.resolve(tr());let l=-1,c=i;return a.next(h=>N.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(t,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,c,h,pt())).next(d=>({batchId:l,changes:Tp(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new it(n)).next(r=>{let s=Ts();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let a=Ts();return this.indexManager.getCollectionParents(t,i).next(l=>N.forEach(l,c=>{const h=function(p,m){return new ko(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ue.newInvalidDocument(d)))});let l=Ts();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ks(d.mutation,h,$e.empty(),Ht.now()),No(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,n){return N.resolve(this.Tr.get(n))}saveBundleMetadata(t,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:tn(s.createTime)}}(n)),N.resolve()}getNamedQuery(t,n){return N.resolve(this.Ir.get(n))}saveNamedQuery(t,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:kw(s.bundledQuery),readTime:tn(s.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.overlays=new Lt(it.comparator),this.Er=new Map}getOverlay(t,n){return N.resolve(this.overlays.get(n))}getOverlays(t,n){const r=tr();return N.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.Tt(t,n,i)}),N.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),N.resolve()}getOverlaysForCollection(t,n,r){const s=tr(),i=n.length+1,a=new it(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Lt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=tr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return N.resolve(l)}Tt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cw(n,r));let i=this.Er.get(n);i===void 0&&(i=pt(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.sessionToken=ee.EMPTY_BYTE_STRING}getSessionToken(t){return N.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.dr=new Kt(Wt.Ar),this.Rr=new Kt(Wt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,n){const r=new Wt(t,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.gr(new Wt(t,n))}pr(t,n){t.forEach(r=>this.removeReference(r,n))}yr(t){const n=new it(new kt([])),r=new Wt(n,t),s=new Wt(n,t+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const n=new it(new kt([])),r=new Wt(n,t),s=new Wt(n,t+1);let i=pt();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const n=new Wt(t,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Wt{constructor(t,n){this.key=t,this.br=n}static Ar(t,n){return it.comparator(t.key,n.key)||gt(t.br,n.br)}static Vr(t,n){return gt(t.br,n.br)||it.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Kt(Wt.Ar)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new lw(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new Wt(l.key,i)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(t,n){return N.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Wt(n,0),s=new Wt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);i.push(l)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Kt(gt);return n.forEach(s=>{const i=new Wt(s,0),a=new Wt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],l=>{r=r.add(l.br)})}),N.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;it.isDocumentKey(i)||(i=i.child(""));const a=new Wt(new it(i),0);let l=new Kt(gt);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},a),N.resolve(this.Mr(l))}Mr(t){const n=[];return t.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){bt(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return N.forEach(n.mutations,s=>{const i=new Wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=r})}Ln(t){}containsKey(t,n){const r=new Wt(n,0),s=this.vr.firstAfterOrEqual(r);return N.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Or(t,n){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const n=this.Fr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.Nr=t,this.docs=function(){return new Lt(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():ue.newInvalidDocument(n))}getEntries(t,n){let r=vn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ue.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=vn();const a=n.path,l=new it(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||IT(wT(d),r)<=0||(s.has(d.key)||No(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(t,n,r,s){lt()}Lr(t,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Ww(this)}getSize(t){return N.resolve(this.size)}}class Ww extends Bw{constructor(t){super(),this.hr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(t,s)):this.hr.removeEntry(r)}),N.waitFor(n)}getFromCache(t,n){return this.hr.getEntry(t,n)}getAllFromCache(t,n){return this.hr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(t){this.persistence=t,this.Br=new mr(n=>Jl(n),Zl),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.kr=0,this.qr=new ic,this.targetCount=0,this.Qr=Wr.qn()}forEachTarget(t,n){return this.Br.forEach((r,s)=>n(s)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),N.resolve()}Un(t){this.Br.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Qr=new Wr(n),this.highestTargetId=n),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,n){return this.Un(n),this.targetCount+=1,N.resolve()}updateTargetData(t,n){return this.Un(n),N.resolve()}removeTargetData(t,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,n){const r=this.Br.get(n)||null;return N.resolve(r)}addMatchingKeys(t,n,r){return this.qr.mr(n,r),N.resolve()}removeMatchingKeys(t,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.qr.yr(n),N.resolve()}getMatchingKeysForTargetId(t,n){const r=this.qr.Sr(n);return N.resolve(r)}containsKey(t,n){return N.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t,n){this.Kr={},this.overlays={},this.$r=new xo(0),this.Ur=!1,this.Ur=!0,this.Wr=new Hw,this.referenceDelegate=t(this),this.Gr=new Qw(this),this.indexManager=new Ow,this.remoteDocumentCache=function(s){return new Gw(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Dw(n),this.jr=new qw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zw,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Kr[t.toKey()];return r||(r=new Kw(n,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,n,r){X("MemoryPersistence","Starting transaction:",t);const s=new Yw(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(t,n){return N.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,n)))}}class Yw extends bT{constructor(t){super(),this.currentSequenceNumber=t}}class oc{constructor(t){this.persistence=t,this.Zr=new ic,this.Xr=null}static ei(t){return new oc(t)}get ti(){if(this.Xr)return this.Xr;throw lt()}addReference(t,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),N.resolve()}removeReference(t,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,n){return this.ti.add(n.toString()),N.resolve()}removeTarget(t,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Hr(){this.Xr=new Set}Jr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.ti,r=>{const s=it.fromPath(r);return this.ni(t,s).next(i=>{i||n.removeEntry(s,ct.min())})}).next(()=>(this.Xr=null,n.apply(t)))}updateLimboDocument(t,n){return this.ni(t,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(t){return 0}ni(t,n){return N.or([()=>N.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Yr(t,n)])}}class lo{constructor(t,n){this.persistence=t,this.ri=new mr(r=>CT(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Uw(this,n)}static ei(t,n){return new lo(t,n)}Hr(){}Jr(t){return N.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}Xn(t){const n=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>n.next(s=>r+s))}nr(t){let n=0;return this.er(t,r=>{n++}).next(()=>n)}er(t,n){return N.forEach(this.ri,(r,s)=>this.ir(t,r,s).next(i=>i?N.resolve():n(s)))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(t,a=>this.ir(t,a,n).next(l=>{l||(r++,i.removeEntry(a,ct.min()))})).next(()=>i.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,n){return this.ri.set(n,t.currentSequenceNumber),N.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.ri.set(r,t.currentSequenceNumber),N.resolve()}removeReference(t,n,r){return this.ri.set(r,t.currentSequenceNumber),N.resolve()}updateLimboDocument(t,n){return this.ri.set(n,t.currentSequenceNumber),N.resolve()}zr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Ui(t.data.value)),n}ir(t,n,r){return N.or([()=>this.persistence.Yr(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const s=this.ri.get(n);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(t,n){let r=pt(),s=pt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ac(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Yv()?8:RT(Gv())>0?6:4}()}initialize(t,n){this.Zi=t,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.Xi(t,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(t,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Xw;return this.ts(t,n,a).next(l=>{if(i.result=l,this.Hi)return this.ns(t,n,a,l.size)})}).next(()=>i.result)}ns(t,n,r,s){return r.documentReadCount<this.Ji?(Sr()<=vt.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),N.resolve()):(Sr()<=vt.DEBUG&&X("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Sr()<=vt.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ze(n))):N.resolve())}Xi(t,n){if(bh(n))return N.resolve(null);let r=Ze(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ol(n,null,"F"),r=Ze(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=pt(...i);return this.Zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,a,c.readTime)?this.Xi(t,ol(n,null,"F")):this.os(t,h,n,c)}))})))}es(t,n,r,s){return bh(n)||s.isEqual(ct.min())?N.resolve(null):this.Zi.getDocuments(t,r).next(i=>{const a=this.rs(n,i);return this.ss(n,a,r,s)?N.resolve(null):(Sr()<=vt.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.os(t,a,n,TT(s,-1)).next(l=>l))})}rs(t,n){let r=new Kt(vp(t));return n.forEach((s,i)=>{No(t,i)&&(r=r.add(i))}),r}ss(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(t,n,r){return Sr()<=vt.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.Zi.getDocumentsMatchingQuery(t,n,Fn.min(),r)}os(t,n,r,s){return this.Zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t,n,r,s){this.persistence=t,this._s=n,this.serializer=s,this.us=new Lt(gt),this.cs=new mr(i=>Jl(i),Zl),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jw(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.us))}}function t0(e,t,n,r){return new Zw(e,t,n,r)}async function $p(e,t){const n=ut(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=pt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:l}))})})}function e0(e,t){const n=ut(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let y=N.resolve();return m.forEach(R=>{y=y.next(()=>d.getEntry(c,R)).next(P=>{const D=h.docVersions.get(R);bt(D!==null),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),d.addEntry(P)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=pt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function jp(e){const t=ut(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Gr.getLastRemoteSnapshotVersion(n))}function n0(e,t){const n=ut(e),r=t.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];t.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?y=y.withResumeToken(ee.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(P,D,B){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,y,d)&&l.push(n.Gr.updateTargetData(i,y))});let c=vn(),h=pt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(r0(i,a,t.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(ct.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return N.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function r0(e,t,n){let r=pt(),s=pt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let a=vn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ct.min())?(t.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(c),a=a.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:a,Es:s}})}function s0(e,t){const n=ut(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function i0(e,t){const n=ut(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,t).next(i=>i?(s=i,N.resolve(s)):n.Gr.allocateTargetId(r).next(a=>(s=new xn(t,a,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(t,r.targetId)),r})}async function hl(e,t,n){const r=ut(e),s=r.us.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!es(a))throw a;X("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.us=r.us.remove(t),r.cs.delete(s.target)}function Lh(e,t,n){const r=ut(e);let s=ct.min(),i=pt();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=ut(c),m=p.cs.get(d);return m!==void 0?N.resolve(p.us.get(m)):p.Gr.getTargetData(h,d)}(r,a,Ze(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,t,n?s:ct.min(),n?i:pt())).next(l=>(o0(r,GT(t),l),{documents:l,ds:i})))}function o0(e,t,n){let r=e.ls.get(t)||ct.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ls.set(t,r)}class Fh{constructor(){this.activeTargetIds=ZT()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class a0{constructor(){this._o=new Fh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,n,r){this.ao[t]=n}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Fh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di=null;function ba(){return Di===null?Di=function(){return 268435456+Math.round(2147483648*Math.random())}():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="WebChannelConnection";class h0 extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,a){const l=ba(),c=this.No(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,a),this.Bo(n,c,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw zr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,a,l){return this.Oo(n,r,s,i,a)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}No(n,r){const s=c0[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,n,r,s){const i=ba();return new Promise((a,l)=>{const c=new ep;c.setWithCredentials(!0),c.listenOnce(np.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fi.NO_ERROR:const d=c.getResponseJson();X(oe,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Fi.TIMEOUT:X(oe,`RPC '${t}' ${i} timed out`),l(new rt(L.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const p=c.getStatus();if(X(oe,`RPC '${t}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const R=function(D){const B=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(B)>=0?B:L.UNKNOWN}(y.status);l(new rt(R,y.message))}else l(new rt(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new rt(L.UNAVAILABLE,"Connection failed."));break;default:lt()}}finally{X(oe,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(s);X(oe,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(t,n,r){const s=ba(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ip(),l=sp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(oe,`Creating RPC '${t}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,y=!1;const R=new u0({Eo:D=>{y?X(oe,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(m||(X(oe,`Opening RPC '${t}' stream ${s} transport.`),p.open(),m=!0),X(oe,`RPC '${t}' stream ${s} sending:`,D),p.send(D))},Ao:()=>p.close()}),P=(D,B,$)=>{D.listen(B,H=>{try{$(H)}catch(K){setTimeout(()=>{throw K},0)}})};return P(p,Es.EventType.OPEN,()=>{y||(X(oe,`RPC '${t}' stream ${s} transport opened.`),R.So())}),P(p,Es.EventType.CLOSE,()=>{y||(y=!0,X(oe,`RPC '${t}' stream ${s} transport closed`),R.Do())}),P(p,Es.EventType.ERROR,D=>{y||(y=!0,zr(oe,`RPC '${t}' stream ${s} transport errored:`,D),R.Do(new rt(L.UNAVAILABLE,"The operation could not be completed")))}),P(p,Es.EventType.MESSAGE,D=>{var B;if(!y){const $=D.data[0];bt(!!$);const H=$,K=(H==null?void 0:H.error)||((B=H[0])===null||B===void 0?void 0:B.error);if(K){X(oe,`RPC '${t}' stream ${s} received error:`,K);const ft=K.status;let nt=function(w){const A=jt[w];if(A!==void 0)return xp(A)}(ft),I=K.message;nt===void 0&&(nt=L.INTERNAL,I="Unknown error status: "+ft+" with message "+K.message),y=!0,R.Do(new rt(nt,I)),p.close()}else X(oe,`RPC '${t}' stream ${s} received:`,$),R.vo($)}}),P(l,rp.STAT_EVENT,D=>{D.stat===el.PROXY?X(oe,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===el.NOPROXY&&X(oe,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}function Ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e){return new yw(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t,n,r=1e3,s=1.5,i=6e4){this.li=t,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n,r,s,i,a,l,c){this.li=t,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new qp(t,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(n)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{t(()=>{const s=new rt(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(t,n){const r=this.T_(this.Xo);this.stream=this.d_(t,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return X("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return n=>{this.li.enqueueAndForget(()=>this.Xo===t?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f0 extends zp{constructor(t,n,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}d_(t,n){return this.connection.qo("Listen",t,n)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const n=Tw(this.serializer,t),r=function(i){if(!("targetChange"in i))return ct.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ct.min():a.readTime?tn(a.readTime):ct.min()}(t);return this.listener.R_(n,r)}V_(t){const n={};n.database=ul(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=il(c)?{documents:Aw(i,c)}:{query:bw(i,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=kp(i,a.resumeToken);const h=al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ct.min())>0){l.readTime=ao(i,a.snapshotVersion.toTimestamp());const h=al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,t);const r=Sw(this.serializer,t);r&&(n.labels=r),this.c_(n)}m_(t){const n={};n.database=ul(this.serializer),n.removeTarget=t,this.c_(n)}}class d0 extends zp{constructor(t,n,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,n){return this.connection.qo("Write",t,n)}A_(t){return bt(!!t.streamToken),this.lastStreamToken=t.streamToken,bt(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){bt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const n=Iw(t.writeResults,t.commitTime),r=tn(t.commitTime);return this.listener.y_(r,n)}w_(){const t={};t.database=ul(this.serializer),this.c_(t)}g_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>ww(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0 extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new rt(L.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(t,ll(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new rt(L.UNKNOWN,i.toString())})}ko(t,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(t,ll(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new rt(L.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class g0{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(yn(n),this.C_=!1):X("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{yr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ut(c);h.k_.add(4),await ai(h),h.K_.set("Unknown"),h.k_.delete(4),await Bo(h)}(this))})}),this.K_=new g0(r,s)}}async function Bo(e){if(yr(e))for(const t of e.q_)await t(!0)}async function ai(e){for(const t of e.q_)await t(!1)}function Hp(e,t){const n=ut(e);n.B_.has(t.targetId)||(n.B_.set(t.targetId,t),hc(n)?uc(n):ns(n).s_()&&cc(n,t))}function lc(e,t){const n=ut(e),r=ns(n);n.B_.delete(t),r.s_()&&Kp(n,t),n.B_.size===0&&(r.s_()?r.a_():yr(n)&&n.K_.set("Unknown"))}function cc(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ct.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ns(e).V_(t)}function Kp(e,t){e.U_.xe(t),ns(e).m_(t)}function uc(e){e.U_=new pw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.B_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ns(e).start(),e.K_.F_()}function hc(e){return yr(e)&&!ns(e).i_()&&e.B_.size>0}function yr(e){return ut(e).k_.size===0}function Gp(e){e.U_=void 0}async function _0(e){e.K_.set("Online")}async function y0(e){e.B_.forEach((t,n)=>{cc(e,t)})}async function v0(e,t){Gp(e),hc(e)?(e.K_.O_(t),uc(e)):e.K_.set("Unknown")}async function E0(e,t,n){if(e.K_.set("Online"),t instanceof Dp&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.B_.delete(l),s.U_.removeTarget(l))}(e,t)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await co(e,r)}else if(t instanceof ji?e.U_.$e(t):t instanceof Vp?e.U_.Je(t):e.U_.Ge(t),!n.isEqual(ct.min()))try{const r=await jp(e.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.U_.it(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(ee.EMPTY_BYTE_STRING,d.snapshotVersion)),Kp(i,c);const p=new xn(d.target,c,h,d.sequenceNumber);cc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(e,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await co(e,r)}}async function co(e,t,n){if(!es(t))throw t;e.k_.add(1),await ai(e),e.K_.set("Offline"),n||(n=()=>jp(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),e.k_.delete(1),await Bo(e)})}function Wp(e,t){return t().catch(n=>co(e,n,t))}async function $o(e){const t=ut(e),n=jn(t);let r=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;T0(t);)try{const s=await s0(t.localStore,r);if(s===null){t.L_.length===0&&n.a_();break}r=s.batchId,w0(t,s)}catch(s){await co(t,s)}Qp(t)&&Yp(t)}function T0(e){return yr(e)&&e.L_.length<10}function w0(e,t){e.L_.push(t);const n=jn(e);n.s_()&&n.f_&&n.g_(t.mutations)}function Qp(e){return yr(e)&&!jn(e).i_()&&e.L_.length>0}function Yp(e){jn(e).start()}async function I0(e){jn(e).w_()}async function A0(e){const t=jn(e);for(const n of e.L_)t.g_(n.mutations)}async function b0(e,t,n){const r=e.L_.shift(),s=nc.from(r,t,n);await Wp(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await $o(e)}async function R0(e,t){t&&jn(e).f_&&await async function(r,s){if(function(a){return hw(a)&&a!==L.ABORTED}(s.code)){const i=r.L_.shift();jn(r).__(),await Wp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $o(r)}}(e,t),Qp(e)&&Yp(e)}async function Bh(e,t){const n=ut(e);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=yr(n);n.k_.add(3),await ai(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.k_.delete(3),await Bo(n)}async function S0(e,t){const n=ut(e);t?(n.k_.delete(2),await Bo(n)):t||(n.k_.add(2),await ai(n),n.K_.set("Unknown"))}function ns(e){return e.W_||(e.W_=function(n,r,s){const i=ut(n);return i.b_(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Ro:_0.bind(null,e),mo:y0.bind(null,e),po:v0.bind(null,e),R_:E0.bind(null,e)}),e.q_.push(async t=>{t?(e.W_.__(),hc(e)?uc(e):e.K_.set("Unknown")):(await e.W_.stop(),Gp(e))})),e.W_}function jn(e){return e.G_||(e.G_=function(n,r,s){const i=ut(n);return i.b_(),new d0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Ro:()=>Promise.resolve(),mo:I0.bind(null,e),po:R0.bind(null,e),p_:A0.bind(null,e),y_:b0.bind(null,e)}),e.q_.push(async t=>{t?(e.G_.__(),await $o(e)):(await e.G_.stop(),e.L_.length>0&&(X("RemoteStore",`Stopping write stream with ${e.L_.length} pending writes`),e.L_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const a=Date.now()+r,l=new fc(t,n,a,s,i);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new rt(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dc(e,t){if(yn("AsyncQueue",`${t}: ${e}`),es(e))return new rt(L.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{static emptySet(t){return new Fr(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||it.comparator(n.key,r.key):(n,r)=>it.comparator(n.key,r.key),this.keyedMap=Ts(),this.sortedSet=new Lt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Fr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Fr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.z_=new Lt(it.comparator)}track(t){const n=t.doc.key,r=this.z_.get(n);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(n,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(n):t.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:t.doc}):lt():this.z_=this.z_.insert(n,t)}j_(){const t=[];return this.z_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Qr{constructor(t,n,r,s,i,a,l,c,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Qr(t,n,Fr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Oo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class P0{constructor(){this.queries=jh(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ut(n),i=s.queries;s.queries=jh(),i.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new rt(L.ABORTED,"Firestore shutting down"))}}function jh(){return new mr(e=>yp(e),Oo)}async function x0(e,t){const n=ut(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Y_()&&t.Z_()&&(r=2):(i=new C0,r=t.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=dc(a,`Initialization of query '${Cr(t.query)}' failed`);return void t.onError(l)}n.queries.set(s,i),i.J_.push(t),t.ea(n.onlineState),i.H_&&t.ta(i.H_)&&pc(n)}async function V0(e,t){const n=ut(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const a=i.J_.indexOf(t);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=t.Z_()?0:1:!i.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function D0(e,t){const n=ut(e);let r=!1;for(const s of t){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&pc(n)}function k0(e,t,n){const r=ut(e),s=r.queries.get(t);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(t)}function pc(e){e.X_.forEach(t=>{t.next()})}var fl,qh;(qh=fl||(fl={})).na="default",qh.Cache="cache";class O0{constructor(t,n,r){this.query=t,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Qr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ia?this.oa(t)&&(this.ra.next(t),n=!0):this._a(t,this.onlineState)&&(this.aa(t),n=!0),this.sa=t,n}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),n=!0),n}_a(t,n){if(!t.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(t){t=Qr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==fl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(t){this.key=t}}class Jp{constructor(t){this.key=t}}class N0{constructor(t,n){this.query=t,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=pt(),this.mutatedKeys=pt(),this.Va=vp(t),this.ma=new Fr(this.Va)}get fa(){return this.da}ga(t,n){const r=n?n.pa:new $h,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const m=s.get(d),y=No(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?R!==P&&(r.track({type:3,doc:y}),D=!0):this.ya(m,y)||(r.track({type:2,doc:y}),D=!0,(c&&this.Va(y,c)>0||h&&this.Va(y,h)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(y?(a=a.add(y),i=P?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:a,pa:r,ss:l,mutatedKeys:i}}ya(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((d,p)=>function(y,R){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return lt()}};return P(y)-P(R)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,a.length!==0||h?{snapshot:new Qr(this.query,t.ma,i,a,t.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new $h,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(n=>this.da=this.da.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=pt(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return t.forEach(r=>{this.Ra.has(r)||n.push(new Jp(r))}),this.Ra.forEach(r=>{t.has(r)||n.push(new Xp(r))}),n}va(t){this.da=t.ds,this.Ra=pt();const n=this.ga(t.documents);return this.applyChanges(n,!0)}Ca(){return Qr.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class M0{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class L0{constructor(t){this.key=t,this.Fa=!1}}class F0{constructor(t,n,r,s,i,a){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new mr(l=>yp(l),Oo),this.Oa=new Map,this.Na=new Set,this.La=new Lt(it.comparator),this.Ba=new Map,this.ka=new ic,this.qa={},this.Qa=new Map,this.Ka=Wr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function U0(e,t,n=!0){const r=sg(e);let s;const i=r.xa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Zp(r,t,n,!0),s}async function B0(e,t){const n=sg(e);await Zp(n,t,!0,!1)}async function Zp(e,t,n,r){const s=await i0(e.localStore,Ze(t)),i=s.targetId,a=e.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $0(e,t,i,a==="current",s.resumeToken)),e.isPrimaryClient&&n&&Hp(e.remoteStore,s),l}async function $0(e,t,n,r,s){e.Ua=(p,m,y)=>async function(P,D,B,$){let H=D.view.ga(B);H.ss&&(H=await Lh(P.localStore,D.query,!1).then(({documents:I})=>D.view.ga(I,H)));const K=$&&$.targetChanges.get(D.targetId),ft=$&&$.targetMismatches.get(D.targetId)!=null,nt=D.view.applyChanges(H,P.isPrimaryClient,K,ft);return Hh(P,D.targetId,nt.ba),nt.snapshot}(e,p,m,y);const i=await Lh(e.localStore,t,!0),a=new N0(t,i.ds),l=a.ga(i.documents),c=oi.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),h=a.applyChanges(l,e.isPrimaryClient,c);Hh(e,n,h.ba);const d=new M0(t,n,a);return e.xa.set(t,d),e.Oa.has(n)?e.Oa.get(n).push(t):e.Oa.set(n,[t]),h.snapshot}async function j0(e,t,n){const r=ut(e),s=r.xa.get(t),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!Oo(a,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&lc(r.remoteStore,s.targetId),dl(r,s.targetId)}).catch(ts)):(dl(r,s.targetId),await hl(r.localStore,s.targetId,!0))}async function q0(e,t){const n=ut(e),r=n.xa.get(t),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lc(n.remoteStore,r.targetId))}async function z0(e,t,n){const r=X0(e);try{const s=await function(a,l){const c=ut(a),h=Ht.now(),d=l.reduce((y,R)=>y.add(R.key),pt());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let R=vn(),P=pt();return c.hs.getEntries(y,d).next(D=>{R=D,R.forEach((B,$)=>{$.isValidDocument()||(P=P.add(B))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,R)).next(D=>{p=D;const B=[];for(const $ of l){const H=ow($,p.get($.key).overlayedDocument);H!=null&&B.push(new _r($.key,H,up(H.value.mapValue),qe.exists(!0)))}return c.mutationQueue.addMutationBatch(y,h,B,l)}).next(D=>{m=D;const B=D.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(y,D.batchId,B)})}).then(()=>({batchId:m.batchId,changes:Tp(p)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.qa[a.currentUser.toKey()];h||(h=new Lt(gt)),h=h.insert(l,c),a.qa[a.currentUser.toKey()]=h}(r,s.batchId,n),await li(r,s.changes),await $o(r.remoteStore)}catch(s){const i=dc(s,"Failed to persist write");n.reject(i)}}async function tg(e,t){const n=ut(e);try{const r=await n0(n.localStore,t);t.targetChanges.forEach((s,i)=>{const a=n.Ba.get(i);a&&(bt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?bt(a.Fa):s.removedDocuments.size>0&&(bt(a.Fa),a.Fa=!1))}),await li(n,r,t)}catch(r){await ts(r)}}function zh(e,t,n){const r=ut(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,a)=>{const l=a.view.ea(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ut(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(h=!0)}),h&&pc(c)}(r.eventManager,t),s.length&&r.Ma.R_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function H0(e,t,n){const r=ut(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ba.get(t),i=s&&s.key;if(i){let a=new Lt(it.comparator);a=a.insert(i,ue.newNoDocument(i,ct.min()));const l=pt().add(i),c=new Fo(ct.min(),new Map,new Lt(gt),a,l);await tg(r,c),r.La=r.La.remove(i),r.Ba.delete(t),gc(r)}else await hl(r.localStore,t,!1).then(()=>dl(r,t,n)).catch(ts)}async function K0(e,t){const n=ut(e),r=t.batch.batchId;try{const s=await e0(n.localStore,t);ng(n,r,null),eg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await li(n,s)}catch(s){await ts(s)}}async function G0(e,t,n){const r=ut(e);try{const s=await function(a,l){const c=ut(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(bt(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,t);ng(r,t,n),eg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await li(r,s)}catch(s){await ts(s)}}function eg(e,t){(e.Qa.get(t)||[]).forEach(n=>{n.resolve()}),e.Qa.delete(t)}function ng(e,t,n){const r=ut(e);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.qa[r.currentUser.toKey()]=s}}function dl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Oa.get(t))e.xa.delete(r),n&&e.Ma.Wa(r,n);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(r=>{e.ka.containsKey(r)||rg(e,r)})}function rg(e,t){e.Na.delete(t.path.canonicalString());const n=e.La.get(t);n!==null&&(lc(e.remoteStore,n),e.La=e.La.remove(t),e.Ba.delete(n),gc(e))}function Hh(e,t,n){for(const r of n)r instanceof Xp?(e.ka.addReference(r.key,t),W0(e,r)):r instanceof Jp?(X("SyncEngine","Document no longer in limbo: "+r.key),e.ka.removeReference(r.key,t),e.ka.containsKey(r.key)||rg(e,r.key)):lt()}function W0(e,t){const n=t.key,r=n.path.canonicalString();e.La.get(n)||e.Na.has(r)||(X("SyncEngine","New document in limbo: "+n),e.Na.add(r),gc(e))}function gc(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){const t=e.Na.values().next().value;e.Na.delete(t);const n=new it(kt.fromString(t)),r=e.Ka.next();e.Ba.set(r,new L0(n)),e.La=e.La.insert(n,r),Hp(e.remoteStore,new xn(Ze(_p(n.path)),r,"TargetPurposeLimboResolution",xo.oe))}}async function li(e,t,n){const r=ut(e),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,t,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ac.zi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(c,h){const d=ut(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>N.forEach(h,m=>N.forEach(m.Wi,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>N.forEach(m.Gi,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!es(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=d.us.get(m),R=y.snapshotVersion,P=y.withLastLimboFreeSnapshotVersion(R);d.us=d.us.insert(m,P)}}}(r.localStore,i))}async function Q0(e,t){const n=ut(e);if(!n.currentUser.isEqual(t)){X("SyncEngine","User change. New user:",t.toKey());const r=await $p(n.localStore,t);n.currentUser=t,function(i,a){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new rt(L.CANCELLED,a))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await li(n,r.Ts)}}function Y0(e,t){const n=ut(e),r=n.Ba.get(t);if(r&&r.Fa)return pt().add(r.key);{let s=pt();const i=n.Oa.get(t);if(!i)return s;for(const a of i){const l=n.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function sg(e){const t=ut(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=tg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Y0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=H0.bind(null,t),t.Ma.R_=D0.bind(null,t.eventManager),t.Ma.Wa=k0.bind(null,t.eventManager),t}function X0(e){const t=ut(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=K0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=G0.bind(null,t),t}class uo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Uo(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,n){return null}Ya(t,n){return null}Ha(t){return t0(this.persistence,new Jw,t.initialUser,this.serializer)}ja(t){return new Bp(oc.ei,this.serializer)}za(t){return new a0}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uo.provider={build:()=>new uo};class J0 extends uo{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,n){bt(this.persistence.referenceDelegate instanceof lo);const r=this.persistence.referenceDelegate.garbageCollector;return new Lw(r,t.asyncQueue,n)}ja(t){const n=this.cacheSizeBytes!==void 0?Ee.withCacheSize(this.cacheSizeBytes):Ee.DEFAULT;return new Bp(r=>lo.ei(r,n),this.serializer)}}class pl{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Q0.bind(null,this.syncEngine),await S0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new P0}()}createDatastore(t){const n=Uo(t.databaseInfo.databaseId),r=function(i){return new h0(i)}(t.databaseInfo);return function(i,a,l,c){return new p0(i,a,l,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,a,l){return new m0(r,s,i,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>zh(this.syncEngine,n,0),function(){return Uh.p()?new Uh:new l0}())}createSyncEngine(t,n){return function(s,i,a,l,c,h,d){const p=new F0(s,i,a,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(s){const i=ut(s);X("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ai(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pl.provider={build:()=>new pl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):yn("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t,n,r,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=dc(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Sa(e,t){e.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $p(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Kh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await eI(e);X("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Bh(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Bh(t.remoteStore,s)),e._onlineComponents=t}async function eI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sa(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await Sa(e,new uo)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Sa(e,new J0(void 0));return e._offlineComponents}async function ig(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Kh(e,e._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Kh(e,new pl))),e._onlineComponents}function nI(e){return ig(e).then(t=>t.syncEngine)}async function rI(e){const t=await ig(e),n=t.eventManager;return n.onListen=U0.bind(null,t.syncEngine),n.onUnlisten=j0.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=B0.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=q0.bind(null,t.syncEngine),n}function sI(e,t,n={}){const r=new On;return e.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new Z0({next:m=>{d.eu(),a.enqueueAndForget(()=>V0(i,p)),m.fromCache&&c.source==="server"?h.reject(new rt(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new O0(l,d,{includeMetadataChanges:!0,ua:!0});return x0(i,p)}(await rI(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e,t,n){if(!n)throw new rt(L.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function iI(e,t,n,r){if(t===!0&&r===!0)throw new rt(L.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Wh(e){if(!it.isDocumentKey(e))throw new rt(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Qh(e){if(it.isDocumentKey(e))throw new rt(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mc(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":lt()}function ur(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rt(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mc(e);throw new rt(L.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new rt(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new rt(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}iI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=og((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new rt(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new rt(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new rt(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class jo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new rt(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new rt(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fT;switch(r.type){case"firstParty":return new mT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new rt(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gh.get(n);r&&(X("ComponentProvider","Removing Datastore"),Gh.delete(n),r.terminate())}(this),Promise.resolve()}}function oI(e,t,n,r={}){var s;const i=(e=ur(e,jo))._getSettings(),a=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=ae.MOCK_USER;else{l=Kv(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new rt(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ae(h)}e._authCredentials=new dT(new op(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new qo(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class Nn extends qo{constructor(t,n,r){super(t,n,_p(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new it(t))}withConverter(t){return new Nn(this.firestore,t,this._path)}}function _c(e,t,...n){if(e=lr(e),ag("collection","path",t),e instanceof jo){const r=kt.fromString(t,...n);return Qh(r),new Nn(e,null,r)}{if(!(e instanceof Le||e instanceof Nn))throw new rt(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Qh(r),new Nn(e.firestore,null,r)}}function gl(e,t,...n){if(e=lr(e),arguments.length===1&&(t=ap.newId()),ag("doc","path",t),e instanceof jo){const r=kt.fromString(t,...n);return Wh(r),new Le(e,null,new it(r))}{if(!(e instanceof Le||e instanceof Nn))throw new rt(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(kt.fromString(t,...n));return Wh(r),new Le(e.firestore,e instanceof Nn?e.converter:null,new it(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new qp(this,"async_queue_retry"),this.fu=()=>{const r=Ra();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const n=Ra();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const n=Ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new On;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!es(t))throw t;X("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const n=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw yn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(t,n,r){this.pu(),this.mu.indexOf(t)>-1&&(n=0);const s=fc.createAndSchedule(this,t,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&lt()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const n of this.du)if(n.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const n=this.du.indexOf(t);this.du.splice(n,1)}}class ci extends jo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Xh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Xh(t),this._firestoreClient=void 0,await t}}}function aI(e,t){const n=typeof e=="object"?e:Xd(),r=typeof e=="string"?e:"(default)",s=si(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zv("firestore");i&&oI(s,...i)}return s}function lg(e){if(e._terminated)throw new rt(L.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||lI(e),e._firestoreClient}function lI(e){var t,n,r;const s=e._freezeSettings(),i=function(l,c,h,d){return new VT(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,og(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new tI(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yr(ee.fromBase64String(t))}catch(n){throw new rt(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Yr(ee.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new rt(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new rt(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new rt(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return gt(this._lat,t._lat)||gt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=/^__.*__$/;class uI{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new _r(t,this.data,this.fieldMask,n,this.fieldTransforms):new ii(t,this.data,n,this.fieldTransforms)}}function ug(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw lt()}}class Tc{constructor(t,n,r,s,i,a){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Tc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.xu({path:r,Nu:!1});return s.Lu(t),s}Bu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return ho(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(ug(this.Mu)&&cI.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class hI{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Uo(t)}$u(t,n,r,s=!1){return new Tc({Mu:t,methodName:n,Ku:r,path:te.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hg(e){const t=e._freezeSettings(),n=Uo(e._databaseId);return new hI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function fg(e,t,n,r,s,i={}){const a=e.$u(i.merge||i.mergeFields?2:0,t,n,s);mg("Data must be an object, but it was:",a,r);const l=pg(r,a);let c,h;if(i.merge)c=new $e(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=fI(t,p,n);if(!a.contains(m))throw new rt(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);pI(d,m)||d.push(m)}c=new $e(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new uI(new Ne(l),c,h)}function dg(e,t){if(gg(e=lr(e)))return mg("Unsupported field value:",t,e),pg(e,t);if(e instanceof cg)return function(r,s){if(!ug(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=dg(l,s.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=lr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ht.fromDate(r);return{timestampValue:ao(s.serializer,i)}}if(r instanceof Ht){const i=new Ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ao(s.serializer,i)}}if(r instanceof vc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:kp(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ec)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return tc(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${mc(r)}`)}(e,t)}function pg(e,t){const n={};return lp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):gr(e,(r,s)=>{const i=dg(s,t.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ht||e instanceof vc||e instanceof Yr||e instanceof Le||e instanceof cg||e instanceof Ec)}function mg(e,t,n){if(!gg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=mc(n);throw r==="an object"?t.qu(e+" a custom object"):t.qu(e+" "+r)}}function fI(e,t,n){if((t=lr(t))instanceof yc)return t._internalPath;if(typeof t=="string")return _g(e,t);throw ho("Field path arguments must be of type string or ",e,!1,void 0,n)}const dI=new RegExp("[~\\*/\\[\\]]");function _g(e,t,n){if(t.search(dI)>=0)throw ho(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new yc(...t.split("."))._internalPath}catch{throw ho(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ho(e,t,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new rt(L.INVALID_ARGUMENT,l+e+c)}function pI(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(vg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gI extends yg{data(){return super.data()}}function vg(e,t){return typeof t=="string"?_g(e,t):t instanceof yc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new rt(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _I{convertValue(t,n="none"){switch($n(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ut(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw lt()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return gr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(t){var n,r,s;const i=(s=(r=(n=t.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ut(a.doubleValue));return new Ec(i)}convertGeoPoint(t){return new vc(Ut(t.latitude),Ut(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Do(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gs(t));default:return null}}convertTimestamp(t){const n=Un(t);return new Ht(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=kt.fromString(t);bt(Up(r));const s=new Ws(r.get(1),r.get(3)),i=new it(r.popFirst(5));return s.isEqual(n)||yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e,t,n){let r;return r=e?e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yI extends yg{constructor(t,n,r,s,i,a){super(t,n,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(vg("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qi extends yI{data(t={}){return super.data(t)}}class vI{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new ki(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new qi(this._firestore,this._userDataWriter,r.key,r,new ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new rt(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new qi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new qi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ki(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:EI(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EI(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return lt()}}class TI extends _I{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yr(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Tg(e){e=ur(e,qo);const t=ur(e.firestore,ci),n=lg(t),r=new TI(t);return mI(e._query),sI(n,e._query).then(s=>new vI(t,r,e,s))}function wI(e,t,n){e=ur(e,Le);const r=ur(e.firestore,ci),s=Eg(e.converter,t);return wc(r,[fg(hg(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,qe.none())])}function II(e){return wc(ur(e.firestore,ci),[new ec(e._key,qe.none())])}function AI(e,t){const n=ur(e.firestore,ci),r=gl(e),s=Eg(e.converter,t);return wc(n,[fg(hg(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function wc(e,t){return function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget(async()=>z0(await nI(r),s,i)),i.promise}(lg(e),t)}(function(t,n=!0){(function(s){Zr=s})(nT),Ln(new mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new ci(new pT(r.getProvider("auth-internal")),new yT(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new rt(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ws(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Je(ph,"4.7.5",t),Je(ph,"4.7.5","esm2017")})();var bI="firebase",RI="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(bI,RI,"app");const wg="@firebase/installations",Ic="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig=1e4,Ag=`w:${Ic}`,bg="FIS_v2",SI="https://firebaseinstallations.googleapis.com/v1",CI=60*60*1e3,PI="installations",xI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hr=new Po(PI,xI,VI);function Rg(e){return e instanceof Hn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg({projectId:e}){return`${SI}/projects/${e}/installations`}function Cg(e){return{token:e.token,requestStatus:2,expiresIn:kI(e.expiresIn),creationTime:Date.now()}}async function Pg(e,t){const r=(await t.json()).error;return hr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function xg({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function DI(e,{refreshToken:t}){const n=xg(e);return n.append("Authorization",OI(t)),n}async function Vg(e){const t=await e();return t.status>=500&&t.status<600?e():t}function kI(e){return Number(e.replace("s","000"))}function OI(e){return`${bg} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Sg(e),s=xg(e),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:bg,appId:e.appId,sdkVersion:Ag},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Vg(()=>fetch(r,l));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Cg(h.authToken)}}else throw await Pg("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^[cdef][\w-]{21}$/,ml="";function FI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=UI(e);return LI.test(n)?n:ml}catch{return ml}}function UI(e){return MI(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Map;function Og(e,t){const n=zo(e);Ng(n,t),BI(n,t)}function Ng(e,t){const n=kg.get(e);if(n)for(const r of n)r(t)}function BI(e,t){const n=$I();n&&n.postMessage({key:e,fid:t}),jI()}let er=null;function $I(){return!er&&"BroadcastChannel"in self&&(er=new BroadcastChannel("[Firebase] FID Change"),er.onmessage=e=>{Ng(e.data.key,e.data.fid)}),er}function jI(){kg.size===0&&er&&(er.close(),er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="firebase-installations-database",zI=1,fr="firebase-installations-store";let Ca=null;function Ac(){return Ca||(Ca=Qd(qI,zI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fr)}}})),Ca}async function fo(e,t){const n=zo(e),s=(await Ac()).transaction(fr,"readwrite"),i=s.objectStore(fr),a=await i.get(n);return await i.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Og(e,t.fid),t}async function Mg(e){const t=zo(e),r=(await Ac()).transaction(fr,"readwrite");await r.objectStore(fr).delete(t),await r.done}async function Ho(e,t){const n=zo(e),s=(await Ac()).transaction(fr,"readwrite"),i=s.objectStore(fr),a=await i.get(n),l=t(a);return l===void 0?await i.delete(n):await i.put(l,n),await s.done,l&&(!a||a.fid!==l.fid)&&Og(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(e){let t;const n=await Ho(e.appConfig,r=>{const s=HI(r),i=KI(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===ml?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function HI(e){const t=e||{fid:FI(),registrationStatus:0};return Lg(t)}function KI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(hr.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=GI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:WI(e)}:{installationEntry:t}}async function GI(e,t){try{const n=await NI(e,t);return fo(e.appConfig,n)}catch(n){throw Rg(n)&&n.customData.serverCode===409?await Mg(e.appConfig):await fo(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function WI(e){let t=await Jh(e.appConfig);for(;t.registrationStatus===1;)await Dg(100),t=await Jh(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await bc(e);return r||n}return t}function Jh(e){return Ho(e,t=>{if(!t)throw hr.create("installation-not-found");return Lg(t)})}function Lg(e){return QI(e)?{fid:e.fid,registrationStatus:0}:e}function QI(e){return e.registrationStatus===1&&e.registrationTime+Ig<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI({appConfig:e,heartbeatServiceProvider:t},n){const r=XI(e,n),s=DI(e,n),i=t.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Ag,appId:e.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},c=await Vg(()=>fetch(r,l));if(c.ok){const h=await c.json();return Cg(h)}else throw await Pg("Generate Auth Token",c)}function XI(e,{fid:t}){return`${Sg(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(e,t=!1){let n;const r=await Ho(e.appConfig,i=>{if(!Fg(i))throw hr.create("not-registered");const a=i.authToken;if(!t&&tA(a))return i;if(a.requestStatus===1)return n=JI(e,t),i;{if(!navigator.onLine)throw hr.create("app-offline");const l=nA(i);return n=ZI(e,l),l}});return n?await n:r.authToken}async function JI(e,t){let n=await Zh(e.appConfig);for(;n.authToken.requestStatus===1;)await Dg(100),n=await Zh(e.appConfig);const r=n.authToken;return r.requestStatus===0?Rc(e,t):r}function Zh(e){return Ho(e,t=>{if(!Fg(t))throw hr.create("not-registered");const n=t.authToken;return rA(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ZI(e,t){try{const n=await YI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await fo(e.appConfig,r),n}catch(n){if(Rg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Mg(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await fo(e.appConfig,r)}throw n}}function Fg(e){return e!==void 0&&e.registrationStatus===2}function tA(e){return e.requestStatus===2&&!eA(e)}function eA(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+CI}function nA(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function rA(e){return e.requestStatus===1&&e.requestTime+Ig<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(e){const t=e,{installationEntry:n,registrationPromise:r}=await bc(t);return r?r.catch(console.error):Rc(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(e,t=!1){const n=e;return await oA(n),(await Rc(n,t)).token}async function oA(e){const{registrationPromise:t}=await bc(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(e){if(!e||!e.options)throw Pa("App Configuration");if(!e.name)throw Pa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Pa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Pa(e){return hr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="installations",lA="installations-internal",cA=e=>{const t=e.getProvider("app").getImmediate(),n=aA(t),r=si(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},uA=e=>{const t=e.getProvider("app").getImmediate(),n=si(t,Ug).getImmediate();return{getId:()=>sA(n),getToken:s=>iA(n,s)}};function hA(){Ln(new mn(Ug,cA,"PUBLIC")),Ln(new mn(lA,uA,"PRIVATE"))}hA();Je(wg,Ic);Je(wg,Ic,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="analytics",fA="firebase_id",dA="origin",pA=60*1e3,gA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Gl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ve=new Po("analytics","Analytics",mA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(e){if(!e.startsWith(Sc)){const t=Ve.create("invalid-gtag-resource",{gtagURL:e});return Ie.warn(t.message),""}return e}function Bg(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function yA(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function vA(e,t){const n=yA("firebase-js-sdk-policy",{createScriptURL:_A}),r=document.createElement("script"),s=`${Sc}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function EA(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function TA(e,t,n,r,s,i){const a=r[s];try{if(a)await t[a];else{const c=(await Bg(n)).find(h=>h.measurementId===s);c&&await t[c.appId]}}catch(l){Ie.error(l)}e("config",s,i)}async function wA(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Bg(n);for(const c of a){const h=l.find(p=>p.measurementId===c),d=h&&t[h.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Ie.error(i)}}function IA(e,t,n,r){async function s(i,...a){try{if(i==="event"){const[l,c]=a;await wA(e,t,n,l,c)}else if(i==="config"){const[l,c]=a;await TA(e,t,n,r,l,c)}else if(i==="consent"){const[l,c]=a;e("consent",l,c)}else if(i==="get"){const[l,c,h]=a;e("get",l,c,h)}else if(i==="set"){const[l]=a;e("set",l)}else e(i,...a)}catch(l){Ie.error(l)}}return s}function AA(e,t,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=IA(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function bA(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Sc)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=30,SA=1e3;class CA{constructor(t={},n=SA){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const $g=new CA;function PA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function xA(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:PA(r)},i=gA.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let l="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(l=c.error.message)}catch{}throw Ve.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function VA(e,t=$g,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ve.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ve.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new OA;return setTimeout(async()=>{l.abort()},pA),jg({appId:r,apiKey:s,measurementId:i},a,l,t)}async function jg(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=$g){var i;const{appId:a,measurementId:l}=e;try{await DA(r,t)}catch(c){if(l)return Ie.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:l};throw c}try{const c=await xA(e);return s.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!kA(h)){if(s.deleteThrottleMetadata(a),l)return Ie.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw c}const d=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?sh(n,s.intervalMillis,RA):sh(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(a,p),Ie.debug(`Calling attemptFetch again in ${d} millis`),jg(e,p,r,s)}}function DA(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ve.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function kA(e){if(!(e instanceof Hn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class OA{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function NA(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,a=Object.assign(Object.assign({},r),{send_to:i});e("event",n,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(){if(Hd())try{await Kd()}catch(e){return Ie.warn(Ve.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ie.warn(Ve.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LA(e,t,n,r,s,i,a){var l;const c=VA(e);c.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&Ie.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Ie.error(y)),t.push(c);const h=MA().then(y=>{if(y)return r.getId()}),[d,p]=await Promise.all([c,h]);bA(i)||vA(i,d.measurementId),s("js",new Date);const m=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return m[dA]="firebase",m.update=!0,p!=null&&(m[fA]=p),s("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t){this.app=t}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},tf=[];const ef={};let xa="dataLayer",UA="gtag",nf,qg,rf=!1;function BA(){const e=[];if(Qv()&&e.push("This is a browser extension environment."),Xv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ve.create("invalid-analytics-context",{errorInfo:t});Ie.warn(n.message)}}function $A(e,t,n){BA();const r=e.options.appId;if(!r)throw Ve.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ie.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ve.create("no-api-key");if(Os[r]!=null)throw Ve.create("already-exists",{id:r});if(!rf){EA(xa);const{wrappedGtag:i,gtagCore:a}=AA(Os,tf,ef,xa,UA);qg=i,nf=a,rf=!0}return Os[r]=LA(e,tf,ef,t,nf,xa,n),new FA(e)}function jA(e=Xd()){e=lr(e);const t=si(e,po);return t.isInitialized()?t.getImmediate():qA(e)}function qA(e,t={}){const n=si(e,po);if(n.isInitialized()){const s=n.getImmediate();if(to(t,n.getOptions()))return s;throw Ve.create("already-initialized")}return n.initialize({options:t})}function zA(e,t,n,r){e=lr(e),NA(qg,Os[e.app.options.appId],t,n,r).catch(s=>Ie.error(s))}const sf="@firebase/analytics",of="0.10.10";function HA(){Ln(new mn(po,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return $A(r,s,n)},"PUBLIC")),Ln(new mn("analytics-internal",e,"PRIVATE")),Je(sf,of),Je(sf,of,"esm2017");function e(t){try{const n=t.getProvider(po).getImmediate();return{logEvent:(r,s,i)=>zA(n,r,s,i)}}catch(n){throw Ve.create("interop-component-reg-failed",{reason:n})}}}HA();const KA={apiKey:"AIzaSyBtjsEdOL9qk3v5QBp-S0Fe9mSuNRkZsAM",authDomain:"progect-sneakers.firebaseapp.com",projectId:"progect-sneakers",storageBucket:"progect-sneakers.appspot.com",messagingSenderId:"614572943660",appId:"1:614572943660:web:bf43eadfd837dac969a489",measurementId:"G-4XQPNGQZEM"},zg=Yd(KA);jA(zg);const Js=aI(zg),GA=async()=>{try{return(await Tg(_c(Js,"items"))).docs.map(n=>({id:n.id,...n.data()}))}catch(e){throw console.error("Error fetching items:",e),e}},Hg=async()=>{try{return(await Tg(_c(Js,"favorites"))).docs.map(n=>({id:n.id,...n.data()}))}catch(e){throw console.error("Error fetching items:",e),e}},WA=async(e,t)=>{try{const n=_c(Js,"orders");return await AI(n,{items:e,totalPrice:t})}catch(n){console.log("Failed to create the order",n)}},QA={class:"scroll-none"},YA={class:"fixed top-0 right-0 z-20 flex flex-col h-screen p-8 overflow-y-auto bg-white w-96"},XA={key:0,class:"flex items-center w-full h-full"},JA={key:1,class:"flex-1 overflow-y-auto"},ZA={class:"flex flex-col justify-between w-full h-full"},tb={class:"sticky bottom-0 z-20 bg-white shadow-xl"},eb={class:"flex flex-col gap-4 mt-7"},nb={class:"flex gap-2"},rb={class:"flex gap-2"},sb=["disabled"],ib={__name:"Drawer",props:{totalPrice:Number,taxAmount:Number},setup(e){const t=e,{cart:n}=xe("cart"),r=gn(!1),s=gn(null),i=fe(()=>!n.value.length),a=fe(()=>r.value||i.value),l=async()=>{r.value=!0;try{const c=await WA(n.value,t.totalPrice);n.value=[],s.value=c.id}catch(c){console.log(c)}finally{r.value=!1}};return(c,h)=>(Ot(),Qt("aside",QA,[h[4]||(h[4]=J("div",{class:"fixed top-0 left-0 z-10 w-full h-screen bg-black opacity-70"},null,-1)),J("div",YA,[Bt(Tv),!e.totalPrice||s.value?(Ot(),Qt("div",XA,[s.value&&!e.totalPrice?(Ot(),Ur(eh,{key:0,title:"Order Placed",description:`Your Order #${s.value} Is on Its Way to You`,imageUrl:"/order-success-icon.png"},null,8,["description"])):$s("",!0),!e.totalPrice&&!s.value?(Ot(),Ur(eh,{key:1,title:"The cart is empty",description:"Add at least one pair of sneakers to create an order",imageUrl:"/package-icon.png"})):$s("",!0)])):(Ot(),Qt("div",JA,[J("div",ZA,[Bt(xv),J("div",tb,[J("div",eb,[J("div",nb,[h[0]||(h[0]=J("span",null,"Total:",-1)),h[1]||(h[1]=J("div",{class:"flex-1 border-b border-dashed"},null,-1)),J("b",null,nn(e.totalPrice)+" USD",1)]),J("div",rb,[h[2]||(h[2]=J("span",null,"Tax 5%:",-1)),h[3]||(h[3]=J("div",{class:"flex-1 border-b border-dashed"},null,-1)),J("b",null,nn(e.taxAmount)+" USD",1)]),J("button",{disabled:a.value,onClick:l,class:"w-full py-3 mt-4 text-white transition cursor-pointer bg-lime-500 rounded-xl disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 disabled:cursor-not-allowed"}," Checkout ",8,sb)])])])]))])]))}},ob=.05,ab={class:"w-4/5 m-auto bg-white shadow-xl mt-14 rounded-xl"},lb={class:"p-10"},cb={__name:"App",setup(e){const t=gn([]),n=fe(()=>t.value.reduce((c,h)=>c+h.price,0)),r=fe(()=>Math.round(n.value*ob)),s=gn(!1),i=()=>{s.value=!s.value};return rr(t,()=>{localStorage.setItem("cart",JSON.stringify(t.value))},{deep:!0}),console.log("item",t),Cs("cart",{cart:t,cartToggle:i,addToCart:c=>{t.value.push(c),c.isAdded=!0},removeFromCart:c=>{t.value.splice(t.value.indexOf(c),1),c.isAdded=!1}}),(c,h)=>{const d=cd("router-view");return Ot(),Qt(Te,null,[s.value?(Ot(),Ur(ib,{key:0,"total-price":n.value,"tax-amount":r.value},null,8,["total-price","tax-amount"])):$s("",!0),J("div",ab,[Bt(vv,{"total-price":n.value,cartToggle:i},null,8,["total-price"]),J("div",lb,[Bt(d)])])],64)}}};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function Kg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ub(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Kg(e.default)}const Rt=Object.assign;function Va(e,t){const n={};for(const r in t){const s=t[r];n[r]=ze(s)?s.map(e):e(s)}return n}const Ns=()=>{},ze=Array.isArray,Gg=/#/g,hb=/&/g,fb=/\//g,db=/=/g,pb=/\?/g,Wg=/\+/g,gb=/%5B/g,mb=/%5D/g,Qg=/%5E/g,_b=/%60/g,Yg=/%7B/g,yb=/%7C/g,Xg=/%7D/g,vb=/%20/g;function Cc(e){return encodeURI(""+e).replace(yb,"|").replace(gb,"[").replace(mb,"]")}function Eb(e){return Cc(e).replace(Yg,"{").replace(Xg,"}").replace(Qg,"^")}function _l(e){return Cc(e).replace(Wg,"%2B").replace(vb,"+").replace(Gg,"%23").replace(hb,"%26").replace(_b,"`").replace(Yg,"{").replace(Xg,"}").replace(Qg,"^")}function Tb(e){return _l(e).replace(db,"%3D")}function wb(e){return Cc(e).replace(Gg,"%23").replace(pb,"%3F")}function Ib(e){return e==null?"":wb(e).replace(fb,"%2F")}function Zs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ab=/\/$/,bb=e=>e.replace(Ab,"");function Da(e,t,n="/"){let r,s={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),s=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=Pb(r??t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Zs(a)}}function Rb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function af(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Sb(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(t.matched[r],n.matched[s])&&Jg(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Xr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Jg(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Cb(e[n],t[n]))return!1;return!0}function Cb(e,t){return ze(e)?lf(e,t):ze(t)?lf(t,e):e===t}function lf(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Pb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ti;(function(e){e.pop="pop",e.push="push"})(ti||(ti={}));var Ms;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ms||(Ms={}));function xb(e){if(!e)if(Vr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),bb(e)}const Vb=/^[^#]+#/;function Db(e,t){return e.replace(Vb,"#")+t}function kb(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ko=()=>({left:window.scrollX,top:window.scrollY});function Ob(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=kb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cf(e,t){return(history.state?history.state.position-t:-1)+e}const yl=new Map;function Nb(e,t){yl.set(e,t)}function Mb(e){const t=yl.get(e);return yl.delete(e),t}let Lb=()=>location.protocol+"//"+location.host;function Zg(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let l=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),af(c,"")}return af(n,e)+r+s}function Fb(e,t,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const y=Zg(e,location),R=n.value,P=t.value;let D=0;if(m){if(n.value=y,t.value=m,a&&a===R){a=null;return}D=P?m.position-P.position:0}else r(y);s.forEach(B=>{B(n.value,R,{delta:D,type:ti.pop,direction:D?D>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){a=n.value}function h(m){s.push(m);const y=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(y),y}function d(){const{history:m}=window;m.state&&m.replaceState(Rt({},m.state,{scroll:Ko()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function uf(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ko():null}}function Ub(e){const{history:t,location:n}=window,r={value:Zg(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=e.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:Lb()+e+c;try{t[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function a(c,h){const d=Rt({},t.state,uf(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Rt({},s.value,t.state,{forward:c,scroll:Ko()});i(d.current,d,!0);const p=Rt({},uf(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Bb(e){e=xb(e);const t=Ub(e),n=Fb(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Rt({location:"",base:e,go:r,createHref:Db.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function $b(e){return typeof e=="string"||e&&typeof e=="object"}function tm(e){return typeof e=="string"||typeof e=="symbol"}const em=Symbol("");var hf;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(hf||(hf={}));function Jr(e,t){return Rt(new Error,{type:e,[em]:!0},t)}function un(e,t){return e instanceof Error&&em in e&&(t==null||!!(e.type&t))}const ff="[^/]+?",jb={sensitive:!1,strict:!1,start:!0,end:!0},qb=/[.+*?^${}()[\]/\\]/g;function zb(e,t){const n=Rt({},jb,t),r=[];let s=n.start?"^":"";const i=[];for(const h of e){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(qb,"\\$&"),y+=40;else if(m.type===1){const{value:R,repeatable:P,optional:D,regexp:B}=m;i.push({name:R,repeatable:P,optional:D});const $=B||ff;if($!==ff){y+=10;try{new RegExp(`(${$})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${R}" (${$}): `+K.message)}}let H=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(H=D&&h.length<2?`(?:/${H})`:"/"+H),D&&(H+="?"),s+=H,y+=20,D&&(y+=-8),P&&(y+=-20),$===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",R=i[m-1];p[R.name]=y&&R.repeatable?y.split("/"):y}return p}function c(h){let d="",p=!1;for(const m of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:R,repeatable:P,optional:D}=y,B=R in h?h[R]:"";if(ze(B)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const $=ze(B)?B.join("/"):B;if(!$)if(D)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=$}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function Hb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function nm(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Hb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(df(r))return 1;if(df(s))return-1}return s.length-r.length}function df(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kb={type:0,value:""},Gb=/[a-zA-Z0-9_]/;function Wb(e){if(!e)return[[]];if(e==="/")return[[Kb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Gb.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function Qb(e,t,n){const r=zb(Wb(e.path),n),s=Rt(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Yb(e,t){const n=[],r=new Map;t=_f({strict:!1,end:!0,sensitive:!1},t);function s(p){return r.get(p)}function i(p,m,y){const R=!y,P=gf(p);P.aliasOf=y&&y.record;const D=_f(t,p),B=[P];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const ft of K)B.push(gf(Rt({},P,{components:y?y.record.components:P.components,path:ft,aliasOf:y?y.record:P})))}let $,H;for(const K of B){const{path:ft}=K;if(m&&ft[0]!=="/"){const nt=m.record.path,I=nt[nt.length-1]==="/"?"":"/";K.path=m.record.path+(ft&&I+ft)}if($=Qb(K,m,D),y?y.alias.push($):(H=H||$,H!==$&&H.alias.push($),R&&p.name&&!mf($)&&a(p.name)),rm($)&&c($),P.children){const nt=P.children;for(let I=0;I<nt.length;I++)i(nt[I],$,y&&y.children[I])}y=y||$}return H?()=>{a(H)}:Ns}function a(p){if(tm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=Zb(p,n);n.splice(m,0,p),p.record.name&&!mf(p)&&r.set(p.record.name,p)}function h(p,m){let y,R={},P,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Jr(1,{location:p});D=y.record.name,R=Rt(pf(m.params,y.keys.filter(H=>!H.optional).concat(y.parent?y.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&pf(p.params,y.keys.map(H=>H.name))),P=y.stringify(R)}else if(p.path!=null)P=p.path,y=n.find(H=>H.re.test(P)),y&&(R=y.parse(P),D=y.record.name);else{if(y=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!y)throw Jr(1,{location:p,currentLocation:m});D=y.record.name,R=Rt({},m.params,p.params),P=y.stringify(R)}const B=[];let $=y;for(;$;)B.unshift($.record),$=$.parent;return{name:D,path:P,params:R,matched:B,meta:Jb(B)}}e.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function pf(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function gf(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Xb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Xb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function mf(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jb(e){return e.reduce((t,n)=>Rt(t,n.meta),{})}function _f(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Zb(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;nm(e,t[i])<0?r=i:n=i+1}const s=tR(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function tR(e){let t=e;for(;t=t.parent;)if(rm(t)&&nm(e,t)===0)return t}function rm({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function eR(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Wg," "),a=i.indexOf("="),l=Zs(a<0?i:i.slice(0,a)),c=a<0?null:Zs(i.slice(a+1));if(l in t){let h=t[l];ze(h)||(h=t[l]=[h]),h.push(c)}else t[l]=c}return t}function yf(e){let t="";for(let n in e){const r=e[n];if(n=Tb(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&_l(i)):[r&&_l(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function nR(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const rR=Symbol(""),vf=Symbol(""),Pc=Symbol(""),sm=Symbol(""),vl=Symbol("");function _s(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pn(e,t,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Jr(4,{from:n,to:t})):m instanceof Error?c(m):$b(m)?c(Jr(2,{from:t,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>e.call(r&&r.instances[s],t,n,h));let p=Promise.resolve(d);e.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function ka(e,t,n,r,s=i=>i()){const i=[];for(const a of e)for(const l in a.components){let c=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Kg(c)){const d=(c.__vccOpts||c)[t];d&&i.push(Pn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=ub(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const y=(p.__vccOpts||p)[t];return y&&Pn(y,n,r,a,l,s)()}))}}return i}function Ef(e){const t=xe(Pc),n=xe(sm),r=fe(()=>{const c=Xe(e.to);return t.resolve(c)}),s=fe(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Xr.bind(null,d));if(m>-1)return m;const y=Tf(c[h-2]);return h>1&&Tf(d)===y&&p[p.length-1].path!==y?p.findIndex(Xr.bind(null,c[h-2])):m}),i=fe(()=>s.value>-1&&aR(n.params,r.value.params)),a=fe(()=>s.value>-1&&s.value===n.matched.length-1&&Jg(n.params,r.value.params));function l(c={}){return oR(c)?t[Xe(e.replace)?"replace":"push"](Xe(e.to)).catch(Ns):Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const sR=rd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ef,setup(e,{slots:t}){const n=wo(Ef(e)),{options:r}=xe(Pc),s=fe(()=>({[wf(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[wf(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Od("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iR=sR;function oR(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function aR(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Tf(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wf=(e,t,n)=>e??t??n,lR=rd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=xe(vl),s=fe(()=>e.route||r.value),i=xe(vf,0),a=fe(()=>{let h=Xe(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=fe(()=>s.value.matched[a.value]);Cs(vf,fe(()=>a.value+1)),Cs(rR,l),Cs(vl,s);const c=gn();return rr(()=>[c.value,l.value,e.name],([h,d,p],[m,y,R])=>{d&&(d.instances[p]=h,y&&y!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),h&&d&&(!y||!Xr(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(h))},{flush:"post"}),()=>{const h=s.value,d=e.name,p=l.value,m=p&&p.components[d];if(!m)return If(n.default,{Component:m,route:h});const y=p.props[d],R=y?y===!0?h.params:typeof y=="function"?y(h):y:null,D=Od(m,Rt({},R,t,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return If(n.default,{Component:D,route:h})||D}}});function If(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const cR=lR;function uR(e){const t=Yb(e.routes,e),n=e.parseQuery||eR,r=e.stringifyQuery||yf,s=e.history,i=_s(),a=_s(),l=_s(),c=c_(Rn);let h=Rn;Vr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Va.bind(null,O=>""+O),p=Va.bind(null,Ib),m=Va.bind(null,Zs);function y(O,Y){let W,Z;return tm(O)?(W=t.getRecordMatcher(O),Z=Y):Z=O,t.addRoute(Z,W)}function R(O){const Y=t.getRecordMatcher(O);Y&&t.removeRoute(Y)}function P(){return t.getRoutes().map(O=>O.record)}function D(O){return!!t.getRecordMatcher(O)}function B(O,Y){if(Y=Rt({},Y||c.value),typeof O=="string"){const E=Da(n,O,Y.path),x=t.resolve({path:E.path},Y),M=s.createHref(E.fullPath);return Rt(E,x,{params:m(x.params),hash:Zs(E.hash),redirectedFrom:void 0,href:M})}let W;if(O.path!=null)W=Rt({},O,{path:Da(n,O.path,Y.path).path});else{const E=Rt({},O.params);for(const x in E)E[x]==null&&delete E[x];W=Rt({},O,{params:p(E)}),Y.params=p(Y.params)}const Z=t.resolve(W,Y),_t=O.hash||"";Z.params=d(m(Z.params));const St=Rb(r,Rt({},O,{hash:Eb(_t),path:Z.path})),_=s.createHref(St);return Rt({fullPath:St,hash:_t,query:r===yf?nR(O.query):O.query||{}},Z,{redirectedFrom:void 0,href:_})}function $(O){return typeof O=="string"?Da(n,O,c.value.path):Rt({},O)}function H(O,Y){if(h!==O)return Jr(8,{from:Y,to:O})}function K(O){return I(O)}function ft(O){return K(Rt($(O),{replace:!0}))}function nt(O){const Y=O.matched[O.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let Z=typeof W=="function"?W(O):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=$(Z):{path:Z},Z.params={}),Rt({query:O.query,hash:O.hash,params:Z.path!=null?{}:O.params},Z)}}function I(O,Y){const W=h=B(O),Z=c.value,_t=O.state,St=O.force,_=O.replace===!0,E=nt(W);if(E)return I(Rt($(E),{state:typeof E=="object"?Rt({},_t,E.state):_t,force:St,replace:_}),Y||W);const x=W;x.redirectedFrom=Y;let M;return!St&&Sb(r,Z,W)&&(M=Jr(16,{to:x,from:Z}),ke(Z,Z,!0,!1)),(M?Promise.resolve(M):A(x,Z)).catch(k=>un(k)?un(k,2)?k:Ue(k):dt(k,x,Z)).then(k=>{if(k){if(un(k,2))return I(Rt({replace:_},$(k.to),{state:typeof k.to=="object"?Rt({},_t,k.to.state):_t,force:St}),Y||x)}else k=S(x,Z,!0,_,_t);return b(x,Z,k),k})}function v(O,Y){const W=H(O,Y);return W?Promise.reject(W):Promise.resolve()}function w(O){const Y=Tn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function A(O,Y){let W;const[Z,_t,St]=hR(O,Y);W=ka(Z.reverse(),"beforeRouteLeave",O,Y);for(const E of Z)E.leaveGuards.forEach(x=>{W.push(Pn(x,O,Y))});const _=v.bind(null,O,Y);return W.push(_),ve(W).then(()=>{W=[];for(const E of i.list())W.push(Pn(E,O,Y));return W.push(_),ve(W)}).then(()=>{W=ka(_t,"beforeRouteUpdate",O,Y);for(const E of _t)E.updateGuards.forEach(x=>{W.push(Pn(x,O,Y))});return W.push(_),ve(W)}).then(()=>{W=[];for(const E of St)if(E.beforeEnter)if(ze(E.beforeEnter))for(const x of E.beforeEnter)W.push(Pn(x,O,Y));else W.push(Pn(E.beforeEnter,O,Y));return W.push(_),ve(W)}).then(()=>(O.matched.forEach(E=>E.enterCallbacks={}),W=ka(St,"beforeRouteEnter",O,Y,w),W.push(_),ve(W))).then(()=>{W=[];for(const E of a.list())W.push(Pn(E,O,Y));return W.push(_),ve(W)}).catch(E=>un(E,8)?E:Promise.reject(E))}function b(O,Y,W){l.list().forEach(Z=>w(()=>Z(O,Y,W)))}function S(O,Y,W,Z,_t){const St=H(O,Y);if(St)return St;const _=Y===Rn,E=Vr?history.state:{};W&&(Z||_?s.replace(O.fullPath,Rt({scroll:_&&E&&E.scroll},_t)):s.push(O.fullPath,_t)),c.value=O,ke(O,Y,W,_),Ue()}let T;function pe(){T||(T=s.listen((O,Y,W)=>{if(!He.listening)return;const Z=B(O),_t=nt(Z);if(_t){I(Rt(_t,{replace:!0}),Z).catch(Ns);return}h=Z;const St=c.value;Vr&&Nb(cf(St.fullPath,W.delta),Ko()),A(Z,St).catch(_=>un(_,12)?_:un(_,2)?(I(_.to,Z).then(E=>{un(E,20)&&!W.delta&&W.type===ti.pop&&s.go(-1,!1)}).catch(Ns),Promise.reject()):(W.delta&&s.go(-W.delta,!1),dt(_,Z,St))).then(_=>{_=_||S(Z,St,!1),_&&(W.delta&&!un(_,8)?s.go(-W.delta,!1):W.type===ti.pop&&un(_,20)&&s.go(-1,!1)),b(Z,St,_)}).catch(Ns)}))}let De=_s(),$t=_s(),mt;function dt(O,Y,W){Ue(O);const Z=$t.list();return Z.length?Z.forEach(_t=>_t(O,Y,W)):console.error(O),Promise.reject(O)}function Ae(){return mt&&c.value!==Rn?Promise.resolve():new Promise((O,Y)=>{De.add([O,Y])})}function Ue(O){return mt||(mt=!O,pe(),De.list().forEach(([Y,W])=>O?W(O):Y()),De.reset()),O}function ke(O,Y,W,Z){const{scrollBehavior:_t}=e;if(!Vr||!_t)return Promise.resolve();const St=!W&&Mb(cf(O.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return Ol().then(()=>_t(O,Y,St)).then(_=>_&&Ob(_)).catch(_=>dt(_,O,Y))}const Nt=O=>s.go(O);let Mt;const Tn=new Set,He={currentRoute:c,listening:!0,addRoute:y,removeRoute:R,clearRoutes:t.clearRoutes,hasRoute:D,getRoutes:P,resolve:B,options:e,push:K,replace:ft,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$t.add,isReady:Ae,install(O){const Y=this;O.component("RouterLink",iR),O.component("RouterView",cR),O.config.globalProperties.$router=Y,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Xe(c)}),Vr&&!Mt&&c.value===Rn&&(Mt=!0,K(s.location).catch(_t=>{}));const W={};for(const _t in Rn)Object.defineProperty(W,_t,{get:()=>c.value[_t],enumerable:!0});O.provide(Pc,Y),O.provide(sm,Wf(W)),O.provide(vl,c);const Z=O.unmount;Tn.add(O),O.unmount=function(){Tn.delete(O),Tn.size<1&&(h=Rn,T&&T(),T=null,c.value=Rn,Mt=!1,mt=!1),Z()}}};function ve(O){return O.reduce((Y,W)=>Y.then(()=>w(W)),Promise.resolve())}return He}function hR(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(h=>Xr(h,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(h=>Xr(h,c))||s.push(c))}return[n,r,s]}const fR="/search.svg",dR={class:"m-auto relative p-8 transition bg-white cursor-pointer max-w-[400px] border-slate-100 rounded-3xl hover:-translate-y-2 hover:shadow-xl"},pR=["src"],gR={class:"max-w-[226px] rounded-l h-[226px]"},mR=["src"],_R={class:"mt-2"},yR={class:"flex justify-between mt-5"},vR={class:"flex flex-col"},ER=["src"],TR={__name:"Card",props:{id:Number,title:String,imageUrl:String,price:Number,isFavorite:Boolean,isAdded:Boolean,onClickAdd:Function,onClickFavorite:Function},setup(e){return(t,n)=>(Ot(),Qt("div",dR,[e.onClickFavorite?(Ot(),Qt("img",{key:0,src:e.isFavorite?"/like-2.svg":"/like-1.svg",alt:"add to favorite button",class:"absolute top-9 left-9 hover:scale-125 hover:border-[#ff8585] hover:border hover:rounded-xl",onClick:n[0]||(n[0]=(...r)=>e.onClickFavorite&&e.onClickFavorite(...r))},null,8,pR)):$s("",!0),J("div",gR,[J("img",{class:"object-contain w-full h-full",src:e.imageUrl,alt:"sneakers"},null,8,mR)]),J("p",_R,nn(e.title),1),J("div",yR,[J("div",vR,[n[2]||(n[2]=J("span",{class:"text-slate-400"},"Price:",-1)),J("b",null,nn(e.price)+" USD",1)]),e.onClickFavorite?(Ot(),Qt("img",{key:0,src:e.isAdded?"/checked.svg":"/plus.svg",alt:"add button",onClick:n[1]||(n[1]=(...r)=>e.onClickAdd&&e.onClickAdd(...r)),class:"hover:scale-125"},null,8,ER)):$s("",!0)])]))}},wR={class:"grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4"},im={__name:"CardList",props:{items:Array,isFavorites:Boolean},emits:["addToFavorite","addToCart"],setup(e,{emit:t}){const n=t;return(r,s)=>{const i=ud("auto-animate");return Ml((Ot(),Qt("div",wR,[(Ot(!0),Qt(Te,null,fd(e.items,a=>(Ot(),Ur(TR,{key:a.id,id:a.id,title:a.name,"image-url":a.imageUrl,price:a.price,onClickFavorite:e.isFavorites?null:()=>n("addToFavorite",a),onClickAdd:e.isFavorites?null:()=>n("addToCart",a),isFavorite:a.isFavorite,isAdded:a.isAdded},null,8,["id","title","image-url","price","onClickFavorite","onClickAdd","isFavorite","isAdded"]))),128))])),[[i]])}}};var Oi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function IR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var AR="Expected a function",Af=NaN,bR="[object Symbol]",RR=/^\s+|\s+$/g,SR=/^[-+]0x[0-9a-f]+$/i,CR=/^0b[01]+$/i,PR=/^0o[0-7]+$/i,xR=parseInt,VR=typeof Oi=="object"&&Oi&&Oi.Object===Object&&Oi,DR=typeof self=="object"&&self&&self.Object===Object&&self,kR=VR||DR||Function("return this")(),OR=Object.prototype,NR=OR.toString,MR=Math.max,LR=Math.min,Oa=function(){return kR.Date.now()};function FR(e,t,n){var r,s,i,a,l,c,h=0,d=!1,p=!1,m=!0;if(typeof e!="function")throw new TypeError(AR);t=bf(t)||0,El(n)&&(d=!!n.leading,p="maxWait"in n,i=p?MR(bf(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m);function y(nt){var I=r,v=s;return r=s=void 0,h=nt,a=e.apply(v,I),a}function R(nt){return h=nt,l=setTimeout(B,t),d?y(nt):a}function P(nt){var I=nt-c,v=nt-h,w=t-I;return p?LR(w,i-v):w}function D(nt){var I=nt-c,v=nt-h;return c===void 0||I>=t||I<0||p&&v>=i}function B(){var nt=Oa();if(D(nt))return $(nt);l=setTimeout(B,P(nt))}function $(nt){return l=void 0,m&&r?y(nt):(r=s=void 0,a)}function H(){l!==void 0&&clearTimeout(l),h=0,r=c=s=l=void 0}function K(){return l===void 0?a:$(Oa())}function ft(){var nt=Oa(),I=D(nt);if(r=arguments,s=this,c=nt,I){if(l===void 0)return R(c);if(p)return l=setTimeout(B,t),y(c)}return l===void 0&&(l=setTimeout(B,t)),a}return ft.cancel=H,ft.flush=K,ft}function El(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function UR(e){return!!e&&typeof e=="object"}function BR(e){return typeof e=="symbol"||UR(e)&&NR.call(e)==bR}function bf(e){if(typeof e=="number")return e;if(BR(e))return Af;if(El(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=El(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(RR,"");var n=CR.test(e);return n||PR.test(e)?xR(e.slice(2),n?2:8):SR.test(e)?Af:+e}var $R=FR;const jR=IR($R),qR={class:"flex items-center justify-between"},zR={class:"flex gap-3"},HR={class:"relative"},KR={class:"mt-10"},GR={__name:"Home",setup(e){const{cart:t,addToCart:n,removeFromCart:r}=xe("cart"),s=gn(""),i=gn([]),a=gn(""),l=async()=>{try{const R=await GA();i.value=R.map(P=>({...P,isFavorite:!1,favoriteId:null,isAdded:!1}))}catch(R){console.log(R)}},c=async()=>{try{const R=await Hg();i.value=i.value.map(P=>{const D=R.find(B=>B.parentId===P.id);return D?{...P,isFavorite:!0,favoriteId:D.id}:P})}catch(R){console.log(R)}};Fl(async()=>{let R=[];try{R=JSON.parse(localStorage.getItem("cart"))||[]}catch(P){console.error("Error parsing localStorage data:",P)}t.value=R,await l(),await c()});const h=jR(R=>{a.value=R},700),d=R=>{h(R.target.value)},p=fe(()=>{const R=[...i.value];return s.value==="name"?R.sort((P,D)=>P.name.localeCompare(D.name)):s.value==="price"?R.sort((P,D)=>P.price-D.price):s.value==="-price"&&R.sort((P,D)=>D.price-P.price),R.filter(P=>P.name.toLowerCase().includes(a.value.toLowerCase()))}),m=async R=>{try{if(R.isFavorite){const P=gl(Js,"favorites",R.favoriteId);await II(P),R.isFavorite=!1,R.favoriteId=null}else{const P=gl(Js,"favorites",String(R.id)),D={parentId:R.id,item:R};await wI(P,D),R.isFavorite=!0,R.favoriteId=R.id}}catch(P){console.log("Error updating favorites:",P)}},y=R=>{R.isAdded?r(R):n(R)};return rr(s,l),rr(t,()=>{i.value=i.value.map(R=>({...R,isAdded:!1}))}),(R,P)=>(Ot(),Qt(Te,null,[J("div",qR,[P[3]||(P[3]=J("h2",{class:"mb-8 text-3xl font-bold"},"All sneakers",-1)),J("div",zR,[Ml(J("select",{class:"px-3 py-2 border rounded-md outline-none bg-inherit","onUpdate:modelValue":P[0]||(P[0]=D=>s.value=D)},P[1]||(P[1]=[J("option",{selected:"",disabled:"",value:""},"Sort by...",-1),J("option",{value:"name"},"Name: A to Z",-1),J("option",{value:"price"},"Price: Low to High",-1),J("option",{value:"-price"},"Price: High to Low",-1)]),512),[[jy,s.value]]),J("div",HR,[P[2]||(P[2]=J("img",{src:fR,class:"absolute left-3 top-3"},null,-1)),J("input",{placeholder:"Search",type:"text",class:"py-2 pr-4 border rounded-md outline-none pl-11 focus:border-gray-400",onInput:d},null,32)])])]),J("div",KR,[Bt(im,{items:p.value,onAddToFavorite:m,onAddToCart:y},null,8,["items"])])],64))}},WR={__name:"Favorites",setup(e){const t=gn([]);return Fl(async()=>{try{const n=await Hg();console.log(n),t.value=n.map(r=>r.item)}catch(n){console.log(n)}}),(n,r)=>(Ot(),Qt(Te,null,[r[0]||(r[0]=J("h2",{class:"mb-8 text-3xl font-bold"},"My Favorites",-1)),Bt(im,{items:t.value,"is-favorites":""},null,8,["items"])],64))}},QR=[{path:"/",name:"Home",component:GR},{path:"/favorites",name:"Favorites",component:WR}],YR=uR({history:Bb(),routes:QR}),xc=Hy(cb);xc.use(hv);xc.use(YR);xc.mount("#app");
