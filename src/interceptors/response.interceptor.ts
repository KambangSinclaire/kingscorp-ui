
import axios from 'axios'

axios.interceptors.response.use(async (config) => {
    try {
        console.log(config.headers);
        
    } catch (error) {
        Promise.reject(error)
    }
})
