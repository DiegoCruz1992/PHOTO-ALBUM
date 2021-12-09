<template>
  <b-row>
    <div class="header">
      <b-col lg="8" md="8" sm="6" xs="10" > 
          <img id="logo" src="../assets/img/logoatualizado.gif" alt="Logotipo"/>    
      </b-col>
      <b-col lg="4" md="4" sm="6" xs="2"> 
        <div class="navigation">
          <b-navbar toggleable="lg">
            <b-navbar-toggle target="navbar-toggle-collapse">
              <template #default="{ expanded }" >
                <b-icon v-if="expanded" icon="chevron-bar-up" ></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
              </template>
            </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#sobre">SOBRE</b-nav-item>
                <b-nav-item href="#SeuAlbum">SEU ALBUM</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>   
      </b-col>
    </div>
    
  </b-row>
</template>

<script>
export default {
  created() {
    this.$root.$on('bv::scrollspy::activate', this.onActivate)
  },
  methods: {
    onActivate(target) {
      console.log('Received event: "bv::scrollspy::activate" for target ', target)
    }
  }
}
</script>

<style>

.header {
  display: flex;
  border-bottom: 1px solid black;
  position: fixed;
  z-index: 5000;
  height: 100px;
  background-color: burlywood;
}

#logo {
  width: 150px;
  height: 99px;
  margin-left: 5%;
}

.navigation{
  margin-top: 30px;
  margin-left: 140px;
}

.navigation a {
  color: white;
}

</style>