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
import { setToStorage } from "@/utils/storage.util";
 
 const state = {
     locations: <any>[]
 };
 
 const mutations = {
     setLocation(state: any, payload: any) {
         return state.locations.push(payload);
     },
     setLocations(state: any, payload: any | Iterable<any>) {
         setToStorage(payload, 'location')
         return state.locations = [payload];
     },
    
 };

 const actions = {
     getLocations(ctx: any) {
         IPC.ipcRequestTrigger(AppActionEvents.location.retrieve).then((data) => {
             ctx.commit('setLocations', data);
         });
     },  
 };
 const getters = {
     getLocations(state: any) {
         return state.locations;
     }
 };
 
 export default { state, getters, mutations, actions };
