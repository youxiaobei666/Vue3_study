<template>
  <div>
    <!-- 动态的插槽名字 -->
    <!-- <son :myname="name">
      <template v-slot:[slotName]> </template>
    </son> -->
    <!-- 作用域插槽再练练 -->

    <son :message="message">
      <template v-slot:slotName="slotProps">
        名字：<button>{{ slotProps.item.name }}--{{ slotProps.index }}</button>
        年龄：<button>
          {{ slotProps.item.age }}
        </button>
      </template>
    </son>
  </div>
</template>

<script setup>
import son from "./son.vue";

// const name = "good_slot_name";
// const slotName = "good_slot_name";

const message = [
  { name: "游小北", age: 20 },
  { name: "刘德华", age: 60 },
  { name: "李荣浩", age: 40 },
];
</script>

<style lang="scss"></style>
