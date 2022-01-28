export interface Personel {
    name:string;
    first_name:string;
    last_name:string;
    role:string;
    group:string | number;
    email:string;
    password:string;
    last_login_time:string | Date;
    last_login_ip:string;
    login_type:any;
    profile_image:string;
    description:string;
}