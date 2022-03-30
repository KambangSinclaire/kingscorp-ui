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
    Inventory: <any>[]
};
const mutations = {
    setInventory(state: any, payload: any) {
        return state.Inventory.push(payload);
    },
    setInventories(state: any, payload: any | Iterable<any>) {
        return state.Inventory = [...payload?.data];
    },
    deleteInventory(state: any, payload: any) {
        return state.Inventory.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addInventory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.inventory.add, payload).then((data) => {
            ctx.commit('setInventory', data);
        });
    },
    getInventories(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.inventory.retrieve).then((data) => {
            ctx.commit('setInventories', data);
        });
    },
    editInventory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.inventory.edit+`/${payload}`, payload?.data).then((data) => {
            ctx.commit('setInventory', data);
        });
    },
    deleteInventory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.inventory.delete+`/${payload}`, payload).then((data) => {
            ctx.commit('deleteInventory', data);
        });
    },
    getSingleInventory(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.inventory.retrieveSingle+`/${payload.id}`, payload).then((data) => {
            ctx.commit('setInventory', data);
        });
    }
};
const getters = {
    getInventories(state: any) {
        return state.Inventory;
    }
};

export default { state, getters, mutations, actions };