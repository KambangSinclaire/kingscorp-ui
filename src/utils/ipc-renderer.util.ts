/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { ResponseStatus } from "@/constants/response-codes";
import { AppActionEvents } from "@/events/app.events";
import { ResponsePayload } from "@/interfaces/response.interface";
import ElectronUI from "./electron.util";
import axios from "axios";
import requestInterceptor from '../interceptors/request.interceptor'

// const ipcResponseHandler = (actionEvent: string, handler: any) => {
//     ElectronUI.ipcRenderer.on(actionEvent + "-response", handler);
//     console.log("fetching...");
//     return;
// }

const ipcRequestTrigger = async (actionEvent: string, payload?: any) => {

    const isOnline = navigator.onLine;

    if (!navigator.onLine) {
        console.log("offline running...", isOnline);
        // setToStorage()
        const response: ResponsePayload = await ElectronUI.ipcRenderer.invoke(actionEvent, payload);
        console.log("response data...", response);
        if (response.status === ResponseStatus.OK) {
            return response.data;
        }
        return []
    }

    let method = "GET";
    let endpoint;
    if (actionEvent.toLocaleLowerCase().includes('location')) {
        endpoint = `${AppActionEvents.LOCATION_BASE_URL}`
    } else {
        endpoint = `${AppActionEvents.API_BASE_URL}/${actionEvent}`;
    }
    if (actionEvent.toLocaleLowerCase().includes("edit")) method = "PUT";
    if (actionEvent.toLocaleLowerCase().includes("add")) method = "POST";
    if (actionEvent.toLocaleLowerCase().includes("app")) method = "POST";
    if (actionEvent.toLocaleLowerCase().includes("delete")) method = "DELETE";

    try {
        return await webAPICaller(endpoint, method, payload)
    } catch (error) {
        console.log("error ",error);
        return []
    }
}

const webAPICaller = async (endpoint: string, method: string, payload: any) => {
    let apiResponse: ResponsePayload | any;

    if (method == "POST") {
        await requestInterceptor()
        apiResponse = await axios.post(endpoint, payload, {})
        // console.log(apiResponse, actionEvent);
        
    }

    if (method == "GET") {
        await requestInterceptor()
        apiResponse = await axios.get(endpoint, {})
    }

    if (method == "PUT") {
        await requestInterceptor()
        apiResponse = await axios.put(endpoint, payload, {})
    }

    if (method == "DELETE") {
        await requestInterceptor()
        apiResponse = await axios.delete(endpoint, {})
    }

    return apiResponse.data;
}

const IPC = { ipcRequestTrigger }

export default IPC;
