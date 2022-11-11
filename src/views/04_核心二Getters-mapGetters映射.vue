<script setup>
import { toRefs, computed } from 'vue'
import { mapGetters, useStore } from 'vuex';

const store = useStore()

// const { message: messageFn } = mapGetters(['message'])
// const message = computed(messageFn.bind({ $store: store }))

// const message = computed(() => store.getters.message)
const { message } = toRefs(store.getters)

const changeName = () => {
  // 此处更改不规范,想需要commit  在mutations进行修改
  store.state.name = '123'
}

</script>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['doubleCounter', 'totalAge']),
    ...mapGetters(['getFriendById'])
  }
}
</script>

<template>
  <div class="home">
    <button @click="changeName">修改name</button>
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <h2>friendTotalAge: {{ totalAge }}</h2>
    <h2>message: {{ message }}</h2>

    <!-- 2.根据id获取某一个朋友的信息 -->
    <h2>id-111的朋友信息: {{ getFriendById(111) }}</h2>
    <h2>id-112的朋友信息: {{ getFriendById(112) }}</h2>
  </div>
</template>

<style scoped>

</style>
