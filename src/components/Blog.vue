<template>
  <div class="w-full flex relative top-10 flex-col justify-between " :class="[
        post.rowReverse ? 'md-flex-row-reverse lg:flex-row-reverse sm:flex-row-reverse' : 'md:flex-row lg:flex-row sm:flex-row',
      ]">
    <div
      class="w-full md:w-1/2 lg:w-1/2 justify-center  flex-col flex px-5 "
      :class="[
        post.welcomeScreen ? 'text-white bg-dark min-h-screen' : 'text-dark bg-white py-40',
      ]"
    >
      <h2 v-if="post.welcomeScreen" class="uppercase font-semibold text-xl mb-4 tracking-wider">
        {{ post.title }}
      </h2>
      <h2 v-else class="uppercase font-semibold text-xl mb-4 tracking-wider">
        {{ post.title }}
      </h2>
      <p v-if="post.welcomeScreen" class="w-full sm:w-70 md:w-50 lg:w-50">
        {{ post.blogPost }}
      </p>
      <p v-else>
        {{ post.blogHtml }}
      </p>
      <router-link class="mt-2 hover:tracking-widest" v-if="post.welcomeScreen" to="#"
        >Login/Register<i class="fas fa-arrow-right text-white text-xs"></i
      ></router-link>
      <router-link class="mt-2 hover:tracking-widest"  v-else to="#"
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
@media (max-width:576px) {
    .text-div{
        min-width: 100vh !important;
    }
}
</style>
