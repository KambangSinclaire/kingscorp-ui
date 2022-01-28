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

  <div class="header-container   w-full">
    <div class="">
      <div x-data="{ mobileMenuOpen: false }" class="relative bg-gray-100">
        <div
          class="flex justify-between items-center p-1  sm:px-2 md:justify-start md:space-x-10"
        >
          <div class="">
            <a   class="whitespace-no-wrap inline-flex items-center justify-center  border border-transparent text-sm w-8 h-8 bg-gray-100 font-medium rounded-full shadow ">S</a>
          </div>

          <div class="-mr-2 -my-2 md:hidden">
            <button
              @click="mobileMenuOpen = true"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
            
              <i class="fas fa-bars h-6 w-6"></i>
            </button>
          </div>
          <nav class="hidden md:flex ">
            <div
              x-description="Flyout menu, show/hide based on flyout menu state."
              @click="flyoutMenuOpen = false"
              x-data="{ flyoutMenuOpen: true }"
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


        
          </nav>

          <div
            class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0"
          >
            <a
              
              class="whitespace-no-wrap text-sm border px-4 border-blue-200 rounded leading-6 font-medium text-blue-500 bg-blue-100 hover:text-blue-600"
            >
              Online
            </a>
            <span class="inline-flex rounded-full shadow-sm">
              <a
                
                class="whitespace-no-wrap inline-flex items-center justify-center  border border-transparent text-sm w-8 h-8 bg-blue-500 text-white font-medium rounded-full "
              >
                S
              </a>
            </span>
          </div>
        </div>

      
      </div>
    </div>
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
