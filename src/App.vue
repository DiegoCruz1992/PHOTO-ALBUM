<template>
  <div id="app">
    <div class="container-fluid">
    <Header/>
        <Sobre :photos="photos"/>
        <SeuAlbum :photos="photos"/>
        <Footer/>
      
    </div>
    
  </div>
</template>

<script>
import Header from './components/header.vue'
import Sobre from './components/sobre.vue'
import SeuAlbum from './components/seuAlbum.vue'
import Footer from './components/footer.vue'
import ApiService from './services/api'


export default {
  name: 'app',
  components: { Header, Sobre, SeuAlbum, Footer },
  data:() => ({
    photos:[]
  }),

  mounted(){
    let _this = this

    ApiService.getPhotos({query: 'Cat', size: 'medium', orientation:'landscape'}).then(function (response){
      _this.photos = response.data.photos
    })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
