<template>
  <Loading v-if="loading" />
  <div
    class="
      relative
      max-w-sm
      rounded
      transform
      overflow-hidden
      shadow-lg
      hover:rotate-2
    "
  >
    <div
      class="absolute w-full h-3/4 px-4 flex items-start justify-end z-10"
      v-if="posts.blogEditable"
    >
        <router-link :to="`/editBlog/` + posts.blogId"
        class="
          bg-white
          hover:text-white
          mr-2
          text-dark
          hover:cursor-pointer
          p-2
          mt-2
          hover:bg-dark
          rounded-full
          flex
          justify-center
          items-center
        "
      >
        <i class="fas fa-pen"></i>
      </router-link>
      <div
        @click="deletePost(posts.blogId)"
        class="
          bg-white
          hover:cursor-pointer hover:text-white
          p-2
          mt-2
          hover:bg-dark
          rounded-full
          flex
          justify-center
          items-center
        "
      >
   <i class="fas fa-trash"></i>
      </div>
    </div>
    <div
      class="
        max-w-sm
        w-fit
        rounded
        transform
        overflow-hidden
        shadow-lg
        hover:rotate-2
      "
    >
      <div class="max-w-full max-h-36 w-full flex">
        <img class="object-fit flex w-80" :src="posts.blogUrl" />
      </div>
      <div class="px-4 py-4">
        <h2 class="flex font-bold text-xl mb-2">{{ posts.blogTitle }}</h2>
        <h4 class="flex">Posted by: {{ posts.blogUsername }}</h4>
      </div>
      <div class="flex justify-start px-4 pt-4 pb-2 w-50">
        <router-link
          class="text-dark font-semibold hover:tracking-wider"
          :to="`/viewBlog/` + posts.blogId"
          >View Post<i class="fas fa-arrow-right text-sm ml-2 text-dark"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading.vue";

export default {
  name: "BlogCard",
  data() {
    return {
      loading: false,
    };
  },
  props: ["posts"],
  methods: {
    deletePost(payload) {
      this.loading = true;

      this.$store.commit("deletePost", payload)
        this.loading = false;
    },
  },
  components: { Loading },
};
</script>

<style></style>
