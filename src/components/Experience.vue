<template>
  <div class="experience">
    <h1 class="experience_header">Experience</h1>
    <Card
      v-for="exp in experience"
      :key="exp.company"
      :content="exp"
      type="card"
    ></Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import content from "../assets/experience.json"
import Card from "./Card.vue"

export default defineComponent({
  name: "Experience",
  components: {
    Card,
  },
  data() {
    return {
      experience: content.experience,
    }
  },
})
</script>

<style scoped lang="scss">
.experience {
  @include fade-in-content;

  padding-top: 3rem;

  &_header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
