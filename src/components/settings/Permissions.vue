<template>
   <!-- <Listing :listData="permissions" :listingTitles="titles" :options="{actions:false}"/> -->
     <div class="flex-auto px-6 pt-9 pb-12 md:p-8 md:pb-12 lg:p-12">
    <div class="flex items-center">
      <button class="lg:hidden -ml-2">
        <span class="mat-button-wrapper">
          <span
            class=""
            aria-hidden="true"
            data-span-type="svg"
            data-span-name="menu"
            data-span-namespace="heroicons_outline"
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </span>
        </span>
      </button>
      <div class="ml-2 lg:ml-0 text-3xl font-bold tracking-tight leading-none">
        Permissions
      </div>
    </div>
    <div class="w-full max-w-3xl">
      <div class="w-full">
        <form action="" class="mt-10 mb-4">
            <div class="flex justify-between items-end">
                <label
                    for="email-adress-icon"
                    class="block -mb-0 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Create New Role</label>
                <button id="addBtn"
                    class="
                        w-8
                        h-8
                        border
                        px-2
                        flex
                        justify-center
                        items-center
                        rounded-md
                        text-gray-400
                        mr-2
                    "
         @click.prevent="submitData"
          :title="'add new permissions'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          
          </button>
            </div>
          
          <div class="relative mt-1">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            </div>
            <input
              type="text"
              id="email-adress-icon"
              class="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 bg-white shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Role name" v-model="this.formData"
            />
            
          </div>
        </form>
      </div>

      <div class="flex flex-col mt-8 divide-y border-t border-b">
        <div class="flex flex-col sm:flex-row sm:items-center py-2" v-for=" i of formatData" :key="i">
          <div class="flex items-center">
            <div class="ml-4">
              <div class="font-medium">{{i?.name}}</div>
              <div class="text-gray-400">{{i?.description.slice(0, 50)+'...'}}</div>
            </div>
          </div>
          <div class="flex items-center mt-4 sm:mt-0 sm:ml-auto">
           
            <div class="order-1 sm:order-2 sm:mr-3">
              <input type="checkbox" class="w-4 h-4 text-blue-600 cursor-pointer bg-white rounded-lg shadow border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @click="i.isSelected = !i?.isSelected" :checked="i?.isSelected" >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppActionEvents } from "@/events/app.events";
import {Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
@Options({
    components:{
        Listing
    },
    computed:{     
        formatData(){
          this.permissions = this.$store.getters.getPermissions
            for (let i of this.permissions) {
                i['isSelected'] = false;
            }
            return this.permissions
        }
    },
    mounted(){
      this.$store.dispatch(AppActionEvents.permission.retrieve)
    },
    
    methods:{
        submitData(){
            let payload = {
                name:this.formData, 
                permissions: this.formatData.filter((data) => data?.isSelected == true).map((data) => data.id),
                description:`this is a description for ${this.formData}`
            }
            this.$store.dispatch(AppActionEvents.role.add, payload)
        },

    }

})

export default class Permissions extends Vue {
  
  data(){
        return {
            titles:["Permission","Description","Suggestion","Impact","Validity"],
            permissions:[{
                id:"1",
                permission:"Add Stock",
                description:"Can open a new inventory",
                suggestion:"good for admins, managers",
                impact:"High",
                validity:"login enabled"
            },
            {
                id:"2",
                permission:"Add Personnels",
                description:"Can add a new personnel",
                suggestion:"good for admins, managers",
                impact:"High",
                validity:"login enabled"
            },
            {
                id:"5",
                permission:"Perform Payment",
                description:"Can perform payments and stock exchange",
                suggestion:"good for admins, managers,sales agents",
                impact:"High",
                validity:"login enabled"
            }],
            formData:""
        }
    }
}
</script>

<style>

</style>