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
    <!-- <div>

   <nav class="bg-gray-100 border-gray-200 pl-6 pr-2 sm:px-4 py-1 rounded dark:bg-gray-800">
  <div class="w-full flex flex-wrap justify-between items-center mx-auto">
    <button @click.prevent="toogleSideBar" data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open side menu</span>
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
    </button>
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
      <button @click.prevent="toogleRightBar" data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span class="sr-only">Open right menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
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
  </div> -->

 
<section data-section-id="2" data-category="ta-navbar" data-component-id="ba5bc4e1_01_awz" class="py-2 px-6 bg-white shadow border-b border-gray-100">
              <nav class="relative">
                <div class="flex items-center">
                  <div class="flex items-center mr-auto">
                    <a class="flex items-center text-sm hover:text-gray-800" href="/explore/dashboard">
                      <span class="inline-block mr-2">
                        <svg class="text-indigo-500" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-1">
                          <path d="M14.6667 5.66667L9.66668 1.28333C9.20833 0.87337 8.61496 0.646723 8.00002 0.646723C7.38507 0.646723 6.7917 0.87337 6.33335 1.28333L1.33335 5.66667C1.06866 5.90339 0.857435 6.1938 0.713745 6.51854C0.570054 6.84328 0.497195 7.1949 0.500018 7.55V14.8333C0.500018 15.4964 0.76341 16.1323 1.23225 16.6011C1.70109 17.0699 2.33698 17.3333 3.00002 17.3333H13C13.6631 17.3333 14.2989 17.0699 14.7678 16.6011C15.2366 16.1323 15.5 15.4964 15.5 14.8333V7.54167C15.5017 7.18797 15.4282 6.83795 15.2846 6.51473C15.1409 6.19152 14.9303 5.90246 14.6667 5.66667V5.66667ZM9.66668 15.6667H6.33335V11.5C6.33335 11.279 6.42115 11.067 6.57743 10.9107C6.73371 10.7545 6.94567 10.6667 7.16668 10.6667H8.83335C9.05436 10.6667 9.26633 10.7545 9.42261 10.9107C9.57889 11.067 9.66668 11.279 9.66668 11.5V15.6667ZM13.8334 14.8333C13.8334 15.0543 13.7456 15.2663 13.5893 15.4226C13.433 15.5789 13.221 15.6667 13 15.6667H11.3334V11.5C11.3334 10.837 11.07 10.2011 10.6011 9.73223C10.1323 9.26339 9.49639 9 8.83335 9H7.16668C6.50364 9 5.86776 9.26339 5.39892 9.73223C4.93008 10.2011 4.66668 10.837 4.66668 11.5V15.6667H3.00002C2.779 15.6667 2.56704 15.5789 2.41076 15.4226C2.25448 15.2663 2.16668 15.0543 2.16668 14.8333V7.54167C2.16683 7.42334 2.19218 7.30641 2.24103 7.19865C2.28989 7.09088 2.36113 6.99476 2.45002 6.91667L7.45002 2.54167C7.60209 2.40807 7.79759 2.33439 8.00002 2.33439C8.20244 2.33439 8.39794 2.40807 8.55002 2.54167L13.55 6.91667C13.6389 6.99476 13.7101 7.09088 13.759 7.19865C13.8079 7.30641 13.8332 7.42334 13.8334 7.54167V14.8333Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span data-config-id="bradcrumb1">{{'Home'}}</span>
                    </a>
                    <span class="inline-block mx-3">
                      <svg class="text-indigo-500" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-1">
                        <path d="M1.23242 9.3689C1.06762 9.36887 0.906542 9.31997 0.769534 9.2284C0.632526 9.13683 0.525742 9.0067 0.462684 8.85445C0.399625 8.7022 0.383124 8.53467 0.415263 8.37304C0.447403 8.21141 0.526741 8.06294 0.643249 7.9464L3.58916 5L0.643224 2.05364C0.486959 1.89737 0.399171 1.68543 0.39917 1.46444C0.399169 1.24345 0.486957 1.03151 0.64322 0.875248C0.799483 0.718984 1.01142 0.631195 1.23241 0.631194C1.4534 0.631193 1.66534 0.718981 1.82161 0.875244L5.35676 4.41084C5.43416 4.48819 5.49556 4.58004 5.53745 4.68114C5.57934 4.78224 5.6009 4.89059 5.6009 5.00003C5.6009 5.10946 5.57934 5.21782 5.53745 5.31891C5.49556 5.42001 5.43416 5.51186 5.35676 5.58922L1.82161 9.12478C1.74432 9.20228 1.65249 9.26375 1.55137 9.30564C1.45026 9.34754 1.34186 9.36903 1.23242 9.3689Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <a class="flex items-center text-sm hover:text-gray-800" :href="this.$route.path">
                      <span class="inline-block mr-2">
                        <svg class="text-indigo-500" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-1">
                          <path d="M3.09179 13.575C3.01254 13.4991 2.91908 13.4397 2.81679 13.4C2.6139 13.3167 2.38634 13.3167 2.18346 13.4C2.08116 13.4397 1.98771 13.4991 1.90846 13.575C1.83259 13.6543 1.77312 13.7477 1.73346 13.85C1.66964 14.0018 1.6522 14.169 1.68335 14.3307C1.71449 14.4923 1.79282 14.6411 1.90846 14.7583C1.98946 14.8319 2.08247 14.8911 2.18346 14.9333C2.28321 14.9774 2.39106 15.0002 2.50012 15.0002C2.60918 15.0002 2.71704 14.9774 2.81679 14.9333C2.91778 14.8911 3.01079 14.8319 3.09179 14.7583C3.20742 14.6411 3.28575 14.4923 3.3169 14.3307C3.34804 14.169 3.33061 14.0018 3.26679 13.85C3.22713 13.7477 3.16766 13.6543 3.09179 13.575ZM5.83346 6.66667H17.5001C17.7211 6.66667 17.9331 6.57887 18.0894 6.42259C18.2457 6.26631 18.3335 6.05435 18.3335 5.83333C18.3335 5.61232 18.2457 5.40036 18.0894 5.24408C17.9331 5.0878 17.7211 5 17.5001 5H5.83346C5.61244 5 5.40048 5.0878 5.2442 5.24408C5.08792 5.40036 5.00012 5.61232 5.00012 5.83333C5.00012 6.05435 5.08792 6.26631 5.2442 6.42259C5.40048 6.57887 5.61244 6.66667 5.83346 6.66667ZM3.09179 9.40833C2.9746 9.2927 2.82579 9.21437 2.66413 9.18323C2.50248 9.15208 2.33521 9.16952 2.18346 9.23333C2.08247 9.27554 1.98946 9.33472 1.90846 9.40833C1.83259 9.48759 1.77312 9.58104 1.73346 9.68333C1.68937 9.78308 1.6666 9.89094 1.6666 10C1.6666 10.1091 1.68937 10.2169 1.73346 10.3167C1.77566 10.4177 1.83485 10.5107 1.90846 10.5917C1.98946 10.6653 2.08247 10.7245 2.18346 10.7667C2.28321 10.8108 2.39106 10.8335 2.50012 10.8335C2.60918 10.8335 2.71704 10.8108 2.81679 10.7667C2.91778 10.7245 3.01079 10.6653 3.09179 10.5917C3.1654 10.5107 3.22459 10.4177 3.26679 10.3167C3.31088 10.2169 3.33365 10.1091 3.33365 10C3.33365 9.89094 3.31088 9.78308 3.26679 9.68333C3.22713 9.58104 3.16766 9.48759 3.09179 9.40833ZM17.5001 9.16667H5.83346C5.61244 9.16667 5.40048 9.25446 5.2442 9.41074C5.08792 9.56703 5.00012 9.77899 5.00012 10C5.00012 10.221 5.08792 10.433 5.2442 10.5893C5.40048 10.7455 5.61244 10.8333 5.83346 10.8333H17.5001C17.7211 10.8333 17.9331 10.7455 18.0894 10.5893C18.2457 10.433 18.3335 10.221 18.3335 10C18.3335 9.77899 18.2457 9.56703 18.0894 9.41074C17.9331 9.25446 17.7211 9.16667 17.5001 9.16667ZM3.09179 5.24167C3.01254 5.1658 2.91908 5.10633 2.81679 5.06667C2.66503 5.00285 2.49777 4.98542 2.33611 5.01656C2.17445 5.04771 2.02564 5.12604 1.90846 5.24167C1.83485 5.32267 1.77566 5.41568 1.73346 5.51667C1.68937 5.61642 1.6666 5.72427 1.6666 5.83333C1.6666 5.94239 1.68937 6.05025 1.73346 6.15C1.77566 6.25099 1.83485 6.344 1.90846 6.425C1.98946 6.49861 2.08247 6.5578 2.18346 6.6C2.33521 6.66382 2.50248 6.68125 2.66413 6.65011C2.82579 6.61896 2.9746 6.54063 3.09179 6.425C3.1654 6.344 3.22459 6.25099 3.26679 6.15C3.31088 6.05025 3.33365 5.94239 3.33365 5.83333C3.33365 5.72427 3.31088 5.61642 3.26679 5.51667C3.22459 5.41568 3.1654 5.32267 3.09179 5.24167ZM17.5001 13.3333H5.83346C5.61244 13.3333 5.40048 13.4211 5.2442 13.5774C5.08792 13.7337 5.00012 13.9457 5.00012 14.1667C5.00012 14.3877 5.08792 14.5996 5.2442 14.7559C5.40048 14.9122 5.61244 15 5.83346 15H17.5001C17.7211 15 17.9331 14.9122 18.0894 14.7559C18.2457 14.5996 18.3335 14.3877 18.3335 14.1667C18.3335 13.9457 18.2457 13.7337 18.0894 13.5774C17.9331 13.4211 17.7211 13.3333 17.5001 13.3333Z" fill="currentColor"></path>
                        </svg>
                      </span>
                      <span data-config-id="bradcrumb2">{{this.$route.name}}</span>
                    </a>
                  </div>
                  <div class="lg:hidden">
                    <button class="flex items-center">
                      <svg class="text-indigo-500 bg-indigo-100 block h-8 w-8 p-2 rounded" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-config-id="auto-svg-4-1">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                      </svg>
                    </button>
                  </div>
                  <ul class="hidden lg:flex items-center space-x-6 mr-6">
                    <!-- <li>
                      <a class="text-gray-200 hover:text-gray-300" href="#">
                        <svg class="h-5 w-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-1">
                          <path d="M20.7 19.3L17 15.6C20.1 11.7 19.5 6 15.6 2.9C11.7 -0.2 5.99999 0.5 2.89999 4.3C-0.200006 8.2 0.499995 13.9 4.29999 17C7.59999 19.6 12.3 19.6 15.6 17L19.3 20.7C19.7 21.1 20.3 21.1 20.7 20.7C21.1 20.3 21.1 19.7 20.7 19.3ZM9.99999 17C6.09999 17 2.99999 13.9 2.99999 10C2.99999 6.1 6.09999 3 9.99999 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 9.99999 17Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li> -->
                    <li>
                      <a class="text-gray-200 hover:text-gray-300" href="#">
                        <svg class="h-5 w-5" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-6-1">
                          <path d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V14C0 14.7956 0.316071 15.5587 0.87868 16.1213C1.44129 16.6839 2.20435 17 3 17H5.59L8.29 19.71C8.38344 19.8027 8.49426 19.876 8.61609 19.9258C8.73793 19.9755 8.86839 20.0008 9 20C9.23834 20 9.46886 19.9149 9.65 19.76L12.87 17H15C15.7956 17 16.5587 16.6839 17.1213 16.1213C17.6839 15.5587 18 14.7956 18 14V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 14C16 14.2652 15.8946 14.5196 15.7071 14.7071C15.5196 14.8946 15.2652 15 15 15H12.5C12.2617 15 12.0311 15.0851 11.85 15.24L9.05 17.64L6.71 15.29C6.61656 15.1973 6.50574 15.124 6.38391 15.0742C6.26207 15.0245 6.13161 14.9992 6 15H3C2.73478 15 2.48043 14.8946 2.29289 14.7071C2.10536 14.5196 2 14.2652 2 14V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V14Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-gray-200 hover:text-gray-300" href="#">
                        <svg class="h-5 w-5" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-7-1">
                          <path d="M14 11.18V8C13.9986 6.58312 13.4958 5.21247 12.5806 4.13077C11.6655 3.04908 10.3971 2.32615 9 2.09V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V2.09C5.60294 2.32615 4.33452 3.04908 3.41939 4.13077C2.50425 5.21247 2.00144 6.58312 2 8V11.18C1.41645 11.3863 0.910998 11.7681 0.552938 12.2729C0.194879 12.7778 0.00173951 13.3811 0 14V16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H4.14C4.37028 17.8474 4.873 18.5954 5.5706 19.1287C6.26819 19.6621 7.1219 19.951 8 19.951C8.8781 19.951 9.73181 19.6621 10.4294 19.1287C11.127 18.5954 11.6297 17.8474 11.86 17H15C15.2652 17 15.5196 16.8946 15.7071 16.7071C15.8946 16.5196 16 16.2652 16 16V14C15.9983 13.3811 15.8051 12.7778 15.4471 12.2729C15.089 11.7681 14.5835 11.3863 14 11.18ZM4 8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4C9.06087 4 10.0783 4.42143 10.8284 5.17157C11.5786 5.92172 12 6.93913 12 8V11H4V8ZM8 18C7.65097 17.9979 7.30857 17.9045 7.00683 17.7291C6.70509 17.5536 6.45451 17.3023 6.28 17H9.72C9.54549 17.3023 9.29491 17.5536 8.99317 17.7291C8.69143 17.9045 8.34903 17.9979 8 18ZM14 15H2V14C2 13.7348 2.10536 13.4804 2.29289 13.2929C2.48043 13.1054 2.73478 13 3 13H13C13.2652 13 13.5196 13.1054 13.7071 13.2929C13.8946 13.4804 14 13.7348 14 14V15Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <div class="hidden lg:block">
                    <button class="flex items-end">
                      <div class="mr-3">
                        <p class="text-sm capitalize" data-config-id="name">{{dataObject?.username}}</p>
                        <p class="text-sm text-gray-500 text-right" data-config-id="job">{{roles?.length < 83?"Role":"Admin"}}</p>
                      </div>
                      <div class="mr-2">
                        <img class="w-10 h-10 rounded-full object-cover object-right" src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg" alt="" data-config-id="avatar">
                      </div>
                      <span>
                        <svg class="text-gray-400" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-8-1">
                          <path d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </nav>
            </section>
  
</template>

<script lang="ts">
import { getFromStorage } from "@/utils/storage.util";
import { Options, Vue } from "vue-class-component";

@Options({
  methods:{
    toogleSideBar(){
      this.$emit('toogleSideBar', 'toogleSideBar')
    },
    toogleRightBar(){
      this.$emit('toogleRightBar', 'toogleRightBar')
    }
  },
  emits:['toogleSideBar', 'toogleRightBar']
})

export default class Navbar extends Vue {
   dataObject:any = getFromStorage('user')
  roles = this.dataObject['permissions']
  
}
</script>

<style scoped lang="scss">

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
