<template>
  <header class="mb-5 bg-white" style="z-index:1000;">
    <nav
      class="flex w-full justify-between items-center px-5 shadow py-4 fixed  bg-white"
      v-if="!mobileScreen"
    >
      <div class="logo flex w-1/2">
        <router-link
          class="text-2xl font-semibold tracking-wider uppercase"
          :to="{ name: 'Home' }"
          >Mavs-Blogs</router-link
        >
      </div>
      <div class="flex w-1/2">
        <div class="flex w-full items-center justify-end">
          <router-link class="button font-semibold hover:text-green" :to="{ name: 'Home' }"
            >Home</router-link
          >
          <router-link
            class="button font-semibold ml-6 hover:text-green"
            :to="{ name: 'Home' }"
            >Create Post</router-link
          >
          <router-link
            class="button font-semibold mx-6 hover:text-green"
            :to="{ name: 'Home' }"
            >Blog</router-link
          >
          <router-link class="button font-semibold hover:text-green" :to="{ name: 'Home' }"
            >login/SignUp</router-link
          >
        </div>
      </div>
    </nav>
    <nav
      v-if="mobileScreen"
      class="flex w-full justify-between items-center px-5 shadow py-4 fixed bg-white"
    >
      <div class="logo flex w-1/2">
        <router-link
          class="text-2xl font-semibold tracking-wider"
          :to="{ name: 'Home' }"
          >Mavs-Blogs</router-link
        >
      </div>
      <div class="flex w-1/2">
        <div
          class="flex w-full justify-end items-center button"
          @click="toggleMobileScreenOpened"
        >
          <i v-if="!mobileScreenOpened" class="fas fa-bars"></i>

          <i v-if="mobileScreenOpened" class="fas fa-times"></i>
        </div>
        <transition name="mobile-nav">
          <div
            v-if="mobileScreenOpened"
            style="height: 100vh"
            class="
             mobileNav
              bg-black
              h-full
              flex flex-col
              text-white
              left-0
              top-0
              fixed
              shadow
              px-4
            "
          >
            <router-link
              class="button my-6 hover:text-green"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
            <router-link class="button hover:text-green" :to="{ name: 'Home' }"
              >Create Post</router-link
            >
            <router-link
              class="button my-6 hover:text-green"
              :to="{ name: 'Home' }"
              >Blog</router-link
            >
            <router-link class="button hover:text-green" :to="{ name: 'Home' }"
              >login/SignUp</router-link
            >
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileScreen: null,
      mobileScreenOpened: null,
      screenwidth: null,
    };
  },
  mounted(){
    if (window.innerWidth < 850) {
        this.mobileScreen = true;

      } else {
        this.mobileScreen = false;
      }}
,
  created() {
    window.addEventListener("resize", this.checkForScreenWidth);
  },
  methods: {
    toggleMobileScreenOpened() {
      this.mobileScreenOpened = !this.mobileScreenOpened;
    },
    checkForScreenWidth() {
      if (window.innerWidth < 850) {
        this.mobileScreen = true;

      } else {
        this.mobileScreen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

  .mobileNav{
    min-width:250px;
  }
  *{
    transition: all 1s ease;
  }
  .mobile-nav-enter{
    transform: translateX(0);
  }
  .mobile-nav-enter-to{
    transform: translateX(100px);
  }
  .mobile-nav-leave-to{
    transform: translateX(-250px);
  }
</style>
