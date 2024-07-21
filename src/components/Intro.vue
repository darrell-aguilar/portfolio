<template>
  <header class="intro">
    <div class="intro_content">
      <h1 class="intro_title">
        <a href="/">Darrell Aguilar</a>
      </h1>
      <h2 class="intro_subtitle">Front End Engineer</h2>
      <p class="intro_text">Converting design to code.</p>
    </div>
    <div class="intro_links">
      <a href="https://linkedin.com/in/darrell-aguilar">
        <i class="intro_icon fa-brands fa-linkedin"></i>
      </a>
      <a href="https://github.com/darrell-aguilar">
        <i class="intro_icon fa-brands fa-github"></i>
      </a>
      <a href="mailto:darrell029@gmail.com">
        <i class="intro_icon fa-solid fa-envelope"></i>
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Intro",
})
</script>

<style scoped lang="scss">
.intro {
  position: relative;

  &_content {
    animation: fade-in 0.5s ease-in-out;

    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &_title {
    @include sm {
      font-size: 3rem;
    }
  }

  &_subtitle {
    @include sm {
      font-size: 1.5rem;
    }
  }

  &_text {
    padding-top: 1rem;
  }

  &_links {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    position: absolute;
    animation: slide-in 0.5s ease-in-out;

    @keyframes slide-in {
      from {
        left: -50rem;
      }
      to {
        left: 0;
      }
    }

    @include sm {
      gap: 2rem;
      padding: 2rem 0;
    }

    > * {
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  &_icon {
    font-size: 1.5rem;

    @include sm {
      font-size: 2rem;
    }
  }
}
</style>
