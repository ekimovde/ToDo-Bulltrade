<template>
  <form
    class="task-form"
    @submit.prevent="handleFormSubmit"
  >
    <ui-input
      v-model="formTask.name"
      label="Название задачи"
    />

    <ui-textarea
      v-model="formTask.description"
      label="Описание задачи"
    />

    <ui-button
      :view="UiButtonView.default"
      :is-disabled="isButtonDisabled"
    >
      {{ displayedButtonText }}
    </ui-button>
  </form>
</template>

<script>
  import { defineComponent, computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  import { v4 as uuidv4 } from 'uuid';

  import UiButton, { UiButtonView } from '@components/ui/button/UiButton.vue';
  import UiInput from '@components/ui/input/UiInput.vue';
  import UiTextarea from '@components/ui/textarea/UiTextarea.vue';

  export default defineComponent({
    name: 'task-form',
    components: {
      UiButton,
      UiInput,
      UiTextarea
    },
    props: {
      task: {
        type: Object,
        default: () => ({})
      },
      isEdited: {
        type: Boolean,
        default: false
      }
    },
    setup(props, { emit }) {
      const store = useStore();

      const formTask = reactive(props.task);

      const displayedButtonText = computed(() => {
        return props.isEdited ? 'Обновить задачу' : 'Создать задачу';
      });
      const isButtonDisabled = computed(() => {
        const { name, description } = formTask;

        return !name || !description;
      });

      const resetTask = () => {
        formTask.name = '';
        formTask.description = '';
      };

      const onUpdateTask = () => {
        store.dispatch('tasks/updateTask', { ...formTask });

        resetTask();
        emit('task-updated');
      };

      const onAddTask = () => {
        store.dispatch('tasks/addTask', { ...formTask, id: uuidv4() });

        resetTask();
      };

      const handleFormSubmit = () => {
        if (props.isEdited) {
          onUpdateTask();

          return;
        }

        onAddTask();
      };

      return {
        displayedButtonText,
        isButtonDisabled,

        formTask,
        UiButtonView,

        handleFormSubmit
      };
    }
  });
</script>

<style scoped lang="scss">
  .task-form {
    width: fit-content;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    justify-content: center;
    align-items: center;
  }
</style>
