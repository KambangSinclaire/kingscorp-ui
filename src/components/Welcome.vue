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
      <div id="page" class="antialiased font-body bg-body text-body">
        <div class="" id="content">

          <div data-section-id="1" data-category="ta-menus" data-component-id="10070f9f_02_awz" data-container="1">
            <nav class="lg:hidden py-2 px-6 border-b border-gray-50">
              <div class="flex items-center justify-between ">
                <a class="h-10 w-32"  data-config-id="brand">
                  <img  src="@/assets/logo/logo4-removebg-preview.png" alt="" >
                </a>
                <button @click.prevent="toogleSideBar =! toogleSideBar" class="navbar-burger flex items-center rounded focus:outline-none">
                  <svg class="text-white bg-blue-700 hover:bg-blue-800 block h-8 w-8 p-2 rounded svgButton" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-config-id="auto-svg-1-2">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
            </nav>
            <div class="lg:block navbar-menu relative z-50 " :class="{'hidden':!toogleSideBar}">
              <Sidebar @toogleSideBar="toogleSideBar = !toogleSideBar" />
            </div>

            <div class="mx-auto lg:ml-80 " data-bucket="1">
            <!-- navbar -->
            <Navbar />
            
            <!-- router-outlet here! -->
            <!-- page header -->
            <!-- <Toast :toast="responseData" @closeToast="this.toast = !this.toast" v-if="this.toast" /> -->

            <div class="main">
            <router-view/>
            </div>
            <!-- router outlet ends here -->
            </div>
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
import Toast from './reusable/toast/toast.vue'



@Options({
  components: {
    InfoCard,
    Charts,
    Navbar,
    Sidebar,
    RightSidebar,
    Toast,
  },
  computed:{
    // responseData(){
    //   if(this.$store.getters.getToast){
    //     this.toast = true;
    //   }
    //   console.log(this.$store.getters.getToast);
      
    //   return this.$store.getters.getToast
    // },
  },


  mounted(){
    
  }
  
 
})
export default class Welcome extends Vue {

data(){
  return {
    toogleSideBar:false,
    toogleRightBar:false,
    routes:[
      {}
    ],
    toast:true,

  }
}
}
</script>

<style scoped lang="scss">
.main{
  background-color:#F1F5F9;
}
.slideIn{
  position: fixed;
  width:350px;
  max-width:100%;
  animation: slideIn 1s ease 0s 1 normal forwards;
}
.slideOut{
  position: fixed;
   width:350px;
  max-width:100%;
  animation: slideOut 1s ease 0s 1 normal forwards;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-250px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOut {
  0% {
    opacity: 0;
    transform: translateX(250px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
