<template>
  <Loading v-if="modal" />
  <header class="mb-5 bg-white" style="z-index: 1000">
    <nav
      class="
        z-50
        flex
        w-full
        justify-between
        items-center
        px-5
        shadow
        py-4
        fixed
        bg-white
      "
      v-if="!mobileScreen"
    >
      <div class="logo flex w-1/2">
        <a class="text-2xl font-semibold tracking-wider uppercase" href="#"
          >Mavs-Blogs</a
        >
      </div>
      <div class="flex w-1/2">
        <div class="flex w-3/4 items-center justify-end">
          <router-link
            class="button font-semibold hover:text-green"
            :to="{ name: 'Home' }"
            >Home</router-link
          >
          <router-link
          v-if="user"
            class="button font-semibold ml-6 hover:text-green"
            :to="{ name: 'CreateBlog' }"
            >Create Post</router-link
          >
          <router-link
            class="button font-semibold mx-6 hover:text-green"
            :to="{ name: 'BlogView' }"
            >Blog</router-link
          >
          <router-link
            v-if="!user"
            class="button font-semibold hover:text-green"
            :to="{ name: 'Login' }"
            >login/SignUp</router-link
          >
        </div>
        <div v-if="user" class="relative flex justify-end items-center w-1/4">
          <div
            @click="showOptions = !showOptions"
            class="
              bg-dark
              text-white
              p-1
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
            v-if="showOptions"
            class="
              absolute
              top-10
              right-1
              bg-dark
              w-96
              h-fit
              flex flex-col
              items-center
              justify-center
            "
          >
            <div class="flex items-center border-y p-3 w-full border-white">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  p-1
                  bg-white
                  rounded-full
                "
              >
                <h1
                  class="
                    text-dark
                    font-semibold
                    text-2xl
                    flex
                    justify-center
                    items-center
                  "
                >
                  {{ $store.state.UserInitials }}
                </h1>
              </div>
              <div
                class="info flex flex-col justify-start items-start ml-5 w-3/4"
              >
                <h1
                  class="
                    text-sm
                    font-semibold
                    text-white
                    flex
                    justify-start
                    items-center
                  "
                >
                  {{ $store.state.userFirstname }}
                  {{ $store.state.userLastname }}
                </h1>
                <p class="sm text-white flex w-full items-center justify-start">
                  <i class="mr-2 fas fa-envelope text-sm text-white"></i
                  >{{ $store.state.userEmail }}
                </p>
                <p class="sm text-white flex w-full items-center justify-start">
                  <i class="mr-2 fas fa-user text-sm text-white"></i
                  >{{ $store.state.userUsername }}
                </p>
              </div>
            </div>
            <div class="flex p-3 flex-col justify-center items-start w-full">
              <div
                @click="showOptions = !showOptions"
                class="option text-white mb-2 w-full"
              >
                <router-link to="/profile">
                  <i class="fas text-whit fa-user mr-2"></i>profile
                </router-link>
              </div>
           
              <div class="option text-white mb-2 w-full">
                <button @click="logOut()" to="/">
                  <i class="fas text-white mr-2 fa"></i>SignOUt
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav
      v-if="mobileScreen"
      class="
        flex
        w-full
        justify-between
        items-center
        px-5
        shadow
        py-4
        fixed
        bg-white
        z-50
      "
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
          <i v-if="!mobileScreenOpened" class="text-2xl fas fa-bars"></i>

          <i v-if="mobileScreenOpened" class="text-2xl fas fa-times"></i>
        </div>
        <transition name="mobile-nav">
          <div
            v-if="mobileScreenOpened"
            class="
              mobileNav
              bg-dark

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
            <div @click="toggleMobileScreenOpened" class="my-7 ">
              <router-link
                class="button my-6 hover:text-green text-2xl font-semibold tracking-wider"
                :to="{ name: 'Home' }"
                >Home</router-link
              >
            </div>
            <div @click="toggleMobileScreenOpened" class=" ">
              <router-link
              v-if="user"

                class="button hover:text-green text-2xl font-semibold tracking-wider"
                :to="{ name: 'CreateBlog' }"
                >Create Post</router-link
              >
            </div>
            <div @click="toggleMobileScreenOpened" class="my-7 ">
              <router-link
                class="button my-6 hover:text-green text-2xl font-semibold tracking-wider"
                :to="{ name: 'BlogView' }"
                >Blog</router-link
              >
            </div>
            <div @click="toggleMobileScreenOpened" class="my-10 ">
              <router-link
                v-if="!user"
                class="button hover:text-green text-2xl font-semibold tracking-wider"
                :to="{ name: 'Login' }"
                >login/SignUp</router-link
              >
            </div>
            <div v-if="user" class="relative flex flex-col justify-start items-start w-full">
         
          <div
            class="
              
              bg-dark
              w-full
              h-fit
              flex flex-col
              items-center
              justify-start
            "
          >
            <div class="mb-5 flex flex-col items-start justify-start   w-full ">
              <div
                class="
                  flex
                  items-center
                  justify-center
                  p-1
                  mb-3
                  bg-white
                  rounded-full
                "
              >
                <h1
                  class="
                    text-dark
                    font-semibold
                    text-2xl
                    flex
                    justify-center
                    items-center
                  "
                >
                  {{ $store.state.UserInitials }}
                </h1>
              </div>
              <div
                class="info flex flex-col justify-start items-start "
              >
                <h1
                  class="
                    text-sm
                    font-semibold
                    text-white
                    flex
                    justify-start
                    items-start
                    mb-3
                  "
                >
                  {{ $store.state.userFirstname }}
                  {{ $store.state.userLastname }}
                </h1>
                <p class="text-sm text-white mb-3 flex max-w-full relative items-start justify-start">
                  <i class="mr-2 fas fa-envelope text-sm text-white"></i
                  >{{ $store.state.userEmail }}
                </p>
                <p class="text-sm text-white flex w-full mb-3 items-start justify-start">
                  <i class="mr-2 fas fa-user text-sm text-white"></i
                  >{{ $store.state.userUsername }}
                </p>
              </div>
            </div>
            <div class="flex  flex-col justify-start items-start w-full">
              <div
                class="option text-white mb-2 w-full"
              >
                <router-link to="/profile">
                  <i class="fas text-whit fa-user mr-2"></i>profile
                </router-link>
              </div>
            
              <div class="option text-white mb-2 w-full">
                <button @click="logOut()" to="/">
                  <i class="fas text-white mr-2 fa-user"></i>SignOUt
                </button>
              </div>
            </div>
          </div>
        </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
import { signOut } from "firebase/auth";
import Loading from "./Loading.vue";
import { firebaseAuth } from "../firebase/firebaseInit";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      mobileScreen: null,
      mobileScreenOpened: null,
      screenwidth: null,
      showOptions: false,
      modal: false,
    };
  },
  mounted() {
    if (window.innerWidth < 850) {
      this.mobileScreen = true;
    } else {
      this.mobileScreen = false;
    }
  },
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
    logOut() {
      this.modal = true;
      signOut(firebaseAuth)
        .then(() => {
          window.location.reload();
          this.modal = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: { Loading },
};
</script>

<style lang="scss" scoped>
.mobileNav {
  width: 250px;
  overflow-x: hidden;
}
* {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(0px);
}
.mobile-nav-enter-to {
  transform: translateX(0px);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
