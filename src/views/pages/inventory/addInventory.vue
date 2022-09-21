<template>
  <div id="main-div" class="vx-row">
    <!-- MULTIPLE COLUMNS-->
    <div class="vx-col w-full mb-base">
      
      <vx-card id="card-id" title="">
        <vs-tabs alignment="fixed">
           <vs-tab
          :label="$t('addInventoryItem')"
        >
        <div class="vx-row">
        <!-- <div class="vx-col sm:w-1/4 w-full mb-6">
         <h3>{{$t('addInventoryItem')}}</h3>
        </div> -->
        <div class="vx-col sm:w-1/4 w-full mb-6">
        <!-- <vs-tabs>
          <vs-tab
              class="w-full ml-auto"
              @click="navigateToImportText"
              :label="$t('Import Text')">
          <div class="tab-text">
            <span></span>
          </div>
        </vs-tab>
      </vs-tabs> -->
        </div>
        </div>
        <vx-card id="internal-card" class="mt-10" title no-shadow card-border>
          <loading :active.sync="isLoading" :can-cancel="true"></loading>
        <div class="vx-row w-6/7 mt-10">
        <div>
        </div>
          <div class="vx-col sm:w-1/4 w-full mb-6">
            <vs-input
              class="w-full"
              :label="$t('genericName')"
              v-model="inventoryGenericName"
              name="genericName"
              v-validate="'required'"
              data-vv-validate-on="blur"
            />
            <span class="text-danger">{{ errors.first('genericName') }}</span>
          </div>
          <div class="vx-col sm:w-1/6 w-full mb-6">
            <vs-input
              class="w-full"
              :label="$t('dosageForm')"
              v-model="dosageForm"
              data-vv-validate-on="blur"
            />
          </div>
          <div class="vx-col sm:w-1/6 w-full mb-6">
            <vs-input
              class="w-full"
              :label="$t('Strength')"
              v-model="strength"
              data-vv-validate-on="blur"
            />
          </div>
          <div class="vx-col sm:w-1/6 w-full mb-6">
            <vs-input class="w-full" :label="$t('Volume')" v-model="volume" data-vv-validate-on="blur" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/6 w-full mb-6">
            <vs-input
              class="w-full"
              :label="$t('brandName')"
              v-model="inventoryBrandName"
              name="brandName"
              data-vv-validate-on="blur"
            />
            <span class="text-danger">{{ errors.first('brandName') }}</span>
          </div>
          <div class="vx-col w-48 mb-6 mr-4">
            <span class="ml-4">{{$t('Unit')}}</span>
            <v-select
              v-model="measuringUnit"
              v-validate="'required'"
              class="w-full"
              :options="measuringUnits"
              v-validate:measuringUnit="'required'"
              name="measuringUnit"
              :class="{ danger: errors.has('measuringUnit') }"
            ></v-select>
            <span
              class="text-danger"
              v-show="errors.has('measuringUnit')"
            >{{ errors.first('measuringUnit') }}</span>
          </div>
          <div class="vx-col w-2/5 mb-2">
            <span class="ml-4">{{$t('Category')}}</span>
            <v-select
              v-model="inventoryType"
              :options="categories.map(c => c.inventoryType)"
              v-validate="'required'"
              name="inventoryType"
              :class="{ danger: errors.has('inventoryType') }"
            >></v-select>
            <span
              class="text-danger"
              v-show="errors.has('inventoryType')"
            >{{ errors.first('inventoryType') }}</span>
          </div>
        </div>
        <div class="vx-row mb-10">
         <div class="vx-col sm:w-1/6 w-full mb-6">
            <vs-input
              class="w-full"
              :label="$t('subCategory')"
              v-model="subCategory"
              data-vv-validate-on="blur"
            />
          </div>
          <div class="vx-col w-48 mb-6">
            <vs-input
              class="w-full"
              :label="$t('minimumQuantity')"
              v-model="minimumStockQuantity"
              name="minimumStockQuantity"
              v-validate="'required|integer'"
              data-vv-validate-on="blur"
            />
            <span class="text-danger">{{ errors.first('minimumStockQuantity') }}</span>
          </div>
                    <form
            class="mt-8 vx-col mb-6 mr-0 ml-4 p-0 "
            @submit.prevent="onSubmit"
            enctype="multipart/form-data"
          >
            <input
              class="lg:w-2/3 mr-2 w-32"
              type="file"
              text="Upload Image"
              ref="file"
              name="file"
              @change="onSelect"
            />
            <span @click="cancel">
              <feather-icon icon="XCircleIcon" svgClasses="h-4 w-4"></feather-icon>
            </span>
          </form>
          <div class="vx-col mb-6" v-if="image!=''">
            <img :src="image" height="100px" width="150px" />
            <!-- <button >Remove image</button> -->
          </div>
          </div>
        <!-- <vs-upload  @upload-success="addInventory"
        :data-images="file" />-->
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button @click="addInventory" class="mr-3 mb-2">{{$t('Add')}}</vs-button>
          </div>
        </div>
      </vx-card>
      </vs-tab>
           <vs-tab
          :label="$t('inventoryFile')"
          
        >
        <vx-card id="card-id" title="">
         <div class="vx-row">
            <form
            class="mt-8 vx-col mb-6 mr-0 ml-4 p-0 "
            @submit.prevent="onSubmit"
            enctype="multipart/form-data"
          >
            <input
              class="mr-2 w-64"
              type="file"
              text="Upload Image"
              ref="inventoryFile"
              name="inventoryFile"
              @change="onSelectText"
            />
            <span @click="cancelText">
              <feather-icon icon="XCircleIcon" svgClasses="h-4 w-4"></feather-icon>
            </span>
          </form>
          <div class="vx-col w-full">
            <vs-button @click="addInventoryFile" class="mr-3 mb-2 mt-2">{{$t('Import')}}</vs-button>
          </div>
           </div> 
             </vx-card>
      </vs-tab>
      </vs-tabs>
      </vx-card>
    </div>
  </div>
