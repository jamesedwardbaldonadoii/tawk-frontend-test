import homePage from '../pages/Home.vue'
import articlesPage from '../pages/Articles.vue'
import notFoundPage from '../pages/NotFound.vue'

// import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: {
      title: `${DOMAIN_TITLE} | Home`
    }
  },
  {
    path: '/categories/:id',
    name: 'category_articles',
    component: articlesPage,
    meta: {
      title: `${DOMAIN_TITLE} | Article`,
      breadcrumb: [
        {
          name: 'All Categories',
          link: '/'
        }
      ]
    }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | Not found` }
  }
]
