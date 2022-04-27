<template>
  <section class="parent-container relative">
  <Spinner  v-if="this.$store.getters.getLoader?.type == 'spinner' && this.$store.getters.getLoader?.loading"/>
  <Toast :toast="responseData" @closeToast="this.toast = !this.toast" v-if="!this.toast" />
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
      

      <h1 class="font-bold capitalize text-2xl mt-2">{{ options?.entity }}</h1>
    </div>

    <div class="w-full px-4 ">
      <div class="shadow bg-white overflow-hidden rounded-md my-4 ">
        <!-- <div class="w-full flex justify-between p-3 items-center bg-blue-50">
          <div class="w-1/2 px-2 justify-end items-end">
            <h1>Uchenna</h1>
          </div>
          <div class="w-1/2 flex justify-end items-end">
            <button
              type="button"
              @click="addNewForm"
              class="
                text-white
                flex
                justify-center
                items-center
                shadow-lg
                bg-blue-800
                hover:bg-blue-800
                focus:ring-4 focus:ring-blue-300
                font-medium
                rounded-md
                text-sm
                px-6
                py-2
                text-center
                mr-2
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white mr-1 mb-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clip-rule="evenodd"
                />
              </svg>
              Add New {{ options?.entity }}
            </button>
          </div>
        </div> -->

        <div class="w-full flex justify-between p-1 items-center ">
          <div class="w-1/2 px-2 py-2 flex">
          <button
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
          v-view="'DELETE'+options?.entity.toUpperCase()"
          :title="'Delete All '+options?.entity + 's'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          </button>
          <button
          class=" w-8
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
          v-view="'EDIT'+options?.entity.toUpperCase()"
          :title="'Upload All '+options?.entity+ 's'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          </button>
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
          v-view="'ADD'+options?.entity.toUpperCase()"
          @click="addNewForm"
          :title="'add new '+options?.entity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          
          </button>
          </div>
          <div class="w-1/2 px-2 py-2 justify-end items-end">
            <div class="mt-1 relative flex justify-end items-center rounded-full">
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  top-1
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <span class="text-gray-300 sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                class="
                  mt-1
                  focus:ring-blue-600
                  border-2
                  focus:border-blue-600
                  block
                  w-full md:w-1/2
                  outline-none
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                  px-4
                  py-2
                "
                placeholder="filter"
              />
            </div>
          </div>
        </div>

        <div class="w-full ">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="
                  py-2
                  align-middle
                  inline-block
                  min-w-full
                  sm:px-6
                  lg:px-8
                "
              >
                <div
                  class="
                    overflow-hidden
                    border-b border-gray-200
                    
                  "
                >
                <Nodata v-if="checkIfNoData"/>
                  <table v-if="!checkIfNoData" class="min-w-full divide-gray-200 relative">
                    
                    <thead class="bg-gray-100">
                      <tr>
                        <th
                          v-for="(title, index) in listingTitles"
                          :key="index"
                          scope="col"
                          class="
                            px-4
                            py-4
                            text-left text-xs
                            font-semibold
                            text-gray-700
                            uppercase
                            tracking-wider
                            border-r border-t border-b
                          "
                        >
                          {{ title.replaceAll('_', ' ') }}
                        </th>
                        <th
                          
                          scope="col"
                          class="
                            px-4
                            py-4
                            text-left text-xs
                            font-semibold
                            text-gray-700
                            uppercase
                            tracking-wider
                            border-t border-b
                          "
                        >
                          
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                     <SkeletonLoader :dataCol="listingTitles" v-if="this.$store.getters.getLoader?.type == 'skeleton' && this.$store.getters.getLoader?.loading"/> 
                       
                      <tr v-for="(data, index) of listData" :key="index" :class="{'hidden':this.$store.getters.getLoader?.loading}" >
                        <td v-for="(entry, index2) in formatedTitles" :key="index2"  class="px-6 py-4 text-left capitalize border" >
                      <!-- {{ (typeof data[entry] === "string" &&
                              !data[entry].trim().endsWith(".svg")) ||
                            typeof data[entry] === "number"
                              ? data[entry.toLowerCase().replaceAll(' ', '_')]
                              : ""
                          }} -->
                           {{  data[entry.toLowerCase().replaceAll(' ', '_')] }}
                          
                          
                          {{
                            typeof data[entry] === "object"
                              ? data[entry]?.name
                              : ""
                          }}

                          <img
                            v-if="
                              typeof data[entry] === 'string' &&
                              data[entry].trim().endsWith('.svg')
                            "
                            :src="data[entry]"
                            alt="image here"
                          />
                        </td>
                        <td
                          class="px-6 py-4 text-right capitalize border"
                        >
                          <p
                            class="
                              action-items
                              flex
                              text-right
                              relative
                              justify-end
                              
                            "
                          >
                            <span @click="detailsForm(data)" :title="'Preview '+options?.entity">
                              <i
                                class="
                                  far
                                  fa-eye
                                  mx-2
                                  cursor-pointer
                                  text-yellow-600
                                "
                              ></i>
                            </span>
                            <span @click="editForm(data)" :title="'Edit '+options?.entity">
                              <i
                                class="
                                  far
                                  fa-edit
                                  mx-2
                                  cursor-pointer
                                  text-green-500
                                "
                              ></i>
                            </span>
                            <span @click="deleteForm(data)" :title="'Delete '+options?.entity">
                              <i
                                class="
                                  far
                                  fa-trash-alt
                                  mx-2
                                  cursor-pointer
                                  text-red-500
                                "
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                      
                      

                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Add
      v-if="openAddForm"
      v-view="`ADD${options?.entity.toUpperCase()}`"
      @closeForm="openAddForm = !openAddForm"
      :setup="{
        inputs: options?.inputs,
        entity: options?.entity,
        actions: options?.actions,
        relations: options?.relations,
      }"
      
    />
    <Delete
      v-if="openDeleteForm"
      @closeForm="openDeleteForm = !openDeleteForm"
      :setup="{
        data: options.data,
        actions: options.actions,
      }"
    />
    <Edit
      v-if="openEditForm"
      @closeForm="openEditForm = !openEditForm"
      :setup="{
        inputs: options.inputs,
        data: options.data,
        actions: options.actions,
      }"
    />
    <Details
      v-if="openDetailsForm"
      @closeForm="openDetailsForm = !openDetailsForm"
      :setup="{
        inputs: options.inputs,
        data: options.data,
        actions: options.actions,
      }"
    />
   
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Add from "./Add.vue";
import Delete from "./Delete.vue";
import Details from "./Details.vue";
import Edit from "./Edit.vue";
import SkeletonLoader from './loaders/skeleton.vue'
import Nodata from './Nodata.vue'
import Spinner from './loaders/spinner.vue'
import Toast from './toast/toast.vue'
@Options({
  components: {
    Add,
    Delete,
    Edit,
    Details,
    SkeletonLoader,
    Nodata,
    Spinner,
    Toast
  },
  props: {
    listingTitles: Array,
    listData: Array,
    options: Object,
  },
  computed: {
    formatedTitles() {
      let payloadDatas = Object.keys(this.options.inputs ?? {});
      console.log("these are true ", this.options);
      if (this.options.actionBtns && !this.listingTitles.includes("Action")) {
        // this.listingTitles.push("Action")
        // payloadDatas.push("Action");
        console.log('this is listing titles', this.listingTitles);
        payloadDatas = this.listingTitles.map((data)=> data.toLowerCase())
      }
      console.log('this is data', payloadDatas);
      return payloadDatas;
    },
    dropdownDetails() {
      return this.$store.getters.getDropDowns;
    },
    checkIfNoData(){
      if(navigator.onLine && this.listData.length == 0){
        return true
      }
      return false;
    },
     responseData(){

       const message = this.$store.getters?.getToast;
        this.toast = message?.message != '' ? !this.toast : this.toast;

      console.log('popup data displayed here ', message);
      
      return message
    },
    
  },

  methods: {
    toggleSideAction() {
      this.showMoreActions = !this.showMoreActions;
      this.$emit("fetchDropDownIcons");
    },
    addNewForm() {
      this.openAddForm = true;
    },
    deleteForm(data) {
      this.options.data = { ...data, entity: this.options.entity };
      this.openDeleteForm = true;
    },
    editForm(data) {
      this.options.data = { ...data, entity: this.options.entity };
      this.openEditForm = true;
    },
    detailsForm(data) {
      this.options.data = { ...data, entity: this.options.entity };
      this.openDetailsForm = true;
    },
  },
  emits: ["toggleAddNewForm", "fetchDropDownIcons"],

  mounted() {
    console.log("here is the received data ", this.listData);
  },
})
export default class Listing extends Vue {
  
  data() {
    return {
      showMoreActions: false,
      searchQuery: "",
      openAddForm: false,
      openDeleteForm: false,
      openEditForm: false,
      openDetailsForm: false,
      toast: true,

    };
  }
}
</script>

<style lang="scss" scoped>

</style>

