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
      <p class="about_paragraph about_highlight">
        <span class="about_list">Tools and Technologies: </span>
        Typescript/Javascript, Vue, Kotlin, NodeJS, Kafka, gRPC, GCP, Ktor, Spring,
        Postgres, Tanstack Query, Tailwind, Git, GraphQL, Hasura, Jest, 
        Cypress, Storybook, Vercel, Wiremock, Docker, S3, Pub/Sub
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "About",
})
</script>

<style scoped lang="scss">
@use "@/styles/variables.scss" as *;

.about {
  padding-top: 5rem;

  @include fade-in-content;

  @include sm {
    padding-top: 6rem;
  }

  @include lg {
    padding-top: 1rem;
  }

  &_header {
    font-size: 1.5rem;
  }

  &_paragraph {
    padding-top: 1rem;
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

  &_highlight:hover {
    transition: all 0.5s ease-in-out;
    color: var(--green);
  }
}
</style>
