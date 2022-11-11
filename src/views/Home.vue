<script setup>
import { useStore, mapActions } from 'vuex';
const store = useStore()
// 告诉vuex发起网络请求
// store.dispatch('fetchHomeMultidataAction')

// 对应的action返回的是Promise时, 可以通过.then知道状态何时完成
store.dispatch('fetchHomeMultidataAction').then((res) => {
  console.log('网络请求在Home中的回调');
})
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
    <ul>
      <template v-for="item in $store.state.banners" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>
