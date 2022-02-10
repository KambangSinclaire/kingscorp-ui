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
  <div class=" w-full h-screen fixed top-0 py-2 left-0 bg-white  overflow-y-auto">
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
      console.log(this.setInputValues);
      const id = this.setInputValues.id;
      delete this.setInputValues?.entity;
      delete this.setInputValues?.id;
      const payload = { id, data: this.setInputValues };
      // DISPATCH ADD EVENT HERE TO ADD IN THE STORE BASED ON THE ACTION PASSED
      this.$store.dispatch(this.setup?.actions?.edit, payload);
      this.$store.dispatch(this.setup?.actions?.list);
      this.closeForm();
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
    };
  }
}
</script>


<style lang="scss" scoped>
form{
  width: 500px;
max-width: 100%;
margin-top: -2.5rem;
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
    grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
    grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
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