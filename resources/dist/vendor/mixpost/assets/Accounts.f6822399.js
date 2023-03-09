import{o,l as b,w as t,b as e,a as s,u as w,m as $,_ as I,c as l,r as k,g,n as B,e as i,O as C,i as N,F as A,d as H,X as L,P,p as F,t as M}from"./app.560f76c3.js";import{u as V}from"./useNotifications.f087f71b.js";import{_ as z}from"./PageHeader.e07f05ba.js";import{a as D,_ as E}from"./PrimaryButton.958f08c1.js";import{_ as O,a as R,b as G,T as U,c as Y}from"./Alert.05947b64.js";import{_ as q}from"./Account.66d2386b.js";import{T as X,F as S}from"./Facebook.2a891e60.js";import{_ as J}from"./Input.59db1c6b.js";import{H as K}from"./HorizontalGroup.4856f754.js";import{M as Q}from"./ProviderIcon.bdf04131.js";import{_ as T,a as W}from"./DropdownItem.9a6cc9bd.js";import{E as Z}from"./EllipsisVertical.ba949cdc.js";import"./ExclamationCircle.71d75a2e.js";const ee={class:"flex mr-4"},se=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Twitter"),e("span",null,"Connect a new Twitter profile")],-1),te={__name:"AddTwitterAccount",setup(m){return(a,n)=>(o(),b(w($),{href:a.route("mixpost.accounts.add",{provider:"twitter"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:t(()=>[e("span",ee,[s(X,{class:"text-twitter"})]),se]),_:1},8,["href"]))}},oe={class:"flex mr-4"},ae=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Facebook Page"),e("span",null,"Connect a new Facebook page")],-1),ne={__name:"AddFacebookPage",setup(m){return(a,n)=>(o(),b(w($),{href:a.route("mixpost.accounts.add",{provider:"facebook_page"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:t(()=>[e("span",oe,[s(S,{class:"text-facebook"})]),ae]),_:1},8,["href"]))}},ce={class:"flex mr-4"},re=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Facebook Group"),e("span",null,"Connect a new Facebook group")],-1),le={__name:"AddFacebookGroup",setup(m){return(a,n)=>(o(),b(w($),{href:a.route("mixpost.accounts.add",{provider:"facebook_group"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:t(()=>[e("span",ce,[s(S,{class:"text-facebook"})]),re]),_:1},8,["href"]))}},ie={},de={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},ue=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"},null,-1),_e=[ue];function pe(m,a){return o(),l("svg",de,_e)}const fe=I(ie,[["render",pe]]),me={class:"flex mr-md"},he=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Mastodon"),e("span",null,"Connect a new Mastodon profile")],-1),ve={key:0,class:"px-lg py-md"},ge=i("Enter your Mastodon server"),be=e("span",{class:"mr-xs"},"Next",-1),xe={__name:"AddMastodonAccount",setup(m){const{notify:a}=V(),n=k(!1),d=k(""),u=k(!1),h=()=>new Promise((p,f)=>{axios.post(route("mixpost.services.createMastodonApp"),{server:d.value}).then(()=>{p()}).catch(function(v){f(v)})}),_=()=>{n.value=!0,C.post(route("mixpost.accounts.add",{provider:"mastodon"}),{server:d.value},{onSuccess(){n.value=!1}})},y=async()=>{n.value=!0,await h().then(()=>{_()}).catch(p=>{if(p.response.status!==422){a("error",p.response.data.message);return}a("error",p.response.data.errors)}).finally(()=>{n.value=!1})};return(p,f)=>(o(),l("div",{class:B({"bg-mastodon bg-opacity-20":u.value})},[e("div",{role:"button",onClick:f[0]||(f[0]=v=>u.value=!u.value),type:"button",class:"w-full flex items-center px-lg py-md hover:bg-mastodon hover:bg-opacity-20 ease-in-out duration-200"},[e("span",me,[s(Q,{class:"text-mastodon"})]),he]),u.value?(o(),l("div",ve,[s(K,null,{title:t(()=>[ge]),default:t(()=>[s(J,{type:"text",modelValue:d.value,"onUpdate:modelValue":f[1]||(f[1]=v=>d.value=v),placeholder:"example.server"},null,8,["modelValue"])]),_:1}),s(D,{onClick:y,disabled:!d.value||n.value,isLoading:n.value,class:"mt-xs md:mt-0"},{default:t(()=>[be,e("span",null,[s(fe,{class:"!w-5 !h-5"})])]),_:1},8,["disabled","isLoading"])])):g("",!0)],2))}},we={},ke={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},$e=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1),ye=[$e];function Ce(m,a){return o(),l("svg",ke,ye)}const Ae=I(we,[["render",Ce]]),Fe={class:"w-full max-w-5xl mx-auto row-py"},Me=i(" Connect a social account you'd like to manage. "),Te={class:"mt-lg row-px w-full"},Ie={key:0,class:"mb-md"},Ve={key:0},De={key:1},Se=e("p",{class:"mt-xs italic"},"Click on the button below to configure the third-party services.",-1),je=i("Configure services"),Be={class:"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"},Ne={class:"block p-lg"},He={class:"flex flex-col justify-center items-center"},Le=e("span",{class:"mt-xs text-lg"},"Add account",-1),Pe={class:"absolute top-0 right-0 mt-sm mr-sm"},ze=i(" Refresh "),Ee=i(" Delete "),Oe={class:"flex flex-col justify-center"},Re={class:"mt-sm font-semibold text-center"},Ge={class:"mt-1 text-center text-stone-800"},Ue=i(" Delete account "),Ye=i(" Are you sure you would like to delete this account? "),qe=i("Cancel "),Xe=i("Delete "),Je={class:"flex flex-col"},is={__name:"Accounts",props:{has_service:{required:!0,type:Object}},setup(m){const a=m,n="Social Accounts",{notify:d}=V(),u=k(!1),h=k(null),_=k(!1),y=N(()=>Object.keys(a.has_service).some(c=>a.has_service[c]!==!0)),p=c=>{C.put(route("mixpost.accounts.update",{account:c}),{},{onSuccess(x){x.props.flash.error||d("success","The account has been refreshed")}})},f=()=>{C.delete(route("mixpost.accounts.delete",{account:h.value}),{onStart(){_.value=!0},onSuccess(){h.value=null,d("success","Account deleted")},onFinish(){_.value=!1}})},v=()=>{_.value||(h.value=null)};return(c,x)=>(o(),l(A,null,[s(w(L),{title:n}),e("div",Fe,[s(z,{title:n},{description:t(()=>[Me]),_:1}),e("div",Te,[w(y)?(o(),l("div",Ie,[s(O,{variant:"warning",closeable:!1,class:"mb-md"},{default:t(()=>[c.$page.props.has_service.twitter?g("",!0):(o(),l("p",Ve,"You have not configured Twitter service.")),c.$page.props.has_service.facebook?g("",!0):(o(),l("p",De,"You have not configured Facebook service.")),Se]),_:1}),s(w($),{href:c.route("mixpost.services.index"),class:"inline-block"},{default:t(()=>[s(D,null,{default:t(()=>[je]),_:1})]),_:1},8,["href"])])):g("",!0),e("div",Be,[e("button",{onClick:x[0]||(x[0]=r=>u.value=!0),class:"border border-indigo-800 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors ease-in-out duration-200"},[e("span",Ne,[e("span",He,[s(P,{class:"w-7 h-7"}),Le])])]),(o(!0),l(A,null,H(c.$page.props.accounts,r=>(o(),b(E,{key:r.id,class:"relative"},{default:t(()=>[e("div",Pe,[s(W,{"width-classes":"w-32"},{trigger:t(()=>[s(F,{size:"xs"},{default:t(()=>[s(Z)]),_:1})]),content:t(()=>[s(T,{onClick:j=>p(r.id),as:"button"},{default:t(()=>[s(Ae,{class:"!w-5 !h-5 mr-1"}),ze]),_:2},1032,["onClick"]),s(T,{onClick:j=>h.value=r.id,as:"button"},{default:t(()=>[s(U,{class:"!w-5 !h-5 mr-1 text-red-500"}),Ee]),_:2},1032,["onClick"])]),_:2},1024)]),e("div",Oe,[s(q,{size:"lg","img-url":r.image,provider:r.provider,active:!0},null,8,["img-url","provider"]),e("div",Re,M(r.name),1),e("div",Ge,"Added: "+M(r.created_at),1)])]),_:2},1024))),128))])])]),s(R,{show:h.value!==null,onClose:v,variant:"danger"},{header:t(()=>[Ue]),body:t(()=>[Ye]),footer:t(()=>[s(F,{onClick:v,disabled:_.value,class:"mr-xs"},{default:t(()=>[qe]),_:1},8,["disabled"]),s(Y,{onClick:f,"is-loading":_.value,disabled:_.value},{default:t(()=>[Xe]),_:1},8,["is-loading","disabled"])]),_:1},8,["show"]),s(G,{show:u.value,closeable:!0,onClose:x[1]||(x[1]=r=>u.value=!1)},{default:t(()=>[e("div",Je,[c.$page.props.has_service.twitter?(o(),b(te,{key:0})):g("",!0),c.$page.props.has_service.facebook?(o(),b(ne,{key:1})):g("",!0),c.$page.props.has_service.facebook?(o(),b(le,{key:2})):g("",!0),s(xe)])]),_:1},8,["show"])],64))}};export{is as default};
