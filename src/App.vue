<template>
    <div id="app">
        <router-link to="/persons" class="btn btn-outline-success mb-2">Список пользователей</router-link><br>
        <router-link to="/persons/create" class="btn btn-outline-primary mb-2">Создать пользователя</router-link>
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
