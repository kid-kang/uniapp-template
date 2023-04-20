<template>
  <view class="container">{{ store.token }}</view>
</template>

<script setup>
  import { useStore } from '@/store'

  const store = useStore()
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
  }
</style>
