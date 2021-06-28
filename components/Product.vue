<template>
  <div class="card">
    <nuxt-link :to="productLink" append class="image-wrapper">
      <img
        v-if="product.defaultProductVariant.images[0]"
        :src="
          $urlFor(product.defaultProductVariant.images[0])
            .width(300)
            .height(300)
        "
        :alt="product.title"
        loading="lazy"
      />
    </nuxt-link>

    <div class="content">
      <nuxt-link class="title-link" :to="productLink" append>
        <h4>{{ product.title }}</h4>
      </nuxt-link>
      <p>{{ product.blurb.en }}</p>
      <div class="price">${{ product.defaultProductVariant.price }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    product: {
      required: true,
      // TODO: Better type def
      type: Object,
    },
  },
  computed: {
    productLink() {
      return `/candies/${this.product.id}`
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--med-gray);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;
  overflow: hidden;
}

.image-wrapper {
  height: 300px;
  background-color: white;
}

.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.title-link {
  @include animateLink();

  margin-bottom: 0.5em;
  color: var(--teal);

  & :hover {
    color: var(--teal-light);
  }

  & :active {
    color: var(--teal-dark);
  }
}

.price {
  margin-top: auto;
  color: var(--teal);
}
</style>
