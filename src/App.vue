<template>
  <div id="app">
    <div>{{ count }}</div>
    <button @click="add">add</button>
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-link to="/hello">Go to hello</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
import { mapState , mapActions } from 'vuex'
import store from './store/index'
// import Hello from './components/Hello'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      'count'
    ]),
    
  },
  components: {
    
  },
  methods: {
    ...mapActions([
      'add' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ])
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
