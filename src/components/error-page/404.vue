<template>
  <error-content :src="src" code="404" desc="Oh~~您的页面好像飞走了~"/>
</template>

<script>
import error404 from '@/assets/images/error-page/error-404.svg'
import errorContent from './error-content.vue'

export default {
  name: 'Error404Page',
  components: {
    errorContent
  },
  data() {
    return {
      src: error404
    }
  }
}
</script>
