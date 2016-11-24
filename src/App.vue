<template>
  <div id="app">
    <header-nav></header-nav> 
    <body-nav></body-nav>
    
    
  </div>

</template>

<script>
import { mapState , mapActions } from 'vuex'
import store from './store/index'
import headerNav from './components/headerNav'
import bodyNav from './components/bodyNav'

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
    headerNav,
    bodyNav,
  },
  methods: {
    ...mapActions([
      'add' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ])
  }
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column; 
  height: 100%;
  align-items: stretch;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
