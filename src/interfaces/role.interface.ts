export interface Role {
    name:string;
    permissions:Array<any>;
    description:string;
    group:string | number;
}