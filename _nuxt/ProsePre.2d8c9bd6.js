import l from"./ProseCode.dc2e7e0d.js";import{C as n,o as s,j as o,w as i,a as r,i as u,a4 as g,z as c}from"./entry.cced25e3.js";const h=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null},style:{type:[String,Object],default:null}},setup(e){return(t,d)=>{const a=l;return s(),o(a,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:i(()=>[r("pre",{class:u(t.$props.class),style:g(e.style)},[c(t.$slots,"default")],6)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{h as default};