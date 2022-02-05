<template>
  <section class="parent-container relative">
  
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

    <div class="w-full px-4 h-screen">
      <div class="shadow-lg overflow-hidden rounded-lg py-4">
        <div class="w-full flex justify-between p-2 items-center">
          <div class="w-1/2 px-2 py-2">
            <div class="mt-1 relative rounded-full">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <span class="text-gray-300 sm:text-sm">
                  <i class="fas fa-search"></i>
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
                  w-1/2
                  outline-none
                  shadow-sm
                  sm:text-sm
                  border-gray-300
                  rounded-md
                  pl-10
                  pr-4
                  py-2
                "
                placeholder="filter"
              />
            </div>
          </div>
          <div class="w-1/2 p-2 flex justify-end items-end">
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
                rounded-lg
                text-sm
                px-6
                py-2
                text-center
                inline-flex
                items-center
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
        </div>

        <div class="w-full px-4">
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
                    sm:rounded-lg
                  "
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-blue-800">
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
                            text-gray-100
                            uppercase
                            tracking-wider
                          "
                        >
                          {{ title !== "Action" ? title : "" }}
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="(data, index) of listData" :key="index">
                        <td
                          v-for="(entry, index2) in formatedTitles"
                          :key="index2"
                          class="px-6 py-4 text-left capitalize border"
                        >
                    
                          {{
                            (typeof data[entry] === "string" &&
                              !data[entry].trim().endsWith(".svg")) ||
                            typeof data[entry] === "number"
                              ? data[entry]
                              : ""
                          }}
                          
                          
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

                          <p
                            class="
                              action-items
                              flex
                              text-center
                              relative
                              left-4
                              w-1/6
                            "
                            v-if="options.actionBtns && entry == 'action'"
                          >
                            <span @click="detailsForm(data)">
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
                            <span @click="editForm(data)">
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
                            <span @click="deleteForm(data)">
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

@Options({
  components: {
    Add,
    Delete,
    Edit,
    Details,
  },
  props: {
    listingTitles: Array,
    listData: Array,
    options: Object,
  },
  computed: {
    formatedTitles() {
      const payloadDatas = Object.keys(this.options.inputs ?? {});
      console.log("these are true ", payloadDatas);
      if (this.options.actions && !this.listingTitles.includes("Action")) {
        this.listingTitles.push("Action")
        payloadDatas.push("Action");
        // payloadDatas = this.listingTitles.map((data)=> data.toLowerCase())
      }
      console.log('this is data', payloadDatas);
      return payloadDatas;
    },
    dropdownDetails() {
      return this.$store.getters.getDropDowns;
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
    };
  }
}
</script>

<style lang="scss" scoped>
</style>

