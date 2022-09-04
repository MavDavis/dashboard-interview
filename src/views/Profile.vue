<template>
    <Modal v-if="modal"  modalMssg="Changes were made" @closeModal="closeModal()"/>
  <div class="profile  relative flex w-full bg-white  my-5 h-screen sm:h-fit  sm:top-10  items-center justify-center">
    <div class="px-5 flex flex-col justify-center sm:mb-10 items-center w-full md:w-1/2 sm:w-3/4 ">
        <h1 class="text-2xl text-dark tracking-wider">
            Account Setting
        </h1>
<div class="bg-gray-200 rounded p-4 mt-4">
    <div class="flex items-center justify-center flex-col">
        <div
            class="
              bg-dark
              text-white
              p-1
              mb-2
              rounded-full
              w-fit
              h-fit
              cursor-pointer
            "
          >
            <h1 class="text-white font-semibold text-2xl">
              {{ $store.state.UserInitials }}
            </h1>
          </div>
          <div
            class="
              bg-dark
              text-white
              px-2
              py-1
              mb-2
              rounded
              w-fit
              h-fit
              cursor-pointer
            "
          >
            <h1 class="text-white font-semibold text-sm ">
                <i class="fas fa-user mr-2 text-white text-sm"></i>Admin
            </h1>
          </div>
    </div>
    <div class="flex w-full flex-col items-center justify-center">
        <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="firstname">Firstname</label>  
            <input
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="firstname"
              type="text"
              required
            
            />
          </div>
          <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="lastname">Lastname</label>
            <input
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="lastname"
              type="text"
              required
            />
          </div>
          <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="username">Username</label>
            <input
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                relative
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="username"
              type="text"
              required
            />
          </div>
          <div class="mb-4 relative">
            <label class="font-light text-sm text-dark tracking-wider" for="email">Email</label>
            <input
            disabled
              class="
                bg-gray-100
                appearance-none
                border
                rounded
                w-full
                py-2
                px-2
                text-dark
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="email"
              type="email"
              required
            />
          </div>
          <button @click="changeUserDetails()" class="mb-4 relative text-white rounded-full hover:tracking-wider hover:bg-black px-2 py-1 bg-dark text-xs">
            Save Chanmges
          </button>
    </div>
</div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
export default {
    data() {
        return {
         
            modal:false,
        };
    },
    methods:{
        changeUserDetails(){
            this.$store.commit('changeUserDetails')
            this.modal=true
        },
        closeModal(){
            
            window.location.reload();

        }
    },
    components: { Modal },
    computed:{
        firstname:{
            get(){
                return this.$store.state.userFirstname
            },
            set(payload){
                this.$store.commit('changeFirstname', payload)
            }
        },
        lastname:{
            get(){
                return this.$store.state.userLastname
            },
            set(payload){
                this.$store.commit('changeLastname', payload)
            }
        }
        ,
        username:{
            get(){
                return this.$store.state.userUsername
            },
            set(payload){
                this.$store.commit('changeUsername', payload)
            }
        },
        email(){
            return this.$store.state.userEmail
        },
    }
}
</script>

<style>

</style>