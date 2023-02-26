<template>
  <div class="app-wrapper app py-12 sm:px-16 px-4" @click="this.$store.commit('closeModal')">
<Header/>
<Body/>
  </div>
</template>

<script>
  
  import  Header from "./Components/Header.vue";
  import Body from './Components/Body/index.vue'
export default {
  name: "app",
  data() {
    return {
    };
  },
  components:{Header, Body},
  created() {
  
  },
  mounted() {


  },
  methods: {

  },
  watch: {

  },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  transition: 0.4s ease;
}
::-webkit-scrollbar {
  width: 9px;
  height: 9px;
  background: #ffffff;
}
::-webkit-scrollbar-thumb {
  background-color: #D9D5EC;
  border-radius: 40px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
.app {
  background: #E5E5E5;
  min-height: 100vh;
overflow: hidden;
}
.app-wrapper {
  scroll-behavior: smooth;
}

.router-link-active{
  color:#1DB954;
}
</style>
