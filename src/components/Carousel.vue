<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        animated
        control-color="blue"
        navigation
        padding
        prev-icon="arrow_left"
        next-icon="arrow_right"
        arrows
        height="300px"
        class="text-white shadow-1 rounded-borders"
      >
    <q-carousel-slide name="style" class="column no-wrap flex-center">


      <q-card class="my-card"  style="width: 70%">
       <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg" />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-card class="my-card"  style="width: 70%">
       <q-card-section horizontal>
        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax1.jpg" />

        <q-card-section>
          {{ lorem }}
        </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>

        
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>

    </div>
  </div>
</template>


<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  name: 'CarouselComponent',
  //props: {
  //  title: {
  //    type: String,
  //    required: true
  //  },
//
  //  caption: {
  //    type: String,
  //    default: ''
  //  },
//
  //  link: {
  //    type: String,
  //    default: '#'
  //  },
//
  //  icon: {
  //    type: String,
  //    default: ''
  //  }
  //}
  setup () {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }

})





</script>


<style scoped>

.card_bg
{
  background : #F7F7F7;
  background : rgba(247, 247, 247, 1);
  border-style : Solid;
  border-color : #1E90FF;
  border-color : rgba(30, 144, 255, 1);
  border-width : 5px;
  width : 451px;
  height : 290px;
  border-radius : 49px 0px 52px 0px;
  -moz-border-radius : 49px 0px 52px 0px;
  -webkit-border-radius : 49px 0px 52px 0px;
}

.picture_space
{
  background : #999999;
  background : rgba(153, 153, 153, 1);
  width : 178px;
  height : 178px;
  border-radius : 48px 0px 0px 0px;
  -moz-border-radius : 48px 0px 0px 0px;
  -webkit-border-radius : 48px 0px 0px 0px;
}
  </style>
