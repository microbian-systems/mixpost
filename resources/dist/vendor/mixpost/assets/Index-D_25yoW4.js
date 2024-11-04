import{r as V,j as B,_ as Q,o,c as u,b as v,x as R,n as S,g as y,F as x,q as M,h as b,w as t,a as l,t as w,e as c,f as O,v as W,l as X,k as Y,m as Z,H as N,u as D,i as ee,D as te,c0 as I,b5 as se,A as T,d as A,Z as le,y as F}from"./app-KU_pikFZ.js";import{u as oe}from"./useNotifications-Li6rxoHk.js";import{l as j}from"./helpers-BNyWTgxs.js";import{_ as ae}from"./PageHeader-KKwuuNWr.js";import{_ as L,a as ne,C as ie,b as re}from"./PostsFilter-Bop5IFB4.js";import{T as ue,_ as P}from"./Tab-BYet4s42.js";import{_ as de}from"./Panel-CwDzJkQI.js";import{_ as U}from"./Checkbox-QvA-pjmQ.js";import{_ as ce,a as me}from"./PureDangerButton-Ce_jgoSb.js";import{b as fe,d as pe,_ as ve,T as ge,c as _e}from"./Trash-1vISUTtH.js";import{u as ye}from"./SearchInput-gvOvMZkc.js";import{_ as be,a as $e}from"./NoResult-CLi0ODFC.js";import{_ as q,j as ke,h as xe,g as he,a as we}from"./VerticallyScrollableContent-CioXw2k4.js";import{_ as E}from"./Account-BSmNdcqQ.js";import"./EllipsisVertical-zpGBU6gA.js";import"./PrimaryButton-BbeE6h-R.js";import"./ProviderIcon-BoaHXo_6.js";import"./Input-D26Si0az.js";import"./ExclamationCircle-CBKkPbrE.js";import"./Alert-CcG9R56f.js";const Ce=()=>{const s=V([]),a=V([]),d=B({get(){return h(s.value)},set(){const n=s.value;if(h(n)){$(n);return}f(n)}}),m=n=>{s.value=n},f=n=>{for(const i of n)k(i)||a.value.push(i)},r=n=>{let i=a.value.indexOf(n);i!==-1&&a.value.splice(i,1)},$=n=>{for(const i of n)r(i)},C=()=>{a.value=[]},k=n=>a.value.includes(n),h=n=>n.length?n.every(i=>k(i)):!1;return{selectedRecords:a,toggleSelectRecordsOnPage:d,putPageRecords:m,deselectRecord:r,deselectAllRecords:C}},De={},Re={class:"flex flex-col overflow-x-hidden overflow-y-hidden"},Se={class:"-m-1.5 overflow-x-auto"},Pe={class:"p-1.5 min-w-full inline-block align-middle overflow-hidden"},Oe={class:"min-w-full divide-y divide-gray-200 border-collapse"},Ve={class:"divide-y divide-gray-100"};function Be(s,a){return o(),u("div",Re,[v("div",Se,[v("div",Pe,[v("table",Oe,[v("thead",null,[R(s.$slots,"head")]),v("tbody",Ve,[R(s.$slots,"body")])])])])])}const je=Q(De,[["render",Be]]),G={__name:"TableRow",props:{hoverable:{type:Boolean,default:!1}},setup(s){return(a,d)=>(o(),u("tr",{class:S({"bg-white hover:bg-gray-50 transition-colors ease-in-out duration-200":s.hoverable})},[R(a.$slots,"default")],2))}},Ne=["scope"],Ie=["role"],H="px-lg py-sm",_={__name:"TableCell",props:{component:{type:String,default:"td"},scope:{type:String},class:{type:String},align:{type:String,default:"left"},clickable:{type:Boolean,default:!1}},emits:["click"],setup(s){const a=s,d=B(()=>({left:"text-left",right:"text-right"})[a.align]);return(m,f)=>(o(),u(x,null,[s.component==="th"?(o(),u("th",{key:0,scope:s.scope,class:S([[a.class,d.value,H],"font-medium"])},[R(m.$slots,"default")],10,Ne)):y("",!0),s.component==="td"?(o(),u("td",{key:1,class:S([a.class,d.value,H]),onClick:f[0]||(f[0]=()=>{s.clickable&&m.$emit("click")}),role:s.clickable?"button":"cell"},[R(m.$slots,"default")],10,Ie)):y("",!0)],64))}},Te={class:"w-44"},Ae={key:0,class:"text-sm mt-xs text-gray-500"},Fe={key:1,class:"text-sm mt-xs text-gray-500"},Le={class:"w-96 text-left break-words"},Ue={key:0,class:"w-48 flex relative"},qe={key:0,class:"absolute top-0 -right-5 z-10"},Ee={class:"flex flex-wrap gap-xs"},He={class:"flex gap-xs"},ze={class:"mr-xs"},Me={class:"text-left"},We={class:"mr-xs flex items-center"},Ze={__name:"PostItem",props:{item:{type:Object,required:!0},filter:{type:Object,default:{accounts:[]}}},setup(s){const a=s,{getOriginalVersion:d,getAccountVersion:m}=ye(),f=B(()=>{if(!a.item.versions.length)return{excerpt:"",media:null,media_count:0};let k=a.item.accounts;a.filter.accounts.length&&(k=k.filter(i=>a.filter.accounts.includes(i.id)));const h=k.map(i=>{const g=m(a.item.versions,i.id);return g?g.content[0]:d(a.item.versions).content[0]}),n=h.length?h[0]:a.item.versions[0].content[0];return{excerpt:n.excerpt,media:n.media.length?n.media[0]:null,media_count:n.media.length}}),r=V(!1),$=()=>{r.value=!0},C=()=>{r.value=!1};return(k,h)=>{const n=M("tooltip");return o(),b(G,{hoverable:!0},{default:t(()=>[l(_,{class:"w-10"},{default:t(()=>[R(k.$slots,"checkbox")]),_:3}),l(_,{clickable:!0,onClick:$},{default:t(()=>[v("div",Te,[l(q,{value:s.item.status},null,8,["value"]),s.item.status==="SCHEDULED"?(o(),u("div",Ae,w(s.item.scheduled_at.human),1)):y("",!0),s.item.status==="PUBLISHED"?(o(),u("div",Fe,w(s.item.published_at.human),1)):y("",!0)])]),_:1}),l(_,{clickable:!0,onClick:$,class:"!pl-0"},{default:t(()=>[v("div",Le,w(f.value.excerpt),1)]),_:1}),l(_,{clickable:!0,onClick:$},{default:t(()=>[f.value.media?(o(),u("div",Ue,[f.value.media?(o(),b(be,{key:0,media:f.value.media,"img-height":"sm",imgWidthFull:!1},{default:t(()=>[f.value.media_count>1?(o(),u("div",qe,[l(ke,null,{default:t(()=>[c("+"+w(f.value.media_count-1),1)]),_:1})])):y("",!0)]),_:1},8,["media"])):y("",!0)])):y("",!0)]),_:1}),l(_,{clickable:!0,onClick:$},{default:t(()=>[v("div",Ee,[(o(!0),u(x,null,O(s.item.tags,i=>(o(),b(xe,{key:i.id,item:i,removable:!1,editable:!1},null,8,["item"]))),128))])]),_:1}),l(_,null,{default:t(()=>[v("div",He,[(o(!0),u(x,null,O(s.item.accounts.slice(0,3),(i,g)=>(o(),u("div",{key:i.id,class:S({"-ml-6":g>0})},[W(l(E,{provider:i.provider,"img-url":i.image,active:!0},null,8,["provider","img-url"]),[[n,i.name]])],2))),128)),s.item.accounts.length>3?(o(),b(X,{key:0,"width-classes":"w-64",placement:"bottom-end"},{trigger:t(()=>[l(fe,{class:"mt-4 font-semibold"},{default:t(()=>[c("+"+w(s.item.accounts.slice(3).length),1)]),_:1})]),content:t(()=>[l(he,null,{default:t(()=>[(o(!0),u(x,null,O(s.item.accounts.slice(3),i=>(o(),b(Y,{as:"div"},{default:t(()=>[v("span",ze,[l(E,{provider:i.provider,"img-url":i.image,active:!0},null,8,["provider","img-url"])]),v("span",Me,w(i.name),1)]),_:2},1024))),256))]),_:1})]),_:1})):y("",!0)])]),_:1}),l(_,null,{default:t(()=>[l(L,{"item-id":s.item.id},null,8,["item-id"])]),_:1}),l(pe,{show:r.value,scrollableBody:!0,onClose:C},{body:t(()=>[l(q,{value:s.item.status,class:"mb-lg"},null,8,["value"]),r.value?(o(),b(we,{key:0,accounts:s.item.accounts,versions:s.item.versions},null,8,["accounts","versions"])):y("",!0)]),footer:t(()=>[r.value?(o(),u(x,{key:0},[v("div",We,[l(L,{"item-id":s.item.id},null,8,["item-id"])]),l(Z,{onClick:C},{default:t(()=>h[0]||(h[0]=[c("Close")])),_:1})],64)):y("",!0)]),_:1},8,["show"])]),_:3})}}},Ge={class:"bg-white border border-gray-100 rounded-lg p-sm w-fit"},Je={class:"flex flex-wrap items-center space-x-1"},z="px-sm py-xs rounded-md leading-4",Ke={__name:"Pagination",props:{meta:{type:Object,default:{current_page:1,from:1,last_page:1,per_page:2,to:1,total:0,links:[]}},links:{type:Object,default:{first:null,last:null,next:null,prev:null}}},setup(s){const a=s,d=B(()=>a.meta.links.map(m=>{const f=m.label.replace("&laquo; ","").replace(" &raquo;","");return{active:m.active,url:m.url,label:f,component:isNaN(parseInt(m.label))?{Next:ne,Previous:ie}[f]:null}}));return(m,f)=>(o(),u("div",Ge,[v("div",Je,[(o(!0),u(x,null,O(d.value,(r,$)=>(o(),u(x,null,[r.url===null?(o(),u("div",{key:$,class:S([[z,{"!px-0":r.label==="...","!px-xs":r.component}],"text-gray-400"])},[r.component?(o(),b(N(r.component),{key:0})):(o(),u(x,{key:1},[c(w(r.label),1)],64))],2)):(o(),b(D(ee),{key:`link-${$}`,disabled:"",class:S(["transition-colors ease-in-out duration-200",[z,{"bg-indigo-500 text-white":r.active,"hover:text-indigo-500 focus:text-indigo-500":!r.active,"!px-xs":r.component}]]),href:r.url},{default:t(()=>[r.component?(o(),b(N(r.component),{key:0})):(o(),u(x,{key:1},[c(w(r.label),1)],64))]),_:2},1032,["class","href"]))],64))),256))])]))}},Qe={class:"row-py mb-2xl"},Xe={class:"w-full row-px"},Ye={class:"w-full row-px mt-lg"},et={key:0,class:"mt-lg"},kt={__name:"Index",props:{filter:{type:Object,default:{}},posts:{type:Object},has_failed_posts:{type:Boolean,default:!1}},setup(s){const a=s,d=V({keyword:a.filter.keyword,status:a.filter.status,tags:a.filter.tags,accounts:a.filter.accounts}),{selectedRecords:m,putPageRecords:f,toggleSelectRecordsOnPage:r,deselectRecord:$,deselectAllRecords:C}=Ce(),k=()=>a.posts.data.map(g=>g.id);te(()=>{f(k()),I.on("postDelete",g=>{$(g)})}),se(()=>{I.off("postDelete")}),T(()=>j.cloneDeep(d.value),j.throttle(()=>{A.get(route("mixpost.posts.index"),j.pickBy(d.value),{preserveState:!0,only:["posts","filter"]})},300)),T(()=>a.posts.data,()=>{f(k())});const{notify:h}=oe(),n=V(!1),i=()=>{A.delete(route("mixpost.posts.multipleDelete"),{data:{posts:m.value,status:d.value.status},onSuccess(){C(),h("success","Selected posts deleted")},onFinish(){n.value=!1}})};return(g,e)=>{const J=M("tooltip");return o(),u(x,null,[l(D(le),{title:"Posts"}),v("div",Qe,[l(ae,{title:"Posts"},{default:t(()=>[l(re,{modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=p=>d.value=p),class:"ml-2"},null,8,["modelValue"])]),_:1}),v("div",Xe,[l(ue,null,{default:t(()=>[l(P,{onClick:e[1]||(e[1]=p=>d.value.status=null),active:!g.$page.props.filter.status},{default:t(()=>e[11]||(e[11]=[c("All")])),_:1},8,["active"]),l(P,{onClick:e[2]||(e[2]=p=>d.value.status="draft"),active:g.$page.props.filter.status==="draft"},{default:t(()=>e[12]||(e[12]=[c("Drafts")])),_:1},8,["active"]),l(P,{onClick:e[3]||(e[3]=p=>d.value.status="scheduled"),active:g.$page.props.filter.status==="scheduled"},{default:t(()=>e[13]||(e[13]=[c("Scheduled")])),_:1},8,["active"]),l(P,{onClick:e[4]||(e[4]=p=>d.value.status="published"),active:g.$page.props.filter.status==="published"},{default:t(()=>e[14]||(e[14]=[c("Published")])),_:1},8,["active"]),s.has_failed_posts?(o(),b(P,{key:0,onClick:e[5]||(e[5]=p=>d.value.status="failed"),active:g.$page.props.filter.status==="failed",class:"text-red-500"},{default:t(()=>e[15]||(e[15]=[c("Failed")])),_:1},8,["active"])):y("",!0)]),_:1})]),v("div",Ye,[l(ce,{count:D(m).length,onClose:D(C)},{default:t(()=>[W((o(),b(me,{onClick:e[6]||(e[6]=p=>n.value=!0)},{default:t(()=>[l(ge)]),_:1})),[[J,"Delete"]])]),_:1},8,["count","onClose"]),l(de,{"with-padding":!1},{default:t(()=>[l(je,null,{head:t(()=>[l(G,null,{default:t(()=>[l(_,{component:"th",scope:"col",class:"w-10"},{default:t(()=>[l(U,{checked:D(r),"onUpdate:checked":e[7]||(e[7]=p=>F(r)?r.value=p:null),disabled:!s.posts.meta.total},null,8,["checked","disabled"])]),_:1}),l(_,{component:"th",scope:"col",class:"w-44"},{default:t(()=>e[16]||(e[16]=[c("Status")])),_:1}),l(_,{component:"th",scope:"col",class:"!pl-0 text-left"},{default:t(()=>e[17]||(e[17]=[c("Content")])),_:1}),l(_,{component:"th",scope:"col",class:"w-48"},{default:t(()=>e[18]||(e[18]=[c("Media")])),_:1}),l(_,{component:"th",scope:"col"},{default:t(()=>e[19]||(e[19]=[c("Labels")])),_:1}),l(_,{component:"th",scope:"col"},{default:t(()=>e[20]||(e[20]=[c("Accounts")])),_:1}),l(_,{component:"th",scope:"col"})]),_:1})]),body:t(()=>[(o(!0),u(x,null,O(s.posts.data,p=>(o(),b(Ze,{key:p.id,item:p,filter:s.posts.filter,onOnDelete:()=>{D($)(p.id)}},{checkbox:t(()=>[l(U,{checked:D(m),"onUpdate:checked":e[8]||(e[8]=K=>F(m)?m.value=K:null),value:p.id,number:""},null,8,["checked","value"])]),_:2},1032,["item","filter","onOnDelete"]))),128))]),_:1}),s.posts.meta.total?y("",!0):(o(),b($e,{key:0,class:"py-md px-md"},{default:t(()=>e[21]||(e[21]=[c("No posts found.")])),_:1}))]),_:1}),s.posts.meta.links.length>3?(o(),u("div",et,[l(Ke,{meta:s.posts.meta,links:s.posts.links},null,8,["meta","links"])])):y("",!0)])]),l(ve,{show:n.value,variant:"danger",onClose:e[10]||(e[10]=p=>n.value=!1)},{header:t(()=>e[22]||(e[22]=[c(" Delete posts ")])),body:t(()=>e[23]||(e[23]=[c(" Are you sure you want to delete selected posts? ")])),footer:t(()=>[l(Z,{onClick:e[9]||(e[9]=p=>n.value=!1),class:"mr-xs"},{default:t(()=>e[24]||(e[24]=[c("Cancel")])),_:1}),l(_e,{onClick:i},{default:t(()=>e[25]||(e[25]=[c("Delete")])),_:1})]),_:1},8,["show"])],64)}}};export{kt as default};
