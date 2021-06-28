<template>
  <div>
    <h2>Products</h2>
    <div id="product-grid">
      <Product
        v-for="product in products"
        :key="product._id"
        :product="product"
        :w="300"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { groq } from '@nuxtjs/sanity'

const query = groq`
  {
    "products": *[_type == "product"]
  }
`

export default Vue.extend({
  async asyncData({ $sanity }) {
    // By default it returns a `Promise<unknown>`,
    // but you can customise the type of the return.
    const { products } = await $sanity.fetch(query)
    console.log(products)
    return { products }
  },
})
</script>

<style scoped lang="scss">
#product-grid {
  margin-top: 2em;
  @include itemGrid(300px, 15px, 30px);
}
</style>
