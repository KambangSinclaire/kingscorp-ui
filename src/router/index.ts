/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/auth/Login.vue";
import Welcome from "../components/Welcome.vue";
import About from "../views/About.vue";
import Stock from "../components/modules/stock/Stock.vue";
import Product from "../components/modules/products/Product.vue";
import Settings from "../components/settings/Settings.vue";
import Roles from "../components/settings/Roles.vue";
import Permissions from "../components/settings/Permissions.vue";
import Groups from "../components/settings/Groups.vue";
import Preferences from "../components/settings/Preferences.vue";
import Personnel from "../components/modules/personnel/Personnel.vue";
import Inventory from "../components/modules/inventory/Inventory.vue";
import Sales from "../components/modules/sales/Sales.vue";
import Category from "../components/modules/categories/Category.vue";
import Service from "../components/modules/services/Services.vue";
import Notifications from "../components/modules/notifications/Notification.vue";
import Credits from "../components/modules/credits/Credits.vue";
import Invoices from "../components/modules/invoices/Invoices.vue";
import Profile from "../components/auth/Profile.vue";
import Charts from "../components/reusable/statistics/Charts.vue";
import Default from '../components/Default.vue'
import authGuard from "@/guards/auth.guard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore/dashboard",
    name: "Explore",
    component: Welcome,
    beforeEnter:authGuard.checkIfLogged,
    children:[
      {
        path:"",
        name:'Defualt',
        component:Default
      },
      {
        path: "products",
        name: "Products",
        component: Product
      },
      {
        path: "credits",
        name: "Credits",
        component: Credits,
      },
      {
        path: "sales",
        name: "Sales",
        component: Sales,
      },
      {
        path: "invoices",
        name: "Invoice",
        component: Invoices,
      },
      {
        path: "personnels",
        name: "Personnel",
        component: Personnel,
      },
      {
        path: "notifications",
        name: "Notification",
        component: Notifications,
      },
      {
        path: "stocks",
        name: "Stock",
        component: Stock,
      },
      {
        path: "inventorys",
        name: "Inventory",
        component: Inventory,
      },
      {
        path: "recent-activity",
        name: "About",
        component: About
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile
      },
      {
        path: "statistics",
        name: "Statistics",
        component: Charts
      },
      {
        path: "categories",
        component: Category
      },
      {
        path: "services",
        name: "Service",
        component: Service
      },
     
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
 
  {
    path: "/logout",
    name: "Logout",
    component: Login,
    beforeEnter: () => alert('welcome back :) ')
  },
 
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    
    children: [
      {
        path: "",
        name: "roles",
        component: Roles
      },
      {
        path: "permissions",
        name: "Permissions",
        component: Permissions
      },
      {
        path: "groups",
        name: "Groups",
        component: Groups
      },
      {
        path: "preferences",
        name: "Preferences",
        component: Preferences
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
