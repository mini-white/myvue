<template>
  <div> 
    <h1>{{ newitem }}</h1>
    <div class="todolist">
      <input type='text' v-model=newitem @keyup.enter=addNew>
      <ul>
        <li v-for="item of arrs" :key=item.id @click=rmItem(item)>{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const TODOSTORAGE = 'todos-vuejs'
export default {
  name: 'todolist',
  data () {
    return {
      arrs: this.fetch(),
      nextid: 0,
      newitem: ''
    }
  },
  watch: {
    arrs: {
      handler: function (arrs) {
        this.save(arrs)
      },
      deep: true
    }
  },
  methods: {
    addNew () {
      console.log(this.arrs)
      this.arrs.push({id: this.nextid++, name: this.newitem})
      this.newitem = ''
    },
    rmItem (value) {
      for (let i in this.arrs) {
        if (i > value.id) {
          this.arrs[i].id--
        }
      }
      this.arrs.splice(value.id, 1)
      this.nextid--
    },
    save (items) {
      window.sessionStorage.setItem(TODOSTORAGE, JSON.stringify(items))
    },
    fetch () {
      return JSON.parse(window.sessionStorage.getItem(TODOSTORAGE) || '[]')
    }
  }
}
</script>

<style scoped>
ul li {
  cursor: pointer;
  margin: 10px;
}
</style>