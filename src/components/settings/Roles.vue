<template>
  <!-- <Listing
    :options="{ actionBtns: true, inputs, entity, actions }"
    :listingTitles="titles"
    :listData="roles"
  /> -->
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
        Role
      </div>
    </div>
    <div class="w-full max-w-3xl">
      <!-- <div class="w-full">
        <form action="" class="mt-10 mb-4">
          <label
            for="email-adress-icon"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Add Team Member</label
          >
          <div class="relative mt-1">
            <div
              class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                ></path>
                <path
                  d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-adress-icon"
              class="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 bg-white shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email@exmaple.com"
            />
            <div
              class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </form>
      </div> -->

      <div class="flex flex-col mt-8 divide-y border-t border-b" v-for="i of roles" :key="i">
        <div class="flex flex-col sm:flex-row sm:items-center py-6">
          <div class="flex items-center">
    
            <div class="ml-4">
              <div class="font-medium">{{i.name}}</div>
              <div class="text-gray-400">{{i.description}}</div>
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
      console.log(roles);
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
      titles: ["Name", "Permissions", "User", "Description"],
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

<style></style>
