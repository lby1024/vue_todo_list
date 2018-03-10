<template>
  <div id="todo-header">
      <input type="text" v-model="title">
      <button @click="add(title)">添加</button>
  </div>
</template>
<script>
import store from '../vuex/vuex.js'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
    'name': 'todo_header',
    store,
    data(){
        return {
            'title':''
        }
    },
    methods: {
        ...mapMutations(['add_todo']),
        add(title){
            if(title!= ''){
                this.add_todo(title)
                this.title = ''
            }
        }
    }
}
</script>

