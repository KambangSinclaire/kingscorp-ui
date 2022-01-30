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
    personnels: <any>[]
}
const mutations = {
    setPersonnel(state: any, payload: any) {
        return state.personnels.push(payload);
    },
    setPersonnels(state: any, payload: any | Iterable<any>) {
        return state.personnels = [...payload?.data];
    },
    deletePersonnel(state: any, payload: any) {
        return state.personnels.filter((personnel: any) => personnel.id !== payload.id);
    }
}
const getters = {
    getPersonnels(state: any) {
        return state.personnels;
    }
}
const actions = {
    editPersonnel(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.edit+`/${payload.id}`, payload).then((result) => {
            ctx.commit('setPersonnel', result);
        })
    },
    addPersonnel(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.add, payload).then((result) => {
            ctx.commit('setPersonnel', result);
        })
    },
    getPersonnels(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.retrieve, payload).then((result) => {
            ctx.commit('setPersonnels', result);
        })
    },
    deletePersonnel(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.personnel.delete+`/${payload.id}`, payload).then((result) => {
            ctx.commit('setPersonnel', result);
        })
    },
}

export default { state, getters, mutations, actions };