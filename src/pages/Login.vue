<template>
  <!-- <div class="q-pa-md">
  <div class=" row ">
  <q-input class="col-xs-12 col-sm-6 col-md-3" label="nombre"></q-input>
  </div>

  </div> -->
 <div class="my-div row absolute-center">
   <q-card class="my-card">
     <q-card-section>
        <div class="text-h6 autenticacion_text">Autenticación</div>
      </q-card-section>

      <!--<q-card-section>
        <q-input :input-class="{ 'register_input_bg': isInput }" use-input outlined v-model="text"  label="Outlined" />
         <q-input :input-style="{  borderRadius : '12px'}" outlined v-model="text"  label="Outlined" /> 
        <div class="register_input_bg"></div>
      </q-card-section>-->
    
      <q-card-section>
        <q-input rounded outlined v-model="text" label="nombre de usuario" />
      </q-card-section>
      <q-card-section>
        <q-input rounded outlined v-model="text" label="contraseña" />
      </q-card-section>

      <q-card-section vertical align="center">
        <a href="#">
          Desea crearse una cuenta?
        </a>
      </q-card-section>

      <q-card-section vertical align="center">
        <q-btn push color="primary" label="Disabled" />
      </q-card-section>

      <q-card-section vertical align="center">
        <a href="#">
          Ha olvidado su contraseña?
        </a>
      </q-card-section>
    </q-card>
 </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LoginPage",

  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isInput: true
    }
  }

})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  height: 100%
  border-style: Solid
  border-color: #DBDBDB
  border-color: rgba(219, 219, 219, 1)
  border-width: 1px
  border-radius: 36px
  -moz-border-radius: 36px
  -webkit-border-radius: 36px
//.my-div
  //width: 100%
  //margin: 0
  //padding: 0
.autenticacion_text
  font-family : Berlin Sans FB Demi
  font-weight : bold
  font-size : 2.5em
  color : #43AAFF
  color : rgb(67, 170, 255)
.register_input_bg
  background : #FEFEFE
  background : rgba(254, 254, 254, 1)
  border-style : Solid
  border-color : #3D3D3D
  border-color : rgba(61, 61, 61, 1)
  border-width : 1px
  // width : 186px
  // height : 42px
  border-radius : 12px
  -moz-border-radius : 12px
  -webkit-border-radius : 12px

</style>
