
import axios from 'axios'

const requestInterceptor = async () => {
try {
   return axios.interceptors.request.use((config) => {
        config.headers = {
            'Content-Type':"application/json",
            'Authorization':"Bearer token",
            "x-api-key":"",
        }
        return config
    })
    
} catch (error) {
    Promise.reject(error)
}
}

export default requestInterceptor