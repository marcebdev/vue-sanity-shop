<template>
  <div class="flex-wrapper">
    <div class="image-wrapper">
      <img
        v-if="candy.defaultProductVariant.images[0]"
        :src="$urlFor(candy.defaultProductVariant.images[0]).height(300)"
        :alt="candy.title"
        loading="lazy"
        class="image"
      />
    </div>

    <div class="content">
      <h1 class="title">{{ candy.title }}</h1>
      <div class="price">${{ candy.defaultProductVariant.price }}</div>
      <p>{{ candy.blurb.en }}</p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        suscipit, explicabo accusantium eius quibusdam cupiditate doloribus
        repellendus nihil delectus blanditiis sint reiciendis! Ab laudantium
        eius quas dignissimos perspiciatis, natus hic.
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  async fetch({ store }) {
    await store.dispatch('candy/getCandies')
  },
  computed: {
    ...mapGetters({ candySet: 'candy/candySet' }),
    candy() {
      return this.candySet.find(({ id }) => id === this.$route.params.id)
    },
  },
})
</script>

<style scoped lang="scss">
.flex-wrapper {
  display: flex;
  flex-direction: row;

  & > :first-child {
    margin-right: 4em;
  }
}

.image-wrapper {
  flex: 1 0;
  height: 300px;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;
  overflow: hidden;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.content {
  flex: 1 0;
  & > *:not(:last-child) {
    margin-bottom: 0.25em;
  }
}

.title {
  color: var(--teal-dark);
}

.price {
  font-size: 20px;
  color: var(--teal);
}
</style>
