<template>
  <div class="home">
    <Blog :post="welcomeScreen" v-if="!user" />
    <div class="mb-5">
      <Blog v-for="posts in sampleBlogPost" :key="posts.title" :post="posts" />
    </div>
    <div class="blogCards flex flex-col justify-center items-center relative text-center">
      <h3 class="font-semibold text-xl tracking-wider mb-5">
        View Recent Post
      </h3>
      <div class="mt-5 px-4 gap-y-16 gap-x-7 grid  place-items-center grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2">
        <BlogCard
          v-for="(post, index) in sampleBlogCards"
          :key="index"
          :posts="post"
        />
      </div>
    </div>
    <div v-if="!user" class="my-5 w-full  px-5  bg-white text-dark flex justify-center flex-col items-center sm:items-start md:items-start lg:items-start">
      <h2 class="font-semibold text-2xl tracking-wider relative text-center sm:text-start">
        Never miss a post. Register for your free account today!
      </h2>
      <router-link to="#" class=" flex items-center justify-center md:w-1/4 relative bg-dark text-white rounded-full py-2 px-3 my-5 hover:tracking-wider   ">Register for Mavs-Blogs <i class="fas fa-arrow-right text-sm ml-2"></i></router-link>
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";
import BlogCard from "@/components/BlogCard.vue";
export default {
  name: "Home",
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "weekly blog articles with all things programming including  HTML, CSS Javascript and more. Register today to never miss a post.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filter title",
          blogHtml: "This is a filter blog post title",
          photo: "beautiful-stories",
          rowReverse: true,
        },
        {
          title: "This is a Filter title",
          blogHtml: "This is a filter blog post title",
          photo: "designed-for-everyone",
        },
      ],
     
    };
  },
  computed:{
sampleBlogCards(){
  return this.$store.state.sampleBlogCards
},
user() {
    return this.$store.state.user
  },
  },
  components: { Blog, BlogCard },
};
</script>
<style lang="scss" scoped>
.blogCards {
  min-height: 100vh;
}
</style> 