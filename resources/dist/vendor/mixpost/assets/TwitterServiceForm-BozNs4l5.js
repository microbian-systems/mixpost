import{r as v,o as w,h as g,w as t,b as l,a as r,e as i,d as V}from"./app-KU_pikFZ.js";import{u as _}from"./useNotifications-Li6rxoHk.js";import{_ as x}from"./Panel-CwDzJkQI.js";import{_ as f}from"./Input-D26Si0az.js";import{T as y}from"./ProviderIcon-BoaHXo_6.js";import{_ as $}from"./PrimaryButton-BbeE6h-R.js";import{_ as m}from"./HorizontalGroup-Cdo3MHXW.js";import{_ as u}from"./Error-CtH2oalQ.js";import{_ as T}from"./ReadDocHelp-D_8FCUtV.js";import{_ as k}from"./Select-ffWoxWGV.js";const P={class:"flex items-center"},b={class:"mr-xs"},q={__name:"TwitterServiceForm",props:{form:{required:!0,type:Object}},setup(o){const d=o,{notify:p}=_(),s=v({}),c=()=>{s.value={},V.put(route("mixpost.services.update",{service:"twitter"}),d.form,{preserveScroll:!0,onSuccess(){p("success","Twitter credentials have been saved")},onError:n=>{s.value=n}})};return(n,e)=>(w(),g(x,null,{title:t(()=>[l("div",P,[l("span",b,[r(y,{class:"text-twitter"})]),e[3]||(e[3]=l("span",null,"Twitter",-1))])]),description:t(()=>[e[4]||(e[4]=l("a",{href:"https://developer.twitter.com/en/portal/projects-and-apps",class:"link",target:"_blank"},"Create an App on Twitter",-1)),e[5]||(e[5]=i('. You will need to edit the App Permissions and allow "Read and Write". ')),r(T,{href:`${n.$page.props.mixpost.docs_link}/services/social/x`,class:"mt-xs"},null,8,["href"])]),default:t(()=>[r(m,{class:"mt-lg"},{title:t(()=>e[6]||(e[6]=[i("API Key")])),footer:t(()=>[r(u,{message:s.value.client_id},null,8,["message"])]),default:t(()=>[r(f,{modelValue:o.form.client_id,"onUpdate:modelValue":e[0]||(e[0]=a=>o.form.client_id=a),error:s.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),r(m,{class:"mt-lg"},{title:t(()=>e[7]||(e[7]=[i("API Secret")])),footer:t(()=>[r(u,{message:s.value.client_secret},null,8,["message"])]),default:t(()=>[r(f,{modelValue:o.form.client_secret,"onUpdate:modelValue":e[1]||(e[1]=a=>o.form.client_secret=a),error:s.value.hasOwnProperty("client_secret"),type:"password",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),r(m,{class:"mt-lg"},{title:t(()=>e[8]||(e[8]=[i("Tier")])),footer:t(()=>[r(u,{message:s.value.environment},null,8,["message"])]),default:t(()=>[r(k,{modelValue:o.form.tier,"onUpdate:modelValue":e[2]||(e[2]=a=>o.form.tier=a),error:s.value.hasOwnProperty("tier"),class:"w-full"},{default:t(()=>e[9]||(e[9]=[l("option",{value:"legacy"},"Legacy",-1),l("option",{value:"free"},"Free",-1),l("option",{value:"basic"},"Basic",-1)])),_:1},8,["modelValue","error"])]),_:1}),r($,{onClick:c,class:"mt-lg"},{default:t(()=>e[10]||(e[10]=[i("Save")])),_:1})]),_:1}))}};export{q as default};
