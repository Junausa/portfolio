import{d as m,G as g,c as t,o as r,e as s,a as n,w as d,g as c,F as v,H as _,n as p,_ as f}from"./framework.B8nhAlG3.js";import{C as h,a as w}from"./theme.Dur7ayOY.js";const C={class:"viewer"},I=["src","alt"],x={class:"page-count"},k=m({__name:"ImageViewer",props:{images:{type:Array,required:!0}},setup(i){const a=i,e=g(0);function l(){e.value=(e.value+1)%a.images.length}function u(){e.value=(e.value-1+a.images.length)%a.images.length}return(b,B)=>(r(),t("div",null,[s("div",C,[s("img",{src:n(d)(a.images[e.value].url),alt:a.images[e.value].alt??""},null,8,I),s("button",{onClick:u,class:"prev"},[c(n(h),{size:48})]),s("button",{onClick:l,class:"next"},[c(n(w),{size:48})])]),s("div",x,[(r(!0),t(v,null,_(i.images,(V,o)=>(r(),t("div",{class:p(["dot",{active:o===e.value}]),key:o},null,2))),128))])]))}}),A=f(k,[["__scopeId","data-v-45bbc03c"]]);export{A as I};
