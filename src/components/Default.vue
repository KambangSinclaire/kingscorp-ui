<template>
<div class="bg-white">
      <!-- welcome screen here -->
      <div :class="{'hidden':this.roles}" style="background:rgb(227, 243, 240);" class="w-full rounded-lg  pl-10 pr-6 py-4 ">
        <div class="flex justify-between items-center">
          <div class="w-1/2 text-left capitalize">
            <h1 class="text-4xl font-extrabold capitalize  text-gray-900">Welcome To kingscorp <br> {{dataObject?.username}}</h1>
            <router-link to="/login">
            
            </router-link>
          </div>
          <div class="img-contatiner ">
          <img src="@/assets/img/img1.png" alt="" >
          </div>
        </div>
        <div class="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-8 my-4">
          <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-left">The idea of a secure business manager</h1>
            <p class="font-normal text-gray-700">
             Create Roles that govern your organization.
             You Can Edit This Latter
            </p>
            <router-link to="/settings">
            <button  class="px-16 py-2.5 rounded-md bg-blue-700 shadow-3xl mt-4 text-white flex justify-center items-center font-bold">
             Create Roles
            </button>
            </router-link>
          </div>
            <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-left">You Can Create Personels To manage </h1>
            <p class="font-normal text-gray-700">
              Create personels and assign them to a particular roles in your organization
            </p>
             <router-link to="dashboard/personnel">
            <button  class="px-16 py-2.5 rounded-md bg-blue-700 shadow-3xl mt-4 text-white flex justify-center items-center font-bold">
             Create personel 
            </button>
            </router-link>
          </div>
            <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-left">Profile</h1>
            <p class="font-normal text-gray-700">
              Create your profile and manage several organizations  on kingscorp.
            </p>
            <router-link to="dashboard/profile">
            <button  class="px-16 py-2.5 rounded-md bg-blue-700 shadow-3xl mt-4 text-white flex justify-center items-center font-bold">
              Profile 
            </button>
            </router-link>
          </div>
        </div>
      </div>
      <!-- welcome ends -->

    <!-- <div :class="{'hidden':!this.roles}" class="grid lg:grid-cols-3 md:grid-cols-3 rounded-lg w-full  sm:grid-cols-1 gap-2 px-4 py-4">
    </div> -->
  <section class="py-8">
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -m-4">
     
      <InfoCard
        v-for="(setup, index) of this.cardSetup"
        :key="index"
        :setup="setup"
      />
    </div>
    <section data-section-id="4" data-category="ta-content" data-component-id="eb4ba9ec_02_awz" class="py-8 ">
              <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="w-full lg:w-1/3 p-4">
                    <div class="bg-white shadow rounded overflow-hidden">
                      <div class="pt-6 px-6 mb-10 flex justify-between items-center">
                        <span class="inline-flex items-center justify-center w-9 h-10 bg-gray-50 rounded">
                          <img class="h-6" src="artemis-assets/mini-logos/spotify.svg" alt="" data-config-id="logo1">
                        </span>
                        <a class="py-1 px-2 bg-blue-50 text-xs text-indigo-500 rounded-full" href="#" data-config-id="label1">Pending</a>
                      </div>
                      <div class="px-6 mb-6">
                        <h4 class="text-xl font-bold" data-config-id="header1">Spotify</h4>
                        <p class="text-xs text-gray-500" data-config-id="desc1">Example of the team working on a project</p>
                      </div>
                      <div class="p-6 bg-lightGray-50">
                        <div class="flex -mx-2 mb-6">
                          <div class="w-1/2 px-2">
                            <p class="mb-2 text-xs font-medium" data-config-id="label1-1">Final Date</p>
                            <span class="inline-block py-1 px-2 bg-orange-50 rounded-full text-xs text-red-500" data-config-id="label-val1-1">14 March 2021</span>
                          </div>
                          <div class="w-1/2 px-2">
                            <p class="mb-2 text-xs font-medium" data-config-id="label1-2">Budget</p>
                            <span class="inline-block py-1 px-2 bg-green-50 rounded-full text-xs text-green-500" data-config-id="label-val1-2">$12,500</span>
                          </div>
                        </div>
                        <div class="flex mb-6">
                          <img class="w-8 h-8 rounded-full object-cover object-right" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" data-config-id="image1-1">
                          <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt="" data-config-id="image1-2">
                          <img class="w-8 h-8 -ml-2 rounded-full object-cover object-top" src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="" data-config-id="image1-3">
                          <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="" data-config-id="image1-4">
                          <div class="flex items-center justify-center w-8 h-8 -ml-2 rounded-full bg-indigo-50 text-xs text-indigo-500">+3</div>
                        </div>
                        <p class="mb-2 text-xs font-medium" data-config-id="note1">During the testing</p>
                        <div class="relative w-full h-1 mb-3 rounded-full bg-blue-100">
                          <div class="absolute top-0 left-0 h-full w-1/2 rounded-full bg-purple-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
              
                </div>

                <!-- pagination -->
                <div class="flex flex-wrap justify-between pt-6">
                  <div class="w-full lg:w-auto mb-4 lg:mb-0 flex items-center">
                    <p class="mr-3 text-xs text-gray-400" data-config-id="pag1">Show</p>
                    <div class="flex mr-3 py-2 pl-3 pr-2 bg-white border border-gray-100 rounded">
                      <select class="pr-2 text-xs text-gray-500" name="" id="">
                        <option value="1">9</option>
                        <option value="2">18</option>
                        <option value="3">36</option>
                      </select>
                    </div>
                    <p class="text-xs text-gray-400" data-config-id="pag2">of 1200</p>
                  </div>
                  <div class="w-full lg:w-auto flex items-center justify-center">
                    <a class="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" href="#">
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-2">
                        <path d="M2.53335 3.99999L4.86668 1.66666C5.13335 1.39999 5.13335 0.999992 4.86668 0.733325C4.60002 0.466659 4.20002 0.466659 3.93335 0.733325L1.13335 3.53333C0.866683 3.79999 0.866683 4.19999 1.13335 4.46666L3.93335 7.26666C4.06668 7.39999 4.20002 7.46666 4.40002 7.46666C4.60002 7.46666 4.73335 7.39999 4.86668 7.26666C5.13335 6.99999 5.13335 6.59999 4.86668 6.33333L2.53335 3.99999Z" fill="#A4AFBB"></path>
                      </svg>
                    </a>
                    <a class="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" href="#">1</a>
                    <span class="inline-block mr-3">
                      <svg class="h-3 w-3 text-gray-200" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-2">
                        <path d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <a class="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-white bg-indigo-500 rounded" href="#">12</a><a class="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" href="#">13</a><a class="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" href="#">14</a>
                    <span class="inline-block mr-3">
                      <svg class="h-3 w-3 text-gray-200" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-2">
                        <path d="M6 0.666687C5.26667 0.666687 4.66667 1.26669 4.66667 2.00002C4.66667 2.73335 5.26667 3.33335 6 3.33335C6.73333 3.33335 7.33333 2.73335 7.33333 2.00002C7.33333 1.26669 6.73333 0.666687 6 0.666687ZM1.33333 0.666687C0.6 0.666687 0 1.26669 0 2.00002C0 2.73335 0.6 3.33335 1.33333 3.33335C2.06667 3.33335 2.66667 2.73335 2.66667 2.00002C2.66667 1.26669 2.06667 0.666687 1.33333 0.666687ZM10.6667 0.666687C9.93333 0.666687 9.33333 1.26669 9.33333 2.00002C9.33333 2.73335 9.93333 3.33335 10.6667 3.33335C11.4 3.33335 12 2.73335 12 2.00002C12 1.26669 11.4 0.666687 10.6667 0.666687Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <a class="inline-flex mr-3 items-center justify-center w-8 h-8 text-xs border border-gray-300 bg-white hover:bg-indigo-50 rounded" href="#">62</a>
                    <a class="inline-flex items-center justify-center w-8 h-8 text-xs text-gray-500 border border-gray-300 bg-white hover:bg-indigo-50 rounded" href="#">
                      <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-2">
                        <path d="M4.88663 3.52667L2.05996 0.700006C1.99799 0.637521 1.92425 0.587925 1.84301 0.554079C1.76177 0.520233 1.67464 0.502808 1.58663 0.502808C1.49862 0.502808 1.41148 0.520233 1.33024 0.554079C1.249 0.587925 1.17527 0.637521 1.1133 0.700006C0.989128 0.824915 0.919434 0.993883 0.919434 1.17001C0.919434 1.34613 0.989128 1.5151 1.1133 1.64001L3.4733 4.00001L1.1133 6.36001C0.989128 6.48491 0.919434 6.65388 0.919434 6.83001C0.919434 7.00613 0.989128 7.1751 1.1133 7.30001C1.17559 7.36179 1.24947 7.41068 1.33069 7.44385C1.41192 7.47703 1.49889 7.49385 1.58663 7.49334C1.67437 7.49385 1.76134 7.47703 1.84257 7.44385C1.92379 7.41068 1.99767 7.36179 2.05996 7.30001L4.88663 4.47334C4.94911 4.41136 4.99871 4.33763 5.03256 4.25639C5.0664 4.17515 5.08383 4.08801 5.08383 4.00001C5.08383 3.912 5.0664 3.82486 5.03256 3.74362C4.99871 3.66238 4.94911 3.58865 4.88663 3.52667Z" fill="#A4AFBB"></path>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </section>
  </div>
