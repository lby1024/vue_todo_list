<style lang="stylus" scoped>
    #todo-footer
        font-size 12px
        span 
            &:hover
                cursor pointer
            &.cur
                color red
</style>

<template>
    <div id="todo-footer">
        <span :class="visible==0?'cur':''" @click="find_todo(0)">全部</span>
        <span :class="visible==1?'cur':''" @click="find_todo(1)">已完成</span>
        <span :class="visible==2?'cur':''" @click="find_todo(2)">未完成</span>
    </div>
</template>
<script>
import store from '../vuex/vuex.js'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'todo_footer',
  store,
  computed: {
      ...mapState(['visible'])
  },
  methods: {
      ...mapMutations(['find_todo'])
  }

}
</script>

