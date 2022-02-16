<template>
  <!-- <div class="container w-full fixed top-24 -right-4">
    <form action="" class="form-container bg-gray-100 shadow-lg w-2/4 p-8">
      <div class="flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">
          View {{ setup?.data?.entity }} details
        </h1>
        <span
          class="relative -top-8 left-60 cursor-pointer text-red-400"
          @click="closeForm"
        >
          <i class="far fa-window-close fa-2x"></i>
        </span>
      </div>

      <div class="w-full h-full">
        <div
          class="w-full"
          v-for="(inputType, inputName) of formatInputs.normalInputs"
          :key="inputName"
        >
          <input
            v-if="inputType !== 'file'"
            :type="inputType"
            v-model="setup.data[inputName]"
            class="form-control mx-2 w-1/2"
            :placeholder="inputName"
            readonly
          />
          <span v-if="inputType == 'file'">
            <img
              :src="setup.data[inputName]"
              :alt="setup.data[inputName]"
              srcset=""
            />
          </span>
        </div>

        <div class="" v-if="isSelect">
          <select
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
            name=""
            id=""
            class="form-control mx-2 w-1/2"
          >
            <option :value="setup.data[inputName]">{{ inputName }}</option>
          </select>
        </div>

        <div class="" v-if="isTextArea">
          <textarea
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
            name=""
            id=""
            cols="30"
            readonly
            rows="3"
            class="form-control mx-2 w-1/2"
            v-model="setup.data[inputName]"
          >
          </textarea>
        </div>
       
      </div>
    </form>
  </div> -->
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div class="absolute inset-0 overflow-hidden">
    <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
      <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <div class="relative w-screen max-w-md">
        <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
    

        <div class="h-full flex flex-col side  bg-white shadow-xl overflow-y-auto">
          <div class="px-4 sm:px-6 bg-blue-700 py-6">
            <div class="relative flex justify-between w-full mb-4">
            <h2 class="text-lg font-medium text-gray-100" id="slide-over-title"> View {{ setup?.data?.entity }} details </h2>
               <button @click="closeForm" type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: outline/x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
            </div>
            <p class="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, qui.</p>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <!-- Replace with your content -->
             <form >
            <div class="">
              <div class=" py-5 bg-white space-y-6 ">
                <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  class="'col-span-6 sm:col-span-6"
                  :class="{ 'hidden':inputType == 'file'}">
                  <label class="block text-sm font-medium text-gray-700 capitalize"
                    :for="inputName"
                    >{{inputName}}</label
                  >
                  <input
                    
                    class="
                      mt-1
                      focus:ring-blue-600
                      border
                      focus:border-blue-600
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                      p-2
                    "
            :type="inputType"
            v-model="setup.data[inputName]"
            
            :placeholder="inputName"
            readonly
                     
                  
                  />

                  </div>
                </div>

                  <div class="grid grid-cols-6 gap-6"  v-if="isSelect">
                  <div class="col-span-6 sm:col-span-6"   
                  v-for="(inputType, inputName) of formatInputs.specialInputs"
                  :key="inputName" :class="{ 'hidden':inputType !== 'file', 'hidden':inputType === 'textarea' }">
                    <label class="block text-sm font-medium text-gray-700 capitalize"
                     :for="inputName"
                      >{{inputName}}</label
                    >

                    <select
                      class="
                        mt-1
                        block
                        w-full
                        py-2
                        px-3
                        border border-gray-300
                        bg-white
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:ring-indigo-500
                        focus:border-indigo-500
                        sm:text-sm
                      "
                       v-model="formatInputs.specialInputs[inputName]"
                    >
                        <option :value="setup.data[inputName]">{{ inputName }}</option>
                    </select>
                  </div>

                  </div>
             
                 <!-- photo -->
                <!-- <div   v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                   :class="{'hidden': inputType !== 'file'}"
                  >
                  <p class="block text-sm font-medium text-gray-700">Photo</p>

                  <div
                    class="mt-1 flex items-center"
                  >
                 
                    <div
                      class="
                        inline-block
                        h-12
                        w-12
                        rounded-full
                        overflow-hidden
                        bg-gray-100
                      "
                    >
                      <img v-bind:src="previewImage"  alt="" class="w-full h-full ">
                    </div>
                    <input
                      @input="pickFile"
                      class="hidden"
                      type="file"
                      id="img"
                      
                    />

                    <label
                      for="img"
                      class="
                        ml-5
                        cursor-pointer
                        bg-white
                        py-2
                        px-3
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        text-sm
                        leading-4
                        font-medium
                        text-gray-700
                        hover:bg-gray-50
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-indigo-500
                      "
                    >
                       Photo
                    </label>
                  </div>
                </div> -->

                <div   v-for="(inputType, inputName) of formatInputs.specialInputs"
                  :key="inputName" :class="{'hidden': inputType !== 'textarea' }">
                  <label class="block text-sm font-medium text-gray-700 capitalize"
                     :for="inputName"
                    >{{inputName}}</label
                  >
                  <div class="mt-1">
                    <textarea
                      rows="3"
                      class="
                        focus:ring-blue-600
                        resize-none
                        border
                        focus:border-blue-600
                        block
                        w-full
                        shadow-sm
                        sm:text-sm
                        border-gray-300
                        rounded-md
                        p-2 lg:col-span-2
                      "
                       v-model="setup.data[inputName]"
                      placeholder="Describe Your Product"
                    ></textarea>
                  </div>
                 
                </div>
              </div>

             
            </div>
          </form>
            <!-- /End replace -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    setup: Object,
  },
  computed: {
    formatInputs() {
      let inputs = { ...this.setup.inputs };
      let normalInputs = {};
      let specialInputs = {};
      for (const [key, value] of Object.entries(inputs)) {
        let isSpecialInputType = this.specialTypes[value] ? true : false;
        if (isSpecialInputType) {
          if (value === "select") {
            this.isSelect = true;
            specialInputs[key] = value;
          }
          if (value === "textarea") {
            this.isTextArea = true;
            specialInputs[key] = value;
          }
        } else {
          normalInputs[key] = value;
        }
      }
      return { normalInputs, specialInputs };
    },
    clearedDefaultInputValues() {
      let inputs = { ...this.formatInputs.normalInputs };
      for (const [key] of Object.entries(inputs)) {
        inputs[key] = "";
      }
      return inputs;
    },
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    // saveData() {
    //   const payload = {
    //     ...this.clearedDefaultInputValues,
    //     ...this.formatInputs.specialInputs,
    //   };
    //   // DISPATCH ADD EVENT HERE TO ADD IN THE STORE BASED ON THE ACTION PASSED
    //   this.$store.dispatch(this.setup?.actions?.add, payload);
    //   this.$store.dispatch(this.setup?.actions?.list);
    // },
  },
  emits: ["closeForm"],
})
export default class Details extends Vue {
  data() {
    return {
      isSelect: false,
      isTextArea: false,
      specialTypes: {
        select: true,
        textarea: true,
      },
    };
  }
}
</script>

<style lang="scss" scoped>
.side{
  animation: slideIn 1s ease 0s 1 normal forwards;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(250px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>