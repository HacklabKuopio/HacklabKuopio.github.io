import{l as x,c as y,b as t,w as o,a as b,F as h,H as B,o as c,d as C,m as a,j as P,f as k,T as w}from"./entry.7b4a78f2.js";import{_ as H,a as N,b as T}from"./pagination.388f2882.js";import V from"./ContentQuery.1d614169.js";import{_ as q}from"./section.537d2f7b.js";import{u as A,q as F}from"./query.e6995867.js";import"./nuxt-link.33b24a2b.js";import"./preview.171d7a14.js";const l=6,v={__name:"index",async setup(L){let e,s;const{data:n}=([e,s]=x(async()=>A("content-/blog",async()=>{const _=await F("/blog").only("headline").find();return Math.ceil(_.length/l)})),e=await e,s(),e);return(_,Q)=>{const r=w,m=B,i=H,p=N,u=V,d=T,g=q;return c(),y(h,null,[t(m,null,{default:o(()=>[t(r,null,{default:o(()=>[C("Hacklab Kuopio Blog")]),_:1})]),_:1}),b("main",null,[t(i),t(g,{id:"main",class:"!pt-0"},{default:o(()=>[t(u,{path:"/blog",only:["headline","excerpt","date","tags","_path","image"],sort:{date:-1},limit:l},{default:o(({data:f})=>[t(p,{data:f},null,8,["data"])]),_:1}),a(n)>1?(c(),P(d,{key:0,class:"mt-8",currentPage:1,totalPages:a(n),nextPage:a(n)>1,baseUrl:"/blog/",pageUrl:"/blog/page/"},null,8,["totalPages","nextPage"])):k("",!0)]),_:1})])],64)}}};export{v as default};