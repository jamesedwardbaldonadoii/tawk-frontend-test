<template>
  <div class="relative">
    <div class="twk-container twk-article">
      <AppBreadcrumb class="py-6" />

      <div class="flex">
        <div class="w-1/3 flex-none text-center">
          <AppCard class="pt-16 relative px-0" v-if="category">
            <div class="text-gray absolute text-lg top-10 right-10">
              <i class="fa fa-file-alt text-green"></i> {{category.totalArticle}}
            </div>
            <div class="text-green icon-shadow -mt-4 mb-8"><i class="block text-6xl" :class="`fa fa-${category.icon}`"></i></div>
            <div class="text-xl font-bold">{{category.title}}</div>
            <div class="text-gray">Updated {{moment(category.updatedOn).fromNow()}}</div>
            <div class="border-t border-solid border-gray-3 mt-6 px-6">
              <i class="fa fa-info-circle text-xl text-green mt-8 mb-6"></i>
              <div class="text-gray">{{category.description}}</div>
            </div>
          </AppCard>
        </div>

        <div class="pl-10 w-2/3 flex-1" v-show="!article">
          <div class="box-space in-bottom next-card" v-for="item in articles" :key="item.id">
            <AppCard class="flex items-center p-6">
              <div class="w-20"><i class="block text-6xl text-green" :class="`fa fa-${item.icon}`"></i></div>
              <div class="pl-8 flex-1">
                <div class="text-3xl">{{item.title}}</div>
                <div class="text-gray">Updated {{moment(item.updatedOn).format('MMM DD, YYYY')}}</div>
              </div>
              <div class="cursor-pointer" v-on:click="openArticle(item)"><i class="block text-6xl text-green fa fa-angle-right"></i></div>
            </AppCard>
          </div>
        </div>

        <div class="pl-10 w-2/3 flex-1" v-if="article">
          <div class="mb-4 align-middle flex justify-center items-center">
            <i v-on:click="closeArticle" class="fa fa-angle-left text-green hover:text-green-2 cursor-pointer align-middle mt--1 mr-4 text-3xl"></i>
            <div class="flex-1">
              <div class="text-xl text-black-1">{{article.title}}</div>
              <div class="text-sm text-gray">Author: {{articleAuthor}}</div>
              <div class="text-sm text-gray">Created: {{moment(article.createdOn).format('MMM DD, YYYY')}}</div>
            </div>
          </div>
          <div class="text-gray">{{article.content}}</div>
        </div>

      </div>
    </div>

    <div class="p-10 mt-20 border-t border-solid border-gray-3">
      <div class="text-center text-gray text-xl mb-8">Other Categories</div>
      <div class="twk-container" v-if="categories.length">
        <AppCarousel :categories="excludeCurrentCategoryList" />
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex'

import { ArticlesService } from '@/services/articles.service'
import { AuthorsService } from '@/services/authors.service'
import AppCard from '@/components/Card'
import AppBreadcrumb from '@/components/Breadcrumb'
import AppCarousel from '@/components/Carousel'

export default {
  name: 'Articles',
  components: {
    AppCard,
    AppBreadcrumb,
    AppCarousel
  },
  data () {
    return {
      articles: null,
      article: null,
      author: null
    }
  },
  methods: {
    fetchArticleData () {
      ArticlesService.getArticles()
        .then(response => {
          this.articles = response.data
        })
    },
    fetchCategoriesData () {
      this.$store.dispatch('categories/getList')
    },
    getAuthor () {
      AuthorsService.getAuthor(this.article.authorId)
        .then(response => {
          console.log(response)
          this.author = response.data
        })
    },
    openArticle (article) {
      this.article = article
      this.getAuthor()
    },
    closeArticle () {
      this.article = null
    }
  },
  computed: {
    ...mapState('categories', {
      categories: 'items'
    }),
    ...mapGetters('categories', [
      'getCategoryById'
    ]),
    category () {
      let category = this.getCategoryById(this.$route.params.id)

      if (!category) {
        this.fetchCategoriesData()
        category = this.categories.find(cat => cat.id === this.$route.params.id)
      }

      return category
    },
    excludeCurrentCategoryList () {
      return this.categories.filter(cat => cat.id !== this.$route.params.id)
    },
    articleAuthor () {
      return this.author ? this.author.name : ''
    }
  },
  watch: {
    $route (to, from) {
      this.article = null
    }
  },
  mounted () {
    this.fetchArticleData()
  }
}
</script>
