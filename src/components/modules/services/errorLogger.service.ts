import store from "@/store"
import { AxiosError } from "axios"


export const logError = async (error:AxiosError)=>{
    
    try {
        switch (error.response?.status) {
            case 0:
                store.dispatch('getToast',{
                    type: 'ERROR',
                    message: error?.response?.data?.message,
                    status: error?.response?.status ?? 0,
                })
                
                break;

            case 401:
                store.dispatch('getToast',{
                    type: 'ERROR',
                    message: error?.response?.data?.message,
                    status: error?.response?.status ?? 0,
                })
                break;
        
            default:
                store.dispatch('getToast',{
                    type: 'ERROR',
                    message: error?.response?.data?.message,
                    status: error?.response?.status ?? 0,
                })
                break;
        }
    } catch (error) {
     console.log(error);
    }
    

}