<template>
  <div class="general-container w-full h-screen bg-gray-100 grid  md:grid-cols-6 overflow-hidden relative">
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
            <!-- <div class="img-contatiner ">
          </div> -->
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

  </div>
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
.left-img{
  transform: rotate(90deg);
  }
.img{
  // transform: rotate(90deg);
  transform: scale(1.7);

}
</style>