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
    Stocks: <any>[]
};
const mutations = {
    setStock(state: any, payload: any) {
        return state.Stocks.push(payload);
    },
    setStocks(state: any, payload: any | Iterable<any>) {
        return state.Stocks = [...payload?.data];
    },
    deleteStock(state: any, payload: any) {
        return state.Stocks.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addStock(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.stock.add, payload).then((data) => {
            ctx.commit('setStock', data);
        });
    },
    getStocks(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.stock.retrieve).then((data) => {
            ctx.commit('setStocks', data);
        });
    },
    editStock(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.stock.edit, payload).then((data) => {
            ctx.commit('setStock', data);
        });
    },
    deleteStock(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.stock.delete, payload).then((data) => {
            ctx.commit('deleteStock', data);
        });
    },
    getSingleStock(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.stock.retrieveSingle, payload).then((data) => {
            ctx.commit('setStock', data);
        });
    }
};
const getters = {
    getStocks(state: any) {
        return state.Stocks;
    }
};

export default { state, getters, mutations, actions };