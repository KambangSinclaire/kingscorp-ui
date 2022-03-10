<template>
  <div
    class="
      auth-container
      w-full
      bg-blue-100
      h-screen
      flex
      justify-center
      align-center
    "
  >
    <Spinner
      v-if="
        this.$store.getters.getLoader?.type == 'spinner' &&
        this.$store.getters.getLoader?.loading
      "
    />
    <Toast
      :toast="responseData"
      @closeToast="this.toast = !this.toast"
      v-if="!this.$store.getters.getToast"
    />
    <!-- <div
      class="card-container shadow-2xl rounded bg-white my-auto grid  sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4"
    >
      <div class="img-container w-full hidden md:flex lg:flex  justify-center align-center ">
        <div
          class="text-blur-container w-3/4 h-3/4 rounded-2xl shadow-2xl mt-20"
        >
          <div class="text-container">
            <h1 class="header-text text-white text-l font-bold">
              THE BEST <br />
              CHOICE
            </h1>

            <div class="line w-24 h-1 mt-6 rounded bg-yellow-500 ml-6"></div>

            <div class="text px-6 mt-3">
              <span class="text-sm text-gray-700">We are</span>
              <h1 class="text-gray-700">Efficient In Our Services.</h1>
              <small class="text-gray-700"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                delectus.</small
              >
            </div>

            <div class="signin-link ml-6 px-3 rounded-2xl shadow-2xl py-2" v-if="this.actionType.register">
              <p class="text-gray-800">Already Have An Account?</p>
              <a @click.prevent="isActionMutation" class="text-yellow-500 font-bold">Login</a>
            </div>
             <div class="signin-link ml-6 px-3 rounded-2xl shadow-2xl py-2" v-if="this.actionType.login">
              <p class="text-gray-800">Don't Have An Account?</p>
              <a  @click.prevent="isActionMutation" class="text-yellow-500 font-bold">Create Account</a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex overflow-hidden">

      <div :class="{ 'hidden':this.actionType.register}"
        class=" login-container w-full h-full rounded-3xl relative lg:px-6 py-6 md:px-6 px-2 flex flex-col align-center justify-center"
      >
          
 
        <div class="md:hidden lg:hidden relative w-full -top-10 px-4 rounded-2xl shadow-2xl py-2">
              <p class="text-gray-800">Don't Have An Account?</p>
              <a @click.prevent="isActionMutation" class="text-yellow-500 font-bold">Create Account</a>
            </div>
        <form autocomplete="false" class="px-4   sm:w-full ">
          <h1 class="text-2xl font-bold mb-8">Login</h1>
       
          <div class="input-container my-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                </div>
                <input
                  type="email"
                  class="py-2 px-4  border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md"
                  autocomplete="false"
                  placeholder="kambangsincalire"
                  v-model="this.login.username"
                />
              </div>
            </div>
          </div>

          <div class="input-container">
            <div>
              <label
                for="password-login"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password-login"
                  class="py-2 px-4 border-gray-300 border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 sm:text-sm rounded-md"
                  placeholder="..............."
                  v-model="this.login.password"
                />
              </div>
            </div>
          </div>

          <div class="input-container relative">
            <button  @click.prevent="loginUser"
              class="w-full  text-center font-bold px-2 py-2 bg-blue-600 text-wihte my-4 shadow-3xl border-none rounded-md"
            >
              Login
            </button>
          </div>
        </form>
   </div>

       <div :class="{ 'hidden':this.actionType.login}"
        class="register-container w-full  h-full rounded-3xl lg:px-6 py-6 md:px-6 px-2 flex flex-col align-center justify-center"
      >

        <div class="md:hidden  lg:hidden relative w-full -top-10 px-4 rounded-2xl shadow-2xl py-2">
              <p class="text-gray-800">Already Have An Account?</p>
              <a @click.prevent="isActionMutation" class="text-yellow-500 font-bold">Login</a>
            </div>
        <form autocomplete="false" class="px-4   sm:w-full ">
          <div class="absolute right-2 top-5 bg-blue-500 "  v-if="spinner" >
            <Spinner />
      </div>
          <h1 class="text-2xl font-bold mb-8">Create Account</h1>
       
          <div class="input-container my-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700"
                >Username</label
              >
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
                >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>

                </div>
                <input
              
                  type="text"
                 
                  class="py-2 px-4 border-gray-300 border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 sm:text-sm rounded-md"
                  autocomplete="false"
                  placeholder="kambangsincalire"
                  v-model="this.register.username"
                />
          
              </div>
            </div>
          </div>

           <div class="input-container my-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  class="py-2 px-4 border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md"
                  autocomplete="false"
                  placeholder="example.email@example.org"
                  v-model="this.register.email"
                />
          
              </div>
            </div>
          </div>

          <div class="input-container">
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  id="password"
                  class="py-2 px-4 border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="..............."
                  v-model="this.register.password"       
                />
              </div>
            </div>
          </div>

          <div class="input-container mt-4">
            <div>
              <label
                for="phone_number"
                class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <div class="mt-1 relative rounded-md shadow-sm">
                <div
                  class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
                >
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>
                </div>
                <input
                  type="text"
                  id="phone_number"
                  class="py-2 px-4 border focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="+************"
                  v-model="this.register.phone_number"
                         
                />
              </div>
            </div>
          </div>

          <div class="input-container">
            <button  @click.prevent="createUser"
              class="w-full text-center font-bold px-2 py-2 bg-blue-600 text-wihte my-4 shadow-3xl border-none rounded-md"
            >
              Create Account
            </button>
          </div>
        </form>

     
      </div>

      </div>
    </div> -->

    <div class="login-page-new">
      <nav>
        <a
          href="https://clickup.com/?noRedirect=true"
          target="_blank"
          data-test="login__logo"
          class="login-page-new__logo"
          ><img
            src="@/assets/logo/logo4-removebg-preview.png"
            class="login-page-new__logo-img"
            alt="ClickUp - Home"
        /></a>
        <div class="login-page-new__top-right">
          <div class="login-page-new__top-right-text">
            Don't have an account?
          </div>
          <router-link to="/register">
          <a
            data-test="login__top-right-button"
            queryparamshandling="preserve"
            class="login-page-new__top-right-button"
           
            >Sign up</a
          >
          </router-link>
        </div>
      </nav>
       <div class="login-page-new__main">
        <div class="login-page-new__main-bg"></div>
        <div class="login-page-new__main-container">
          <div data-test="signup__main-form" class="login-page-new__main-form">
            <div class="login-page-new__main-form-title-brand"></div>
            <h1 class="login-page-new__main-form-title">Welcome Back!</h1>
            <section class="ng-star-inserted"
              ><div class="signup-page-new">
                <form
                  novalidate=""
                  id="signup-form"
                  aria-label="Sign Up"
                  class="
                    cu-form
                    cu-onboarding__form
                    
                  "
                >
       
                  <div
                    id="signup-form-username-row"
                    class="cu-form__row"
                  >
                    <div class="cu-form__label">Username</div>
                    <div class="cu-form__field">
                      <div
                        aria-hidden="true"
                        class="cu-onboarding__user_icon icon"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg><!---->
                      </div>
                      <input
                        cuautofocus=""
                        id="signup-username-input"
                        placeholder="username..."
                        v-model="this.login.username"
                        type="username"
                        maxlength="76"
                        pattern="[A-Za-z]{3,}" title="More Than Three letter"
                        class="cu-form__input"
                      />
                    </div>
                    <!----><!---->
                  </div>
                 
                  <!---->
                  <div
                    id="signup-form-password-row"
                    class="cu-form__row"
                  >
                    <div class="cu-form__label">Password</div>
                    <div class="cu-form__field">
                      <div
                        aria-hidden="true"
                        class="cu-onboarding__lock_icon icon"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                      </div>
                      <input
                        id="signup-password-input"
                        :type="showPassword?'text':'password'"
                        autocomplete="off"
                        placeholder="••••••"
                        class="cu-form__input"
                        v-model="this.login.password"
                      /><a
                        @click.prevent='this.showPassword = !this.showPassword'
                        draggable="false"
                        cupwd=""
                        class="cu-show-pwd"
                        >Show</a
                      >
                    </div>
                    
                  </div>

                
  

                  <div class="cu-form__row cu-form__row_last">
   
                    <button
                      type="submit"
                      class="
                        login-page-new__main-form-button
                        cu-btn cu-btn_block cu-btn_spinner
                       
                      "
                       @click.prevent="loginUser"
                    >
                      <span class="cu-btn__text"
                        >Log In</span
                      >
                      <div class="cu-btn__spinner">
                        <div class="cu-btn__bounce1"></div>
                        <div class="cu-btn__bounce2"></div>
                        <div class="cu-btn__bounce3"></div>
                      </div></button
                    ><!----><!----><!---->
                  </div>
                </form>
                
                <div class="cu-onboarding__footnote">
                  Get New Updates About Kingscorp!
                  
                </div>
                <!----><!----><!----><!---->
              </div>
              <!----><!----><!----></section
            ><!----><a
              href="https://clickup.com/help"
              target="_blank"
              class="login-page-new__main-form-help"
              ><svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 6a6 6 0 016-6h4a6 6 0 016 6v4a6 6 0 01-6 6H6a6 6 0 01-6-6V6zm2 0a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm5.117-.483c-.12.25-.34.483-.617.483H6c-.552 0-1.016-.46-.836-.982A3.001 3.001 0 0111 6c0 1.126-.62 1.863-1.538 2.308C9.192 8.44 9 8.7 9 9a1 1 0 01-2 0v-.5c0-.828.724-1.313 1.482-1.647C8.787 6.72 9 6.467 9 6a1 1 0 00-1-1c-.512 0-.761.262-.883.517zM8 13a1 1 0 100-2 1 1 0 000 2z"
                  fill="#fff"
                ></path>
              </svg>
              <div class="login-page-new__main-form-help-text">Help</div></a
            ><!---->
          </div>
          <div class="login-page-new__main-bot-logos">
            <div
              class="
                login-page-new__main-bot-logo
                login-page-new__main-bot-logo_webflow
              "
            ></div>
            <div
              class="
                login-page-new__main-bot-logo
                login-page-new__main-bot-logo_booking-com
              "
            ></div>
            <div
              class="
                login-page-new__main-bot-logo
                login-page-new__main-bot-logo_squarespace
              "
            ></div>
            <div
              class="
                login-page-new__main-bot-logo
                login-page-new__main-bot-logo_padres
              "
            ></div>
          </div>
          
        </div>
      </div>
    </div>
    <Alert
      :messageType="'ERROR'"
      :messageContent="this.errorMessage"
      v-if="this.isError"
      @dismiss="this.isError = !this.isError"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../events/app.events";
