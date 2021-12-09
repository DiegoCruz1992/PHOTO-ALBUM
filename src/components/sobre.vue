<template>
  <b-row class="Sobre" id="sobre">
    <b-row>
      <b-col md="12">
        <h1 class="titulo">SOBRE O SITE</h1>
        <hr id="linhadotitulo">
      </b-col>  
    </b-row>
    <b-row>
      <b-col md="6"> 
        <div class="textModelo">
            <h2 >Criador de álgum <br/>
            de fotos online</h2>
            <p>A memorie tem como objetivo te ajudar a compartilhar suas memórias
    com amigos e familiares  usando nosso álbum de fotos digital. 
    Carregue suas fotos e capture os melhores momentos com a ajuda de nosso
    criador de álbuns de fotos online. Compartilhe seu  álbum de fotos online ou 
    exiba-o em seu site.</p> 
        </div>    
      </b-col>
      <b-col md="6"> 
        <div>
          <b-carousel id="carousel-no-animation" style="text-shadow: 0px 0px 2px #000" no-animation controls indicators>
            <template v-for="(photo, index) in photos" >
              <b-carousel-slide
              :key="index"
              :img-src="photo.src.medium"
              img-width="400"
              style="height: 400px"
              ></b-carousel-slide>
            </template>
          </b-carousel>
        </div>
      </b-col>
    </b-row>
      
      <div style="margin-top:20px"><hr></div>
  </b-row>
  
  
</template>

<script>
export default {
  props:['photos']
}
</script>

<style>

.sr-only {
  display: none;
}

.Sobre {
  margin: 150px 40px 0 40px !important;
  display: flex;
  text-align: center;
}

.carousel-fade img {
  height: 350px !important;
  height: 350px;
}

.textModelo {
 margin-top: 30px !important;
  text-align: left;
}

.textModelo h1{
  margin-bottom: 35px;
}

.titulo{
  text-align: center;
  color: burlywood;
}

</style>