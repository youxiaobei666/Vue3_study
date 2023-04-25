<template>
  <div>
    数据：{{ infos }}
    <!-- 循环渲染传来的 props -->
    <div v-for="(item, index) in infos" :key="item">
      <!-- 插槽可以使用一些属性，下面的字段父组件通过 slotProps.item 方式使用 -->
      <slot name="son" :item="item" :index="index"></slot>
    </div>
  </div>
</template>
q
<script setup>
/**
 * 在子组件必须定义父组件传递的 message
 */
import { defineProps } from "vue";

// 定义父组件传来的 prop
const props = defineProps({
  infos: {
    type: Array,
    // 定义默认值
    default: () => [],
  },
});
</script>