import Alert from "../reusable/Alerts.vue";
import { getFromStorage } from "@/utils/storage.util";
import { User } from "@/interfaces/user.interface";
import Spinner from "@/components/reusable/loaders/spinner.vue";
import Toast from "@/components/reusable/toast/toast.vue";

@Options({
  methods: {
    loginUser() {
      this.spinner = !this.spinner;
      if (!this.login.username.trim() || !this.login.password.trim()) {
        // this.$router.push("/explore/dashboard");
        this.errorMessage = "invalid username or password";
      }
      if (!!this.errorMessage) {
        this.isError = true;
      } else {
        // this.$store.dispatch(AppActionEvents.user.add, this.register);
        this.$store.dispatch(AppActionEvents.location.retrieve);
        let userLocation = !this.$store.getters.getLocation
          ? this.$store.getters.getLocation
          : getFromStorage("location");
        // console.log(this.register, userLocation);
        let data: any = {
          username: this.login.username,
          password: this.login.password,
          last_login_location: userLocation,
          last_login: new Date(Date.now()),
        };

        this.$store.dispatch(AppActionEvents.user.login, data);
      }
    },
    isActionMutation() {
      this.actionType["login"] = !this.actionType.login;
      this.actionType["register"] = !this.actionType.register;
    },
   
  },
  mounted() {
    this.$store.dispatch(AppActionEvents.location.retrieve);
  },
  computed: {
    responseData() {
      if (this.$store.getters.getToast) {
        this.toast = true;
      }
      return this.$store.getters.getToast;
    },
  },
  components: {
    Alert,
    Spinner,
    Toast,
  },
})
export default class Login extends Vue {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      showPassword:false,
      login: {
        username: "",
        password: "",
      },
      errorMessage: "",
      isError: false,
      actionType: { login: true, register: false },
      toast: true,
      spinner: false,
    };
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

</style>


