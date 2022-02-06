
import { AppToastEvents } from '@/components/reusable/toast/toast';
import axios from 'axios'


const responseInterceptor = async () => {
try {
 
    return axios.interceptors.response.use((res) => {
        console.log(res.status);
        if(res.status < 400){
            new AppToastEvents().setToastEvent(res.status, res.statusText, "INFO")
        }
        return res;
    })

} catch (error) {
    Promise.reject(error)
}
}

export default responseInterceptor
