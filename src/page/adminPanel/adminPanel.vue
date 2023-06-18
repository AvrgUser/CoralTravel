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

        <input type="search" placeholder="Название" id="search" class="search" v-model="tourName">

        <select class="form-select" aria-label="Default select example" v-model="service">
          <option value="0" hidden>Сервис</option>
          <option value="1">Все</option>
          <option value="2">Самообслуживание</option>
          <option value="3">Завтрак</option>
          <option value="4">Все включено</option>
          <option value="5">Все включено ультра</option>
        </select>
        <div class="search-a">
          <button type="button" @click="updateTours" class="btn btn-primary">Найти</button>
        </div>
        <a href="/addtour" class="add-t">
          <button type="button" class="btn btn-primary">Добавить тур</button>
        </a>
      </nav>
      <div class="row">
        <cardAdmin v-for="(id, i) in tours" :key="id" :id="id" :ondelete="()=>deleteTour(i)"></cardAdmin>
      </div>
    </div>

    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
      <nav class="nav nav-T">
        <input type="search" placeholder="Логин" id="searchUser" class="search" v-model="userName">
        <div class="search-a">
          <button type="button" class="btn btn-primary" @click="updateUsers">Найти</button>
        </div>
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
        tourName: '',
        userName: '',
        service: 0,
        tours: new Array(),
        userlogins: new Array()
      }
    },
    components: { 
      cardAdmin
    },
    created(){
        this.updateTours(true)
        this.updateUsers(true)
    },
    methods:{
      updateTours(update = false){
        this.tours = []
        Api.getToursList({name: this.tourName}, this.service>1? {service: this.service-2}:undefined).then(res=>{
            for(let i = 0; i < res.length;i++){
                this.tours[i] = res[i].id
            }
            if(!update)this.$forceUpdate()
        })
      },
      updateUsers(update = false){
        this.userlogins = []
        Api.getClientsList({login: this.userName}).then(res =>{
          for(let i = 0; i < res.length;i++){
                this.userlogins[i] = {login:res[i].login, id:res[i].id}
            }
            if(!update)this.$forceUpdate()
        })
      },
      deleteTour(i){
        this.tours.splice(i,1)
      }
    }
  })
  </script>
  
  <style src="./adminPanel.css"></style>