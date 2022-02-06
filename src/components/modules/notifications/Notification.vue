<template>
  <!-- <Listing
    :listData="notifications"
    :listingTitles="titles"
    :options="{ actionBtns: true, inputs, entity, actions }"
  /> -->
  <div class="p-8">
    <div class="p-4 mb-10 flex items-center">
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
      

      <h1 class="font-bold capitalize text-2xl mt-2">Notifications</h1>
    </div>
    <div class="w-3/4">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
<li class="mb-10 ml-6">
<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
<img class="rounded-full shadow-lg" src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg" alt="Bonnie image">
</span>
<div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
<div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
</div>
</li>
<li class="mb-10 ml-6">
<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
<img class="rounded-full shadow-lg" src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg" alt="Thomas Lean image">
</span>
<div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
<div class="justify-between items-center mb-3 sm:flex">
<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
<div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
</div>
<div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
</div>
</li>
<li class="mb-10 ml-6">
<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
<img class="rounded-full shadow-lg" src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg" alt="Jese Leos image">
</span>
<div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
<time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
<div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to <span class="font-semibold text-gray-900 dark:text-white">Finished</span></div>
</div>
</li>
    </ol>


<ol class="items-center sm:flex">
<li class="relative mb-6 sm:mb-0">
<div class="flex items-center">
<div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
<svg class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
</div>
<div class="mt-3 sm:pr-8">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
</div>
</li>
<li class="relative mb-6 sm:mb-0">
<div class="flex items-center">
<div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
<svg class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
</div>
<div class="mt-3 sm:pr-8">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
</div>
</li>
<li class="relative mb-6 sm:mb-0">
<div class="flex items-center">
<div class="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
<svg class="w-3 h-3 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
</div>
<div class="mt-3 sm:pr-8">
<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
<time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
</div>
</li>
</ol>


    </div>


  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Listing from "../../reusable/Listing.vue";
import { AppActionEvents } from "../../../events/app.events";
@Options({
  computed: {
    notifications() {
      const notifications = this.$store.getters.getNotifications;
      return notifications;
    },
  },
  methods: {},

  components: {
    Listing,
  },

  mounted() {
    this.$store.dispatch(AppActionEvents.notification.retrieve);
  },
})
export default class Notification extends Vue {
  data() {
    return {
      titles: ["Sender", "Rciepient", "message", "Description"],
      inputs: {
        sender: "text",
        rciepient: "text",
        description: "textarea",
        "message": "number",
      },
      entity: "Notification",
      actions: {
        add: AppActionEvents.notification.add,
        edit: AppActionEvents.notification.edit,
        delete: AppActionEvents.notification.delete,
        details: AppActionEvents.notification.retrieveSingle,
        list: AppActionEvents.notification.retrieve,
      },
    };
  }
}
</script>

<style>
</style>