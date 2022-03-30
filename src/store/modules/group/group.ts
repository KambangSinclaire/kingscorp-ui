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
    Groups: <any>[]
};
const mutations = {
    setGroup(state: any, payload: any) {
        return state.Groups.push(payload);
    },
    setGroups(state: any, payload: any | Iterable<any>) {
        return state.Groups = [...payload?.data];
    },
    deleteGroup(state: any, payload: any) {
        return state.Groups.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addGroup(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.group.add, payload).then((data) => {
            ctx.commit('setGroup', data);
        });
    },
    getGroups(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.group.retrieve).then((data) => {
            ctx.commit('setGroups', data);
        });
    },
    editGroup(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.group.edit, payload?.data).then((data) => {
            ctx.commit('setGroup', data);
        });
    },
    deleteGroup(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.group.delete, payload).then((data) => {
            ctx.commit('deleteGroup', data);
        });
    },
    getSingleGroup(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.group.retrieveSingle, payload).then((data) => {
            ctx.commit('setGroup', data);
        });
    }
};
const getters = {
    getGroups(state: any) {
        return state.Groups;
    }
};

export default { state, getters, mutations, actions };