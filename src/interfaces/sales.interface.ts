export interface Sales {
        name:string;
        amount:number;
        received:number;
        status:string;
        discount:number;
        has_discount:boolean;
        items:Array<any>;
        client:number;
        description:string;
        created_by:string;
}