<template>
  <div class="header flex w-full relative">
    <div class="w-full relative flex flex-col">
      <h1 class="table-header">table-heading</h1>
      <div class="flex w-full justify-between  give-border">
        <div class="buttons flex items-center">
          <button v-for="button in $store.state.buttons" @click="toggleActive(button.name)" class="button py-2 hover:border-b   border-black h-full" :class ="[button.active? 'active' :'']">{{ button.name }}</button>
         
        </div>
        <div class="flex sm:flex-row flex-col text items-center py-2">
          <p>Total payable amount:</p>
          <h3 class="font-extrabold mx-2 text-xl">{{$store.state.sum}}</h3>
          <p class="text-xl">USD</p>
        </div>
      </div>
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
    this.$store.commit('getSum')
  },
  mounted() {},
  methods: {
    toggleActive(name){
      this.$store.commit('toggleActive', name)
     this.$store.commit('filterByButtonName', name)
    }
  },
  watch: {},
};
</script>

<style scoped>
.table-header {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #6e6893;
}
.give-border {
  border-bottom: 2px #c6c2de solid;
}
.text p, button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.text , button{
  color: #6e6893 !important;
}
button:hover{
    color:black ;
}
.active{
  border-bottom: 1px solid black;
}
button:nth-last-child(2), button:nth-last-child(4){
  margin-left: 0.75rem;
  margin-right: 0.75rem;}
</style>
