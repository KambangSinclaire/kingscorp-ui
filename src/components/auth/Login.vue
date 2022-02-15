<template>
  <div
    class="auth-container w-full bg-blue-100 h-screen flex justify-center align-center"
  >
    <div
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
        class=" login-container w-full h-full rounded-3xl lg:px-6 py-6 md:px-6 px-2 flex flex-col align-center justify-center"
      >
        <div class="md:hidden lg:hidden relative w-full -top-10 px-4 rounded-2xl shadow-2xl py-2">
              <p class="text-gray-800">Don't Have An Account?</p>
              <a @click.prevent="isActionMutation" class="text-yellow-500 font-bold">Create Account</a>
            </div>
        <form autocomplete="false" class="px-4   sm:w-full ">
          <h1 class="text-2xl font-bold mb-8">Login</h1>
          <!-- username -->
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

          <!-- password -->
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

          <div class="input-container">
            <button  @click.prevent="loginUser"
              class="w-full text-center font-bold px-2 py-2 bg-blue-600 text-wihte my-4 shadow-3xl border-none rounded-md"
            >
              Login
            </button>
          </div>
        </form>
<!-- 
        <div class="w-full  py-6 px-4 flex flex-col items-center justify-center  overflow-hidden text-center relative">
          <div class="line w-full h-0.5 bg-gray-300 "></div>
          <div
            class="h-10 absolute choice top-1 rounded-full w-10 bg-white text-sm border text-gray-400 text-center px-2 py-2 "
          >
            <small>OR</small>
          </div>
        </div>
        <div class="px-4  w-full mt-6">
          <button
            class="w-full google text-center font-bold px-2 py-2 bg-white-600 my-4 shadow-3xl border-none rounded-md flex justify-center"
          >
            <img
              src="../../assets/img/google.png"
              class="h-6 w-6 rounded-full mr-2"
              alt=""
            /><span> <small>Continue With Google</small></span>
          </button>
        </div> -->
      </div>

       <div :class="{ 'hidden':this.actionType.login}"
        class="register-container w-full  h-full rounded-3xl lg:px-6 py-6 md:px-6 px-2 flex flex-col align-center justify-center"
      >
        <div class="md:hidden  lg:hidden relative w-full -top-10 px-4 rounded-2xl shadow-2xl py-2">
              <p class="text-gray-800">Already Have An Account?</p>
              <a @click.prevent="isActionMutation" class="text-yellow-500 font-bold">Login</a>
            </div>
        <form autocomplete="false" class="px-4   sm:w-full ">
          <h1 class="text-2xl font-bold mb-8">Create Account</h1>
          <!-- username -->
          <div class="input-container my-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700"
                >UserName</label
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
              create Account
            </button>
          </div>
        </form>

     
      </div>

      </div>
    </div>
    <Alert :messageType="'ERROR'" :messageContent="this.errorMessage" v-if="this.isError" @dismiss="this.isError = !this.isError" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AppActionEvents } from "../../events/app.events";
import Alert from "../reusable/Alerts.vue";
import { getFromStorage } from "@/utils/storage.util";
import {  User, } from "@/interfaces/user.interface";

