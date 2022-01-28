<template>
  <!-- <section class="border-b pb-2">
    <nav class="flex items-center w-full">
      <div class="w-1/3">
        <nav class="container">
          <ul class="nav-links flex justify-start">
            <router-link to="/">
              <li class="link-items px-4">Home</li>
            </router-link>
            <router-link to="/recent-activity">
              <li class="link-items px-4">Recent</li>
            </router-link>
            <router-link to="/statistics">
              <li class="link-items px-4">Statistics</li>
            </router-link>
            <router-link to="/explore/dashboard">
              <li class="link-items px-4">Explore</li>
            </router-link>
          </ul>
        </nav>
      </div>
      <div class="w-1/3">
        <div class="search-section container flex">
           <i class="fas fa-search"></i>
          <input
            type="search"
            placeholder="Search KingsCorp"
            class="outline-none text-center"
          />
        </div>
      </div>
      <div class="w-1/3">
        <div class="settings container flex justify-end">
          <router-link to="/" class="px-8">
            <i class="far fa-moon"></i>
          </router-link>
          <router-link to="/notification" class="px-8">
            <i class="far fa-bell"></i>
          </router-link>
          <router-link to="/profile" class="px-8">
            <i class="fas fa-user-circle"></i>
          </router-link>
          <router-link to="/settings" class="px-8">
            <i class="fas fa-cog"></i>
          </router-link>
        </div>
      </div>
    </nav>
  </section>

   -->
    <div>

   <nav class="bg-gray-100 border-gray-200 pl-6 pr-2 sm:px-4 py-1 rounded dark:bg-gray-800">
  <div class="w-full flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex pl-4 w-24 h-12 ">
    <img src="@/assets/logo/logo4-removebg-preview.png" style="transform:scale(2.5);" alt="">
  </a>
  <div class="flex md:order-2">
      <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0" >
        <a class="whitespace-no-wrap text-sm border px-4 border-blue-200 rounded leading-6 font-medium text-blue-500 bg-blue-100 hover:text-blue-600">
              Online
        </a>
        <span class="inline-flex rounded-full shadow-sm">
              <a class="whitespace-no-wrap inline-flex items-center justify-center  border border-transparent text-sm w-8 h-8 bg-blue-500 text-white font-medium rounded-full " >
                S
              </a>
            </span>
          </div>
      <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
          <div
              class="relative flex"
            >
              <button
                type="button"
                class="flex text-blue-500 flex-col items-center rounded-md w-16 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-blue-500 -mb-1">
                  <i class="fas fa-plus-circle"></i>
                </span>
                <span><small>create</small></span> 
               
              </button>
              <button
                type="button"
                class="flex text-yellow-500 flex-col items-center rounded-md w-16 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-yellow-500 -mb-1"><i class="fas fa-save"></i></span>
                <span><small>save</small></span> 
               
              </button>
                <button
                type="button"
                class="flex text-yellow-500 flex-col items-center rounded-md w-16 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-yellow-500 -mb-1"><i class="fas fa-layer-group"></i></span>
                <span><small>content</small></span> 
               
              </button>

                <button
                type="button"
                class="flex text-green-500 flex-col items-center shadow rounded-md w-16 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-green-500 -mb-1"><i class="fas fa-th-large"></i></span>
                <span><small>Dashboard</small></span> 
               
              </button>
              <button
                type="button"
                class="flex text-green-500 flex-col items-center rounded-md w-16 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-green-500 -mb-1"><i class="fas fa-barcode"></i></span>
                <span><small>column</small></span> 
               
              </button>
                <button
                type="button"
                class="flex text-green-500 flex-col items-center rounded-md w-16 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-green-500 -mb-1"><i class="fas fa-th"></i></span>
                <span><small>Quit</small></span> 
               
              </button>

                <button
                type="button"
                class="flex text-pink-500 flex-col items-center rounded-md w-28 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-pink-500 -mb-1"><i class="fas fa-sync"></i></span>
                <span><small>Add Component</small></span> 
               
              </button>
              <button
                type="button"
                class="flex text-pink-500 flex-col items-center rounded-md w-28 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-pink-500 -mb-1"><i class="fas fa-tools"></i></span>
                <span><small>Audit Tools</small></span> 
               
              </button>
                <button
                type="button"
                class="flex text-pink-500 flex-col items-center rounded-md w-28 h-10 text-sm bg-white justify-center"
              >
                <span class="icon text-sm text-pink-400 -mb-1"><i class="fas fa-keyboard"></i></span>
                <span><small>keyboard Settings</small></span> 
               
              </button>
          </div>
  </div>
  </div>
</nav>
  </div>

 

  
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
nav{
  button{
    transform: scale(.85);
    margin-left: -5px;
    }
  }
// .nav-items {
//   padding: 1rem;
//   margin: 0rem 1rem;
// }
// .nav-items:hover {
//   border-radius: 50%;
//   background: #22ade4b0;
//   color: white;
// }
</style>
