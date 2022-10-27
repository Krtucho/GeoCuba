<template>
 <div>
 <q-carousel-slide name={{name}} class="row no-wrap flex-center">
 <q-card class="card_bg q-mx-md">
    <q-card-section horizontal class="picture_space">

      <img class="col-5" :src='source1' />

      <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
          <p style="color:black; text-overflow: ellipsis;">{{text1}}</p>
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

      <img class="col-5" :src='source2' />

      <q-card-section>
        <div style="height:80%;  text-overflow: ellipsis;">
          <p style="color:black; text-overflow: ellipsis;">{{text2}}</p>
        </div>

        <q-separator />

        <q-card-actions>
           <q-btn flat><a href="#"> Ver más >></a></q-btn>
        </q-card-actions>
      </q-card-section>

    </q-card-section>
  </q-card>
  </q-carousel-slide>
 </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CarouselSlideComponent',
  props: {
    source1: {
      type: String,
      required: true
    },
    source2: {
      type: String,
      required: true
    },
    text1: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },

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

