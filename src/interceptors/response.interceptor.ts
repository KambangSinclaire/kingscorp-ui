
import { logError } from '@/components/modules/services/errorLogger.service';
import { ToastInterface } from '@/interfaces/toast.interface';
import store from '@/store';
import axios from 'axios'


const responseInterceptor = async () => {

    return axios.interceptors.response.use((res) => {
        
      
        
        let dataToast:ToastInterface = {
            type:"SUCCESS" ,
                message:"Success",
                status: res.status,
                others:res.data,
        }

       if(res !== undefined && !!res.request?.responseUrl){
           switch (true) {
               case res.request?.responseUrl.includes('get'):             
                   store.dispatch('getToast', dataToast)
                   store.dispatch('hideLoader')
                   break;
   
               case res.request?.responseUrl.includes('add'):
                   store.dispatch('getToast', dataToast)
                   store.dispatch('hideLoader')
                   break;
   
               case res.request?.responseUrl.includes('edit'):
                   store.dispatch('getToast', dataToast)
                   store.dispatch('hideLoader')
                   break;
   
               case res.request?.responseUrl.includes('delete'):
                   store.dispatch('getToast', dataToast)
                   store.dispatch('hideLoader')
                   break;
           }
           
           return res;
        }
        
        // store.dispatch('getToast', {
            //     type: 'ERROR',
            //     message:'An Unexpected Error Occured! Please try later',
            //     status: 0,
            // })
            // store.dispatch('hideLoader')
            
            store.dispatch('hideLoader')
            return []
    }, (error)=> {
    
        logError(error).finally(()=>Promise.reject(error)).finally(()=>store.dispatch('hideLoader'))
     
        
    },)
} 


export default responseInterceptor
