<template>
  <div class="w-full flex py-4 sm:py-11 relative top-10 mb-11 px-5 flex-col sm:justify-center justify-start" :class="[
        post.rowReverse ? ' sm:flex-row-reverse' : 'sm:flex-row',
      ]">
    <div
      class="w-full md:w-1/2 flex-col flex  "
      :class="[
        post.welcomeScreen ? 'text-white bg-dark min-h-screen' : 'text-dark bg-white sm:py-20 py-10',
      ]"
    >
      <h2 v-if="post.welcomeScreen" class="uppercase font-semibold text-xl mb-4 tracking-wider" v-html="post.blogTitle">
      </h2>
      <h2 v-else class="uppercase font-semibold text-xl mb-4 tracking-wider" v-html="post.blogTitle">
      </h2>
      <p v-if="post.welcomeScreen" class="w-full sm:w-3/4 md:w-1/2 flex" v-html="post.blogHtml">
       
      </p>
      <p v-else v-html="post.blogHtml" class="w-full sm:w-3/4 flex">
      </p>
      <router-link class="mt-2 hover:tracking-widest" v-if="post.welcomeScreen" to="/login"
        >Login/Register<i class="fas fa-arrow-right text-white text-xs"></i
      ></router-link>
      <router-link class="mt-2 hover:tracking-widest"  v-else :to="`/viewBlog/` + post.blogId"
        >View The Post<i class="fas fa-arrow-right text-dark text-xs"></i
      ></router-link>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/2">
      <img
        class="object-fill h-full w-full ..."
        :src="post.blogUrl"
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
