/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { ToastInterface } from "@/interfaces/toast.interface";
import store from "@/store";
import { Vue } from "vue-class-component";
import Toast from './toast.vue'

 export class AppToastEvents{
  


    setToastEvent(status:number, message:string, type:"ERROR"|"SUCESS"|"INFO"):any{
        
    }

    async getData(payload:any){
       try {
           return payload
       } catch (error) {
           throw new Error(JSON.stringify(error));       
       }
    }
}

