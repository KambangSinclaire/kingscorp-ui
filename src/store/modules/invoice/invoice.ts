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
    Invoices: <any>[]
};
const mutations = {
    setInvoice(state: any, payload: any) {
        return state.Invoices.push(payload);
    },
    setInvoices(state: any, payload: any | Iterable<any>) {
        return state.Invoices = [...payload?.data];
    },
    deleteInvoice(state: any, payload: any) {
        return state.Invoices.filter((data: any) => data.id !== payload.id);
    },
};
const actions = {
    addInvoice(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.invoice.add, payload).then((data) => {
            ctx.commit('setInvoice', data);
        });
    },
    getInvoices(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.invoice.retrieve).then((data) => {
            ctx.commit('setInvoices', data);
        });
    },
    editInvoice(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.invoice.edit, payload).then((data) => {
            ctx.commit('setInvoice', data);
        });
    },
    deleteInvoice(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.invoice.delete, payload).then((data) => {
            ctx.commit('deleteInvoice', data);
        });
    },
    getSingleInvoice(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.invoice.retrieveSingle, payload).then((data) => {
            ctx.commit('setInvoice', data);
        });
    }
};
const getters = {
    getInvoices(state: any) {
        return state.Invoices;
    }
};

export default { state, getters, mutations, actions };