<template>
  <div class="s-page-title">Requests</div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

//Set tab header to specific view.
useHead({
  title: 'CLMSX - Requests',
  meta: [
    {
      name: `description`,
      content: 'Sirius CLMSX Requests'
    }
  ]
})
</script>

<style lang="scss" scoped>
@import '@/styles/_globals.scss';
</style>
