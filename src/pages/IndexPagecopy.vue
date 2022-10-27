<template>
  <q-page class="flex flex-center">

<!-- <FooterComponent/> -->
<CarouselComponent/>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CarouselComponent from 'components/Carousel.vue'
// import FooterComponent from 'components/Footer.vue'


export default defineComponent({
  name: 'IndexPage',
  components:{
    // FooterComponent,
   CarouselComponent,

  }
})
</script>
