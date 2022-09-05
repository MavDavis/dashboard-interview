<template>
    <div class="container relative top-20 mb-24" v-if="$store.state.postLoaded">
      <div class="flex flex-col w-full min-h-screen h-fit px-5 ">
  
  <img :src="item.blogUrl" alt="" class=" mb-4 rounded-lg object-fit">
  <h1 v-html="item.blogTitle" class="font-bold text-xl tracking-wider text-dark ">
  </h1>
  <div class="container my-4" v-html="item.blogHtml"></div>
      </div>
    </div>
  </template>

<script>
export default {
    data(){
        return{
            item:''
        }
    },
//{this.$route.params.id}
mounted(){
   let foundItem = this.$store.state.blogPost.find(item => item.blogId == this.$route.params.id)
this.item = (foundItem);
}
}
</script>

<style>

</style>