<script setup>
import { useStore } from 'vuex';
const store = useStore()
// 派发事件时， 默认也是不需要跟上模块名称
// 提交mutations默认也不需要跟上模块名
const incrementCount = () => {
  store.dispatch('incrementCountAction')
}

</script>
<script>
export default {
  methods: {
  }
}
</script>

<template>
  <div class="home">
    <h2>Home Page</h2>
    <!-- 1.使用state时 是需要state.moduleName.xxx -->
    <h2>counter模块的count: {{ $store.state.counter.count }}</h2>
    <!-- 2.使用getters时, 默认直接getters.xxx -->
    <h2>counter模块的doubleCount: {{ $store.getters.doubleCount }}</h2>

    <button @click="incrementCount">count模块+1</button>
  </div>
</template>

<style scoped>

</style>
