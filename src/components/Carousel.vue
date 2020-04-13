<template>
  <div class="relative w-full h-84">
    <div class="slides-group">
      <div v-if="show" :key="previous" class="box-space slide left"><CategoryBox  :category="categories[previous]" /></div>
      <div v-if="show" :key="current" class="box-space in-left slide middle"><CategoryBox :category="categories[current]" /></div>
      <div v-if="show" :key="next" class="box-space in-left slide right"> <CategoryBox :category="categories[next]" /></div>
    </div>
    <div class="navigator" aria-label="Previous slide" @click="slide(-1)">
      <i class="fa fa-angle-left text-2xl"></i>
    </div>
    <div class="navigator next" aria-label="Next slide" @click="slide(1)">
      <i class="fa fa-angle-right text-2xl"></i>
    </div>
  </div>
</template>

<script>
import CategoryBox from '@/template/categoryBox'

export default {
  name: 'Carousel',
  components: {
    CategoryBox
  },
  props: {
    categories: {
      type: Array
    }
  },
  data () {
    return {
      current: 0,
      direction: 1,
      show: false,
      next: 0,
      previous: 0
    }
  },
  methods: {
    slide (dir) {
      this.direction = dir

      const len = this.categories.length

      this.current = (this.current + dir % len + len) % len
      this.next = (this.current === len - 1) ? 0 : (this.current + 1)
      this.previous = this.current ? (this.current - 1) : (len - 1)
    }
  },
  mounted () {
    this.show = true

    if (this.categories.length > 1) {
      this.next = 1
    }

    if (this.categories.length > 2) {
      this.previous = this.categories.length - 1
    }
  }
}
</script>
