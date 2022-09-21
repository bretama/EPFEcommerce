(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a67e6d2"],{"2e7c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vx-row",attrs:{id:"main-div"}},[a("div",{staticClass:"vx-col w-full mb-base"},[a("vx-card",{attrs:{id:"card-id",title:e.$t("updateUser")}},[a("vx-card",{staticClass:"mt-10",attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[a("div",{staticClass:"vx-row mt-10"},[a("loading",{attrs:{active:e.isLoading,"can-cancel":!0},on:{"update:active":function(t){e.isLoading=t}}}),a("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full",attrs:{label:e.$t("firstName"),name:"firstName","data-vv-validate-on":"blur"},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("firstName")))])],1),a("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full",attrs:{label:e.$t("fatherName"),name:"lastName","data-vv-validate-on":"blur"},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("lastName")))])],1),a("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha",expression:"'required|alpha'"}],staticClass:"w-full",attrs:{label:e.$t("grandFatherName"),name:"grandFatherName","data-vv-validate-on":"blur"},model:{value:e.grandFatherName,callback:function(t){e.grandFatherName=t},expression:"grandFatherName"}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("grandFatherName")))])],1)],1),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col sm:w-1/6 w-full mb-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:{regex:/^[' '][9]\d{8}$/},expression:"{regex: (/^[' '][9]\\d{8}$/) }"}],staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-country-code","icon-no-border":"",label:e.$t("mobilePhone"),name:"mobilePhone","data-vv-validate-on":"blur"},on:{keyup:e.space},model:{value:e.mobilePhone,callback:function(t){e.mobilePhone=t},expression:"mobilePhone"}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("mobilePhone")))]),a("span",{attrs:{id:"mobilePhone"}},[e._v(e._s(e.validateMobilePhone))])],1),a("div",{staticClass:"vx-col sm:w-1/6 w-full mb-2"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{label:e.$t("Email"),name:"email","data-vv-validate-on":"blur"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateUser.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))])],1),a("div",{staticClass:"vx-col w-1/6 mb-6 mr-4 ml-1"},[a("span",{staticClass:"ml-2"},[e._v(e._s(e.$t("role")))]),a("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"validate",rawName:"v-validate:role",value:"required",expression:"'required'",arg:"role"}],staticClass:"w-full",class:{danger:e.errors.has("role")},attrs:{options:e.roles,name:"role"},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("role"),expression:"errors.has('role')"}],staticClass:"text-danger"},[e._v(e._s(e.errors.first("role")))])],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-button",{staticClass:"mr-3 mb-2",on:{click:e.updateUser}},[e._v(e._s(e.$t("Update")))])],1)]),a("p")])],1)],1)])},r=[],s=a("7bb1"),n=a("9062"),o=a.n(n),l=(a("e40d"),a("4a7a")),u=a.n(l),c={custom:{firstName:{required:"First name is required",alpha:"First name must be characters"},lastName:{required:"Last name is required",alpha:"Last name must be characters"},grandFatherName:{required:"Grand fahter is required",alpha:"Grand Father name must be characters"},mobilePhone:{regex:"Invalid phone number format"},password:{required:"Password is required"},confirm_password:{required:"Password is required",alpha:"password must contain alphabets"},email:{required:"Email is required",email:"Please enter valid email"},company_name:{required:"company name is required",alpha_spaces:"company must be characters"},licence_number:{required:"licence number is required",alpha_dash:"Tin Number can contain characters, dashes, underscores and numbers"},tin_number:{required:"Tin Number is required",alpha_dash:"Tin Number can contain characters, dashes, underscores and numbers"}}};s["a"].localize("en",c);var d={components:{Loading:o.a,"v-select":u.a},data:function(){return{users:[],id:this.$route.params.id,firstName:"",lastName:"",grandFatherName:"",mobilePhone:"",email:"",role:"",roles:["Admin","Customer","Finance"],validateMobilePhone:"",isLoading:!1}},methods:{space:function(){var e=this.mobilePhone;this.mobilePhone.length<2&&" "!=this.mobilePhone&&(this.mobilePhone=" "+e),""==this.mobilePhone?this.validateMobilePhone="Please enter mobile phone":this.validateMobilePhone="",this.mobilePhone.length>10&&(this.mobilePhone=this.mobilePhone.substring(0,this.mobilePhone.length-1))},updateUser:function(){var e=this;""==this.mobilePhone&&(this.validateMobilePhone="Mobile phone is required"),this.$validator.validateAll().then((function(t){t&&""!=e.mobilePhone&&(e.isLoading=!0,e.$http.put("/accounts/"+e.id,{firstName:e.firstName,lastName:e.lastName,grandFatherName:e.grandFatherName,mobilePhone:"+251"+e.mobilePhone.substr(1),email:e.email,userType:e.role}).then((function(t){e.isLoading=!1,e.$vs.notify({title:e.$t("Update"),text:e.$t("Updated Successfully!"),iconPack:"feather",icon:"icon-alert-circle",color:"success"}),e.$router.push({path:"/pages/view-customer"})})).catch((function(t){e.isLoading=!1})))}))},getUserDetail:function(){var e=this;this.$http.get("/accounts/"+this.id,{}).then((function(t){e.users=t.data,e.firstName=e.users.firstName,e.lastName=e.users.lastName,e.grandFatherName=e.users.grandFatherName,e.mobilePhone=" "+e.users.mobilePhone.substr(4),e.email=e.users.email,e.role=e.users.userType,e.isLoading=!1})).catch((function(t){e.isLoading=!1}))}},created:function(){this.$store.getters["user/getUser"](this.id)?(this.users=this.$store.getters["user/getUser"](this.id),this.firstName=this.users.firstName,this.lastName=this.users.lastName,this.grandFatherName=this.users.grandFatherName,this.mobilePhone=" "+this.users.mobilePhone.substr(4),this.email=this.users.email,this.role=this.users.userType):this.getUserDetail()}},h=d,m=(a("94c6"),a("2877")),v=Object(m["a"])(h,i,r,!1,null,"093fe20e",null);t["default"]=v.exports},9062:function(e,t,a){!function(t,a){e.exports=a()}("undefined"!=typeof self&&self,(function(){return function(e){var t={};function a(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(e){if(this.isActive&&e.target!==this.$el&&!this.$el.contains(e.target)){var t=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||t&&t.contains(e.target))&&(e.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function s(e,t,a,i,r,s,n,o){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=a,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},u._ssrRegister=l):r&&(l=o?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}var n=s({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[t("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),t("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=s({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[t("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[t("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),t("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[t("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=s({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[t("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=s({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,i],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:n,Dots:o,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var e=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var t;e.$destroy(),void 0!==(t=e.$el).remove?t.remove():t.parentNode.removeChild(t)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(e){27===e.keyCode&&this.cancel()}},watch:{active:function(e){this.isActive=e},isActive:function(e){e?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:e.transition}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":e.isFullPage},style:{zIndex:e.zIndex},attrs:{tabindex:"0","aria-busy":e.isActive,"aria-label":"Loading"}},[a("div",{staticClass:"vld-background",style:e.bgStyle,on:{click:function(t){return t.preventDefault(),e.cancel(t)}}}),a("div",{staticClass:"vld-icon"},[e._t("before"),e._t("default",[a(e.loader,{tag:"component",attrs:{color:e.color,width:e.width,height:e.height}})]),e._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,s={programmatic:!0},n=Object.assign({},t,i,s),o=new(e.extend(u))({el:document.createElement("div"),propsData:n}),l=Object.assign({},a,r);return Object.keys(l).map((function(e){o.$slots[e]=l[e]})),o}}};a(0),u.install=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=c(e,t,a);e.$loading=i,e.prototype.$loading=i},t.default=u}]).default}))},"94c6":function(e,t,a){"use strict";a("a81e")},a81e:function(e,t,a){},e40d:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2a67e6d2.f1fa0f30.js.map