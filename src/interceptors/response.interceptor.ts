
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
        store.dispatch('getToast', {
            type: 'ERROR',
            message:'An Unexpected Error Occured! Please try later',
            status: 0,
        })
        // store.dispatch('hideLoader')

        console.log('axios response', res, res.request);
        
        store.dispatch('hideLoader')
        return res;
    }, (error)=> {
        
        
        // let dataToast:ToastInterface = {
        //     type: 'ERROR',
        //     message: error?.response?.data?.message,
        //     status: error?.response?.status ?? 0,
        // }
        // if(!error.status){
        //     store.dispatch('getToast', {
        //         type: 'ERROR',
        //         message:'An Unexpected Error Occured! Please try later',
        //         status: 0,
        //     })
        //     store.dispatch('hideLoader')
        //     return Promise.reject(error)
        // }
        // logError(error).then(()=> store.dispatch('hideLoader')).finally(()=>Promise.reject(error))
        console.log(error, typeof error);
        store.dispatch('hideLoader')
    },)
} 


export default responseInterceptor
