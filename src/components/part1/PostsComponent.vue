<template>
    <div class="posts">
        <h1>PostsComponent +++</h1>

        <button @click="sayHello">sayHello</button>
        <PostComponent :myTestObject="dataInPosts"/>
        <CreatePersonComponent ref="createPersonComponent"/>
        <ListPersonComponent ref="listPersonComponent"/>
    </div>
</template>


<style scoped>
.posts {
    background-color: #a3ed57;
    height: auto;
    margin: 20px;
    padding: 30px;
}
</style>


<script>
import PostComponent from "./PostComponent";
import CreatePersonComponent from "./CreatePersonComponent";
import ListPersonComponent from "./ListPersonComponent";

export default {
    name: "PostsComponent",

    mounted() {
        console.log('Component mounted.');
        this.$refs.listPersonComponent.listPersonLog();
    },

    components: {
        ListPersonComponent,
        PostComponent,
        CreatePersonComponent
    },

    data() {
        return {
            dataInPosts: 'данные из PostsComponent'
        }
    },

    methods: {
        sayHello() {
            console.log('Привет из PostsComponent')
        },

        parentMethodlog() {
            console.log('Привет из PostsComponent, parentMethodlog')
        }
    }
}
</script>
