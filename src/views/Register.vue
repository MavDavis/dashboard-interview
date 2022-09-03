<template>
    <div class=" login flex justify-center sm:justify-between items-center h-screen ">
        <div class=" w-full md:w-1/2">
  <p class="text-sm text-dark text-center">
Already  have an account?
    <router-link
      class="text-lg ml-1 font-semibold underline hover:tracking-wider"
      :to="{ name: 'Login' }"
      >Login</router-link
    >
  </p>
  <div class="w-full">
    <h1 class="font-semibold tracking-wider text-xl text-center">Sign up for <span class="text-2xl font-bold">Mavs-Blogs</span></h1>
    <form class="bg-white px-5 pt-6 pb-8 mb-4">
        <div class="mb-4 relative ">
        <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
        <input
          class="
            bg-gray-100
            appearance-none
            border
            rounded
            w-full
            py-2
            px-8
            text-dark
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="firstname"
          type="text"
          required
          placeholder="Firstname"
        />
      </div>
      <div class="mb-4 relative ">
        <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
        <input
          class="
            bg-gray-100
            appearance-none
            border
            rounded
            w-full
            py-2
            px-8
            text-dark
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="lastname"
          type="text"
          required
          placeholder="Lastname"
        />
      </div>
      <div class="mb-4 relative ">
        <i class="fas fa-user absolute top-3 left-3 text-dark z-10"></i>
        <input
          class="
            bg-gray-100
            appearance-none
            border
            rounded
            relative
            w-full
            py-2
            px-8
            text-dark
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="Username"
          type="text"
          required
          placeholder="Username"
        />
      </div>
      <div class="mb-4 relative ">
        <i class="fas fa-envelope absolute top-3 left-3 text-dark z-10"></i>        <input
          class="
            bg-gray-100
            appearance-none
            border
            rounded
            w-full
            py-2
            px-8
            text-dark
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="email"
          type="email"
          required
          placeholder="Email"
        />
      </div>
      <div class="mb-4 relative ">
        <i class="fas fa-lock absolute top-3 left-3 text-dark z-10"></i>        <input
          class="
            appearance-none
            bg-gray-100
            rounded
            w-full
            py-2
            px-8
            text-dark
            mb-3
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="flex flex-col items-center justify-between">
        <router-link
          :to="{ name: 'ForgotPassword' }"
          class="
            mb-5
            inline-block
            align-baseline
            font-bold
            text-sm text-dark
            hover:tracking-wider
          "
        >
          Forgot Password?
        </router-link>
        <button
          class="
            bg-dark
            hover:tracking-wider
            text-white
            font-bold
            py-2
            px-4
            rounded-full
            focus:outline-none focus:shadow-outline
          "
          type="button"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
  </div>
  <div class="hidden sm:block w-1/2 bg-img">
    <div class=" w-full h-full relative"></div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            firstname:'',
            lastname:'',
            Username:'',
        }
    }
};
</script>

<style lang="scss" scoped>
   .bg-img{
        background: url('../assets/background.png');
      background-size: cover;
background-position: center;    

      height: 100%;
      width: 100%;
      opacity: 1;
      z-index: 100;
    
    }
</style>