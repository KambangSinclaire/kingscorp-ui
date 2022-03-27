import { StorageUtilis } from "@/utils/storage.util";

let userPermissions = new StorageUtilis().getFromStorageAndDecode('permissions') ?? [];
export class ActionDirective {
    toogleViews(el:any, binding:any){    
        if(typeof binding.value === "string"){
            if(!userPermissions.find((a:any)=>a.includes(binding.value))){
                el.style.display = 'none'
            }
        }  
        if(typeof binding.value === 'object'){
            let p = binding.value.some((a:any) => userPermissions.includes(a))
            if(!p){
                el.style.display = 'none'
            }
        // console.log(p, binding.value);
        
        }
        
    }

}