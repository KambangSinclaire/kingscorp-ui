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
import { StorageUtilis } from "@/utils/storage.util";
 let storageUtil = new StorageUtilis()
 const state = {
     locations: <any>[]
 };

 const mutations = {
     
     setLocations(state: any, payload: any | Iterable<any>) {
        !!payload && storageUtil.setToStorageAndEncode(payload, 'location')
        console.log(payload);
         return state.locations = [payload];
     },
 };

 const actions = {
     getLocation(ctx: any) {
         IPC.ipcRequestTrigger(AppActionEvents.location.retrieve).then((data) => {
             ctx.commit('setLocations', data);
         });
     },  
 };

 const getters = {
     getLocation(state: any) {
         return state.locations;
     }
 };
 
 export default { state, getters, mutations, actions };
