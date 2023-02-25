<template>
    <div class="w-full">
    <div class=" bb flex w-full relative justify-between p-2 px-4">
  <div class="flex items-center w-fit">
    <Filter/>
    <Searchbar/>
  </div>
  <button class="button2 w-fit text-white font-medium text-lg flex items-center justify-center" @click="$store.commit('payDues')">PAY DUES</button>
    </div>
<div class="flex w-full relative items-center px-4 py-2 bb bg-purple-lighter border-b border-purple-dim ">
    <div class="w-50 relative flex items-center">
<div class="w-20 relative">
    <input type="checkbox" name="" id="" disabled>
</div>
<div class="w-40">
    <p>Name</p>
</div>
<div class="w-40">
   <p> user status</p>
</div>

</div>
<div class="w-50 relative flex items-center">
    <div class="w-50">
      <p>  payment status</p>
    </div>
    <div class="w-30"><p>amount</p></div>
    
    <div class="w-20 relative flex items-center justify-end">
        <img src="../assets/More.png" alt="">
    </div>
    </div>
</div>
</div>
  </template>
  
  <script>
   import Searchbar from './Body/Searchbar.vue';
   import Filter from './Body/Filter.vue'; 
  export default {
    name: "",
    data() {
      return {
      };
    },
    created() {
    
    },
    components:{
        Searchbar,Filter
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

.bb{
border-bottom: 1px solid    #D9D5EC;
min-width:1100px;
} 
.button2{
    height: 39px;
    width: 99px;
  background: #6D5BD0;
    border-radius: 6px;
     
}  

.w-50 p, .w-40 p, .w-30 p{
width: 150px;
height: 15px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #6E6893;

}
</style>