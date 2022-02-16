<template>
  <!-- <Listing
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listingTitles="titles"
    :listData="roles"
  /> -->
  <div class="flex-auto px-6 pt-9 pb-12 md:p-8 md:pb-12 lg:p-12">
    <div class="flex items-center">
      <button  class=" lg:hidden -ml-2 ">
        <span class="mat-button-wrapper">
          <span  class="" aria-hidden="true" data-span-type="svg" data-span-name="menu" data-span-namespace="heroicons_outline">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          </span>
          </span>
        </button>
        <div class="ml-2 lg:ml-0 text-3xl font-bold tracking-tight leading-none"> Team </div>
    </div>
    <div class="w-full  max-w-3xl">
      <div class="w-full">
        <form action="" class="mt-10 mb-4">
        <label for="email-adress-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add Team Member</label>
        <div class="relative mt-1">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input type="text" id="email-adress-icon" class=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  bg-white shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@exmaple.com">
          <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        </form>
      </div>

      <div class="flex flex-col mt-8 divide-y border-t border-b">
        <div class="flex flex-col sm:flex-row sm:items-center py-6 ">
          <div class="flex items-center">
            <div class="flex flex-0 items-center justify-center w-10 h-10 rounded-full overflow-hidden">
              <img alt="Contact avatar" class="object-cover w-full h-full " src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg">
            </div>
            
            <div class="ml-4">
              <div class="font-medium">Dejesus Michael</div>
              <div class="text-gray-400">dejesusmichael@mail.org</div>
            </div>
            </div>
            <div class="flex items-center mt-4 sm:mt-0 sm:ml-auto">
              <div class="order-2 sm:order-1 ml-4 sm:ml-0">
                <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Role:Admin
      <!-- Heroicon name: solid/chevron-down -->
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
  <div class="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="" role="none">
      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">
        <div role="option" class=" h-auto py-4 leading-none ng-tns-c130-33 ng-star-inserted" id="div-11" tabindex="0" aria-disabled="false" style="">
          <span class="">
            <div class="font-medium">Read</div>
          <div class="mt-1.5 text-sm whitespace-normal leading-normal text-secondary">
            Can read and clone this repository. Can also open and comment on issues and pull requests.
          </div>
          </span>
        </div>
      </a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem" tabindex="-1" id="menu-item-0">
        <div role="option" class=" h-auto py-4 leading-none ng-tns-c130-33 ng-star-inserted" id="div-11" tabindex="0" aria-disabled="false" style="">
          <span class="">
            <div class="font-medium">Read</div>
          <div class="mt-1.5 text-sm whitespace-normal leading-normal text-secondary">
            Can read and clone this repository. Can also open and comment on issues and pull requests.
          </div>
          </span>
        </div>
      </a>
      
    </div>
  </div>
</div>

                </div>
                <div class="order-1 sm:order-2 sm:ml-3">
                  <button span-button="" class="mat-focus-indicator span-button mat-button-base">
                    <span>
                    <span role="img" class="span notranslate text-hint span-no-color" aria-hidden="true" data-span-type="svg" data-span-name="trash" data-span-namespace="heroicons_outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    </span>
          </span>
        </button>
        </div>
        </div>
        </div>
      </div>
    </div>
      
    </div>

</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../reusable/Listing.vue";
import { AppActionEvents } from "../../events/app.events";
@Options({
  computed: {
    roles() {
      const roles = this.$store.getters.getRoles;
      return roles;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.role.retrieve);
  },
})
export default class Role extends Vue {
  data() {
    return {
      titles: [
        "Name",
        "Permissions",
        "User",
        "Description"
      ],
      inputs: {
        name: "text",
        permissions: "select",
        user: "text",
        description: "textarea",
      },
      entity: "Role",
      actions: {
        add: AppActionEvents.role.add,
        edit: AppActionEvents.role.edit,
        delete: AppActionEvents.role.delete,
        details: AppActionEvents.role.retrieveSingle,
        list: AppActionEvents.role.retrieve,
      },
    };
  }
}
</script>

<style>
</style>