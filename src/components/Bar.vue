<template>
  <q-toolbar-title>
  <div>

    <q-bar class="style_bar_text1">
      <img
      alt="Geocuba logo"
      src="~assets/img/Geocuba.png"
      style="width: 60px; height: 50px"
      >
      <div class="style_bar_text2">
        <p>Centro de Información y Superación Científico Tecnológica</p>
      </div>
      <q-space/>
      <q-btn flat size="30px" class="style_bar_text3">INICIO </q-btn>
      <q-btn flat size="30px" class="style_bar_text3">EMPRESA</q-btn>
      <q-btn flat size="30px" class="style_bar_text3">QUIENES SOMOS</q-btn>
      <div>
        <q-input class="style_navbar" label-color="blue" bg-color="white" rounded outlined label="Buscar">
          <template  v-slot:append>
            <q-icon color="blue" name="search"/>
          </template>
          <!-- <q-btn flat round dense icon="search"/> -->
          <!-- <q-btn flat round dense icon="search"></q-btn> -->
        </q-input>
      </div>
      <div>
      <q-btn flat class="style_bar_text4">Entrar</q-btn>
      </div>


    </q-bar>
  </div>
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
  .style_bar_text1
  {
    background : #367fe6;
    height : 75px;
    width: 100%;
  }

  .style_bar_text2
  {
    font-family: Times New Roman;
    color:white;
    max-width: 2px;
    font-size : 25px;
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
