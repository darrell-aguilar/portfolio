<template>
  <div
    class="toggle"
    :class="{ 'toggle--sticky': sticky, 'toggle--is-light': !isDark }"
  >
    {{ currentTheme }}
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
import { useThemeStore } from "../store"
import { Themes } from "../styles/themeHelper"
import { capitalize } from "../utils/helpers"

export default defineComponent({
  name: "Toggle",
  props: {
    sticky: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      store: useThemeStore(),
    }
  },
  computed: {
    selected: {
      get() {
        return this.store.$state.theme === Themes.Dark
      },
      set(val: Themes) {
        this.store.setTheme(val ? Themes.Dark : Themes.Light)
      },
    },
    currentTheme() {
      return capitalize(this.store.currentTheme)
    },
    isDark() {
      return this.store.currentTheme === Themes.Dark
    },
  },
})
</script>

<style scoped lang="scss">
.toggle {
  display: inline-block;
  vertical-align: middle;

  &--sticky {
    position: sticky;
    top: 20px;
  }

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
    margin-left: 0.25rem;
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
      width: 1.2rem;
      height: 1.2rem;
      background-color: white;
      left: 0.25rem;
      border-radius: 50%;
      top: 2px;
      transition: 0.3s;
    }
  }

  &--is-light {
    .toggle_switch {
      background-color: #a7a7a7;

      &::before {
        background-color: black;
      }
    }
  }
}
</style>
