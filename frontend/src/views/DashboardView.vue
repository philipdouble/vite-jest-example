<template>
  <div class="s-page-title">Dashboard</div>
  <router-link to="/lineup-detail-view/1" class="scrub-link">
    <button class="el-button el-button--default"> See Linup Detail </button>
  </router-link>
  <button
    class="el-button el-button--default"
    id="hello-world-button"
    @click="onClickHello()"
  >
    Hello World
  </button>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

const emits = defineEmits<{
  (e: "clickHello", helloMessage: string): void;
}>();

function onClickHello() {
  emits("clickHello", "Hello, World!");
}

//Set tab header to specific view.
useHead({
  title: "CLMSX - Dashboard",
  meta: [
    {
      name: `description`,
      content: "Sirius CLMSX Dashboard",
    },
  ],
});
</script>

<style lang="scss" scoped>
@import "@/styles/_globals.scss";
</style>
