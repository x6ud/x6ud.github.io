import{r as d,o as f,c as p,a as _,b as m,d as h}from"./vendor.50301a75.js";const v=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};v();var y=(i,n)=>{for(const[s,r]of n)i[s]=r;return i};const g={};function E(i,n){const s=d("router-view");return f(),p(s)}var L=y(g,[["render",E]]);const O="modulepreload",a={},P="./",c=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${P}${r}`,r in a)return;a[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":O,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",u)})})).then(()=>n())},A=_({history:m(),routes:[{path:"/",component:()=>c(()=>import("./Search.cf8c6d41.js"),["assets/Search.cf8c6d41.js","assets/Search.8a3aecad.css","assets/feature-buffers.be4220ab.js","assets/vendor.50301a75.js","assets/Warning.50ec4495.js"])},{path:"/editor",component:()=>c(()=>import("./Editor.d170a79b.js"),["assets/Editor.d170a79b.js","assets/Editor.b05ff50f.css","assets/PhotoDataset.1df0427d.js","assets/vendor.50301a75.js","assets/feature-buffers.be4220ab.js","assets/Warning.50ec4495.js"])},{path:"/ds-manager",component:()=>c(()=>import("./DatasetManager.88f6947e.js"),["assets/DatasetManager.88f6947e.js","assets/DatasetManager.47d3f3f9.css","assets/PhotoDataset.1df0427d.js","assets/vendor.50301a75.js","assets/feature-buffers.be4220ab.js"])}]});h(L).use(A).mount("#app");export{c as _,y as a};
//# sourceMappingURL=index.43185786.js.map
