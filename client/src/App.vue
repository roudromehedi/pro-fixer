<template>
  <div id="app"><PostComponent></PostComponent></div>
</template>

<script lang="js">
import Vue from "vue";
import PostComponent from "./components/postComponent.vue";
//import SignUpPage from "./pages/signup-page.vue";

export default Vue.extend({
  name: "App",

  components: {
    PostComponent,
 },
  data: () => ({
    //
  }),
});
</script>
