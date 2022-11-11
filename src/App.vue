<script setup>
// import Home from './views/01_核心一State-基本使用.vue'
// import Home from './views/02_核心一State-mapState映射.vue'
// import Home from './views/03_核心二Getters-基本使用.vue'
// import Home from './views/04_核心二Getters-mapGetters映射.vue'
// import Home from './views/05_核心三Mutation-基本使用.vue'
// import Home from './views/06_核心三Mutation-mapMutations映射.vue'
// import Home from './views/07_核心四Action-基本使用.vue'
// import Home from './views/08_核心四Action-mapActions映射.vue'
// import Home from './views/09_核心四Action-发送网络请求.vue'
import Home from './views/Home.vue'
</script>

<template>
  <div class="app">
    <h2>AppContent</h2>
    <h2>当前计数: {{ $store.state.counter }}</h2>
    
    <hr>
    <Home></Home>
  </div>
</template>

<style scoped>

</style>
