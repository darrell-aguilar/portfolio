<template>
  <div class="intro">
    <h1 class="intro_title">
      <a href="/">Darrell Aguilar</a>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Intro",
})
</script>

<style scoped lang="scss">
.intro {
  &_title {
    font-size: 3rem;
  }
}
</style>
