<!-- =========================================================================================
  File Name: ButtonGroupVertical.vue.vue
  Description: Buttons Group in vertical variant
  
========================================================================================== -->


<template>
  <vx-card title="Vertical Variant" code-toggler>

    <p class="mb-4">You can create vertical variant of button group using <code>btn-group-vertical</code> class</p>

    <div class="btn-group-vertical">
      <vs-button>Left</vs-button>
      <vs-button>Middle</vs-button>
      <vs-button>Right</vs-button>
    </div>

    <template slot="codeContainer">
&lt;div class=&quot;btn-group-vertical&quot;&gt;
  &lt;vs-button&gt;Left&lt;/vs-button&gt;
  &lt;vs-button&gt;Middle&lt;/vs-button&gt;
  &lt;vs-button&gt;Right&lt;/vs-button&gt;
&lt;/div&gt;
    </template>
  </vx-card>
</template>

