<template>
  <div class="app">
    <Toggle class="app_toggle" />
    <div class="app_container">
      <Intro />
      <div>
        <About />
        <Experience />
        <Projects />
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
import Projects from "@/components/Projects.vue"
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
    Projects,
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

<style scoped lang="scss">
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
    padding: 2rem 1rem;
    margin: auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;

    & > * {
      flex-basis: 50%;
    }

    @include sm {
      padding: 2rem 4rem;
    }

    @include lg {
      flex-direction: row;
      padding: 4rem 4rem;
    }
  }
}
</style>
