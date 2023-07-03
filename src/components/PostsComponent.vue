<template>
    <div class="posts">
        <h1>PostsComponent +++</h1>

        <button @click="sayHello">sayHello</button>
        <PostComponent/>
        <CreatePersonComponent/>
        <ListPersonComponent/>
    </div>
</template>


<style scoped>
.posts {
    background-color: #a3ed57;
    height: auto;
    margin: 40px;
}
</style>


<script>
import PostComponent from "./PostComponent";
import CreatePersonComponent from "./CreatePersonComponent";
import ListPersonComponent from "@/components/ListPersonComponent";

export default {
    name: "PostsComponent",

    mounted() {
        console.log('Component mounted.')
    },

    components: {
        ListPersonComponent,
        PostComponent,
        CreatePersonComponent
    },

    data() {
        return {}
    },

    methods: {
        sayHello() {
            console.log('Привет из PostsComponent')
        }
    }
}
</script>
