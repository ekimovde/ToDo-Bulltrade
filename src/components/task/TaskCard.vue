<template>
  <div class="task-card">
    <p :class="`task-card__text ${textStyles}`">
      {{ task.name }}
    </p>

    <p :class="`task-card__text ${textStyles}`">
      {{ truncatedDescription }}
    </p>

    <div class="task-card__configuration">
      <div class="task-card__block">
        <ui-button
          :view="UiButtonView.default"
          @click="toggleTaskStatus"
        >
          Выполнено
        </ui-button>

        <ui-button
          :view="UiButtonView.extra"
          @click="removeTask"
        >
          Удалить
        </ui-button>
      </div>

      <router-link :to="{ name: 'task-edit', params: { taskId: task.id } }">
        <i class='task-card__icon bx bx-right-arrow-circle' />
      </router-link>
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'

  import UiButton, { UiButtonView } from '@components/ui/button/UiButton.vue'

  export default defineComponent({
    components: {
      UiButton
    },
    props: {
      task: {
        type: Object,
        default: () => ({})
      },
    },
    setup(props) {
      const DEFAULT_MAX_LENGTH_OF_TEXT = 50
      const store = useStore()

      const isTruncatedDescription = computed(() => props.task.description.length > DEFAULT_MAX_LENGTH_OF_TEXT)

      const textStyles = computed(() => props.task.isCompleted ? 'task-card__text--is-throughed' : '')
      const truncatedDescription = computed(() => {
        const { description } = props.task

        return isTruncatedDescription.value
          ? `${description.substring(0, DEFAULT_MAX_LENGTH_OF_TEXT)}...`
          : description
      })

      const toggleTaskStatus = () => {
        store.dispatch('tasks/toggleTaskStatus', props.task.id)
      }

      const removeTask = () => {
        store.dispatch('tasks/removeTask', props.task.id)
      }

      return {
        textStyles,
        truncatedDescription,
        UiButtonView,

        toggleTaskStatus,
        removeTask
      }
    }
  })
</script>

<style scoped lang="scss">
  .task-card {
    min-width: 320px;
    border-radius: 8px;
    border: 1px solid #f9f9f9;
    padding: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    &__text {
      padding: 0;
      margin: 0;

      &--is-throughed {
        text-decoration: line-through;
      }
    }

    &__configuration {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__block {
      display: flex;
      align-items: center;
      column-gap: 5px;
    }

    &__icon {
      font-size: 18px;
      color: #646cff;
    }
  }
</style>
