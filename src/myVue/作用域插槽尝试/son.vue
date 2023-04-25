<template>
  <div>
    <!-- 动态名插槽 -->
    <!-- <slot :name="myname">
      {{ myname }}
    </slot> -->

    数据源：{{ message }}
    <div v-for="(item, index) in message" :key="item">
      <slot name="slotName" :item="item" :index="index"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  // myname: {
  //   type: String,
  //   default: "",
  // },
  message: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss"></style>
