<template>
  <header class="intro">
    <div class="intro_container">
      <div class="intro_content">
        <p class="intro_kicker">Portfolio</p>
        <h1 class="intro_title">
          <a href="/">Darrell Aguilar</a>
        </h1>
        <h2 class="intro_subtitle">Full Stack Engineer</h2>
        <p class="intro_text">Delivering business solutions with code.</p>
      </div>
      <div class="intro_links">
        <a href="https://linkedin.com/in/darrell-aguilar" aria-label="Link to LinkedIn profile">
          <i class="intro_icon fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/darrell-aguilar" aria-label="Link to Github">
          <i class="intro_icon fa-brands fa-github"></i>
        </a>
        <a href="mailto:darrell029@gmail.com" aria-label="Link to email">
          <i class="intro_icon fa-solid fa-envelope"></i>
        </a>
      </div>
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
@use "@/styles/variables.scss" as *;

.intro {
  &_container {
    position: sticky;
    top: 2rem;
    display: grid;
    gap: 1.15rem;
    padding-top: 0.5rem;

    @include lg {
      align-self: start;
      top: 3rem;
      min-height: calc(100vh - 6rem);
      align-content: start;
    }
  }

  &_kicker {
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.8rem;
    font-weight: 700;
  }

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
    font-size: clamp(2.75rem, 6vw, 4.75rem);
    line-height: 0.95;
    letter-spacing: -0.05em;
    font-weight: 700;

    @include sm {
      font-size: clamp(3rem, 6vw, 5rem);
    }
  }

  &_subtitle {
    margin-top: 0.45rem;
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.82rem;

    @include sm {
      font-size: 0.86rem;
    }
  }

  &_text {
    padding-top: 1rem;
    max-width: 22rem;
    color: var(--grey-1);
  }

  &_links {
    display: flex;
    gap: 0.85rem;
    padding: 0.5rem 0 0;
    animation: fade-in 0.75s ease-in-out;

    @include sm {
      gap: 1rem;
    }

    > * {
      width: 2.5rem;
      height: 2.5rem;
      display: inline-grid;
      place-items: center;
      border-radius: 999px;
      color: var(--grey-1);
      border: 1px solid color-mix(in srgb, var(--grey-3) 78%, transparent);
      transition:
        transform 0.2s ease-in-out,
        border-color 0.2s ease-in-out,
        color 0.2s ease-in-out,
        background-color 0.2s ease-in-out;

      &:hover {
        transform: translateY(-1px);
        border-color: var(--green);
        color: var(--green);
        background: color-mix(in srgb, var(--green) 6%, var(--background));
      }
    }
  }

  &_icon {
    font-size: 1.15rem;

    @include sm {
      font-size: 1.2rem;
    }
  }
}
</style>
