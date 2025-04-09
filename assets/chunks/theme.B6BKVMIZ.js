import{h as w,d as m,c as a,o,a as i,b as n,e as h,u as t,_ as g,f,n as $,w as p,g as k,t as u,F as b,r as B}from"./framework.5jMU0uES.js";/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),I=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,e,c)=>c?c.toUpperCase():e.toLowerCase()),j=s=>{const r=I(s);return r.charAt(0).toUpperCase()+r.slice(1)},E=(...s)=>s.filter((r,e,c)=>!!r&&r.trim()!==""&&c.indexOf(r)===e).join(" ").trim();/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=({size:s,strokeWidth:r=2,absoluteStrokeWidth:e,color:c,iconNode:_,name:d,class:v,...A},{slots:C})=>w("svg",{...y,width:s||y.width,height:s||y.height,stroke:c||y.stroke,"stroke-width":e?Number(r)*24/Number(s):r,class:E("lucide",...d?[`lucide-${x(j(d))}-icon`,`lucide-${x(d)}`]:["lucide-icon"]),...A},[..._.map(L=>w(...L)),...C.default?[C.default()]:[]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(s,r)=>(e,{slots:c})=>w(O,{...e,iconNode:r,name:s},c);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=l("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=l("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=l("circle-arrow-left",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=l("circle-arrow-right",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=l("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=l("mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=l("twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=l("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),P={class:"socials-row"},R={class:"group",href:"mailto:juna@mse.gg"},S={key:0},D={class:"group",href:"https://twitter.com/junausa"},U={key:0},q={key:0,class:"group",href:"https://twitter.com/MeleeEveryday"},T={key:0},F={key:1,class:"group",href:"https://www.twitch.tv/meleeeveryday"},Z={key:0},J={class:"group",href:"https://www.linkedin.com/in/arjunacapulong/"},K={key:0},G=m({__name:"SocialsRow",props:{showME:{type:Boolean,default:!0},iconsOnly:{type:Boolean,default:!1}},setup(s){return(r,e)=>(o(),a("div",P,[i("a",R,[h(t(H),{size:24}),s.iconsOnly?n("",!0):(o(),a("span",S,"juna@mse.gg"))]),i("a",D,[h(t(M),{size:24}),s.iconsOnly?n("",!0):(o(),a("span",U,"JunaUSA"))]),s.showME?(o(),a("a",q,[h(t(M),{size:24}),s.iconsOnly?n("",!0):(o(),a("span",T,"MeleeEveryday"))])):n("",!0),s.showME?(o(),a("a",F,[h(t(N),{size:24}),s.iconsOnly?n("",!0):(o(),a("span",Z,"MeleeEveryday"))])):n("",!0),i("a",J,[h(t(V),{size:24}),s.iconsOnly?n("",!0):(o(),a("span",K,"LinkedIn"))])]))}}),z=g(G,[["__scopeId","data-v-e3f9ed37"]]),Q=["src"],X={class:"text-container"},Y=["src"],W={class:"column"},ee=["src"],te={key:2},se={key:3},oe={key:4},ae=m({__name:"Header",setup(s){const{site:r,frontmatter:e}=f();return(c,_)=>(o(),a("header",{id:"header-wrapper",class:$({large:t(e).headerIsLarge})},[t(e).headerImg?(o(),a("img",{key:0,class:"bg-img",src:t(p)(t(e).headerImg)},null,8,Q)):n("",!0),i("div",X,[t(e).headerPfp?(o(),a("img",{key:0,class:"pfp",src:t(p)(t(e).headerPfp)},null,8,Y)):n("",!0),i("div",W,[t(e).logo?(o(),a("img",{key:0,src:t(p)(t(e).logo)},null,8,ee)):n("",!0),t(e).header1?(o(),a("h1",{key:1,class:$({"sr-only":t(e).logo})},u(t(e).header1),3)):n("",!0),t(e).header1&&(t(e).header2||t(e).header3)?(o(),a("hr",te)):n("",!0),t(e).header2?(o(),a("h2",se,u(t(e).header2),1)):n("",!0),t(e).header3?(o(),a("div",oe,u(t(e).header3),1)):n("",!0),t(e).headerHasSocials?(o(),k(z,{key:5,style:{"margin-top":"1rem"},showME:!1,iconsOnly:""})):n("",!0)])])],2))}}),re=g(ae,[["__scopeId","data-v-55cf5582"]]),ne={id:"top-nav"},ce=["href"],ie={class:"hide-mobile"},de=m({__name:"Nav",setup(s){const{site:r,page:e,frontmatter:c}=f();return(_,d)=>(o(),a("nav",ne,[i("a",{href:t(p)("/"),class:"nav-link"},[i("div",null,u(t(r).title),1)],8,ce),t(e).title?(o(),a(b,{key:0},[d[0]||(d[0]=i("div",{class:"divider hide-mobile"},null,-1)),i("div",ie,u(t(e).title),1)],64)):n("",!0)]))}}),le=g(de,[["__scopeId","data-v-8ac9b9ce"]]),he={id:"content"},ue=m({__name:"Layout",setup(s){const{site:r,page:e,frontmatter:c}=f();return(_,d)=>{const v=B("Content");return o(),a(b,null,[t(e).filePath!=="index.md"?(o(),k(le,{key:0})):n("",!0),t(c).header?(o(),k(re,{key:1})):n("",!0),i("div",he,[h(v)]),i("footer",null,[d[0]||(d[0]=i("div",{class:"footer-tag"}," Producing your winning moments since 2016 ",-1)),h(z,{style:{"font-weight":"400","font-size":".9em"}})])],64)}}}),ke={Layout:ue,enhanceApp({app:s,router:r,siteData:e}){}};export{pe as A,me as C,ke as R,we as a,ye as b};
