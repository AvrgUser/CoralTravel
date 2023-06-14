<template>
  <nav class="header">
    <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" width="140px !important">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Главная</button>
      <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Туры</button>
      <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Контакты</button>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Меню
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-item"><a type="button" data-bs-target="#userAgreement" data-bs-toggle="modal">Правила обработки данных</a></li>
          <li class="dropdown-item"><a type="button" data-bs-target="#privacyPolicy" data-bs-toggle="modal">Политика конфиденциальности</a></li>
          <li class="dropdown-item"><a href="#">Город</a></li>
          <li class="dropdown-item"><a v-if="!isAuth" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Войти/Регистрация</a></li>
        </ul>
      </div>
      <div v-if="isAuth">
        <a href="http://localhost:3000/account.html">{{lastName}} {{firstName}}</a>
      </div>
    </div>
  </nav>

  <div class="tab-content" id="myTabContent">
    <appMain></appMain>
    <appToure></appToure>
    <appContacts></appContacts>
  </div>

  <LoginComponent></LoginComponent>
  <RegisterComponent></RegisterComponent>
  <ResetPasswordComponent></ResetPasswordComponent>

  <privacyPolicy></privacyPolicy>
  <userAgreement></userAgreement>

  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "./components/footer/footerComponent.vue";

import LoginComponent from "./components/login/login.vue"
import RegisterComponent from "./components/register/register.vue"
import ResetPasswordComponent from "./components/reset-password/reset-password.vue"

import privacyPolicy from "./components/privacy-policy/privacyPolicy.vue";
import userAgreement from "./components/user-agreement/userAgreement.vue";

import appMain from "./components/appComponents/main.vue"
import appToure from  "./components/appComponents/tour.vue"
import appContacts from  "./components/appComponents/contacts.vue"

import { Cookie } from "./cookie/cookieRW";
import { Api } from "./coral-api/apilib";
import { User } from "./userdata";

export default defineComponent({
  name: "App",

  data(){
    return{
      isAuth: false,
      firstName: "f",
      lastName: "f",
    }
  },
  
  methods:{
    test(){
      
      this.$forceUpdate;
    },
    logOut(){
        console.log('clearing')
        Cookie.clear('login')
        Cookie.clear('password')
        window.location.replace(window.location.href)
      },
  },

  components: { 
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    privacyPolicy,
    userAgreement,
    appMain,
    appToure,
    appContacts
  },
  beforeCreate(){
    User.listen('isAuth', (value: any)=>this.isAuth = value)
    User.listen('firstName', (value: any)=>this.firstName = value)
    User.listen('lastName', (value: any)=>this.lastName = value)
    User.value('update-user-name', ()=>Api.getClientInfo(Cookie.get("login"), Cookie.get("password")).then(res=>{
      User.value('firstName', res.name)
      User.value('lastName', res.lastname)
      this.$forceUpdate()
    }))
    User.value('update-user-name')()
    let login = Cookie.get('login')
    let password = Cookie.get('password')
    if(login!=''&&password!='')Api.tryAuth(login, password).then(result=>{
      if(result.message=='authorized') {
        User.value('isAuth', true)
        console.log('yy')
      }
      else{
        console.log('nn')
      }
    })
  }
})

</script>

<style src="./main.css"></style>
