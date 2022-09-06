<template>
    <div class="container relative top-20 mb-24" v-if="$store.state.postLoaded">
      <div class="flex flex-col w-full min-h-screen h-fit px-5 ">
  
  <img :src="item.blogUrl" alt="" class=" mb-4 rounded-lg object-fit">
  <h1 v-html="item.blogTitle" class="font-bold text-xl tracking-wider text-dark ">
  </h1>
  <div class="container my-4" v-html="item.blogHtml"></div>
  <div class="user my-2">
    <h2 class="tracking-wider text-dark font-semibold text-lg">
        Posted by: <span class="text-green text-sm">{{item.blogUsername}}</span>

    </h2>
    <h2 v-if="t" class="tracking-wider text-dark font-semibold text-lg">
        Posted on: <span class="text-dark text-sm">{{date}}</span>
        
    </h2>
  </div>
      </div>
    </div>
  </template>

<script>
export default {
    data(){
        return{
            item:'',
            t:false
        }
    },
 mounted(){
   let foundItem = this.$store.state.blogPost.find(item => item.blogId == this.$route.params.id)
this.item = (foundItem);
this.t = true
},computed:{
    date(){
     
        let time = this.item.blogDate.seconds * 1000
        return new Date(time);
    }
}
}
</script>

<style>

</style>