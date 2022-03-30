/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

import { AppActionEvents } from "@/events/app.events";
import IPC from "@/utils/ipc-renderer.util";

const state = {
    preferences: <any>[]
};
const mutations = {
    setPrefrence(state: any, payload: any) {
        return state.preferences.push(payload);
    },
    setPrefrences(state: any, payload: any | Iterable<any>) {
        return state.preferences = [...payload.data];
    },
    deletPrefrence(state: any, payload: any) {
        return state.preferences.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addPrefrence(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.add, payload).then((data) => {
            ctx.commit('setPrefrence', data);
        });
    },
    getPrefrences(ctx: any,payload:any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.retrieve,payload).then((data) => {
            ctx.commit('setPrefrences', data);
        });
    },
    editPrefrence(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.edit+`/${payload.id}`, payload?.data).then((data) => {
            ctx.commit('setPrefrence', data);
        });
    },
    deletePrefrence(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.delete+`/${payload}`, payload).then((data) => {
            ctx.commit('deletPrefrence', data);
        });
    },
    getSinglePrefrence(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.preference.retrieveSingle+`/${payload.id}`, payload).then((data) => {
            ctx.commit('setPrefrence', data);
        });
    }
};
const getters = {
    getAllPrefrences(state: any) {
        return state.preferences;
    }
};

export default { state, getters, mutations, actions };