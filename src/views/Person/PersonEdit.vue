<template>
    <div class="w-50 create">
        <div class="mb-2">
            <input v-model="person.name" type="text" class="form-control" id="name" placeholder="name">
        </div>
        <div class="mb-2">
            <input v-model="person.job" type="text" class="form-control" id="job" placeholder="job">
        </div>
        <div class="mb-2">
            <input v-model="person.age" type="number" class="form-control" id="age" placeholder="age">
        </div>
        <div class="mb-2">
            <button @click="$store.dispatch('updatePerson', person)" class="btn btn-primary">редактировать</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PersonEdit",

    mounted() {
        this.$store.dispatch('getPersonById', this.$route.params.id);
    },

    // вычисляемое свойство, персона из стора
    computed: {
        person() {
            return this.$store.getters.personById;
        }
    },

    methods: {
        // методы перенесены в src\store\modules\person.js
    },

}
</script>

<style scoped>

</style>