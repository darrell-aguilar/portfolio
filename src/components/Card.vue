<template>
  <div v-if="hasContent" class="card">
    <template v-if="type === 'card'">
      <div class="card_header">
        <p>
          {{ content.fromDate.toUpperCase() }} -
          {{ content.toDate.toUpperCase() }}
        </p>
      </div>
      <div class="card_content">
        <h3 class="card_role">{{ content.role }}</h3>
        <h5 class="card_company">{{ content.company }}</h5>
        <p class="card_info">
          {{ content.highlights }}
        </p>
      </div>
    </template>
    <template v-if="type === 'card-image'">
      <div class="card_image">
        <img :src="imageContent.image" />
      </div>
      <div class="card_content">
        <h3 class="card_title">{{ imageContent.title }}</h3>
        <p class="card_info">
          {{ imageContent.info }}
        </p>
        <div class="card_technology">
          <p class="card_tech" v-for="tech in imageContent.technologies">
            {{ tech }}
          </p>
        </div>
        <div class="card_links">
          <a
            class="card_link"
            v-if="imageContent.source_code"
            :href="imageContent.source_code"
            target="_blank"
          >
            Source Code
          </a>
          <a
            class="card_link"
            v-if="imageContent.url"
            :href="imageContent.url"
            target="_blank"
          >
            Live Website
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { ICardImageProps, ICardProps } from "../helpers/types"

export default defineComponent({
  name: "Card",
  props: {
    content: {
      type: Object as PropType<ICardProps>,
      default: {},
    },
    imageContent: {
      type: Object as PropType<ICardImageProps>,
      default: {},
    },
    type: {
      type: String,
      default: "card",
    },
  },
  computed: {
    hasContent() {
      return (
        Object.keys(this.content).length > 0 ||
        Object.keys(this.imageContent).length > 0
      )
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  padding: 1rem;
  margin-bottom: 1rem;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: rgb(34, 37, 45, 0.9);
    border-radius: 5px;

    & .card_role {
      transition: all 0.3s ease-in-out;
      color: $lime-green;
    }
  }
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @include sm {
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }

  &_header {
    color: rgb(171, 168, 168, 0.7);
    font-size: 0.75rem;
    line-height: 1.5rem;
    vertical-align: bottom;
  }

  &_role {
    font-size: 1rem;
  }

  &_company {
    color: rgba(185, 184, 184, 0.7);
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
    color: rgb(153, 153, 153);
    padding-right: 1rem;

    &:hover {
      color: $lime-green;
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
    background-color: rgb(255, 255, 255, 0.2);
    color: $lime-green;
  }
}
</style>
