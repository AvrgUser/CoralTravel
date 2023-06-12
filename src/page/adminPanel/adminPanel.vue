<template>
  <div class="header">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" width="140px !important">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Туры</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Пользователи</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <div class="tab-content" id="nav-tabContent">
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
      <nav class="nav flex-column nav-T">
        <input type="search" placeholder="Найти" id="search" class="search">
        <h6>Тип тура:</h6>
        <select class="form-select" aria-label="Default select example">
          <option value="1">Все</option>
          <option value="2">Скидки</option>
          <option value="3">Без Скидки</option>
          <option value="3">Популярное</option>
        </select>
        <a href="/addtour" class="add-t">
          <button type="button" class="btn btn-primary">Добавить тур</button>
        </a>
      </nav>
      <div class="row">
        <cardAdmin v-for="index in idToure" :key="index" :id="index"></cardAdmin>
      </div>
    </div>

    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
      <nav class="nav flex-column nav-T">
        <input type="search" placeholder="Найти" id="searchUser" class="search">
      </nav>
      <div class="users">
        <a :href="'/eduser?id='+ user.id" v-for="user in loginUser" :key="user" :id="user.id">{{user.login}}</a>
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
        idToure: new Array(),
        loginUser: new Array()
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
        Api.getClientsList().then(res =>{
          for(let i = 0; i < res.length;i++){
                this.loginUser[i] = {login:res[i].login, id:res[i].id}
            }
        })
    }
  })
  </script>
  
  <style src="./adminPanel.css"></style>
  