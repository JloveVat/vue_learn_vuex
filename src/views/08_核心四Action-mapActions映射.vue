<script setup>
import { useStore, mapActions } from 'vuex';

const store = useStore()

// 1.在setup函数中使用mapActions辅助函数
const actions = mapActions(['incrementAction', 'changeNameAction'])
const newActions = {}
Object.keys(actions).forEach(key => {
  newActions[key] = actions[key].bind({ $store: store })
})
const { incrementAction, changeNameAction } = newActions

// 使用默认的做法
const increment = () => {
  store.dispatch('incrementAction')
}
</script>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // counterBtnClick() {
    //   this.$store.dispatch('incrementAction')
    // },
    // nameBtnClick() {
    //   this.$store.dispatch('changeNameAction', 'jingyoushihang')
    // },
    ...mapActions(['incrementAction', 'changeNameAction'])
  }
}
</script>

<template>
  <div class="home">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="incrementAction">发起action修改counter</button>
    <button @click="increment">递增counter</button>
    <h2>当前计数: {{ $store.state.name }}</h2>
    <button @click="changeNameAction('jingyoushihang')">发起action修改name</button>
  </div>
</template>

<style scoped>

</style>
