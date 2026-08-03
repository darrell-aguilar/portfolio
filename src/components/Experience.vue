<template>
  <div class="experience">
    <h2 class="experience_header">Experience</h2>
    <div class="experience_cards">
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
          <ul class="experience_highlights">
            <li v-for="(highlight, index) in exp.highlights" :key="index">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </Card>
    </div>
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
@use "@/styles/variables.scss" as *;

.experience {
  padding-top: 2.5rem;
  @include fade-in-content;
  :deep(.card) {
    &:hover {
      & .experience_role {
        color: var(--green);
      }
    }
  }

  &_header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &_cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  &_subheader {
    color: var(--grey-4);
    font-size: 0.75rem;
    line-height: 1.5rem;
    vertical-align: bottom;
    letter-spacing: 0.1em;
  }

  &_role {
    font-size: 1.05rem;
  }

  &_company {
    color: var(--grey-1);
    margin-top: 0.15rem;
  }

  &_highlights {
    padding-top: 1.25rem;
    padding-left: 1.5rem;
    font-size: 0.9rem;
    list-style: disc;

    & li {
      margin-bottom: 0.75rem;
      line-height: 1.6;
    }
  }
}
</style>
