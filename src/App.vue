<template>
  <div class="app">
    <Toggle class="app_toggle" />
    <div class="app_container">
      <Intro />
      <About />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Intro from "@/components/Intro.vue"
import About from "@/components/About.vue"
import Toggle from "@/components/Toggle.vue"

export default defineComponent({
  components: {
    Intro,
    About,
    Toggle,
  },
})
</script>

<style scoped lang="scss">
.app {
  &_toggle {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  &_container {
    padding: 2rem 1rem;
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
      padding: 2rem 6rem;
    }
  }
}
</style>
