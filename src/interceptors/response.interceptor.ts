
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
            case res.request.responseUrl.includes('get'):             
                store.dispatch('getToast', dataToast)
                break;

            case res.request.responseUrl.includes('add'):
                store.dispatch('getToast', dataToast)
                break;

            case res.request.responseUrl.includes('edit'):
                store.dispatch('getToast', dataToast)
                break;

            case res.request.responseUrl.includes('delete'):
                store.dispatch('getToast', dataToast)
                break;
        }
        store.dispatch('getToast', {
            type: 'ERROR',
            message:'An Unexpected Error Occured! Please try later',
            status: 0,
        })


        store.dispatch('hideLoader')
        return res;
    }, (error)=> {
        store.dispatch('hideLoader')

        console.log('this is response error ',error.response.data.message);
        
        let dataToast:ToastInterface = {
            type: 'ERROR',
            message: error.response.data.message,
            status: error.response.status,
        }
        store.dispatch('getToast',dataToast)
       
        console.log('axios response');
        Promise.reject(error)
    })
} 


export default responseInterceptor
