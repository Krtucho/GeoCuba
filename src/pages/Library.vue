<template>
  <!-- <div class="q-pa-md">
  <div class=" row ">
  <q-input class="col-xs-12 col-sm-6 col-md-3" label="nombre"></q-input>
  </div>

  </div> -->
 <img src="assets/img/photo_2022-07-28_22-00-40.jpg" class="img-background">

  <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "LibraryPage",

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
