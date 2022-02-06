<template>
<section class="flex items-center flex-col justify-center  h-full ">

	<!-- Component Start -->
	<!-- <div class="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
		<a class="flex items-center justify-center mt-3" href="#">
			<svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
			</svg>
		</a>
		<div class="flex flex-col items-center mt-3 border-t border-gray-700">
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				 	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 text-gray-200 bg-gray-700 rounded" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
				</svg>
			</a>
		</div>
		<div class="flex flex-col items-center mt-2 border-t border-gray-700">
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
				</svg>
			</a>
			<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
				</svg>
			</a>
			<a class="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
				<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
				</svg>
				<span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
			</a>
		</div>
		<a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
			<svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		</a>
	</div> -->
	<!-- Component End  -->
	
	<!-- Component Start -->
	<div class="flex flex-col items-center w-full h-full overflow-hidden text-gray-400 bg-gray-200 rounded">
        <div class="time-cards grid grid-cols-4 gap-4 w-full">
            <div class="hour rounded bg-blue-600 text-sm  text-center py-1 px-2"><small class="text-center text-white text-sm">12 Hr</small></div>
            <div class="hour rounded bg-yellow-500 text-sm text-center py-1 px-2"><small class="text-center text-white text-sm">12 min</small></div>
            <div class="hour rounded bg-green-500 text-sm text-center py-1 px-2"><small class="text-center text-white text-sm">34 s</small></div>
             <div class="hour rounded bg-blue-300 text-sm text-center py-1 px-2"><small class="text-center text-white text-sm">PM</small></div>
        </div>
	
    <div class="w-full">
        <!-- component -->
