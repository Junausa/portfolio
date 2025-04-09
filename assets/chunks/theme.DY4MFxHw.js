import{h as w,d as g,c,o,a,b as h,e as p,u as t,_ as f,f as v,n as $,g as i,w as y,i as k,t as u,F as A,r as j}from"./framework.CI0PFaIV.js";/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,e,n)=>n?n.toUpperCase():e.toLowerCase()),B=s=>{const r=V(s);return r.charAt(0).toUpperCase()+r.slice(1)},N=(...s)=>s.filter((r,e,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=({size:s,strokeWidth:r=2,absoluteStrokeWidth:e,color:n,iconNode:_,name:d,class:C,...L},{slots:x})=>w("svg",{...m,width:s||m.width,height:s||m.height,stroke:n||m.stroke,"stroke-width":e?Number(r)*24/Number(s):r,class:N("lucide",...d?[`lucide-${b(B(d))}-icon`,`lucide-${b(d)}`]:["lucide-icon"]),...L},[..._.map(I=>w(...I)),...x.default?[x.default()]:[]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(s,r)=>(e,{slots:n})=>w(H,{...e,iconNode:r,name:s},n);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=l("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=l("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=l("circle-arrow-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=l("circle-arrow-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=l("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=l("mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=l("twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),D={class:"socials-row"},E={class:"group",href:"mailto:juna@mse.gg"},T={class:"group",href:"https://twitter.com/junausa"},U={class:"group",href:"https://twitter.com/MeleeEveryday"},q={class:"group",href:"https://www.twitch.tv/meleeeveryday"},F={class:"group",href:"https://www.linkedin.com/in/arjunacapulong/"},Z=g({__name:"SocialsRow",setup(s){return(r,e)=>(o(),c("div",D,[a("a",E,[h(t(R),{size:24}),e[0]||(e[0]=p(" juna@mse.gg "))]),a("a",T,[h(t(z),{size:24}),e[1]||(e[1]=p(" JunaUSA "))]),a("a",U,[h(t(z),{size:24}),e[2]||(e[2]=p(" MeleeEveryday "))]),a("a",q,[h(t(S),{size:24}),e[3]||(e[3]=p(" MeleeEveryday "))]),a("a",F,[h(t(P),{size:24}),e[4]||(e[4]=p(" LinkedIn "))])]))}}),M=f(Z,[["__scopeId","data-v-621ee76f"]]),J=["src"],K={class:"text-container"},O=["src"],G={class:"column"},Q=["src"],X={key:2},Y={key:3},W={key:4},ee=g({__name:"Header",setup(s){const{site:r,frontmatter:e}=v();return(n,_)=>(o(),c("header",{id:"header-wrapper",class:$({large:t(e).headerIsLarge})},[t(e).headerImg?(o(),c("img",{key:0,class:"bg-img",src:t(y)(t(e).headerImg)},null,8,J)):i("",!0),a("div",K,[t(e).headerPfp?(o(),c("img",{key:0,class:"pfp",src:t(y)(t(e).headerPfp)},null,8,O)):i("",!0),a("div",G,[t(e).logo?(o(),c("img",{key:0,src:t(y)(t(e).logo)},null,8,Q)):i("",!0),t(e).header1?(o(),c("h1",{key:1,class:$({"sr-only":t(e).logo})},u(t(e).header1),3)):i("",!0),t(e).header1&&(t(e).header2||t(e).header3)?(o(),c("hr",X)):i("",!0),t(e).header2?(o(),c("h2",Y,u(t(e).header2),1)):i("",!0),t(e).header3?(o(),c("div",W,u(t(e).header3),1)):i("",!0),t(e).headerHasSocials?(o(),k(M,{key:5,style:{"margin-top":"1rem","flex-direction":"column"}})):i("",!0)])])],2))}}),te=f(ee,[["__scopeId","data-v-4d2d2728"]]),se={id:"top-nav"},re=["href"],oe={class:"hide-mobile"},ae=g({__name:"Nav",setup(s){const{site:r,page:e,frontmatter:n}=v();return(_,d)=>(o(),c("nav",se,[a("a",{href:t(y)("/"),class:"nav-link"},[a("div",null,u(t(r).title),1)],8,re),t(e).title?(o(),c(A,{key:0},[d[0]||(d[0]=a("div",{class:"divider hide-mobile"},null,-1)),a("div",oe,u(t(e).title),1)],64)):i("",!0)]))}}),ne=f(ae,[["__scopeId","data-v-8ac9b9ce"]]),ce={id:"content"},ie=g({__name:"Layout",setup(s){const{site:r,page:e,frontmatter:n}=v();return(_,d)=>{const C=j("Content");return o(),c(A,null,[t(e).filePath!=="index.md"?(o(),k(ne,{key:0})):i("",!0),t(n).header?(o(),k(te,{key:1})):i("",!0),a("div",ce,[h(C)]),a("footer",null,[d[0]||(d[0]=a("div",{class:"footer-tag"}," Producing your winning moments since 2016 ",-1)),h(M,{style:{"font-weight":"400","font-size":".9em"}})])],64)}}}),_e={Layout:ie,enhanceApp({app:s,router:r,siteData:e}){}};export{he as A,pe as C,_e as R,ue as a,le as b};
