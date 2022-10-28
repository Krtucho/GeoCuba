<template>
  <q-toolbar-title class="style_bar">

    <q-bar class="style_bar_text1 row">

      <div class="col-6 col-sm-6 col-md-4">
        <div class="row">
          <img
          alt="Geocuba logo"
          src="~assets/images/Geocuba.png"
          style="width: 2.5em; height: 2.5em"
          class="col-6 col-sm-5 col-md-4"
          >
          <div class="col-12 style_bar_text2 col-sm-12 col-md-4">
            <p>Centro de Información y Superación Científico Tecnológica</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-5 col-md-6">
        <div class="row">
          <div class="col-6 col-sm-3 col-md-3">
            <q-btn flat size="30px" class="col-sm-3 col-md-3 style_bar_text3">INICIO </q-btn>
            <q-btn flat size="30px" class="col-sm-3 col-md-3 style_bar_text3">EMPRESA</q-btn>
            <q-btn flat size="30px" class="col-sm-3 col-md-3 style_bar_text3">QUIENES SOMOS</q-btn>
          </div>
          <div class="col-3 col-sm-3 col-md-3">
            <q-input class="style_navbar" label-color="blue" bg-color="white" rounded outlined label="Buscar">
              <template  v-slot:append>
                <q-icon color="blue" name="search"/>
              </template>
              <!-- <q-btn flat round dense icon="search"/> -->
              <!-- <q-btn flat round dense icon="search"></q-btn> -->
            </q-input>
          </div>
          <div class="col-3 col-sm-2 col-md-2">
            <q-btn flat class="style_bar_text4">Entrar</q-btn>
          </div>
        </div>

      </div>


    </q-bar>
</q-toolbar-title>

  <!-- <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item> -->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarComponent',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
  .style_bar
  {
    padding: 0%;
  }
  .style_bar_text1
  {
    background : #367fe6;
    height : 100%;
    width: 100%;
  }

  .style_bar_text2
  {
    font-family: Times New Roman;
    color:white;
    font-size : 1.7em;
    max-width: 5%;
  }
  .style_navbar
  {
    width: 150px;

  }
  .style_bar_text3
  {
    font-size: 25px;
    color:white;
    font-family : Berlin Sans FB Demi;
    height : 75px;
  }
  .style_bar_text4
  {
    color: white;
    border-color:white;
    border-radius : 5px;
    -moz-border-radius : 5px;
    -webkit-border-radius : 5px;
    border-style : solid;
    border-width : 2px;
    padding: 5px;
  }
</style>
