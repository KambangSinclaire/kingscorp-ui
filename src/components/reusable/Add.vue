<template>

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
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6" > Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Carefully Fill In The Product With All It's Required Data. You May
              Want To Update Later.

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
                       v-model="clearedDefaultInputValues[inputName]"
                      :placeholder="inputName"
                      :id="inputName"
                      @input="valueChanged"
                  
                  />

                  </div>
                </div>

                  <div class="grid grid-cols-6 gap-6" >
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
                      <!-- <option selected>{{ inputName }}</option> -->
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
                       v-model="formatInputs.specialInputs[inputName]"
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
                  @click.prevent="saveData"
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
import { AppActionEvents } from "../../events/app.events";

@Options({
  props: {
    setup: Object,
  },

  computed: {
    formatInputs() {
      const inputs = { ...this.setup.inputs };
      let normalInputs = {};
      let specialInputs = {};
      for (const [key, value] of Object.entries(inputs)) {
        let isSpecialInputType = this.specialTypes[value] ? true : false;
        if (isSpecialInputType) {
          specialInputs[key] = value;
          this.isSelect = value === "select" ? true : this.isSelect;
          this.isTextArea = value === "textarea" ? true : this.isTextArea;
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
    relations() {
      const specialInputs = { ...this.formatInputs.specialInputs };
      const relationalInputs = { ...this.setup.relations };
      console.log(specialInputs);
      let results = {};
      for (const [key, value] of Object.entries(specialInputs)) {
        console.log(relationalInputs[key]);
        if (relationalInputs[key]) {
          results[key] = this.$store.getters[`get${relationalInputs[key]}`];
        }
      }

      return results;
    },
  },

  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    saveData() {
      const payload = {
        ...this.clearedDefaultInputValues,
        ...this.formatInputs.specialInputs,
      };
      if(payload.hasOwnProperty('image_url')){
        // payload['image_url']=btoa(this.previewImage)
        payload['image_url']='rerajkdljakd'
      }
       if(payload.hasOwnProperty('profile_image')){
         payload['profile_image']='asdfkal;kdl;fk'
        // payload['profile_image']=btoa(this.previewImage)
      }
      
      this.$store.dispatch(this.setup?.actions?.add, payload);
      this.$store.dispatch(this.setup?.actions?.list);
      console.log(payload);
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

  mounted() {
    const relationalInputs = { ...this.setup.relations };
    let relations = [];
    for (const [key, value] of Object.entries(relationalInputs)) {
      relations.push(`${key}`);
      this.$store.dispatch(AppActionEvents[key].retrieve, { relations });
    }
  },
})
export default class Add extends Vue {
  data() {
    return {
      isSelect: false,
      isTextArea: false,
      specialTypes: {
        select: true,
        textarea: true,
      },
      previewImage: null,
    };
  }
}
</script>

<style lang="scss" scoped>
input:focus,
textarea:focus {
  outline: 1px solid blue;
}

.login-root {
  background: #fff;
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.loginbackground {
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
}
.flex-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.center-center {
  align-items: center;
  justify-content: center;
}

.flex-direction--column {
  -ms-flex-direction: column;
  flex-direction: column;
}
.loginbackground-gridContainer {
  display: -ms-grid;
  display: grid;
  grid-template-columns: [start] 1fr [left-gutter] repeat(16, 86.6px) [left-gutter] 1fr [end];
  grid-template-rows: [top] 1fr [top-gutter] repeat(8, 64px) [bottom-gutter] 1fr [bottom];
  justify-content: center;
  margin: 0 -2%;
  transform: rotate(-12deg) skew(-12deg);
}
.box-divider--light-all-2 {
  box-shadow: inset 0 0 0 2px #e3e8ee;
}

.grid--50-50 {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.animationRightLeft {
  animation: animationRightLeft 2s ease-in-out infinite;
}
.animationLeftRight {
  animation: animationLeftRight 2s ease-in-out infinite;
}
.tans3s {
  animation: animationLeftRight 3s ease-in-out infinite;
}
.tans4s {
  animation: animationLeftRight 4s ease-in-out infinite;
}

@keyframes animationLeftRight {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes animationRightLeft {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
