<template>
  <!-- <div class="flex flex-col flex-auto min-w-0">
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
  </div> -->
<main>
      
<div class="xCPtuxM4_gihvpPwv9bX Nu4HUn5EQpnNJ1itNkrd RZmKBZs1E1eXw8vkE6jY mlwbuv_bMkMhzTA3msA3 sIk4Wc5VFaQpncPF5Sx4 AWLGIryfLKwkSeUZd4O6">
    <div class="EWLTGduHCjFnjN6tLCXV hD0sTTDgbxakubcHVW2X QzGxlDe4W0Kn6V1Dkd6r">
        <nav class="YRrCJSr_j5nopfm4duUc Td37IMFwOi4Zt3Vhv3cT" aria-label="Breadcrumb">
            <ol class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2 R0X5VtiZIoV7IjvrxBJ_ hPWJir4VhLurUkdR8iyI">
              <li class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2">
                <a href="#" class="_k0lTW0vvzboctTxDi2R Q_jg_EPdNf9eDMn1mLI2 rYHHksRBEMl_guI3q0UQ ZnBoTVi7VOJdCLSSU62n EJIoL6514Ry8r7nh011L dMTOiA3mf3FTjlHu6DqW">
                  <svg class="ADSeKHR1DvUUA48Chci_ rxe6apEJoEk8r75xaVNG T1qzIiYBzxDgBnL9ISMF" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Home
                </a>
              </li>
              <li>
                <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2">
                  <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr _JmTNv5EiHqK2A1jcQSf" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href="#" class="c2LzVf9SsdSEMBrRjNwS c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe rYHHksRBEMl_guI3q0UQ ZnBoTVi7VOJdCLSSU62n EbR_B0tHyczsKYnc0ktU EJIoL6514Ry8r7nh011L dMTOiA3mf3FTjlHu6DqW">Users</a>
                </div>
              </li>
              <li>
                <div class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2">
                  <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr _JmTNv5EiHqK2A1jcQSf" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="c2LzVf9SsdSEMBrRjNwS c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe _JmTNv5EiHqK2A1jcQSf EbR_B0tHyczsKYnc0ktU qIT6vrYn0Fr1U3wlPXaS XIIs8ZOri3wm8Wnj9N_y" aria-current="page">Profile</span>
                </div>
              </li>
            </ol>
        </nav>
        <h1 class="vyo_A8gnQD1QWDPglr3h yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl NdexIDe6BTJXjtSnppoV OyABRrnTV_kvHV7dJ0uE">Profile</h1>
    </div>
    <!-- Right Content -->
    <div class="EWLTGduHCjFnjN6tLCXV Atl0coQVHTfJeIp5DBNr">
        <div class="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi">
        <div class="rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne SQf297smyJVNzzOO3iQL LvH1cgobxEYMRPVAp8WW">
            <img class="TR_P65x9ie7j6uxFo_Cs XO0Hd72IH1CH2AVjcbWM v2F5G_Fm6X1wxdNJdQlJ mveJTCIb2WII7J4sY22F" src="https://flowbite.com/application-ui/demo/images/users/jese-leos-2x.png" alt="Jese portrait">
            <div>
                <h2 class="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">Jese Leos</h2>
                <ul class="gC_jEY75u_oxfOOKnLpH wezTbYJgxYJp5ZDqX67N">
                    <li class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                        <svg class="fhCwost7CSNRc2WSHLFW E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                        Front-end Developer
                    </li>
                    <li class="YRrCJSr_j5nopfm4duUc Q_jg_EPdNf9eDMn1mLI2 c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                        <svg class="fhCwost7CSNRc2WSHLFW E9GV5sZJIbfO_GEQ_moc _o2IXcpM0qnG3JPReKus __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                        San Francisco, USA
                    </li>
                </ul>
            </div>
        </div>
        <div class="rvdRhGyExrNYTA6euxsF xu6Xcz2CnxX04u4eQAne seNju9ak6k60nJPVDVyn">
            <div class="HD0QRNT3lUqWQhXP5VK8">
                <address class="c8dCx6gnV43hTOLV6ks5 yo0GKAXAsUDIWsazc10y _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                    <div class="XJih04pKHf8Cekga6Hj3">
                        Email address
                    </div>
                    <a class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE" href="mailto:webmaster@flowbite.com">yourname@flowbite.com</a>
                    <div class="XJih04pKHf8Cekga6Hj3">
                        Home address
                    </div>
                    <div class="TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        92 Miles Drive, Newark, NJ 07103, California, <br>United States of America
                    </div>
                    <div class="XJih04pKHf8Cekga6Hj3">
                        Phone number
                    </div>
                    <div class="TR_P65x9ie7j6uxFo_Cs c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">
                        +00 123 456 789 / +12 345 678 
                    </div>
                </address>
            </div>
            <div class="_SmdlCf6eUKB_V9S5IDj HD0QRNT3lUqWQhXP5VK8">
                <h3 class="TR_P65x9ie7j6uxFo_Cs d3C8uAdJKNl1jzfE9ynq IOPhczRgtphv6NdNBDjj __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">About</h3>
                <p class="c8dCx6gnV43hTOLV6ks5 _43MO1gcdi2Y0RJW1uHL PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                    Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience working as an Independent Contractor for Google and developing and growing my educational social network that helps others learn programming, web design, game development, networking.
                </p>
            </div>
        </div>
        <div>
            <h3 class="TR_P65x9ie7j6uxFo_Cs d3C8uAdJKNl1jzfE9ynq IOPhczRgtphv6NdNBDjj __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Software Skill</h3>
            <div class="YRrCJSr_j5nopfm4duUc hLiU_EU6hK5DGt8Nzo2B">
                <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1558 0.559692H1.51087C0.676432 0.559692 0 1.23742 0 2.07346V15.7446C0 16.5806 0.676432 17.2583 1.51087 17.2583H15.1558C15.9902 17.2583 16.6667 16.5806 16.6667 15.7446V2.07346C16.6667 1.23742 15.9902 0.559692 15.1558 0.559692Z" fill="#DC395F"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58437 4.80783C6.58437 5.37806 6.12024 5.81314 5.56621 5.81314C5.01217 5.81314 4.54817 5.378 4.54817 4.80783C4.54817 4.23799 5.01217 3.80298 5.56621 3.80298C6.12024 3.80298 6.58437 4.23799 6.58437 4.80783ZM3.36574 11.9506C3.36574 11.726 3.39575 11.4506 3.45558 11.1956H3.45565L4.21913 8.07017H3.03638L3.39575 6.74185H6.24055L5.1175 11.2051C5.04263 11.4903 5.01268 11.7269 5.01268 11.8916C5.01268 12.1771 5.15292 12.2605 5.37219 12.3101C5.50572 12.34 6.56971 12.3191 7.14895 11.029L7.88658 8.07017H6.68872L7.0481 6.74185H9.60826L9.27896 8.24995C9.72805 7.40973 10.6265 6.61139 11.5098 6.61139C12.4531 6.61139 13.2317 7.28469 13.2317 8.57479C13.2317 8.90471 13.1867 9.2638 13.067 9.66874L12.5878 11.3933C12.543 11.5737 12.5129 11.7235 12.5129 11.8585C12.5129 12.1584 12.6327 12.3083 12.8573 12.3083C13.0819 12.3083 13.3664 12.1429 13.6958 11.2284L14.3546 11.4832C13.9652 12.8483 13.2616 13.4181 12.3782 13.4181C11.345 13.4181 10.8511 12.8035 10.8511 11.9631C10.8511 11.7233 10.8809 11.4681 10.9558 11.213L11.4499 9.44292C11.5098 9.24782 11.5248 9.06798 11.5248 8.90289C11.5248 8.33305 11.1805 7.98786 10.6265 7.98786C9.92271 7.98786 9.45858 8.49397 9.219 9.46901L8.26067 13.3201H6.58391L6.88488 12.1099C6.39198 12.9211 5.70741 13.4235 4.86301 13.4235C3.84484 13.4235 3.36574 12.8359 3.36574 11.9506Z" fill="white"></path>
                </svg>
                <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.297 0.762876L8.9845 0.259155L13.672 0.762876L17.301 5.71471L8.9845 15.5586L0.667969 5.71471L4.297 0.762876Z" fill="#FDB300"></path>
                    <path d="M4.03524 5.71497L8.98317 15.5589L0.666626 5.71497H4.03524Z" fill="#EA6C00"></path>
                    <path d="M13.929 5.71497L8.98107 15.5589L17.2976 5.71497H13.929Z" fill="#EA6C00"></path>
                    <path d="M4.03467 5.71497H13.9305L8.9826 15.5589L4.03467 5.71497Z" fill="#FDAD00"></path>
                    <path d="M8.98272 0.259277L4.2952 0.762992L4.03479 5.71483L8.98272 0.259277Z" fill="#FDD231"></path>
                    <path d="M8.98164 0.259277L13.6692 0.762992L13.9296 5.71483L8.98164 0.259277Z" fill="#FDD231"></path>
                    <path d="M17.2987 5.71453L13.6696 0.762695L13.9301 5.71453H17.2987Z" fill="#FDAD00"></path>
                    <path d="M0.666626 5.71453L4.29565 0.762695L4.03524 5.71453H0.666626Z" fill="#FDAD00"></path>
                    <path d="M8.98272 0.259277L4.03479 5.71483H13.9306L8.98272 0.259277Z" fill="#FEEEB7"></path>
                </svg>    
                <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.07892 17.2564C4.61226 17.2564 5.8567 16.0098 5.8567 14.4738V11.6913H3.07892C1.54559 11.6913 0.301147 12.9379 0.301147 14.4738C0.301147 16.0098 1.54559 17.2564 3.07892 17.2564Z" fill="#0ACF83"></path>
                    <path d="M0.301147 8.90901C0.301147 7.37305 1.54559 6.12646 3.07892 6.12646H5.8567V11.6916H3.07892C1.54559 11.6916 0.301147 10.445 0.301147 8.90901Z" fill="#A259FF"></path>
                    <path d="M0.301025 3.34407C0.301025 1.8081 1.54547 0.561523 3.0788 0.561523H5.85658V6.12662H3.0788C1.54547 6.12662 0.301025 4.88004 0.301025 3.34407Z" fill="#F24E1E"></path>
                    <path d="M5.85718 0.561523H8.63495C10.1683 0.561523 11.4127 1.8081 11.4127 3.34407C11.4127 4.88003 10.1683 6.12661 8.63495 6.12661H5.85718V0.561523Z" fill="#FF7262"></path>
                    <path d="M11.4127 8.90901C11.4127 10.445 10.1683 11.6916 8.63495 11.6916C7.10162 11.6916 5.85718 10.445 5.85718 8.90901C5.85718 7.37305 7.10162 6.12646 8.63495 6.12646C10.1683 6.12646 11.4127 7.37305 11.4127 8.90901Z" fill="#1ABCFE"></path>
                </svg> 
                <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.12203 1.09285H4.79923V2.63598H5.5665V1.09285H6.24703V0.321289H4.12203V1.09285ZM2.30926 0.321317H1.54199V2.63602H2.31593V1.86445H3.01648V2.63602H3.78375V0.321317H3.01648V1.08618H2.30926V0.321317ZM6.58222 0.321289H7.38618L7.8799 1.13646L8.37362 0.321289H9.17759V2.63598H8.41032V1.4887L7.87323 2.32065L7.33614 1.4887V2.63598H6.58222V0.321289ZM10.3271 0.321289H9.5598V2.63598H11.4146V1.87113H10.3271V0.321289Z" fill="black"></path>
                    <path d="M1.51371 16.1212L0.412842 3.69568H12.5157L11.4148 16.1145L6.45425 17.4966" fill="#E44D26"></path>
                    <path d="M6.46338 16.4406V4.71619H11.4106L10.4665 15.3168" fill="#F16529"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4651 6.23572H2.66211L3.07577 10.8383H6.4651V9.31863H4.46353L4.32342 7.75872H6.4651V6.23572ZM4.66104 11.6036H3.13985L3.35335 13.9955L6.46245 14.8677V13.2776L4.76779 12.8214L4.66104 11.6036Z" fill="#EBEBEB"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45831 6.23572H10.2546L10.1145 7.75872H6.45831V6.23572ZM6.45654 9.31902H9.97597L9.55897 13.9954L6.45654 14.8609V13.2775L8.14787 12.8213L8.32467 10.842H6.45654V9.31902Z" fill="white"></path>
                </svg>
                <svg class="YIUegm7fh_CpJbivTu6B MnxxlQlR1H0xJuMEE8Yr" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2726 15.2265H3.03646C1.64757 15.2265 0.515625 14.1118 0.515625 12.744V3.07392C0.515625 1.70616 1.64757 0.591431 3.03646 0.591431H13.2656C14.6615 0.591431 15.7865 1.70616 15.7865 3.07392V12.7372C15.7934 14.1118 14.6615 15.2265 13.2726 15.2265Z" fill="#2E001F"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4111 7.39617L8.35555 11.0755C8.39027 11.1302 8.36943 11.1849 8.31388 11.1849H7.10554C7.02916 11.1849 6.99443 11.1644 6.95971 11.096C6.84486 10.8627 6.72954 10.6294 6.61364 10.395L6.61349 10.3946C6.28094 9.72192 5.94359 9.03947 5.5986 8.31941H5.58471C5.16804 9.23582 4.70971 10.2001 4.26526 11.1028C4.23054 11.1575 4.19582 11.178 4.14026 11.178H2.99443C2.92499 11.178 2.91804 11.1233 2.95276 11.0823L4.85554 7.51243L3.01526 3.90153C2.9736 3.84682 3.01526 3.80579 3.05693 3.80579H4.25138C4.32082 3.80579 4.3486 3.81947 4.37638 3.88102C4.81388 4.78374 5.25832 5.71382 5.67499 6.62339H5.68888C6.09165 5.72066 6.5361 4.78374 6.96666 3.88785L6.96793 3.88585C7.0019 3.83231 7.02306 3.79895 7.09166 3.79895H8.20971C8.26527 3.79895 8.2861 3.83998 8.25138 3.89469L6.4111 7.39617ZM8.69629 8.51069C8.69629 6.91725 9.77268 5.67258 11.481 5.67258C11.6268 5.67258 11.7032 5.67258 11.8421 5.68626V3.87397C11.8421 3.83293 11.8768 3.80558 11.9116 3.80558H13.0088C13.0643 3.80558 13.0782 3.8261 13.0782 3.86029V10.1383C13.0782 10.323 13.0782 10.5555 13.113 10.8085C13.113 10.8496 13.0991 10.8632 13.0574 10.8838C12.4741 11.1573 11.863 11.2804 11.2796 11.2804C9.77268 11.2873 8.69629 10.3709 8.69629 8.51069ZM11.4393 6.69151C11.6059 6.69151 11.7448 6.71886 11.842 6.75989V10.1451C11.7101 10.1998 11.5295 10.2203 11.3629 10.2203C10.5781 10.2203 9.95315 9.71427 9.95315 8.45592C9.95315 7.35487 10.5643 6.69151 11.4393 6.69151Z" fill="#FFD9F2"></path>
                </svg>                                                                               
            </div>
        </div>
        </div>
        <!-- <div class="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi">
        <div class="FF0B1uH_gtoM9lki9mia">
            <h3 class="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">Skills</h3>
            <ul class="YRrCJSr_j5nopfm4duUc hP1M5IgfjJiY8_B1VUN1 XJih04pKHf8Cekga6Hj3">
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Brand Design</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Logo Design</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Mobile App Design</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">UI Design</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">React Developer</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Wordpress</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Sketch</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Figma</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Prototyping</li>
                <li class="Dnqe3vvw22y12_oWDYvR LNUrv_nGG839SRkGqY8B UptwuMAvsdRjvAaYNP6r d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs">Database</li>
            </ul>
        </div>
        </div> -->
        <!-- <div class="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi">
        <div class="FF0B1uH_gtoM9lki9mia">
            <h3 class="vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">Hobbies</h3>
            <ul class="YRrCJSr_j5nopfm4duUc hP1M5IgfjJiY8_B1VUN1 XJih04pKHf8Cekga6Hj3">
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Football</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Dogs</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Gaming</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Movies</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Travelling</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Surf</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs fhCwost7CSNRc2WSHLFW">Ice Skating</li>
                <li class="YccXYy5sNIz6FJlLxw0D jm5g5pmdFIDbcABTuYVY mbOxN7eW74XygTKQC_r3 d3C8uAdJKNl1jzfE9ynq ezMFUVl744lvw6ht0lFe _Cj_M6jt2eLjDgkBBNgI Qkdk47eO_FsOcXfaC9zb W5n_NSFnC6y2nqoHw_5x TR_P65x9ie7j6uxFo_Cs">The Witcher</li>
            </ul>
        </div>
        </div> -->
    </div>
    <div class="NM7Z1HBVjN_86WhEcXan">
        <div class="_wYiJGbRZyFZeCc8y7Sf hD0sTTDgbxakubcHVW2X _Ybd3WwuTVljUT4vEaM3 mveJTCIb2WII7J4sY22F mngKhi_Rv06PF57lblDI _YxZw_O8dWkTljptcO7z SWDELhWFjL8JxEtm91_o _1jTZ8KXRZul60S6czNi">
            <h3 class="hD0sTTDgbxakubcHVW2X vyo_A8gnQD1QWDPglr3h IOPhczRgtphv6NdNBDjj OyABRrnTV_kvHV7dJ0uE">General information</h3>
            <dl class="xCPtuxM4_gihvpPwv9bX Nu4HUn5EQpnNJ1itNkrd bNuwEJVjy8l4O1aX1zho cvkpv2bmXbOtb62ppyJC AqVNvLG_H6VHhym2yKMp">
                <div class="wwofGIyK_H_z3Xjelq8G">
                    <dt class="y0nOgdpiqOUaFDbjAxwD ezMFUVl744lvw6ht0lFe __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">About me</dt>
                    <dd class="iRFVFKvV59EjIwjCM62m tI6ZVpHcCWxY_MKHSQWC DSinOeYMF_Gmwu9gOltI c8dCx6gnV43hTOLV6ks5 PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">
                        <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
                        <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
                    </dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Education</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Thomas Jeff High School, Stanford University</dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Work History</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Twitch, Google, Apple</dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Join Date</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">12-09-2021 </dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Languages</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">English, German, Italian, Spanish </dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Organization</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Themesberg LLC </dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Role</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Graphic Designer</dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Department</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">Marketing</dd>
                </div>
                <div>
                    <dt class="c8dCx6gnV43hTOLV6ks5 ezMFUVl744lvw6ht0lFe PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y">Birthday</dt>
                    <dd class="c8dCx6gnV43hTOLV6ks5 yM_AorRf2jSON3pDsdrz __9sbu0yrzdhGIkLWNXl OyABRrnTV_kvHV7dJ0uE">15-08-1990 </dd>
                </div>
            </dl>
        </div>
        
    </div>
    
</div>

    </main>
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

<style>
@import '../../assets/styles/profile.scss';
</style>
