<template>
  <!-- <section
    class="sidebar w-full h-full bg-white bg-gradient-to-r app-custom-gradient"
  >
    <div class="side-links flex flex-col items-center justify-center">
      <div class="nav-items">
        <router-link to="/" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/monitor.svg" alt="" />
          <span class="nav-title">Dashboard</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Products">
        <router-link :to="routes.product.list" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/gift.svg" alt="" />
          <span class="nav-title">Products</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Stock">
        <router-link to="/stock" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/award.svg" alt="" />
          <span class="nav-title">Stock</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Inventory">
        <router-link to="/inventory" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/inbox.svg" alt="" />
          <span class="nav-title">Inventory</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Sales">
        <router-link to="/sales" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/dollar-sign.svg" alt="" />
          <span class="nav-title">Sales</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Credits">
        <router-link to="/credits" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/credit-card.svg" alt="" />
          <span class="nav-title">Credits</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Invoices">
        <router-link to="/invoice" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/briefcase.svg" alt="" />
          <span class="nav-title">Invoices</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/personnel" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/users.svg" alt="" />
          <span class="nav-title">Personnels</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Notifications">
        <router-link to="/notification" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/bell.svg" alt="" />
          <span class="nav-title">Notifications</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/profile" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/user.svg" alt="" />
          <span class="nav-title">Profile</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/settings" class="sidebar-nav-items">
          <span class="icon">
            <img src="@/assets/feather_icons/settings.svg" alt="" />
          </span>
          <span class="nav-title">Settings</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/logout" class="sidebar-nav-items">
          <span class="icon">
            <img src="@/assets/feather_icons/log-out.svg" alt="" />
          </span>
          <span class="nav-title">Logout</span>
        </router-link>
      </div>
    </div>
  </section> -->

  <!-- <section class="container">
    <div class="first-card container px-8 py-4 rounded-sm border border-solid">
      <div class="logo py-6">
        <img src="@/assets/feather_icons/user.svg" alt="" />
      </div>
      <div class="app-description">
        <p class="text py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          et debitis ipsum? Nesciunt recusandae quas
        </p>
        <button class="department-button">
          <img src="@/assets/feather_icons/user.svg" alt="" />
          Create Department
        </button>
      </div>
      <div class="popular-links flex flex-col">
        <span> Products </span>
        <span> Stock </span>
      </div>
    </div>

    <div class="second-card container px-8 py-4 rounded-sm border border-solid my-8">
      <h2>Quick</h2>
      <div class="help-links flex flex-col">
        <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/activity.svg" class="pr-4" alt="" />
         Recent activity
        </spa>
         <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/archive.svg" class="pr-4" alt="" />
         Archived resources
        </spa>
         <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/help-circle.svg" class="pr-4" alt="" />
         Get Help
        </spa>
      </div>
    </div>
  </section> -->


<!-- <div class=""> -->
  <!-- <div class="flex flex-col w-full bg-gray-100 overflow-hidden">
 
    <ul class="flex flex-col py-4">
      <router-link to="/explore/dashboard" :class="{'active':$route.path == '/explore/dashboard' }">
      <li>
        <a  class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          </span>
          <span class="text-sm font-bold">Dashboard</span>
        </a>
      </li>
      
      </router-link>
      <router-link to="/explore/dashboard/statistics" :class="{'active':$route.path == '/explore/dashboard/statistics' }">
      <li>
        <a  class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
</svg>
          </span>
          <span class="text-sm font-bold">statistics</span>
        </a>
      </li>

      </router-link>

      <router-link to="/explore/dashboard/activities" :class="{'active':$route.path == '/explore/dashboard/activities' }">
      <li>
        <a class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
          </span>
          <span class="text-sm font-bold">Activities</span>
        </a>
      </li>
      
      </router-link>
  <router-link to="/settings" :class="{'active':$route.path == '/settings' }">
      <li>
        <a class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>
          </span>
          <span class="text-sm font-bold">settings</span>
        </a>
      </li>
  </router-link>
  <router-link to="/explore/dashboard/profile" :class="{'active':$route.path == '/explore/dashboard/profile' }">
      <li>
        <a class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
