import{a as d,r as i,f as p,o as _,g as c,h as f,B as l,C as m,k as t}from"./vendor.b6c8f165.js";import{_ as u}from"./index.98e696da.js";var v=d({setup(){const e=i("");function s(a){return a.replace(/[\s]/g,"").toLowerCase()}return{ans:e,formatter:s}}}),g="./assets/origin.361fd362.jpg",b="./assets/merged.8198cfbd.png";const r=e=>(l("data-v-1a52b7eb"),e=e(),m(),e),h={class:"riddle"},y=r(()=>t("div",{style:{display:"flex"}},[t("img",{src:g,alt:"",style:{"margin-right":"10px"}}),t("img",{src:b,alt:""})],-1)),x=r(()=>t("div",{style:{margin:"20px 0"}},"Find differences.",-1));function B(e,s,a,C,I,$){const o=p("input-ans");return _(),c("div",h,[y,x,f(o,{value:e.ans,"onUpdate:value":s[0]||(s[0]=n=>e.ans=n),formatter:e.formatter},null,8,["value","formatter"])])}var F=u(v,[["render",B],["__scopeId","data-v-1a52b7eb"]]);export{F as default};