<template>
  <div
    v-for="item in sliceArray"
    :key="item.id"
    class="flex widther flex-col relative items-center"
    :class="[item.viewmore ? 'bg-purple-lighter' : 'bg-white']"
  >
    <div
      :class="[item.focused ? 'bg-purple-lighter' : 'bg-white']"
      class="w-full flex relative items-center px-4 py-2 border-b border-purple-dim"
    >
      <div class="w-50 relative flex items-center">
        <div class="w-20 relative flex items-center">
          <input
            type="checkbox"
            name=""
            id=""
            v-model="item.focused"
            @change="$store.commit('addSingleFocus', item.id)"
          />
          <div
            class="border rounded-full ml-6 w-4 h-4 p-2 border-purple-dim flex items-center justify-center"
          >
            <i
              v-if="item.viewmore"
              class="fas fa-chevron-down text-xs"
              @click="$store.commit('showMore', item.id)"
            ></i>
            <i
              v-if="!item.viewmore"
              class="fas fa-chevron-up text-xs"
              @click="$store.commit('showMore', item.id)"
            ></i>
          </div>
        </div>
        <div class="w-40 flex flex-col items-start">
          <p class="namep mb-1 py-1">
            <span>{{ item.firstname }} </span> <span>{{ item.lastname }} </span>
          </p>
          <p class="gmailp">{{ item.gmail }}</p>
        </div>
        <div class="w-40 flex flex-col items-start">
          <button
            v-if="item.status"
            class="active bg-blue-100 rounded-2xl px-2 py-1 mb-1 flex items-center"
          >
            <span class="w-2 h-2 bg-blue-700 mr-3 rounded-full"></span
            ><span>Active</span>
          </button>
          <button
            v-if="!item.status"
            class="inactive bg-purple-100 rounded-2xl px-2 py-1 mb-1 flex items-center"
          >
            <span class="w-2 h-2 bg-purple-700 mr-1 rounded-full"></span
            ><span>Inactive</span>
          </button>
          <p class="loginp">Last login: {{ item.lastLogin }}</p>
        </div>
      </div>
      <div class="w-50 relative flex items-center">
        <div class="w-50 flex flex-col items-start">
          <button
            v-if="item.paid"
            class="active bg-green-100 rounded-2xl px-2 py-1 mb-1 flex items-center"
          >
            <span class="w-2 h-2 bg-green-700 mr-3 rounded-full paidp"></span
            ><span class="paidp">Paid</span>
          </button>
          <p v-if="item.paid" class="payment">Paid on {{ item.dueDate }}</p>

          <button
            v-if="item.unpaid"
            class="inactive bg-orange-100 rounded-2xl px-2 py-1 mb-1 flex items-center"
          >
            <span class="w-2 h-2 bg-orange-700 mr-1 rounded-full"></span
            ><span>Unpaid</span>
          </button>
          <p v-if="item.unpaid" class="payment">Dues on 15/APR/2020</p>

          <button
            v-if="item.overdue"
            class="inactive bg-red-100 rounded-2xl px-2 py-1 mb-1 flex items-center"
          >
            <span class="w-2 h-2 bg-red-700 mr-1 rounded-full"></span
            ><span class="overdue">Overdue</span>
          </button>
          <p v-if="item.overdue" class="payment">Dues on 15/APR/2020</p>
        </div>
        <div class="w-30 flex items-center justify-between">
          <p class="amount flex flex-col items-center">
            <span class="namep py-1 mb-1">$200</span
            ><span class="small-active">USD</span>
          </p>
          <button
            @click="$store.commit('showMore', item.id)"
            class="small-active view-more"
          >
            view more
          </button>
        </div>

        <button class="w-20 relative flex items-center justify-end">
          <img src="../../assets/More.png" alt="" />
        </button>
      </div>
    </div>
    <div
      v-if="item.viewmore"
      class="flex w-full flex-col relative bg-purple-lighter"
    >
      <div
        class="flex w-full relative items-center px-4 py-3 border-b border-purple-dim mini-nav"
      >
        <div class="w-10 relative flex items-start"></div>
        <div class="w-15 relative flex items-start">Date</div>
        <div class="w-25 relative flex items-start">user activity</div>
        <div class="w-50 relative flex items-start">details</div>
      </div>
      <div
        class="flex w-full relative items-center px-4 py-3 border-b border-purple-dim bg-purple-lighter showmore"
        v-for="detail in item.details"
      >
        <div class="w-10 relative flex items-start"></div>

        <div class="w-15 relative flex items-start">{{ detail.date }}</div>
        <div class="w-25 relative flex items-start">
          {{ detail.userActivity }}
        </div>
        <div class="w-50 relative flex items-start">{{ detail.details }}</div>
      </div>
    </div>
  </div>
  <div
    class="flex widther footer relative items-center justify-end bg-purple-lighter px-6 py-3"
  >
    <div class="w-3/5 flex items-center"></div>
    <p>Rows per page 10</p>
    <p class="mx-10">{{ this.currentItems +1  }}-{{ this.currentItems + 10}} 0f 50</p>
    <div class="flex justify-between w-24 text-lg">
      <i
        class="fas fa-chevron-left cursor-pointer ml-1 hover:ml-0"
        @click="movePage('decrease')"
      ></i>
      <i
        class="fas fa-chevron-right cursor-pointer mr-1 hover:mr-0"
        @click="movePage('increase')"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["sliced"],
  data() {
    return {
      viewMore: false,
      active: false,
      paid: true,
      unpaid: false,
      currentItems: 0,
      overdue: false,
      page: "1-10",
    };
  },
  created() {},
  computed: {
    sliceArray() {
      return this.$store.state.users.slice(
        this.currentItems,
        this.currentItems + 10
      );
    },
  },
  mounted() {
    this.$store.commit("addFocus");
  },
  methods: {
    movePage(method) {
      let arrayLength = this.$store.state.users.length;
      let arrayCheck = this.currentItems;
      if (method === "decrease") {
        if (arrayCheck !== 0 && arrayCheck !== 10) {
          this.currentItems = arrayCheck - 10;
        } else {
          return;
        }
      }
      if (method === "increase") {
        if (arrayCheck !== arrayLength - 10) {
          this.currentItems = arrayCheck + 10;
        } else {
          return;
        }
      }
    },
  },
  watch: {},
};
</script>
<style scoped>
.widther {
  min-width: 1100px;
}
.gmailp,
.loginp {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #6e6893;
}
.namep,
.inactive,
.active {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #25213b;
}
.small-active {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.05em;
  color: #6e6893;
}
.small-active.view-more {
  font-weight: 500;
  font-size: 14px;
}
.inactive {
  color: #6e6893;
}
.active {
  color: #4a4aff;
}
.paidp {
  color: #007f00;
}
.overdue {
  color: #d30000;
}
.payment {
  color: #25213b;
}
.mini-nav {
  background: #f2f0f9;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6e6893;
}
.showmore {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #25213b;
}
.footer p {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #6e6893;
}
</style>
