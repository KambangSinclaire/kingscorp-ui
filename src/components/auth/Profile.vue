<template>
  <div class="flex flex-col flex-auto min-w-0">
    <div class="p-4 flex items-center">
        <button @click="$router.back()"
          class="
            w-10
            h-10
            px-2
            flex
            justify-center
            items-center
            shadow-lg
            rounded-lg
            text-gray-800
            mr-2
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </button>
      

      <h1 class="font-bold capitalize text-2xl mt-2">Profile</h1>
    </div>
    <div class="flex flex-col shadow  bg-card">
      <div class="w-full ">
        
        <div class="h-40 lg:h-80 rounded-3xl w-full flex items-center justify-center bg-blue-500"></div>
      </div>
      <div
        class="
          flex flex-col flex-0
          lg:flex-row
          items-center
          max-w-5xl
          w-full
          mx-auto
          px-8
          lg:h-18
          bg-card
        "
      >
        <div class="-mt-10 lg:-mt-14 rounded-full">
          <div
         
            class="w-32 h-32 flex items-center justify-center bg-white rounded-full font-bold text-2xl"
          >
          {{profileInfo?.username.charAt().toUpperCase()}}
          </div>
        </div>
        <div
          class="flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:ml-8"
        >
          <div class="text-lg font-bold leading-none">{{profileInfo?.username}}</div>
          <div class="text-secondary">{{profileInfo?.city}} {{profileInfo?.region}}, {{profileInfo?.country}}</div>
        </div>
        <div class="hidden lg:flex h-8 mx-8 border-l-2"></div>
        
      </div>
    </div>
    <div
      class="flex flex-auto justify-start w-full max-w-5xl mx-auto p-6 sm:p-8"
    >
      <div class=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-4  items-start mr-8">
        <div class="flex rounded-3xl shadow-md flex-col max-w-80 w-full p-8">
          <!---->
          <div class="text-2xl font-semibold leading-tight">About Me</div>
          
          <hr class="w-full border-t my-6" />
          <div class="flex flex-col">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span class="leading-none mx-2">{{profileInfo?.city}} {{profileInfo?.region}}, {{profileInfo?.country}}</span>
            </div>
            <div class="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
              <span class="leading-none mx-2">{{profileInfo?.email}} </span>
            </div>
            <div class="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="leading-none mx-2">Role: {{profileInfo?.role}}</span>
            </div>
            <div class="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="leading-none mx-2">Phone: {{profileInfo?.phone_number}}</span>
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { StorageUtilis } from "@/utils/storage.util";
let storageUtils = new StorageUtilis()

@Options({})
export default class Profile extends Vue {
  
  profileInfo = {
    username: storageUtils.getFromStorageAndDecode('username'),
    email:storageUtils.getFromStorageAndDecode('email'),
    country:storageUtils.getFromStorageAndDecode('country'),
    role:storageUtils.getFromStorageAndDecode('role')?.name,
    region:storageUtils.getFromStorageAndDecode('region'),
    city: storageUtils.getFromStorageAndDecode('city'),
    phone_number:storageUtils.getFromStorageAndDecode('phone_number'),
  }
}
</script>

<style></style>
