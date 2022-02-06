/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { AppToastEvents } from "@/components/reusable/toast/toast";
import { ToastInterface } from "@/interfaces/toast.interface";

const toastService = new AppToastEvents()
 const state = {
     toasts: <ToastInterface>{}
 };

 const mutations = {
     setToast(state: any, payload: ToastInterface) {
         return state.toasts = payload;
     },
     setToasts(state: any, payload: ToastInterface) {
         return state.toasts = payload;
     },
 };

 const actions = {
     getToast(ctx:any, payload:ToastInterface){
        ctx.commit('setToasts', payload);
     }
 };

 const getters = {
     getToast(state: any) {
         return state.toasts;
     }
 };
 
 export default { state, getters, mutations, actions };
