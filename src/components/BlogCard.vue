<template>
    <div class="max-w-sm rounded transform overflow-hidden shadow-lg hover:rotate-2 ">
        <img class="w-full" :src= "require(`../assets/blogCards/${posts.blogCoverPhoto}.jpg`)" />
        <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2">{{posts.blogTitle}}</h2>
            <h4>Posted on: {{posts.blogDate}}</h4>
        </div>
        <div class="px-auto pt-4 pb-2 w-50">
            <router-link class="text-dark font-semibold inline-flex hover:tracking-wider" to="#">View Post </router-link>
    </div></div>
</template>

<script>
export default {
    name: "BlogCard",
    props: ["posts"],
};
</script>

<style>
</style>
