<template>
  <div>
    <q-footer  class="footerdiv">
      <q-toolbar>

<div class="column">
    <div class="row"  style="height: 150px">
         
          <div class="col-5">
            <img src="~assets/img/Geocuba.png" style="width: 30%;" class="q-pa-md q-pa-lg">
            <img src="~assets/img/Geo.png" style="width: 40%;" class="q-pa-md q-pa-lg">
          </div>

          <div class="col">
           <p class="enlaces_de_interes_text q-pb-none q-pt-md">Enlaces de Interés</p>

           <ul class="q-pt-none q-pl-none" style="list-style: none;">
            <li><a href="#" class="link_text">- Gaceta Oficial</a></li>
            <li><a href="#" class="link_text">- Nueva Constitución <br> de la República de Cuba</a></li>

           </ul>

          </div>

       <div class="col">
            <p class="enlaces_de_interes_text q-pb-none q-pt-md">Contáctenos: 

              <q-icon color="accent" size="2rem" style="padding-right: 1%; padding-left: 5%;">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#29b6f6" class="bi bi-telegram" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/></svg>
                   </a>
              </q-icon>
              
              <q-icon color="accent" size="2rem" style="padding-right: 1%;">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#29b6f6" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>
                </a>
              </q-icon>

              <q-icon color="accent" size="2rem" style="padding-right: 1%;">
                <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#29b6f6" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>
                 </a>
              </q-icon> 

              <q-icon color="accent" size="2rem" style="padding-right: 1%;">
                <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#29b6f6" class="bi bi-messenger" viewBox="0 0 16 16">  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/></svg>
              </a>
              </q-icon> 
            </p>

            <ul class="q-pt-none q-pl-none" style="list-style: none;">
              <li class="contact_info_text">  <q-icon color="accent" style="padding-right: 1%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#29b6f6" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
              </q-icon>7 *** ** **</li>
              
              <li class="contact_info_text">  <q-icon color="accent"  style="padding-right: 1%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#29b6f6" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>  </svg>
              </q-icon>email@geocuba.cu</li>
              
              <li class="contact_info_text">  <q-icon color="accent" style="padding-right: 1%;">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#29b6f6" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/></svg>
              </q-icon> calle e/ calle 1 y calle 2 #x</li>

            </ul> 
          </div>
      </div>

        <div class="row justify-center" style="height: 20px">

            <p class="rights">© UCT GEOCUBA IC 1995 - 2022 \ Todos los derechos reservados. <a href="#" style="color : rgb(30, 144, 255);;">Política de privacidad </a> | <a href="#" style="color : #1E90FF;">Términos de servicio </a>
            </p>

         
          
        </div>
        
</div>
      </q-toolbar>
      </q-footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FooterComponent'
  //props: {
  //  title: {
  //    type: String,
  //    required: true
  //  },
//
  //  caption: {
  //    type: String,
  //    default: ''
  //  },
//
  //  link: {
  //    type: String,
  //    default: '#'
  //  },
//
  //  icon: {
  //    type: String,
  //    default: ''
  //  }
  //}
})
</script>


<style scoped>

  .footerdiv
  {
    background : #DBDBDB;
    background : rgba(219, 219, 219, 1);
    opacity : 0.87;
    width : 1365px;
    height : 180px;
    filter: alpha(opacity=87) progid:DXImageTransform.Microsoft.Alpha(opacity=87) ;
  }

  .enlaces_de_interes_text, .contactenos_text
  {
    font-family : Berlin Sans FB Demi;
    font-weight : bold;
    font-size : 20px;
    color : #2B2B2B;
    color : rgb(43, 43, 43);
  }

  .link_text
  {
    font-family : Cambria Math;
    font-size : 18px;
    color : #1E90FF;
    color : rgb(30, 144, 255);
  }

  .contact_info_text
  {
    font-family : Myriad Pro;
    font-size : 16px;
    color : #000000;
    color : rgb(0, 0, 0);
  }

  .rights
  {
    font-family : Myriad Pro;
    font-size : 14px;
    color : #000000;
    color : rgb(0, 0, 0);
  }

  </style>
