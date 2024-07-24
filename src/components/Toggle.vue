<template>
  <div class="toggle">
    <label class="toggle_label" for="check">
      <input
        v-model="selected"
        class="toggle_input"
        type="checkbox"
        id="check"
      />
      <div class="toggle_switch"></div>
    </label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Toggle",
  data() {
    return {
      selected: "",
    }
  },
})
</script>

<style scoped lang="scss">
.toggle {
  display: inline-block;
  vertical-align: middle;

  &_input {
    display: none;

    &:checked + .toggle_switch::before {
      left: 1.9rem;
    }
  }

  &_label {
    position: relative;
    display: inline-block;
    width: 3.5rem;
    height: 1.5rem;
    vertical-align: middle;
  }

  &_switch {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 2rem;

    &::before {
      content: "";
      position: absolute;
      width: 1.3rem;
      height: 1.3rem;
      background-color: white;
      left: 0.25rem;
      border-radius: 50%;
      top: 1px;
      transition: 0.3s;
    }
  }
}
</style>
