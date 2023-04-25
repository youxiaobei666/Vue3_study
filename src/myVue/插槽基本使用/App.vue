<template>
  <div>
    <h2>父组件</h2>
    <!-- 默认插槽 -->
    <son>
      <p>这是一段默认内容</p>
    </son>
    <!-- 组件标签上的具名插槽 -->
    <son v-slot:mySon>
      <p>指定名为 myson 的插槽使用</p>
    </son>
    <!-- template 标签具名插槽复杂写法 -->
    <son>
      <template v-slot:info> 信息 </template>
      <template v-slot:img> 图片 </template>
    </son>
  </div>
</template>

<script setup>
import son from "./son.vue";
</script>
