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
     Permissions: <any>[]
 }
 const mutations = {
     setPermission(state: any, payload: any) {
         return state.Permissions.push(payload);
     },
     setPermissions(state: any, payload: any | Iterable<any>) {
         // console.log(payload);
         
         return state.Permissions = [...payload?.data];
     },

 }
 const getters = {
     getPermissions(state: any) {
         return state.Permissions;
     }
 }
 const actions = {
     getPermissions(ctx: any, payload: any) {
         IPC.ipcRequestTrigger(AppActionEvents.permission.retrieve, payload).then((result) => {             
            !!result && ctx.commit('setPermissions', result);
         })
     },
 }
 
 export default { state, getters, mutations, actions };