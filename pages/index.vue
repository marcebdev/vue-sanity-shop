<template>
  <div>
    <h2>Candies</h2>
    <div id="product-grid">
      <Product
        v-for="candy in candySet"
        :key="candy.id"
        :product="candy"
        :w="300"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async fetch({ store }) {
    await store.dispatch('candy/getCandies')
  },
  computed: {
    ...mapGetters({ candySet: 'candy/candySet' }),
  },
})
</script>

<style scoped lang="scss">
#product-grid {
  margin-top: 2em;
  @include itemGrid(300px, 15px, 30px);
}
</style>
