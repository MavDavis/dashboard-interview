<template>
  <div class="relative max-w-sm rounded transform overflow-hidden shadow-lg hover:rotate-2"
>
    <div class="absolute w-full h-3/4 px-4 flex items-start justify-end z-10  opacity-0  hover:opacity-100 ">
      <div
        class="bg-white  hover:text-white mr-2 hover:cursor-pointer p-2 mt-2 hover:bg-dark rounded-full flex justify-center items-center"
      >
        <i class="fas fa-pen "></i>
      </div>
      <div
        class="bg-white hover:cursor-pointer  hover:text-white p-2 mt-2 hover:bg-dark rounded-full flex justify-center items-center"
      >
        <i class="fas fa-trash "></i>
      </div>
    </div>
    <div
      class="max-w-sm rounded transform overflow-hidden shadow-lg hover:rotate-2"
    >
      <img
        class="w-full"
        :src="require(`../assets/blogCards/${posts.blogCoverPhoto}.jpg`)"
      />
      <div class="px-4 py-4">
        <h2 class="flex font-bold text-xl mb-2">{{ posts.blogTitle }}</h2>
        <h4 class="flex">Posted on: {{ posts.blogDate }}</h4>
      </div>
      <div class="flex justify-start px-4 pt-4 pb-2 w-50 ">
        <router-link class="text-dark font-semibold hover:tracking-wider" to="#"
          >View Post<i class="fas fa-arrow-right text-sm ml-2 text-dark"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["posts"],
};
</script>

<style></style>
