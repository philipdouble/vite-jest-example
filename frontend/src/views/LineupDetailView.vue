<template>
  <div class="s-page-title">LineupDetailView</div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

//Set tab header to specific view.
useHead({
  title: 'CLMSX - Lineup Detail',
  meta: [
    {
      name: `description`,
      content: 'Sirius CLMSX Lineup Detail'
    }
  ]
})
</script>

<style lang="scss" scoped>
@import '@/styles/_globals.scss';
</style>
