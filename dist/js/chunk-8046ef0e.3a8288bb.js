(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8046ef0e"],{9062:function(t,e,i){!function(e,i){t.exports=i()}("undefined"!=typeof self&&self,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,a={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function r(t,e,i,n,a,r,s,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):a&&(l=o?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}var s=r({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=r({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=r({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,c=r({name:"vue-loading",mixins:[a],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:s,Dots:o,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r={programmatic:!0},s=Object.assign({},e,n,r),o=new(t.extend(c))({el:document.createElement("div"),propsData:s}),l=Object.assign({},i,a);return Object.keys(l).map((function(t){o.$slots[t]=l[t]})),o}}};i(0),c.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=u(t,e,i);t.$loading=n,t.prototype.$loading=n},e.default=c}]).default}))},d721:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vx-row",attrs:{id:"main-div"}},[i("div",{staticClass:"vx-col w-full mb-base"},[i("vx-card",{attrs:{id:"card-id",title:""}},[i("vs-tabs",{attrs:{alignment:"fixed"}},[i("vs-tab",{attrs:{label:t.$t("addInventoryItem")}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"})]),i("vx-card",{staticClass:"mt-10",attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[i("loading",{attrs:{active:t.isLoading,"can-cancel":!0},on:{"update:active":function(e){t.isLoading=e}}}),i("div",{staticClass:"vx-row w-6/7 mt-10"},[i("div"),i("div",{staticClass:"vx-col sm:w-1/4 w-full mb-6"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{label:t.$t("genericName"),name:"genericName","data-vv-validate-on":"blur"},model:{value:t.inventoryGenericName,callback:function(e){t.inventoryGenericName=e},expression:"inventoryGenericName"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("genericName")))])],1),i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:t.$t("dosageForm"),"data-vv-validate-on":"blur"},model:{value:t.dosageForm,callback:function(e){t.dosageForm=e},expression:"dosageForm"}})],1),i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:t.$t("Strength"),"data-vv-validate-on":"blur"},model:{value:t.strength,callback:function(e){t.strength=e},expression:"strength"}})],1),i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:t.$t("Volume"),"data-vv-validate-on":"blur"},model:{value:t.volume,callback:function(e){t.volume=e},expression:"volume"}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:t.$t("brandName"),name:"brandName","data-vv-validate-on":"blur"},model:{value:t.inventoryBrandName,callback:function(e){t.inventoryBrandName=e},expression:"inventoryBrandName"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("brandName")))])],1),i("div",{staticClass:"vx-col w-48 mb-6 mr-4"},[i("span",{staticClass:"ml-4"},[t._v(t._s(t.$t("Unit")))]),i("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"validate",rawName:"v-validate:measuringUnit",value:"required",expression:"'required'",arg:"measuringUnit"}],staticClass:"w-full",class:{danger:t.errors.has("measuringUnit")},attrs:{options:t.measuringUnits,name:"measuringUnit"},model:{value:t.measuringUnit,callback:function(e){t.measuringUnit=e},expression:"measuringUnit"}}),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("measuringUnit"),expression:"errors.has('measuringUnit')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("measuringUnit")))])],1),i("div",{staticClass:"vx-col w-2/5 mb-2"},[i("span",{staticClass:"ml-4"},[t._v(t._s(t.$t("Category")))]),i("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{danger:t.errors.has("inventoryType")},attrs:{options:t.categories.map((function(t){return t.inventoryType})),name:"inventoryType"},model:{value:t.inventoryType,callback:function(e){t.inventoryType=e},expression:"inventoryType"}},[t._v(">")]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("inventoryType"),expression:"errors.has('inventoryType')"}],staticClass:"text-danger"},[t._v(t._s(t.errors.first("inventoryType")))])],1)]),i("div",{staticClass:"vx-row mb-10"},[i("div",{staticClass:"vx-col sm:w-1/6 w-full mb-6"},[i("vs-input",{staticClass:"w-full",attrs:{label:t.$t("subCategory"),"data-vv-validate-on":"blur"},model:{value:t.subCategory,callback:function(e){t.subCategory=e},expression:"subCategory"}})],1),i("div",{staticClass:"vx-col w-48 mb-6"},[i("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|integer",expression:"'required|integer'"}],staticClass:"w-full",attrs:{label:t.$t("minimumQuantity"),name:"minimumStockQuantity","data-vv-validate-on":"blur"},model:{value:t.minimumStockQuantity,callback:function(e){t.minimumStockQuantity=e},expression:"minimumStockQuantity"}}),i("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("minimumStockQuantity")))])],1),i("form",{staticClass:"mt-8 vx-col mb-6 mr-0 ml-4 p-0 ",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[i("input",{ref:"file",staticClass:"lg:w-2/3 mr-2 w-32",attrs:{type:"file",text:"Upload Image",name:"file"},on:{change:t.onSelect}}),i("span",{on:{click:t.cancel}},[i("feather-icon",{attrs:{icon:"XCircleIcon",svgClasses:"h-4 w-4"}})],1)]),""!=t.image?i("div",{staticClass:"vx-col mb-6"},[i("img",{attrs:{src:t.image,height:"100px",width:"150px"}})]):t._e()]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full"},[i("vs-button",{staticClass:"mr-3 mb-2",on:{click:t.addInventory}},[t._v(t._s(t.$t("Add")))])],1)])],1)],1),i("vs-tab",{attrs:{label:t.$t("inventoryFile")}},[i("vx-card",{attrs:{id:"card-id",title:""}},[i("div",{staticClass:"vx-row"},[i("form",{staticClass:"mt-8 vx-col mb-6 mr-0 ml-4 p-0 ",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[i("input",{ref:"inventoryFile",staticClass:"mr-2 w-64",attrs:{type:"file",text:"Upload Image",name:"inventoryFile"},on:{change:t.onSelectText}}),i("span",{on:{click:t.cancelText}},[i("feather-icon",{attrs:{icon:"XCircleIcon",svgClasses:"h-4 w-4"}})],1)]),i("div",{staticClass:"vx-col w-full"},[i("vs-button",{staticClass:"mr-3 mb-2 mt-2",on:{click:t.addInventoryFile}},[t._v(t._s(t.$t("Import")))])],1)])])],1)],1)],1)],1)])},a=[],r=(i("7f7f"),i("96cf"),i("1da1")),s=i("4a7a"),o=i.n(s),l=(i("dd10"),i("7bb1")),c=i("9062"),u=i.n(c),d=(i("e40d"),{custom:{genericName:{required:"Please enter generic name",alpha:"Generic Name must be character"},brandName:{required:"Please enter brand name",alpha:"Brand Name must be character"},inventoryType:{required:"Please enter category",alpha:"Inventory Type must be character"},measuringUnit:{required:"Please enter unit",alpha:"Unit must be character"},subCategory:{required:"Please enter sub category"},volume:{required:"Please enter volume"},strength:{required:"Please enter strength"},minimumStockQuantity:{required:"Please Enter quantity",integer:"please Enter Integer"},dosageForm:{required:"Please Dosage Form form"}}});l["a"].localize("en",d);var m={components:{"v-select":o.a,Loading:u.a},data:function(){return{inventoryGenericName:[],inventoryBrandName:[],inventoryType:"",measuringUnit:"",subCategory:"",dosageForm:"",strength:"",volume:"",minimumStockQuantity:"",categories:[],measuringUnits:["Number","ml","mg"],file:"",inventoryFile:"",image:"",textImage:"",isLoading:!1}},methods:{getCategories:function(){var t=this;this.$http.get("/category",{params:{limit:1e9}}).then((function(e){t.categories=e.data})).catch((function(e){t.isLoading=!1}))},onSelectText:function(){var t=this.$refs.inventoryFile.files[0];this.inventoryFile=t;new Image;var e=new FileReader,i=this;e.onload=function(t){i.textImage=t.target.result},e.readAsDataURL(t)},onSelect:function(){var t=this.$refs.file.files[0];this.file=t;new Image;var e=new FileReader,i=this;e.onload=function(t){i.image=t.target.result},e.readAsDataURL(t)},cancel:function(){this.$refs.file.value=null,this.image=""},cancelText:function(){this.$refs.inventoryFile.value=null,this.textImage=""},addInventoryFile:function(){var t=this,e=new FormData;""!=this.inventoryFile&&e.append("importExcel",this.inventoryFile),this.isLoading=!0,this.$http.post("/inventory/import",e).then((function(e){t.isLoading=!1,t.$vs.notify({title:t.$t("Add"),text:t.$t("importedSuccessfully"),iconPack:"feather",icon:"icon-alert-circle",color:"success"}),t.$router.push({path:"/pages/view-inventory"})})).catch((function(e){t.isLoading=!1}))},addInventory:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("file"+this.file),e=new FormData,""!=this.file&&e.append("uploadImage",this.file),e.append("inventoryGenericName",this.inventoryGenericName),e.append("inventoryBrandName",this.inventoryBrandName),e.append("inventoryType",this.inventoryType),e.append("measuringUnit",this.measuringUnit),e.append("subCategory",this.subCategory),e.append("dosageForm",this.dosageForm),e.append("strength",this.strength),e.append("volume",this.volume),e.append("minimumStockQuantity",this.minimumStockQuantity),this.$validator.validateAll().then((function(t){t&&(i.isLoading=!0,i.$http.post("/inventory",e).then((function(t){i.isLoading=!1,i.$vs.notify({title:i.$t("Add"),text:i.$t("addedSuccessfully"),iconPack:"feather",icon:"icon-alert-circle",color:"success",time:6e3}),i.$router.push({path:"/pages/view-inventory"})})),i.$router.push({path:"/pages/view-inventory"}))})).catch((function(t){i.isLoading=!1}));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fileChange:function(t){this.files.inventory,updateInventory,t[0],t[0].name},upload:function(){axios({method:"POST",url:"http://localhost:3000",data:this.files}).then((function(t){console.dir(t.data)}),(function(t){console.error(t)}))},navigateToImportText:function(){this.$router.push({path:"/pages/import-text"})}},created:function(){this.getCategories()}},v=m,p=i("2877"),A=Object(p["a"])(v,n,a,!1,null,"66688b6e",null);e["default"]=A.exports},dd10:function(t,e,i){"use strict";e["a"]=["Antiprotozoals","Antiinfective","ARV_MEDICINES","ANTIVIRALS","BLOOD PRODUCTS AND MEDICINES AFFECTING THE BLOOD","DISORDERS AND CONTRACCEPTIVES","MEDICINES USED IN MUSCULO SKELETAL AND JOINT DISEASES","RESPIRATORY MEDICINES","CENTRAL NERVOUS SYSTEM MEDICINES","OPHTHALMIC AGENTS","EAR, NOSE AND THROAT PREPARATIONS","ANTIDOTES AND OTHER SUBSTANCES","DERMATOLOGICAL AGENTS","ANTI CANCER MEDICINES AND ADJUVANTS","GASTROINTESTINAL MEDICINES","TNF inhibitor","CARDIOVASCULAR MEDICINES","LIST OF REGULAR MEDICAL SUPPLIES","Antiseptic","VITAMINS","Urological and Related Medicines","MEDICINES USED IN BPH","Gastro intestinal medicine","ANXIOLYTIC","OBSTETRIC AND GYNAECOLOGICAL MEDICATIONS","Dermatology","MEDICINES FOR","CAPITAL  MEDICAL EQUIPMENT","CAPITAL  MEDICAL EQUIPMENT","IMMUNOLOGICAL PREPARATIONS","MALARIA PHARMACEUTICALS","MALARIA PHARMACEUTICALS","Anti-infective","MEDICINES USED IN ANAESTHESIA","TUBERCULOSIS DIAGNOSTICS & LABORATORY  REAGENTS","Nucleic Acid Synthesis Inhibitors [MoA],Nucleoside Metabolic Inhibitor [EPC]","Interleukin 2 Receptor Antagonists [MoA]","VACCINES","Retinoid [EPC],Retinoids [Chemical/Ingredient]","Antinfective","Antineoplastic","Anihypertensive agent","Muskuleskeletal agents","Endocrine","Stimulant","Calcium regulator","Anti diabetis","TB MEDICAL SUPPLIES","Antifungal Agent","MEDICAL  IMAGING  SUPPLIES  AND  CHEMICALS","CHEMICALS AND STAINS","ANTI-SEPTICS","Dietary supplement","Antiplatelet Agent","Calcimimetic"," Agent","CLINICAL CHEMISTRY REAGENTS","Antilipemic Agent, Bile Acid Sequestrant","Contraceptive","FAMILY PLANNING CONTRACEPTIVES","Kidny transplant preservation solution","Vitamines","Low Molecular Weight Heparin","HEMATOLOGY CLOSED  SYSTEM  REAGENTS","GASTROESOPHAGEAL REFLUX","NONSTEROIDAL ANTI INFILAMATORY DRUG","ANTI INFECTION","Anti-infective/Anthelmintic/Antifilariasis","Radio-pharmaceuticals","PEDIATRIC  ANTI-TUBERCULOSIS MEDICINES","TBL PHARMACEUTICALS","ANTI-FUNGAL","ANTI-NEOPLASTIC AND ADJUVANTS","Central Nurvious syetm","MEDICINES USED IN ENDOCRINEDISORDERS AND CONTRACCEPTIVES","Antidote, Hypoglycemia & Diagnostic Agent","Steroidal Anti-inflammatory","Vitamines and Minerals","MEDICNE FOR FLUID-ELECTROLYTE IMBALANCE","AGENT","DERMATOLOGICAL AGENT","RADIOGRAPHIC CONTRAST AGENT","LABORATORY SUPPLIES","DISORDERS","Local/Topical Anesthetics","DISORDERS","Anti fungal","GASTROINTESTINAL MEDICINE","GASTROINTESTINAL /FLUID-ELECTROLYTE SUPPLEMENT","GASTRO INTESTINAL ANTI-INFLAMATORY AGENT","HEMORRHAGIC CYSTITIS INHIBITOR","MEDICIN USED IN INDOCRINE/MALE SEX HORMONE PREPATATIONS AND ITS ANTAGONISTS","DISORDERS /Hypoglycemic Agent","ANTITHYROID DRUGS","Oxytocic/ ergot alkaloids","ANALGESIC, TOPICAL","STEROIDAL ANTI-INFLAMATORY AGENTS","INOTROPIC","MATERNAL HEALTH MEDICINES","ANTINEOPLASTIC","VACCINE ACCESSORIES","ANALEPTIC/ CNS stimulant","ANTI-LEPROSY  MEDICINES","ANTIHELMINTICS","SMOKING DETERRENT","ANTIPROTOZOALS","ANTIDIARRHEAL","Dermatological","Anti-epileptic Agent","Urinary Tract Anti-spasmodics","Opioid Agonists","ENDOCRINE-METABOLIC AGENT","GRANULOCYTE COLONY STIMULATING FACTOR","HEMORRHEOLOGIC AGENT (xanthine)","[EPC],Decreased Central Nervous System Disorganized Electrical Activity [PE],Cytochrome P450 1A2 Inducers [MoA],Cytochrome P450 2B6 Inducers [MoA],Cytochrome P450 2C8 Inducers [MoA],Cytochrome P450 2C19 Inducers [MoA],Cytochrome P450 2D6 Inducers [MoA],Cytochrome P450 3A Inducers [MoA],Cytochrome P450 2C9 Inducers [MoA]","Gastrointestinal","Nutrition","Urinary Alkalinizer","Antihyperthyroid","Electrolyte Supplement, Oral","Antilipemic Agent, HMG-CoA Reductase Inhibitor","Antihypertensive","Neuropathic Pain Agent","Antimalaria","Testosterone replacement therapy","Antidiarrheal","Miscellaneous ocular agents","ANTIHEMOPHILIC AGENT","ELECTROLYTE REPLACEMENT THERAPY","CALCIUM REGULATOR","ANTICOAGULANT","Neuromuscular Blocking Agent","ANESTHETIC","RESPIRATORY MEDICINE","SEROLOGICAL AND IMMUNOASSAY","ELECTROLYE MODIFIERS","IMMUNOSUPPRESSENT","MEDICINES USED IN ENDOCRINE","CORRECTING WATER ELECTROLYTE AND ACID- BASE DISTURBANCES","NASAL MOISTURIZATION","MUSCULO SKELETAL ","ANTI MALARIAL","ANTI INFECTIVES","OPPORTUNISTIC INFECTION MEDICINES","LOCAL ANESTESIA","THERAPEUTIC FOOD SUPPLEMENT","RESPARATORY MEDICINE","BLOOD PRODUCTS & MEDICINES AFFECTING THE BLOOD","ENDOCRINE DISORDERS MEDICINES","ANTI VIRAL AGENT","DEFICIENCY DEASES","ANTI NEOPLASTIC AGENT","TREATMENT OF HEADACHE"]},e40d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-8046ef0e.3a8288bb.js.map