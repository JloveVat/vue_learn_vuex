export default {
  state: () => ({
    // 服务器数据
    banners: [],
    recommends: []
  }),
  mutations: {
    changeBanners(state, payload) {
      state.banners = payload
    },
    changeRecommends(state, payload) {
      state.recommends = payload
    }
  },
  actions: {
    async fetchHomeMultidataAction(context) {
      // 1.返回Promise, 给Promise设置then
      // fetch('http://123.207.32.32:8000/home/multidata').then(res => {
      //   res.json().then(data => {
      //     console.log(data)
      //   })
      // })

      // 2.Promise链式调用
      // fetch('http://123.207.32.32:8000/home/multidata')
      //   .then(res => {
      //     return res.json()
      //   })
      //   .then(data => {
      //     console.log(data)
      //   })

      // 3.await/async
      console.log('获取网络请求之前')
      const res = await fetch('http://123.207.32.32:8000/home/multidata')
      const data = await res.json()
      console.log('获取的数据: ', data)

      // 修改state数据
      context.commit('changeBanners', data.data.banner.list)
      context.commit('changeRecommends', data.data.recommend.list)
    }
  }
}
