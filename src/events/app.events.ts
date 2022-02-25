/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

export const AppActionEvents = {

    user: {
        login: "appLogin",
        logout: "appLogout",
        add: "appRegister",
        edit: "editUser",
        retrieveSingle: "getSingleUser",
        retrieve: "getUsers",
        delete: "deleteUser",
    },
    location:{
        retrieve: "getLocation",
    },

    product: {
        add: "addProduct",
        edit: "editProduct",
        retrieveSingle: "getSingleProduct",
        retrieve: "getProducts",
        delete: "deleteProduct",
    },
    stock: {
        add: "addStock",
        edit: "editStock",
        retrieveSingle: "getSingleStock",
        retrieve: "getStocks",
        delete: "deleteStock",
    },
    invoice: {
        add: "addInvoice",
        edit: "editInvoice",
        retrieveSingle: "getSingleInvoice",
        retrieve: "getInvoices",
        delete: "deleteInvoice",
    },
    personnel: {
        add: "addPersonnel",
        edit: "editPersonnel",
        retrieve: "getPersonnels",
        retrieveSingle: "getSinglePersonnel",
        delete: "deletePersonnel",
    },
    client: {
        add: "addClient",
        edit: "editClient",
        retrieve: "getClients",
        retrieveSingle: "getSingleClient",
        delete: "deleteClient",
    },
    credit: {
        add: "addCredit",
        edit: "editCredit",
        retrieve: "getCredits",
        retrieveSingle: "getSingleCredit",
        delete: "deleteCredit",
    },
    inventory: {
        add: "addInventory",
        edit: "editInventory",
        retrieve: "getInventories",
        retrieveSingle: "getSingleInventory",
        delete: "deleteInventory",
    },
    service: {
        add: "addService",
        edit: "editService",
        retrieve: "getServices",
        retrieveSingle: "getSingleService",
        delete: "deleteService",
    },
    sale: {
        add: "addSale",
        edit: "editSale",
        retrieve: "getSales",
        retrieveSingle: "getSingleSale",
        delete: "deleteSale",
    },
    role: {
        add: "addRole",
        edit: "editRole",
        retrieve: "getRoles",
        retrieveSingle: "getSingleRole",
        delete: "deleteRole",
    },
    group: {
        add: "addGroup",
        edit: "editGroup",
        retrieve: "getGroups",
        retrieveSingle: "getSingleGroup",
        delete: "deleteGroup",
    },
    notification: {
        sendSMS: "sendSmsNotification",
        sendEmail: "sendEmailNotification",
        sendPush: "sendPushNotification"
    },
    category: {
        add: "addCategory",
        edit: "editCategory",
        retrieve: "getCategories",
        retrieveSingle: "getSingleCategory",
        delete: "deleteCategory",
    },
    preference: {
        add: "addPreference",
        edit: "editPreference",
        retrieve: "getPreferences",
        retrieveSingle: "getSinglePreference",
        delete: "deletePreference",
    },
    permission: {
        retrieve: "getPermissions",
        retrieveSingle: "getSinglePermission",
    },
    
    API_BASE_URL: "http://ec2-3-144-142-214.us-east-2.compute.amazonaws.com/api/v1/app",
    LOCATION_BASE_URL:'https://ipapi.co/json'
}