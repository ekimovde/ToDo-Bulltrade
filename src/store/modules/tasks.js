const state = {
  tasks: []
}

const getters = {
  tasks(state) {
    return state.tasks
  }
}

const mutations = {
  addTask(state, task) {
    state.tasks.push(task)
  },

  removeTask(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId)
  },

  toggleTaskStatus(state, taskId) {
    const task = state.tasks.find(task => task.id === taskId)

    task.isCompleted = !task.isCompleted
  },

  updateTask(state, task) {
    const index = state.tasks.findIndex(item => item.id === task.id)

    state.tasks.splice(index, 1, task)
  },

  swapTasks(state, tasks) {
    state.tasks = tasks
  }
}

const actions = {
  addTask({ commit }, task) {
    commit('addTask', task)
  },

  removeTask({ commit }, taskId) {
    commit('removeTask', taskId)
  },

  toggleTaskStatus({ commit }, taskId) {
    commit('toggleTaskStatus', taskId)
  },

  updateTask({ commit }, task) {
    commit('updateTask', task)
  },

  swapTasks({ commit }, tasks) {
    commit('swapTasks', tasks)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
