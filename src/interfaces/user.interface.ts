/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

export interface User{
    username: string;
    email: string;
    password: string;
    phone_number:string;
    last_login_location: string | Object;
    last_login: Date | string | number;
    sign_in_type?: string;
    last_login_Ip?: string;
    first_name?: string;
    last_name?: string;
    about?: string;
    gender?: string;
    role?: any;
    status?: string;
    app_user_Id?: any;
    x_api_key?: string;
    refresh_token?: string;
    category_Id?: string;
}

export interface LoginUser {
    username: string;
    password: string;
    last_login_location: string | Object;
    last_login: Date | string | number;
}