<template>
   <b-row class="seualbum" id="album">
    <b-col md="12">
      <h1 class="tituloSeuAlbum" id="SeuAlbum">SEU ÁLBUM</h1>
      <hr id="linhadotitulo">
    </b-col>
    <b-col md="12">
      <div class="textoSeuAlbum">
        <h2 id="textseualbum">Incorpore seu álbum em seu site</h2>
        <p id="textseualbum">Exiba suas fotos incríveis com o album de fotos digital em seu site. Esta é uma maneira fácil<br/> e elegante de compartilhar suas memórias com sua família e amigos ao redor do mundo.</p>
      </div>
    </b-col>
        <div id="album">
          <b-row>
            <b-col lg="12" xs="12" style="display:contents">
              <viewer :images="images" v-for="(photo, index) in photos" :key="index">
              <img :src="photo.src.medium" id="img" />
              </viewer>
            </b-col>
          </b-row>
        </div>
    <div style="margin-top:20px"><hr></div>
  </b-row>
</template>

<script>

export default {
  props:['photos']
}
</script>

<style>
#linhadotitulo {
  margin-bottom: 50px;
  margin-top: 0;
  margin-left: 35%;
  width: 30%;
  height: 4px;
  color: burlywood;
}

.seualbum {
  margin: 60px !important;
}

.tituloSeuAlbum {
  text-align: center;
  color: burlywood;
}

.textoSeuAlbum {
  text-align: center;
}

#img {
  height: 300px;
  width: 427px;
  margin: 10px;
}

#album {
  display: contents;
}


</style>