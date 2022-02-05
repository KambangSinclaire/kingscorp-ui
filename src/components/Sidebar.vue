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
                  <a class=" w-32 relative" style="height: 1.8rem;" data-config-id="brand">
                    <img class="w-full" style="transform:scale(1.5); position: absolute; top: -21px;" src="@/assets/logo/logo4-removebg-preview.png" alt="" width="auto">
                  </a>
                   <button @click.prevent="toogleSideBar" class="w-10 h-10 px-2 flex justify-center md:hidden items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
                </div>
                <div class="px-4 pb-6">
                  <h3 class="mb-4 text-xs uppercase text-gray-200 font-medium" data-config-id="header1">Main</h3>
                  <ul class="text-sm font-medium" v-for="i of this.routes[0]?.main" :key="i">
                      <router-link :to="i?.path">
                    <li >
                      <a class="flex items-center pl-3 py-1.5 pr-4 rounded" :class="[{'bg-blue-700':$route?.path == i?.path},{'text-white':$route?.path == i?.path}, {'hover:bg-indigo-50':$route?.path != i?.path}, {'text-gray-500':$route?.path != i?.path}]">
                        <span class="inline-block mr-3 text-xl">
                          <i :class="i?.icon" class="text-gray-200 "></i>
                        </span>
                        <span data-config-id="link1" class="capitalize">{{i?.name}}</span>
                        <span class="inline-block ml-auto cursor-pointer text-xl">
                          <svg class="text-gray-300 w-3 h-3 cursor-pointer" @click.prevent="i.opened = !i.opened" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-2">
                            <path d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                      </router-link>
                      <div v-if="i?.opened">
                    <li v-for="x of i?.subroute" :key="x">
                    <router-link :to="x?.path">
                      <a class="flex items-center pl-3 py-1.5 pr-4 text-gray-500  rounded" :class="[{'bg-blue-700':$route?.path == x?.path},{'text-white':$route?.path == x?.path}, {'hover:bg-indigo-50':$route?.path != x?.path}, {'text-gray-500':$route?.path != x?.path}]" >
                        <span class="inline-block mr-3 text-xl">
                          <i :class="x?.icon" class="text-gray-200 "></i>
                        </span>
                        <span data-config-id="link1" class="capitalize">{{x?.name}}</span>
                      </a>
                      </router-link>
                    </li>
                      </div>
                   
                  </ul>


                  <h3 class="mb-2 mt-10 text-xs uppercase text-gray-500 font-medium" data-config-id="header2">Secondary</h3>
                  <ul class="text-sm font-medium">
                    <li>
                      <a class="flex items-center pl-3 py-2.5 pr-2 text-gray-500 hover:bg-indigo-50 rounded" href="#">
                        <span class="inline-block mr-3">
                          <svg class="text-gray-200 w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-13-2">
                            <path d="M8.40848 11.7416C8.37264 11.7812 8.33925 11.823 8.30848 11.8666C8.27694 11.9131 8.25172 11.9635 8.23348 12.0166C8.20945 12.0639 8.1926 12.1144 8.18348 12.1666C8.17939 12.2221 8.17939 12.2778 8.18348 12.3333C8.18066 12.4426 8.2035 12.5511 8.25015 12.65C8.28757 12.7534 8.34728 12.8473 8.42505 12.9251C8.50282 13.0028 8.59673 13.0625 8.70015 13.1C8.7999 13.144 8.90775 13.1668 9.01681 13.1668C9.12587 13.1668 9.23373 13.144 9.33348 13.1C9.43689 13.0625 9.53081 13.0028 9.60857 12.9251C9.68634 12.8473 9.74605 12.7534 9.78348 12.65C9.82048 12.5486 9.83746 12.4411 9.83348 12.3333C9.83411 12.2236 9.81309 12.1149 9.77162 12.0134C9.73015 11.9118 9.66905 11.8195 9.59181 11.7416C9.51434 11.6635 9.42218 11.6015 9.32063 11.5592C9.21908 11.5169 9.11016 11.4951 9.00015 11.4951C8.89014 11.4951 8.78121 11.5169 8.67966 11.5592C8.57812 11.6015 8.48595 11.6635 8.40848 11.7416ZM9.00015 0.666626C7.35197 0.666626 5.7408 1.15537 4.37039 2.07105C2.99998 2.98672 1.93188 4.28821 1.30115 5.81093C0.67042 7.33365 0.505392 9.0092 0.826935 10.6257C1.14848 12.2422 1.94215 13.7271 3.10759 14.8925C4.27303 16.058 5.75788 16.8516 7.37439 17.1732C8.9909 17.4947 10.6665 17.3297 12.1892 16.699C13.7119 16.0682 15.0134 15.0001 15.9291 13.6297C16.8447 12.2593 17.3335 10.6481 17.3335 8.99996C17.3335 7.90561 17.1179 6.82198 16.6991 5.81093C16.2804 4.79988 15.6665 3.88122 14.8927 3.1074C14.1189 2.33358 13.2002 1.71975 12.1892 1.30096C11.1781 0.882174 10.0945 0.666626 9.00015 0.666626ZM9.00015 15.6666C7.6816 15.6666 6.39267 15.2756 5.29634 14.5431C4.20002 13.8105 3.34553 12.7694 2.84095 11.5512C2.33637 10.333 2.20434 8.99256 2.46158 7.69936C2.71881 6.40615 3.35375 5.21826 4.2861 4.28591C5.21845 3.35356 6.40634 2.71863 7.69954 2.46139C8.99275 2.20416 10.3332 2.33618 11.5514 2.84076C12.7695 3.34535 13.8107 4.19983 14.5433 5.29616C15.2758 6.39249 15.6668 7.68142 15.6668 8.99996C15.6668 10.7681 14.9644 12.4638 13.7142 13.714C12.4639 14.9642 10.7683 15.6666 9.00015 15.6666ZM9.00015 4.83329C8.56103 4.83301 8.12959 4.94839 7.74924 5.16783C7.36888 5.38726 7.05304 5.70301 6.83348 6.08329C6.77318 6.17814 6.7327 6.28421 6.71446 6.39511C6.69622 6.50601 6.7006 6.61945 6.72734 6.72861C6.75408 6.83778 6.80262 6.94041 6.87005 7.03032C6.93748 7.12024 7.0224 7.19558 7.1197 7.25183C7.21701 7.30808 7.32469 7.34406 7.43626 7.35761C7.54783 7.37116 7.66099 7.362 7.76893 7.33069C7.87687 7.29938 7.97736 7.24655 8.06435 7.17539C8.15135 7.10423 8.22305 7.01621 8.27515 6.91663C8.34857 6.78946 8.45429 6.68394 8.5816 6.61077C8.70892 6.53761 8.8533 6.49938 9.00015 6.49996C9.22116 6.49996 9.43312 6.58776 9.5894 6.74404C9.74568 6.90032 9.83348 7.11228 9.83348 7.33329C9.83348 7.55431 9.74568 7.76627 9.5894 7.92255C9.43312 8.07883 9.22116 8.16663 9.00015 8.16663C8.77913 8.16663 8.56717 8.25442 8.41089 8.4107C8.25461 8.56698 8.16681 8.77895 8.16681 8.99996V9.83329C8.16681 10.0543 8.25461 10.2663 8.41089 10.4225C8.56717 10.5788 8.77913 10.6666 9.00015 10.6666C9.22116 10.6666 9.43312 10.5788 9.5894 10.4225C9.74568 10.2663 9.83348 10.0543 9.83348 9.83329V9.68329C10.3846 9.48331 10.8479 9.09598 11.1425 8.58902C11.437 8.08205 11.5439 7.4877 11.4446 6.90987C11.3454 6.33203 11.0461 5.80747 10.5993 5.42789C10.1525 5.0483 9.58643 4.83784 9.00015 4.83329Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <span data-config-id="link7">Support Center</span>
                      </a>
                    </li>
                    <li>
                      <a class="flex items-center pl-3 py-2.5 pr-4 text-gray-500 hover:bg-indigo-50 rounded" href="#">
                        <span class="inline-block mr-3">
                          <svg class="text-gray-200 w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-14-2">
                            <path d="M14.8802 0.666626H3.21356C2.55074 0.667349 1.91528 0.930974 1.44659 1.39966C0.97791 1.86834 0.714286 2.50381 0.713562 3.16663V14.8333C0.714286 15.4961 0.97791 16.1316 1.44659 16.6003C1.91528 17.0689 2.55074 17.3326 3.21356 17.3333H14.8802C15.543 17.3326 16.1785 17.0689 16.6472 16.6003C17.1159 16.1316 17.3795 15.4961 17.3802 14.8333V3.16663C17.3795 2.50381 17.1159 1.86834 16.6472 1.39966C16.1785 0.930974 15.543 0.667349 14.8802 0.666626ZM3.21356 2.33329H14.8802C15.1012 2.33351 15.313 2.42138 15.4692 2.57761C15.6255 2.73385 15.7133 2.94568 15.7136 3.16663V9.83329H13.6595C13.3851 9.83307 13.1149 9.90072 12.8729 10.0302C12.631 10.1597 12.4248 10.347 12.2728 10.5755L11.1009 12.3333H6.99286L5.82099 10.5755C5.66896 10.347 5.4628 10.1597 5.22085 10.0302C4.9789 9.90072 4.70869 9.83307 4.43427 9.83329H2.38023V3.16663C2.38045 2.94568 2.46832 2.73385 2.62455 2.57761C2.78078 2.42138 2.99262 2.33351 3.21356 2.33329ZM14.8802 15.6666H3.21356C2.99262 15.6664 2.78078 15.5785 2.62455 15.4223C2.46832 15.2661 2.38045 15.0542 2.38023 14.8333V11.5H4.43427L5.60615 13.2578C5.75817 13.4862 5.96434 13.6736 6.20628 13.803C6.44823 13.9325 6.71844 14.0002 6.99286 14H11.1009C11.3754 14.0002 11.6456 13.9325 11.8875 13.803C12.1295 13.6736 12.3356 13.4862 12.4877 13.2578L13.6595 11.5H15.7136V14.8333C15.7133 15.0542 15.6255 15.2661 15.4692 15.4223C15.313 15.5785 15.1012 15.6664 14.8802 15.6666Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <span data-config-id="link8">Inbox</span>
                      </a>
                    </li>
                    <li>
                      <a class="flex items-center pl-3 py-2.5 pr-4 text-gray-500 hover:bg-indigo-50 rounded" href="#">
                        <span class="inline-block mr-3">
                          <svg class="text-gray-200 w-5 h-5" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-15-2">
                            <path d="M18.9832 6.64169C18.9048 6.545 18.8057 6.46712 18.6932 6.41376C18.5807 6.36041 18.4577 6.33293 18.3332 6.33335H16.6665V5.50002C16.6665 4.83698 16.4031 4.20109 15.9343 3.73225C15.4655 3.26341 14.8296 3.00002 14.1665 3.00002H8.93319L8.66652 2.16669C8.49365 1.67771 8.17298 1.2546 7.74894 0.955986C7.3249 0.657367 6.81849 0.498019 6.29986 0.500019H3.33319C2.67015 0.500019 2.03426 0.763411 1.56542 1.23225C1.09658 1.70109 0.833191 2.33698 0.833191 3.00002V13C0.833191 13.6631 1.09658 14.2989 1.56542 14.7678C2.03426 15.2366 2.67015 15.5 3.33319 15.5H15.3332C15.9009 15.4984 16.4511 15.3036 16.8933 14.9476C17.3356 14.5917 17.6435 14.0959 17.7665 13.5417L19.1665 7.35002C19.1919 7.22578 19.1885 7.0974 19.1568 6.97466C19.125 6.85191 19.0656 6.73803 18.9832 6.64169ZM4.47486 13.1834C4.43252 13.3713 4.32635 13.5388 4.17441 13.6574C4.02247 13.7759 3.83416 13.8381 3.64152 13.8334H3.33319C3.11218 13.8334 2.90022 13.7456 2.74394 13.5893C2.58765 13.433 2.49986 13.221 2.49986 13V3.00002C2.49986 2.779 2.58765 2.56704 2.74394 2.41076C2.90022 2.25448 3.11218 2.16669 3.33319 2.16669H6.29986C6.48158 2.1572 6.66141 2.20746 6.81189 2.30978C6.96236 2.4121 7.07521 2.56087 7.13319 2.73335L7.58319 4.10002C7.63667 4.25897 7.73686 4.39809 7.87067 4.49919C8.00447 4.60029 8.16567 4.65867 8.33319 4.66669H14.1665C14.3875 4.66669 14.5995 4.75448 14.7558 4.91076C14.9121 5.06704 14.9999 5.27901 14.9999 5.50002V6.33335H6.66652C6.47389 6.32864 6.28558 6.39084 6.13364 6.50935C5.9817 6.62786 5.87553 6.79537 5.83319 6.98335L4.47486 13.1834ZM16.1415 13.1834C16.0992 13.3713 15.993 13.5388 15.8411 13.6574C15.6891 13.7759 15.5008 13.8381 15.3082 13.8334H6.00819C6.05123 13.7405 6.08204 13.6425 6.09986 13.5417L7.33319 8.00002H17.3332L16.1415 13.1834Z" fill="currentColor"></path>
                          </svg>
                        </span>
                        <span data-config-id="link9">File Manager</span>
                      </a>
                    </li>
                   
                  </ul>
                  <div class="pt-8">
                    <router-link to="/settings">
                    <a class="flex items-center pl-3 py-2 pr-2 text-gray-500 hover:bg-indigo-50 rounded">
                      <span class="inline-block mr-4">
                        <svg class="text-gray-200 w-5 h-5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-17-2">
                          <path d="M16.7666 6.9583L15.1916 6.4333L15.9332 4.94996C16.0084 4.7947 16.0336 4.61993 16.0052 4.44977C15.9768 4.27961 15.8964 4.12245 15.7749 3.99996L13.9999 2.22496C13.8768 2.1017 13.7181 2.02013 13.5462 1.99173C13.3743 1.96333 13.1978 1.98953 13.0416 2.06663L11.5582 2.8083L11.0332 1.2333C10.9778 1.06912 10.8725 0.926317 10.7321 0.824752C10.5917 0.723187 10.4232 0.667916 10.2499 0.666629H7.7499C7.5752 0.666178 7.40477 0.720645 7.26271 0.82233C7.12065 0.924016 7.01414 1.06778 6.95823 1.2333L6.43323 2.8083L4.9499 2.06663C4.79464 1.99145 4.61987 1.9663 4.44971 1.99466C4.27955 2.02302 4.12239 2.10349 3.9999 2.22496L2.2249 3.99996C2.10164 4.1231 2.02007 4.28177 1.99167 4.45368C1.96327 4.62558 1.98946 4.80205 2.06657 4.9583L2.80823 6.44163L1.23323 6.96663C1.06906 7.02208 0.926256 7.12732 0.824691 7.26772C0.723126 7.40812 0.667855 7.57668 0.666568 7.74996V10.25C0.666117 10.4247 0.720584 10.5951 0.822269 10.7372C0.923955 10.8792 1.06772 10.9857 1.23323 11.0416L2.80823 11.5666L2.06657 13.05C1.99138 13.2052 1.96624 13.38 1.9946 13.5502C2.02296 13.7203 2.10343 13.8775 2.2249 14L3.9999 15.775C4.12304 15.8982 4.28171 15.9798 4.45361 16.0082C4.62551 16.0366 4.80199 16.0104 4.95823 15.9333L6.44157 15.1916L6.96657 16.7666C7.02247 16.9321 7.12898 17.0759 7.27104 17.1776C7.41311 17.2793 7.58353 17.3337 7.75823 17.3333H10.2582C10.4329 17.3337 10.6034 17.2793 10.7454 17.1776C10.8875 17.0759 10.994 16.9321 11.0499 16.7666L11.5749 15.1916L13.0582 15.9333C13.2125 16.0066 13.3856 16.0307 13.554 16.0024C13.7224 15.9741 13.8781 15.8947 13.9999 15.775L15.7749 14C15.8982 13.8768 15.9797 13.7182 16.0081 13.5463C16.0365 13.3743 16.0103 13.1979 15.9332 13.0416L15.1916 11.5583L16.7666 11.0333C16.9307 10.9778 17.0735 10.8726 17.1751 10.7322C17.2767 10.5918 17.3319 10.4232 17.3332 10.25V7.74996C17.3337 7.57526 17.2792 7.40483 17.1775 7.26277C17.0758 7.12071 16.9321 7.0142 16.7666 6.9583ZM15.6666 9.64996L14.6666 9.9833C14.4366 10.0579 14.2256 10.1816 14.0483 10.3459C13.8709 10.5102 13.7314 10.711 13.6395 10.9346C13.5475 11.1582 13.5053 11.3991 13.5157 11.6406C13.5261 11.8821 13.589 12.1185 13.6999 12.3333L14.1749 13.2833L13.2582 14.2L12.3332 13.7C12.1195 13.5935 11.8854 13.5342 11.6468 13.526C11.4082 13.5179 11.1706 13.5611 10.9502 13.6528C10.7297 13.7445 10.5315 13.8824 10.369 14.0573C10.2065 14.2322 10.0835 14.44 10.0082 14.6666L9.6749 15.6666H8.3499L8.01657 14.6666C7.94198 14.4367 7.81826 14.2257 7.65398 14.0483C7.48971 13.871 7.28882 13.7315 7.06525 13.6395C6.84168 13.5475 6.60078 13.5053 6.35925 13.5158C6.11773 13.5262 5.88137 13.5891 5.66657 13.7L4.71657 14.175L3.7999 13.2583L4.2999 12.3333C4.41081 12.1185 4.47367 11.8821 4.48411 11.6406C4.49454 11.3991 4.45232 11.1582 4.36035 10.9346C4.26838 10.711 4.12888 10.5102 3.95152 10.3459C3.77416 10.1816 3.56319 10.0579 3.33323 9.9833L2.33323 9.64996V8.34996L3.33323 8.01663C3.56319 7.94204 3.77416 7.81832 3.95152 7.65404C4.12888 7.48977 4.26838 7.28888 4.36035 7.06531C4.45232 6.84174 4.49454 6.60084 4.48411 6.35932C4.47367 6.11779 4.41081 5.88143 4.2999 5.66663L3.8249 4.74163L4.74157 3.82496L5.66657 4.29996C5.88137 4.41087 6.11773 4.47373 6.35925 4.48417C6.60078 4.49461 6.84168 4.45238 7.06525 4.36041C7.28882 4.26845 7.48971 4.12894 7.65398 3.95158C7.81826 3.77422 7.94198 3.56325 8.01657 3.3333L8.3499 2.3333H9.6499L9.98323 3.3333C10.0578 3.56325 10.1815 3.77422 10.3458 3.95158C10.5101 4.12894 10.711 4.26845 10.9346 4.36041C11.1581 4.45238 11.399 4.49461 11.6405 4.48417C11.8821 4.47373 12.1184 4.41087 12.3332 4.29996L13.2832 3.82496L14.1999 4.74163L13.6999 5.66663C13.5934 5.88033 13.5341 6.11442 13.526 6.35304C13.5178 6.59165 13.5611 6.82924 13.6527 7.0497C13.7444 7.27016 13.8823 7.46835 14.0573 7.63086C14.2322 7.79337 14.44 7.9164 14.6666 7.99163L15.6666 8.32496V9.64996ZM8.9999 5.66663C8.34063 5.66663 7.69616 5.86213 7.148 6.2284C6.59984 6.59467 6.17259 7.11526 5.9203 7.72435C5.66801 8.33344 5.602 9.00366 5.73062 9.65026C5.85923 10.2969 6.1767 10.8908 6.64288 11.357C7.10905 11.8232 7.703 12.1406 8.3496 12.2692C8.9962 12.3979 9.66643 12.3319 10.2755 12.0796C10.8846 11.8273 11.4052 11.4 11.7715 10.8519C12.1377 10.3037 12.3332 9.65923 12.3332 8.99996C12.3332 8.11591 11.982 7.26806 11.3569 6.64294C10.7318 6.01782 9.88396 5.66663 8.9999 5.66663ZM8.9999 10.6666C8.67027 10.6666 8.34803 10.5689 8.07395 10.3857C7.79987 10.2026 7.58625 9.94231 7.4601 9.63777C7.33396 9.33322 7.30095 8.99811 7.36526 8.67481C7.42957 8.35151 7.5883 8.05454 7.82139 7.82145C8.05448 7.58836 8.35145 7.42963 8.67475 7.36532C8.99805 7.30101 9.33316 7.33402 9.63771 7.46016C9.94225 7.58631 10.2025 7.79993 10.3857 8.07401C10.5688 8.34809 10.6666 8.67033 10.6666 8.99996C10.6666 9.44199 10.491 9.86591 10.1784 10.1785C9.86585 10.491 9.44193 10.6666 8.9999 10.6666Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span data-config-id="link11">Settings</span>
                    </a>
                    </router-link>
                    <router-link to="/login">
                    <a class="flex items-center pl-3 py-2 pr-2 text-gray-500 hover:bg-indigo-50 rounded" href="#">
                      <span class="inline-block mr-4">
                        <svg class="text-gray-200 w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-18-2">
                          <path d="M3.33368 9.99996C3.33368 10.221 3.42148 10.4329 3.57776 10.5892C3.73404 10.7455 3.946 10.8333 4.16701 10.8333H10.492L8.57535 12.7416C8.49724 12.8191 8.43524 12.9113 8.39294 13.0128C8.35063 13.1144 8.32885 13.2233 8.32885 13.3333C8.32885 13.4433 8.35063 13.5522 8.39294 13.6538C8.43524 13.7553 8.49724 13.8475 8.57535 13.925C8.65281 14.0031 8.74498 14.0651 8.84653 14.1074C8.94808 14.1497 9.057 14.1715 9.16701 14.1715C9.27702 14.1715 9.38594 14.1497 9.48749 14.1074C9.58904 14.0651 9.68121 14.0031 9.75868 13.925L13.092 10.5916C13.1679 10.5124 13.2273 10.4189 13.267 10.3166C13.3504 10.1137 13.3504 9.88618 13.267 9.68329C13.2273 9.581 13.1679 9.48755 13.092 9.40829L9.75868 6.07496C9.68098 5.99726 9.58874 5.93563 9.48722 5.89358C9.3857 5.85153 9.27689 5.82988 9.16701 5.82988C9.05713 5.82988 8.94832 5.85153 8.8468 5.89358C8.74529 5.93563 8.65304 5.99726 8.57535 6.07496C8.49765 6.15266 8.43601 6.2449 8.39396 6.34642C8.35191 6.44794 8.33027 6.55674 8.33027 6.66663C8.33027 6.77651 8.35191 6.88532 8.39396 6.98683C8.43601 7.08835 8.49765 7.18059 8.57535 7.25829L10.492 9.16663H4.16701C3.946 9.16663 3.73404 9.25442 3.57776 9.4107C3.42148 9.56698 3.33368 9.77895 3.33368 9.99996ZM14.167 1.66663H5.83368C5.17064 1.66663 4.53475 1.93002 4.06591 2.39886C3.59707 2.8677 3.33368 3.50358 3.33368 4.16663V6.66663C3.33368 6.88764 3.42148 7.0996 3.57776 7.25588C3.73404 7.41216 3.946 7.49996 4.16701 7.49996C4.38803 7.49996 4.59999 7.41216 4.75627 7.25588C4.91255 7.0996 5.00035 6.88764 5.00035 6.66663V4.16663C5.00035 3.94561 5.08814 3.73365 5.24442 3.57737C5.4007 3.42109 5.61267 3.33329 5.83368 3.33329H14.167C14.388 3.33329 14.6 3.42109 14.7563 3.57737C14.9125 3.73365 15.0003 3.94561 15.0003 4.16663V15.8333C15.0003 16.0543 14.9125 16.2663 14.7563 16.4225C14.6 16.5788 14.388 16.6666 14.167 16.6666H5.83368C5.61267 16.6666 5.4007 16.5788 5.24442 16.4225C5.08814 16.2663 5.00035 16.0543 5.00035 15.8333V13.3333C5.00035 13.1123 4.91255 12.9003 4.75627 12.744C4.59999 12.5878 4.38803 12.5 4.16701 12.5C3.946 12.5 3.73404 12.5878 3.57776 12.744C3.42148 12.9003 3.33368 13.1123 3.33368 13.3333V15.8333C3.33368 16.4963 3.59707 17.1322 4.06591 17.6011C4.53475 18.0699 5.17064 18.3333 5.83368 18.3333H14.167C14.8301 18.3333 15.4659 18.0699 15.9348 17.6011C16.4036 17.1322 16.667 16.4963 16.667 15.8333V4.16663C16.667 3.50358 16.4036 2.8677 15.9348 2.39886C15.4659 1.93002 14.8301 1.66663 14.167 1.66663Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span data-config-id="link12">Log Out</span>
                    </a>
                    </router-link>
                  </div>
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
          icon:'fab fa-dashcube',
          subroute:[{
            name:'products',
            path:'dashboard/products',
            icon:"fab fa-accusoft"
          },{
            name:'services',
            path:'dashboard/services',
            icon:"fab fa-servicestack"
          }]
        },{
          name:'statistics',
          opened:false,
          path:'/explore/dashboard/statistics',
          icon:'fas fa-chart-pie',
          subroute:[{
            name:'products',
            path:'dashboard/products',
            icon:"fab fa-accusoft"
          },{
            name:'services',
            path:'dashboard/services',
            icon:"fab fa-servicestack"
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


</style>