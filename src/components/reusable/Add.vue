<template>

  <div class="w-full h-screen fixed top-0 p-6 left-0 bg-gray-600 bg-opacity-80 overflow-y-auto z-50" >

    <div class="w-full h-full">
      <div class="flex items-center justify-center relative h-screen w-full">

          <form>

            <div class="shadow w-600 rounded-md bg-white overflow-hidden">

              <div class="px-4 py-5  space-y-6 sm:p-6 relative">
                
                <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center absolute top-4 right-4 items-center shadow-lg bg-white rounded-lg text-gray-800 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <h1 class="text-2xl font-bold border-b py-4 capitalize"> Add New {{setup?.entity}} </h1>

                <div class="grid grid-cols-2 gap-6"  >
                  <div v-for="(inputType, inputName) of formatInputs.normalInputs" :key="inputName"  class="w-full" :class="{ 'hidden':inputType == 'file'}">
                    <label class="block text-sm font-medium text-gray-700 capitalize" :for="inputName" >
                      {{inputName}}
                    </label>
                    <input class=" mt-1 focus:outline-none focus:ring-blue-700 border focus:border-blue-700 block w-full shadow text-sm border-gray-300
                      rounded-md p-3 " :type="inputType" v-model="clearedDefaultInputValues[inputName]" :placeholder="inputName" :id="inputName"
                      @input="valueChanged" />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 grid-cols-1  gap-6" >
                  <div class="w-full cursor-text" v-for="(inputType, inputName) of formatInputs.specialInputs"
                  :key="inputName" :class="{ 'hidden':inputType !== 'file', 'hidden':inputType === 'textarea' }">
                    
                    <div>
                    <label :id="inputName" :for="inputName" class="block text-sm font-medium text-gray-700"> {{inputName}} </label>
                    <div class="mt-1 relative">
                      <button type="button"  @focus.prevent="this.list = true" class="relative cursor-text w-full bg-white border border-gray-300 rounded-md shadow h-12 text-left focus:outline-none flex focus:ring-1 focus:ring-blue7500 focus:border-blue-700 sm:text-sm" placeholder="select one or many....">
                        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        
                        <span :class="{'hidden':selectsFilters?.length == 0}" v-for="i of this.selectsFilters" :key="i" class="bg-blue-700 text-white mt-1 mx-0.5 justify-between rounded-md inset-y-0 left-0 flex items-center h-9 w-28 px-2 ">
                            <small class="truncate text-center">{{i?.text}}</small>
                          <a class="cursor-pointer" @click.prevent="delSelect(i?.id)">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          </a>
                        </span>

                        <!-- v-model="formatInputs.specialInputs[inputName]"  -->
                      </button>
                      <ul :class="{'hidden': !list}" class="absolute z-10 mt-1 w-full bg-gray-100 shadow-lg max-h-56 rounded-md text-base ring-1 ring-blue-800 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" >
                        <input type="text" class="relative cursor-text  w-full bg-white border border-gray-300 rounded-md shadow pl-9 py-2 text-left " :placeholder="`search ${inputName}.....` ">
                        <span class="absolute left-3 top-3 flex items-center pr-2 pointer-events-none">
                         
                          <svg xmlns="http://www.w3.org/2000/svg"  class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>

                        </span>

                        <li v-for="(data, index) of relations[inputName]" :value="data.id" :key="index" class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-blue-600 hover:text-white group" @click.prevent="addSelect(data?.name, inputName)">
                          <div class="flex items-center">
                            <span class="font-normal ml-3 block truncate">{{data?.name}}</span>
                          </div>

                          <span class="text-blue-800 absolute inset-y-0 right-0 flex group-hover:text-white items-center pr-4">
                            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                          </span>
                        </li>

                      </ul>

                    </div>
                    </div>

                  </div>

                </div>
                 
                <div v-for="(inputType, inputName) of formatInputs.normalInputs" :key="inputName" :class="{'hidden': inputType !== 'file'}" >
                  <p class="block text-sm font-medium text-gray-700">Photo</p>
                  <div class="mt-1 flex items-center" >
                 
                    <div class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100 " >
                      <img v-bind:src="previewImage"  alt="" class="w-full h-full ">
                    </div>
                    <input @input="pickFile" class="hidden" type="file" id="img" />

                    <label for="img" class="ml-5 cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm
                        text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-800
                      " >
                       Photo
                    </label>
                  </div>
                </div>

                <div v-for="(inputType, inputName) of formatInputs.specialInputs" :key="inputName" :class="{'hidden': inputType !== 'textarea' }">
                  <label class="block text-sm font-medium text-gray-700 capitalize" :for="inputName" >
                    {{inputName}}
                  </label>
                  <div class="mt-1">
                    <textarea rows="3" class=" focus:ring-blue-800 resize-none border focus:border-blue-800
                      block w-full shadow :text-sm border-gray-300 rounded-md p-3 lg:col-span-2 " :id="inputName"
                      v-model="formatInputs.specialInputs[inputName]" :placeholder="`Describe Your ${setup?.entity}`" >
                    </textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your {{setup?.entity}}.
                  </p>
                </div>

              </div>

              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-3 w-full px-16 border border-transparent shadow
                    text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none
                    focus:ring-1 focus:ring-offset-2 focus:ring-blue-500  mb-6"
                  @click.prevent="saveData" >
                  Save
                </button>
              </div>

            </div>

          </form>

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
    addSelect(data, inputName){
      this.selectsFilters?.push({id:this.selectsFilters.length + 1, text:data, inputName})
      console.log(this.selectsFilters);
    },
    delSelect(id){
      this.selectsFilters = this.selectsFilters.filter(a => a?.id !== id)
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
      if(this.selectsFilters.length !== 0){

        for (let i of this.selectsFilters) {
         let arr = [], name = i.inputName;
         arr = arr.push(i); 
          payload[name] = []; 
        }
      }
      // this.$store.dispatch(this.setup?.actions?.add, payload);
      // this.$store.dispatch(this.setup?.actions?.list);
      console.log(payload, this.selectsFilters);
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
      if( AppActionEvents[key] !== undefined && AppActionEvents[key].retrieve !== undefined)
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
      list:false,
      previewImage: null,
      selectsFilters:[],
    };
  }
}
</script>

<style lang="scss" scoped>
.w-600{
  width: 600px;
  max-width: 100%;
  animation: myAnim 0.4s ease 0s 1 normal forwards;
}

@keyframes myAnim {
	0% {
		transform: scale(0.5);
	}

	100% {
		transform: scale(1);
	}
}

</style>
