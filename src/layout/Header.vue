<template>
  <div id="header-wrapper" class="text-center pt-24 pb-10 text-black-1">
    <h1 class="text-2xl font-bold">Knowledge base doesn't have to be boring</h1>
    <h3 class="text-lg">Everything you need to manage your messaging</h3>

    <div class="m-auto max-w-xl p-4">
      <AppInput height="40px" placeholder="Search for answers" value="">
        <div slot="after" class="h-full py-2 px-3 bg-green text-white">
          <i class="fa fa-search"></i>
        </div>
      </AppInput>
    </div>
  </div>
</template>

<script>

import AppInput from '@/components/Input'

export default {
  name: 'Login',
  components: {
    AppInput
  }
}

</script>
