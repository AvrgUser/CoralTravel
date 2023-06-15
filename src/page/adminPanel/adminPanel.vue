<template>
  <div class="header">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="container-fluid">
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
      <nav class="nav nav-T">

        <input type="search" placeholder="Найти" id="search" class="search">

        <select class="form-select" aria-label="Default select example">
          <option value="" hidden>Тип тура</option>
          <option value="1">Все</option>
          <option value="2">Скидки</option>
          <option value="3">Популярное</option>
        </select>
        <a href="/addtour" class="add-t">
          <button type="button" class="btn btn-primary">Добавить тур</button>
        </a>
      </nav>
      <div class="row">
        <cardAdmin v-for="(id, i) in tours" :key="id" :id="id" :ondelete="()=>deleteTour(i)"></cardAdmin>
      </div>
    </div>

    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
      <nav class="nav flex-column nav-T">
        <input type="search" placeholder="Найти" id="searchUser" class="search">
      </nav>
      <div class="users">
        <a :href="'/eduser?id='+ user.id" v-for="user in userlogins" :key="user" :id="user.id">{{user.login}}</a>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import cardAdmin from '@/components/cardAdmin/cardAdmin.vue';
  import { Api } from '@/coral-api/apilib';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "AdminPanel",
    data(){
      return{
        tours: new Array(),
        userlogins: new Array()
      }
    },
    components: { 
      cardAdmin
    },
    beforeCreate(){
        Api.getToursList().then(res=>{
            for(let i = 0; i < res.length;i++){
                this.tours[i] = res[i].id
            }
        })
        Api.getClientsList().then(res =>{
          for(let i = 0; i < res.length;i++){
                this.userlogins[i] = {login:res[i].login, id:res[i].id}
            }
        })
    },
    methods:{
      deleteTour(i){
        this.tours.splice(i,1)
      }
    }
  })
  </script>
  
  <style src="./adminPanel.css"></style>
  