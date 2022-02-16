/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

 import { AppActionEvents } from "@/events/app.events";
 import IPC from "@/utils/ipc-renderer.util";
 
 const state = {
    loading: false
 };
 const mutations = {
     showLoader(state:any){
         return state.loading = true
     },
     hideLoader(){
        return state.loading = false
     }
 };
 const actions = {
     showLoader(ctx:any){
        ctx.commit('showLoader')
     },
     hideLoader(ctx:any){
        ctx.commit('hideLoader')
     },
     
 };
 const getters = {
     getLoader(state: any) {
         return state.loading;
     }
 };
 
 export default { state, mutations, actions, getters };