<template>
    <div id="app">
        <router-link to="/persons" class="btn btn-success mb-2">PersonsList </router-link><br>
        <router-link to="/persons/create" class="btn btn-success mb-2">Create</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {
        // ничего не импортируем, так как используем роутинг
    }
}
</script>

<style>
    #app {
        margin: 40px;
    }
</style>
