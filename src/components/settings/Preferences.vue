<template>
  <section class="relative w-full mt-6">
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
      

      <h1 class="font-bold capitalize text-2xl mt-2">Preferences</h1>
    </div>
    <div class="w-full">
      <form class="bg-white rounded-lg overflow-hidden border">
        <!-- <div class="w-full bg-blue-100 cursor-pointer flex items-center py-2 px-4">
        <input
          type="radio"
          id="stock"
          class=""
          v-model="sideBarPreferences.Stock"
          @change="upDatePreferences"
        />
        <div class="flex flex-col">
        <label for="stock" class="text-blue-500 font-bold capitalize ml-2 ">Enable Stock</label>
        <p class="text-gray-200 font-normal capitalize">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, recusandae.</p>

        </div>

        </div> -->

        <fieldset>
          <legend class="sr-only">Countries</legend>
          <div class="flex items-center bg-indigo-100 border p-4 cursor-pointer border-indigo-200">
            <input
              :id="sideBarPreferences.Stock"
              type="radio"
              class="w-5 h-5 -mt-4 border-gray-300 focus:ring-2 focus:ring-blue-800 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              v-model="sideBarPreferences.Stock"
              @change="upDatePreferences"
              checked=""
            />
            <label
              :for="sideBarPreferences.Stock"
              class="block ml-2 text-sm font-bold capitalize text-blue-800 dark:text-gray-300"
            >
              {{sideBarPreferences.Stock}}
            <p class="font-medium text-blue-500 capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, incidunt.</p>
            </label>
          </div>

            <div class="flex items-center  bg-white  p-4 cursor-pointer ">
            <input
              :id="sideBarPreferences.Sales"
              type="radio"
              class="w-5 h-5 -mt-4 border-gray-300 focus:ring-2 focus:ring-blue-800 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              v-model="sideBarPreferences.Sales"
              @change="upDatePreferences"
              checked=""
            />
            <label
              :for="sideBarPreferences.Sales"
              class="block ml-2 text-sm font-bold capitalize text-gray-800 dark:text-gray-300"
            >
              {{sideBarPreferences.Sales}}
            <p class="font-medium text-gray-500 capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, incidunt.</p>
            </label>
          </div>
          
        </fieldset>

        <!--         
        <label for="sales">Enable Sales</label>
        <input
          type="checkbox"
          id="sales"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Sales"
          @change="upDatePreferences"
        />
        <label for="products">Enable Products</label>
        <input
          type="checkbox"
          id="products"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Products"
          @change="upDatePreferences"
        />
        <label for="notifications">Enable Notifications</label>
        <input
          type="checkbox"
          id="notifications"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Notifications"
          @change="upDatePreferences"
        />

        <label for="invoice">Enable Invoices</label>
        <input
          type="checkbox"
          id="invoice"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Invoices"
          @change="upDatePreferences"
        />

         <label for="inventory">Enable Inventory</label>
        <input
          type="checkbox"
          id="inventory"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Inventory"
          @change="upDatePreferences"
        />

         <label for="credits">Enable Credits</label>
        <input
          type="checkbox"
          id="credits"
          class="form-control cursor-pointer"
          v-model="sideBarPreferences.Credits"
          @change="upDatePreferences"
        /> -->
        <!-- <button class="app-btn" @click.prevent="upDatePreferences">
          Save changes
        </button> -->
      </form>
    </div>
  </section>
</template>

<script>
import { AppActionEvents } from "@/events/app.events";
import { Options, Vue } from "vue-class-component";

@Options({
  methods: {
    // REACTIVELY SET UPDATES TO STORE
    upDatePreferences() {
      let upDatedPreferences = {
        Stock: this.sideBarPreferences.Stock,
        Sales: this.sideBarPreferences.Sales,
        Products: this.sideBarPreferences.Products,
        Notifications: this.sideBarPreferences.Notifications,
        Inventory: this.sideBarPreferences.Inventory,
        Credits: this.sideBarPreferences.Credits,
        Invoices: this.sideBarPreferences.Invoices,
      };
      this.$store.dispatch("updatePreferences", upDatedPreferences);
    },
  },
  mounted(){
    // this.$store.dispatch(AppActionEvents.preference.retrieve);
    // // console.log(this.$store.getters.getAllPrefrences);
  }
})
export default class Preferences extends Vue {
  data() {
    return {
      sideBarPreferences: {
        Stock: false,
        Products: false,
        Notifications: false,
        Sales: false,
        Inventory: false,
        Credits: false,
        Invoices: false,
      },
    };
  }
}
</script>

<style></style>
