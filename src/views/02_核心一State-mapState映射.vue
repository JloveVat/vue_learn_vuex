<script setup>
import { computed, toRefs } from 'vue'
import { mapState, useStore } from 'vuex';

// const store = useStore()
// const { name, level } = mapState(['name', 'level'])
// const cName = computed(name.bind({$store: store}))
// const cLevel = computed(level.bind({$store: store}))

// 直接从store.state中解构
const store = useStore()
const { name, level, counter } = toRefs(store.state)

const btnClick = () => {
  store.commit('setCounter')
}

</script>
<script>
// import { mapState } from 'vuex';

// export default {
//   computed: {
//     fullname() {
//       return 'xxx'
//     },
//     ...mapState(['name', 'level', 'avatarUrl']),
//     ...mapState({
//       sName: state => state.name,
//       sLevel: state => state.level
//     })
//   }
// }
</script>

<template>
  <div class="home">
    <!-- 1.在模板中直接使用多个状态 -->
    <h2>name: {{ $store.state.name }}</h2>
    <h2>level: {{ $store.state.level }}</h2>
    <h2>avatarUrl: {{ $store.state.avatarUrl }}</h2>

    <!-- 2.计算属性(映射状态) -->
    <!-- <h2>name: {{name}}</h2>
    <h2>level: {{level}}</h2> -->

    <!-- 3.计算属性(对象方式映射) -->
    <!-- <h2>name: {{sName}}</h2>
    <h2>level: {{sLevel}}</h2> -->

    <!-- 1.setup中使用mapState -->
    <!-- <h2>cName: {{cName}}</h2>
    <h2>cLevel: {{cLevel}}</h2> -->

    <!-- 2. -->
    <h2>name: {{ name }}</h2>
    <h2>level: {{ level }}</h2>
    <h2>counter: {{ counter }}</h2>

    <button @click="btnClick">修改counter</button>

  </div>
</template>

<style scoped>

</style>
