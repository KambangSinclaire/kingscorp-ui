
import { ToastInterface } from '@/interfaces/toast.interface';
import store from '@/store';
import axios from 'axios'


const responseInterceptor = async () => {
try {
    return axios.interceptors.response.use((res) => {
        
        let dataToast:ToastInterface = {
            type: 'ERROR',
            message: '',
            status: 0,
        }

        if(res.status == 0){
            dataToast = {
                    type:"ERROR" ,
                    message:"Slow Network Intervention. Please Try again Later.",
                    status: res.status,
                    
            }
        }

        if(res.status > 100 && res.status < 400){
            dataToast =  {
                type:"SUCCESS" ,
                message:res.statusText,
                status: res.status,
                others:res.data,
                
            }
        }
        switch (true) {
            case res.request?.responseURL.includes('get'):
            //  console.log(dataToast);
             
            store.dispatch('getToast', dataToast)
                break;

            case res.request?.responseURL.includes('add'):
                store.dispatch('getToast', dataToast)
                break;

            case res.request?.responseURL.includes('edit'):
                store.dispatch('getToast', dataToast)
                break;

            case res.request?.responseURL.includes('delete'):
                store.dispatch('getToast', dataToast)
                break;
        
        }
        
        store.dispatch('hideLoader')
        return res;
    })

} catch (error) {
    Promise.reject(error)
}
}

export default responseInterceptor
