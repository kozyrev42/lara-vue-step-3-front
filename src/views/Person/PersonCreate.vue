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
            <button :disabled="isDisabled" @click="createPerson" class="btn btn-primary">добавить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonCreate",

    data() {
        return {

            name: '',
            job: '',
            age: null
        }
    },

    // вычисляемое свойство, которое возвращает true, если хотя бы одно из полей пустое
    computed: {
        isDisabled() {
            return this.name === '' || this.job === '' || this.age === null || this.age === '';
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
                    this.$router.push({ name: 'persons.index' }); // редирект на страницу со списком персон
                })
                .catch(error => {
                    console.log(error);
                    this.$router.push({ name: 'persons.index' });
                });
        },
    }
}
</script>

<style scoped>
.create {
    margin: 30px;
}
</style>