import { getFromStorage } from "@/utils/storage.util";
import { Router } from "vue-router";

 class AuthGuard {
    checkIfLogged(to:any, from:any, next:any){
        const userCredentials = getFromStorage('user')
        if(!userCredentials || !userCredentials['x_api_key'] || !userCredentials['refresh_token']) {
            alert('not authenticated')
        return next('/login') 
        }
        return next()
    }
}

const authGuard = new AuthGuard()
export default authGuard