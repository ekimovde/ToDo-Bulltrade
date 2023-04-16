<template>
  <div class="ui-input">
    <label for="input">
      {{ label }}
    </label>

    <input
      class="ui-input__field"
      placeholder="Введите что-нибудь..."
      :value="modelValue"
      @input="updateValue"
    >
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ui-input',
    props: {
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: String,
        default: ''
      }
    },
    setup(_, { emit }) {
      const updateValue = (event) => {
        emit('update:modelValue', event.target.value);
      };

      return {
        updateValue
      };
    }
  });
</script>

<style scoped lang="scss">
  .ui-input {
    display: flex;
    flex-direction: column;
    row-gap: 4px;

    &__field {
      padding: 8px;
      font-size: 16px;
      border-radius: 8px;
      border: 1px solid transparent;
      height: 20px;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #f9f9f9;
      outline: none;
      width: fit-content;
      min-width: 320px;

      &::placeholder {
        font-size: 14px;
      }

      &:hover, &:focus {
        border-color: #646cff;
      }
    }
  }
</style>
