<template>
  <div>
    <h2>父组件</h2>
    <!-- 默认插槽 -->
    <son>
      <p>这是一段默认内容</p>
    </son>
    <!-- 具名插槽 -->
    <son v-slot:mySon>
      <p>指定名为 myson 的插槽使用</p>
    </son>
    <!-- 具名插槽复杂写法 -->
    <son>
      <template v-slot:info> 信息 </template>
      <template v-slot:img> 图片 </template>
    </son>
    <!-- 作用域插槽 -->
    <son v-slot="slotProps">
      {{ slotProps.text }}
      {{ slotProps.age }}
    </son>
  </div>
</template>

<script setup>
import son from "./son.vue";

const info = ["定义props", "传给子组件", "子组件使用"];
</script>
