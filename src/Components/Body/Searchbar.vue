<template>
      <div class="w-full  flex items-center justify-center">
        <div class="border rounded overflow-hidden flex bg">
          <button class="flex items-center justify-center px-4 ">
            <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
          </button>
          <input type="text" class="px-4 py-2 relative focus:bg-transparent focus:outline-none focus:ring-transparent" placeholder="Search user by name, email or date">
        </div>
      </div>   
  </template>
  
  <script>
    
  export default {
    name: "",
    data() {
      return {
      };
    },
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
  <style scoped>
.bg{
  width: 392px;
height: 40px;
background: #E5E5E5;

}

input{
  background: #E5E5E5;
width: calc(100% - 1rem);
}
</style>