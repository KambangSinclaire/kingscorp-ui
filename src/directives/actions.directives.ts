import { getFromStorage } from "@/utils/storage.util";

export class ActionDirective {
    toogleViews(data:any){
        let userPermissions:any[] = getFromStorage('user')?.permissions
        return userPermissions.includes(data)
    }
}