<template>
  <div class="container flex flex-col justify-start items-start px-8">

    <div class="p-4 flex items-center">
        <button @click="$router.back()"
          class="
            w-10
            h-10
            px-2
            flex
            justify-center
            items-center
            shadow-lg
            rounded-lg
            text-gray-800
            mr-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>
      

      <h1 class="font-bold capitalize text-2xl mt-2">Statistics</h1>
    </div>
<div class="w-full shadow stats">
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">              
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>            
      </svg>
    </div> 
    <div class="stat-title">Total Likes</div> 
    <div class="stat-value text-primary">25.6K</div> 
    <div class="stat-desc">21% more than last month</div>
  </div> 
  <div class="stat">
    <div class="stat-figure text-info">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">                     
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>     
      </svg>
    </div> 
    <div class="stat-title">Page Views</div> 
    <div class="stat-value text-info">2.6M</div> 
    <div class="stat-desc">21% more than last month</div>
  </div> 
  <div class="stat">
    <div class="stat-figure text-info">
      <div class="avatar online">
        <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
          <img src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg" alt="Avatar Tailwind CSS Component" class="mask mask-squircle">
        </div>
      </div>
    </div> 
    <div class="stat-value">86%</div> 
    <div class="stat-title">Tasks done</div> 
    <div class="stat-desc text-info">31 tasks remaining</div>
  </div>
</div>

      <div class="w-full p-1">
        <!-- Horizontal responsive card -->
        <div id="card2" class=" rounded-3xl shadow overflow-hidden flex flex-wrap">
          <div class="w-full md:w-1/2 overflow-hidden" style="min-height: 240px;">
            <div  alt="Placeholder image" class="w-full min-h-full bg-cover bg-center">
             <Line :chartdata="chartdata" :options="chartOptions" class="py-8" />
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <div class="p-6">
              <h4 class="text-2xl">Responsive card</h4>
              <p class="my-1">This card will automatically make itself vertical on smartphones and horizontal on any larger device.</p>
              <p class="my-1">This example could not use <em>&lt;img/&gt;</em> tag because of responsiveness (<em>object-fit</em> does not work properly with variable width).</p>
            </div>
          </div>
        </div>
      </div>

       <div class="w-full p-1">
        <!-- Horizontal responsive card -->
        <div id="card2" class="rounded-3xl shadow overflow-hidden flex flex-wrap">
       

          <div class="w-full md:w-1/2">
            <div class="p-6">
              <h4 class="text-2xl">Responsive card</h4>
              <p class="my-1">This card will automatically make itself vertical on smartphones and horizontal on any larger device.</p>
              <p class="my-1">This example could not use <em>&lt;img/&gt;</em> tag because of responsiveness (<em>object-fit</em> does not work properly with variable width).</p>
            </div>
          </div>

           <div class="w-full md:w-1/2 overflow-hidden" style="min-height: 240px;">
            <div  alt="Placeholder image" class="w-full min-h-full bg-cover bg-center">
              <Bar :chartdata="chartData" :options="chartOptions" class="py-8" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full p-1">
        <!-- Horizontal responsive card -->
        <div id="card2" class="shadow rounded-3xl overflow-hidden flex flex-wrap">
          <div class="w-full md:w-1/2 overflow-hidden" style="min-height: 240px;">
            <div  alt="Placeholder image" class="w-full min-h-full bg-cover bg-center">
              <Pie :chartdata="chartData" :options="chartOptions" class="py-8" />
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <div class="p-6">
              <h4 class="text-2xl">Responsive card</h4>
              <p class="my-1">This card will automatically make itself vertical on smartphones and horizontal on any larger device.</p>
              <p class="my-1">This example could not use <em>&lt;img/&gt;</em> tag because of responsiveness (<em>object-fit</em> does not work properly with variable width).</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Line from "./LineChart.vue";
import Bar from "./BarChart.vue";
import Pie from "./PieChart.vue";

@Options({
  components: {
    Line,
    Bar,
    Pie,
  },
  computed: {
    chartdata() {
      return this.chartData;
    },
  },
  mounted() {
    this.chartData = this.fetchAndFormatData();
  },
  methods: {
    fetchAndFormatData() {
      return {
        labels: ["indigo", "pink", "green", "blue", "red", "gray"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#8da9c4",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data two",
            backgroundColor: "#b4dc7f",
            data: [1, 67, 200, 600, 800, 1000, 5900],
          },
          {
            label: "Data three",
            backgroundColor: "#f87979",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data four",
            backgroundColor: "#feffa5",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data five",
            backgroundColor: "#f87979",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
          {
            label: "Data six",
            backgroundColor: "#8da9c4",
            data: [1, 6, 20, 60, 80, 100, 500],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
})
export default class Charts extends Vue {
  data() {
    return {
      chartData: {
        labels: [
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Invoices",
            backgroundColor: "blue",
            data: [1, 16, 210, 60, 80, 100, 500],
            hoverOffset: 4
          },
          {
            label: "Personnels",
            backgroundColor: "indigo",
            data: [1, 6, 20, 100, 80, 150, 500],
          },
          {
            label: "Inventory",
            backgroundColor: "pink",
            data: [179, 67, 20, 60, 80, 109, 500],
          },
          {
            label: "Stock",
            backgroundColor: "teal",
            data: [107, 69, 20, 60, 80, 10, 500],
          },
          {
            label: "Products",
            backgroundColor: "orange",
            data: [10, 96, 29, 60, 80, 90, 500],
          },
          {
            label: "Services",
            backgroundColor: "brown",
            data: [134, 69, 20, 60, 80, 190, 500],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: "Chart.js Line Chart - Multi Axis",
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      },
    };
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/daysui.min.scss';
@import '@/assets/styles/tailwind.scss';
@import '@/assets/styles/daysui.scss';
</style>