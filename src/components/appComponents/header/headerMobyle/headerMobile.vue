<template>
    <nav class="mobile">
    <div class="content-l-p">
      <div class="logoimg">
        <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" style="cursor: pointer;" @click="main()" width="140px !important">
      </div>
      <div class="nameProfile">
          <a v-if="isAuth" href="/account">{{lastName}} {{firstName}}</a>
      </div>
    </div><br>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Главная</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Туры</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Контакты</button>
      <div class="dropdown">
        <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Меню
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-item"><a type="button" data-bs-target="#userAgreement" data-bs-toggle="modal">Правила обработки данных</a></li>
          <li class="dropdown-item"><a type="button" data-bs-target="#privacyPolicy" data-bs-toggle="modal">Политика конфиденциальности</a></li>
          <li class="dropdown-item"><a v-if="!isAuth" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Войти/Регистрация</a></li>
          <li class="dropdown-item"><a v-if="isAuth" @click="logOut()">Выйти</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
<script>
import { defineComponent } from "vue";
import { Cookie } from "@/cookie/cookieRW";
import { User } from "@/userdata";

export default defineComponent({
    name: "headerMobile",
    data(){
    return{
        isAuth: false,
        firstName: "f",
        lastName: "f",
    }
  },
    methods:{
      logOut(){
        console.log('clearing')
        Cookie.clear('login')
        Cookie.clear('password')
        window.location.replace(window.location.href)
      },
      main(){
        window.location.replace(`http://${window.location.host}/`);
      },
    },
      created(){
        User.listen('isAuth', (value)=>this.isAuth = value)
        User.listen('firstName', (value)=>this.firstName = value)
        User.listen('lastName', (value)=>this.lastName = value)
      },
})
</script>
  
<style src="./headerMobile.css"></style>