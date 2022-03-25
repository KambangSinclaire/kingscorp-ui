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
import router from "@/router";
import store from "@/store";
import IPC from "@/utils/ipc-renderer.util";
import { StorageUtilis } from "@/utils/storage.util";

let storageUtil = new StorageUtilis();

const state = {
    users: <any>[]
};
const mutations = {
    setUser(state: any, payload: any) {
        return state.users.push(payload);
    },
    setUsers(state: any, payload: any | Iterable<any>) {
        return state.users = [...payload?.data];
    },
    deleteUser(state: any, payload: any) {
        return state.users.filter((data: any) => data.id !== payload.id);
    },
};

const actions = {
    appRegister(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.add, payload).then((data) => {
            if(!data || data?.length !== 0){
                storageUtil.setToStorageAndEncode(data?.data, 'user');
                ctx.commit('setUser', data);
                router.push('/explore/dashboard');
            }
        });
    },
    getUsers(ctx: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.retrieve).then((data) => {
            ctx.commit('setUsers', data);
        });
    },
    editUser(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.edit, payload).then((data) => {
            ctx.commit('setUser', data);
        });
    },
    deleteUser(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.delete, payload).then((data) => {
            ctx.commit('deleteUser', data);
        });
    },
    getSingleUser(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.retrieveSingle, payload).then((data) => {
            ctx.commit('setUser', data);
        });
    },
    appLogin(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.login, payload).then((data) => {
            if(!data || data?.length !== 0){
                storageUtil.setToStorageAndEncode(data?.data, 'user');
                ctx.commit('setUser', data);
                router.push('/explore/dashboard');
            }
        }).catch(error => console.log(error)
        );
    },
    appLogout(ctx: any, payload: any) {
        IPC.ipcRequestTrigger(AppActionEvents.user.logout, payload).then((data) => {
            ctx.commit('setUser', data);
        });
    }
};
const getters = {
    getUsers(state: any) {
        return state.users;
    }
};

export default { state, getters, mutations, actions };