</svg>
          </span>
          <span class="text-sm font-bold">Profile</span>
        </a>
      </li>
  </router-link>
  <router-link to="/explore/dashboard/notifications" active-class="active">
      <li>
        <a class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </span>
          <span class="text-sm font-bold">Notifications</span>
          <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        </a>
      </li>
  </router-link>
  <router-link to="/login">
      <li>
        <a class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </span>
          <span class="text-sm font-bold">Logout</span>
        </a>
      </li>
  </router-link>
    </ul>
  </div> -->
  

<!-- </div> -->
            <div class="">
              <div class="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>
              <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-4 pb-8 bg-white border-r overflow-y-auto">
                <div class="flex justify-between w-full items-center px-6  mb-4 lg:border-b border-gray-100" style="padding-bottom:.7rem;">
                 <router-link to="/" class=" w-32 relative">
                    <a class=" w-32 relative" style="height: 1.8rem;" data-config-id="brand">
                    <img class="w-full" src="@/assets/logo/logo4-removebg-preview.png" alt="" width="auto">
                  </a>
                 </router-link>
                  <button @click.prevent="toogleSideBar" class="w-10 h-10 px-2 flex justify-center lg:hidden  items-center shadow-lg rounded-lg text-gray-800 mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </button>
            
                </div>
                <div class="px-4 pb-6">
                  <h3 class="mb-4 text-xs uppercase text-gray-200 font-medium" data-config-id="header1">Main</h3>
                  <ul class="text-sm font-medium my-2" v-for="i of this.routes[0]?.main" :key="i">
                      <router-link :to="i?.path">
                    <li>
                      <a class="flex items-center pl-3 py-2.5 pr-4 rounded" :class="[{'bg-blue-700':$route?.path == i?.path},{'text-white':$route?.path == i?.path}, {'hover:bg-indigo-50':$route?.path != i?.path}, {'text-gray-500':$route?.path != i?.path}]">
                        <span class="inline-block mr-3 text-xl"  v-html="i.icon" ></span>
                        <span data-config-id="link1" class="capitalize">{{i?.name}}</span>
                        <span class="inline-block ml-auto cursor-pointer text-xl">
                          <svg class="text-gray-300 w-3 h-3 cursor-pointer transform" @click.prevent="i.opened = !i.opened" :class="[{'rotate-180':!i.opened}]" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-2">
                            <path d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                    </router-link>
                    <div v-if="i?.opened" class="bg-gray-50 px-4 line py-2 transition-all reveal rounded-md" >
                    <li v-for="x of i?.subroute" :key="x" v-view="x?.name.toUpperCase()" class="list-line">
                    <router-link :to="x?.path">
                      <a class="flex items-center pl-3 py-2.5 pr-4 rounded" :class="[{'bg-blue-700':$route?.path == x?.path},{'text-white':$route?.path == x?.path}, {'hover:bg-indigo-50':$route?.path != x?.path}, {'text-gray-500':$route?.path != x?.path}]" >
                        <span class="inline-block mr-3 text-xl"  v-html="x.icon" ></span>
                        <span data-config-id="link1" class="capitalize">{{x?.name}}s</span>
                      </a>
                      </router-link>
                    </li>
                      </div>
                   
                  </ul>

                  <div class="pt-8">
                    <router-link to="/explore/dashboard/settings" v-view="['GROUP', 'ROLE', 'PERMISSIONS', 'PREFERENCES' ]" >
                    <a class="flex items-center pl-3 py-2 pr-2 rounded" :class="[{'bg-blue-700':$route?.path.includes('/explore/dashboard/settings')},{'text-white':$route?.path.includes('/explore/dashboard/settings')}, {'hover:bg-indigo-50':!$route?.path.includes('/explore/dashboard/settings')}, {'text-gray-500':!$route?.path.includes('/explore/dashboard/settings')}]">
                      <span class="inline-block mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <span data-config-id="link11">Settings</span>
                    </a>
                    </router-link>
                    <router-link to="/login">
                    <a class="flex items-center pl-3 py-2 pr-2 text-gray-500 hover:bg-indigo-50 rounded" >
                      <span class="inline-block mr-4">
                        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-18-2">
                          <path d="M3.33368 9.99996C3.33368 10.221 3.42148 10.4329 3.57776 10.5892C3.73404 10.7455 3.946 10.8333 4.16701 10.8333H10.492L8.57535 12.7416C8.49724 12.8191 8.43524 12.9113 8.39294 13.0128C8.35063 13.1144 8.32885 13.2233 8.32885 13.3333C8.32885 13.4433 8.35063 13.5522 8.39294 13.6538C8.43524 13.7553 8.49724 13.8475 8.57535 13.925C8.65281 14.0031 8.74498 14.0651 8.84653 14.1074C8.94808 14.1497 9.057 14.1715 9.16701 14.1715C9.27702 14.1715 9.38594 14.1497 9.48749 14.1074C9.58904 14.0651 9.68121 14.0031 9.75868 13.925L13.092 10.5916C13.1679 10.5124 13.2273 10.4189 13.267 10.3166C13.3504 10.1137 13.3504 9.88618 13.267 9.68329C13.2273 9.581 13.1679 9.48755 13.092 9.40829L9.75868 6.07496C9.68098 5.99726 9.58874 5.93563 9.48722 5.89358C9.3857 5.85153 9.27689 5.82988 9.16701 5.82988C9.05713 5.82988 8.94832 5.85153 8.8468 5.89358C8.74529 5.93563 8.65304 5.99726 8.57535 6.07496C8.49765 6.15266 8.43601 6.2449 8.39396 6.34642C8.35191 6.44794 8.33027 6.55674 8.33027 6.66663C8.33027 6.77651 8.35191 6.88532 8.39396 6.98683C8.43601 7.08835 8.49765 7.18059 8.57535 7.25829L10.492 9.16663H4.16701C3.946 9.16663 3.73404 9.25442 3.57776 9.4107C3.42148 9.56698 3.33368 9.77895 3.33368 9.99996ZM14.167 1.66663H5.83368C5.17064 1.66663 4.53475 1.93002 4.06591 2.39886C3.59707 2.8677 3.33368 3.50358 3.33368 4.16663V6.66663C3.33368 6.88764 3.42148 7.0996 3.57776 7.25588C3.73404 7.41216 3.946 7.49996 4.16701 7.49996C4.38803 7.49996 4.59999 7.41216 4.75627 7.25588C4.91255 7.0996 5.00035 6.88764 5.00035 6.66663V4.16663C5.00035 3.94561 5.08814 3.73365 5.24442 3.57737C5.4007 3.42109 5.61267 3.33329 5.83368 3.33329H14.167C14.388 3.33329 14.6 3.42109 14.7563 3.57737C14.9125 3.73365 15.0003 3.94561 15.0003 4.16663V15.8333C15.0003 16.0543 14.9125 16.2663 14.7563 16.4225C14.6 16.5788 14.388 16.6666 14.167 16.6666H5.83368C5.61267 16.6666 5.4007 16.5788 5.24442 16.4225C5.08814 16.2663 5.00035 16.0543 5.00035 15.8333V13.3333C5.00035 13.1123 4.91255 12.9003 4.75627 12.744C4.59999 12.5878 4.38803 12.5 4.16701 12.5C3.946 12.5 3.73404 12.5878 3.57776 12.744C3.42148 12.9003 3.33368 13.1123 3.33368 13.3333V15.8333C3.33368 16.4963 3.59707 17.1322 4.06591 17.6011C4.53475 18.0699 5.17064 18.3333 5.83368 18.3333H14.167C14.8301 18.3333 15.4659 18.0699 15.9348 17.6011C16.4036 17.1322 16.667 16.4963 16.667 15.8333V4.16663C16.667 3.50358 16.4036 2.8677 15.9348 2.39886C15.4659 1.93002 14.8301 1.66663 14.167 1.66663Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span data-config-id="link12">Log Out</span>
                    </a>
                    </router-link>


                    <router-link to="/explore/dashboard/profile">
                    <a class="flex items-center pl-3 py-2 pr-2 rounded" :class="[{'bg-blue-700':$route?.path == '/explore/dashboard/profile'},{'text-white':$route?.path == '/explore/dashboard/profile'}, {'hover:bg-indigo-50':$route?.path != '/explore/dashboard/profile'}, {'text-gray-500':$route?.path != '/explore/dashboard/profile'}]">
                      <span class="inline-block mr-4">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span data-config-id="link12">Profile</span>
                    </a>
                    </router-link>
                    
                  </div>
                </div>
                  <div class="flex justify-between w-full items-center  absolute bottom-0  px-6  lg:border-t border-gray-100" style="padding-bottom:.7rem;">
              
                  <button  class="w-8 h-8 px-2 flex justify-center  items-center mt-2 shadow rounded text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  </button>
            
                  </div>
              </nav>
            </div>


