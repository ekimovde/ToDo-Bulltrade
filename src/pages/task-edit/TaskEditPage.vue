<template>
  <div class="task-edit-page">
    <h3 class="task-edit-page__title">
      Редактирование задачи
    </h3>

    <task-form
      v-if="currentTask"
      :task="currentTask"
      :is-edited="true"
      @task-updated="goToHomePage"
    />
  </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import { useStore } from 'vuex';

  import TaskForm from '@components/task/TaskForm.vue';

  const route = useRoute();
  const router = useRouter();
  const store = useStore();

  const currentTask = ref(null);

  const getTaskById = (taskId) => {
    const task = store.getters['tasks/tasks'].find(item => item.id === taskId);

    if (!task) {
      router.push({ name: 'home' });

      return;
    }

    currentTask.value = task;
  };

  const goToHomePage = () => {
    router.push({ name: 'home' });
  };

  onMounted(() => {
    getTaskById(route.params.taskId);
  });
</script>

<style scoped lang="scss">
  .task-edit-page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    &__title {
      text-align: center;
    }
  }
</style>
