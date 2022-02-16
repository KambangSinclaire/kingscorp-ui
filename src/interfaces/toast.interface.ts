export interface ToastInterface{
    type:"ERROR" | "SUCCESS" | "WARNING" | "NOTIFICATION" | "QUICK_ALERT" | "INFO";
    message:string;
    status: number;
    others?:Array<any> | Object | string;
}