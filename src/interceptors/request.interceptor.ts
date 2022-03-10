
import store from '@/store'
import { getFromStorage } from '@/utils/storage.util'
import axios from 'axios'

const requestInterceptor = async () => {

   return axios.interceptors.request.use((config) => {
    let userCredentials = getFromStorage('user')
       if(!config.url?.includes('ipapi.co/json')){
           config.headers = {
               'Content-Type':"application/json",
               'Authorization':userCredentials?`Bearer ${userCredentials?.refresh_token}`:``,
               "x-api-key": userCredentials? userCredentials?.x_api_key : '',
           }
           store.dispatch('showLoader', "spinner")
           store.dispatch('showLoader', "skeleton")
            if(config.url?.includes('/app')){
            store.dispatch('showLoader', "spinner")
        }
        }
   
        return config
    }, (error)=> {
        store.dispatch('hideLoader')
        Promise.reject(error)
    })
    

}

export default requestInterceptor