<script setup>

</script>
<script>
</script>

<template>
  <div class="home">
    <button @click="btnClick">修改counter</button>
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>friendTotalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>

    <!-- 2.根据id获取某一个朋友的信息 -->
    <h2>id-111的朋友信息: {{ $store.getters.getFriendById(111) }}</h2>
    <h2>id-112的朋友信息: {{ $store.getters.getFriendById(112) }}</h2>
  </div>
</template>

<style scoped>

</style>
