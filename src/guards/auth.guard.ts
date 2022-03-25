import store from "@/store";
import { StorageUtilis } from "@/utils/storage.util";

let storageUtil = new StorageUtilis();
let x_api_key = storageUtil.getFromStorageAndDecode('x_api_key');
let refresh_token = storageUtil.getFromStorageAndDecode('refresh_token');

 class AuthGuard {
    checkIfLogged(to:any, from:any, next:any){    
        if( !x_api_key || !refresh_token ) {
            store.dispatch('getToast', {
                type:"ERROR" ,
                message:"Not Authenticated",
                status: 0,
            }
        )
        
        return next('/login') 
    }
        store.dispatch('showLoader', "spinner")
        return next()
    }
}

const authGuard = new AuthGuard()
export default authGuard