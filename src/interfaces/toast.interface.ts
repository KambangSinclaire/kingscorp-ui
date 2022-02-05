export interface ToastInterface{
    type:string;
    message:string;
    status: number;
    others?:Array<any> | Object | string;
}