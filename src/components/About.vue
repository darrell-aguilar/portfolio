<template>
  <div class="about">
    <h2 class="about_header">About</h2>
    <p class="about_paragraph">
      A Full Stack Engineer with experience in building end-to-end,
      product-focused solutions. My expertise lies in implementing and
      delivering scalable, highly functional applications that meet business
      objectives. From planning and developing server-side business solutions,
      to converting design and mock-ups into responsive and highly functional user interface.
    </p>
    <p class="about_paragraph">
      Currently, I am working as a Software Engineer building energy commerce
      features for one of the largest energy providers in Europe at 
      <span><a class="about_link" href="https://kaluza.com">Kaluza</a></span
      >. I have experience in using the following tools and technologies in a
      production codebase:
    </p>
    <div class="about_tech">
      <p class="about_list">Tools and Technologies:</p>
      <ul class="about_tags">
        <li v-for="tool in tools" :key="tool" class="about_tag">
          {{ tool }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "About",
  data() {
    return {
      tools: [
        "Typescript/Javascript",
        "Vue",
        "Kotlin",
        "NodeJS",
        "Kafka",
        "gRPC",
        "GCP",
        "Ktor",
        "Spring",
        "Postgres",
        "Tanstack Query",
        "Tailwind",
        "Git",
        "GraphQL",
        "Hasura",
        "Jest",
        "Cypress",
        "Storybook",
        "Vercel",
        "Wiremock",
        "Docker",
        "S3",
        "Pub/Sub",
      ],
    }
  },
})
</script>

<style scoped lang="scss">
@use "@/styles/variables.scss" as *;

.about {
  padding-top: 4rem;

  @include fade-in-content;

  @include sm {
    padding-top: 5rem;
  }

  @include lg {
    padding-top: 0.5rem;
  }

  &_header {
    font-size: 1.5rem;
  }

  &_paragraph {
    padding-top: 1rem;
    max-width: 42rem;
  }

  &_link {
    color: var(--green);
    text-decoration: underline;
  }

  &_tech {
    padding-top: 1rem;
  }

  &_list {
    font-weight: bold;
  }

  &_tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-top: 0.75rem;
    list-style: none;
    max-width: 42rem;
  }

  &_tag {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border-radius: 999px;
    border: 1px solid color-mix(in srgb, var(--grey-3) 80%, transparent);
    background: color-mix(in srgb, var(--background) 96%, var(--green));
    color: var(--grey-1);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-shadow: 0 1px 0 color-mix(in srgb, black 5%, transparent);
    transition:
      transform 0.18s ease-in-out,
      border-color 0.18s ease-in-out,
      background-color 0.18s ease-in-out,
      color 0.18s ease-in-out,
      box-shadow 0.18s ease-in-out;

    &:hover {
      transform: translateY(-1px);
      border-color: var(--green);
      background: color-mix(in srgb, var(--green) 8%, var(--background));
      color: var(--text);
      box-shadow: 0 6px 18px color-mix(in srgb, black 8%, transparent);
    }
  }
}
</style>
