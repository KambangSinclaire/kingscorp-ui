export interface Invoice{
    total_amount:number,
    expected_date:string | Date,
    expiry_date:string | Date,
    client:number,
    description:string,
    items:Array<number>
}