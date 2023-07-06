<template>
    <table class="table table-success table-striped">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">job</th>
            <th scope="col">age</th>
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
                    <td><button @click="deletePerson(person.id)" class="btn btn-danger">Удалить</button></td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "PersonIndex",

    data() {
        return {
            persons: null,
        }
    },

    mounted() {
        this.getPersone();
    },

    methods: {
        getPersone() {
            this.$axios
                .get(`${process.env.VUE_APP_BASE_URL}/api/person/get`)
                .then(data => {
                    this.persons = data.data
                })

                .catch(error => {
                    console.log(error)
                })
        },

        deletePerson(id) {
            this.$axios
                .delete(`${process.env.VUE_APP_BASE_URL}/api/person/delete/${id}`)
                .then(response => {
                    console.log(response.data);

                    this.getPersone()
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
}
</script>

<style scoped>

</style>