import{i as y,j as x,bG as S,u as o,o as r,c,k as V,r as $,x as z,J as T,f as U,bK as N,a as s,b as i,w as a,F as h,X as C,d as k,t as j,e as n}from"./app.1717811e.js";import{u as B}from"./useNotifications.36b60e6f.js";import{_ as F}from"./PageHeader.fbf56271.js";import{_ as M,a as R}from"./PrimaryButton.89dc6296.js";import{H as g}from"./HorizontalGroup.35f39fb3.js";const D=["value"],f={__name:"Radio",props:{checked:{type:[Number,String],default:!1},value:{default:null}},emits:["update:checked"],setup(d,{emit:m}){const e=d,u=y({get(){return e.checked},set(_){m("update:checked",_)}});return(_,p)=>x((r(),c("input",{type:"radio",value:d.value,"onUpdate:modelValue":p[0]||(p[0]=t=>V(u)?u.value=t:null),class:"rounded-full w-5 h-5 border-gray-200 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:border-gray-100 disabled:cursor-not-allowed"},null,8,D)),[[S,o(u)]])}},G=["value"],H={__name:"Select",props:["modelValue"],emits:["update:modelValue"],setup(d){const m=$(null);return z(()=>{m.value.hasAttribute("autofocus")&&T(()=>{m.value.focus()})}),(e,u)=>(r(),c("select",{value:d.modelValue,onChange:u[0]||(u[0]=_=>e.$emit("update:modelValue",_.target.value)),ref_key:"select",ref:m,class:"w-full border-stone-600 rounded-md focus:border-indigo-200 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 outline-none transition-colors ease-in-out duration-200"},[U(e.$slots,"default")],40,G))}},A={class:"row-py mb-2xl w-full max-w-3xl mx-auto"},E={class:"row-px"},J=n("Time settings"),K=n(" The app will use these settings to display your calendar & analytics. "),L=n("Timezone"),X=["label"],q=["value"],I=n("Time format"),O={class:"flex items-center md:justify-between space-x-sm"},P=n(" 12 hour"),Q=n(" 24 hour"),W=n("First day of week"),Y={class:"flex items-center md:justify-between space-x-sm"},Z=n(" Sunday"),ee=n(" Monday"),te=n("Save settings"),ie={__name:"Settings",props:["settings","timezone_list"],setup(d){const e=N(d.settings),{notify:u}=B(),_=()=>{e.put(route("mixpost.settings.update"),{onSuccess(){u("success","Settings have been saved")}})};return(p,t)=>(r(),c(h,null,[s(o(C),{title:"Settings"}),i("div",A,[s(F,{title:"Settings"}),i("div",E,[s(M,null,{title:a(()=>[J]),description:a(()=>[K]),default:a(()=>[s(g,{class:"mt-lg"},{title:a(()=>[L]),default:a(()=>[i("div",null,[s(H,{modelValue:o(e).timezone,"onUpdate:modelValue":t[0]||(t[0]=l=>o(e).timezone=l)},{default:a(()=>[(r(!0),c(h,null,k(d.timezone_list,(l,v)=>(r(),c("optgroup",{label:v},[(r(!0),c(h,null,k(l,(b,w)=>(r(),c("option",{value:w},j(b),9,q))),256))],8,X))),256))]),_:1},8,["modelValue"])])]),_:1}),s(g,{class:"mt-lg"},{title:a(()=>[I]),default:a(()=>[i("div",O,[i("label",null,[s(f,{checked:o(e).time_format,"onUpdate:checked":t[1]||(t[1]=l=>o(e).time_format=l),value:12},null,8,["checked"]),P]),i("label",null,[s(f,{checked:o(e).time_format,"onUpdate:checked":t[2]||(t[2]=l=>o(e).time_format=l),value:24},null,8,["checked"]),Q])])]),_:1}),s(g,{class:"mt-lg"},{title:a(()=>[W]),default:a(()=>[i("div",Y,[i("label",null,[s(f,{checked:o(e).week_starts_on,"onUpdate:checked":t[3]||(t[3]=l=>o(e).week_starts_on=l),value:0},null,8,["checked"]),Z]),i("label",null,[s(f,{checked:o(e).week_starts_on,"onUpdate:checked":t[4]||(t[4]=l=>o(e).week_starts_on=l),value:1},null,8,["checked"]),ee])])]),_:1})]),_:1}),s(R,{onClick:_,class:"mt-lg"},{default:a(()=>[te]),_:1})])])],64))}};export{ie as default};
