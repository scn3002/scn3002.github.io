(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4cfe252"],{"2f82":function(t,a,o){},"4b2b":function(t,a,o){"use strict";o("2f82")},"64ff":function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-app-bar",{attrs:{app:"",flat:"",color:"#F5DF4D"}},[e("v-spacer"),e("v-menu",{staticStyle:{"z-index":"999999999999"},attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on;a.attrs;return[e("v-btn",t._g({attrs:{dark:"",icon:""}},o),[e("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",[e("v-list-item",{attrs:{exact:"","router:":"",to:"/"}},[t._v("홈")]),e("v-list-item",{on:{click:function(a){t.showModal=!0}}},[t._v("QR이력")]),e("v-list-item",{on:{click:function(a){return t.showModalFlag()}}},[t._v("도움말")])],1)],1)],1),e("v-container",[e("v-row",{staticClass:"fill-height; align-center",attrs:{fluid:""}},[e("v-col",{attrs:{cols:"6"}},[e("v-col",{staticClass:"mt-0 pt-0 al",attrs:{cols:"12"}},[e("v-col",{staticClass:" align-center ma-0 pa-0"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"KpayLogo",contain:"",src:o("0402"),transition:"scale-transition",width:"120"},on:{click:t.QrBtn}})],1)],1),e("v-col",{staticClass:"px-4"},[e("v-col",{staticStyle:{"background-color":"white","min-height":"83vh"},attrs:{cols:"12"}},[e("QrReader")],1)],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-col",{staticStyle:{"background-color":"white","min-height":"88vh"},attrs:{cols:"12"}},[e("QrInfo",{attrs:{type:"auth"}}),e("QrAuthHistory",{attrs:{showModal:t.showModal,type:"pay"},on:{close:t.showModalState}})],1)],1)],1)],1)],1)},s=[],n=o("5ee9"),l=o("5fc0"),i=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.openModal,expression:"openModal"}],staticClass:"modalBg",staticStyle:{position:"fixed","z-index":"555",top:"5%",left:"50%",width:"49%",height:"100%"},attrs:{transition:"dialog-bottom-transition",scrollable:""}},[o("v-card",{attrs:{tile:""}},[o("v-toolbar",{attrs:{flat:"",dark:"",color:"#F5DF4D"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){return t.$emit("close",!1)}}},[o("v-icon",[t._v("mdi-close")])],1),o("v-toolbar-title",[t._v("QR인증내역")]),o("v-spacer")],1),o("v-card-text",{staticStyle:{"background-color":"#939597"}},[o("v-col",{attrs:{cols:"4"}},[o("v-card",{staticStyle:{"background-color":"#F5DF4D"}},[o("div",{staticClass:"mx-2",attrs:{align:"center"}},[o("v-card-title",[t._v("총 인증인원")]),o("p",{staticClass:"display-1 text--primary",staticStyle:{"padding-bottom":"12px"}},[t._v(" "+t._s(t.total)+"명 ")])],1)])],1),o("v-spacer"),o("v-divider",{staticClass:"mb-4 mt-2"}),o("v-data-table",{ref:"table",staticClass:"elevation-1",attrs:{height:"65vh",headers:t.headers,items:t.desserts,"hide-default-footer":"",page:t.page,"items-per-page":t.itemsPerPage},on:{"update:page":function(a){t.page=a},"page-count":function(a){t.pageCount=a}}}),o("v-pagination",{attrs:{color:"black",length:t.pageCount},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}})],1)],1)],1)},r=[],c=o("56d7"),d=o("365c"),u={components:{},props:{showModal:{type:Boolean,default:!1}},data:function(){return{openModal:this.showModal,page:1,pageCount:0,itemsPerPage:15,headers:[{text:"NO",width:"5%",align:"start",sortable:!1,value:"idx"},{text:"예매번호",width:"50%",align:"start",sortable:!1,value:"ticketNumber"},{text:"좌석번호",width:"30%",align:"start",sortable:!1,value:"seatNumber"},{text:"인증여부",width:"15%",align:"start",sortable:!1,value:"authYn"}],desserts:[],total:""}},created:function(){var t=this;c["eventBus"].$on("authList",(function(a){console.log("이벤트버스",a),t.desserts=[],t.desserts=a.data.content.list,t.total=a.data.content.total}));var a=this;Object(d["a"])().then((function(t){console.log(t.data.content),a.desserts=t.data.content.list,a.total=t.data.content.total,console.log(a.desserts)})).catch((function(t){console.log(t)}))},watch:{showModal:function(t){this.openModal=this.showModal,console.log(this.openModal)}},methods:{loading:function(){}}},h=u,v=(o("4b2b"),o("2877")),p=o("6544"),f=o.n(p),g=o("8336"),b=o("b0af"),m=o("99d9"),w=o("62ad"),V=o("8fea"),M=o("ce7e"),k=o("132d"),C=o("891e"),x=o("2fa4"),y=o("71d9"),_=o("2a7f"),S=Object(v["a"])(h,i,r,!1,null,null,null),Q=S.exports;f()(S,{VBtn:g["a"],VCard:b["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:w["a"],VDataTable:V["a"],VDivider:M["a"],VIcon:k["a"],VPagination:C["a"],VSpacer:x["a"],VToolbar:y["a"],VToolbarTitle:_["b"]});var B={components:{QrInfo:n["a"],QrReader:l["a"],QrAuthHistory:Q},data:function(){return{showModal:!1}},methods:{QrBtn:function(){this.$router.push("/")},showModalState:function(t){this.showModal=t,console.log(this.showModal)},showInsertModalCall:function(t){this.showModal=t}}},D=B,F=o("40dc"),I=o("a523"),T=o("adda"),P=o("8860"),R=o("da13"),$=o("e449"),L=o("0fd9"),N=Object(v["a"])(D,e,s,!1,null,null,null);a["default"]=N.exports;f()(N,{VAppBar:F["a"],VBtn:g["a"],VCol:w["a"],VContainer:I["a"],VIcon:k["a"],VImg:T["a"],VList:P["a"],VListItem:R["a"],VMenu:$["a"],VRow:L["a"],VSpacer:x["a"]})}}]);
//# sourceMappingURL=chunk-f4cfe252.100e11fa.js.map