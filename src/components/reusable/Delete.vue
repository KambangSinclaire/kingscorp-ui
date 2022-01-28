<template>
  <div class="w-full h-screen fixed top-0 py-2 left-0 bg-white  overflow-y-auto">
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
            <div class=" bg-red-500" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 7 / start / auto / 4;">
            <div class="bg-red-500 animationLeftRight" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 8 / 4 / auto / 6;">
            <div class="bg-gray-100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 2 / 15 / auto / end;">
            <div class="bg-red-200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 3 / 14 / auto / end;">
            <div class="bg-red-500 animationRightLeft" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 4 / 17 / auto / 20;">
            <div class=" bg-gray-100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
          </div>
          <div class=" flex-flex" style="grid-area: 5 / 14 / auto / 17;">
            <div class=" box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
          </div>
        </div>
      </div>
    <!-- component -->

   <!-- Delete Product Modal -->
<div class=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 flex justify-center align-center top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full" id="popup-modal">
    <div class="relative px-4 w-full max-w-md h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-2xl border-t-4 border-red-500 dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-end p-2">
                <button type="button"   @click="closeForm" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-6 pb-6 relative text-center">
               
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>

            <form action="" class="">
                <div class="mb-6">
                    
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none dark:focus:border-blue-500">
                </div>

            </form>

                <button  @click="deleteResource" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button @click="closeForm" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">No, cancel</button>
            </div>
        </div>
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
  methods: {
    closeForm() {
      this.$emit("closeForm", "closeForm");
    },
    deleteResource() {
      this.$store.dispatch(this.setup?.actions?.delete, this.setup?.data?.id);
      this.$store.dispatch(this.setup?.actions?.list);
      this.closeForm();
    },
  },
  emits: ["closeForm"],
})
export default class Delete extends Vue {}
</script>

<style lang="scss" scoped>

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