</template>


<script>
import VSelect from "vue-select";
import inventoryCategory from "./inventoryCategory.js";
import { Validator } from "vee-validate";
import Loading from "vue-loading-overlay";
// // Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
const dict = {
  custom: {
    genericName: {
      required: "Please enter generic name",
      alpha: "Generic Name must be character"
    },
    brandName: {
      required: "Please enter brand name",
      alpha: "Brand Name must be character"
    },
    inventoryType: {
      required: "Please enter category",
      alpha: "Inventory Type must be character"
    },
    measuringUnit: {
      required: "Please enter unit",
      alpha: "Unit must be character"
    },
    subCategory: {
      required: "Please enter sub category"
    },
    volume: {
      required: "Please enter volume"
    },
    strength: {
      required: "Please enter strength"
    },
    minimumStockQuantity: {
      required: "Please Enter quantity",
      integer: "please Enter Integer"
    },
    dosageForm: {
      required: "Please Dosage Form form"
    }
  }
};
Validator.localize("en", dict);
export default {
  components: {
    "v-select": VSelect,
    Loading
  },
  data() {
    return {
      inventoryGenericName: [],
      inventoryBrandName: [],
      inventoryType: "",
      measuringUnit: "",
      subCategory: "",
      dosageForm: "",
      strength: "",
      volume: "",
      minimumStockQuantity: "",
      categories: [], // inventoryCategory,
      measuringUnits: ["Number", "ml", "mg"],
      file: "",
      inventoryFile:"",
      image: "",
      textImage:"",
      isLoading:false
    };
  },
  methods: {
    getCategories() {
      this.$http
        .get(`/category`, {
          params: {
            limit: 1000000000,
          }
        })
        .then(response => {
          this.categories=response.data;
        })
        .catch(error => {
          this.isLoading = false;
        });
    },
    onSelectText() {
      const inventoryFile = this.$refs.inventoryFile.files[0];
      this.inventoryFile = inventoryFile;
      var textImage = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.textImage = e.target.result;
      };
      reader.readAsDataURL(inventoryFile);
    },
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    cancel() {
      this.$refs.file.value = null;
      this.image = "";
    },
    cancelText() {
      this.$refs.inventoryFile.value = null;
      this.textImage = "";
    },
    addInventoryFile(){
     const formData = new FormData();
      if (this.inventoryFile != "") {
        formData.append("importExcel", this.inventoryFile);
      }
      this.isLoading=true
      this.$http.post("/inventory/import", formData).then(response => {
            this.isLoading=false
            this.$vs.notify({
              title:this.$t('Add'),
              text: this.$t('importedSuccessfully'),
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "success"
            });
            this.$router.push({ path: "/pages/view-inventory" });
          }).catch(error=>{
            this.isLoading=false
          })
    },
   async  addInventory() {
      console.log("file" + this.file);
      const formData = new FormData();
      if (this.file != "") {
        formData.append("uploadImage", this.file);
      }
      formData.append("inventoryGenericName", this.inventoryGenericName);
      formData.append("inventoryBrandName", this.inventoryBrandName);
      formData.append("inventoryType", this.inventoryType);
      formData.append("measuringUnit", this.measuringUnit);
      formData.append("subCategory", this.subCategory);
      formData.append("dosageForm", this.dosageForm);
      formData.append("strength", this.strength);
      formData.append("volume", this.volume);
      formData.append("minimumStockQuantity", this.minimumStockQuantity);
      this.$validator.validateAll().then(result => {
        if (result) {
          this.isLoading=true
          this.$http.post("/inventory", formData).then(response => {
            this.isLoading=false
            this.$vs.notify({
              title:this.$t('Add'),
              text: this.$t('addedSuccessfully'),
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "success",
              time:6000
            });
            this.$router.push({ path: "/pages/view-inventory" });
          });
          this.$router.push({ path: "/pages/view-inventory" })
        }
      }).catch(error=>{
        this.isLoading=false
      })
    },
    fileChange(fileList) {
      this.files.inventory /
        updateInventory /
        ("file", fileList[0], fileList[0].name);
    },
    upload(){
      axios({
        method: "POST",
        url: "http://localhost:3000",
        data: this.files
      }).then(
        result => {
          console.dir(result.data);
        },
        error => {
          console.error(error);
        }
      );
    },
    navigateToImportText(){
       this.$router.push({ path: "/pages/import-text" });
    }
  },
  created() {
    this.getCategories()
  }
};
</script>
<style  scoped>
</style>