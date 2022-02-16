
import store from '@/store'
import { getFromStorage } from '@/utils/storage.util'
import axios from 'axios'
const userCredentials = getFromStorage('user')

const requestInterceptor = async () => {
try {
    let isUser = store.getters.getUsers

    if(!isUser) {
        isUser = userCredentials
    }

   return axios.interceptors.request.use((config) => {
       if(!config.url?.includes('ipapi.co/json')){
           config.headers = {
               'Content-Type':"application/json",
               'Authorization':!userCredentials?'':"Bearer "+userCredentials['refresh_token'] ?? "",
               "x-api-key":!userCredentials?'':userCredentials['x_api_key'],
           }
       }
       store.dispatch('showLoader')
        
        return config
    })
    
} catch (error) {
    store.dispatch('showLoader')
    Promise.reject(error)
}
}

export default requestInterceptor