@Options({
  methods: {
    loginUser() {
      if (!this.login.username.trim()  || !this.login.password.trim() ) {
        // this.$router.push("/explore/dashboard");
        this.errorMessage = "invalid username or password"
      }
      if(!!this.errorMessage){
        this.isError = true
      }else{
         // this.$store.dispatch(AppActionEvents.user.add, this.register);
        this.$store.dispatch(AppActionEvents.location.retrieve)
        let userLocation = !this.$store.getters.getLocation?this.$store.getters.getLocation : getFromStorage('location')
        // console.log(this.register, userLocation);
        let data:any = {
          username:this.login.username,
          password:this.login.password,
          last_login_location:userLocation,
          last_login: new Date(Date.now())
        }
        this.$store.dispatch(AppActionEvents.user.login, data);
      }
    },
    isActionMutation(){
      this.actionType['login'] = !this.actionType.login;
      this.actionType['register'] = !this.actionType.register 
    },
    createUser() {
      switch (false) {
        case /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/.test(this.register.username):
          this.errorMessage = "User name is badly formated"
        break;

        case  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.register.email):
          this.errorMessage = "Invalid Email is badly formated"
        break;

        case /^[a-zA-Z0-9?!@#$%^&*]{4,16}$/.test(this.register.password):
            this.errorMessage = "Password should be characters"
        break;
        
        case /^\+(?:[0-9] ?){6,14}[0-9]$/.test(this.register.phone_number):
           this.errorMessage = "phone number must have country code"
        break;
      }
      if(!!this.errorMessage){
        this.isError = true
      }else{
        // this.$store.dispatch(AppActionEvents.user.add, this.register);
        this.$store.dispatch(AppActionEvents.location.retrieve)
        let userLocation ;
        if(!this.$store.getters.getLocation && !getFromStorage('location')){
          userLocation=""
        }else{
          userLocation = getFromStorage('location')
        }
        // console.log(this.register, userLocation);
        let data:User = {
          username:this.register.username,
          email:this.register.email,
          password:this.register.password,
          phone_number:this.register.phone_number,
          last_login_location:userLocation.toString(),
          last_login: new Date(Date.now())
        }
         this.$store.dispatch(AppActionEvents.user.add, data)
        
        // this.$router.push("/explore/dashboard");
      }
      
    },

    
  },
  mounted() {
     this.$store.dispatch(AppActionEvents.location.retrieve)
    // check if already logged in
    // if (this.$store.getters.isLoggedIn) {
    //   this.$router.push("/explore/dashboard");
    // }  
  },
  components:{
    Alert
  }
})
export default class Login extends Vue {


  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      register:{
        username:"", email:"", password:"", phone_number:""
      },
      login:{
        username:"", password:""
      },
      errorMessage : "",
      isError:false,
      actionType:{login:true, register:false}
    };
  }
}
</script>

<style lang="scss" scoped>
a{
  cursor:pointer;
}
.card-container {
  width: 800px;
  height: 500px;
  max-width: 90%;
  border-radius: 20px;
}
.img-container {
  border-radius: 20px;
  background-image: url(../../assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 70px;
    height: 70px;
    border-radius: 50%;
    left: 3%;
    top: -8%;
    background: radial-gradient(
      circle at 65% 15%,
      white 1px,
      aqua 3%,
      darkblue 60%,
      aqua 100%
    );
  }
}
.text-blur-container {
  position: relative;
  //    overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-image: url(../../assets/img/fakurian-design-PGdW_bHDbpI-unsplash.jpg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    filter: blur(8px);
    top: 0;
    left: 0;
  }
  &::after {
    position: absolute;
    content: "";
    width: 60px;
    height: 60px;
    border-radius: 50%;
    left: -23%;
    bottom: -17%;
    background: radial-gradient(
      circle at 65% 15%,
      white 1px,
      aqua 3%,
      darkblue 60%,
      aqua 100%
    );
  }
}
.text-container {
  position: relative;
  z-index: 100000000;
}
h1.header-text {
  line-height: 1rem;
  text-align: justify;
  padding: 1rem;
  background: #bee3f836;
  width: 35%;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.5rem 0.3rem;
  margin-left: 1.5rem;
}
.text {
  small {
    font-size: 0.6rem;
  }
  h1 {
    margin-bottom: -0.5rem;
  }
}
.signin-link {
  position: absolute;
  bottom: 0;
  transform: translateY(170px);
  background: #bee3f82a;
}
input {
  outline: none !important;
}
button {
  border: none;
  box-shadow: 2px 2px 2px #cfcfd1;
  color: white;
}
button.google {
  color: black;
  border: 1px solid blue;
}
@media (max-width: 767px){
.card-container{
  height: 90%;
}
.text-blur-container {
 top: -45px;
 }
 .signin-link {
 transform: translateY(110px);
right: -50px;
}.choice{
  transform: translateX(50%);
left: 35%;
}
}

.login-container{
  animation: login 1s ease 0s 1 normal forwards;
}

.register-container{
  animation: register 1s ease 0s 1 normal forwards;
}

@keyframes register {
  0% {
    opacity: 0;
    transform: translateX(250px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes login {
  0% {
    opacity: 0;
    transform: translateX(-250px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>


