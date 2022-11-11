import { createStore } from 'vuex'
import { CHANGE_INFO } from './mutation_types'

const state = createStore({
  state() {
    return {
      counter: 9,
      name: 'jingyou',
      level: 100,
      avatarUrl: 'http://xxx',
      friends: [
        { id: 111, name: 'jing', age: 22 },
        { id: 112, name: 'you', age: 23 },
        { id: 113, name: 'hang', age: 24 }
      ],

      // 服务器数据
      banners: [],
      recommends: []
    }
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
    totalAge(state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age
      }, 0)
    },
    message(state, context) {
      return `name: ${state.name} level: ${state.level} friendTotalAge: ${context.totalAge}`
    },
    // 返回一个函数
    getFriendById(state) {
      return function (id) {
        const friend = state.friends.find(item => item.id === id)
        return friend
      }
    }
  },
  mutations: {
    setCounter(state) {
      state.counter++
    },
    increment(state) {
      state.counter++
    },
    changeName(state, payload) {
      state.name = payload
    },
    incrementLevel(state) {
      state.level++
    },
    [CHANGE_INFO](state, payload) {
      state.name = payload.name
      state.level = payload.level
    },

    changeBanners(state, payload) {
      state.banners = payload
    },
    changeRecommends(state, payload) {
      state.recommends = payload
    }
  },
  actions: {
    incrementAction(context) {
      // console.log(context.commit) // 用于提交mutation
      // console.log(context.getters) // getters
      // console.log(context.state) // state
      context.commit('increment')
    },
    changeNameAction(context, payload) {
      context.commit('changeName', payload)
    },

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
})

export default state
