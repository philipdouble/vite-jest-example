<template>
  <div class="s-page-title">Login</div>
  <router-link to="/dash" class="scrub-link">
    <el-button> Login </el-button>
  </router-link>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

//Set tab header to specific view.
useHead({
  title: 'CLMSX - Login',
  meta: [
    {
      name: `description`,
      content: 'Sirius CLMSX Login'
    }
  ]
})
</script>

<style lang="scss" scoped>
@import '@/styles/_globals.scss';
</style>
