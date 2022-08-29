import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userData: "setup@vite.com",
    }),
    getters: {
        userMayuscula(state) {
            return state.userData.toUpperCase();
        },
    },
    actions: {
        registerUser(name) {
            this.userData = name;
        },
    },
});