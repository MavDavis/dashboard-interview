<template>
    <div class=" w-full bordered rounded-md min-h-screen mt-6 h-fit">
  <Navbar/>
  <User />
    </div>
  </template>
  
  <script>
    import Navbar from '../Navbar.vue';
    import User from './User.vue';
  export default {
    name: "",
    data() {
      return {
      };
    },
    created() {
    
    },
    components:{Navbar, User, },
    mounted() {
  
  
    },
    methods: {
  
    },
    watch: {
  
    },
  };
  </script>
  <style scoped>
.bordered{
 background: #FFFFFF;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
border-radius: 8px;
overflow-x: auto;
}</style>