<template>
    <h1>
        Home...
    </h1>
    <p>{{userStore.userData}}</p>
    <p>{{userStore.userMayuscula}}</p>
    <button @click="userStore.registerUser('config@vuejs.com')">Register</button>
</template>

<script setup>
    import { useUserStore } from "../stores/user";
    const userStore = useUserStore();
</script>