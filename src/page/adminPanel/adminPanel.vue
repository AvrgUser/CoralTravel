<template>
    <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" alt="CoralTravel" width="140px">
      </a>
    </div>
    <div class="container user-c">
      
    </div>
  </nav>

  <div class="section">
    <nav class="nav flex-column">
      <strong>Тип тура: </strong>
      <select class="form-select" aria-label="Default select example">
        <option value="1">Все</option>
        <option value="2">Скидки</option>
        <option value="3">Без Скидки</option>
        <option value="3">Популярное</option>
      </select>
      <button type="button" class="btn btn-primary">Добавить тур</button>
    </nav>
    <div class="container c-card">
      <div class="row col-lg-8 col.xs-8 col-sm-8 container-tour" >
            <cardAdmin v-for="index in idToure" :key="index" :id="index"></cardAdmin>
        </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
  import cardAdmin from '@/components/cardAdmin/cardAdmin.vue';
  import { Api } from '@/coral-api/apilib';
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "AdminPanel",
    data(){
      return{
        idToure: new Array()
      }
    },
    components: { 
      cardAdmin
    },
    beforeCreate(){
        Api.getToursList().then(res=>{
            for(let i = 0; i < res.length;i++){
                this.idToure[i] = res[i].id
            }
        })
    }
  })
  </script>
  
  <style src="./adminPanel.css"></style>
  