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
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "Products",
    component: Product
  },
  {
    path: "/credits",
    name: "Credits",
    component: Credits,
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: Invoices,
  },
  {
    path: "/personnel",
    name: "Personnel",
    component: Personnel,
  },
  {
    path: "/notification",
    name: "Notification",
    component: Notifications,
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/recent-activity",
    name: "About",
    component: About
  },
  {
    path: "/logout",
    name: "Logout",
    component: Welcome
  },
  {
    path: "/service",
    name: "Service",
    component: Service
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Charts
  },
  {
    path: "/categories",
    component: Category
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    children: [
      {
        path: "",
        name: "Roles",
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
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },

  // LAZY LOADING -> GREAT FOR WEB APPS
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