<div class="w-full cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
  <div class="text-md font-bold flex flex-col text-gray-900"><span class="uppercase">Today</span> <span class="font-normal text-gray-700 text-sm">July 29</span></div>
  <div class="w-32 h-32 flex items-center justify-center">
    <svg class="h-20" viewBox="0 0 81 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD" transform="translate(-174.000000, -308.000000)" fill-rule="nonzero">
                <g id="Group" transform="translate(95.000000, 222.000000)">
                    <g id="2" transform="translate(79.000000, 86.000000)">
                        <path d="M35.288454,26.4312368 C34.8062502,27.5960191 33.4711041,28.1493583 32.3063218,27.6671545 C31.1415395,27.1849507 30.5882004,25.8498046 31.0704042,24.6850223 C33.990421,17.6316069 40.8868442,12.9347826 48.6521739,12.9347826 C59.1575903,12.9347826 67.673913,21.4511053 67.673913,31.9565217 C67.673913,34.1117269 67.3144924,36.2210565 66.6187558,38.217674 C66.2039356,39.4081203 64.90261,40.0368896 63.7121636,39.6220695 C62.5217172,39.2072493 61.8929479,37.9059237 62.3077681,36.7154773 C62.8357821,35.2001886 63.1086957,33.5985422 63.1086957,31.9565217 C63.1086957,23.9724052 56.6362904,17.5 48.6521739,17.5 C42.7496023,17.5 37.5080182,21.0697924 35.288454,26.4312368 Z M71.2488471,9.35984851 C72.1402613,10.2512627 72.1402613,11.6965305 71.2488471,12.5879447 L68.020751,15.8160409 C67.1293368,16.707455 65.6840689,16.707455 64.7926548,15.8160409 C63.9012406,14.9246267 63.9012406,13.4793588 64.7926548,12.5879447 L68.020751,9.35984851 C68.9121651,8.46843437 70.357433,8.46843437 71.2488471,9.35984851 Z M48.6521739,0 C49.9128239,0 50.9347826,1.02195872 50.9347826,2.2826087 L50.9347826,6.84782609 C50.9347826,8.10847606 49.9128239,9.13043478 48.6521739,9.13043478 C47.3915239,9.13043478 46.3695652,8.10847606 46.3695652,6.84782609 L46.3695652,2.2826087 C46.3695652,1.02195872 47.3915239,0 48.6521739,0 Z M80.6086957,31.9565217 C80.6086957,33.2171717 79.5867369,34.2391304 78.326087,34.2391304 L73.7608696,34.2391304 C72.5002196,34.2391304 71.4782609,33.2171717 71.4782609,31.9565217 C71.4782609,30.6958718 72.5002196,29.673913 73.7608696,29.673913 L78.326087,29.673913 C79.5867369,29.673913 80.6086957,30.6958718 80.6086957,31.9565217 Z M26.0555007,9.35984851 C26.9469148,8.46843437 28.3921827,8.46843437 29.2835969,9.35984851 L32.511693,12.5879447 C33.4031072,13.4793588 33.4031072,14.9246267 32.511693,15.8160409 C31.6202789,16.707455 30.175011,16.707455 29.2835969,15.8160409 L26.0555007,12.5879447 C25.1640865,11.6965305 25.1640865,10.2512627 26.0555007,9.35984851 L26.0555007,9.35984851 Z" id="Shape" fill="#FECA57"></path>
                        <path d="M45.138293,37.2826087 C44.3551693,37.2826087 43.6267158,36.8811485 43.2084767,36.2190618 C39.4665187,30.2954152 32.9620213,26.6304348 25.826087,26.6304348 C14.4802372,26.6304348 5.2826087,35.8280633 5.2826087,47.173913 C5.2826087,58.5197628 14.4802372,67.7173913 25.826087,67.7173913 L55.5,67.7173913 C63.9043331,67.7173913 70.7173913,60.9043331 70.7173913,52.5 C70.7173913,44.0956669 63.9043331,37.2826087 55.5,37.2826087 L45.138293,37.2826087 Z M46.3580943,32.7173913 L55.5,32.7173913 C66.4256331,32.7173913 75.2826087,41.5743669 75.2826087,52.5 C75.2826087,63.4256331 66.4256331,72.2826087 55.5,72.2826087 L25.826087,72.2826087 C11.9589373,72.2826087 0.717391304,61.0410627 0.717391304,47.173913 C0.717391304,33.3067633 11.9589373,22.0652174 25.826087,22.0652174 C34.1091478,22.0652174 41.7014994,26.1099628 46.3580943,32.7173913 Z" id="Path-Copy" fill="#0ABDE3"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  </div>
  <p class="text-gray-700 mb-2">Partly cloud</p>
  <div class="text-3xl font-bold text-gray-900 mb-6">32º<span class="font-normal text-gray-700 mx-1">/</span>20º</div>
  <div class="flex justify-between w-full">
    <div class="flex items-center text-gray-700 px-2">
      <svg class="mr-2 h-4" viewBox="0 0 11 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Desktop-HD" transform="translate(-120.000000, -479.000000)" fill="#60A2D7" fill-rule="nonzero">
                  <g id="Group" transform="translate(95.000000, 222.000000)">
                      <g id="Group-3" transform="translate(25.000000, 256.774194)">
                          <g id="028-drop" transform="translate(0.000000, 0.225806)">
                              <path d="M11,11.9334341 C11,15.0552582 8.53750272,17.5862069 5.5,17.5862069 C2.46249728,17.5862069 0,15.0552582 0,11.9334341 C0,7.58026159 5.5,0 5.5,0 C5.5,0 11,7.58026159 11,11.9334341 L11,11.9334341 Z" id="Path"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
       100 l/m<sup>2</sup>
    </div>
    <div class="flex items-center text-gray-700 px-2">
      <svg class="mr-2 h-4 w-4" viewBox="0 0 12 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Desktop-HD" transform="translate(-201.000000, -480.000000)" fill="#0ABDE3" fill-rule="nonzero">
            <g id="Group" transform="translate(95.000000, 222.000000)">
              <g id="Group-3" transform="translate(25.000000, 256.774194)">
                <g id="wind" transform="translate(87.500000, 11.225806) rotate(-90.000000) translate(-87.500000, -11.225806) translate(77.000000, 5.225806)">
                  <g id="w25">
                    <path d="M16.222113,3.9997453 C16.1020238,4.11833549 16.0351226,4.28256699 16.0372726,4.45349848 C16.0394226,4.62442997 16.1104323,4.78683812 16.2334644,4.90221395 C16.6379853,5.28943966 17.0750123,5.74649295 17.5388698,6.22999608 C17.7684767,6.47016066 18.06,6.8515674 18.2916708,7.08908699 C16.7035135,7.07321708 16.0399754,7.11553683 15.1586978,7.07639107 C14.8000983,7.05999216 14.595258,7.23032915 14.595258,7.58264107 C14.595258,7.93442398 14.7443735,8.11216693 15.1034889,8.11216693 C15.9563882,8.11216693 16.7896806,8.06878918 18.3881572,8.08571708 C17.6494273,8.82722969 16.9039897,9.56168541 16.151941,10.288989 C16.0291152,10.4045196 15.9582985,10.5669407 15.9562468,10.737822 C15.9541952,10.9087034 16.0210908,11.0728624 16.1411057,11.1914577 C16.3966491,11.4436893 16.7995644,11.4483255 17.0605651,11.2020376 C18.1048894,10.2022335 19.4185504,8.91148119 20.2957002,8.02805643 C20.4143735,7.90850313 20.5072482,7.74874608 20.5072482,7.58264107 L20.5072482,7.56465517 C20.5072482,7.39273119 20.3988943,7.22927116 20.2699017,7.11236285 C19.7188452,6.6151058 19.092457,5.97501959 18.5001229,5.35662226 C18.0589126,4.89113359 17.6081986,4.43521373 17.1482801,3.98916536 C16.8847573,3.74276899 16.4802155,3.74739022 16.222113,3.9997453 L16.222113,3.9997453 Z" id="Path"></path>
                    <path d="M0,7.255721 C0,7.04623824 0.165110565,6.87695925 0.369434889,6.87695925 L18.7214742,6.87695925 C18.9252826,6.87695925 19.0909091,7.04623824 19.0909091,7.255721 L19.0909091,8.08518809 C19.0909091,8.29467085 18.9257985,8.46394984 18.7214742,8.46394984 L0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,7.255721 Z" id="Path"></path>
                    <path d="M0.369434889,8.46394984 C0.165401634,8.46394984 0,8.29437243 0,8.08518809 L0,0.378761755 C0,0.169278997 0.165110565,0 0.369434889,0 L1.17847666,0 C1.38228501,0 1.54791155,0.169278997 1.54791155,0.378761755 L1.54791155,8.08518809 C1.54791155,8.29414185 1.38280098,8.46394984 1.17847666,8.46394984 L0.369434889,8.46394984 Z" id="Path"></path>
                  </g>
                  <path d="M4.108,8.53448276 C3.91028206,8.53448276 3.75,8.3634922 3.75,8.15256466 L3.75,0.381918103 C3.75,0.170689655 3.91,0 4.108,0 L4.892,0 C5.0895,0 5.25,0.170689655 5.25,0.381918103 L5.25,8.15256466 C5.25,8.3632597 5.09,8.53448276 4.892,8.53448276 L4.108,8.53448276 Z" id="Path"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      20 km/h
    </div>
  </div>
