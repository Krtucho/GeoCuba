(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[784],{493:(e,a,l)=>{"use strict";l.d(a,{Z:()=>o});var t=l(9835),n=l(499);const o=(0,t.aZ)({name:"EssentialLink",setup(){function e(e){alert(e.label)}return{model:(0,n.iH)(null),options:["Google","Facebook","Twitter","Apple","Oracle"],expanded:(0,n.iH)(["FUENTES BIBLIOGRÁFICAS","PROYECTOS"]),selected:(0,n.iH)("PROYECTOS"),simple:[{label:"FUENTES BIBLIOGRÁFICAS",children:[{label:"Catálogos",handler:a=>e(a),selectable:!0},{label:"Artículos"},{label:"Tesis"},{label:"Boletines"},{label:"Revistas"}]},{label:"PROYECTOS",children:[{label:"Thing"}],selectable:!0,expandable:!0},{label:"CATEGORIZACIÓN CIENTÍFICA",children:[],selectable:!0},{label:"MAESTRÍAS Y DOCTORADOS",children:[],expandable:!0},{label:"CURSOS",children:[]},{label:"MÉRITOS CIENTÍFICOS",children:[]}],onclick:e}}})},7314:(e,a,l)=>{"use strict";l.d(a,{Z:()=>i});var t=l(9835),n=l(499),o=l(4024);const r=[{label:"Fuentes Bibliograficas (with avatar)",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",children:[{label:"Good food (with icon)",icon:"restaurant_menu"},{label:"Good service (disabled node with icon)",icon:"room_service",disabled:!0,children:[{label:"Prompt attention"},{label:"Professional waiter"}]},{label:"Pleasant surroundings (with icon)",icon:"photo",children:[{label:"Happy atmosphere (with image)",img:"https://cdn.quasar.dev/img/logo_calendar_128px.png"},{label:"Good table presentation"},{label:"Pleasing decor"}]}],expanded:["Satisfied customers (with avatar)","Good food (with icon)"]}],i=(0,t.aZ)({name:"LibraryPage",components:{EssentialLink:o.Z},setup(){return{simpleList:r,lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",isInput:!0,tab:(0,n.iH)("mails"),leftDrawerOpen:(0,n.iH)(!0),toggleLeftDrawer(){leftDrawerOpen.value=!leftDrawerOpen.value}}}})},7373:(e,a,l)=>{"use strict";l.d(a,{s:()=>n});var t=l(9835);function n(e,a,l,n,o,r){const i=(0,t.up)("q-tree"),s=(0,t.up)("q-item");return(0,t.wg)(),(0,t.j4)(s,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{nodes:e.simple,"node-key":"label","no-connectors":"",color:"white","control-color":"white","text-color":"white","selected-color":"white",expanded:e.expanded,"onUpdate:expanded":a[0]||(a[0]=a=>e.expanded=a),selected:e.selected,"onUpdate:selected":a[1]||(a[1]=a=>e.selected=a)},null,8,["nodes","expanded","selected"])])),_:1})}},1579:(e,a,l)=>{"use strict";l.d(a,{s:()=>c});var t=l(9835),n=l(6970),o=l(5628),r=l.n(o);const i=e=>((0,t.dD)("data-v-6c276da4"),e=e(),(0,t.Cn)(),e),s=i((()=>(0,t._)("img",{src:r(),class:"img-background"},null,-1))),d=(0,t.Uk)(" Quasar App ");function c(e,a,l,o,r,i){const c=(0,t.up)("q-btn"),u=(0,t.up)("q-toolbar-title"),p=(0,t.up)("q-toolbar"),b=(0,t.up)("q-header"),m=(0,t.up)("EssentialLink"),w=(0,t.up)("q-drawer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,(0,t.Wm)(b,{elevated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a[0]||(a[0]=a=>e.leftDrawerOpen=!e.leftDrawerOpen)}),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[d])),_:1}),(0,t._)("div",null,"Quasar v"+(0,n.zw)(e.$q.version),1)])),_:1})])),_:1}),(0,t.Wm)(w,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[1]||(a[1]=a=>e.leftDrawerOpen=a),"show-if-above":"",bordered:"",style:{"background-color":"#43AAFF"}},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.simpleList,(e=>((0,t.wg)(),(0,t.j4)(m,(0,t.dG)({key:e.label},e),null,16)))),128))])),_:1},8,["modelValue"])],64)}},4024:(e,a,l)=>{"use strict";l.d(a,{Z:()=>w});var t=l(7373),n=l(3777),o=l(1639),r=l(7911),i=l(1920),s=l(9968),d=l(5296),c=l(6923),u=l(2330),p=l(9984),b=l.n(p);const m=(0,o.Z)(n.Z,[["render",t.s],["__scopeId","data-v-1181652d"]]),w=m;b()(n.Z,"components",{QItem:r.Z,QItemSection:i.Z,QIcon:s.Z,QTree:d.Z,QSelect:c.Z,QItemLabel:u.Z})},8784:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>Z});var t=l(9944),n=l(6189),o=l(1639),r=l(3898),i=l(2959),s=l(1859),d=l(9480),c=l(9298),u=l(1312),p=l(9306),b=l(2330),m=l(9984),w=l.n(m);const h=(0,o.Z)(n.Z,[["render",t.s],["__scopeId","data-v-6c276da4"]]),Z=h;w()(n.Z,"components",{QInput:r.Z,QHeader:i.Z,QToolbar:s.Z,QBtn:d.Z,QToolbarTitle:c.Z,QDrawer:u.Z,QList:p.Z,QItemLabel:b.Z})},5628:(e,a,l)=>{e.exports=l.p+"img/photo_2022-09-16_11-53-08.bf7a1c6c.jpg"},3777:(e,a,l)=>{"use strict";l.d(a,{Z:()=>t.Z});var t=l(493)},6189:(e,a,l)=>{"use strict";l.d(a,{Z:()=>t.Z});var t=l(7314)},9944:(e,a,l)=>{"use strict";l.d(a,{s:()=>t.s});var t=l(1579)}}]);