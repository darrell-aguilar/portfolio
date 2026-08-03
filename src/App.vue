<template>
  <div class="app">
    <Toggle class="app_toggle" />
    <div class="app_container">
      <Intro />
      <div>
        <About />
        <Experience />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Intro from "@/components/Intro.vue"
import About from "@/components/About.vue"
import Toggle from "@/components/Toggle.vue"
import Experience from "@/components/Experience.vue"
import { useThemeStore } from "./store"
import { computed } from "vue"

export default defineComponent({
  setup() {
    const store = useThemeStore()

    const currentTheme = computed(() => store.currentTheme)

    return {
      currentTheme,
    }
  },
  components: {
    Intro,
    About,
    Toggle,
    Experience,
  },
  watch: {
    currentTheme: {
      handler(val) {
        document.documentElement.setAttribute("data-theme", val)
      },
      immediate: true,
    },
  },
})
</script>

<style lang="scss">
@use "@/styles/variables.scss" as *;
</style>

<style scoped lang="scss">
@use "@/styles/variables.scss" as *;

.app {
  &_toggle {
    position: absolute;

    right: 1rem;
    top: 1rem;
    @include md {
      right: 5rem;
      top: 2rem;
    }
  }
  &_container {
    padding: 3rem 1rem 4rem;
    margin: auto;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    gap: 2.75rem;

    & > * {
      flex-basis: 50%;
    }

    @include sm {
      padding: 4rem 2rem 4.5rem;
      gap: 3rem;
    }

    @include lg {
      flex-direction: row;
      align-items: flex-start;
      padding: 5.5rem 4rem 5.5rem;
      gap: 5.5rem;
    }
  }
}
</style>
