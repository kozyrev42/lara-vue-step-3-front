<template>
    <div class="post">
        <h5>PostComponent +</h5>
    </div>
</template>


<style scoped>
.post {
    background-color: #e361bc;
    height: 100px;
    margin: 20px;
}
</style>


<script>
//import { BASE_URL } from '@/main';
export default {
    name: "PostComponent",

    // mounted() - это хук жизненного цикла, который вызывается после того, как компонент был вставлен в DOM
    mounted() {
        this.getUsers();
        this.testApi();
    },

    methods: {
        getUsers() {
            this.$axios
                .get(`${process.env.VUE_APP_BASE_URL}/api/users`)
                .then(data => {
                    console.log(data.data)
                })

                .catch(error => {
                    console.log(error)
                })
        },

        testApi() {
            this.$axios
                .get(`${process.env.VUE_APP_BASE_URL}/api/test`)
                .then(response => {
                    console.log(response)
                })

                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
