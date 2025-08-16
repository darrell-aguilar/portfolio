<template>
  <div class="experience">
    <h2 class="experience_header">Experience</h2>
    <Card
      v-for="exp in experience"
      :key="exp.company"
      :content="exp"
      type="card"
    >
      <div class="experience_subheader">
        <p>
          {{ exp.fromDate.toUpperCase() }} -
          {{ exp.toDate.toUpperCase() }}
        </p>
      </div>
      <div class="experience_content">
        <h3 class="experience_role">{{ exp.role }}</h3>
        <h4 class="experience_company">{{ exp.company }}</h4>
        <p class="experience_info">
          {{ exp.highlights }}
        </p>
      </div>
    </Card>
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
  padding-top: 3rem;
  @include fade-in-content;
  :deep(.card) {
    &:hover {
      & .experience_role {
        transition: all 0.3s ease-in-out;
        color: var(--green);
      }
    }
  }

  &_header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &_subheader {
    color: var(--grey-4);
    font-size: 0.75rem;
    line-height: 1.5rem;
    vertical-align: bottom;
  }

  &_role {
    font-size: 1rem;
  }

  &_company {
    color: var(--grey-1);
  }

  &_info {
    padding-top: 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
