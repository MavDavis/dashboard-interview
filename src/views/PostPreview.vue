<template>
  <div class="container relative top-20 mb-24">
    <div class="flex flex-col w-full min-h-screen h-fit px-5 ">

<img :src="$store.state.blogPhotoFileUrl" alt="" class=" mb-4 rounded-lg object-fit">
<h1 class="font-bold text-xl tracking-wider text-dark ">
    {{$store.state.blogTitle}}
</h1>
<div class="container my-4" v-html="$store.state.blogHtml"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>