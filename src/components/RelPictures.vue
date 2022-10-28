<template>
  <div class="flex flex-center">

    <div class="column example-container">

      <div class="flex-break hidden"></div>
      <div class="flex-break"></div>
      <div class="flex-break"></div>

      <div v-for="imge in images" :key="imge.num" class="example-cell q-ma-md" tabindex="0">
        <div>
          <q-card class="my-card">
            <q-img :src='imge.source'>
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {

  name: 'RelPictureComponent',

  setup () {

    return {
      images:[{num:'1', source:"assets/img/Geo.png"},
      {num:'2', source:"assets/img/Geocuba.png"},
      {num:'3', source:"assets/img/dron-cielo-vuelo_253.jpg"},
      {num:'4', source:"assets/img/photo_2022-07-28_22-00-40.jpg"},
      {num:'5', source:"assets/img/photo_2022-08-03_10-17-46.jpg"},
      {num:'6', source:"assets/img/Geo.png"},
      {num:'7', source:"assets/img/Geocuba.png"},
      {num:'8', source:"assets/img/Geo.png"},
      {num:'9', source:"assets/img/photo_2022-08-03_10-17-46.jpg"},

             ],

    }
  }
}


</script>

<style lang="sass" scoped>
.flex-break
  flex: 1 0 100% !important
  width: 0 !important

$x: 3

@for $i from 1 through ($x - 1)
  .example-container > div:nth-child(#{$x}n + #{$i})
    order: #{$i}

.example-container > div:nth-child(#{$x}n)
   order: #{$x}

.example-container
  height: 1000px
  width: 70em

  .example-cell
    width: 33%
    padding: 1px

</style>
