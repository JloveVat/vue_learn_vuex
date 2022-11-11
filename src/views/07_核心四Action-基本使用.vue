<script setup>

</script>
<script>
export default {
  methods: {
    counterBtnClick() {
      this.$store.dispatch('incrementAction')
    },
    nameBtnClick() {
      this.$store.dispatch('changeNameAction', 'jingyoushihang')
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="counterBtnClick">发起action修改counter</button>
    <h2>当前计数: {{ $store.state.name }}</h2>
    <button @click="nameBtnClick">发起action修改name</button>
  </div>
</template>

<style scoped>

</style>
