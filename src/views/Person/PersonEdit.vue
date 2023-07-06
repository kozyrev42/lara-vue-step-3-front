<template>
    <div class="w-50 create">
        <div class="mb-2">
            <input v-model="name" type="text" class="form-control" id="name" placeholder="name">
        </div>
        <div class="mb-2">
            <input v-model="job" type="text" class="form-control" id="job" placeholder="job">
        </div>
        <div class="mb-2">
            <input v-model="age" type="number" class="form-control" id="age" placeholder="age">
        </div>
        <div class="mb-2">
            <button @click="updatePerson" class="btn btn-primary">редактировать</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonEdit",

    data() {
        return {
            name: '',
            job: '',
            age: null
        }
    },

    mounted() {
        this.getPersonById();
    },

    methods: {
        getPersonById() {
            this.$axios
                .get(`${process.env.VUE_APP_BASE_URL}/api/person/get/${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data);
                    this.name = response.data.name;
                    this.job = response.data.job;
                    this.age = response.data.age;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        // обновление персоны
        updatePerson() {
            this.$axios
                .patch(`${process.env.VUE_APP_BASE_URL}/api/person/update`, {
                    id: this.$route.params.id,
                    name: this.name,
                    job: this.job,
                    age: this.age
                })
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: 'persons.index' }); // редирект на страницу со списком персон
                })
                .catch(error => {
                    console.log(error);
                    this.$router.push({ name: 'persons.index' });
                });
        },
    },

}
</script>

<style scoped>

</style>