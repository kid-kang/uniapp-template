<template>
  <view class="nav-bar__wrapper">
    <!-- 状态栏高度 -->
    <view class="status-bar" :style="{ height: `${store.navBarConfig.statusBarHeight}px` }"></view>
    <!-- 导航栏高度 -->
    <view
      class="nav-bar__content"
      :style="{
        height: `${store.navBarConfig.navBarHeight}px`,
        'line-height': `${store.navBarConfig.navBarHeight}px`,
        'justify-content': `${back ? 'start' : 'center'}`,
      }"
    >
      <uni-icons v-if="back" type="back" size="26" @click="handlerBack"></uni-icons>
      <text>{{ text }}</text>
    </view>
  </view>
  <!-- 占位盒子 -->
  <view
    :style="{
      height: `${store.navBarConfig.navBarHeight + store.navBarConfig.statusBarHeight}px`,
    }"
  ></view>
</template>

<script setup>
  import { defineProps } from 'vue'
  import { useStore } from '@/store'

  const store = useStore()
  defineProps({
    text: {
      type: String,
      required: true,
    },
    back: {
      type: Boolean,
      required: false,
      default: false,
    },
  })

  function handlerBack() {
    uni.navigateBack({ delta: 1 })
  }
</script>

<style lang="scss" scoped>
  .nav-bar__wrapper {
    position: fixed;
    top: 0;
    left: -16rpx; // 覆盖page的内边距
    right: -16rpx;
    z-index: 99;
    overflow: hidden;
    background-color: #fff;

    .nav-bar__content {
      display: flex;
      align-items: center;

      text {
        font-size: 34rpx;
        margin-left: 14rpx;
      }

      uni-icons {
        height: 100%;
      }
    }
  }
</style>