</div>
    </div>
	<!-- Component End  -->


	</div>
	


</section>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";

@Options({

})
export default class RightSidebar extends Vue {
  data () {
    return {
      toogleRighBar:false
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar {
  --side-padding: 10px; // padding to be applied to the side of the calendar
  --border-radius: 10px; // border-radius of the main calendar shell
  --accent-br: 15px; // border-radius for accents under dates on hover

  width: 100%;

 

  &__opts,
  &__buttons {

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }

  &__opts {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    padding: 20px var(--side-padding);
  }

  &__body {
    background-image: linear-gradient(to bottom, #f3f4f6, #fff);
  }

  &__days {
    background-color: #fff;
    padding: 0 var(--side-padding) 10px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    & > div {
      text-align: center;
      font: {
        weight: 700;
        size: 1.02rem;
      }
      color: #c5c8ca;
    }
  }

  &__dates {
    padding: 10px var(--side-padding);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  &__date {
    --height: calc(400px / 6 - var(--side-padding));

    text-align: center;
    height: var(--height);
    line-height: var(--height);
    font: {
      weight: 600;
      size: 1.02rem;
    }
    cursor: pointer;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      background-color: rgba(255, 255, 255, 0);
      width: 100%;
      height: calc(var(--height) * 0.9);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: var(--accent-br);
      transition: background-color 0.3s ease;
    }

    &:not(.calendar__date--selected):not(.calendar__date--grey):hover::before {
      background-color: #ededed;
    }

    &--grey {
      color: #c5c8ca;
      cursor: not-allowed;
    }

    &--selected {
      color: #ff374b;

      &::before {
        background-color: #ffeaec;
        border-radius: 0px;
      }
    }

    &--first-date {
      &::before {
        border-top-left-radius: var(--accent-br);
        border-bottom-left-radius: var(--accent-br);
      }
    }

    &--last-date {
      &::before {
        border-top-right-radius: var(--accent-br);
        border-bottom-right-radius: var(--accent-br);
      }
    }

    &--range-start {
      &::after {
        content: "";
        position: absolute;
        bottom: 3px;
        border-radius: 24px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ff374b;
        width: 10px;
        height: 4px;
      }
    }

    &--range-end {
      color: #fff;

      &::before {
        box-shadow: 0 15px 20px -3px rgba(255, 55, 75, 0.35);
        background-color: #ff374b;
        border-radius: var(--accent-br);
        z-index: 1;
      }

      &::after {
        content: "";
        position: absolute;
        height: calc(var(--height) * 0.9);
        background-color: #ffeaec;
        width: 50px;
        top: 50%;
        right: 50%;
        transform: translateY(-50%);
      }
    }

    span {
      position: relative;
      z-index: 1;
    }
  }

  &__buttons {
    padding: 10px var(--side-padding) 20px;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  &__button {
    cursor: pointer;

    &--grey {
      background-color: #f3f4f6;
    }

    &--primary {
      background-color: #1752ff;
      color: #fff;
      transition: box-shadow 0.3s cubic-bezier(0.21, 0.68, 0.09, 0.27),
        transform 0.2s linear;

      &:hover {
        box-shadow: 0 20px 30px -13px rgba(23, 82, 255, 0.45);
        transform: translateY(-3px);
      }

      &:active {
        box-shadow: 0 10px 10px -6px rgba(23, 82, 255, 0.45);
        transform: translateY(-1px);
      }
    }
  }
}

body {
  display: grid;
  place-items: center;
  background-color: #eaedf2;
  height: 100vh;
  font: {
    family: "Nunito", sans-serif;
    size: 14px;
  }
  margin: 3vmin;
}

select,
button {
  font: {
    family: inherit;
    weight: 700;
    size: 1.02rem;
  }
  border-radius: 20px;
  outline: none;
  border: 0;
  padding: 15px 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select {
  background: {
    image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='960px' height='560px' viewBox='0 0 960 560' enable-background='new 0 0 960 560' xml:space='preserve'%3E%3Cg id='Rounded_Rectangle_33_copy_4_1_'%3E%3Cpath d='M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937 c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937 c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z'/%3E%3C/g%3E%3C/svg%3E");
    size: 24px;
    repeat: no-repeat;
    position: calc(100% - var(--side-padding)) center;
  }
}

</style>