(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2893c2d6"],{2909:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){if(Array.isArray(t))return n(t)}function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function i(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return o(t)||s(t)||i(t)||a()}r.d(e,"a",(function(){return c}))},3077:function(t,e,r){"use strict";r("9446")},"609b":function(t,e,r){"use strict";r.r(e);var n,o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Invoice")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white border-top",staticStyle:{"border-style":"ridge"}},[r("vs-button",{staticStyle:{float:"left",width:"50px","margin-left":"2px"},attrs:{color:"primary",size:"small","icon-pack":"feather",icon:"icon-arrow-left"},on:{click:function(e){return e.preventDefault(),t.$router.push({path:"/pages/order/myOrders"})}}}),r("div",{attrs:{id:"printableInvoice"}},[r("div",{ref:"printSection",attrs:{id:"printSection"}},[r("div",{staticClass:"vx-row px-2 pt-2 row border border-dark mt-2"},[t._m(0),t._m(1),r("div",{staticClass:"vx-col w-1/4 w-25"},[r("div",{staticClass:"float-right mt-20"},[t._v("\n            "+t._s(t.$t("Invoice"))+" #: "),r("strong",[t._v(t._s(t.orderResponse.orderNumber))]),r("br"),t._v("\n            "+t._s(t.$t("Created"))+": "),r("strong",[t._v(t._s(t._f("date2")(t.orderResponse.createdDateTime)))]),r("br"),r("a",{attrs:{href:"http://www.kilitchestro.com"}},[t._v("www.kilitchestro.com")])])])])]),r("vs-table",{staticClass:"mx-3",attrs:{hoverFlat:"",noDataText:""}},[r("vs-tr",[r("vs-td",[r("p",{staticClass:"text-base"},[t._v(t._s(t.$t("billedTo")))]),r("vs-divider",{staticClass:"my-0",attrs:{color:"success"}})],1)],1),r("vs-tr",{staticClass:"information"},[r("vs-td",{staticClass:"p-0",attrs:{colspan:"4"}},[r("table",{staticStyle:{"margin-top":"-20px"},attrs:{noDataText:""}},[r("tr",[r("td",[r("strong",[t._v(t._s(t.$t("companyName")))]),t._v(": "+t._s(t._f("capitalize")(t.orderResponse.companyName))+"\n                "),r("br"),r("strong",[t._v(t._s(t.$t("fullName")))]),t._v(": "+t._s(t.orderResponse.fullName)+"\n                "),r("br")]),r("td",{},[r("strong",[t._v(t._s(t.$t("address")))]),t._v(":\n                "+t._s(t.companyInfo.street)+","+t._s(t.companyInfo.woredaCity)+","+t._s(t.companyInfo.region)+"\n\n                "),r("br"),r("strong",[t._v(t._s(t.$t("email")))]),t._v(": "+t._s(t.userInfo.email)+"\n                "),r("br"),r("vs-button",{directives:[{name:"print",rawName:"v-print",value:t.printObj,expression:"printObj"}],staticClass:"print float-right",attrs:{"icon-pack":"feather",icon:"icon-printer",type:"border",color:"success"}},[t._v(t._s(t.$t("printInvoice")))])],1)])])])],1)],1),r("div",{staticClass:"p-0 px-3"},[r("vs-table",{attrs:{hoverFlat:"",data:t.orderResponse.orderItems},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,(function(e,o){return r("vs-tr",{key:o},[r("vs-td",{staticClass:"py-0",attrs:{data:o}},[t._v(t._s(o+1))]),r("vs-td",{staticClass:"text-left",attrs:{data:t.secondInventory[o].inventoryGenericName}},[t._v(t._s(t.secondInventory[o].inventoryGenericName)+" "+t._s(null!=t.secondInventory[o].dosageForm?t.secondInventory[o].dosageForm:"")+" "+t._s(null!=+t.secondInventory[o].strength?t.secondInventory[o].strength:""))]),r("vs-td",{staticClass:"text-left",attrs:{data:n[o].hours}},[t._v("x"+t._s(n[o].orderQuantity))]),t.checkIfPreorder()?t._e():r("vs-td",{staticClass:"text-left",attrs:{data:n[o].hours}},[t._v("x"+t._s(n[o].preOrderQuantity))]),r("vs-td",{staticClass:"text-left",attrs:{data:n[o].unitPrice}},[t._v(t._s(n[o].unitPrice.toLocaleString("en-US"))+"\n            ")]),r("vs-td",{staticClass:"text-left",attrs:{data:n[o].unitPrice*n[o].orderQuantity}},[t._v(t._s((n[o].unitPrice*n[o].orderQuantity+n[o].unitPrice*n[o].preOrderQuantity).toLocaleString("en-US")))])],1)}))}}])},[r("template",{slot:"thead"},[r("vs-th",[t._v("#")]),r("vs-th",[t._v(t._s(t.$t("genericName")))]),r("vs-th",[t._v(t._s(t.$t("orderQuantity")))]),t.checkIfPreorder()?t._e():r("vs-th",[t._v(t._s(t.$t("preOrderQuantity")))]),r("vs-th",[t._v(t._s(t.$t("unitPrice")))]),r("vs-th",[t._v(t._s(t.$t("subTotal")))])],1)],2),r("vs-table",{staticClass:"w-2/5 ml-auto mt-4 text-left",attrs:{hoverFlat:"",data:t.orderResponse}},[r("vs-tr",[r("vs-th",[t._v(t._s(t.$t("TOTAL")))]),r("vs-td",{staticClass:"text-left"},[t._v(t._s((t.orderResponse.totalPrice/1.05).toLocaleString("en-US"))+" "+t._s(t.$t("ETB")))])],1),r("vs-tr",[r("vs-th",[t._v(t._s(t.$t("TAX"))+"(5%)")]),r("vs-td",{staticClass:"text-left"},[t._v(t._s((t.orderResponse.totalPrice/1.05*.05).toLocaleString("en-US"))+"\n            "+t._s(t.$t("ETB"))+"\n          ")])],1),r("vs-tr",[r("th",[t._v(t._s(t.$t("grandTotal")))]),r("td",{staticClass:"text-black font-bold text-left"},[t._v(t._s(t.orderResponse.totalPrice.toLocaleString("en-US"))+"\n            "+t._s(t.$t("ETB")))])])],1)],1),r("div",{staticClass:"invoice__footer text-right p-base"},[r("p",[r("span",{staticClass:"mr-10 mt-4"},[t._v("\n          "+t._s(t.$t("orderNumber"))+":\n          "),r("span",{staticClass:"text-black font-bold"},[t._v(t._s(t.orderResponse.orderNumber))])]),t.orderResponse.deliveryTime?r("span",{staticClass:"ml-24"},[t._v("\n          "+t._s(t.$t("deliveryTime"))+":\n          "),r("span",{staticClass:"text-black font-bold"},[t._v(t._s(t.orderResponse.deliveryTime))])]):t._e()])])],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vx-col w-1/4 w-25 col-sm"},[n("img",{staticClass:"flex mx-auto h-1/2 mt-4",staticStyle:{"object-fit":"fill",height:"110px",flex:"1 1 auto",float:"left"},attrs:{src:r("a4ef")}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vx-col w-1/2 col-lg text-center border border-dark mt-8",staticStyle:{"text-align":"center"}},[r("div",{staticStyle:{"border-bottom":"2px solid black","line-height":"1.2 !important"}},[r("h4",{staticClass:"font-bold"},[t._v("\n              KILITECH ESTRO BIOTECH PLC\n            ")])]),r("div",{staticClass:"vx-col"}),r("div",{staticClass:"border-bottom-2 border-dark"},[r("h6",[t._v("\n              Lega Bari Lega Bollo Kebele, Barak Wereda, Oromia Special Zone Finfine Surrounding Oromia, Ethiopia\n            ")]),r("h6",[t._v("\n              Contact. +251-911670820, +251-944250035,+251-984625092\n            ")]),r("h6",[t._v("\n              Email: danielw@kilitchestro.com Or bhavinmehta@kilitch.com\n            ")])])])}],c=r("ade3"),d=r("2909"),l=(r("a481"),r("6b54"),{data:function(){return{printObj:{id:"printableInvoice",popTitle:"Ethiopharmacy Order Invoice",extraCss:"https://www.google.com,https://www.google.com",extraHead:'<meta http-equiv="Content-Language"content=sdfdsfdsfds"zh-cn"/>'},invoice_id:"123456890",amount_paid:10.99,amount_due:0,items:[{description:"Website design",quantity:1,price:300},{description:"Website design",quantity:1,price:75},{description:"Website design",quantity:1,price:10}],orderResponse:{},userInfo:{},companyInfo:{},secondInventory:[],navbarType:"floating",printButtonVisible:!0,invoiceId:"",orderResponses:{},isPreOrder:!1}},created:function(){var t=this;this.orderResponse=this.$store.getters["invoice/getOrder"],this.getOrderById(),setTimeout((function(){for(var e="IN",r=0;r<5-t.orderResponse.orderId.toString().length;r++)e+="0";t.invoiceId=e+t.orderResponse.orderId}),200)},mounted:function(){},computed:{navbarTypeLocal:{get:function(){return"navbar-"+this.navbarType},set:function(t){this.$emit("updateNavbar",t.replace("navbar-",""))}}},methods:(n={checkIfPreorder:function(){for(var t=0;t<this.orderResponse.orderItems.length;t++)if(this.orderResponse.orderItems[t].preOrderQuantity>0)return!1;return!0},print:function(){window.print()},getOrderById:function(){var t=this;this.$http.get("/order/".concat(this.$route.params.id)).then((function(e){t.orderResponse=e.data,t.getUserInfo(),t.getCompanyInfo();for(var r=0;r<t.orderResponse.orderItems.length;r++)"[]"!=t.preOrderInfo&&t.preOrderInfo!=[]&&null!=t.preOrderInfo&&0!=t.orderResponse.preOrderInfo[r].orderQuantity&&null!=t.orderResponse.preOrderInfo[r].orderQuantity&&(t.orderResponse.orderItems[r].orderQuantity=t.orderResponse.preOrderInfo[r].orderQuantity+t.orderResponse.orderItems[r].orderQuantity),t.getInventoryById(t.orderResponse.orderItems[r].inventoryId,r)}))},getInventoryById:function(t,e){var r=this;this.$http.get("/inventory/".concat(t)).then((function(t){r.secondInventory.push(t.data),console.log(r.order)}))},getUserInfo:function(){var t=this;this.$http.get("/accounts/".concat(this.orderResponse.userId)).then((function(e){t.userInfo=e.data,console.log(e.data)}))},getCompanyInfo:function(){var t=this;this.$http.get("/company/".concat(this.orderResponse.companyId)).then((function(e){t.companyInfo=e.data,console.log(e.data)}))},printPageArea:function(t){this.printButtonVisible=!1,this.nextTick((function(){for(var t=document.getElementById("printableInvoice").innerHTML,e="",r=0,n=Object(d["a"])(document.querySelectorAll('link[rel="stylesheet"], style'));r<n.length;r++){var o=n[r];e+=o.outerHTML}var s=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");s.document.write("<!DOCTYPE html>\n<html>\n  <head>\n    ".concat(e,"\n  </head>\n  <body>\n    ").concat(t,"\n  </body>\n</html>")),s.document.close(),s.focus(),s.print(),s.close()}))}},Object(c["a"])(n,"printPageArea",(function(){alert("Print");var t=document.body.innerHTML,e=document.getElementById("printableInvoice").innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t})),Object(c["a"])(n,"timeOutPrint",(function(){setTimeout((function(){for(var t=document.getElementById("printableInvoice").innerHTML,e="",r=0,n=Object(d["a"])(document.querySelectorAll('link[rel="stylesheet"], style'));r<n.length;r++){var o=n[r];e+=o.outerHTML}var s=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");s.document.write("<!DOCTYPE html>\n<html>\n  <head>\n    ".concat(e,"\n  </head>\n  <body>\n    ").concat(t,"\n  </body>\n</html>")),s.document.close(),s.focus(),s.print(),s.close()}),1500)})),n),filters:{currency:function(t){return t.toFixed(2)}}}),u=l,v=(r("3077"),r("2877")),p=Object(v["a"])(u,i,a,!1,null,"270826b9",null),h=p.exports,f={components:{Invoice:h},data:function(){return{}},methods:{}},m=f,b=Object(v["a"])(m,o,s,!1,null,null,null);e["default"]=b.exports},9446:function(t,e,r){},a4ef:function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-2893c2d6.7ef4a2ae.js.map