<template>
  <div class="flex w-full flex-col items-center pt-5 text-slate-600">
    Welcome to the Invoice app development, with Bun {{ bunVer }}
    <p class="text-green-500">Let's have fun, happy people!</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const bunVer = ref("v1.0.4");
</script>
