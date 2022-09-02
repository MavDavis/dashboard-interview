<template>
  <header>
    <nav class="container">
      <div class="logo">
        <router-link class="header" :to="{ name: 'Home' }"
          >Mavs-Store</router-link
        >
      </div>
      <div class="links">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'About' }"
          >Create Post</router-link
        >
        <router-link class="link" :to="{ name: 'Home' }">Blog</router-link>
        <router-link class="link" :to="{ name: 'Home' }"
          >login/SignUp</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>    