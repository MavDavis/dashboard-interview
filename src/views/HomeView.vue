<template>
  <div class="home">
<Blog :post='welcomeScreen'/>
<Blog v-for=" posts in sampleBlogPost" :key="posts.title" :post="posts"/>

</div>
</template>

<script>
import Blog from '@/components/Blog.vue';

export default {
    name: "Home",
    data(){
      return{
welcomeScreen:{
  title:'Welcome!',
  blogPost:'weekly blog articles with all things programming including  HTML, CSS Javascript and more. Register today to never miss a post.',
  welcomeScreen:true,
  photo:'coding'
},
sampleBlogPost:[
  {
    title:'This is a Filter title',
    blogHtml:'This is a filter blog post title',
    photo:'beautiful-stories'
  },
  {
    title:'This is a Filter title',
    blogHtml:'This is a filter blog post title',
    photo:'designed-for-everyone'
  },
]

      }
    },
    components: { Blog }
}
</script>
