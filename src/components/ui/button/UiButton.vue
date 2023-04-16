<template>
  <button
    class="ui-button"
    :class="{
      [`ui-button--view-${view}`]: view,
      'ui-button--disabled': isDisabled
    }"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
  import { defineComponent } from 'vue';

  export const UiButtonView = {
    default: 'default',
    extra: 'extra'
  };

  export default defineComponent({
    name: 'ui-button',
    props: {
      view: {
        type: String,
        validator: val => Object.values(UiButtonView).includes(val),
        default: UiButtonView.default
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ['click'],
    setup(_, { emit }) {
      const onClick = () => {
        emit('click');
      };

      return {
        onClick
      };
    }
  });
</script>

<style scoped lang="scss">
.ui-button {
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  width: fit-content;
  height: 35px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &--view {
    &-default {
      background-color: #f9f9f9;
      color: #646cff;

      &:hover {
        border-color: #646cff;
      }
    }

    &-extra {
      background-color: #f9f2f4;
      color: #c7254e;

      &:hover {
        border-color: #c7254e;
      }
    }
  }

  &--disabled {
    background-color: #f9f9f9;
    color: #000;
    cursor: default;

    &:hover {
      border-color: transparent;
    }
  }

  &:focus, &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
