
<template>



  <div class="home h-full overflow-hidden ">
        <router-view />
    <!-- <Navbar /> -->
    <!-- <div class="main-section-container overflow-hidden"> -->
      <!-- <div class="main-container h-full w-full bg-wite"> -->
      <!-- <div class="left-side-nav"> -->
             <!-- <Sidebar /> -->
      <!-- </div> -->
      <!-- <div class="main-section-container    "> -->
        <!-- <Tabs/> -->
        <!-- <div class="rounded"> -->
        <!-- <Main /> -->
        <!-- </div> -->
      <!-- </div> -->
      <!-- <div class="right-side-nav  "> -->
        <!-- <RightSidebar/> -->
      <!-- </div> -->
      <!-- </div> -->
    <!-- </div> -->
 
  </div>

  <!-- <div id="nav" class="">
    <Navbar />
  </div>
  <div class="flex w-full p-8 pt-4">
    <section class="sidebar w-1/6">
      <Sidebar />
    </section>
    <section class="w-5/6">
      <router-view />
    </section>
  </div> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";


@Options({
  components: {
    Sidebar,
    Navbar,
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
