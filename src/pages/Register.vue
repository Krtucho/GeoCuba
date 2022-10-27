<template>
  <!-- <div class="q-pa-md">
  <div class=" row ">
  <q-input class="col-xs-12 col-sm-6 col-md-3" label="nombre"></q-input>
  </div>

  </div> -->
 <img src="assets/img/dron-cielo-vuelo_253.jpg" class="img-background">

 <div class="my-div row absolute-center">
   <q-card class="registrate-card row justify-center">
     <q-card-section>
        <div class="autenticacion_text">Registro</div>
      </q-card-section>

    <q-card-section>
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-card style="box-shadow: none;">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              active-bg-color="#dbdbdb"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab class="number-one" name="mails"  label="1" />
              <q-tab name="alarms"  label="2"/>
              <q-tab name="movies"  label="3"/>
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated class="bg-panel">
              <q-tab-panel infinite name="mails" >
                <div class="personal-info">Información personal</div>
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
                <div class="column justify-evenly q-my-xs">
                  <input class="row q-mb-md" placeholder="nombre">
                  <input class="row q-mb-md" placeholder="apellidos">
                  <input class="row q-mb-md" placeholder="nombre de usuario">

                  <div class="row justify-end">
                    <q-btn push round color="primary" icon="card_giftcard" />
                  </div>
                </div>


              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="personal-info">Información del Centro</div>
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
                <div class="column justify-evenly q-my-xs">
                  <input class="row q-mb-md" placeholder="nombre de empresa">
                  <input class="row q-mb-md" placeholder="cargo">

                  <div class="row justify-end">
                    <q-btn push round color="primary" icon="card_giftcard" />
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="personal-info">Seguridad</div>
                <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
                <div class="column justify-evenly q-my-xs">
                  <input class="row q-mb-md" placeholder="contraseña">
                  <input class="row q-mb-md" placeholder="verificar contraseña">
                  <input class="row q-mb-md" placeholder="correo electrónico">

                  <div class="row justify-center">
                    <q-btn push no-caps text-color="white" color="primary" label="Entrar" />
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>

          <!-- <q-card>
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="alarms">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>

            <q-separator />

            <q-tabs
              v-model="tab"
              dense
              class="bg-grey-3"
              align="justify"
              narrow-indicator
            >
              <q-tab name="mails" label="Mails" />
              <q-tab name="alarms" label="Alarms" />
              <q-tab name="movies" label="Movies" />
            </q-tabs>
          </q-card> -->
        </div>
      </div>
    </q-card-section>
      <!--<q-card-section>
        <q-input :input-class="{ 'register_input_bg': isInput }" use-input outlined v-model="text"  label="Outlined" />
         <q-input :input-style="{  borderRadius : '12px'}" outlined v-model="text"  label="Outlined" />
        <div class="register_input_bg"></div>
      </q-card-section>-->

      <!-- <q-card-section>
        <q-input standout  outlined v-model="text" label="nombre de usuario" />
        <input placeholder="nombre de usuario">
      </q-card-section>
      <q-card-section >
        <q-input rounded outlined v-model="text" label="contraseña" />
        <input placeholder="contraseña">

      </q-card-section> -->

      <!-- <q-card-section style="margin-top: 0px; padding-top: 0px;">
        <a href="#" class="desea_crearse_una_cuenta_text">
          Desea crearse una cuenta?
        </a>
      </q-card-section>

      <q-card-section>
        <q-btn push no-caps text-color="white" color="primary" label="Entrar" />
      </q-card-section>

      <q-card-section>
        <a href="#" class="desea_crearse_una_cuenta_text" style="font-size: 17px;">
          Ha olvidado su contraseña?
        </a>
      </q-card-section> -->
    </q-card>
 </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "RegisterPage",

  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      isInput: true,
      tab: ref('mails')
    }
  }

})
</script>

<style lang="sass" scoped>
input
  /* background: #FEFEFE */
  background: rgba(254, 254, 254, 1)
  border-style: Solid
  /* border-color : #3D3D3D */
  border-color: rgba(61, 61, 61, 1)
  border-width: 1px
  width: 186px
  height: 42px
  border-radius: 12px
  padding-left: 5%
  -moz-border-radius: 12px
  -webkit-border-radius: 12px

/* input::placeholder
  color: red
  font-size: 1.2em
  font-style: italic */


.img-background
  position: absolute
  width: 100%
  height: 100%
  object-fit: cover
.registrate-card
  width: 100%
  max-width: 250px
  min-width: fit-content
  height: 100%
  border-style: Solid
  border-color: #DBDBDB
  border-color: rgba(219, 219, 219, 1)
  border-width: 1px
  border-radius: 36px
  -moz-border-radius: 36px
  -webkit-border-radius: 36px
  //background: #F7F7F7
  background: rgba(247, 247, 247, 1)
  box-shadow: 8px 10px 10px 1px rgba(0,0,0,0.5)
//.my-div
  //width: 100%
  //margin: 0
  //padding: 0
.autenticacion_text
  font-family: Berlin Sans FB Demi
  font-weight: bold
  font-size: 3em
  color: #43AAFF
  color: rgb(67, 170, 255)
.desea_crearse_una_cuenta_text
  font-family: Myriad Pro
  font-size: 1.4em
  color: rgb(36, 156, 255)
  text-decoration: none
  //color: #249CFF

.register_input_bg
  background: #FEFEFE
  background: rgba(254, 254, 254, 1)
  border-style: Solid
  border-color: #3D3D3D
  border-color: rgba(61, 61, 61, 1)
  border-width: 1px
  // width : 186px
  // height : 42px
  border-radius: 12px
  -moz-border-radius: 12px
  -webkit-border-radius: 12px

.enter-btn
  background: #43AAFF
  background: rgba(67, 170, 255, 1)
  border-style: Solid
  border-color: #43AAFF
  border-color: rgba(67, 170, 255, 1)
  border-width: 1px
  width: 104px
  height: 32px
  border-radius: 12px
  -moz-border-radius: 12px
  -webkit-border-radius: 12px

//tab items
/* .number-one
  background-color: rgb(5, 143, 153)  */
.personal-info
  font-family: Trebuchet MS
  font-weight: bold
  font-size: 1.2em
  color: #058F99
  /* color: rgb(5, 143, 153) */

.bg-panel
  background-color: #F7F7F7
</style>
