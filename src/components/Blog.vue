<template>
  <div class="w-full flex relative top-10 flex-wrap justify-between ">
    <div
      class="w-full md:w-1/2 lg:w-1/2 justify-center  flex-col flex px-5 h-auto"
      :class="[
        post.welcomeScreen ? 'text-white bg-dark' : 'text-dark bg-white',
      ]"
    >
      <h2 v-if="post.welcomeScreen" class="uppercase font-semibold text-lg tracking-wider">
        {{ post.title }}
      </h2>
      <h2 v-else class="uppercase font-semibold text-lg tracking-wider">
        {{ post.title }}
      </h2>
      <p v-if="post.welcomeScreen">
        {{ post.blogPost }}
      </p>
      <p v-else>
        {{ post.blogHtml }}
      </p>
      <router-link v-if="post.welcomeScreen" to="#"
        >Login/Register<i class="fas fa-arrow-right text-white text-xs"></i
      ></router-link>
      <router-link v-else to="#"
        >View The Post<i class="fas fa-arrow-right text-dark text-xs"></i
      ></router-link>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/2">
      <img
        class="object-fill h-full w-full ..."
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  name: "Blog",
};
</script>

<style>
.white {
  color: #fff;
}
</style>
