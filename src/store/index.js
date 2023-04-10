import { createStore } from 'vuex'
import tasks from './modules/tasks'

const store = createStore({
  devtools: true,
  modules: {
    tasks
  },
})

export default store
