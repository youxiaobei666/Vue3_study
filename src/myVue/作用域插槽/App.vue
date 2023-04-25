<template>
  <div>
    <h2>作用域插槽</h2>
    <!-- 把数据以 props 传递给子组件 -->
    <son :infos="infos">
      <!-- 传递一个 slotProps 给插槽 -->
      <template v-slot:son="slotProps">
        <!-- 让组件插槽内渲染以下内容  -->
        <!-- 一定要注意以下的 item,index 都是子组件那边要定义好的 -->
        <li>{{ slotProps.item }} - {{ slotProps.index }}</li>
      </template>
    </son>
  </div>
</template>

<script setup>
/**
 * 以下是在当前作用域使用不存在的变量报的错
 * operty "message" was accessed during render but is not defined on instance.
 *
 * 我们使用一个循环渲染 的例子来理解作用域插槽
 */
import son from "./son.vue";

const infos = [
  "父传 props",
  "子用 props",
  "插槽传 slotProps",
  "指定内容是 slotProps.item",
  "注意是否写名字",
];
</script>
