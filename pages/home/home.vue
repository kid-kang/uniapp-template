<template>
  <nav-bar text="首页" />
  <view class="container">{{ store.userInfo.name }}</view>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
  <button type="primary" @click="detail">详情</button>
</template>

<script setup>
  import { useStore } from '../../store'

  const store = useStore()

  function detail() {
    uni.navigateTo({
      url: '/subpkg/home/detail',
    })
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 20px;
    font-size: 14px;
    line-height: 24px;
  }
</style>
