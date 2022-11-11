<script setup>
import { toRefs, computed } from 'vue'
import { mapMutations, useStore } from 'vuex'
import { CHANGE_INFO } from '@/store/mutation_types'


// 1.手动映射绑定
const store = useStore()
const mutations = mapMutations(['changeName', 'incrementLevel', CHANGE_INFO])
const newMutations = {}
Object.keys(mutations).forEach(key => {
  newMutations[key] = mutations[key].bind({ $store: store })
})
const { changeName, incrementLevel, changeInfo } = newMutations

</script>
<script>
import { mapMutations } from 'vuex';
import { CHANGE_INFO } from '@/store/mutation_types'

export default {
  methods: {
    // ...mapMutations(['changeName', 'incrementLevel', CHANGE_INFO])
  }
}
</script>

<template>
  <div class="home">
    <button @click="changeName('shihang')">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo({ name: 'youyou', level: 200 })">修改info</button>
    <h2>Store Name: {{ $store.state.name }}</h2>
    <h2>Store Level: {{ $store.state.level }}</h2>
  </div>
</template>

<style scoped>

</style>
