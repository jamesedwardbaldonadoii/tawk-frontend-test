<template>
  <div class="twk-breadcrumb">
    <ul>
      <li v-for="(breadcrumb, idx) in breadcrumbs"
      @click="routeTo(idx)"
      :key="idx">
        <i v-if="idx" class="fa fa-angle-right separator"></i>{{breadcrumb.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  data () {
    return {
      breadcrumbs: []
    }
  },
  mounted () {
    this.updateList()
  },
  watch: {
    '$route' () {
      this.updateList()
    }
  },
  methods: {
    routeTo (route) {
      if (this.breadcrumbs[route].link) {
        this.$router.push(this.breadcrumbs[route].link)
      }
    },
    updateList () {
      this.breadcrumbs = [...this.$route.meta.breadcrumb]

      if (this.$route.params) {
        this.breadcrumbs.push({
          name: this.$route.params.id.replace('-', ' ')
        })
      }
    }
  }
}
</script>
