<template>
  <div class="header flex w-full relative">
    <div class="w-full relative flex flex-col">
      <h1 class="table-header">table-heading</h1>
      <div class="flex w-full justify-between py-2 give-border">
        <div class="buttons flex items-center">
          <button class="button">All</button>
          <button class="button mx-3">Paid</button>
          <button class="button">Unpaid</button>
          <button class="button mx-3">Overdue</button>
        </div>
        <div class="flex sm:flex-row flex-col text items-center">
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
    return {};
  },
  created() {
    this.$store.commit('getSum')
  },
  mounted() {},
  methods: {},
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
</style>
