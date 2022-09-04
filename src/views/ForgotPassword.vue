<template>
    <Modal v-if="modal" modalMssg="You will receive an email if this account exists" @closeModal="closeModal()"/>
    <Loading v-if="loading"/>
    <div class=" login flex justify-center sm:justify-between items-center h-screen ">
        <div class=" w-full md:w-1/2">
  
  <div class="w-full">
    <h1 class="px-5 font-semibold tracking-wider text-xl text-center">Reset Password</h1>
    <p class="text-sm text-dark text-center px-5">
 Forgot your password? Enter your email to reset it
</p>
    <form class="bg-white px-5 pt-6 pb-8 mb-4">
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
     
      <div class="flex flex-col items-center justify-between">
  
        <button
          class="
            bg-dark
            hover:tracking-wider
            text-white
            font-bold
            py-2
            px-4
            uppercase
            rounded-full
            focus:outline-none focus:shadow-outline
          "
          type="button"
        >
Reset        </button>
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
import Modal from '@/components/Modal.vue';
import Loading from '../components/Loading.vue';

export default {
    data() {
        return {
            email: "",
            modal:false,
            loading:false
        };
    },
    components: { Modal,Loading },
    methods:{
        closeModal(){
            this.modal = false
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
      z-index: 1;
    
    }
</style>