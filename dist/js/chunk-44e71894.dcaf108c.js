(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44e71894"],{"428b":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vx-row",attrs:{id:"main-div"}},[i("div",{staticClass:"vx-col w-full mb-base"},[i("vx-card",{attrs:{id:"card-id",title:e.$t("editPrivilege")}},[i("vx-card",{staticClass:"mt-5",attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[i("loading",{attrs:{active:e.isLoading,"can-cancel":!0},on:{"update:active":function(t){e.isLoading=t}}}),i("div",{staticClass:"vx-row mt-10"},[i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:e.$t("privilegeName"),name:"privilegeName","data-vv-validate-on":"blur"},model:{value:e.privilegeName,callback:function(t){e.privilegeName=t},expression:"privilegeName"}}),i("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("privilegeName")))])],1),i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:e.$t("privilegeDescription"),name:"privilegeDescription","data-vv-validate-on":"blur"},model:{value:e.privilegeDescription,callback:function(t){e.privilegeDescription=t},expression:"privilegeDescription"}}),i("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("privilegeDescription")))])],1),i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:e.$t("privilegeUrl"),name:"privilegeUrl","data-vv-validate-on":"blur"},model:{value:e.privilegeUrl,callback:function(t){e.privilegeUrl=t},expression:"privilegeUrl"}}),i("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("privilegeUrl")))])],1),i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:e.$t("method"),name:"method","data-vv-validate-on":"blur"},model:{value:e.method,callback:function(t){e.method=t},expression:"method"}}),i("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("method")))])],1),i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("br"),e.isGranted("editPrivilege")?i("vs-button",{staticClass:"mr-3 mb-2",attrs:{color:"success"},on:{click:e.editPrivilege}},[e._v(e._s(e.$t("update")))]):e._e()],1)])]),i("div",{staticClass:"vx-row"}),1!=e.registerButtonClicked||e.error?e._e():i("div",{staticClass:"loader-overlay"},[i("div",{staticClass:"loader"}),i("span",{staticClass:"text",domProps:{innerHTML:e._s(e.text)}})])],1)],1)],1)])},a=[],n=(i("41cb"),i("7bb1")),s=i("4a7a"),l=i.n(s),o=i("9062"),c=i.n(o),u={custom:{privilegeName:{required:"Please enter privilege Name",alpha:"privilege name must be character"},privilegeDescription:{required:"Please enter Privilege Description",alpha:"Privilege Description must be character"}}};n["a"].localize("en",u);var d={components:{"v-select":l.a,Loading:c.a},data:function(){return{privilegeName:"",privilegeDescription:"",privilegeUrl:"",method:"",registerButtonClicked:!1,id:this.$route.params.id,clicked:0,error:!1,isLoading:!1,privilegeId:this.$route.params.id,item:{}}},methods:{editPrivilege:function(){var e=this;this.$validator.validateAll().then((function(t){t&&e.$store.dispatch("PrivilegeModule/editPrivilege",{privilegeName:e.privilegeName,privilegeDescription:e.privilegeDescription,privilegeUrl:e.privilegeUrl,method:e.method,privilegeId:e.id,updatedBy:localStorage.getItem("userId")}).then((function(t){console.log(t.data),e.$vs.notify({title:e.$t("Add"),text:e.$t("Updated Successfully!"),iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.$vs.loading.close(),e.isGranted("viewPrivileges")&&e.$router.push({name:"viewPrivileges"})})).catch((function(t){e.$vs.loading.close()}))}))},populateForms:function(){this.privilegeName=this.getPrivilege.privilegeName,this.privilegeDescription=this.getPrivilege.privilegeDescription,this.privilegeUrl=this.getPrivilege.privilegeUrl,this.method=this.getPrivilege.method,this.privilegeId=this.getPrivilege.privilegeId}},computed:{getPrivilege:function(){return this.$store.getters["PrivilegeModule/getPrivilege"]}},created:function(){var e=this;this.$store.dispatch("PrivilegeModule/fetchPrivilege",this.id).then((function(){e.populateForms()}))}},v=d,p=i("2877"),h=Object(p["a"])(v,r,a,!1,null,"549267e7",null);t["default"]=h.exports},9062:function(e,t,i){!function(t,i){e.exports=i()}("undefined"!=typeof self&&self,(function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){"use strict";i.r(t);var r="undefined"!=typeof window?window.HTMLElement:Object,a={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(e){if(this.isActive&&e.target!==this.$el&&!this.$el.contains(e.target)){var t=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function n(e,t,i,r,a,n,s,l){var o,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),s?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=o):a&&(o=l?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(e,t){return o.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:c}}var s=n({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[t("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,l=n({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[t("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[t("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,o=n({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[t("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=n({name:"vue-loading",mixins:[a],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,r],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:s,Dots:l,Bars:o},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var e=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var t;e.$destroy(),void 0!==(t=e.$el).remove?t.remove():t.parentNode.removeChild(t)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(e){27===e.keyCode&&this.cancel()}},watch:{active:function(e){this.isActive=e},isActive:function(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:e.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":e.isFullPage},style:{zIndex:e.zIndex},attrs:{tabindex:"0","aria-busy":e.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:e.bgStyle,on:{click:function(t){return t.preventDefault(),e.cancel(t)}}}),i("div",{staticClass:"vld-icon"},[e._t("before"),e._t("default",[i(e.loader,{tag:"component",attrs:{color:e.color,width:e.width,height:e.height}})]),e._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,n={programmatic:!0},s=Object.assign({},t,r,n),l=new(e.extend(c))({el:document.createElement("div"),propsData:s}),o=Object.assign({},i,a);return Object.keys(o).map((function(e){l.$slots[e]=o[e]})),l}}};i(0),c.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u(e,t,i);e.$loading=r,e.prototype.$loading=r},t.default=c}]).default}))}}]);
//# sourceMappingURL=chunk-44e71894.dcaf108c.js.map