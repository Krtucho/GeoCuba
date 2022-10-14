<template>
  <Bar/>

  <img src="~assets/img/photo_2022-08-01_07-52-17.jpg" class="img-background">

  <div class="style_card">

    <transition appear>
      <q-card size="25px" class="style_card_text1">
        <q-btn>Hola</q-btn>
      </q-card>
    </transition>


    <q-card class="style_card_text2">
      <p>Holaaaa</p>
    </q-card>
    <q-card class="style_card_text3">
      <p>Holaaaa</p>
    </q-card>
  </div>
  <Carousel/>
  
  <MyFooter class="q-px-none" style="width: 100%;"/>
    


</template>
<!-- <q-intersection
      v-for="index in 3"
      :key="index"
      transition="slide"
      class="example-item"
    > -->



<script>
  import { defineComponent } from 'vue'
  import Bar from 'components/Bar.vue'
  import Carousel from 'components/Carousel.vue'
  import MyFooter from 'src/components/MyFooter.vue'

  export default defineComponent({
    name: 'HomeComponent',

    components: {
      Bar,
      Carousel,
      MyFooter
    },

  })
</script>

<style scoped>

  .img-background
  {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover
  }
  .style_card
  {

  }

  .style_card_text1
  {
    height : 200px;
    width: 55%;
    margin: 60px;
  }
  .style_card_text2
  {
    height : 200px;
    width: 55%;
    margin: 60px;
  }
  .style_card_text3
  {
    height : 200px;
    width: 55%;
    margin: 60px;
  }
</style>
