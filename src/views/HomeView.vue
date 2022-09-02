<template>
  <div class="home">
<Blog/>
<Blog/>

</div>
</template>

<script>
import Blog from '@/components/Blog.vue';

export default {
    name: "Home",
    data(){
      return{

      }
    },
    components: { Blog }
}
</script>
