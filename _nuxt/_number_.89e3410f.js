import{_ as b,a as f,b as x}from"./pagination.388f2882.js";import P from"./ContentQuery.1d614169.js";import{_ as y}from"./section.537d2f7b.js";import{k,x as N,c as B,b as e,w as t,o as u,j as C,f as L}from"./entry.7b4a78f2.js";import"./nuxt-link.33b24a2b.js";import"./query.e6995867.js";import"./preview.171d7a14.js";const c=6,T={__name:"[number]",setup(w){const{path:Q,params:g}=k(),a=n=>Math.ceil(n/c),o=()=>Number(g.number),l=N();let r;try{r=o(),(isNaN(r)||r<=0)&&l.replace("/blog/")}catch(n){console.error(n),l.replace("/blog/")}return(n,R)=>{const _=b,m=f,h=x,p=P,i=y;return u(),B("main",null,[e(p,{path:"/blog",only:["headline","excerpt","date","tags","_path","image"],sort:{date:-1},skip:c*(o()-1),limit:c},{default:t(({data:d})=>[e(_),e(i,{id:"main",class:"!pt-0"},{default:t(()=>[e(m,{data:d},null,8,["data"]),e(p,{path:"/blog",only:["headline"]},{default:t(({data:s})=>[a(s.length)>1?(u(),C(h,{key:0,class:"mt-8",currentPage:o(),totalPages:a(s.length),nextPage:o()<a(s.length),baseUrl:"/blog/",pageUrl:"/blog/page/"},null,8,["currentPage","totalPages","nextPage"])):L("",!0)]),"not-found":t(()=>[]),_:2},1024)]),_:2},1024)]),"not-found":t(()=>[e(_),e(i,{id:"main",class:"!pt-0"},{default:t(()=>[e(m,{data:[],message:"There are no posts in this page, maybe try searching on another one."})]),_:1})]),_:1},8,["skip"])])}}};export{T as default};