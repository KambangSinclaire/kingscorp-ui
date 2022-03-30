<template>
  <!-- <div class="container w-full fixed top-24 -right-4">
    <form action="" class="form-container bg-gray-100 shadow-lg w-2/4 p-8">
      <div class="flex justify-between items-center">
        <h1 class="medium-center-header py-4 font-extrabold">
          Edit {{ setup?.data?.entity }} info
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
            :type="inputType"
            v-if="inputType !== 'file'"
            v-model="setInputValues[inputName]"
            class="form-control mx-2 w-1/2"
            :placeholder="inputName"
            @input="valueChanged"
          />
          <span v-if="inputType == 'file'">
            <img
              :src="setInputValues[inputName]"
              :alt="setInputValues[inputName]"
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
            <option :value="setInputValues[inputName]">{{ inputName }}</option>
          </select>
        </div>

        <div class="" v-if="isTextArea">
          <textarea
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
            name=""
            id=""
            cols="30"
            rows="3"
            class="form-control mx-2 w-1/2"
            v-model="setInputValues[inputName]"
          >
          </textarea>
        </div>

        <button class="app-btn" @click.prevent="updateResource">
          Update {{ setup?.data?.entity }}
        </button>
      </div>
    </form>
  </div> -->
  <!-- <div class=" w-full h-screen fixed top-0 py-2 left-0 bg-white  overflow-y-auto">
     <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      <div class="loginbackground box-background--white padding-top--64">
        <div class="loginbackground-gridContainer">
          <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
            <div class="box-root" style="background-image: linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1;">
            </div>
          </div>
          <div class=" flex-flex" style="grid-area: 4 / 2 / auto / 5;">
            <div class=" box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 6 / start / auto / 2;">
            <div class=" bg-blue-700" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="bg-blue-600 animationLeftRight" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="bg-gray-100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="bg-cyan-200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div class="bg-blue-600 animationRightLeft" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div class=" bg-gray-100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div class=" box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
          </div>
        </div>
      </div>
      <div class=" flex flex-col" style="z-index:9;">
       
              <form action="" class="form-container relative rounded-md overflow-hidden top-12 bg-white shadow-lg  p-6">
      <div class="flex justify-between items-center">
        <h1 class="medium-center-header pt-2 font-extrabold">
            Edit {{ setup?.data?.entity }} info
        </h1>
        <span
          class="absolute  top-0 right-0 px-2 cursor-pointer py-1 text-white bg-gray-700 rounded-l"
          @click="closeForm"
        >
          <i class="far fa-window-close "></i>
        </span>
      </div>

      <div class="w-full h-full px-4 ">
        <div
          class="w-full my-6"
          v-for="(inputType, inputName) of formatInputs.normalInputs"
          :key="inputName"
        >
          <label
            :for="inputName"
            class=" capitalize cursor-pointer"
            >{{ inputName }}</label
          >
          <input
            :type="inputType"
            class="form-control w-full"
            :placeholder="inputName"
            tabindex="-1"
            :id="inputName"
            @input="valueChanged"
            v-model="setInputValues[inputName]"
          />
        </div>

        <div class="" v-if="isSelect">
          <div
            class="container"
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
          >
            <select
              v-if="inputType === 'select'"
              v-model="formatInputs.specialInputs[inputName]"
              class="form-control w-full "
            >
              <option selected>{{ inputName }}</option>
              <option
                v-for="(data, index) of relations[inputName]"
                :value="data.id"
                :key="index"
              >
                {{ data?.name }}
              </option>
            </select>
          </div>
        </div>

     
        <div class="" v-if="isTextArea">
          <div
            class="container"
             v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
          >
           <label
            :for="inputName"
            class=" capitalize cursor-pointer"
            >{{ inputName }}</label
          >
            <textarea
              v-if="inputType === 'textarea'"
              cols="30"
              rows="3"
              class="form-control w-full mb-4 resize-none"
              v-model="setInputValues[inputName]"
              
            >
            </textarea>
          </div>
        </div>

        <button class="app-btn w-full" @click.prevent="updateResource">Update {{ setup?.data?.entity }}</button>
      </div>
              </form> 
      
      </div>
    </div>
  </div>

  </div> -->

  <div
    class="w-full h-screen fixed top-0 p-6 left-0 bg-gray-100 overflow-y-auto z-50" 
  >
   

       <!-- product -->
    <div class="w-full h-full" >
      <div class="md:grid  md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1 ">
             <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0 h-full  ">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6" > Edit {{ setup?.data?.entity }} info</h3>
            <p class="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi tenetur cumque neque dignissimos facere velit maiores provident sint delectus nisi laborum quasi molestias quas consequuntur quod, aliquid alias deserunt maxime?
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
          <form >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div class="grid grid-cols-6 gap-6"  >
                  <div   
                   v-for="(inputType, inputName) of formatInputs.normalInputs"
                    :key="inputName"
                  class="'col-span-6 sm:col-span-3"
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
                      :placeholder="inputName"
                      :id="inputName"
                       @input="valueChanged"
                      v-model="setInputValues[inputName]"
                  
                  />

                  </div>
                </div>

                  <div class="grid grid-cols-6 gap-6" v-if="isSelect" >
                  <div class="col-span-6 sm:col-span-3 "   
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
                      <option selected>{{ inputName }}</option>
                      <option
                            v-for="(data, index) of relations[inputName]"
                            :value="data.id"
                            :key="index"
                          >
                          {{ data?.name }}
                      </option>
                    </select>
                  </div>

                  </div>
             
                 
                <div   v-for="(inputType, inputName) of formatInputs.normalInputs"
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
                      <img v-bind:src="previewImage"  alt="" zclass="w-full h-full ">
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
                </div>

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
                       v-model="setInputValues[inputName]"
                      placeholder="Describe Your Product"
                    ></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your product.
                  </p>
                </div>
              </div>

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  class="
                    inline-flex
                    justify-center
                    py-2
                    px-16
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-blue-800
                    hover:bg-blue-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                  "
                  @click.prevent="updateResource"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
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
    setInputValues() {
      return { ...this.setup?.data };
    },
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    updateResource() {
      // // console.log(this.setInputValues);
      const id = this.setInputValues.id;
      delete this.setInputValues?.entity;
      delete this.setInputValues?.id;
      const payload = { id, data: this.setInputValues };
      // DISPATCH ADD EVENT HERE TO ADD IN THE STORE BASED ON THE ACTION PASSED
      this.$store.dispatch(this.setup?.actions?.edit, payload);
      this.$store.dispatch(this.setup?.actions?.list);
      this.closeForm();
    },
    pickFile(payload) {
      let input = payload?.target?.files
      if(input){
        let reader = new FileReader()
        reader.onload = (e) => this.previewImage = e.target.result
       reader.readAsDataURL(input[0]);
      }
    },
  },
  emits: ["closeForm"],
})
export default class Edit extends Vue {
  data() {
    return {
      isSelect: false,
      isTextArea: false,
      specialTypes: {
        select: true,
        textarea: true,
      },
      previewImage:null,
    };
  }
}
</script>


<style lang="scss" scoped>

</style>