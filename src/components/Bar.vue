<template>
  <q-toolbar-title class="style_bar">

    <q-bar class="style_bar_text1">
      <div class="row justify-between" style="width:100%;">
        <!-- <div class="row style_bar_text1"> -->
          <div class="col-12 col-sm-12 col-md-6 justify-between">
            <div class="row">
              <img
              class="col-3 col-sm-5 col-md-4"
              alt="Geocuba logo"
              src="~assets/images/Geocuba.png"
              style="width: 4em; height: 4em">

              <div class="col-11 col-sm-12 col-md-8 style_bar_text2 justify-center">
                <div class="row">
                    <p class="col-12 col-sm-12 col-md-12" style="margin: 0 0 0px;">Centro de Información y</p>
                    <p class="col-12 col-sm-12 col-md-12" style="margin: 0 0 0px;">Superación Científico Tecnológica</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 justify-between">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-8">
                <div class="row">
                  <q-btn class="col-12 col-sm-4 col-md-3 style_bar_text3" flat size="1.8em" >INICIO </q-btn>
                  <q-btn class="col-12 col-sm-4 col-md-3.5 style_bar_text3" flat size="1.8em" >EMPRESA</q-btn>
                  <q-btn class="col-12 col-sm-4 col-md-4 style_bar_text3" flat size="1.8em" >QUIENES SOMOS</q-btn>
                </div>
              </div>
              <div class="col-5 col-sm-6 col-md-4" style="margin-top: 0.5em;">
                <div class="row justify-between">
                  <div class="col-6 col-sm-6 col-md-6 justify-center">
                    <q-input  label-color="blue" bg-color="white" rounded outlined label="Buscar">
                      <template  v-slot:append>
                        <q-icon color="blue" name="search"/>
                      </template>
                      <!-- <q-btn flat round dense icon="search"/> -->
                      <!-- <q-btn flat round dense icon="search"></q-btn> -->
                    </q-input>
                  </div>
                  <div class="col-6 col-sm-12 col-md-4 items-center" style="margin-top: 3%; margin-right: 5%;">
                    <q-btn flat class=" style_bar_text4">Entrar</q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <!-- </div> -->
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
    margin: 0 0 0px;
    padding: 0 0px;
  }

  .style_bar_text2
  {
    font-family: Times New Roman;
    color:white;
    font-size : 1.7em;
	  margin: 0 0 0px;
    margin-left: 1.5em;
  }
  .style_navbar
  {
    width: 150px;
    margin: 0 0 0px;

  }
  .style_bar_text3
  {
    font-size: 25px;
    color:white;
    font-family : Berlin Sans FB Demi;
    height : 75px;
    /* margin: 0 0 0px; */
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
    margin: 0 0 0px;
    height: 20%;
    /* padding: 5px; */
  }
</style>
