
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
        config.headers = {
            'Content-Type':"application/json",
            'Authorization':!userCredentials?'':"Bearer "+userCredentials['refresh_token'],
            "x-api-key":!userCredentials?'':userCredentials['x_api_key'],
        }
        return config
    })
    
} catch (error) {
    Promise.reject(error)
}
}

export default requestInterceptor