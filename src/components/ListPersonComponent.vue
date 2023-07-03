<template>
    <table class="table table-success table-striped">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">job</th>
            <th scope="col">age</th>
            <th scope="col">edit</th>
            <th scope="col">delete</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="person in persons" :key="person.id">
            <tr :class="isEditPerson(person.id) ? 'd-none' : ''">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.job }}</td>
                <td>{{ person.age }}</td>
                <td><button @click="changeEditPersonId(person.id, person.name, person.job, person.age)" class="btn btn-primary">edit</button></td>
                <td><button @click="deletePerson(person.id)" class="btn btn-danger">delete</button></td>
            </tr>

            <tr :class="isEditPerson(person.id) ? '' : 'd-none'"> <!-- реактивное отслеживание, на подстановку класс -->
                <th scope="row">{{ person.id }}</th>
                <td><input v-model="name" type="text" class="form-control" ></td>
                <td><input v-model="job" type="text" class="form-control" ></td>
                <td><input v-model="age" type="number" class="form-control" ></td>
                <td><button @click="updatePerson(person.id)" class="btn btn-success">сохранить</button></td>
            </tr>

        </template>
        </tbody>
    </table>

</template>

<script>
export default {
    name: "ListPersonComponent",
    components: {},

    mounted() {
        this.getPersone()
    },

    data() {
        return {
            persons: null,
            idEditPerson: null,
            name: '',
            job: '',
            age: null
        }
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

        // назначаем значения для редактирования
        changeEditPersonId(id, name, job, age) {
            this.idEditPerson = id,
            this.name = name,
            this.job = job,
            this.age = age
        },

        // метод который будет следить за тем, показывать ли форму редактирования или нет
        isEditPerson(id) {
            return this.idEditPerson === id
        },

        updatePerson(id) {
            this.idEditPerson = null
            this.$axios
                .patch(`${process.env.VUE_APP_BASE_URL}/api/person/update`, {
                    // на бекенд летит объект с данными, из текущего состояния
                    id: id,
                    name: this.name,
                    job: this.job,
                    age: this.age
                })
                .then(response => {
                    console.log(response.data);

                    // обновляем список
                    this.getPersone()
                })
                .catch(error => {
                    console.log(error);
                });
        },

        deletePerson(id) {
            this.$axios
                .delete(`${process.env.VUE_APP_BASE_URL}/api/person/delete/${id}`)
                .then(response => {
                    console.log(response.data);

                    // обновляем список
                    this.getPersone()
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<style scoped>
.create {
    margin: 30px;
}
</style>