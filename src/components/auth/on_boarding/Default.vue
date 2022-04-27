<template>
    <main class="w-full h-screen flex items-center justify-center bg-gray-50">
        <div class="md:w-3/4 lg:w-1/2 w-full px-4 relative">
            <h1 class="font-bold md:text-5xl sm:text-2xl my-10 text-center capitalize">Setup Your Business Structure.</h1>
            <div class="w-inherit h-auto grid md:grid-cols-4 gap-4 grid-cols-2 ">
                <a v-for="i of modules" :key="i" class="rounded-lg shadow-lg border-blue-300 cursor-pointer border-2 bg-blue-100 w-36 h-36 flex justify-center flex-col items-center relative" @click.prevent="toggleSelect(i.name)">
                    <input :id="i.name" type="checkbox" class="w-5 absolute right-2 top-2 h-5 border border-blue-500 rounded-full bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 shadow dark:ring-offset-gray-800" >
                   <span v-html='i.icon'></span>
                    <h3 class="text-xl font-bold">{{i?.name}}</h3>
                </a>

                <a  class="rounded-lg shadow-lg border-blue-300 cursor-pointer border-2 bg-blue-100 w-36 h-36 flex justify-center flex-col items-center relative" >
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <h3 class="text-xl font-bold">Add New</h3>
                </a>

            </div>
            <div class="flex w-full items-end justify-end px-9">
            <button class="bg-blue-700 text-white capitalize px-10 flex items-center justify-center py-2 rounded-md shadow-lg  focus:ring focus:ring-blue-300 my-10">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </button>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';

@Options({
    methods:{
        toggleSelect(id:string){
            let x:HTMLInputElement = document.getElementById(id) as HTMLInputElement;
            x.toggleAttribute('checked')
            this.modules.find((x:any) => x.name == id).selected = true;
        }
    }
})
export default class Onboard extends Vue{
 data(){
     return {
        modules:[

        {
            name:'product',
            selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>`
          },{
            name:'service',
            selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>`
          },{
            name:'stock',
            selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>`
          },{
            name:'invoice',
            selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>`
          },{
            name:'personnel',
            selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>`
          },{
            name:'credit',
           selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>`
          },{
            name:'sale',
            selected:false,
            icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>`
          },
          {
        name: "categories",
        selected:false,
        icon:`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>`
        },
    ]
     }
 }
}
</script>