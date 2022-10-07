<template>
  <q-item
    clickable
  >
    <!-- <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section> -->
 
    <q-tree
          :nodes="simple"
          node-key="label"
          no-connectors
          color="white"
          control-color="white"
          text-color="white"
          selected-color="white"
          v-model:expanded="expanded"
          v-model:selected="selected"
        />
  <!-- <q-icon :tag="icon"/> -->
  <!-- <q-select borderless v-model="model" :options="options" label="Borderless" />
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section> -->
  </q-item>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  // props: {
  //   label: {
  //     type: String,
  //     required: true
  //   },

    // caption: {
    //   type: String,
    //   default: ''
    // },

    // link: {
    //   type: String,
    //   default: '#'
    // },

    // icon: {
    //   type: String,
    //   default: ''
    // },
    // children:{
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // },
    // expanded: {
    //   type: Array,
    //   default(){
    //     return []
    //   }
    // }
  // },

  // const links = {

  // }
  setup () {
    function onclick(node) {
          alert(node.label)
        }

    return {
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      expanded: ref([ 'FUENTES BIBLIOGRÁFICAS', 'PROYECTOS' ]),
      selected: ref('PROYECTOS'),
     
      simple: [
        {
          label: 'FUENTES BIBLIOGRÁFICAS',
          // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [
            {
              label: 'Catálogos',
              handler: (node) => onclick(node),

              selectable: true
              // icon: 'restaurant_menu'//,
              // children: [
              //   { label: 'Quality ingredients' },
              //   { label: 'Good recipe' }
              // ]
            },
            {
              label: 'Artículos',
              // icon: 'room_service',
              // disabled: true,
              // children: [
              //   { label: 'Prompt attention' },
              //   { label: 'Professional waiter' }
              // ]
            },
            {
              label: 'Tesis',
              // icon: 'photo',
              // children: [
              //   {
              //     label: 'Happy atmosphere (with image)',
              //     img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
              //   },
              //   { label: 'Good table presentation' },
              //   { label: 'Pleasing decor' }
              // ]
            },
            {
              label: 'Boletines',
              // icon: 'restaurant_menu'//,
              // children: [
              //   { label: 'Quality ingredients' },
              //   { label: 'Good recipe' }
              // ]
            },
            {
              label: 'Revistas',
              // icon: 'restaurant_menu'//,
              // children: [
              //   { label: 'Quality ingredients' },
              //   { label: 'Good recipe' }
              // ]
            },  
          ]
        },
        {
          label: 'PROYECTOS',
          // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [
            {
              label: "Thing"
            }
          ],
          selectable: true,
          expandable: true
        },
        {
          label: 'CATEGORIZACIÓN CIENTÍFICA',
          // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [],
          selectable: true
        },
        {
          label: 'MAESTRÍAS Y DOCTORADOS',
          // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: [],
          expandable: true
        },
        {
          label: 'CURSOS',
          // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: []
        },
        {
          label: 'MÉRITOS CIENTÍFICOS',
          // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
          children: []
        },
      ],
      onclick
    }
  }
  
})
</script>

<style scoped>
  div{
    font-family : Berlin Sans FB Demi;
    font-weight : bold;
    font-size : 15px;
  }
</style>