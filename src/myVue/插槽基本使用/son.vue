<template>
  <div>
    <hr />
    <h2>son component</h2>
    <!-- 默认插槽 -->
    <slot></slot>
    <!-- 组件标签上的具名插槽 -->
    <slot name="mySon"></slot>
    <!--  template 标签具名插槽复杂写法 -->
    <slot name="info"></slot>
    <slot name="img"></slot>
  </div>
</template>

<script setup></script>
