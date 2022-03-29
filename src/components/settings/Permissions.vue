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

      <section data-section-id="4" data-category="ta-content" data-component-id="eb4ba9ec_02_awz" class="py-8 ">
              <div class="container mx-auto">
              
                <!-- pagination -->
                <div class="flex flex-wrap justify-between pt-6">
                 
                  <div class="w-full lg:w-auto flex items-end justify-end">
                    <!-- <router-link to=""></router-link> -->
                    <a  @click.prevent="paginateData('-1')" class="inline-flex cursor-pointer mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" title="previous" >
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-2">
                        <path d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z" fill="#A4AFBB"></path>
                      </svg>
                    </a>
                  
              
                    <a @click.prevent="paginateData('+1')" class="inline-flex cursor-pointer items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" title="next" >
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-2">
                        <path d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z" fill="#A4AFBB"></path>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </section>
    </div>
  </div>
</template>

<script>
import { AppActionEvents } from "@/events/app.events";
import {Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
import {paginate} from './../../utils/pagination'

@Options({
    components:{
        Listing
    },
    computed:{     
        formatData(){

          let data = this.$store.getters?.getPermissions;
          let x = paginate(this.$store.getters.getPermissions.length, this.$route.params.id, 8)
          this.permissions = data.length !== 0 ? data.slice(x.startIndex, x.endIndex) : [];

          // this.permissions = this.permissions.length === 0 ? this.$store.getters.getPermissions.slice(0,7) : this.permissions
            for (let i of this.permissions) 
                i['isSelected'] = false;
            
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

        paginateData(nextOrPrevPage){

          let y = eval(`${this.$route.params.id}${nextOrPrevPage}`)

          y < 1 ? this.currentPage : this.currentPage = y;

          // let x = paginate(this.$store.getters.getPermissions.length, this.currentPage, 8)
       
          // let data = this.$store.getters?.getPermissions;

          // this.permissions = data.length !== 0 ? data.slice(x.startIndex, x.endIndex) : [];
       
          this.$router.push(`/explore/dashboard/settings/permissions/${this.currentPage}`, )
        }

    }

})

export default class Permissions extends Vue {
  
  data(){
        return {
            titles:["Permission","Description","Suggestion","Impact","Validity"],
            permissions:[],
            formData:"",
            currentPage:1
        }
    }
}
</script>

<style>

</style>