<template>
  <div class="flex flex-wrap mt-auto bg-dark text-white py-10 px-4 justify-between">
    <div class="w-full md:w-1/2 lg:w-1/2 flex flex-wrap justify-between">
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
        <div class="flex flex-col">
          <router-link
            class="
              lg:text-2xl
              md:text-xl
              text-lg
              font-semibold
              tracking-wider
              text-center
              md:text-start
              lg:text-left
              uppercase
              hover:text-green
            "
            :to="{ name: 'Home' }"
            >Mavs-Blogs</router-link
          >
          <div class="links mt-3">
            <div
              class="
                flex
                items-center
                justify-center
                md:justify-start
                lg:justify-start
              "
            >
              <button class="mr-6">
                <i class="fas fa-instagram text-xs  hover:text-green"></i>
              </button>
              <button class="mr-6">
                <i class="fas fa-instagram text-xs  hover:text-green"></i>
              </button>
              <button class="mr-6">
                <i class="fas fa-github text-xs  hover:text-green"></i>
              </button>
              <button class=""><i class="fa fa-linkedin text-xs  hover:text-green"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/2 px-2 mb-4 flex flex-col ">
        <div class="w-full md:w-1/3 lg:w-1/3 text-center md:text-start lg:text-start mb-3">
          <router-link class="uppercase hover:text-green " to="#">Home</router-link>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/3 text-center md:text-start lg:text-start mb-3">
          <router-link class="uppercase hover:text-green" to="#">Blog</router-link>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/3 text-center md:text-start lg:text-start">
          <router-link class="uppercase hover:text-green" to="#">Login/Register</router-link>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/2 flex flex-wrap justify-center md:justify-end lg:justify-end">
      <p>Copyright All rights reserved 2022 </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>