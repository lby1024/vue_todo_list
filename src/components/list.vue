<style lang="stylus" scoped>
    #list
        span 
            cursor pointer
            &.title
                display inline-block
                width: 190px
            &.done
                text-decoration line-through
                color gray 
            &.close:hover
                color red

</style>

<template>
  <div id="list">
      <p v-for="(item, index) in list()" :key="index">
          <span :class="'title ' + is_done(item.done)" @click="change_todo(item)">{{item.title}}</span>
          <span class="close" @click="del_todo(item.title)">X</span>
      </p>
  </div>
</template>
<script>
import store from '../vuex/vuex.js'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    name: 'list',
    store,
    data(){
        return {

        }
    },
    computed: {
        ...mapState(['todos','visible'])
    },
    methods: {
        ...mapMutations(['change_todo', 'del_todo']),
        is_done(done){
            return done==true?'done':''
        },
        list(){
            if(this.visible==0){
                return this.todos
            }else if(this.visible==1){
                return this.todos.filter(item=> item.done==true)
            }else if(this.visible==2){
                return this.todos.filter(item=> item.done==false)
            }
        }
    }
}
</script>
