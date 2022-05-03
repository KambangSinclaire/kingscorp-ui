<template>
    
  <div class="auth-container w-full bg-white h-screen flex justify-center align-center ">
    <Spinner v-if=" this.$store.getters.getLoader?.type == 'spinner' && this.$store.getters.getLoader?.loading " />
    <Toast :toast="this.$store.getters.getToast" @closeToast="this.$store.dispatch('hideToast')" v-if="!!this.$store.getters.getToast"/>
    
    <Alert :messageType="'ERROR'" :messageContent="this.errorMessage" v-if="this.isError" @dismiss="this.isError = !this.isError" />
    <div id="signup-page-new" class="show  bg-white">
      <nav>
        <a href="#" class="login-page-new__logo" >
          <img src="@/assets/logo/logo4-removebg-preview.png" class="login-page-new__logo-img" alt="KingsCopr - Home" />
        </a>
        <div class="login-page-new__top-right">
            <p class="mx-2">Already Have An Account?</p>
          <div class="login-page-new__top-right-text">
            <router-link to="/login">
            <a class="login-page-new__top-right-button text-center" >Login</a>
            </router-link>
          </div>
        </div>
        <!---->
      </nav>
      
      <div class="login-page-new__main bg-white">
        <div class="login-page-new__main-bg"></div>
        <div class="login-page-new__main-container">
          <div class="login-page-new__main-form ">
            <div class="login-page-new__main-form-title-brand"></div>
            <h1 class="login-page-new__main-form-title">Create An Account!</h1>
            <div class="relative overflow-hidden">
            <section id="firstSection">
              <div class="signup-page-new">
                <form id="signup-form" class="cu-form cu-onboarding__form" >
                  <div id="signup-form-username-row" class="cu-form__row" >
                    <div class="cu-form__label">Full Name</div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__user_icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input id="signup-username-input" placeholder="username..." v-model="register.username"
                        type="text"  class="cu-form__input" required/>
                    </div>
                    
                  </div>
                  <div id="signup-form-email-row" class="cu-form__row" >
                    <div class="cu-form__label">Email</div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__envelope_icon icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input id="signup-email" placeholder="example@site.com" v-model="register.email"
                        type="email" class="cu-form__input" />
                    </div>
                  </div>
                  <!---->
                  <div id="signup-form-password-row" class="cu-form__row" >
                    <div class="cu-form__label">Choose Password</div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__lock_icon icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                      </div>
                      <input id="signup-password-input" :type="showPassword?'text':'password'" autocomplete="off"
                        placeholder="••••••" class="cu-form__input" v-model="register.password" />
                        <a @click.prevent='this.showPassword = !this.showPassword' draggable="false"
                        class="cu-show-pwd" >Show</a>
                    </div>
                  </div>

                  <div class="cu-form__row" >
                    <div class="cu-form__label">Phone No</div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__envelope_icon icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input placeholder="tel..." v-model="register.phone_number"
                        type="text" class="cu-form__input" />
                    </div>
                  </div>
  
                  <div class="cu-form__row cu-form__row_last">
   
                    <button class="login-page-new__main-form-button cu-btn cu-btn_block cu-btn_spinner" @click.prevent="toggleClass('NEXT')" >
                      <span class="cu-btn__text" >
                        Next
                      </span >
                      <div class="cu-btn__spinner">
                        <div class="cu-btn__bounce1"></div>
                        <div class="cu-btn__bounce2"></div>
                        <div class="cu-btn__bounce3"></div>
                      </div>
                    </button>
                  </div>
                </form>
                
              </div>
            </section>
            <section class="hidden" id="lastSection">
              <div class="signup-page-new">
                <div class="relative left-3/4 top-6 w-16 h-16 rounded-full border flex items-center justify-center">
                  <img v-bind:src="previewImage" alt="logo" class="w-full h-full rounded-lg object-cover">
                  <label for="inputImg" class="rounded-full absolute -left-20 top-10 bg-blue-700  cursor-pointer flex items-center justify-center ">
                    <small class="text-white" style="padding:.15rem 1rem;" >Change</small>
                  </label>
                  
                </div>
                <form id="signup-form" class="cu-form cu-onboarding__form" >
                  <input type="file" name="logo" id="inputImg" class="hidden" @input.prevent="onFileUpload">
                  <div class="cu-form__row" >
                    <div class="cu-form__label">Organization Name</div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__user_icon icon">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input id="org-name" placeholder="name..." v-model="organization.org_name"
                        type="text" class="cu-form__input" required/>
                    </div>
                    <!----><!---->
                  </div>
                  <div class="cu-form__row" >
                    <div class="cu-form__label">Organization Email (optional)</div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__envelope_icon icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input  placeholder="example@site.com" v-model="organization.org_email"
                        type="email" class="cu-form__input" />
                    </div>
                  </div>
                  <!---->
                 

                  <div class="cu-form__row" >
                    <div class="cu-form__label">Organization Phone No (optional) </div>
                    <div class="cu-form__field">
                      <div class="cu-onboarding__envelope_icon icon" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input placeholder="tel..." v-model="organization.org_tel"
                        type="text" class="cu-form__input" />
                    </div>
                  </div>
  
                  <div class="cu-form__row cu-form__row_last ">
                    <button @click="createUser" class="login-page-new__main-form-button cu-btn cu-btn_block cu-btn_spinner" >
                      <span class="cu-btn__text" >
                        Finish
                      </span >
                      <div class="cu-btn__spinner">
                        <div class="cu-btn__bounce1"></div>
                        <div class="cu-btn__bounce2"></div>
                        <div class="cu-btn__bounce3"></div>
                      </div>
                    </button>

                    <button  @click.prevent="toggleClass('PREV')"
                    style="padding: .65rem; margin-top: .5rem;" class="border-gray-500 w-full border rounded-lg shadow-2xl "  >
                      <span class="cu-btn__text" >
                        Back
                      </span >
                      <div class="cu-btn__spinner">
                        <div class="cu-btn__bounce1"></div>
                        <div class="cu-btn__bounce2"></div>
                        <div class="cu-btn__bounce3"></div>
                      </div>
                    </button>
                  </div>
                </form>

              </div>
            </section>

            </div>
            <a href="#" class="login-page-new__main-form-help" >
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" >
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 6a6 6 0 016-6h4a6 6 0 016 6v4a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm2 0a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm5.117-.483c-.12.25-.34.483-.617.483H6c-.552 0-1.016-.46-.836-.982A3.001 3.001 0 0111 6c0 1.126-.62 1.863-1.538 2.308C9.192 8.44 9 8.7 9 9a1 1 0 01-2 0v-.5c0-.828.724-1.313 1.482-1.647C8.787 6.72 9 6.467 9 6a1 1 0 00-1-1c-.512 0-.761.262-.883.517zM8 13a1 1 0 100-2 1 1 0 000 2z"
                  fill="#fff"
                ></path>
              </svg>
              <div class="login-page-new__main-form-help-text">Help</div>
            </a>
          </div>
        
          <div class="login-page-new__main-bot-logos">
            <div class="login-page-new__main-bot-logo login-page-new__main-bot-logo_webflow"></div>
            <div class="login-page-new__main-bot-logo login-page-new__main-bot-logo_booking-com"></div>
            <div class="login-page-new__main-bot-logo login-page-new__main-bot-logo_squarespace"></div>
            <div class="login-page-new__main-bot-logo login-page-new__main-bot-logo_padres"></div>
          </div>
          <div class="login-page-new__main-bot-teams">
            See why 800,000+ teams are more productive with KingsCorp
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../events/app.events";
import Alert from "../reusable/Alerts.vue";
import { StorageUtilis } from "@/utils/storage.util";
import { User } from "@/interfaces/user.interface";
import Spinner from "@/components/reusable/loaders/spinner.vue";
import Toast from "@/components/reusable/toast/toast.vue";
let storageUtil = new StorageUtilis()
@Options({
    methods: {
    onFileUpload(event:any){
    let input = event?.target?.files
    this.organization.file =  input[0]
    if(input){
      let reader = new FileReader()
      reader.onload = (e:any) => this.previewImage = e.target.result
      reader.readAsDataURL(input[0]);
      }
    },
    createUser() {
      // switch (false) {
      //   case this.register.username.trim().length == 0 :
      //     this.errorMessage = "User name is badly formated";
      //     this.isError = true;
      //     break;

      //   case /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      //     this.register.email
      //   ):
      //     this.errorMessage = "Invalid Email is badly formated";
      //     this.isError = true;
      //     break;

      //   case /^[a-zA-Z0-9?!@#$%^&*]{4,16}$/.test(this.register.password):
      //     this.errorMessage = "Password should be characters";
      //     this.isError = true;
      //     break;

      //   case this.register.phone_number.trim().length == 0:
      //     this.errorMessage = "phone number must have country code";
      //     this.isError = true;
      //     break;
      // }
        let form = new FormData()
        form.append('logo', this.organization.file, this.organization.file?.name)
       
        this.$store.dispatch(AppActionEvents.location.retrieve);
       let userLocation = "";
       
       storageUtil.getFromStorageAndDecode('city') ? userLocation = storageUtil.getFromStorageAndDecode('city') : userLocation
       // console.log(this.register, userLocation);
       
       let data:User = {
         username: this.register.username.trim(),
         email: this.register.email,
         password: this.register.password,
         phone_number: this.register.phone_number,
         last_login_location: userLocation.toString(),
         last_login: new Date(Date.now()),
         organization: this.organization
       };
        for (let [key, val] of Object.entries(data)) {
          form.append(key.toString(), JSON.stringify(val))
        }
       // this.$store.dispatch(AppActionEvents.user.add, data);
       console.log(form);

      if(!this.isError  || !this.errorMessage){
        this.isError = false;
        
      }

    },
    toggleClass(option:'NEXT' | 'PREV'){
      let firstSection:HTMLElement = document.getElementById('firstSection') as HTMLElement;
      let lastSection:HTMLElement = document.getElementById('lastSection') as HTMLElement;
      let statusText:HTMLHeadElement = document.querySelector('h1') as HTMLHeadElement

      if(option==='NEXT'){

        firstSection.classList.add('prev')
        setTimeout(() => {
          firstSection.className = 'hidden'
          lastSection.className = 'toNext'
          statusText.textContent = 'Organization Info'
        }, 250);
      }
      if(option==='PREV'){
        lastSection.classList.add('next')
        setTimeout(() => {
          lastSection.className = 'hidden'
          firstSection.className = 'toPrev'
          statusText.textContent = 'Create An Account!'
        }, 250);
      }
    }
    },
    components: {
    Alert,
    Spinner,
    Toast,
  },
  computed: {
    responseData() {
      if (this.$store.getters.getToast) {
        this.toast = true;
      }
      return this.$store.getters.getToast;
    },
  },
    mounted() {
    this.$store.dispatch(AppActionEvents.location.retrieve);
  },
})
export default class Register extends Vue {
    data(){
        return{
        register: {
        username: "",
        email: "",
        password: "",
        phone_number: "",
      },
      organization:{
        org_name:"",
        org_email:"",
        org_tel:"",
        file:""
      },
      showPassword:false,
      errorMessage: "",
      isError: false,
      actionType: { login: true, register: false },
      toast: true,
      spinner: false,
      previewImage:''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/clickup.scss';

.login-page-new__main-bg {
  position: absolute;
  height: calc(100% - 17vh);
  width: 100%;
  top: 17vh;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  background: url(../../assets/img/login.svg) center 10px no-repeat;
  background-size: cover;
}
.login-page-new__main-bg:before {
  content: "";
  display: block;
  position: absolute;
  width: 200%;
  height: 300%;
  top: -100%;
  left: -50%;
  background: url(../../assets/img/dots.svg);
  transform: rotate(-28deg);
}
.login-page-new__main-bg:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url(../../assets/img/bg-top.svg) top no-repeat;
  background-size: 100%;
}
.toNext{
animation: SlideIn 1s ease 0s 1 normal forwards;
}
.prev{
animation: SlideOut 1s ease 0s 1 normal forwards;
}
.toPrev{
animation: SlideInOut 1s ease 0s 1 normal forwards;
}
.next{
animation: SlideOutIn 1s ease 0s 1 normal forwards;
}
@keyframes SlideIn {
	0% {
		opacity: 0;
		transform: translateX(-250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes SlideOut {
	0% {
		opacity: 1;
		transform: translateX(0px);
	}

	100% {
		opacity: 0;
		transform: translateX(250px);
	}
}

@keyframes SlideInOut {
	0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes SlideOutIn {
	0% {
		opacity: 1;
		transform: translateX(0px);
	}

	100% {
		opacity: 0;
		transform: translateX(-250px);
	}
}

</style>

