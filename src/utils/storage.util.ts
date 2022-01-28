
export const setToStorage = (payload:any, storeName:string) => {
    localStorage.setItem(storeName, btoa(JSON.stringify(payload)))
    return
}

export const getFromStorage = (storeName:string) => {
    let element:any;
    if(!localStorage.getItem(storeName) || !localStorage.length){
        return null
    }
    else{
        try {
           element = localStorage.getItem(storeName)
           element = atob(JSON.parse(element))
           return element
        } catch (error) {
            return false
        }
    }
}