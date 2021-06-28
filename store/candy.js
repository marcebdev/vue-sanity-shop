import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  candies: {},
  candyList: [],
})

export const getters = {
  candySet: (state) => state.candyList.map((id) => state.candies[id]),
}

export const actions = {
  async getCandies({ state, commit }) {
    const query = groq`
      {
        "candies": *[_type == "product"]
      }
    `

    try {
      if (!state.candyList.length) {
        const { candies } = await this.$sanity.fetch(query)
        if (candies) commit('setCandies', candies)
      }
    } catch (error) {
      console.error('Failed to fetch candies')
    }
  },
}

export const mutations = {
  setCandies(state, candies) {
    state.candies = Object.fromEntries(
      candies.map(({ _id: id, ...rest }) => [id, { id, ...rest }])
    )
    state.candyList = candies.map(({ _id }) => _id)
  },
}
