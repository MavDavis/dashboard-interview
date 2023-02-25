<template>
  <div class="">
    <div class="select relative">
      <button
        class="relative z-10 block w-full h-full overflow-hidden focus:outline-none leading-loose align-middle rounded cursor-pointer t"
        @click="isOpen = !isOpen"
      >
        <svg
          width="88"
          height="40"
          viewBox="0 0 88 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="87"
            height="39"
            rx="5.5"
            fill="white"
            stroke="#C6C2DE"
          />
          <path
            d="M41.4091 26H42.8182V20.7955H47.8636V19.5455H42.8182V15.6136H48.3864V14.3636H41.4091V26ZM50.6179 26H51.9588V17.2727H50.6179V26ZM51.2997 15.8182C51.8224 15.8182 52.2543 15.4091 52.2543 14.9091C52.2543 14.4091 51.8224 14 51.2997 14C50.777 14 50.3452 14.4091 50.3452 14.9091C50.3452 15.4091 50.777 15.8182 51.2997 15.8182ZM55.7557 14.3636H54.4148V26H55.7557V14.3636ZM62.0071 17.2727H60.1435V15.1818H58.8026V17.2727H57.4844V18.4091H58.8026V23.8636C58.8026 25.3864 60.0298 26.1136 61.1662 26.1136C61.6662 26.1136 61.9844 26.0227 62.1662 25.9545L61.8935 24.75C61.7798 24.7727 61.598 24.8182 61.3026 24.8182C60.7116 24.8182 60.1435 24.6364 60.1435 23.5V18.4091H62.0071V17.2727ZM67.5895 26.1818C69.3622 26.1818 70.6577 25.2955 71.0668 23.9773L69.7713 23.6136C69.4304 24.5227 68.6406 24.9773 67.5895 24.9773C66.0156 24.9773 64.9304 23.9602 64.8679 22.0909H71.2031V21.5227C71.2031 18.2727 69.2713 17.1591 67.4531 17.1591C65.0895 17.1591 63.5213 19.0227 63.5213 21.7045C63.5213 24.3864 65.0668 26.1818 67.5895 26.1818ZM64.8679 20.9318C64.9588 19.5739 65.919 18.3636 67.4531 18.3636C68.9077 18.3636 69.8395 19.4545 69.8395 20.9318H64.8679ZM73.2429 26H74.5838V20.4773C74.5838 19.2955 75.5156 18.4318 76.7884 18.4318C77.1463 18.4318 77.5156 18.5 77.6065 18.5227V17.1591C77.4531 17.1477 77.1009 17.1364 76.902 17.1364C75.8565 17.1364 74.9474 17.7273 74.6293 18.5909H74.5384V17.2727H73.2429V26Z"
            fill="#25213B"
          />
          <g clip-path="url(#clip0_423_4442)">
            <path d="M22 22L30 14V10H10V14L18 22V30L22 26V22Z" fill="#8B83BA" />
          </g>
          <defs>
            <clipPath id="clip0_423_4442">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(10 10)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <button
        v-if="isOpen"
        @click="isOpen = false"
        tabindex="-1"
        class="top-0 inset-0 h-full w-full bg-black opacity-0 cursor-default"
      ></button>
      <div
        v-if="isOpen"
        class="absolute z-50 left-0 py-2 mt-2 rounded-lg bg-white showFilters shadow-lg text-sm"
      >
        <p class="px-3 text-purple-light font-light my-1">Sort By:</p>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Default</p>
          <div class="circle active"></div>
        </div>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Firstname</p>
          <div class="circle"></div>
        </div>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Lastname</p>
          <div class="circle"></div>
        </div>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Due date</p>
          <div class="circle"></div>
        </div>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Last login</p>
          <div class="circle"></div>
        </div>
        <div
          class="bordered w-full border-purple-light border-x-0 border-t border-b-0"
        ></div>
        <p class="px-4 text-purple-light font-light my-1">Users:</p>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>All</p>
          <div class="circle"></div>
        </div>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Active</p>
          <div class="circle"></div>
        </div>
        <div class="flex w-full justify-between eachShowFilter py-1 px-3">
          <p>Inactive</p>
          <div class="circle"></div>
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
      isOpen: false,
 
    };
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style scoped>
.select {
  border: 1px solid #c6c2de;
  width: 88px;
  height: 40px;
  margin-right: 1rem;
}
.showFilters {
  top: 44px;
  width: 224px;
  height: 307px;
  border-width: 0px, 0px, 0px, 0px;
  border-style: solid;
  border-color: #c6c2de;
}
.eachShowFilter:hover {
  background: #c6c2de;
}
.circle{
  border: 
    2px solid #c6c2de;
border-radius: 9999px;
height: 10px;
width: 10px;
}
.circle.active{
  background: #6D5BD0;
}
</style>
