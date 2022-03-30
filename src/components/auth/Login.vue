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
      :toast="this.$store.getters.getToast"
      @closeToast="this.$store.dispatch('hideToast')"
      v-if="!!this.$store.getters.getToast"
    />
    
    <div class="login-page-new">
      <nav>
        <router-link to="/">
        <a
          target="_blank"
          data-test="login__logo"
          class="login-page-new__logo"
          ><img
            src="@/assets/logo/logo4-removebg-preview.png"
            class="login-page-new__logo-img"
            alt="Kingscorp"
        /></a>
        </router-link>
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
              href="#"
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
import { StorageUtilis } from "@/utils/storage.util";
import { User } from "@/interfaces/user.interface";
import Spinner from "@/components/reusable/loaders/spinner.vue";
import Toast from "@/components/reusable/toast/toast.vue";

@Options({
  methods: {
    loginUser() {
      this.spinner = !this.spinner;
      if (!this.login.username.trim() || !this.login.password.trim()) {
        // this.$router.push("/explore/dashboard");
        this.isError = true;
        this.errorMessage = "invalid username or password";
      }
       else {
        // this.$store.dispatch(AppActionEvents.user.add, this.register);
        // this.$store.dispatch(AppActionEvents.location.retrieve);
       
        // // console.log(this.register, userLocation);
        let data: any = {
          username: this.login.username,
          password: this.login.password,
          last_login_location: '',
          last_login: new Date(Date.now()),
        };

        this.$store.dispatch(AppActionEvents.user.login, data);
      }
    },

   
  },
  mounted() {
    this.$store.dispatch(AppActionEvents.location.retrieve);
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


