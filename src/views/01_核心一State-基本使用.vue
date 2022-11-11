<script setup>
import { computed, toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { counter } = toRefs(store.state)
const storeCounter = computed(() => store.state.counter)
const btnClick = () => {
  store.commit('setCounter')
}
</script>

<template>
  <div class="home">
    <h2>Home中计数: {{ $store.state.counter }}</h2>
    <h2>当前计数: {{ storeCounter }}</h2>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="btnClick">修改counter</button>
  </div>
</template>

<style scoped>

</style>
