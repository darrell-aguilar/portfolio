<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Card",
})
</script>

<style scoped lang="scss">
@use "@/styles/variables.scss" as *;

.card {
  padding: 1.15rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  border: 1px solid color-mix(in srgb, var(--grey-3) 92%, var(--text));
  border-radius: 1rem;
  background: color-mix(in srgb, var(--background) 96%, transparent);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--grey-3) 25%, transparent);
  transition:
    border-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out,
    background-color 0.2s ease-in-out;

  &:hover {
    border-color: color-mix(in srgb, var(--green) 45%, var(--grey-3));
    box-shadow: 0 0 0 1px color-mix(in srgb, var(--green) 18%, transparent);
    background-color: color-mix(in srgb, var(--background) 94%, var(--green));
  }

  @include sm {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    padding: 1.4rem 1.25rem;
  }
}
</style>
