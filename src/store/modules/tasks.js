const state = {
  tasks: []
};

const getters = {
  tasks(store) {
    return store.tasks;
  }
};

const mutations = {
  addTask(store, task) {
    store.tasks.push(task);
  },

  removeTask(store, taskId) {
    store.tasks = store.tasks.filter(task => task.id !== taskId);
  },

  toggleTaskStatus(store, taskId) {
    const currentTask = store.tasks.find(task => task.id === taskId);

    currentTask.isCompleted = !currentTask.isCompleted;
  },

  updateTask(store, task) {
    const index = store.tasks.findIndex(item => item.id === task.id);

    store.tasks.splice(index, 1, task);
  },

  swapTasks(store, tasks) {
    store.tasks = tasks;
  }
};

const actions = {
  addTask({ commit }, task) {
    commit('addTask', task);
  },

  removeTask({ commit }, taskId) {
    commit('removeTask', taskId);
  },

  toggleTaskStatus({ commit }, taskId) {
    commit('toggleTaskStatus', taskId);
  },

  updateTask({ commit }, task) {
    commit('updateTask', task);
  },

  swapTasks({ commit }, tasks) {
    commit('swapTasks', tasks);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
