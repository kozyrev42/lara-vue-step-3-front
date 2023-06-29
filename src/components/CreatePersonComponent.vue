<template>
    <div class="w-25 create">
        <div class="md-3">
            <input v-model="name" type="text" class="form-control" id="name" placeholder="name">
        </div>
        <div class="md-3">
            <input v-model="job" type="text" class="form-control" id="job" placeholder="job">
        </div>
        <div class="md-3">
            <input v-model="age" type="number" class="form-control" id="age" placeholder="age">
        </div>
        <div class="md-3">
            <button @click="createPerson" class="btn btn-primary">добавить</button>
        </div>
    </div>


</template>

<script>
export default {
    name: "CreatePersonComponent",
    components: {},

    data() {
        return {
            name: '',
            job: '',
            age: ''
        }

    },

    methods: {
        createPerson() {
            this.$axios
                .post(`${process.env.VUE_APP_BASE_URL}/api/person/create`, {
                    name: this.name,
                    job: this.job,
                    age: this.age
                })
                .then(response => {
                    console.log(response.data);
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