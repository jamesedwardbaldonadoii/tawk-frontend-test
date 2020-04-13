<template>
  <div class="twk-container">
    <div class="flex flex-wrap justify-center pt-24">
      <div  class="w-1/3 text-center card-space in-left in-bottom" v-for="item in categories" :key="item.id">
        <CategoryBox :category="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CategoryBox from '@/template/categoryBox'

export default {
  name: 'IndexPage',
  components: {
    CategoryBox
  },
  methods: {
    fetchData () {
      this.$store.dispatch('categories/getList')
    }
  },
  computed: {
    ...mapState('categories', {
      categories: 'items'
    }),
    ...mapGetters('categories', [
      'categories'
    ])
  },
  created () {
    if (!this.categories.length) {
      this.fetchData()
    }
  }
}
</script>
