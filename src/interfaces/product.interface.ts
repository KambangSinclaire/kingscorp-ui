/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

export interface Product{
    name:string;
    description:string;
    quatity:string;
    unitPrice:string;
    categoryId?:string;
    hasBonus?:boolean;
    createdAt?:string;
    updateAt?:string;
    createdBy:string;
}
