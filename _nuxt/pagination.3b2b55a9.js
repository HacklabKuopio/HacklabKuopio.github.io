import{_ as w}from"./section.6aa18279.js";import{_ as x,o as n,j as P,w as d,a as e,c as s,F as h,r as v,t as _,f as $,m as k,s as L,y as B,q as l,v as m,b as o,d as p,i as g}from"./entry.f394979f.js";import{_ as q}from"./nuxt-link.ccc2ec87.js";const N={},U=e("div",{class:"border-t-2 pt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right mb-6 md:mb-8"},[e("ol",{itemscope:"",itemtype:"https://schema.org/BreadcrumbList",class:"blog-breadcrumb"},[e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("a",{itemprop:"item",href:"/"},[e("span",{itemprop:"name"},"Home")]),e("meta",{itemprop:"position",content:"1"})]),e("span",null,"/"),e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("span",{itemprop:"name"},"Blog"),e("meta",{itemprop:"position",content:"2"})])])],-1),S=e("h1",{class:"font-bold mb-4 md:mb-6 text-h3 leading-h3 md:text-h1 md:leading-h1 text-center md:text-left"},"Hacklab Kuopio Blog",-1),C=e("p",{class:"mb-3 md:w-8/12 md:text-lg md:leading-lg text-center md:text-left"},null,-1),D=e("div",{class:"border-t-2 mt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right"},null,-1);function I(t,a){const i=w;return n(),P(i,{id:"blog",class:"text-typography_primary"},{default:d(()=>[U,S,C,D]),_:1})}const at=x(N,[["render",I]]),V={class:"grid grid-cols-10 gap-4 text-typography_primary"},j=["href"],E={class:"wrapper"},M={class:"text-h3 leading-h3 font-semibold mb-2 group-hover:text-brand_primary"},A={class:"text-sm leading-sm mb-4 text-typography_primary/75 dark:text-typography_primary_dark/75"},F={key:0,class:"w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white"},H={__name:"list",props:{data:{type:Array,required:!0},message:{type:String,default:"There are no posts right now, but stay tuned for newer releases in the future."}},setup(t){const{$formatDate:a}=L();return(i,f)=>(n(),s(h,null,[e("ul",V,[(n(!0),s(h,null,v(t.data,r=>(n(),s("li",{key:r._path,class:"col-span-full md:col-span-5 relative rounded-md border-2 border-typography_primary hover:border-brand_primary group"},[e("a",{href:r._path+"/",class:"p-4 block relative"},[e("div",E,[e("header",null,[e("h2",M,_(r.headline),1),e("p",A,_(k(a)(r.date)),1),e("p",null,_(r.excerpt),1)])])],8,j)]))),128))]),t.data.length==0?(n(),s("p",F,_(t.message),1)):$("",!0)],64))}},nt=H,T={},z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},K=e("path",{fill:"currentColor",d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"},null,-1),R=[K];function Z(t,a){return n(),s("svg",z,R)}const G=x(T,[["render",Z]]);const J={class:"pagination-list text-typography_primary"},O={class:"pagination-extra"},Q={class:"pagination-extra"},W={__name:"pagination",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},nextPage:{type:Boolean,required:!0},baseUrl:{type:String,required:!0},pageUrl:{type:String,required:!0}},setup(t){const a=t,i=y=>`${a.pageUrl}${y}/`,f=[Math.max(1,a.currentPage-1),a.currentPage,Math.min(a.totalPages,a.currentPage+1)],r=B(()=>a.currentPage===2?a.baseUrl:`${a.pageUrl}${a.currentPage-1}/`);return(y,X)=>{const b=G,u=q;return n(),s("div",J,[l(o(u,{class:"pagination-item pagination-icon",to:r.value},{default:d(()=>[o(b,{class:"transform rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[m,t.currentPage>1]]),o(u,{class:g(["pagination-item",t.currentPage===1?"active":""]),to:t.baseUrl},{default:d(()=>[p("1")]),_:1},8,["class","to"]),l(e("span",O," ... ",512),[[m,t.currentPage>2]]),(n(),s(h,null,v(f,c=>l(o(u,{key:c,class:g(["pagination-item",t.currentPage===c?"active":""]),to:i(c)},{default:d(()=>[p(_(c),1)]),_:2},1032,["class","to"]),[[m,c!==1&&c!==t.totalPages]])),64)),l(e("span",Q," ... ",512),[[m,t.currentPage<t.totalPages-1]]),l(o(u,{class:g(["pagination-item",t.currentPage===t.totalPages?"active":""]),to:i(t.totalPages)},{default:d(()=>[p(_(t.totalPages),1)]),_:1},8,["class","to"]),[[m,t.totalPages>1]]),l(o(u,{class:"pagination-item pagination-icon",to:i(t.currentPage+1)},{default:d(()=>[o(b,{class:"transform -rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[m,t.currentPage<t.totalPages]])])}}},rt=x(W,[["__scopeId","data-v-1dac4ff8"]]);export{at as _,nt as a,rt as b};