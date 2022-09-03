<template>
  <div class="home">
    <Blog :post="welcomeScreen" />
    <div class="mb-5">
      <Blog v-for="posts in sampleBlogPost" :key="posts.title" :post="posts" />
    </div>
    <div class="blogCards relative text-center">
      <h3 class="font-semibold text-xl tracking-wider mt-5">
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
      sampleBlogCards: [
        {
          blogTitle: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "September 3, 2022",
        },
        {
          blogTitle: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "September 3, 2022",
        },
        {
          blogTitle: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "September 3, 2022",
        },
        {
          blogTitle: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "September 3, 2022",
        },
      ],
    };
  },
  components: { Blog, BlogCard },
};
</script>
<style lang="scss" scoped>
.blogCards {
  margin: 4rem 0;
}
</style>