(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766dfcf7"],{2325:function(t,e,i){},"325b":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:t.$t("orderTimeLimits")}},[i("div",{attrs:{id:"knowledge-base-page"}},[i("div",{staticClass:"knowledge-base-jumbotron"},[i("div",{staticClass:"knowledge-base-jumbotron-content lg:p-8 md:p-24 sm:p-16 py-8 rounded-lg mb-base"})])]),i("vx-card",{attrs:{id:"internal-card",title:"","no-shadow":"","card-border":""}},[i("vs-table",{staticClass:"stripe",attrs:{hoverFlat:"","max-items":t.perPage,data:t.orderTimeLimits},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,a){return i("vs-tr",{key:a,attrs:{data:e}},[i("vs-td",{staticClass:"w-10"},[t._v(t._s(a+1+t.perPage*(t.currentPage-1)))]),i("vs-td",{staticClass:"pr-4 w-1/4",attrs:{data:r[a].timeLimit}},[t._v(t._s(r[a].timeLimit))]),i("vs-td",{staticClass:"p-0",attrs:{data:r[a].orderTimeLimitId}},[i("span",{on:{click:function(e){return t.update(r[a].orderTimeLimitId)}}},[i("vs-avatar",{attrs:{color:"lightGreen","icon-pack":"feather",icon:"icon-edit"}})],1)]),i("vs-td",{staticClass:"p-0",attrs:{data:r[a].orderTimeLimitId}},[i("ul",{staticClass:"switch-container"},[i("li",[i("span",{on:{click:function(e){t.preventTableClickAction=!0,t.openConfirm(r[a].orderTimeLimitId)}}},[i("vs-avatar",{attrs:{color:"danger","icon-pack":"feather",icon:"icon-delete"}})],1)])])])],1)}))}}])},[i("template",{slot:"thead"},[i("vs-th",{attrs:{"sort-key":"number"}},[t._v("#")]),i("vs-th",{attrs:{"sort-key":"orderTimeLimit"}},[t._v(t._s(t.$t("orderTimeLimit")))]),i("vs-th",[t._v(t._s(t.$t("edit")))]),i("vs-th",[t._v(t._s(t.$t("delete")))])],1)],2)],1)],1)},a=[],s={components:{},data:function(){return{orderTimeLimits:[],orderTimeLimitId:"",searchKey:"",perPage:50,page:1,currentPage:1,totalPage:0,preventTableClickAction:!1}},methods:{getOrderTimeLimits:function(){var t=this;this.$http.get("/order-time-limit",{params:{page:this.currentPage,limit:this.perPage,searchKey:this.searchKey}}).then((function(e){t.orderTimeLimits.push(e.data),t.isLoading=!1})).catch((function(e){t.isLoading=!1}))},openConfirm:function(t){this.orderTimeLimitId=t,this.$vs.dialog({type:"confirm",color:"warning",title:"Confirm",text:this.$t("deleteConfirmation"),accept:this.acceptAlert,acceptText:this.$t("Yes"),cancelText:this.$t("No")})},acceptAlert:function(){var t=this;this.$http.delete("/order-time-limit/"+this.orderTimeLimitId,{}).then((function(e){t.$vs.notify({color:"success",title:"Status",text:"Country Deleted"}),t.getOrderTimeLimits()}))},add:function(){this.$router.push({path:"/pages/add-order-time-limit"})},update:function(t){this.$router.push({path:"/pages/edit-order-time-limit/"+t})}},created:function(){this.getOrderTimeLimits()}},n=s,o=(i("a061"),i("2877")),c=Object(o["a"])(n,r,a,!1,null,"374b9b62",null);e["default"]=c.exports},a061:function(t,e,i){"use strict";i("2325")}}]);
//# sourceMappingURL=chunk-766dfcf7.793e4bde.js.map