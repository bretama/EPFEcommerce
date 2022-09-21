<template>
  <vx-card>
    <div class="mt-2">
      <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>
      <vs-tabs alignment="fixed">

        <!-- ------------------------------------------------------------------UnPaid Orders -->
        <vs-tab :label="$t('UnPaid')" @click="getUnPaidOrders()">
          <vx-card id="internal-card" title no-shadow card-border>
            <div>
              <vs-table stripe class="w-full ml-auto" v-model="selected" :max-items="perPage" :data="UnPaidOrders">
                <template slot="header">
                  <div>
                    <vs-dropdown class="mb-1" vs-custom-content vs-trigger-click>
                      <div
                        class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">
                          <p>{{(currentPage-1)*perPage+1}}-{{currentPage*perPage}} of {{totalPage*perPage}}</p>
                        </span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                      </div>
                      <vs-dropdown-menu>
                        <vs-dropdown-item>
                          <span @click="setPageLimitUnPaid(10)">10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitUnPaid(20)">20</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitUnPaid(30)">30</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitUnPaid(40)">40</span>
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                  <div id="search" class="float-right">
                    <vs-input @keypress.enter="getUnPaidOrders()" icon="icon-search" icon-pack="feather"
                      class="w-full mx-2 input-rounded-full no-icon-border" v-model="orderNumber"
                      :placeholder="$t('searchHere')" />
                  </div>
                </template>
                <template slot="thead">
                  <vs-th>#</vs-th>
                  <vs-th sort-key="orderNumber">{{$t('orderNumber')}}</vs-th>
                  <vs-th sort-key="fullName">{{$t('User')}}</vs-th>
                  <vs-th sort-key="companyName">{{$t('Company')}}</vs-th>
                  <vs-th sort-key="deliveryLocation">{{$t('deliveryLocation')}}</vs-th>
                  <vs-th sort-key="totalPrice">{{$t('totalPrice')}}</vs-th>


                  <vs-th>{{$t('detail')}}</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="py-0 text-left" :data="indextr">{{indextr+1}}</vs-td>
                    <vs-td class="py-0 text-left" :data="data[indextr].orderNumber">{{data[indextr].orderNumber}}
                    </vs-td>

                    <vs-td class="py-0" :data="data[indextr].fullName">{{data[indextr].fullName}}</vs-td>

                    <vs-td class="py-0" :data="data[indextr].companyName">{{data[indextr].companyName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-if="data[indextr].siteName!=null">
                      {{data[indextr].siteName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-else>{{data[indextr].deliveryAddress}}
                    </vs-td>
                    <vs-td class="py-0" :data="data[indextr].totalPrice">
                      {{data[indextr].totalPrice.toLocaleString('en-US')}} ETB</vs-td>

                    <vs-td class="py-0" :data="data[indextr].orderId">
                      <vs-avatar color="warning" size="small" icon-pack="feather" icon="icon-chevrons-right"
                        @click="navigateToDetail(data[indextr].orderId)" />
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <vs-pagination class="m-4" :total="totalPage" v-model="currentPage" @change="getPaidOrders()">
              </vs-pagination>
            </div>
          </vx-card>
        </vs-tab>





        <vs-tab :label="$t('Paid')" @click="getPaidOrders()">
          <vx-card id="internal-card" title no-shadow card-border>
            <div>
              <vs-table stripe class="w-full ml-auto" v-model="selected" :max-items="perPage" :data="paidOrders">
                <template slot="header">
                  <div>
                    <vs-dropdown class="mb-1" vs-custom-content vs-trigger-click>
                      <div
                        class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">
                          <p>{{(currentPage-1)*perPage+1}}-{{currentPage*perPage}} of {{totalPage*perPage}}</p>
                        </span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                      </div>
                      <vs-dropdown-menu>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(10)">10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(20)">20</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(30)">30</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(40)">40</span>
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                  <div id="search" class="float-right">
                    <vs-input @keypress.enter="getPaidOrders()" icon="icon-search" icon-pack="feather"
                      class="w-full mx-2 input-rounded-full no-icon-border" v-model="orderNumber"
                      :placeholder="$t('searchHere')" />
                  </div>
                </template>
                <template slot="thead">
                  <vs-th>#</vs-th>
                  <vs-th sort-key="orderNumber">{{$t('orderNumber')}}</vs-th>
                  <vs-th sort-key="fullName">{{$t('User')}}</vs-th>
                  <vs-th sort-key="companyName">{{$t('Company')}}</vs-th>
                  <vs-th sort-key="deliveryLocation">{{$t('deliveryLocation')}}</vs-th>
                  <vs-th sort-key="totalPrice">{{$t('totalPrice')}}</vs-th>


                  <vs-th>{{$t('detail')}}</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="py-0 text-left" :data="indextr">{{indextr+1}}</vs-td>
                    <vs-td class="py-0 text-left" :data="data[indextr].orderNumber">{{data[indextr].orderNumber}}
                    </vs-td>

                    <vs-td class="py-0" :data="data[indextr].fullName">{{data[indextr].fullName}}</vs-td>

                    <vs-td class="py-0" :data="data[indextr].companyName">{{data[indextr].companyName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-if="data[indextr].siteName!=null">
                      {{data[indextr].siteName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-else>{{data[indextr].deliveryAddress}}
                    </vs-td>
                    <vs-td class="py-0" :data="data[indextr].totalPrice">
                      {{data[indextr].totalPrice.toLocaleString('en-US')}}</vs-td>

                    <vs-td class="py-0" :data="data[indextr].orderId">
                      <vs-avatar color="warning" size="small" icon-pack="feather" icon="icon-chevrons-right"
                        @click="navigateToDetail(data[indextr].orderId)" />
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <vs-pagination class="m-4" :total="totalPage" v-model="currentPage" @change="getPaidOrders()">
              </vs-pagination>
            </div>
          </vx-card>
        </vs-tab>

        <!-- =======================================PostPaid====================================================== -->
        <vs-tab :label="$t('PostPaid')" @click="getPostPaidOrders()">
          <vx-card id="internal-card" title no-shadow card-border>
            <div>
              <vs-table stripe class="w-full ml-auto" v-model="selected" :max-items="perPage" :data="postPaidOrders">
                <template slot="header">
                  <div>
                    <vs-dropdown class="mb-1" vs-custom-content vs-trigger-click>
                      <div
                        class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">
                          <p>{{(currentPage-1)*perPage+1}}-{{currentPage*perPage}} of {{totalPage*perPage}}</p>
                        </span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                      </div>
                      <vs-dropdown-menu>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(10)">10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(20)">20</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(30)">30</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(40)">40</span>
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                  <div id="search" class="float-right">
                    <vs-input @keypress.enter="getPostPaidOrders()" icon="icon-search" icon-pack="feather"
                      class="w-full mx-2 input-rounded-full no-icon-border" v-model="orderNumber"
                      :placeholder="$t('searchHere')" />
                  </div>
                </template>
                <template slot="thead">
                  <vs-th>#</vs-th>

                  <vs-th sort-key="orderNumber">{{$t('orderNumber')}}</vs-th>
                  <vs-th sort-key="fullName">{{$t('User')}}</vs-th>
                  <vs-th sort-key="companyName">{{$t('Company')}}</vs-th>
                  <vs-th sort-key="deliveryLocation">{{$t('deliveryLocation')}}</vs-th>
                  <vs-th sort-key="totalPrice">{{$t('totalPrice')}}</vs-th>


                  <vs-th>{{$t('detail')}}</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="py-0 text-left" :data="indextr">{{indextr+1}}</vs-td>
                    <vs-td class="py-0 text-left" :data="data[indextr].orderNumber">{{data[indextr].orderNumber}}
                    </vs-td>
                    <vs-td class="py-0" :data="data[indextr].fullName">{{data[indextr].fullName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].companyName">{{data[indextr].companyName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-if="data[indextr].siteName!=null">
                      {{data[indextr].siteName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-else>{{data[indextr].deliveryAddress}}
                    </vs-td>
                    <vs-td class="py-0" :data="data[indextr].totalPrice">
                      {{data[indextr].totalPrice.toLocaleString('en-US')}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].orderId">
                      <vs-avatar color="warning" size="small" icon-pack="feather" icon="icon-chevrons-right"
                        @click="navigateToDetail(data[indextr].orderId)" />
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <vs-pagination class="m-4" :total="totalPage" v-model="currentPage" @change="getPostPaidOrders()">
              </vs-pagination>
            </div>
          </vx-card>
        </vs-tab>

        <!-- =======================================PartialPaid====================================================== -->
        <vs-tab :label="$t('PartialPaid')" @click="getPartialPaidOrders()">
          <vx-card id="internal-card" title no-shadow card-border>
            <div>
              <vs-table stripe class="w-full ml-auto" v-model="selected" :max-items="perPage" :data="partialPaidOrders">
                <template slot="header">
                  <div>
                    <vs-dropdown class="mb-1" vs-custom-content vs-trigger-click>
                      <div
                        class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">
                          <p>{{(currentPage-1)*perPage+1}}-{{currentPage*perPage}} of {{totalPage*perPage}}</p>
                        </span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                      </div>
                      <vs-dropdown-menu>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(10)">10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(20)">20</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(30)">30</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(40)">40</span>
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                  <div id="search" class="float-right">
                    <vs-input @keypress.enter="getPartialPaidOrders()" icon="icon-search" icon-pack="feather"
                      class="w-full mx-2 input-rounded-full no-icon-border" v-model="orderNumber"
                      :placeholder="$t('searchHere')" />
                  </div>
                </template>
                <template slot="thead">
                  <vs-th>#</vs-th>

                  <vs-th sort-key="orderNumber">{{$t('orderNumber')}}</vs-th>
                  <vs-th sort-key="fullName">{{$t('User')}}</vs-th>
                  <vs-th sort-key="companyName">{{$t('Company')}}</vs-th>
                  <vs-th sort-key="deliveryLocation">{{$t('deliveryLocation')}}</vs-th>
                  <vs-th sort-key="totalPrice">{{$t('totalPrice')}}</vs-th>


                  <vs-th>{{$t('detail')}}</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="py-0 text-left" :data="indextr">{{indextr+1}}</vs-td>
                    <vs-td class="py-0 text-left" :data="data[indextr].orderNumber">{{data[indextr].orderNumber}}
                    </vs-td>
                    <vs-td class="py-0" :data="data[indextr].fullName">{{data[indextr].fullName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].companyName">{{data[indextr].companyName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-if="data[indextr].siteName!=null">
                      {{data[indextr].siteName}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].deliveryTime" v-else>{{data[indextr].deliveryAddress}}
                    </vs-td>
                    <vs-td class="py-0" :data="data[indextr].totalPrice">
                      {{data[indextr].totalPrice.toLocaleString('en-US')}}</vs-td>
                    <vs-td class="py-0" :data="data[indextr].orderId">
                      <vs-avatar color="warning" size="small" icon-pack="feather" icon="icon-chevrons-right"
                        @click="navigateToDetail(data[indextr].orderId)" />
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <vs-pagination class="m-4" :total="totalPage" v-model="currentPage" @change="getPostPaidOrders()">
              </vs-pagination>
            </div>
          </vx-card>
        </vs-tab>


        <!-- <vs-tab :label="$t('Canceled')" @click="getCanceledOrders()">
          <vx-card id="internal-card" title no-shadow card-border>
            <div>
              <vs-table
                stripe
                class="w-full ml-auto"
                v-model="selected"
                :max-items="perPage"
                :data="canceledOrders"
              >
                <template slot="header">
                  <div>
                    <vs-dropdown class="mb-1" vs-custom-content vs-trigger-click>
                      <div
                        class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                      >
                        <span class="mr-2">
                          <p>{{(currentPage-1)*perPage+1}}-{{currentPage*perPage}} of {{totalPage*perPage}}</p>
                        </span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                      </div>
                      <vs-dropdown-menu>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(10)">10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(20)">20</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(30)">30</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <span @click="setPageLimitPaid(40)">40</span>
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                  <div class="float-right">
                    <vs-input
                      @keypress.enter="searchCanceledOrders()"
                      icon="icon-search"
                      icon-pack="feather"
                      class="w-full mx-2 input-rounded-full no-icon-border"
                      v-model="searchCanceled"
                      :placeholder="$t('searchHere')"
                    />
                  </div>
                </template>
                <template slot="thead">
                  <vs-th>#</vs-th>
                  <vs-th sort-key="orderNumber">{{$t('orderNumber')}}</vs-th>
                  <vs-th sort-key="fullName">{{$t('User')}}</vs-th>
                  <vs-th sort-key="companyName">{{$t('Company')}}</vs-th>
                  <vs-th sort-key="deliveryLocation">{{$t('deliveryLocation')}}</vs-th>
                  <vs-th sort-key="totalPrice">{{$t('totalPrice')}}</vs-th>
                  

                  <vs-th>{{$t('Detail')}}</vs-th>
                </template>
                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="py-0 text-left" :data="indextr">{{indextr+1}}</vs-td>
                    <vs-td
                      class="py-0 text-left"
                      :data="data[indextr].orderNumber"
                    >{{data[indextr].orderNumber}}</vs-td>

                    <vs-td class="py-0" :data="data[indextr].fullName">{{data[indextr].fullName}}</vs-td>

                    <vs-td
                      class="py-0"
                      :data="data[indextr].companyName"
                    >{{data[indextr].companyName}}</vs-td>
                    <vs-td
                      class="py-0"
                      :data="data[indextr].deliveryTime"
                      v-if="data[indextr].siteName!=null"
                    >{{data[indextr].siteName}}</vs-td>
                    <vs-td
                      class="py-0"
                      :data="data[indextr].deliveryTime"
                      v-else
                    >{{data[indextr].deliveryAddress}}</vs-td>
                    <vs-td
                      class="py-0"
                      :data="data[indextr].totalPrice"
                    >{{data[indextr].totalPrice}}</vs-td>
                    
                    <vs-td class="py-0" :data="data[indextr].orderId">
                      <vs-avatar
                        color="warning"
                        size="small"
                        icon-pack="feather"
                        icon="icon-chevrons-right"
                        @click="navigateToDetail(data[indextr].orderId)"
                      />
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
              <vs-pagination
                class="m-4"
                :total="totalPage"
                v-model="currentPage"
                @change="getCanceledOrders()"
              ></vs-pagination>
            </div>
          </vx-card>
        </vs-tab> -->
      </vs-tabs>
    </div>
  </vx-card>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  data() {
    return {
      filter: "",
      totalPage: "",
      orderNumber:"",
      perPage: "10",
      currentPage: "1",
      canceledOrders: [],
      paidOrders: [],
      postPaidOrders: [],
      partialPaidOrders: [],
      UnPaidOrders: [],
      searchPaid: "",
      searchUnPaid: "",
      searchPostPaid: "",
      searchCanceled: "",
      isLoading: false,
      fullPage: false
    };
  },
  methods: {
    getPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`order/filterbypaymnetstatus/Paid`, {
          params: { page: this.currentPage, limit: this.perPage, orderNumber:this.orderNumber }
        })
        .then(response => {
          this.paidOrders = response.data;
          this.totalPage = response.data[0].totalPages;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });
    },

     getUnPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`order/filterbypaymnetstatus/UnPaid`, {
          params: { page: this.currentPage, limit: this.perPage, orderNumber:this.orderNumber }
        })
        .then(response => {
          this.UnPaidOrders = response.data;
          this.totalPage = response.data[0].totalPages;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });
    },


    getPostPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`order/filterbypaymnetstatus/PostPaid`, {
          params: { page: this.currentPage, limit: this.perPage, orderNumber:this.orderNumber }
        })
        .then(response => {
          this.postPaidOrders = response.data;
          this.totalPage = response.data[0].totalPages;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });
    },

    getPartialPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`order/filterbypaymnetstatus/PartialPaid`, {
          params: { page: this.currentPage, limit: this.perPage, orderNumber:this.orderNumber }
        })
        .then(response => {
          this.partialPaidOrders = response.data;
          this.totalPage = response.data[0].totalPages;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });
    },


    getCanceledOrders() {
      this.isLoading = true;
      this.$http
        .get(`order/filter/Canceled`, {
          params: { page: this.currentPage, limit: this.perPage }
        })
        .then(response => {
          this.canceledOrders = response.data;
          this.totalPage = response.data[0].totalPages;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });
    },
    setPageLimitPaid(page) {
      this.perPage = page;
      this.getPaidOrders();
    },

    setPageLimitUnPaid(page) {
      this.perPage = page;
      this.getUnPaidOrders();
    },


    setPageLimitPostPaid(page) {
      this.perPage = page;
      this.getPostPaidOrders();
    },
    setPageLimitCanceled(page) {
      this.perPage = page;
      this.getCanceledOrders();
    },
    navigateToDetail(id) {
      this.$router.push({ path: "/pages/order/" + id });
    },
    navigateToSelectedDetail(tr) {
      this.$router.push({ path: "/pages/order/" + tr.orderId });
    },
    searchPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`/order/search/${this.searchPaid}`)
        .then(response => {
          this.paidOrders.length = 0;
          this.paidOrders.push(response.data);
          this.perPage = 10;
          this.totalPage = 1;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });

      if (this.searchPaid == "") this.getPaidOrders();
    },

    searchPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`/order/search/${this.searchUnPaid}`)
        .then(response => {
          this.UnPaidOrders.length = 0;
          this.UnPaidOrders.push(response.data);
          this.perPage = 10;
          this.totalPage = 1;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });

      if (this.searchPaid == "") this.getUnPaidOrders();
    },

    searchPostPaidOrders() {
      this.isLoading = true;
      this.$http
        .get(`/order/search/${this.searchPostPaid}`)
        .then(response => {
          this.postPaidOrders.length = 0;
          this.postPaidOrders.push(response.data);
          this.perPage = 10;
          this.totalPage = 1;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });

      if (this.searchPostPaid == "") this.getPostPaidOrders();
    },
    searchCanceledOrders() {
      this.isLoading = true;
      this.$http
        .get(`/order/search/${this.searchCanceled}`)
        .then(response => {
          this.canceledOrders.length = 0;
          this.canceledOrders.push(response.data);
          this.perPage = 10;
          this.totalPage = 1;
          this.isLoading = false;
        })
        .catch(_ => {
          this.isLoading = false;
        });

      if (this.searchCanceled == "") this.getCanceledOrders();
    }
  },
  created() {
    this.getUnPaidOrders();
  },
  components: {
    Loading
  }
};
</script>

<style>
</style>