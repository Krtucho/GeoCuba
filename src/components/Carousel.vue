<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        animated
        control-color="blue"
        padding
        infinite
        :autoplay="5000"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        arrows
        height="300px"
        class="text-white rounded-borders"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
<q-carousel-slide name="1" class="row no-wrap flex-center">
  <q-card class="card_bg q-mx-md">
        <q-img class="col-5 picture_space_main" src="~assets/img/photo_2022-08-03_10-17-46.jpg" />
    </q-card>


  <q-card class="card_bg q-mx-md">
    <q-card-section horizontal class="picture_space">

      <q-img class="col-5" src="~assets/img/photo_2022-08-03_10-18-20.jpg" />

      <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
          <p style="color:black; text-overflow: ellipsis;">La Unidad Científico Técnica GEOCUBA Investigación y Consultoría constituye el soporte científico metodológico del Grupo Empresarial GEOCUBA, creado para realizar los proyectos de investigación y desarrollo cientí­fico técnico y ...</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>

    </q-card-section>
  </q-card>


        </q-carousel-slide>

    <q-carousel-slide name="2" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

        <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>

    </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

          <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>

    <q-carousel-slide name="3" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

          <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

         <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>



    <q-carousel-slide name="4" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

          <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

           <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>


    <q-carousel-slide name="5" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

          <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

       <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>


    <q-carousel-slide name="6" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

         <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

     <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>

          <q-carousel-slide name="7" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

         <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

     <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

        </q-carousel-slide>

          <q-carousel-slide name="8" class="row no-wrap flex-center">
       <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

         <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

      <q-card class="card_bg q-mx-md">
       <q-card-section horizontal class="picture_space">
        <q-img class="col-5" src="~assets/img/Geo.png" />

     <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
         <p style="color:black">{{ lorem }}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>
      </q-card-section>
    </q-card>

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
  setup () {
    return {
      slide: ref('1'),
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
  border-width : 4px;
  width : 451px;
  height : 95%;
  -webkit-border-radius : 50px 0px 50px 0px;
}

.picture_space
{
  width : 100%;
  height : 100%;
  -webkit-border-radius : 40px 0px 0px 0px;
}
.picture_space_main
{
  width : 100%;
  height : 100%;
  -webkit-border-radius : 40px 0px 40px 0px;
}
  </style>
