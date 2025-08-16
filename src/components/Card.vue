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
.card {
  padding: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--hover-background);
    border-radius: 5px;
  }

  @include sm {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
}
</style>
