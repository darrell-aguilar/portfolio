<template>
  <div class="projects">
    <h1 class="projects_header">Projects</h1>
    <Card
      v-for="proj in projects"
      :key="proj.title"
      :content="proj"
      type="image"
    ></Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import content from "../assets/projects.json"
import Card from "./Card.vue"
import { ICardImageProps } from "../helpers/types"

export default defineComponent({
  name: "Projects",
  components: {
    Card,
  },
  data() {
    return {
      projects: content.projects as ICardImageProps[],
    }
  },
})
</script>

<style scoped lang="scss">
.projects {
  @include fade-in-content;

  padding-top: 3rem;

  &_header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>
