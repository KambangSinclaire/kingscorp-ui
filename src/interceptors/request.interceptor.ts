
import store from '@/store'
import { getFromStorage, StorageUtilis } from '@/utils/storage.util'
import axios from 'axios'
let storageUtils = new StorageUtilis()
const requestInterceptor = async () => {

   return axios.interceptors.request.use((config) => {
    
    let refresh_token = storageUtils.getFromStorageAndDecode('refresh_token')
    let x_api_key = storageUtils.getFromStorageAndDecode('x_api_key')
       if(!config.url?.includes('ipapi.co/json')){
           config.headers = {
               'Content-Type':"application/json",
               'Authorization':refresh_token?`Bearer ${refresh_token}`:``,
               "x-api-key": x_api_key? x_api_key : '',
           }
           
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