<template>
  <AppCard class="pt-16">
    <div v-if="category.icon" class="text-green icon-shadow -mt-4 mb-8"><i class="block text-6xl" :class="`fa fa-${category.icon}`"></i></div>
    <div class="text-xl font-bold">{{category.title}}</div>
    <a v-on:click="routeTo($event, category.id)" :href="`/categories/${category.id}`" class="block text-green mt-8 text-lg hover:text-green-2">{{category.totalArticle}} articles</a>
    <div class="text-gray text-sm">Last update {{moment(category.updatedOn).fromNow()}}</div>
  </AppCard>
</template>

<script>
import AppCard from '@/components/Card'

export default {
  name: 'CategoryBox',
  props: {
    category: {
      type: Object
    }
  },
  components: {
    AppCard
  },
  methods: {
    routeTo (ev, id) {
      ev.preventDefault()
      this.$router.push({ name: 'category_articles', params: { id } })
    }
  }
}
</script>
