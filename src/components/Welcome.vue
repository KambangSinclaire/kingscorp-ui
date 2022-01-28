<template>
  <!-- <section
    class="w-full bg-gray-200 font-extrabold max-h-screen overflow-hidden"
  >
    <div
      class="
        head-section
        w-4/5
        m-auto
        flex
        justify-around
        items-center
        text-gray-600
      "
    >
    <div class="card summary-cards">
        <p>Summary</p>
        <img src="@/assets/material_icons/analytics-outline.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
      <div class="card summary-cards">
        <p>Sales</p>
        <img src="@/assets/material_icons/card.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
      <div class="card summary-cards">
        <p>Notifications</p>
        <img src="@/assets/material_icons/analytics-outline.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
      <div class="card summary-cards">
        <p>Invoices</p>
        <img src="@/assets/material_icons/analytics-outline.svg" alt="summary" class="w-1/4 cursor-pointer">
        <span>helo test</span>
      </div>
    </div>

    <div class="statistics-section flex justify-evenly items-center">
      <div class="card w-2/3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        </p>
      </div>
    </div>

    <div class="forms-section">
      <div class="basic-entries-form w-full">
        <form class="form-container">
           <h1>{{ msg }}</h1>
          <h1 class="medium-center-header">Add new item to Stock</h1>
          <input type="text" class="form-control" placeholder="Enter information here" />
          <select name="" id="" class="form-control" placeholder="Enter information here">
            <option value="Printers">Printers</option>
            <option value="Scanners">Scanners</option>
            <option value="Books">Books</option>
            <option value="Stationaries">Stationaries</option>
          </select>
        </form>
      </div>
    </div>
  </section> -->

  <section class="">
 
    <!-- <div class="quick-actions grid grid-cols-1 mx-4 gap-2 w-2/6">
      <InfoCard :setup="cardSetup[0]" />
      <InfoCard :setup="cardSetup[1]" />
    </div> -->
  <div class="home h-full overflow-hidden">
    <Navbar/>
    <div class="overflow-hidden ">
      <div class=" h-full w-full grid grid-cols-12 ">

        <div class="bg-yellow-400 col-span-2">
           <Sidebar/>
        </div>
      <!-- <div class="left-side-nav">
      </div> -->
      <div class="rounded-lg col-span-8 overflow-x-hidden  bg-white">
        <!-- <Tabs/> -->
        <div class=" rounded-lg overflow-x-hidden ">
        <!-- <Main /> -->
         <router-view />
      
        </div>
      </div>

      <div class="bg-blue-100 col-span-2">
        <RightSidebar/>
      </div>
      <!-- <div class="right-side-nav">
      </div> -->
      </div>
    </div>
 
  </div>
  </section>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import InfoCard from "./reusable/Info-Card.vue";
import Charts from "./reusable/statistics/Charts.vue";
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import RightSidebar from './RightSidebar.vue'

@Options({
  components: {
    InfoCard,
    Charts,
    Navbar,
    Sidebar,
    RightSidebar
  },
})
export default class Welcome extends Vue {

}
</script>

<style scoped lang="scss">

// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }

 
</style>
