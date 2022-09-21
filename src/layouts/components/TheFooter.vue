<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    
========================================================================================== -->


<template functional>
  <div>
    <footer class="mx-auto the-footer flex-wrap justify-between" :class="classes">
      <span class="md:flex hidden items-center"></span>
      <div class="vx-col mx-auto mt-4">
        
        <img
          class="flex mx-auto h-6"
          src="@/assets/images/pages/eCommerce/medco_logo.png"
          alt="algolia-logo"
        />
        <span id="footer">
          <a
            class="text-center"
            href="https://www.medcoanalytics.com"
          >COPYRIGHT@2019 Medco Technology Solutions</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  }
};
</script>
<style scoped>
#footer {
  text-align: center;
}
</style>
