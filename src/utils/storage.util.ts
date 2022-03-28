
export const setToStorage = (payload:any, storeName:string) => {
    !payload && false;
    localStorage.setItem(storeName, btoa(JSON.stringify(payload)))
    return
}


export const getFromStorage = (storeName:string) => {
    let element:any = '';
    if(!localStorage.getItem(storeName) || !localStorage.length){
        return null
    }
    else{
        try {
           element = localStorage.getItem(storeName)
           
           console.log(element, 'element');
           element = atob(element as any)
           element = element && JSON.parse(element)
           return element
        } catch (error) {
            console.log(error);
            return false
        }
    }
}


export class StorageUtilis {
    setToStorageAndEncode(payload:string | object, storeName:string){
        if(payload === null || payload === undefined ) return false;
        try {
            if(typeof payload == 'string') localStorage.setItem(storeName, btoa(JSON.stringify(payload.trim())));
            if(typeof payload == 'object') {
                for (const [key, value] of Object.entries(payload)) {
                    if(value !== undefined && value !== null)
                        localStorage.setItem(key, btoa(JSON.stringify(value)))
                }
            }
            return true;
        } catch (error) {
            console.log(error);
        }

    }

    getFromStorageAndDecode(storeName:string){

        if(storeName === null || storeName === undefined ) return false;
        
        let element:any;

        try {
            element = localStorage.getItem(storeName);
            
            if(element){
                element = atob(element as string)
                element = JSON.parse(element)
                return element;
            }
            
        } catch (error) {
            console.log(error);
        }
    }
}