(function(t){function e(e){for(var o,r,a=e[0],i=e[1],l=e[2],u=0,f=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},c={app:0},s=[];function a(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d22db6b":"3604ecc4","chunk-725e07af":"22415bd4","chunk-632dafc8":"3ced2f06","chunk-5262f680":"ec1b7cef","chunk-f4cfe252":"d091fb7c","chunk-927a6d54":"2341213a"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-725e07af":1,"chunk-632dafc8":1,"chunk-5262f680":1,"chunk-f4cfe252":1,"chunk-927a6d54":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-2d22db6b":"31d6cfe0","chunk-725e07af":"e325fcd9","chunk-632dafc8":"16ae9fd4","chunk-5262f680":"36116fe6","chunk-f4cfe252":"3074c385","chunk-927a6d54":"40a2a960"}[t]+".css",c=i.p+o,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var l=s[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===c))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],u=l.getAttribute("data-href");if(u===o||u===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||c,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0402":function(t,e,n){t.exports=n.p+"img/Kpay.06af1583.svg"},"07cf":function(t,e,n){t.exports=n.p+"img/QrAuth.da8747ee.svg"},"365c":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var o=n("bc3a"),r=n.n(o),c={authHistory:"https://dev.olli-go.co.kr/kpay/auth",payHistory:"https://dev.olli-go.co.kr/kpay/payments"};function s(){return r.a.get(c.authHistory)}function a(){return r.a.get(c.payHistory)}},4385:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("AppHeader"),o("v-container",[o("v-row",{attrs:{fluid:""}},[o("v-col",{staticClass:"pt-0 px-0",staticStyle:{"min-height":"65vh","background-color":"white"},attrs:{cols:"6",sm:"6",md:"6",lg:"6"}},[o("v-col",{staticClass:"ma-0 pt-0 mb-0",staticStyle:{"background-color":"#F5DF4D"},attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[o("v-col",{staticClass:" mb-0 pb-0 ",attrs:{cols:"auto"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"KpayLogo",contain:"",src:n("0402"),transition:"scale-transition",width:"120"}})],1)],1),o("v-col",{staticClass:"px-4 pb-0 mb-0",attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[o("v-row",[o("v-container",[o("v-row",{staticStyle:{"background-color":"white"}},[o("v-col",{attrs:{cols:"6",sm:"6",md:"6",lg:"6",align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"auto"}},[o("img",{attrs:{contain:"",src:n("4662"),width:"180"},on:{click:t.QrBtn}})])],1),o("v-col",{staticClass:"d-flex align-end mb-4",attrs:{cols:"6",sm:"6",md:"6",lg:"6"}},[o("v-img",{staticClass:"shrink ml-4",attrs:{src:n("07cf"),width:"150"},on:{click:t.QrBtn}})],1)],1),o("v-divider")],1)],1)],1),o("v-col",{staticClass:"px-4 pb-0 mb-0",attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[o("v-row",[o("v-container",[o("v-row",{staticStyle:{"background-color":"white"}},[o("v-col",{attrs:{cols:"6",sm:"6",md:"6",lg:"6",align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"auto"}},[o("img",{attrs:{contain:"",src:n("4662"),width:"180"},on:{click:t.QrBtn2}})])],1),o("v-col",{staticClass:"d-flex align-end ",attrs:{cols:"auto"}},[o("v-img",{staticClass:"shrink ml-4",attrs:{src:n("fc48"),width:"150"},on:{click:t.QrBtn2}})],1)],1)],1)],1)],1)],1),o("v-col",{attrs:{cols:"6",sm:"6",md:"6",lg:"6"}},[o("v-col",{staticStyle:{"background-color":"white","min-height":"85vh"},attrs:{cols:"12"}})],1)],1)],1)],1)},r=[],c=n("5ee9"),s=n("6e70"),a=(n("365c"),{name:"Home",components:{QrInfo:c["a"],AppHeader:s["a"]},data:function(){return{}},created:function(){},methods:{QrBtn:function(){this.$router.push("QrAuth")},QrBtn2:function(){this.$router.push("QrPayment")}}}),i=a,l=n("2877"),u=n("6544"),f=n.n(u),p=n("62ad"),d=n("a523"),h=n("ce7e"),v=n("adda"),m=n("0fd9"),g=Object(l["a"])(i,o,r,!1,null,null,null);e["default"]=g.exports;f()(g,{VCol:p["a"],VContainer:d["a"],VDivider:h["a"],VImg:v["a"],VRow:m["a"]})},4662:function(t,e,n){t.exports=n.p+"img/QR.ae076513.svg"},4759:function(t,e,n){t.exports=n.p+"img/QrSuccess.2d210bca.svg"},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"eventBus",(function(){return P}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{color:"#F5DF4D"}},[n("v-main",{staticClass:" ",staticStyle:{"background-color":"#F5DF4D"},attrs:{fluid:""}},[n("router-view")],1)],1)},c=[],s={name:"App",data:function(){return{}}},a=s,i=n("2877"),l=n("6544"),u=n.n(l),f=n("7496"),p=n("f6c4"),d=Object(i["a"])(a,r,c,!1,null,null,null),h=d.exports;u()(d,{VApp:f["a"],VMain:p["a"]});n("d3b7"),n("3ca3"),n("ddb0");var v=n("8c4f");n("4385");o["a"].use(v["a"]);var m=new v["a"]({mode:"history",routes:[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(null,"4385"))}},{path:"/QrAuth",name:"QrAuth",component:function(){return Promise.all([n.e("chunk-725e07af"),n.e("chunk-632dafc8"),n.e("chunk-f4cfe252")]).then(n.bind(null,"64ff"))}},{path:"/QrPayment",name:"QrPayment",component:function(){return Promise.all([n.e("chunk-725e07af"),n.e("chunk-632dafc8"),n.e("chunk-5262f680")]).then(n.bind(null,"a5e3"))}},{path:"/QrHistoryPage",name:"QrHistoryPage",component:function(){return Promise.all([n.e("chunk-725e07af"),n.e("chunk-927a6d54")]).then(n.bind(null,"4159"))}},{path:"/Help",name:"Help",component:function(){return n.e("chunk-2d22db6b").then(n.bind(null,"f957"))}}]}),g=n("2f62"),y={fetchAuth:function(t){return t.auth}},b={SET_AUTH_HISTORY:function(t,e){t.authHistory=e}},k=n("365c"),w={AUTH_HISTORY:function(t){var e=t.commit;return Object(k["a"])().then((function(t){return e("SET_AUTH_HISTORY",t.data)}))}};o["a"].use(g["a"]);var _=new g["a"].Store({strict:!1,state:{authHistory:[],payHistory:[]},getters:y,mutations:b,actions:w}),S=n("f309");o["a"].use(S["a"]);var I=new S["a"]({}),C=n("bb6f"),x=n.n(C);o["a"].config.devtools=!0,o["a"].config.productionTip=!1;var P=new o["a"]({methods:{qrRead:function(t){console.log("qr read event bus"),this.$emit("qrRead",t)},changePrice:function(t){console.log("price change event bus"),console.log(t),this.$emit("changePrice",t)},resAuthList:function(t){console.log("새로고침"),console.log(t),this.$emit("authList",t)},resPayList:function(t){console.log("새로고침/resPayList"),console.log(t),this.$emit("payList",t)},setMoney:function(t){console.log("price change event bus"),console.log(t),this.$emit("settingMoney",t)}}});new o["a"]({VueQrcodeReader:x.a,router:m,store:_,vuetify:I,render:function(t){return t(h)}}).$mount("#app")},"5ee9":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{staticClass:"text-center"},["auth"==t.type&&null==t.isSuccess?o("v-col",{staticClass:"pa-4",attrs:{"justify-center":"",cols:"12",sm:"12",md:"12",lg:"12"}},[o("h1",[t._v("방문해주셔서 감사합니다")]),o("v-col",[o("h3",[t._v("예매된 QR코드로"),o("br"),t._v("승차해주시길 바랍니다.")])])],1):t._e(),"pay"==t.type&&null==t.isSuccess?o("v-col",{staticClass:"pa-4",attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[o("v-col",[o("h1",[t._v("요금안내")])]),o("v-col",[o("h3",[t._v("예매된 QR코드로"),o("br"),t._v("승차해주시길 바랍니다.")])]),o("v-col",{staticClass:"align-self-end"},[o("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[t._v(" 성인 "+t._s(t.priceInfo.adult)+" 원 ")]),o("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[t._v(" 청소년 "+t._s(t.priceInfo.teenager)+" 원 ")]),o("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[t._v(" 어린이 "+t._s(t.priceInfo.child)+" 원 ")])],1)],1):t._e(),"auth"==t.type&&1==t.isSuccess?o("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12"}},[o("v-col",{attrs:{cols:"12"}},[o("h1",[t._v("예매번호 "),o("b",{staticStyle:{"font-color":"#000000"}},[t._v(t._s(t.item.ticketNumber))])])]),o("v-col",{attrs:{cols:"12",align:"center",justify:"center"}},[o("v-img",{attrs:{width:"250",contain:"",src:n("4759")}})],1),o("v-col",{attrs:{cols:"12"}},[o("h1",[t._v("좌석번호")])]),o("v-col",{},[o("h1",[t._v(t._s(t.item.seatNumber))])])],1):t._e(),"auth"==t.type&&0==t.isSuccess?o("v-col",[o("v-col",{attrs:{cols:"12"}},[o("h1",[o("b",[t._v("인증실패")])])]),o("v-col",{attrs:{cols:"12",align:"center",justify:"center"}},[o("v-img",{attrs:{width:"250",contain:"",src:n("6bda")}})],1),o("v-col",{staticClass:"mt-10",attrs:{cols:"12"}},[o("h1",[o("b",[t._v("다시 시도 해주시길 바랍니다.")])])])],1):t._e(),t._v(" "),"pay"==t.type&&1==t.isSuccess?o("v-col",[o("v-col",{staticClass:"mt-10",attrs:{cols:"12",align:"center",justify:"center"}},[o("v-img",{attrs:{width:"250",contain:"",src:n("4759")}})],1),o("v-col",{staticClass:"mt-10",attrs:{cols:"12"}},[o("h1",[o("b",{staticStyle:{"font-size":"40px","font-color":"#000000"}},[t._v("정상결제되었습니다.")])])])],1):t._e(),t._v(" "),"pay"==t.type&&0==t.isSuccess?o("v-col",[o("v-col",{staticStyle:{"font-size":"40px","font-color":"#000000"}},[o("b",[t._v("결제실패")])]),o("v-col",{attrs:{align:"center",justify:"center"}},[o("v-img",{attrs:{width:"250",contain:"",src:n("6bda")}})],1),o("div",{staticStyle:{"margin-top":"10px"}},[o("b",{staticStyle:{"font-color":"#000000"}},[t._v("다시 시도 해주시길 바랍니다.")])])],1):t._e()],1)],1)},r=[],c=n("56d7"),s=n("bc3a"),a=n.n(s),i={props:{type:{type:String,default:"",require:!1},price:{type:String,default:"",require:!1}},data:function(){return{isSuccess:null,item:" ",priceInfo:{adult:0,teenager:0,child:0}}},created:function(){var t=this;c["eventBus"].$on("qrRead",(function(e){if(console.log("qrData in QRInfo"),console.log(e),t.item=JSON.parse(e),console.log(t.item),"pay"==t.type){if(console.log("포스트페이",t.item),console.log(t.priceInfo),null!=t.item.seatNumber)return console.error(t.item.seatNumber),void t.showFail();var n=!1;if(1==t.item.type){if(t.item=Object.assign(t.item,{price:t.priceInfo.child}),parseInt(t.item.balance)<parseInt(t.item.price))return console.error(t.item.balance,t.item.price),void t.showFail();n=a.a.post("https://dev.olli-go.co.kr/kpay/payments",t.item).then((function(t){var e=t;return console.log("[페이포스트결과값]",e),c["eventBus"].resPayList(e),!0})).catch((function(t){return console.log(t),!1})),!1===n?t.showFail():t.showSuccess()}else if(2==t.item.type){if(t.item=Object.assign(t.item,{price:t.priceInfo.teenager}),parseInt(t.item.balance)<parseInt(t.item.price))return void t.showFail();n=a.a.post("https://dev.olli-go.co.kr/kpay/payments",t.item).then((function(t){var e=t;return console.log("[페이포스트결과값]",e),c["eventBus"].resPayList(e),!0})).catch((function(t){return console.log(t),!1})),!1===n?t.showFail():t.showSuccess()}else if(3==t.item.type){if(t.item=Object.assign(t.item,{price:t.priceInfo.adult}),parseInt(t.item.balance)<parseInt(t.item.price))return void t.showFail();n=a.a.post("https://dev.olli-go.co.kr/kpay/payments",t.item).then((function(t){var e=t;return console.log("[페이포스트결과값]",e),c["eventBus"].resPayList(e),!0})).catch((function(t){return console.log(t),!1})),!1===n?t.showFail():t.showSuccess()}}else{if(null!=t.item.balance)return console.error(t.item.balance),void t.showFail();console.log("포스트",t.item);var o=a.a.post("https://dev.olli-go.co.kr/kpay/auth",t.item).then((function(t){var e=t;return console.log("전",e),c["eventBus"].resAuthList(e),!0})).catch((function(t){return console.log(t),!1}));!1===o?t.showFail():t.showSuccess()}})),c["eventBus"].$on("changePrice",(function(e){console.log("priceInfo in QRInfo"),console.log(e),e&&(t.priceInfo=JSON.parse(e),console.log(t.priceInfo))})),c["eventBus"].$on("settingMoney",(function(t){console.log("priceInfo in QRInfo"),console.log(t)}))},components:{},methods:{modal:function(){this.showInsertModal=!0},showSuccess:function(){var t=this;this.isSuccess=!0,setTimeout((function(){t.isSuccess=null}),1e4)},showFail:function(){var t=this;this.isSuccess=!1,setTimeout((function(){t.isSuccess=null}),3e3)}}},l=i,u=n("2877"),f=n("6544"),p=n.n(f),d=n("62ad"),h=n("a523"),v=n("adda"),m=Object(u["a"])(l,o,r,!1,null,null,null);e["a"]=m.exports;p()(m,{VCol:d["a"],VContainer:h["a"],VImg:v["a"]})},"6bda":function(t,e,n){t.exports=n.p+"img/QrFail.c6394f76.svg"},"6e70":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",flat:"",color:"#F5DF4D","hide-on-scroll":""}},[n("v-spacer"),n("v-menu",{staticStyle:{"z-index":"999999999999"},attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;e.attrs;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},o),[n("v-icon",{attrs:{color:"black"}},[t._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[n("v-list-item",{attrs:{exact:"","router:":"",to:"/"}},[t._v("홈")]),n("v-list-item",{on:{click:function(e){return t.showModalFlag()}}},[t._v("도움말")])],1)],1)],1)},r=[],c={data:function(){return{}},methods:{showModalFlag:function(){this.$emit("showModal",!0)}}},s=c,a=n("2877"),i=n("6544"),l=n.n(i),u=n("40dc"),f=n("8336"),p=n("132d"),d=n("8860"),h=n("da13"),v=n("e449"),m=n("2fa4"),g=Object(a["a"])(s,o,r,!1,null,null,null);e["a"]=g.exports;l()(g,{VAppBar:u["a"],VBtn:f["a"],VIcon:p["a"],VList:d["a"],VListItem:h["a"],VMenu:v["a"],VSpacer:m["a"]})},fc48:function(t,e,n){t.exports=n.p+"img/QrPay.b986a505.svg"}});
//# sourceMappingURL=app.f21cfe8d.js.map