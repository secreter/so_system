<template>
  <div id="app">
    <div>{{ count }}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex'
import store from './store/index'
import Hello from './components/Hello'

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

</style>