</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
@Options({
  computed: {
    // GET REACTIVE UPDATES FROM STORE
    getPref() {
      let preferences = this.$store.getters.getPreferences;
      return preferences;
    },
  },
  methods:{
    toogleSideBar(){
      this.$emit('toogleSideBar', 'toogleSideBar')
    },
  },
   emits:['toogleSideBar']
})
export default class Sidebar extends Vue {
  data() {
    return {
      routes: [
        {
        main:[{
          name:'dashboard',
          opened:false,
          path:'/explore/dashboard',
          icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>`,
          subroute:[{
            name:'product',
            path:'/explore/dashboard/products',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>`
          },{
            name:'service',
            path:'/explore/dashboard/services',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>`
          },{
            name:'stock',
            path:'/explore/dashboard/stocks',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>`
          },{
            name:'invoice',
            path:'/explore/dashboard/invoices',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`
          },{
            name:'personnel',
            path:'/explore/dashboard/personnels',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>`
          },{
            name:'credit',
            path:'/explore/dashboard/credits',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>`
          },{
            name:'sale',
            path:'/explore/dashboard/sales',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`
          }]
        },{
          name:'statistics',
          opened:false,
          path:'/explore/dashboard/statistics',
          icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>`,
          subroute:[{
            name:'product',
            path:'/explore/dashboard/products',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>`
          },{
            name:'service',
            path:'/explore/dashboard/services',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>`
          },{
            name:'stock',
            path:'/explore/dashboard/stocks',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>`
          },{
            name:'invoice',
            path:'/explore/dashboard/invoices',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`
          },{
            name:'personnel',
            path:'/explore/dashboard/personnels',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>`
          },{
            name:'credit',
            path:'/explore/dashboard/credits',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>`
          },{
            name:'sale',
            path:'/explore/dashboard/sales',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`
          }]
        }]
      }
      ],
      preferences: {
        Stock: true,
        Products: true,
        Notifications: true,
        Sales: true,
        Credits: true,
        Inventory: true,
        Invoices: true,
      },

    };
  }
}
</script>

<style scoped lang="scss">
li{
  position: relative;
  &::before{
    position: absolute;
    content: '';
    width: 0%;
    left: 0;
    background: blue;
    height:45px;
    transition: all ease-in-out .3s;
   
  }
}
.line{
  position: relative;
  &::before{
    position: absolute;
    background: #b1b0b0;
    width: 1px;
    height: 100%;
    content: '';
    left: 7px;
    top: 0;

  }
  .list-line{
  position: relative;
  &::before{
    position: absolute;
    background: #b1b0b0;
    width: 12px;
    height: 1px;
    content: '';
    left: -3%;
    top: 50%;
  }
}

.reveal{
animation: reveal 1s ease 0s 1 normal forwards;
}

@keyframes reveal {
  0% {
    opacity: 0;
    transform: rotateX(-100deg);
    transform-origin: top;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }
}

@keyframes unreveal {
  0% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }

  100% {
    opacity: 0;
    transform: rotateX(70deg);
    transform-origin: top;
  }
}

}

</style>