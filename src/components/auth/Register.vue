<template>
    
  <div class="
      auth-container
      w-full
      bg-white
      h-screen
      flex
      justify-center
      align-center
    ">
    <!-- <Spinner
      v-if="
        this.$store.getters.getLoader?.type == 'spinner' &&
        this.$store.getters.getLoader?.loading
      "
    /> -->
       <Toast
      :toast="this.$store.getters.getToast"
      @closeToast="this.$store.dispatch('hideToast')"
      v-if="!!this.$store.getters.getToast"
    />
    
    <Alert
      :messageType="'ERROR'"
      :messageContent="this.errorMessage"
      v-if="this.isError"
      @dismiss="this.isError = !this.isError"
    />
    <div id="signup-page-new" class="show  bg-white">
      <nav>
        <a
          href="https://clickup.com/?noRedirect=true"
          target="_blank"
          class="login-page-new__logo"
          ><img
            src="@/assets/logo/logo4-removebg-preview.png"
            class="login-page-new__logo-img"
            alt="ClickUp - Home"
        /></a>
        <div class="login-page-new__top-right">
          <div class="login-page-new__top-right-text">
            Already Have An Account?
          <router-link to="/login">
          <a
            data-test="signup__top-right-button ml-2"
            class="login-page-new__top-right-button text-center"
            href="https://app.clickup.com/login"
            >Login</a
          ><!----><!---->
          </router-link>
        </div>
        </div>
        <!---->
      </nav>
      <div class="login-page-new__main bg-white">
        <div class="login-page-new__main-bg"></div>
        <div class="login-page-new__main-container">
          <div data-test="signup__main-form" class="login-page-new__main-form">
            <div class="login-page-new__main-form-title-brand"></div>
            <h1 class="login-page-new__main-form-title">Create An Account!</h1>
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
                    <div class="cu-form__label">Full Name</div>
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
                        v-model="this.register.username"
                        type="username"
                        maxlength="76"
                        pattern="[A-Za-z]{3,}" title="More Than Three letter"
                        class="cu-form__input"
                      />
                    </div>
                    <!----><!---->
                  </div>
                  <div
                    id="signup-form-email-row"
                    cutooltip="This invite can only be used with this email address. To use a different email address, please ask a Workspace admin to send a new invitation."
                    class="cu-form__row"
                  >
                    <div class="cu-form__label">Email</div>
                    <div class="cu-form__field">
                      <div
                        aria-hidden="true"
                        class="cu-onboarding__envelope_icon icon"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    
                      </div>
                      <input
                        id="signup-email"
                        placeholder="example@site.com"
                        v-model="this.register.email"
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        class="
                          cu-form__input
                        "
                      />
                    </div>
                   
                  </div>
                  <!---->
                  <div
                    id="signup-form-password-row"
                    class="cu-form__row"
                  >
                    <div class="cu-form__label">Choose Password</div>
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
                        v-model="this.register.password"
                      /><a
                        @click.prevent='this.showPassword = !this.showPassword'
                        draggable="false"
                        cupwd=""
                        class="cu-show-pwd"
                        >Show</a
                      >
                    </div>
                    
                  </div>

                  <div
                  
                    cutooltip="This invite can only be used with this email address. To use a different email address, please ask a Workspace admin to send a new invitation."
                    class="cu-form__row"
                  >
                    <div class="cu-form__label">Phone No</div>
                    <div class="cu-form__field">
                      <div
                        aria-hidden="true"
                        class="cu-onboarding__envelope_icon icon"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    
                      </div>
                      <input
                    
                        placeholder="+(country_code) tel..."
                        v-model="this.register.phone_number"
                        type="text"
                        pattern="[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
                        title="add Country code!"
                        class="cu-form__input"
                      />
                    </div>
                   
                  </div>
  

                  <div class="cu-form__row cu-form__row_last">
   
                    <button
                      type="submit"
                      class="
                        login-page-new__main-form-button
                        cu-btn cu-btn_block cu-btn_spinner
                       
                      "
                       @click.prevent="createUser"
                    >
                      <span class="cu-btn__text"
                        >Create an Account</span
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
                  By clicking the button above, you agree to our
                  <a
                    href="http://clickup.com/terms"
                    target="_blank"
                    class="cu-onboarding__footnote-link"
                    >Terms of Service</a
                  >
                  and
                  <a
                    href="http://clickup.com/privacy"
                    target="_blank"
                    class="
                      cu-onboarding__footnote-link
                      cu-onboarding__footnote-link_last
                    "
                    >Privacy Policy</a
                  >.
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
          <div class="login-page-new__main-bot-teams">
            See why 800,000+ teams are more productive with KingsCorp
          </div>
        </div>
      </div>
      <!---->
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
    createUser() {
      switch (false) {
        case /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/.test(
          this.register.username
        ):
          this.errorMessage = "User name is badly formated";
          this.isError = true;
          break;

        case /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          this.register.email
        ):
          this.errorMessage = "Invalid Email is badly formated";
          this.isError = true;
          break;

        case /^[a-zA-Z0-9?!@#$%^&*]{4,16}$/.test(this.register.password):
          this.errorMessage = "Password should be characters";
          this.isError = true;
          break;

        case /^\+(?:[0-9] ?){6,14}[0-9]$/.test(this.register.phone_number):
          this.errorMessage = "phone number must have country code";
          this.isError = true;
          break;
      }

      if(!this.errorMessage){
        this.isError = false;
         this.$store.dispatch(AppActionEvents.location.retrieve);
        let userLocation = "";
        
        storageUtil.getFromStorageAndDecode('location')?userLocation = storageUtil.getFromStorageAndDecode('location') : userLocation
        // console.log(this.register, userLocation);
        
        let data:User = {
          username: this.register.username,
          email: this.register.email,
          password: this.register.password,
          phone_number: this.register.phone_number,
          last_login_location: userLocation.toString(),
          last_login: new Date(Date.now()),
        };
        this.$store.dispatch(AppActionEvents.user.add, data);
      }

    },
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
      showPassword:false,
      errorMessage: "",
      isError: false,
      actionType: { login: true, register: false },
      toast: true,
      spinner: false,
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

</style>

