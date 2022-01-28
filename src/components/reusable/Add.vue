<template>
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
          Add new {{ setup?.entity }}
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
            v-model="clearedDefaultInputValues[inputName]"
            class="form-control w-full"
            :placeholder="inputName"
            tabindex="-1"
            :id="inputName"
            @input="valueChanged"
          />
        </div>

        <div class="grid grid-cols-1 grid gap-4 md:grid-cols-2 w-full lg:grid-cols-2" v-if="isSelect">
          <div
            class=""
            v-for="(inputType, inputName) of formatInputs.specialInputs"
            :key="inputName"
          >
            <select
               :class="{'hidden': inputType === 'select'}"
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
              v-model="formatInputs.specialInputs[inputName]"
            >
            </textarea>
          </div>
        </div>

        <button class="app-btn w-full" @click.prevent="saveData">Save info</button>
      </div>
              </form> 
      
      </div>
    </div>
  </div>

  </div> -->

  <div
    class="w-full h-screen fixed top-0 p-6 left-0 bg-gray-100 overflow-y-auto"
  >
    <!-- product -->
    <div class="w-full h-full" v-if="setup?.entity === 'Product' ">
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
              {{ setup }} {{formatInputs}}
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
                  :class="{'col-span-6 sm:col-span-3': inputType == 'number' , 'col-span-6':inputType == 'text', 'hidden':inputType == 'file'}">
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
                      border-gray-300
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

    <!-- service -->
    <div class="w-full"  v-if="setup?.entity === 'Service' ">
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
          <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Add The Service You Wish To Manage. You May
              Want To Update Later.
              {{ setup }}
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
                  :class="{'col-span-6 sm:col-span-3': inputType == 'number' , 'col-span-6':inputType == 'text', 'hidden':inputType == 'file'}">
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
                      border-gray-300
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
                    px-10
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

    <!-- sale -->
    <div class="w-full"  v-if="setup?.entity === 'Sale' " >
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
          <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Record Sales Perfomed To Other Merchants. Trust Us We Keep This information Secured. You May Update Later.
              {{ setup }}
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  :class="{'col-span-6 sm:col-span-3 lg:col-span-2': inputType == 'number' , 'col-span-6':inputType == 'text', 'hidden':inputType == 'file', 'hidden':inputType == 'text' && inputName == 'items' }">
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
                      border-gray-300
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
   

                <div   v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  :class="{ 'hidden': inputName !== 'items'  }">
                  <label class="block text-sm font-medium text-gray-700 capitalize"
                    :for="inputName"
                    >{{inputName}}</label
                  >
        
                  <div class="mt-1">
                    <textarea
                      rows="2"
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
                        p-2
                      "
                         v-model="clearedDefaultInputValues[inputName]"
                      placeholder="Enter Item Name Then Press Enter Key To Add An Item"
                    ></textarea>
                  </div>
                  <small class="mt-2 text-sm text-gray-500">
                    Press Enter To Add A New Item.
                  </small>
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

    <!-- invoice -->
    <div class="w-full" v-if="setup?.entity === 'Invoice' "   >
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
             <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Record Invoice Perfomed To Other Merchants. Trust Us We Keep This information Secured. You May Update Later.
              {{ setup }}
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
          <form >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
               <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-6 gap-4"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName"
                  class="col-span-6 sm:col-span-3 lg:col-span-3" 
                  :class="{'hidden':inputName === 'items'}"
                  >
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
                      border-gray-300
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
   

                <div   v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  :class="{ 'hidden': inputName !== 'items'  }">
                  <label class="block text-sm font-medium text-gray-700 capitalize"
                    :for="inputName"
                    >{{inputName}}</label
                  >
        
                  <div class="mt-1">
                    <textarea
                      rows="2"
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
                        p-2
                      "
                         v-model="clearedDefaultInputValues[inputName]"
                      placeholder="Enter Item Name Then Press Enter Key To Add An Item"
                    ></textarea>
                  </div>
                  <small class="mt-2 text-sm text-gray-500">
                    Press Enter To Add A New Item.
                  </small>
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
                      placeholder="Describe Your Invoice"
                    ></textarea>
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your Invoice.
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
    
    <!-- Personel  -->
    <div class="w-full"  v-if="setup?.entity === 'personnel' " >
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
             <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Record Invoice Perfomed To Other Merchants. Trust Us We Keep This information Secured. You May Update Later.
              {{ setup }}
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
          <form >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="grid grid-cols-6 gap-4">
              <div class="col-span-6 sm:col-span-3"
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName"
                  :class="{ 'hidden':inputType === 'file',   }">
                <label :for="inputName" class="block text-sm font-medium text-gray-700 capitalize">{{inputName}}</label>
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
                      border-gray-300
                      p-2
                    "
                      :type="inputType"
                       v-model="clearedDefaultInputValues[inputName]"
                      :placeholder="inputName"
                      :id="inputName"
                      @input="valueChanged"
                  
                    >
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
                    Brief description for your personnel.
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

    <!-- category -->
     <div class="w-full"  v-if="setup?.entity === 'Category' "  >
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
             <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Record Invoice Perfomed To Other Merchants. Trust Us We Keep This information Secured. You May Update Later.
              {{ setup }}
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  :class="{'col-span-6 sm:col-span-3': inputType == 'number' , 'col-span-6':inputType == 'text', 'hidden':inputType == 'file'}">
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
                      border-gray-300
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

                <div  v-for="(inputType, inputName) of formatInputs.specialInputs"
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

    <!-- stock -->
     <div class="w-full"  v-if="setup?.entity === 'Stock' "  >
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
             <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Record Invoice Perfomed To Other Merchants. Trust Us We Keep This information Secured. You May Update Later.
              {{ setup }}
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
                <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  :class="{ 'col-span-6':inputType == 'text','hidden': inputType !== 'text'}">
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
                      border-gray-300
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

                   <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  class="col-span-6 sm:col-span-3 lg:col-span-2"
                  :class="{'hidden': inputType !== 'number' }">
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
                      border-gray-300
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
                  <div class="col-span-6 sm:col-span-6 "   
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

                <div  v-for="(inputType, inputName) of formatInputs.specialInputs"
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

    <!-- credit -->
    <div class="w-full" v-if="setup?.entity === 'Credit' "   >
      <div class="md:grid md:grid-cols-2 md:gap-6">
        <div class="md:col-span-1">
             <button @click.prevent="closeForm" class="w-10 h-10 px-2 flex justify-center items-center shadow-lg rounded-lg text-gray-800 mr-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          <div class="px-4 sm:px-0">
            <h3 class="text-4xl  font-extrabold leading-6 text-gray-900 mt-24 mb-6"> Add new {{ setup?.entity }}</h3>
            <p class="mt-1 text-sm text-gray-600">
              Record Invoice Perfomed To Other Merchants. Trust Us We Keep This information Secured. You May Update Later.
              {{ setup }}
            </p>
          </div>
        </div>
        <div class="mt-6 md:mt-0 md:col-span-1">
                   <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                 <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  :class="{ 'col-span-6':inputType == 'text','hidden': inputType !== 'text'}">
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
                      border-gray-300
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

                   <div class="grid grid-cols-6 gap-6"  >
                  <div   
                  v-for="(inputType, inputName) of formatInputs.normalInputs"
                  :key="inputName" 
                  class="col-span-6 sm:col-span-3 lg:col-span-2"
                  :class="{'hidden': inputType === 'text' }">
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
                      border-gray-300
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
                  <div class="col-span-6 sm:col-span-6 "   
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

                <div  v-for="(inputType, inputName) of formatInputs.specialInputs"
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
      let results = {};
      for (const [key, value] of Object.entries(specialInputs)) {
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
      if(payload.hasOwnProperty('image url')){
        payload['image url']=btoa(this.previewImage)
      }
       if(payload.hasOwnProperty('profile image')){
        payload['profile image']=btoa(this.previewImage)
      }
      
      this.$store.dispatch(this.setup?.actions?.add, payload);
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
