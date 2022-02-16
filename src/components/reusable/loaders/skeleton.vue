<template>
 <tr v-for="n in [1,2,3]" :key="n">
                        <td class="px-6 py-4 text-left capitalize border"  v-for="(title, index) in dataCol"
                          :key="index">
                          <div class="animate-pulse flex space-x-4">
                              <div class="flex-1 space-y-6 py-1">                  
                                <div class="space-y-3">
                                  <div class="h-2 bg-gray-200 rounded"></div>
                                </div>
                              </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-left capitalize border" >
                          <div class="animate-pulse flex space-x-4">
                              <div class="flex-1 space-y-6 py-1">                  
                                <div class="space-y-3">
                                  <div class="h-2 bg-gray-200 rounded"></div>
                                </div>
                              </div>
                            </div>
                        </td>
 </tr>

</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
@Options({
  props:{
    dataCol:Array
  }
})
export default class SkeletonLoader extends Vue{    
}
</script>

<style lang="scss" scoped>
 

// .datagrid__row:before {
//   content: "";
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   animation-name: aniHorizontal;
//   animation-duration: 3.5s;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
//   mix-blend-mode: overlay;
//   background: linear-gradient(
//     to right,
//     #cccccc 2%,
//     #666666 18%,
//     #cccccc 33%
//   );
//   background-size: 50%;
// }


</style>