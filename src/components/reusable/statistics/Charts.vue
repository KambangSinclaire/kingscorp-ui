<template>
  <!-- <div class="container flex flex-col justify-start items-start px-8">

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
  </div> -->
  <div class="flex flex-col flex-auto w-full">
    <div class="flex flex-wrap w-full max-w-screen-xl mx-auto p-8">
      <div class="flex items-center justify-between w-full">
        <div>
          <div class="text-3xl font-semibold tracking-tight leading-8">
            Analytics dashboard
          </div>
          <div class="font-medium tracking-tight text-secondary">
            Monitor metrics, check reports and review performance
          </div>
        </div>
        
        <div class="flex items-center ml-6">
          <button
            type="button"
            class="
              py-2
              flex
              px-5
              mr-2
              mb-2
              text-sm
              font-medium
              text-gray-900
              rounded-full
              border border-gray-200
              hover:bg-gray-100 hover:text-blue-700
              focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700
              dark:bg-gray-800
              dark:text-gray-400
              dark:border-gray-600
              dark:hover:text-white
              dark:hover:bg-gray-700
              capitalize
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            settings
          </button>

          <button
            type="button"
            class="
              py-2
              px-5
              mr-2
              flex
              mb-2
              text-sm
              font-medium
              text-white
              bg-blue-700
              rounded-full
              border border-blue-700
              hover:bg-blue-700 hover:text-white
              focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white
              dark:bg-gray-800
              dark:text-gray-400
              dark:border-gray-600
              dark:hover:text-white
              dark:hover:bg-gray-700
              capitalize
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            export
          </button>

          <div class="sm:hidden">
            <button aria-haspopup="true">
              <span class=""
                ><span
                  role="img"
                  class="span notranslate span-no-color"
                  aria-hidden="true"
                  data-span-name="dots-vertical"
                  data-span-namespace="heroicons_outline"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fit=""
                    height="25px"
                    width="25px"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
        <div
          class="
            sm:col-span-2
            lg:col-span-3
            dark
            flex flex-col flex-auto
            bg-white
            shadow
            rounded-2xl
            overflow-hidden
            relative 
          "
        >
          <div
            class="flex items-center justify-between mt-10 ml-10 mr-6 sm:mr-10"
          >
            <div class="flex flex-col">
              <div
                class="
                  mr-4
                  text-2xl
                  md:text-3xl
                  text-gray-600
                  font-semibold
                  tracking-tight
                  leading-7
                "
              >
                Visitors Overview
              </div>
              <div class="font-medium text-gray-600 text-base">
                Number of unique visitors
              </div>
            </div>
          </div>

          <div class="flex flex-col flex-auto h-80 " style="width:100%;">
            <apexchart
              type="area"
              class="flex-auto w-full h-full"
              height="300"
              ref="chart"
             
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>

            <Line />
            <Pie />
        <!-- <div class="sm:col-span-2 lg:col-span-1 flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden">
        </div> -->
       
      </div>
        <!-- <div class="grid overflow-hidden grid-cols-3 grid-rows-4 w-full mt-8 gap-4">
          <div class="box" v-for="i of [1,2,3]" :key="i">
          </div>
        </div> -->
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
      series: [
        {
          data: [
            [1327359600000, 30.95],
            [1327446000000, 31.34],
            [1327532400000, 31.18],
            [1327618800000, 31.05],
            [1327878000000, 31.0],
            [1327964400000, 30.95],
            [1328050800000, 31.24],
            [1328137200000, 31.29],
            [1328223600000, 31.85],
            [1328482800000, 31.86],
            [1328569200000, 32.28],
            [1328655600000, 32.1],
            [1328742000000, 32.65],
            [1328828400000, 32.21],
            [1329087600000, 32.35],
            [1329174000000, 32.44],
            [1329260400000, 32.46],
            [1329346800000, 32.86],
            [1329433200000, 32.75],
            [1329778800000, 32.54],
            [1329865200000, 32.33],
            [1329951600000, 32.97],
            [1330038000000, 33.41],
            [1330297200000, 33.27],
            [1330383600000, 33.27],
            [1330470000000, 32.89],
            [1330556400000, 33.1],
            [1330642800000, 33.73],
            [1330902000000, 33.22],
            [1330988400000, 31.99],
            [1331074800000, 32.41],
            [1331161200000, 33.05],
            [1331247600000, 33.64],
            [1331506800000, 33.56],
            [1331593200000, 34.22],
            [1331679600000, 33.77],
            [1331766000000, 34.17],
            [1331852400000, 33.82],
            [1332111600000, 34.51],
            [1332198000000, 33.16],
            [1332284400000, 33.56],
            [1332370800000, 33.71],
            [1332457200000, 33.81],
            [1332712800000, 34.4],
            [1332799200000, 34.63],
            [1332885600000, 34.46],
            [1332972000000, 34.48],
            [1333058400000, 34.31],
            [1333317600000, 34.7],
            [1333404000000, 34.31],
            [1333490400000, 33.46],
            [1333576800000, 33.59],
            [1333922400000, 33.22],
            [1334008800000, 32.61],
            [1334095200000, 33.01],
            [1334181600000, 33.55],
            [1334268000000, 33.18],
            [1334527200000, 32.84],
            [1334613600000, 33.84],
            [1334700000000, 33.39],
            [1334786400000, 32.91],
            [1334872800000, 33.06],
            [1335132000000, 32.62],
            [1335218400000, 32.4],
            [1335304800000, 33.13],
            [1335391200000, 33.26],
            [1335477600000, 33.58],
            [1335736800000, 33.55],
            [1335823200000, 33.77],
            [1335909600000, 33.76],
            [1335996000000, 33.32],
            [1336082400000, 32.61],
            [1336341600000, 32.52],
            [1336428000000, 32.67],
            [1336514400000, 32.52],
            [1336600800000, 31.92],
            [1336687200000, 32.2],
            [1336946400000, 32.23],
            [1337032800000, 32.33],
            [1337119200000, 32.36],
            [1337205600000, 32.01],
            [1337292000000, 31.31],
            [1337551200000, 32.01],
            [1337637600000, 32.01],
            [1337724000000, 32.18],
            [1337810400000, 31.54],
            [1337896800000, 31.6],
            [1338242400000, 32.05],
            [1338328800000, 31.29],
            [1338415200000, 31.05],
            [1338501600000, 29.82],
            [1338760800000, 30.31],
            [1338847200000, 30.7],
            [1338933600000, 31.69],
            [1339020000000, 31.32],
            [1339106400000, 31.65],
            [1339365600000, 31.13],
            [1339452000000, 31.77],
            [1339538400000, 31.79],
            [1339624800000, 31.67],
            [1339711200000, 32.39],
            [1339970400000, 32.63],
            [1340056800000, 32.89],
            [1340143200000, 31.99],
            [1340229600000, 31.23],
            [1340316000000, 31.57],
            [1340575200000, 30.84],
            [1340661600000, 31.07],
            [1340748000000, 31.41],
            [1340834400000, 31.17],
            [1340920800000, 32.37],
            [1341180000000, 32.19],
            [1341266400000, 32.51],
            [1341439200000, 32.53],
            [1341525600000, 31.37],
            [1341784800000, 30.43],
            [1341871200000, 30.44],
            [1341957600000, 30.2],
            [1342044000000, 30.14],
            [1342130400000, 30.65],
            [1342389600000, 30.4],
            [1342476000000, 30.65],
            [1342562400000, 31.43],
            [1342648800000, 31.89],
            [1342735200000, 31.38],
            [1342994400000, 30.64],
            [1343080800000, 30.02],
            [1343167200000, 30.33],
            [1343253600000, 30.95],
            [1343340000000, 31.89],
            [1343599200000, 31.01],
            [1343685600000, 30.88],
            [1343772000000, 30.69],
            [1343858400000, 30.58],
            [1343944800000, 32.02],
            [1344204000000, 32.14],
            [1344290400000, 32.37],
            [1344376800000, 32.51],
            [1344463200000, 32.65],
            [1344549600000, 32.64],
            [1344808800000, 32.27],
            [1344895200000, 32.1],
            [1344981600000, 32.91],
            [1345068000000, 33.65],
            [1345154400000, 33.8],
            [1345413600000, 33.92],
            [1345500000000, 33.75],
            [1345586400000, 33.84],
            [1345672800000, 33.5],
            [1345759200000, 32.26],
            [1346018400000, 32.32],
            [1346104800000, 32.06],
            [1346191200000, 31.96],
            [1346277600000, 31.46],
            [1346364000000, 31.27],
            [1346709600000, 31.43],
            [1346796000000, 32.26],
            [1346882400000, 32.79],
            [1346968800000, 32.46],
            [1347228000000, 32.13],
            [1347314400000, 32.43],
            [1347400800000, 32.42],
            [1347487200000, 32.81],
            [1347573600000, 33.34],
            [1347832800000, 33.41],
            [1347919200000, 32.57],
            [1348005600000, 33.12],
            [1348092000000, 34.53],
            [1348178400000, 33.83],
            [1348437600000, 33.41],
            [1348524000000, 32.9],
            [1348610400000, 32.53],
            [1348696800000, 32.8],
            [1348783200000, 32.44],
            [1349042400000, 32.62],
            [1349128800000, 32.57],
            [1349215200000, 32.6],
            [1349301600000, 32.68],
            [1349388000000, 32.47],
            [1349647200000, 32.23],
            [1349733600000, 31.68],
            [1349820000000, 31.51],
            [1349906400000, 31.78],
            [1349992800000, 31.94],
            [1350252000000, 32.33],
            [1350338400000, 33.24],
            [1350424800000, 33.44],
            [1350511200000, 33.48],
            [1350597600000, 33.24],
            [1350856800000, 33.49],
            [1350943200000, 33.31],
            [1351029600000, 33.36],
            [1351116000000, 33.4],
            [1351202400000, 34.01],
            [1351638000000, 34.02],
            [1351724400000, 34.36],
            [1351810800000, 34.39],
            [1352070000000, 34.24],
            [1352156400000, 34.39],
            [1352242800000, 33.47],
            [1352329200000, 32.98],
            [1352415600000, 32.9],
            [1352674800000, 32.7],
            [1352761200000, 32.54],
            [1352847600000, 32.23],
            [1352934000000, 32.64],
            [1353020400000, 32.65],
            [1353279600000, 32.92],
            [1353366000000, 32.64],
            [1353452400000, 32.84],
            [1353625200000, 33.4],
            [1353884400000, 33.3],
            [1353970800000, 33.18],
            [1354057200000, 33.88],
            [1354143600000, 34.09],
            [1354230000000, 34.61],
            [1354489200000, 34.7],
            [1354575600000, 35.3],
            [1354662000000, 35.4],
            [1354748400000, 35.14],
            [1354834800000, 35.48],
            [1355094000000, 35.75],
            [1355180400000, 35.54],
            [1355266800000, 35.96],
            [1355353200000, 35.53],
            [1355439600000, 37.56],
            [1355698800000, 37.42],
            [1355785200000, 37.49],
            [1355871600000, 38.09],
            [1355958000000, 37.87],
            [1356044400000, 37.71],
            [1356303600000, 37.53],
            [1356476400000, 37.55],
            [1356562800000, 37.3],
            [1356649200000, 36.9],
            [1356908400000, 37.68],
            [1357081200000, 38.34],
            [1357167600000, 37.75],
            [1357254000000, 38.13],
            [1357513200000, 37.94],
            [1357599600000, 38.14],
            [1357686000000, 38.66],
            [1357772400000, 38.62],
            [1357858800000, 38.09],
            [1358118000000, 38.16],
            [1358204400000, 38.15],
            [1358290800000, 37.88],
            [1358377200000, 37.73],
            [1358463600000, 37.98],
            [1358809200000, 37.95],
            [1358895600000, 38.25],
            [1358982000000, 38.1],
            [1359068400000, 38.32],
            [1359327600000, 38.24],
            [1359414000000, 38.52],
            [1359500400000, 37.94],
            [1359586800000, 37.83],
            [1359673200000, 38.34],
            [1359932400000, 38.1],
            [1360018800000, 38.51],
            [1360105200000, 38.4],
            [1360191600000, 38.07],
            [1360278000000, 39.12],
            [1360537200000, 38.64],
            [1360623600000, 38.89],
            [1360710000000, 38.81],
            [1360796400000, 38.61],
            [1360882800000, 38.63],
            [1361228400000, 38.99],
            [1361314800000, 38.77],
            [1361401200000, 38.34],
            [1361487600000, 38.55],
            [1361746800000, 38.11],
            [1361833200000, 38.59],
            [1361919600000, 39.6],
          ],
        },
      ],

      chartOptions: {
        chart: {
          id: "area-datetime",
          type: "area",
          height: 300,
          toolbar:{
            show:false
          }
         
        },
        grid: {
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
            padding:{
          bottom:-2,
        },
        },
     
        yaxis:{
          show: false
        },
        theme: {
          monochrome: {
            enabled: true,
            color: "#475262",
            shadeTo: "dark",
            shadeIntensity: 0.65,
          },
        },
        annotations: {
          yaxis: [
            {
              y: 0,
              borderColor: "#999",
              label: {
                show: false,
              },
            },
          ],
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          style: "hollow",
        },
        xaxis: {
          type: "datetime",
          min: new Date("01 Mar 2012").getTime(),
          tickAmount: 0,
        },
      
        tooltip: {
          x: {
            format: "dd MMM yyyy",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.3,
            opacityTo: 0.5,
            stops: [0, 100],
          },
        },
      },
    };
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/daysui.min.scss";
@import "@/assets/styles/tailwind.scss";
@import "@/assets/styles/daysui.scss";
.d {
  color:  #475262;
}
</style>
