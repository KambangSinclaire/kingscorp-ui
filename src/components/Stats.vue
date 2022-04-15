<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0 ng-star-inserted"
    style=""
  >
    <div
      class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden"
    >
      <div class="flex items-start justify-between">
        <div class="text-lg font-medium tracking-tight leading-6 truncate">
          Summary
        </div>
        <div class="ml-2 -mt-2 -mr-3">
          <button
            aria-haspopup="true"
            
            class="mat-focus-indicator mat-menu-trigger  mat-button-base"
          >
            <span class="mat-button-wrapper"
              ><div
                role="img"
                class="div notranslate icon-size-5 div-no-color"
                aria-hidden="true"
                data-div-type="svg"
                data-div-name="dots-vertical"
                data-div-namespace="heroicons_solid"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  fit=""
                  height="25"
                  width="25"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  ></path></svg></div></span
            ><span
              matripple=""
              class="mat-ripple mat-button-ripple mat-button-ripple-round"
            ></span
            ><span class="mat-button-focus-overlay"></span></button
          ><!----><mat-menu class="ng-tns-c54-13 ng-star-inserted"
            ><!----></mat-menu
          >
        </div>
      </div>
      <div class="flex flex-col items-center mt-2">
        <div
          class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-blue-500"
        >
          21
        </div>
        <div class="text-lg font-medium text-blue-600 dark:text-blue-500">
          Due Tasks
        </div>
        <div
          class="flex items-baseline justify-center w-full mt-5 text-secondary"
        >
          <div class="text-md font-medium truncate">Completed:</div>
          <div class="ml-1.5 text-lg font-semibold">13</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden"
    >
      <div class="flex items-start justify-between">
        <div class="text-lg font-medium tracking-tight leading-6 truncate">
          Overdue
        </div>
        <div class="ml-2 -mt-2 -mr-3">
          <button
            aria-haspopup="true"
            
            class="mat-focus-indicator mat-menu-trigger  mat-button-base"
          >
            <span class="mat-button-wrapper"
              ><div
                role="img"
                class="div notranslate icon-size-5 div-no-color"
                aria-hidden="true"
                data-div-type="svg"
                data-div-name="dots-vertical"
                data-div-namespace="heroicons_solid"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  fit=""
                  height="25"
                  width="25"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  ></path></svg></div></span
            ><span
              matripple=""
              class="mat-ripple mat-button-ripple mat-button-ripple-round"
            ></span
            ><span class="mat-button-focus-overlay"></span></button
          ><!----><mat-menu class="ng-tns-c54-14 ng-star-inserted"
            ><!----></mat-menu
          >
        </div>
      </div>
      <div class="flex flex-col items-center mt-2">
        <div
          class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-red-500"
        >
          17
        </div>
        <div class="text-lg font-medium text-red-600 dark:text-red-500">
          Tasks
        </div>
        <div
          class="flex items-baseline justify-center w-full mt-5 text-secondary"
        >
          <div class="text-md font-medium truncate">From yesterday:</div>
          <div class="ml-1.5 text-lg font-semibold">9</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden"
    >
      <div class="flex items-start justify-between">
        <div class="text-lg font-medium tracking-tight leading-6 truncate">
          Issues
        </div>
        <div class="ml-2 -mt-2 -mr-3">
          <button
            aria-haspopup="true"
            
            class="mat-focus-indicator mat-menu-trigger  mat-button-base"
          >
            <span class="mat-button-wrapper"
              ><div
                role="img"
                class="div notranslate icon-size-5 div-no-color"
                aria-hidden="true"
                data-div-type="svg"
                data-div-name="dots-vertical"
                data-div-namespace="heroicons_solid"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  fit=""
                  height="25"
                  width="25"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  ></path></svg></div></span
            ><span
              matripple=""
              class="mat-ripple mat-button-ripple mat-button-ripple-round"
            ></span
            ><span class="mat-button-focus-overlay"></span></button
          ><!----><mat-menu class="ng-tns-c54-15 ng-star-inserted"
            ><!----></mat-menu
          >
        </div>
      </div>
      <div class="flex flex-col items-center mt-2">
        <div
          class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-amber-500"
        >
          24
        </div>
        <div class="text-lg font-medium text-amber-600 dark:text-amber-500">
          Open
        </div>
        <div
          class="flex items-baseline justify-center w-full mt-5 text-secondary"
        >
          <div class="text-md font-medium truncate">Closed today:</div>
          <div class="ml-1.5 text-lg font-semibold">19</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col flex-auto p-6 bg-card shadow rounded-2xl overflow-hidden"
    >
      <div class="flex items-start justify-between">
        <div class="text-lg font-medium tracking-tight leading-6 truncate">
          Features
        </div>
        <div class="ml-2 -mt-2 -mr-3">
          <button
            aria-haspopup="true"
            
            class="mat-focus-indicator mat-menu-trigger  mat-button-base"
          >
            <span class="mat-button-wrapper"
              ><div
                role="img"
                class="div notranslate icon-size-5 div-no-color"
                aria-hidden="true"
                data-div-type="svg"
                data-div-name="dots-vertical"
                data-div-namespace="heroicons_solid"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  fit=""
                  height="25"
                  width="25"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                  ></path></svg></div></span
            ><span
              matripple=""
              class="mat-ripple mat-button-ripple mat-button-ripple-round"
            ></span
            ><span class="mat-button-focus-overlay"></span></button
          ><!----><mat-menu class="ng-tns-c54-16 ng-star-inserted"
            ><!----></mat-menu
          >
        </div>
      </div>
      <div class="flex flex-col items-center mt-2">
        <div
          class="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-green-500"
        >
          38
        </div>
        <div class="text-lg font-medium text-green-600 dark:text-green-500">
          Proposals
        </div>
        <div
          class="flex items-baseline justify-center w-full mt-5 text-secondary"
        >
          <div class="text-md font-medium truncate">Implemented:</div>
          <div class="ml-1.5 text-lg font-semibold">16</div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Stats extends Vue {}
</script>
