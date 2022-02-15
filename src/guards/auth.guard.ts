import { getFromStorage } from "@/utils/storage.util";

 class AuthGuard {
    checkIfLogged(to:any, from:any, next:any){
        const userCredentials = getFromStorage('user')        
        if(!userCredentials  || !userCredentials['refresh_token']) {
            alert('not authenticated')
        return next('/login') 
        }
        return next()
    }
}

const authGuard = new AuthGuard()
export default authGuard