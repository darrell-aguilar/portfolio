<template>
  <div class="projects">
    <h2 class="projects_header">Projects</h2>
    <Card
      v-for="proj in projects"
      :key="proj.title"
      :content="proj"
      type="image"
    >
      <div class="projects_image">
        <img :src="proj.image" :alt="proj.image_alt" />
      </div>
      <div class="projects_content">
        <h3 class="projects_title">{{ proj.title }}</h3>
        <p class="projects_info">
          {{ proj.info }}
        </p>
        <div class="projects_technology">
          <p class="projects_tech" v-for="tech in proj.technologies">
            {{ tech }}
          </p>
        </div>
        <div class="projects_links">
          <a
            class="projects_link"
            v-if="proj.source_code"
            :href="proj.source_code"
            target="_blank"
          >
            Source Code
          </a>
          <a
            class="projects_link"
            v-if="proj.url"
            :href="proj.url"
            target="_blank"
          >
            Live Website
          </a>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import content from "../assets/projects.json"
import Card from "./Card.vue"
import { ICardImageProps } from "../utils/types"

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
  padding-top: 3rem;
  @include fade-in-content;
  &_header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &_info {
    padding-top: 1.5rem;
    font-size: 0.9rem;
  }

  &_links {
    margin: 1.5rem 0;
    display: flex;
  }

  &_link {
    font-weight: 500;
    color: var(--grey-2);
    padding-right: 1rem;

    &:hover {
      color: var(--green);
      animation: 0.5s move ease-out;

      @keyframes move {
        0% {
          transform: translateY(0);
        }
        30% {
          transform: translateY(-5px);
        }
        100% {
          transform: translateY(0);
        }
      }
    }
  }

  &_image {
    margin-top: 0.75rem;
    max-width: 200px;
    max-height: 200px;
    order: 1;

    @include sm {
      order: 0;
    }

    @include lg {
      width: 150px;
    }
    & > * {
      width: 100%;
      object-fit: contain;
    }
  }

  &_technology {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  &_tech {
    border-radius: 50px;
    padding: 0.25rem 1rem;
    background-color: var(--grey-3);
    color: var(--green);
    font-weight: 500;
  }
}
</style>