</section>

</div>
</template>

<script lang="ts">
import { AppActionEvents } from '@/events/app.events';
import { getFromStorage } from '@/utils/storage.util';
import {Vue,Options} from 'vue-class-component';
import InfoCard from './reusable/Info-Card.vue';

 @Options({
   components: {
    InfoCard,
  },
  mounted(){
    let roles = this.$store.getters?.getRoles;
    this.role = roles
    let rolesData = getFromStorage('user')?.permissions ?? []
    rolesData = rolesData.length < 83?"":"ADMIN" 
    console.log(roles, !roles); 
    let emptyArray = []
    for(let [key,value] of Object.entries(AppActionEvents)){
      emptyArray.push({
          title: key,
          range: 10,
          btnMore: 78,
          description: this.$store.getters['get'+key.slice(0,1).toUpperCase()+key.slice(1)+'s'],
          topImage: "fas fa-archive",
          bgColor: "bg-blue-500",
          actions: {
            showMore: "show product listing",
            showStatistics: "show product statistics",
          },
          routes: {
            toListingView: key === 'role'?'/settings':key === "group"?'/settings/groups': key ==="preference"?'/settings/preferences':"dashboard/"+key+'s',
            toStatisticsView: "products/statistics",
          },
        },)
    }

    emptyArray = emptyArray.filter((data) => !!data.description)
  this.cardSetup = emptyArray

    
  }

 })
export default class Default extends Vue{
  dataObject:any = getFromStorage('user')
  roles = this.dataObject['permissions']

  

  data() {
    return {
      cardSetup:[],
      role:''
    };
  }    
}
</script>