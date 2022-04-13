<template>

 <div
    class="flex flex-col flex-auto bg-card shadow rounded-2xl overflow-hidden h-48 relative bg-white"
  >
    <div class="flex items-start justify-between m-6 mb-0">
      <div class="text-lg font-medium tracking-tight leading-6 truncate">
        Conversions
      </div>
      <div class="ml-2">
        <button
          aria-haspopup="true"
          mat-button=""
          class="mat-focus-indicator mat-menu-trigger h-6 min-h-6 px-2 bg-blue-500 text-white rounded-full bg-hover mat-button mat-button-base"
        >
            <span class="font-medium text-sm text-secondary ">30 days</span>            
            </button>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:items-center mx-6 mt-3">
      <div class="text-5xl font-bold tracking-tighter leading-tight">4,123</div>
      <div class="flex lg:flex-col lg:ml-3">
        <div
          role="img"
          class="text-red-500"
         
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            fit=""
            height="25"
            width="25"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              fill-rule="evenodd"
              d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
              clip-rule="evenodd"
            ></path></svg
        ></div>
        <div
          class="flex items-center ml-1 lg:ml-0 lg:mt-0.5 text-md leading-none whitespace-nowrap text-secondary"
        >
          <span class="font-medium text-red-500">2%</span
          ><span class="ml-1">below target</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-auto absolute -bottom-12 -left-12"  style="width:120%;">
      <apexchart     
        type="area"
        height="150"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Pie extends Vue {
  data() {
    return {
      series: [
        {
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      chartOptions: {
        chart: {
          height: 150,
          type: "area",
          toolbar: {
            show: false,
          },
          xaxis: {
            show: false,
          },
          yaxis: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          show: false,
          showAlways: false,
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
}
</script>
