<template>
  <div class="home-page">
    <h1 class="home-page__title">
      ToDo App
    </h1>

    <task-form :task="formTask" />

    <vue-draggable-next
      v-model="tasks"
      :sort="true"
      :disabled="false"
      :animation="0"
      group="description"
      ghostClass="ghost"
      class="home-page__list"
    >
      <transition-group
        type="transition"
        name="flip-list"
      >
        <li
          v-for="task in tasks"
          :key="task.id"
          class="home-page__item"
        >
          <task-card :task="task" />
        </li>
      </transition-group>
    </vue-draggable-next>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  import TaskForm from '@components/task/TaskForm.vue'
  import TaskCard from '@components/task/TaskCard.vue'
  import { VueDraggableNext } from 'vue-draggable-next'

  const store = useStore()

  const formTask = {
    id: null,
    name: '',
    description: '',
    isCompleted: false
  }

  const tasks = computed({
    get: () => store.getters['tasks/tasks'],
    set: (value) => store.commit('tasks/swapTasks', value)
  })
</script>

<style scoped lang="scss">
  .home-page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    &__title {
      text-align: center;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    &__item {
      &.ghost {
        opacity: 0.5;
        background: #f9f9f9;
        border-radius: 8px;
      }

      &.sortable-choosen {
        cursor: move;
      }

      &.flip-list-move {
        transition: transform 0.5s;
      }

      &.no-move {
        transition: transform 0s;
      }
    }
  }
</style>
