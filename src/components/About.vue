<template>
  <div class="about">
    <h2 class="about_header">About</h2>
    <p class="about_paragraph">
      A Front End Engineer with experience in converting design and mockups into
      responsive and highly functional web apps. Experienced in working in a
      variety of cross-functional teams and delivering cohesive and
      high-performing applications.
    </p>
    <p class="about_paragraph">
      Currently, I am working as a Front End Engineer building features for
      internal and customer facing web apps at
      <span><a class="about_link" href="https://so.energy">So Energy</a></span
      >. I have experience in using the following tools and technologies in a
      production codebase:
    </p>
    <div class="about_tech">
      <p class="about_paragraph about_highlight">
        <span class="about_list">Tools and Technologies: </span>Vue, Typescript,
        Pinia, Vuex, Git, Vuetify, Sass, GraphQL, Hasura, Jest, Cypress,
        Storybook, Storyblok, Vercel
      </p>
      <p class="about_paragraph">
        On top of these technologies, I also spend my spend time learning about
        other technologies and have knowledge and personal experience on the
        following:
      </p>
      <p class="about_paragraph about_highlight">
        <span class="about_list">Other tools and technologies: </span> React,
        RTK Query, NodeJS, Tailwind
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
.about {
  @include fade-in-content;

  @include sm {
    padding-top: 6rem;
  }

  @include lg {
    padding-top: 1rem;
  }

  padding-top: 5rem;
  &_header {
    font-size: 1.5rem;
  }

  &_paragraph {
    padding-top: 1rem;
  }

  &_link {
    color: var(--green);
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
