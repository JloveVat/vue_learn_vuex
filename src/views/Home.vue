<script setup>
import { useStore } from 'vuex';
const store = useStore()

// 模块中使用了命名空间 namespaced: true, 此处dispatch('moduleName/xxx')
const incrementCount = () => {
  store.dispatch('counter/incrementCountAction')
}

</script>
<script>
import { mapActions } from 'vuex';
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
    <!-- 2.使用getters时且模块中使用了命名空间 namespaced: true, 此处getters['moduleName/xxx'] -->
    <h2>counter模块的doubleCount: {{ $store.getters['counter/doubleCount'] }}</h2>

    <button @click="incrementCount">count模块+1</button>
  </div>
</template>

<style scoped>

</style>
