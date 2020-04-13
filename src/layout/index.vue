
<template>
  <div id="app" class="">
    <Header />

    <div class="bg-gray-1">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'AppLayout',
  components: {
    Header,
    Footer
  }
}
</script>
