import{o as a,l,w as d,j as i,z as m,b as e,c as n,a as u,D as p,t as _,n as f,f as r,T as v,H as h}from"./app.560f76c3.js";const x={class:"fixed bottom-0 mb-sm px-lg py-md px-sm flex items-center bg-indigo-800 shadow-mix text-white rounded-md mt-1 z-10"},b={class:"flex w-full items-center"},y={class:"flex items-center"},w={class:"text-white-base"},k={class:"btn-black mr-xs"},$=e("span",{class:"hidden sm:inline-block"},"items selected",-1),g=e("span",{class:"inline-block sm:hidden"},"selected",-1),z={__name:"SelectableBar",props:{count:{type:Number,required:!0}},setup(s){return(t,o)=>{const c=h("tooltip");return a(),l(v,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:d(()=>[i(e("div",x,[e("div",b,[e("div",y,[i((a(),n("button",{onClick:o[0]||(o[0]=D=>t.$emit("close")),class:"mr-sm hover:text-red-500 transition-colors ease-in-out duration-200"},[u(p)])),[[c,"Dismiss",void 0,{top:!0}]]),e("div",w,[e("span",k,_(s.count),1),$,g])]),e("div",{class:f([{"ml-sm":t.$slots},"flex items-center"])},[r(t.$slots,"default")],2)])],512),[[m,s.count]])]),_:3})}}},B=["type"],C={__name:"PureDangerButton",props:{type:{type:String,default:"button"}},setup(s){return(t,o)=>(a(),n("button",{type:s.type,class:"relative inline-flex items-center text-red-400 hover:text-red-500 transition-colors ease-in-out duration-200"},[r(t.$slots,"default")],8,B))}};export{z as _,C as a};
