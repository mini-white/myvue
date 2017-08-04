const TODOSTORAGE = 'todos-vuejs'
export default {
  save (items) {
    window.sessionStorage.setItem(TODOSTORAGE, JSON.stringify(items))
  },
  fetch () {
    return JSON.parse(window.sessionStorage.getItem(TODOSTORAGE || '[]'))
  }
}