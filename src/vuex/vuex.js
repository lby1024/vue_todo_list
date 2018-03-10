import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const state = {
    'todos': [
        {
            'title': '吃饭',
            'done': true
        },
        {
            'title': '睡觉',
            'done': false
        },
        {
            'title': '拉屎',
            'done': false
        }
    ],
    'visible': 0
}
const mutations = {
    // 增
    add_todo(state, payload){
        let item = {
            'title': payload,
            'done': false
        }
        state.todos = [
            ...state.todos,
            item
        ]
    },
    // 删
    del_todo(state, payload){
        state.todos = state.todos.filter(item=> item.title!=payload)
    },
    // 改
    change_todo(state, payload){
        let f = state.todos.filter(item=> item.title==payload.title)
        f[0].done = !payload.done
    },
    // 显示全部或者已完成或者未完成
    find_todo(state, payload){
        state.visible = payload
    }
}
const actions = {

}

export default new Vuex.Store({
    state, mutations, actions
})