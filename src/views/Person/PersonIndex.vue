<template>
    <table class="table table-secondary table-striped">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Имя</th>
            <th scope="col">Профессия</th>
            <th scope="col">Возраст</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
            <template v-for="person in persons" :key="person.id">
                <tr>
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.job }}</td>
                    <td>{{ person.age }}</td>
                    <td>
                        <router-link :to="`/persons/${person.id}/edit`" class="btn btn-primary">Редактировать</router-link>
                    </td>
                    <td><button @click="$store.dispatch('deletePerson', person.id)" class="btn btn-danger">Удалить</button></td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "PersonIndex",

    computed: {
        persons() {
            return this.$store.getters.persons;
        }
    },

    mounted() {
        this.$store.dispatch('getPersons');

    },

    data() {
        return {
            // свойство persons перенесено в src\store\modules\person.js
        }
    },

    methods: {
        // методы перенесены в src\store\modules\person.js
    },
}
</script>

<style scoped>

</style>