<template>
  <!-- <section
    class="sidebar w-full h-full bg-white bg-gradient-to-r app-custom-gradient"
  >
    <div class="side-links flex flex-col items-center justify-center">
      <div class="nav-items">
        <router-link to="/" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/monitor.svg" alt="" />
          <span class="nav-title">Dashboard</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Products">
        <router-link :to="routes.product.list" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/gift.svg" alt="" />
          <span class="nav-title">Products</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Stock">
        <router-link to="/stock" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/award.svg" alt="" />
          <span class="nav-title">Stock</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Inventory">
        <router-link to="/inventory" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/inbox.svg" alt="" />
          <span class="nav-title">Inventory</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Sales">
        <router-link to="/sales" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/dollar-sign.svg" alt="" />
          <span class="nav-title">Sales</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Credits">
        <router-link to="/credits" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/credit-card.svg" alt="" />
          <span class="nav-title">Credits</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Invoices">
        <router-link to="/invoice" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/briefcase.svg" alt="" />
          <span class="nav-title">Invoices</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/personnel" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/users.svg" alt="" />
          <span class="nav-title">Personnels</span>
        </router-link>
      </div>

      <div class="nav-items" v-if="getPref.Notifications">
        <router-link to="/notification" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/bell.svg" alt="" />
          <span class="nav-title">Notifications</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/profile" class="sidebar-nav-items">
          <img src="@/assets/feather_icons/user.svg" alt="" />
          <span class="nav-title">Profile</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/settings" class="sidebar-nav-items">
          <span class="icon">
            <img src="@/assets/feather_icons/settings.svg" alt="" />
          </span>
          <span class="nav-title">Settings</span>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link to="/logout" class="sidebar-nav-items">
          <span class="icon">
            <img src="@/assets/feather_icons/log-out.svg" alt="" />
          </span>
          <span class="nav-title">Logout</span>
        </router-link>
      </div>
    </div>
  </section> -->

  <!-- <section class="container">
    <div class="first-card container px-8 py-4 rounded-sm border border-solid">
      <div class="logo py-6">
        <img src="@/assets/feather_icons/user.svg" alt="" />
      </div>
      <div class="app-description">
        <p class="text py-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          et debitis ipsum? Nesciunt recusandae quas
        </p>
        <button class="department-button">
          <img src="@/assets/feather_icons/user.svg" alt="" />
          Create Department
        </button>
      </div>
      <div class="popular-links flex flex-col">
        <span> Products </span>
        <span> Stock </span>
      </div>
    </div>

    <div class="second-card container px-8 py-4 rounded-sm border border-solid my-8">
      <h2>Quick</h2>
      <div class="help-links flex flex-col">
        <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/activity.svg" class="pr-4" alt="" />
         Recent activity
        </spa>
         <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/archive.svg" class="pr-4" alt="" />
         Archived resources
        </spa>
         <spa class="help-link-item py-4 flex">
          <img src="@/assets/feather_icons/help-circle.svg" class="pr-4" alt="" />
         Get Help
        </spa>
      </div>
    </div>
  </section> -->


	<div class="flex flex-col items-start h-full  w-full  overflow-hidden text-gray-400 bg-gray-100 ">
	
		<div class="w-full ">
			<div class="flex flex-col items-start w-full bg-gray-100 ">
				 <div class="mt-1 relative rounded-full w-full ">
              <div
                class="absolute w-full inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <span class="text-gray-300 sm:text-sm">
                  <i class="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                class=" block w-full pl-10 pr-12 py-2 mt-1 sm:text-sm border-gray-300 rounded-md"
                placeholder="search"
              />
          </div>

   <ul>
  <li class="folder">
    <button>Dashboard</button>
    <ul>
      <li class="folder"><button>Dashboard.Home</button>
        <ul>
          <li><button>Dashboard.Profile</button></li>
          <li><button>Dashboard.Others</button></li>
        </ul>
      </li>
      <li class="folder"><button>TaglineContent.Container</button>
        <ul>
          <li><button>TaglineContent.Header</button></li>
          <li><button>TaglineContent.Paragraph</button></li>
        </ul>
      </li>
      <li class="folder"><button>TaglineContent.Container</button>
        <ul>
          <li><button>TaglineContent.Header</button></li>
          <li><button>TaglineContent.Paragraph</button></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
	
			</div>
			
		</div>
		
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
@Options({
  computed: {
    // GET REACTIVE UPDATES FROM STORE
    getPref() {
      let preferences = this.$store.getters.getPreferences;
      return preferences;
    },
  },
})
export default class Sidebar extends Vue {
  data() {
    return {
      routes: {
        product: {
          list: "/products",
          edit: "/product/edit",
          delete: "/products/delete",
          add: "/products/add",
        },
      },
      preferences: {
        Stock: true,
        Products: true,
        Notifications: true,
        Sales: true,
        Credits: true,
        Inventory: true,
        Invoices: true,
      },
    };
  }
}
</script>

<style scoped lang="scss">

li {
  font-size: 1rem;
  position: relative;
  border-left: 1px solid #bbb;
  padding: .5rem 1rem 0rem;
  list-style: none;
  &:before {
    position: absolute;
    left: 0px;
    width: .5rem;
    height: 1px;
    content: "";
    background-color: #bbb;
    top: 1.5rem;
  }
  
  &.folder {
    list-style: inside url("data:image/svg+xml,%3C!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='16px' height='16px' viewBox='0 0 18 14' style='enable-background:new 0 0 20 14;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill-rule:evenodd;clip-rule:evenodd;%3D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3Cpath class='st0' d='M0,14V0h7l1,2H2L0,14z M18,3l-2,11H1L3,3H18z'/%3E%3C/svg%3E%0A");
  }
// 1e40af
  
}

button {
  border: 0 none;
  background-color: transparent;
  text-align: left;
  width: 90%; /* i hate this */
  padding: .5rem;
  
  &:hover, &:focus {
    background-color: #eaeaea;
    border-radius: .25rem;
    outline: 0;
  }
}
.sidebar {
  border-right: 1px solid #8080802e;
  cursor: w-resize;
}
</style>