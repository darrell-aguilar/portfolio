<template>
  <div class="app">
    <Intro />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Intro from "@/components/Intro.vue"

export default defineComponent({
  components: {
    Intro,
  },
})
</script>

<style scoped>
.app {
  padding: 0 6rem;
}
</style>
