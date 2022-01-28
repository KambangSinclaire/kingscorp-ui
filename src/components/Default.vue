<template>
    <div class="grid lg:grid-cols-3 md:grid-cols-3 rounded-lg w-full  sm:grid-cols-1 gap-2 px-4 py-4">
      <InfoCard
        v-for="(setup, index) of cardSetup"
        :key="index"
        :setup="setup"
      />
    </div>
</template>

<script lang="ts">
import {Vue,Options} from 'vue-class-component';
import InfoCard from './reusable/Info-Card.vue';

 @Options({
   components: {
    InfoCard,
  },

 })
export default class Default extends Vue{
  data() {
    return {
      cardSetup: [
        {
          title: "Products",
          range: 10,
          btnMore: 78,
          description: "Test Products",
          topImage: "fas fa-archive",
          bgColor: "bg-blue-500",
          actions: {
            showMore: "show product listing",
            showStatistics: "show product statistics",
          },
          routes: {
            toListingView: "dashboard/products",
            toStatisticsView: "products/statistics",
          },
        },
        {
          title: "Services",
          range: 10,
          btnMore: 78,
          bgColor: "bg-green-500",
          description:
            "KingsCorp currently offers photocopy, scanning, printing and graphich design services",
          topImage: "fas fa-archive",
          actions: {
            showMore: "show product listing",
            showStatistics: "show product statistics",
          },
          routes: {
            toListingView: "dashboard/service",
            toStatisticsView: "service/statistics",
          },
        },
        {
          title: "Sale",
          range: 10,
          btnMore: 78,
          bgColor: "bg-yellow-500",
          description: "Test sales",
          topImage: "fab fa-cc-mastercard",
          actions: {
            showMore: "show sale listing",
            showStatistics: "show sale statistics",
          },
          routes: {
            toListingView: "dashboard/sales",
            toStatisticsView: "sales/statistics",
          },
        },

        {
          title: "Notification",
          range: 10,
          btnMore: 78,
          bgColor: "bg-red-500",
          description: "Test inventories",
          topImage: "far fa-Notification-card",
          actions: {
            showMore: "show Notification listing",
            showStatistics: "show Notification statistics",
          },
          routes: {
            toListingView: "dashboard/Notification",
            toStatisticsView: "inventories/statistics",
          },
        },

        {
          title: "Invoice",
          range: 10,
          btnMore: 78,
          bgColor: "bg-indigo-500",
          description: "Test invoices",
          topImage: "fas fa-file-invoice-dollar",
          actions: {
            showMore: "show invoice listing",
            showStatistics: "show invoice statistics",
          },
          routes: {
            toListingView: "dashboard/invoice",
            toStatisticsView: "invoices/statistics",
          },
        },
        {
          title: "Personel",
          range: 60,
          btnMore: 78,
          bgColor: "bg-yellow-500",
          description: "Test Personels",
          topImage: "fas fa-user-friends",
          actions: {
            showMore: "show Personel listing",
            showStatistics: "show Personel statistics",
          },
          routes: {
            toListingView: "dashboard/personnel",
            toStatisticsView: "personnel/statistics",
          },
        },
        {
          title: "Categories",
          range: 60,
          btnMore: 78,
          bgColor: "bg-blue-500",
          description: "Test Categories",
          topImage: "fas fa-user-friends",
          actions: {
            showMore: "show Categories listing",
            showStatistics: "show Categories statistics",
          },
          routes: {
            toListingView: "dashboard/categories",
            toStatisticsView: "categories/statistics",
          },
        },

        {
          title: "Stock",
          range: 60,
          btnMore: 78,
          bgColor: "bg-green-500",
          description: "Test Stock",
          topImage: "fas fa-user-friends",
          actions: {
            showMore: "show Personel listing",
            showStatistics: "show Stock statistics",
          },
          routes: {
            toListingView: "dashboard/stock",
            toStatisticsView: "stock/statistics",
          },
        },
        {
          title: "Credits",
          range: 60,
          btnMore: 78,
          bgColor: "bg-red-500",
          description: "Test credits",
          topImage: "fas fa-archive",
          actions: {
            showMore: "show Notification listing",
            showStatistics: "show Notification statistics",
          },
          routes: {
            toListingView: "dashboard/credits",
            toStatisticsView: "credits/statistics",
          },
        },
      ],
    };
  }    
}
</script>