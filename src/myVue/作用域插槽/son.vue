<template>
  <div>
    <hr />
    <h2>son component</h2>
    <!-- <slot></slot> -->
    <slot name="mySon"></slot>
    <slot name="info"></slot>
    <slot name="img"></slot>

    <slot :text="grettingText" :age="20"></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({});

const grettingText = "你好";
</script>
