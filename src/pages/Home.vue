<template>
  <Bar/>

  <img src="~assets/img/photo_2022-08-01_07-52-17.jpg" class="img-background">

  <div class="style_card">
    <q-intersection
    :key="index"
    transition="slide-right"
    >
      <div class="row q-mb-lg justify-start ">
          <q-card class="col-3 style_card_first_last rounded">
            <div class="row">
              <div class="col-3 col-sm-3 col-md-4 q-pa-md q-gutter-sm" style="width: 200px; height: 200px;" >
                <img
                alt="Geocuba logo"
                src="~assets/img/Geocuba.png"
                style="width:100%; height: 100%; object-fit: contain;">
              </div>
              <div class="col-8 cols-sm-8 col-md-8 q-pa-md q-gutter-sm" >
                <p style="width: 100%; font-size:x-large; font-family: Times New Roman;
                color:white;">BIBLIOTECA VIRTUAL DE GEOMÁTICA </p>
              </div>
          </div>
          </q-card>
      </div>
    </q-intersection>
    <q-intersection
    :key="index"
    transition="slide-left"
    >
      <div class="row q-mb-lg justify-end">
          <q-card class="col-3 style_card_medium rounded">
            <div class="row justify-end">
              <div class="col-9 cols-sm-8 col-md-8 justify-end q-pa-md q-gutter-sm" >
                <p style="width: 100%; text-align: end; font-size:x-large; font-family: Times New Roman;
                color:white;">REVISTA CUBANA DE GEOMÁTICA </p>
              </div>
              <div class="col-3 col-sm-3 col-md-4 q-pa-md q-gutter-sm" style="width: 200px; height: 200px;  margin: 8px;" >
                <img
                alt="Geocuba logo"
                src="~assets/img/Geocuba.png"
                style="width:100%; height: 100%; object-fit: contain;">
              </div>

          </div>
          </q-card>
      </div>
    </q-intersection>
    <q-intersection
    :key="index"
    transition="slide-right"
    >
      <div class="row q-mb-lg justify-start">
          <q-card class="col-3 style_card_first_last rounded">
            <div class="row">
              <div class="col-3 col-sm-3 col-md-4 q-pa-md q-gutter-sm" style="width: 200px; height: 200px;" >
                <img
                alt="Geocuba logo"
                src="~assets/img/Geocuba.png"
                style="width:100%; height: 100%; object-fit: contain;">
              </div>
              <div class="col-8 cols-sm-8 col-md-8 q-pa-md q-gutter-sm" >
                <p style="width: 100%; font-size:x-large; font-family: Times New Roman;
                color:white;">EVENTOS </p>
              </div>
          </div>
          </q-card>
      </div>
    </q-intersection>



  </div>

  <RelPictureComponent/>
  <CarouselComponent/>
  <My-Footer/>
</template>
<!-- <q-intersection
      v-for="index in 3"
      :key="index"
      transition="slide"
      class="example-item"
    > -->



<script>
  import { defineComponent } from 'vue'
  import Bar from 'src/components/Bar.vue'
  import MyFooter from 'src/components/MyFooter.vue'
  import CarouselComponent from 'src/components/Carousel.vue'
  import RelPictureComponent from 'components/RelPictures.vue'

  export default defineComponent({
    name: 'HomeComponent',

    components: {
      Bar,
      MyFooter,
      CarouselComponent,
      RelPictureComponent
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

  .style_card_first_last
  {
    min-height : 250px;
    width: 55%;
    margin: 60px;
    background : #1E90FF;
    background : rgba(30, 144, 255, 1);
    border-radius : 21px;
    -moz-border-radius : 21px;
    -webkit-border-radius : 21px;
  }

  .style_card_medium
  {
    min-height : 250px;
    width: 55%;
    margin: 60px;
    background : #116CEF;
    background : rgba(17, 108, 239, 1);
    border-radius : 21px;
    -moz-border-radius : 21px;
    -webkit-border-radius : 21px;

  }
</style>
