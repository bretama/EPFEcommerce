(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07050449"],{5355:function(t,e,s){"use strict";s("67ab")},"67ab":function(t,e,s){},"69ef":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{title:t.$t("allRoles")}},[s("div",{attrs:{id:"knowledge-base-page"}},[s("div",{staticClass:"knowledge-base-jumbotron"},[s("div",{staticClass:"knowledge-base-jumbotron-content lg:p-8 md:p-24 sm:p-16 py-8 rounded-lg mb-base"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"w-2/5"},[s("vs-input",{staticClass:"w-full no-icon-border mt-6",attrs:{placeholder:t.$t("seachRoleHint"),"icon-pack":"feather",icon:"icon-search",size:"large"},on:{keyup:function(e){return t.searchRoles()}},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),s("div",{staticClass:"w-1/6",attrs:{id:"dropdown"}},[s("vs-dropdown",{attrs:{"vs-custom-content":"","vs-trigger-click":""}},[s("div",{staticClass:"p-4 mt-6 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[s("span",{staticClass:"pl-4 pr-4"},[s("p",[t._v(t._s((t.currentPage-1)*t.perPage+1)+"-"+t._s(t.currentPage*t.perPage)+" of "+t._s(t.totalPage*t.perPage))])]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",[s("span",{on:{click:function(e){t.perPage=15,t.getAllRoles()}}},[t._v("15")])]),s("vs-dropdown-item",[s("span",{on:{click:function(e){t.perPage=25,t.getAllRoles()}}},[t._v("25")])]),s("vs-dropdown-item",[s("span",{on:{click:function(e){t.perPage=50,t.getAllRoles()}}},[t._v("50")])]),s("vs-dropdown-item",[s("span",{on:{click:function(e){t.perPage=75,t.getAllRoles()}}},[t._v("75")])])],1)],1)],1),s("div",{staticClass:"w-1/5 mt-8"},[t.isGranted("addRole")?s("vs-button",{staticClass:"small text-base",attrs:{"icon-pack":"feather",icon:"icon-plus",type:"gradient",color:"success"},on:{click:function(e){return e.preventDefault(),t.add.apply(null,arguments)}}},[t._v(t._s(t.$t("addRole")))]):t._e()],1),s("div",{staticClass:"w-1/6 ml-12 mt-6"})])])])]),s("vx-card",{attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[s("vs-table",{staticClass:"stripe",attrs:{hoverFlat:"","max-items":t.perPage,data:t.getRoles},on:{selected:t.goToDetail},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,o){return s("vs-tr",{key:o,attrs:{data:e}},[s("vs-td",{staticClass:"w-10"},[t._v(t._s(o+1+t.limit*(t.currentPage-1)))]),s("vs-td",{staticClass:"pr-4 w-1/4",attrs:{data:a[o].roleName}},[t._v(t._s(a[o].roleName))]),s("vs-td",{staticClass:"pr-4 w-1/4",attrs:{data:a[o].roleFullName}},[t._v(t._s(a[o].roleFullName))]),s("vs-td",{staticClass:"p-0",attrs:{data:a[o].id}},[t.isGranted("editRole")?s("span",{on:{click:function(e){return t.updateRole(a[o].id)}}},[s("vs-avatar",{attrs:{color:"lightGreen","icon-pack":"feather",icon:"icon-edit"}})],1):t._e()]),s("vs-td",{staticClass:"p-0",attrs:{data:a[o].id}},[s("ul",{staticClass:"switch-container"},[s("li",[t.isGranted("deleteRole")?s("span",{on:{click:function(e){t.preventTableClickAction=!0,t.openConfirm(a[o].id),t.increament++,t.decreament--}}},[s("vs-avatar",{attrs:{color:"danger","icon-pack":"feather",icon:"icon-delete"}})],1):t._e()])])])],1)}))}}])},[s("template",{slot:"thead"},[s("vs-th",{attrs:{"sort-key":"number"}},[t._v("#")]),s("vs-th",{attrs:{"sort-key":"roleName"}},[t._v(t._s(t.$t("roleName")))]),s("vs-th",{attrs:{"sort-key":"roleFullName"}},[t._v(t._s(t.$t("roleFullName")))]),s("vs-th",[t._v(t._s(t.$t("edit")))]),s("vs-th",[t._v(t._s(t.$t("delete")))])],1)],2),0!=t.increament?s("p",[t._v(".")]):t._e()],1),s("vs-pagination",{staticClass:"m-4",attrs:{total:t.totalPage},on:{change:t.getAllRoles},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},o=[],n={components:{},data:function(){return{dot:"",roles:[],selected:[],limit:15,total:0,searchRole:"",currentPage:1,status:[],swich:!0,roleStatus:"",updateStatus:!1,colorAlert:"primary",titleAlert:"Alert",activeConfirm:!1,valueInput:"",accepted:!1,id:"",confirm:"",increament:0,decreament:0,responseGeted:!1,currentItemView:"item-grid-view",knowledgeBaseSearchQuery:"",searchKey:"",kb:[],allRoles:[],perPage:20,totalPage:0,preventTableClickAction:!1}},methods:{getAllRoles:function(){var t=this,e={limit:this.perPage,page:this.currentPage};this.$store.dispatch("RoleModule/fetchRoles",e).then((function(e){t.totalPage=1,t.isLoading=!1})).catch((function(e){t.isLoading=!1}))},searchRoles:function(){var t=this;this.isLoading=!0,this.$http.get("/roles?searchKey="+this.searchKey).then((function(e){t.roles=e.data,t.isLoading=!1})).catch((function(e){t.isLoading=!1}))},openConfirm:function(t){this.id=t,this.$vs.dialog({type:"confirm",color:"warning",title:"Confirm",text:this.$t("deleteConfirmation"),accept:this.acceptAlert,acceptText:this.$t("Yes"),cancelText:this.$t("No")})},acceptAlert:function(){var t=this;this.$store.dispatch("RoleModule/deleteRole",this.id).then((function(e){t.$vs.notify({color:"success",title:t.$t("notificationStatus"),text:t.$t("deleteSuccess")}),t.getAllRoles()}))},add:function(){this.$router.push({name:"addRole"})},updateRole:function(t){this.$router.push({path:"/pages/edit-role/"+t})}},created:function(){this.getAllRoles()},computed:{getRoles:function(){return this.$store.getters["RoleModule/getRoles"]},getRole:function(){return this.$store.getters["RoleModule/getRole"]}}},r=n,i=(s("5355"),s("2877")),l=Object(i["a"])(r,a,o,!1,null,"82083952",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-07050449.69a2a391.js.map