(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a611"],{baea:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vx-row",attrs:{id:"main-div"}},[i("div",{staticClass:"vx-col w-full mb-base"},[i("vx-card",{attrs:{id:"card-id",title:t.$t("uploadReceipt")}},[i("vx-card",{staticClass:"mt-10",attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[i("vx-card",{attrs:{title:t.$t("uploadReceipt"),"no-shadow":"","card-border":""}},[i("div",{staticClass:"vx-col sm:w-1/3 mt-5 w-full mb-6"},[0!=t.index2?i("span",{staticClass:"ml-4 bg-red"},[i("b",[t._v(t._s(t.$t("clickHereToAddMoreFiles")))])]):t._e(),i("form",{staticClass:"mt-8 vx-col mb-6 mr-0 ml-4 p-0 ",attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[i("input",{ref:"file",staticClass:"lg:w-2/3 mr-2 w-32",attrs:{type:"file",text:"Upload Image",name:"file"},on:{change:t.onSelect}})])]),t._l(t.index2,(function(e,a){return i("div",{key:a,staticClass:"vx-row"},[i("div",{staticClass:"vx-col sm:w-1/6 mt-5 w-full mb-6"},[i("img",{attrs:{src:t.images[a],height:"100px",width:"150px"}})]),i("div",{staticClass:"vx-col w-16 mt-8"},[i("span",{staticClass:"lg:p-0 mr-2",attrs:{id:"edit-icon"},on:{click:function(e){return t.removeRow(a)}}},[i("vs-avatar",{attrs:{color:"danger","icon-pack":"feather",icon:"icon-delete"}})],1)])])}))],2),i("br"),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full"},[i("vs-button",{staticClass:"mr-3 mb-2",on:{click:t.uploadReceipt}},[t._v(t._s(t.$t("upload")))])],1)])],1)],1)],1)])},s=[],l=i("c38f"),n=i.n(l),c=(i("0952"),i("4a7a")),o=i.n(c),r=i("7bb1"),d=(i("3022"),{custom:{}});r["a"].localize("en",d);var u={data:function(){return{rooms:[],description:[],uploadedFiles:[],file:"",images:[],index1:1,index2:0,image:""}},methods:{removeRow:function(t){this.index2--,this.uploadedFiles.splice(t,1),this.images.splice(t,1)},onSelect:function(){var t=this,e=this.$refs.file.files[0];this.file=e,this.uploadedFiles[this.index2]=e;new Image;var i=new FileReader,a=this;i.onload=function(e){a.images[t.index2++]=e.target.result},i.readAsDataURL(e),this.$refs.file.value=null},cancel:function(){this.$refs.file.value=null,this.image=""},addCustomer:function(){for(var t=this,e=0;e<this.index2;e++){var i=new FormData;i.append("uploadFile",this.uploadedFiles[e]),i.append("description",this.description[e]),i.append("customerId","2"),this.$http.post("/rent/documents",i).then((function(e){t.$vs.notify({title:t.$t("Add"),text:t.$t("addedSuccessfully"),iconPack:"feather",icon:"icon-alert-circle",color:"success"})})).catch((function(t){console.log(t)}))}}},components:{flatPickr:n.a,"v-select":o.a}},p=u,m=i("2877"),f=Object(m["a"])(p,a,s,!1,null,"df8900da",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d21a611.d4e4aba7.js.map