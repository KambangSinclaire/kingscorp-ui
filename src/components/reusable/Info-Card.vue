<template>
     
      <div class="w-full rounded-lg  lg:w-1/3 p-4">
                    <div class="bg-white shadow rounded overflow-hidden">
                      <div class="pt-6 px-6 mb-10 flex justify-between items-center">
                         <router-link :to="setup?.routes?.toListingView">
                        <span class="inline-flex items-center justify-center w-9 h-10 bg-gray-50 rounded">
                        <i :class="setup?.topImage"></i> 
                        </span>
                        </router-link>
                        <a class="py-1 px-2 bg-blue-50 text-xs text-indigo-500 rounded-md" href="#" data-config-id="label1">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                             <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>
                      <div class="px-6 mb-6">
                        <h4 class="text-xl font-bold" data-config-id="header1">{{setup?.title}}</h4>
                        <p class="text-xs text-gray-500" data-config-id="desc1">{{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum!".slice(0, 100)+"..."}} 
                        </p>
                      </div>
                      <div class="p-6 bg-lightGray-50">
                        <div class="flex -mx-2 mb-6">
                          <div class="w-1/2 px-2">
                            <p class="mb-2 text-xs font-medium" data-config-id="label1-1">Final Date</p>
                            <span class="inline-block py-1 px-2 bg-orange-50 rounded-full text-xs text-red-500" data-config-id="label-val1-1">14 March 2021</span>
                          </div>
                          <div class="w-1/2 px-2">
                            <p class="mb-2 text-xs font-medium" data-config-id="label1-2">status</p>
                            <span class="inline-block py-1 px-2 bg-green-50 rounded-full text-xs text-green-500" data-config-id="label-val1-2">200</span>
                          </div>
                        </div>
                        <div class="flex mb-6">
                          <!-- <img class="w-8 h-8 rounded-full object-cover object-right" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" data-config-id="image1-1">
                          <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" data-config-id="image1-2">
                          <img class="w-8 h-8 -ml-2 rounded-full object-cover object-top" src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" data-config-id="image1-3">
                          <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" data-config-id="image1-4"> -->
                          <div class="flex items-center justify-center w-8 h-8 -ml-2 rounded-full bg-blue-50 text-xs text-blue-500">+3</div>
                        </div>
                        <p class="mb-2 text-xs font-medium" data-config-id="note1">During the testing</p>
                        <div class="relative w-full h-1 mb-3 rounded-full bg-blue-100">
                          <div class="absolute top-0 left-0 h-full w-1/2 rounded-full bg-blue-700"></div>
                        </div>
                      </div>
                    </div>
      </div>


       <!-- <div class="border  bg-white px-4 py-2 rounded-lg">
        <div class="flex justify-between align-center">
          
          <div class="">
            <router-link to="dashboard/statistics">
            <div
              class="whitespace-no-wrap inline-flex items-center justify-center text-white  border border-transparent text-sm w-8 h-8 font-bold rounded-full  "
              :class="setup?.bgColor"
            >
              <i :class="setup?.topImage"></i>
            </div>
            </router-link>
          </div>
          <router-link  :to="setup?.routes?.toListingView">
          <span><i class="fas fa-ellipsis-v"></i></span>
          </router-link>
        </div>
        <div class="text flex mt-2">
          <div class="h-20 overflow-hidden">
            <h4 class="text-sm font-bold">
              <span class="mr-2"><i :class="setup?.topImage"></i></span>
              {{ setup?.title }}
            </h4>
            <p class="text-sm text-justify" >
              {{ setup?.description }}
            </p>
          </div>
        </div>
        <div class="progrees-bar mt-10" v-if=" setup?.description.length == 0  ">
          <div class="mb-1 flex justify-center">
            <span class=" font-medium text-gray-700 dark:text-white"
              ><small>{{setup?.description.length / 10}} %</small></span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
            <div
              class=" h-2 rounded-full progress-bar"  :class="setup?.bgColor"
               :style="{width: setup?.description.length / 10 +'%'}"
            ></div>
          </div>
        </div>

        <div
          class="mt-5 footer-card-container flex justify-between align-center"
        >
         
          <a
            href="#1"
            class="block px-2 py-1 rounded-full bg-transparent border border-dashed hover:bg-gray-200 hover:text-gray-500 hover:border-transparent text-sm hover:shadow-md active:bg-gray-300"
            >+8 more</a
          >
        </div>
      </div> -->


   <!-- <div class=" pt-2 px-6 max-w-64 w-64 h-72 bg-white relative overflow-hidden rounded-2xl border border-gray-200 border  dark:bg-gray-800 dark:border-gray-700"> -->
      <!-- <div class="w-full mb-2 flex justify-between align-center">
        <router-link to="/statistics">
        <button class="h-8 w-8 hover:shadow rounded-full  " :class="setup?.bgColor"><small class="font-bold text-center my-auto">
           <i :class="setup?.topImage"></i>
          </small></button>
        </router-link>

        <router-link  :to="setup?.routes?.toListingView">
          <button class="h-8 w-8  rounded-full dark:text-white  px-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </router-link>
      </div>
      <div class="w-full my-2 flex h-6 align-center">
       
        
          <div>
          <i :class="setup?.topImage" class=""></i>
          </div>
          <p class="font-bold text-meduim ml-2 ">{{ setup?.title }}</p>
      </div>

      <div class="text-content mb-2">
        <p class="overflow-hidden text-sm ">{{ setup?.description }}</p>
      </div> -->
      <!-- <Line :chartdata="chartdata" :options="chartOptions" :class="setup?.bgColor" class=" px-0 py-2 absolute bottom-0 w-full h-40  left-0 " /> -->

      <!-- <div class="progress-bar mt-8 mb-4">
        <div class="flex justify-between mb-1">
  <span class="text-base font-medium text-blue-700 dark:text-white"><small>Products</small></span>
  <span class="text-sm font-medium text-blue-700 dark:text-white"><small>45%</small></span>
</div>
<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
</div>
      </div> -->
    
    <!-- <a href="#" class="inline-flex items-center py-1 px-3 font-medium text-center text-white text-blue-700 bg-blue-200 rounded-3xl text-sm hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-blue-700 border"> <small>more</small>
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a> -->
    <!-- <a href="#" class="bg-blue-100 absolute bottom-2 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-3xl dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">more</a> -->
<!-- </div> -->

 
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Line from "../reusable/statistics/LineChart.vue";

@Options({
  computed: {
    topImagePath() {
      return this.setup.topImage;
    },
    chartdata() {
      return this.chartData;
    },

  },
  components: { Line },
  props: {
    setup: {
      title: String,
      range: Number,
      btnMore: Number,
      description: String,
      topImage: String,
      actions: {
        showMore: String,
        showStatistics: String,
      },
      routes: {
        toListingView: String,
        toStatisticsView: String,
      },
    },
  },
  methods: {
    showDetails() {
      this.$store.dispatch(this.actions.showMore);
    },
    showMore() {
      this.$store.dispatch(this.actions.showMore);
    },
  },
})
export default class InfoCard extends Vue {
  data() {
    return {
      chartData: {
        labels: ["Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Invoices",
            backgroundColor: "#2563EB",
            data: [1, 16, 210],
            hoverOffset: 4,
          },
          {
            label: "Personnels",
            backgroundColor: "#14B8A6",
            data: [1, 6, 20],
          },
          {
            label: "Inventory",
            backgroundColor: "white",
            data: [179, 67, 20],
          },
          {
            label: "Stock",
            backgroundColor: "teal",
            data: [107, 69, 20],
          },
          {
            label: "Products",
            backgroundColor: "#0284C7",
            data: [10, 96, 29],
          },
          {
            label: "Services",
            backgroundColor: "#8da9c4",
            data: [134, 69, 20],
          },
        ],
      },
      chartOptions: {
        legend: {
          display: false,
        },
        layout: {
          padding: 0,
        },
        responsive: true,
        interaction: {
          mode: "index",
          intersect: true,
        },
        stacked: true,
        plugins: {
          title: {
            display: true,
            text: "Chart.js Line Chart - Multi Axis",
          },
        },
        scales: {
          y: {
            type: "linear",
            display: false,
            position: "left",
          },
          y1: {
            type: "linear",
            display: false,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: true, // only want the grid lines for one axis to show up
            },
          },
        },
      },
    };
  }
}
</script>

<style lang="scss" scoped>
.text-content p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.progress-bar{
  animation:swipe 1.3s linear 0s;
}

@keyframes swipe {
  from{width: 0%;}to{width:inherit}
}

</style>
