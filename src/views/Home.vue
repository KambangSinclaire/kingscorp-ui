<template>
  <!-- <div class="general-container w-full h-screen bg-gray-100 grid  md:grid-cols-6 overflow-hidden relative">
    <div class="left-sidebar col-span-1 w-full h-screen py-6 pl-4">
      <div class="rounded-lg  w-full flex justify-center items-center h-full px-4">
        <div class="w-full left-img   overflow-hidden rounded-md"><img class="h-full w-full img"  src="@/assets/logo/logo4-removebg-preview.png" alt=""></div>
      </div>
    </div>
    <div class="col-span-5 w-full h-screen p-6 ">
      <div style="background:rgb(227, 243, 240);" class="w-full rounded-lg  pl-10 pr-6 py-4 ">
        <div class="flex justify-between items-center">
          <div class="w-1/2 text-left capitalize">
            <h1 class="text-4xl font-extrabold  text-gray-900">Get everything you need to <br> brand your business</h1>
            <router-link to="/login">
            <button class="px-16 py-2.5 rounded-md bg-blue-700 shadow-3xl mt-4 text-white flex justify-center items-center font-bold">
             Get Started
            </button>
            </router-link>
          </div>
          <div class="img-contatiner ">
          <img src="@/assets/img/img1.png" alt="" >
          </div>
        </div>
        <div class="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4 my-4">
          <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-left">The idea of a secure business manager</h1>
            <p class="font-normal text-gray-700">
              It is kingscorp. easy multi perfomant solution in one software. The inspiration of kings
            </p>
          </div>
            <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-left">Kingscorp's Intuitive Technologies </h1>
            <p class="font-normal text-gray-700">
              Remote aid to and persistent data backups. we exist both offline and online.
            </p>
          </div>
            <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-left">Check Kingscorp in all it forms</h1>
            <p class="font-normal text-gray-700">
              we provide more than you can immagine. get to our official page and we will guide you.
            </p>
          </div>
        </div>
      </div>

      <div  class="w-full rounded-lg  pl-10 mt-16 pr-6 py-4 ">
         <h1 class="text-4xl font-extrabold  text-gray-900 mb-6 text-center ">Welcome Dear user</h1>
        <div class="flex justify-between items-center">
          
          <div class="w-full text-center capitalize">
             <div class="w-full flex flex-col">
            <h1 class="font-bold text-l text-gray-900 my-4 text-center">Kingscorp's Intuitive Technologies </h1>
            <p class="font-normal text-gray-700">
              Remote aid to and persistent data backups. we exist both offline and online.
            </p>
          </div>
          <div class="flex items-center justify-center">
            <router-link to="/login">
             <button class="px-16 py-2.5 rounded-md bg-blue-700 shadow-3xl mt-4 text-white flex justify-center items-center font-bold">
             Get Started
            </button>
            </router-link>
          </div>
          </div>
        
        </div>
      </div>
    </div>

  </div> -->
  <section
    id="page"
    class="antialiased font-body bg-body text-body"
    cz-shortcut-listen="true"
  >
    <div class="" id="content">
      <section
        data-section-id="1"
        data-category="headers"
        data-component-id="44d0b9e2_01_awz"
        class="relative pb-20 bg-gray-800 h-screen overflow-hidden"
      >
        <div
          class="absolute bottom-0 inset-x-0 h-full bg-gradient-zospace-1"
        ></div>
        <div
          class="absolute bottom-0 inset-x-0 h-3/5 w-2full -ml-64 -mb-12 bg-gradient-zospace-2 transform -rotate-6"
        ></div>
       

        <div class="relative container px-4 pt-12 md:pt-20 mx-auto">
          <div
            class="hidden 2xl:block absolute bottom-0 w-3/5 mb-40 h-2 "
          ></div>
          <div class="relative flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 2xl:w-2/5 px-4 mb-12 mb:mb-0">
              <span
                class="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600"
                data-config-id="label"
                >Two ways to start!</span
              >
              <h2
                class="max-w-lg lg:max-w-md 2xl:max-w-none mt-5 mb-10 mb:mb-16 text-4xl lg:text-5xl 2xl:text-7xl text-white font-bold font-heading"
              >
                Get perfect app for your project
              </h2>
          
              <div class="flex flex-wrap items-center">
                <a
                  class="inline-block mr-14 px-12 py-2 text-lg text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-md transition duration-200"
                  href="#"
                  data-config-id="hero-primary-action"
                  >Get started</a
                >
              
              </div>
            </div>
            <div class="w-full lg:w-1/2 2xl:w-3/6 px-4">
              <img
                class="w-full h-full object-contain"
                src="@/assets/img/two-phones.png"
                alt=""
                data-config-id="image1"
              />
            </div>
          </div>
        </div>

        <div
          class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
          data-config-id="toggle-mobile-2"
          data-config-target=".navbar-menu"
          data-config-class="hidden"
        >
          <div
            class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
          ></div>
          
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {
  data() {
    return {
      message: "Welcome to kingscorp We celebrate you",
    };
  }
}
</script>
<style lang="scss" scoped>
.left-img {
  transform: rotate(90deg);
}
.img {
  // transform: rotate(90deg);
  transform: scale(1.7);
}
</style>
