<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Bottom from './components/Bottom.vue'
</script>

<template>
  <header>
    <Navigation></Navigation>
  </header>
  <RouterView />
  <footer>
    <Bottom></Bottom>
  </footer>
</template>

<style>
*{margin:0;padding:0;}
li{list-style: none;}
a{text-decoration:none;}
header {
  width:100%;
  line-height: 1.5;
  max-height: 100vh;
}

footer{
  width:100%;
  height:36rem;
}
</style>
