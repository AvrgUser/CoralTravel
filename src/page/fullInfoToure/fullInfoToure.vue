<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" width="140px !important">
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div v-if="isAuth">
            <a href="">Name</a>
          </div>
        </div>
      </div>
    </nav>
  </template>
    
    <script lang="ts">
  
    export default {
      name: "fullInfoToure",
      data(){
      return{
        isAuth: false,
      }
    },
      components: {
      }
    }
    </script>
    
    <style src="./fullInfoToure.css"></style>
    