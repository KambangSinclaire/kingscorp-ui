export interface Credits {
    amount:number;
    expiry_date:string | Date;
    description:string;
    products:Array<any>;
    client:number;
}