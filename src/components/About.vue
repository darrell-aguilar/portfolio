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
      My time currently gets focused on building features for internal and
      customer facing web apps at
      <span><a class="about_link" href="https://so.energy">So Energy</a></span
      >. I have experience in using the following tools and technologies in a
      production codebase:
    </p>
    <div class="about_tech">
      <p>
        <span class="about_list">Tools and Technologies: </span>Vue, Typescript,
        Pinia, Vuex, Vuetify, Sass, GraphQL, Hasura, Jest, Cypress
      </p>
      <p></p>
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
  animation: fade-in 1s ease-in-out;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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
    max-width: 500px;
    padding-top: 1rem;
  }

  &_link {
    color: $lime-green;
  }

  &_tech {
    max-width: 500px;
    padding-top: 1rem;
  }

  &_list {
    font-weight: bold;
  }
}
</style>
