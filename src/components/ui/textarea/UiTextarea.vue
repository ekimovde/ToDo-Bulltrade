<template>
  <div class="ui-textarea">
    <label for="textarea">
      {{ label }}
    </label>

    <textarea
      id="textarea"
      class="ui-textarea__field"
      placeholder="Введите что-нибудь..."
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      label: {
        type: String,
        default: '',
      },
      modelValue: {
        type: String,
        default: ''
      }
    },
    setup(_, { emit }) {
      const updateValue = (event) => {
        emit('update:modelValue', event.target.value)
      }

      return {
        updateValue
      };
    },
  })
</script>

<style scoped lang="scss">
.ui-textarea {
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  &__field {
    padding: 8px;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    border-radius: 8px;
    background-color: #f9f9f9;
    border: 1px solid transparent;
    width: fit-content;
    min-width: 320px;
    resize: none;
    height: 50px;

    &::placeholder {
      font-size: 14px;
    }

    &:hover, &:focus {
      border-color: #646cff;
    }
  }
}
</style>
