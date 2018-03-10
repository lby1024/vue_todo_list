<style lang="stylus" scoped>
	
</style>

<template>
  <div id="todos">
	  <TodoHeader></TodoHeader>
	  <TodoList></TodoList>
	  <TodoFooter></TodoFooter>
  </div>
</template>
<script>
import TodoHeader from '../components/header.vue'
import TodoList from '../components/list.vue'
import TodoFooter from '../components/footer'

export default {
	components: {
		TodoHeader, TodoList, TodoFooter
	}
}
</script>

