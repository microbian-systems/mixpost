import{r as x,i as g,c as C,a as s,u as o,b as _,w as t,F as b,o as d,X as M,d as N,l as f,e as i,t as A,B as O,p as k,P as j,j as E,g as F,O as S,H as z}from"./app.560f76c3.js";import{u as H}from"./SearchInput.9d783ea7.js";import{u as X,_ as q,a as G,b as J}from"./MediaGifs.adff9284.js";import{_ as Q}from"./PageHeader.e07f05ba.js";import{T as R,_ as U}from"./Tab.90201fd4.js";import{_ as W,a as Y}from"./PureDangerButton.d13fe8cf.js";import{a as Z,T as K,c as ee}from"./Alert.05947b64.js";import{_ as se}from"./PrimaryButton.958f08c1.js";import"./Input.59db1c6b.js";import"./NoResult.7510e027.js";import"./helpers.faaf7676.js";import"./ExclamationCircle.71d75a2e.js";import"./useNotifications.f087f71b.js";const te={class:"max-w-5xl w-full mx-auto row-py mb-2xl"},oe={class:"w-full row-px"},ae={class:"w-full row-px mt-lg"},ie=i(" Create Post "),le=i(" Delete media "),ne=i(" Are you sure you want to delete selected media items? "),re=i("Cancel"),ce=i("Delete"),ye={__name:"Media",setup(de){const{activeTab:l,tabs:D,isDownloading:p,isDeleting:v,downloadExternal:y,deletePermanently:h}=X(),P={uploads:q,stock:G,gifs:J},n=x(),L=g(()=>P[l.value]),u=g(()=>n.value?n.value.selected:[]),w=()=>{n.value.deselectAll()},T=()=>{const a=l.value!=="uploads";a&&y(u.value,e=>{$(e.data)}),a||$(u.value)},{versionContentObject:B}=H(),$=a=>{S.post(route("mixpost.posts.store"),{versions:[{account_id:0,is_original:!0,content:[B("",a.map(e=>e.id))]}]})},r=x(!1),I=()=>{const a=u.value.map(e=>e.id);h(a,()=>{w(),n.value.removeItems(a),r.value=!1})};return(a,e)=>{const V=z("tooltip");return d(),C(b,null,[s(o(M),{title:"Media Library"}),_("div",te,[s(Q,{title:"Media Library"}),_("div",oe,[s(R,null,{default:t(()=>[(d(!0),C(b,null,N(o(D),(c,m)=>(d(),f(U,{key:m,onClick:ue=>l.value=m,active:o(l)===m},{default:t(()=>[i(A(c),1)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),_("div",ae,[s(se,null,{default:t(()=>[(d(),f(O(o(L)),{ref_key:"sourceProperties",ref:n,columns:4},null,512)),s(W,{count:o(u).length,onClose:e[1]||(e[1]=c=>w())},{default:t(()=>[s(k,{onClick:T,isLoading:o(p),disabled:o(p),class:"mr-sm",size:"xs"},{default:t(()=>[s(j,{class:"mr-xs"}),ie]),_:1},8,["isLoading","disabled"]),o(l)==="uploads"?E((d(),f(Y,{key:0,onClick:e[0]||(e[0]=c=>r.value=!0)},{default:t(()=>[s(K)]),_:1})),[[V,"Delete"]]):F("",!0)]),_:1},8,["count"])]),_:1})])]),s(Z,{show:r.value,variant:"danger",onClose:e[3]||(e[3]=c=>r.value=!1)},{header:t(()=>[le]),body:t(()=>[ne]),footer:t(()=>[s(k,{onClick:e[2]||(e[2]=c=>r.value=!1),class:"mr-xs"},{default:t(()=>[re]),_:1}),s(ee,{isLoading:o(v),disabled:o(v),onClick:I},{default:t(()=>[ce]),_:1},8,["isLoading","disabled"])]),_:1},8,["show"])],64)}}};export{ye as default};
