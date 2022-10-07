<template>
  <q-page class="flex flex-center">

<CarouselComponent/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CarouselComponent from 'components/Carousel.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    CarouselComponent
  }
})
</script>
