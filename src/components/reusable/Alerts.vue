<template>
  <div class="alerts container w-full fixed top-24 -right-4">
    <!-- <span
      class="relative -top-8 left-60 cursor-pointer text-red-400"
      @click="closeForm"
    >
      <i class="far fa-window-close fa-2x"></i>
    </span> -->

    <!--modal content-->
<div
	class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
>
	<div class="mt-3 text-center">
    <div v-if="messageType == 'error'" class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>
    </div>
       <div v-if="messageType == 'warn'" 	class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>
    </div>
       <div  v-if="messageType == 'success'" 	class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
			<svg
				class="h-6 w-6 text-green-600"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path>
			</svg>
    </div>
	
		<h3 class="text-lg leading-6 font-medium text-gray-900 capitalize">
      {{messageType}}
    </h3>
		<div class="mt-2 px-7 py-3">
			<p class="text-sm text-gray-500 capitalize">
				<!-- Account has been successfully registered! -->
        {{messageContent}}
			</p>
		</div>
		<div class="items-center px-4 py-3">
			<button
      v-if="messageType == 'error'"
				id="ok-btn"
				class="px-4 py-2 bg-red-600  text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
         @click="closeForm"
			>
				OK
			</button>

      	<button
      v-if="messageType == 'warn'"
				id="ok-btn"
				class="px-4 py-2 bg-yellow-600  text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
         @click="closeForm"
			>
				OK
			</button>

      	<button
      v-if="messageType == 'success'"
				id="ok-btn"
				class="px-4 py-2 bg-green-600  text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
         @click="closeForm"
			>
				OK
			</button>
		</div>
	</div>
</div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props:['messageType', 'messageContent']
})

export default class Alert extends Vue {}
</script>

<style lang="scss" scoped>
</style>