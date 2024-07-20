<template>
  <div class="about">
    <h2 class="about_header">ABOUT</h2>
    <p class="about_paragraph">
      A Front End Engineer with experience in transferring design and mockups
      into responsive and highly functional web apps.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "About",
})
</script>

<style scoped lang="scss">
.about {
  padding-top: 1rem;

  &_header {
    font-size: 1.5rem;
  }

  &_paragraph {
    max-width: 500px;
    padding-top: 1rem;
  }
}
</style>
