(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ff5346"],{9062:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a="undefined"!=typeof window?window.HTMLElement:Object,n={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,i,a,n,r,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),a&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=s?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var o=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=r({name:"vue-loading",mixins:[n],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,a],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r={programmatic:!0},o=Object.assign({},e,a,r),s=new(t.extend(c))({el:document.createElement("div"),propsData:o}),l=Object.assign({},i,n);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};i(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=u(t,e,i);t.$loading=a,t.prototype.$loading=a},e.default=c}]).default}))},e7bf:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vx-row",attrs:{id:"main-div"}},[i("div",{staticClass:"vx-col w-full mb-base"},[i("vx-card",{attrs:{id:"card-id",title:t.$t("addRole")}},[i("vx-card",{staticClass:"mt-5",attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[i("loading",{attrs:{active:t.isLoading,"can-cancel":!0},on:{"update:active":function(e){t.isLoading=e}}}),i("div",{staticClass:"vx-row mt-10"},[i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:t.$t("roleName"),name:"roleName","data-vv-validate-on":"blur"},model:{value:t.roles.roleName,callback:function(e){t.$set(t.roles,"roleName",e)},expression:"roles.roleName"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("roleName")))])],1),i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:t.$t("roleFullName"),name:"roleFullName","data-vv-validate-on":"blur"},model:{value:t.roles.roleFullName,callback:function(e){t.$set(t.roles,"roleFullName",e)},expression:"roles.roleFullName"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("roleFullName")))])],1),i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("div",{staticClass:"vx-col w-full"},[i("br"),t.isGranted("addRole")?i("vs-button",{staticClass:"mr-3 mb-2",attrs:{color:"success"},on:{click:t.checkRoleIfNotExist}},[t._v(t._s(t.$t("save")))]):t._e()],1)])]),i("div",{staticClass:"vx-row"}),1!=t.registerButtonClicked||t.error?t._e():i("div",{staticClass:"loader-overlay"},[i("div",{staticClass:"loader"}),i("span",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}})])],1)],1)],1)])},n=[],r=(i("41cb"),i("7bb1")),o=i("4a7a"),s=i.n(o),l=i("9062"),c=i.n(l),u={custom:{roleName:{required:"Please enter role name",alpha:"Role name must be character"},roleFullName:{required:"Please enter role full name",alpha:"Role full name must be character"}}};r["a"].localize("en",u);var d={components:{"v-select":s.a,Loading:c.a},data:function(){return{roles:{roleName:"",roleFullName:""},registerButtonClicked:!1,clicked:0,error:!1,isLoading:!1}},methods:{resetValues:function(){this.roles.roleName="",this.roles.roleFullName="",this.registerButtonClicked=!1,this.clicked=0,this.error=!1,this.isLoading=!1},checkRoleIfNotExist:function(){var t=this;this.$store.dispatch("RoleModule/checkRole",this.roles.roleName).then((function(e){"Test role name exists"==e.data?t.checkRole="This role name already Exists":t.addRole()}))},addRole:function(){var t=this;this.$validator.validateAll().then((function(e){e&&(t.$vs.loading({color:t.colorLoading}),t.$store.dispatch("RoleModule/addRole",t.roles).then((function(){t.$vs.notify({title:t.$t("Add"),text:t.$t("Registered Successfully!"),iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(e){t.$vs.loading.close(),t.$vs.notify({title:t.$t("Add"),text:t.$t("Something went wrong!"),iconPack:"feather",icon:"icon-alert-circle",color:"danger"})})))}))}},updated:function(){""==this.roleName&&(this.checkRole="")}},f=d,h=i("2877"),m=Object(h["a"])(f,a,n,!1,null,"31a0f86f",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-61ff5346.9b379c5e.js.map