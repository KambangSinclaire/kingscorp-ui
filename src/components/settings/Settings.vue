<template>
  <section class="w-full flex flex-col   general-section relative ">

    <div class=" max-w-full w-lg mx-auto py-10 flex justify-center items-center" style="z-index:1;">
        <router-link to="/explore/dashboard">
        <button
          class=" w-10 h-10 px-2 bg-white flex justify-center items-center shadow-lg rounded-lg
            text-gray-800 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"   viewBox="0 0 24 24"
            stroke="currentColor"  >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>
      </router-link>
    <h1 class="text-4xl capitalize font-extrabold  text-white   text-left"  >Settings</h1>
    </div>

    <div class="flex max-w-full bg-white py-10 my-10 px-10 mx-auto  w-lg rounded-lg shadow-lg" style="z-index:1;">
      <div class=" px-2 mt-24 w-1/4">

        <div class="w-full text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <router-link to="/settings">
          <button  type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-t-lg border-b border-gray-200       hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600  dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <svg class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
              Roles
          </button>
          </router-link>

          <router-link to="/settings/permissions">
          <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <svg class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
              Permissions
          </button>
          </router-link>
          <router-link to="/settings/preferences">
          <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
              Preferences
          </button>
          </router-link>
          <router-link to="/settings/groups">
          <button type="button" class="inline-flex relative items-center py-2 px-4 w-full text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
              Groups
          </button>
          </router-link>
      </div>

      </div>
      <div class="w-3/4">
        <router-view></router-view>

      </div>
    </div>
    <!-- <div class="sidebar w-1/6 bg-white border-r-4 border-solid border-gray-100 h-screen">
      <div class="header">
        <h1 class="title p-8 text-center font-black">Settings</h1>
        <hr />
      </div>
      <div class="sidebaar-options">
        <router-link to="/settings/groups">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Groups</span>
        </div>
        </router-link>
        <router-link to="/settings">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Roles</span>
        </div>
        </router-link>
         <router-link to="/settings/permissions">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Permissions</span>
        </div>
         </router-link>
       <router-link to="/settings/preferences">
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
            <span>Preferences</span>
        </div>
         </router-link>
        <div class="sidebar-items cursor-pointer p-8 hover:bg-gray-200">
          <span>Privacy</span>
        </div>
      </div>
    </div>
    <div class="main-content w-5/6">
    </div> -->
  </section>
</template>

<script>
import { Options, Vue } from "vue-class-component";
export default class Settings extends Vue {}
</script>

<style lang="scss">
.general-section{
  &::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 40vh;
    background: #1e40af;
    top: 0;
    
  }
}
</style>