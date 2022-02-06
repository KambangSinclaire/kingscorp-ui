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
        <img
          src="@/assets/logo/logo1.png"
          alt="Cover image"
          class="h-40 lg:h-80 rounded-3xl w-full object-cover"
        />
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
          <img
            src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
            alt="User avatar"
            class="w-32 h-32 rounded-full ring-4 ring-bg-card"
          />
        </div>
        <div
          class="flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:ml-8"
        >
          <div class="text-lg font-bold leading-none">Brian Hughes</div>
          <div class="text-secondary">London, UK</div>
        </div>
        <div class="hidden lg:flex h-8 mx-8 border-l-2"></div>
        <div class="flex items-center mt-6 lg:mt-0 space-x-6">
          <div class="flex flex-col items-center">
            <span class="font-bold">200k</span
            ><span class="text-sm font-medium text-secondary">FOLLOWERS</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="font-bold">1.2k</span
            ><span class="text-sm font-medium text-secondary">FOLLOWING</span>
          </div>
        </div>
        <div class="flex items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6">
          <a class="font-medium" href="/pages/profile"> Home </a
          ><a class="text-secondary" href="/pages/profile"> About </a
          ><a class="text-secondary" href="/pages/profile"> Followers </a
          ><a class="text-secondary" href="/pages/profile"> Gallery </a>
        </div>
      </div>
    </div>
    <div
      class="flex flex-auto justify-start w-full max-w-5xl mx-auto p-6 sm:p-8"
    >
      <div class=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-4  items-start mr-8">
        <div class="flex rounded-3xl shadow-md flex-col max-w-80 w-full p-8">
          <!---->
          <div class="text-2xl font-semibold leading-tight">About Me</div>
          <div class="mt-4">
            I’m a friendly kitchen assistant who suffers from a severe phobia of
            buttons. <br /><br />
            Brother of Elijah Jay Watkins, who has phobia of buttons and trust
            issues.
          </div>
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

              <span class="leading-none">London, UK</span>
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
              <span class="leading-none">April, 24 </span>
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
              <span class="leading-none">ACME Corp. Lead UX Designer</span>
            </div>
          </div>
          <button class="px-6 mt-8" tabindex="0">See complete bio</button
          ><!----><!----><!---->
        </div>
      
        <div
          class="
            flex flex-col
            max-w-80
            w-full
            mt-8
            px-8
            pt-6
            pb-4
            rounded-3xl shadow-md
          "
        >
          <!---->
          <div
            class="
              flex
              items-center
              justify-between
              
            "
          >
            <div class="text-2xl font-semibold leading-tight">Groups</div>
            <div class="-mr-3">
              <button
                aria-haspopup="true"
                mat-icon-button=""
                class="
                  mat-focus-indicator
                  mat-menu-trigger
                  mat-icon-button
                  mat-button-base
                "
              >
                <span class="mat-button-wrapper">
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
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    /></svg
                ></span>
              </button>
            </div>
          </div>
          <div class="flex flex-col mt-5 ">
            <div class="flex items-center">
              <img
                src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-14 h-14 mr-4 rounded object-cover"
              />
              <div class="flex flex-col min-w-0">
                <div class="font-medium leading-none">The Port Cafe</div>
                <div class="text-md truncate leading-none mt-1">
                  Best cafe of the downtown New York
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  1.2k followers
                </div>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <img
                src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-14 h-14 mr-4 rounded object-cover"
              />
              <div class="flex flex-col min-w-0">
                <div class="font-medium leading-none">Design House LLC.</div>
                <div class="text-md truncate leading-none mt-1">
                  UI/UX, brand and product design
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  957 followers
                </div>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <img
                src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-14 h-14 mr-4 rounded object-cover"
              />
              <div class="flex flex-col min-w-0">
                <div class="font-medium leading-none">Crax Laser Tag</div>
                <div class="text-md truncate leading-none mt-1">
                  30% off with group of 6 people
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  342 followers
                </div>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <img
                src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-14 h-14 mr-4 rounded object-cover"
              />
              <div class="flex flex-col min-w-0">
                <div class="font-medium leading-none">
                  Roadster Clothing Inc.
                </div>
                <div class="text-md truncate leading-none mt-1">
                  $25 off on orders $500 and over
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  4.7k followers
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center mt-6 -mx-3 "
          >
            <button
              mat-button=""
              class="
                mat-focus-indicator
                px-3
                mat-button mat-button-base mat-primary
              "
              tabindex="0"
            >
              <span class="mat-button-wrapper"> See all groups </span>
            </button>
          </div>
          <!----><!----><!---->
        </div>
        <div
          class="
             flex flex-col
            max-w-80
            w-full
            mt-8
            px-8
            pt-6
            pb-4
            rounded-3xl shadow-md
          "
        >
          <!---->
          <div
            class="
              flex
              items-center
              justify-between
              ng-tns-c182-37 ng-star-inserted
            "
          >
            <div class="text-2xl font-semibold leading-tight">News</div>
            <div class="-mr-3">
              <button
                aria-haspopup="true"
               
              >
                <span class="mat-button-wrapper"
                  ><svg
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
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    /></svg
                ></span>
              </button>
            </div>
          </div>
          <div class="flex flex-col mt-5 ng-tns-c182-37 ng-star-inserted">
            <div class="flex">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div>
                <b>20% OFF</b> in your favorite hats shop on next Friday.
              </div>
            </div>
            <div class="flex mt-5">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div>
                Upcoming meetups within 20 miles.
                <a
                  class="text-secondary whitespace-nowrap hover:underline"
                  href="/pages/profile"
                  >See details
                </a>
              </div>
            </div>
            <div class="flex mt-5">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div>
                Concerts from your favorite bands available within 100 miles.
                <a
                  class="text-secondary whitespace-nowrap hover:underline"
                  href="/pages/profile"
                  >See details
                </a>
              </div>
            </div>
          </div>
          <div
            class="flex items-center mt-4 -mx-3 ng-tns-c182-37 ng-star-inserted"
          >
            <button
              mat-button=""
              class="
                mat-focus-indicator
                px-3
                mat-button mat-button-base mat-primary
              "
              tabindex="0"
            >
              <span class="mat-button-wrapper"> See all news </span>
            </button>
          </div>
          <!----><!----><!---->
        </div>
        <div
          class="
            flex flex-col
            max-w-80
            w-full
            mt-8
            px-8
            pt-6
            pb-4
            rounded-3xl shadow-md
          "
        >
          <!---->
          <div
            class="
              flex
              items-center
              justify-between
              ng-tns-c182-39 ng-star-inserted
            "
          >
            <div class="text-2xl font-semibold leading-tight">
              Activity Feed
            </div>
            <div class="-mr-3">
              <button
                aria-haspopup="true"
                mat-icon-button=""
                class="
                  mat-focus-indicator
                  mat-menu-trigger
                  mat-icon-button
                  mat-button-base
                "
              >
                <span class="mat-button-wrapper"
                  ><svg
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
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    /></svg
                ></span>
              </button>
            </div>
          </div>
          <div class="flex flex-col mt-5 ng-tns-c182-39 ng-star-inserted">
            <div class="flex">
              <img
                 src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-10 h-10 mr-4 rounded-full"
              />
              <div class="flex flex-col min-w-0">
                <div class="leading-tight">
                  Amelia Edwards commented on John Silverton's photo
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  4 minutes ago
                </div>
              </div>
            </div>
            <div class="flex mt-8">
              <img
                 src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-10 h-10 mr-4 rounded-full"
              />
              <div class="flex flex-col min-w-0">
                <div class="leading-tight">
                  Lew Silverton changed his profile photo
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  25 minutes ago
                </div>
              </div>
            </div>
            <div class="flex mt-8">
              <img
                 src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-10 h-10 mr-4 rounded-full"
              />
              <div class="flex flex-col min-w-0">
                <div class="leading-tight">Brian Hughes liked your photo</div>
                <div class="text-md leading-none text-secondary mt-2">
                  3 hours ago
                </div>
              </div>
            </div>
            <div class="flex mt-8">
              <img
                src="@/assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg"
                alt="Card cover image"
                class="w-10 h-10 mr-4 rounded-full"
              />
              <div class="flex flex-col min-w-0">
                <div class="leading-tight">
                  Marleah Eagleston commented on John Silverton's photo
                </div>
                <div class="text-md leading-none text-secondary mt-2">
                  Yesterday
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center mt-6 -mx-3 ng-tns-c182-39 ng-star-inserted"
          >
            <button
              mat-button=""
              class="
                px-3
              "
              tabindex="0"
            >
              <span class="mat-button-wrapper"> See entire activity feed </span
              >
            </button>
          </div>
          <!----><!----><!---->
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Profile extends Vue {}
</script>

<style></style>
