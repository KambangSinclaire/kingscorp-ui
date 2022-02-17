import store from "@/store";
import { getFromStorage } from "@/utils/storage.util";

 class AuthGuard {
    checkIfLogged(to:any, from:any, next:any){
        const userCredentials = getFromStorage('user')        
        if(!userCredentials  || !userCredentials['x_api_key'] || !userCredentials['refresh_token'] ) {
            
            store.dispatch('getToast', {
                type:"ERROR" ,
                message:"Not Authenticated",
                status: 0,
                
        })
        
        return next('/login') 
    }
        store.dispatch('showLoader', "spinner")
        return next()
    }
}

const authGuard = new AuthGuard()
export default authGuard