import{j as y,v as S,bM as V,o as r,c as d,c6 as $,a as o,u as l,b as a,w as n,F as g,Z as T,e as i,f as v,t as U}from"./app-KU_pikFZ.js";import{u as z}from"./useNotifications-Li6rxoHk.js";import{_ as N}from"./PageHeader-KKwuuNWr.js";import{_ as h}from"./Panel-CwDzJkQI.js";import{_ as B}from"./PrimaryButton-BbeE6h-R.js";import{_ as C}from"./Select-ffWoxWGV.js";import{_ as k}from"./HorizontalGroup-Cdo3MHXW.js";const F=["value"],p={__name:"Radio",props:{checked:{type:[Number,String],default:!1},value:{default:null}},emits:["update:checked"],setup(u,{emit:_}){const t=_,f=u,m=y({get(){return f.checked},set(c){t("update:checked",c)}});return(c,e)=>S((r(),d("input",{type:"radio",value:u.value,"onUpdate:modelValue":e[0]||(e[0]=s=>m.value=s),class:"rounded-full w-5 h-5 border-gray-200 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:border-gray-100 disabled:cursor-not-allowed"},null,8,F)),[[V,m.value]])}},M={class:"row-py mb-2xl w-full mx-auto"},D={class:"row-px"},R=["label"],j=["value"],E={class:"flex items-center space-x-sm"},L={class:"flex items-center space-x-sm"},K={__name:"Settings",props:["settings","timezone_list"],setup(u){const t=$(u.settings),{notify:f}=z(),m=()=>{t.put(route("mixpost.settings.update"),{onSuccess(){f("success","Settings have been saved")}})};return(c,e)=>(r(),d(g,null,[o(l(T),{title:"Settings"}),a("div",M,[o(N,{title:"Settings"}),a("div",D,[o(h,null,{title:n(()=>e[5]||(e[5]=[i("Time settings")])),description:n(()=>e[6]||(e[6]=[i(" The app will use these settings to display your calendar & analytics. ")])),default:n(()=>[o(k,null,{title:n(()=>e[7]||(e[7]=[i("Timezone")])),default:n(()=>[a("div",null,[o(C,{modelValue:l(t).timezone,"onUpdate:modelValue":e[0]||(e[0]=s=>l(t).timezone=s)},{default:n(()=>[(r(!0),d(g,null,v(u.timezone_list,(s,b)=>(r(),d("optgroup",{label:b},[(r(!0),d(g,null,v(s,(w,x)=>(r(),d("option",{value:x},U(w),9,j))),256))],8,R))),256))]),_:1},8,["modelValue"])])]),_:1}),o(k,{class:"mt-lg"},{title:n(()=>e[8]||(e[8]=[i("Time format")])),default:n(()=>[a("div",E,[a("label",null,[o(p,{checked:l(t).time_format,"onUpdate:checked":e[1]||(e[1]=s=>l(t).time_format=s),value:12},null,8,["checked"]),e[9]||(e[9]=i(" 12 hour"))]),a("label",null,[o(p,{checked:l(t).time_format,"onUpdate:checked":e[2]||(e[2]=s=>l(t).time_format=s),value:24},null,8,["checked"]),e[10]||(e[10]=i(" 24 hour"))])])]),_:1}),o(k,{class:"mt-lg"},{title:n(()=>e[11]||(e[11]=[i("First day of week")])),default:n(()=>[a("div",L,[a("label",null,[o(p,{checked:l(t).week_starts_on,"onUpdate:checked":e[3]||(e[3]=s=>l(t).week_starts_on=s),value:0},null,8,["checked"]),e[12]||(e[12]=i(" Sunday"))]),a("label",null,[o(p,{checked:l(t).week_starts_on,"onUpdate:checked":e[4]||(e[4]=s=>l(t).week_starts_on=s),value:1},null,8,["checked"]),e[13]||(e[13]=i(" Monday"))])])]),_:1}),o(B,{onClick:m,class:"mt-lg"},{default:n(()=>e[14]||(e[14]=[i("Save settings")])),_:1})]),_:1})])])],64))}};export{K as default};
