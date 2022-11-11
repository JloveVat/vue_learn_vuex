<script setup>
import { toRefs, computed } from 'vue'
import { mapGetters, useStore } from 'vuex'

</script>
<script>
import { CHANGE_INFO } from '@/store/mutation_types'

export default {
  methods: {
    changeName() {
      // this.$store.state.name = '临时修改'
      this.$store.commit('changeName', 'shihang')
    },
    incrementLevel() {
      this.$store.commit('incrementLevel')
    },
    changeInfo() {
      this.$store.commit(CHANGE_INFO, {
        name: 'youyou',
        level: 200
      })
    }
  }
}
</script>

<template>
  <div class="home">
    <button @click="changeName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeInfo">修改info</button>
    <h2>Store Name: {{ $store.state.name }}</h2>
    <h2>Store Level: {{ $store.state.level }}</h2>
  </div>
</template>

<style scoped>

</style>
