<template>
  <div class="header">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
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
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Главная</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#tour-tab-pane" type="button"
                role="tab" aria-controls="tour-tab-pane" aria-selected="false">Туры</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#stock-tab-pane"
                type="button" role="tab" aria-controls="stock-tab-pane" aria-selected="false">Акции</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Контакты</button>
            </li>
            <li class="nav-item dropdown dropstart">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Меню
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a type="button" data-bs-target="#userAgreement" data-bs-toggle="modal" style="padding-left: 15px; padding-right: 15px;">Правила обработки данных</a>
                </li>
                <li>
                  <a type="button" data-bs-target="#privacyPolicy" data-bs-toggle="modal" style="padding-left: 15px; padding-right: 15px;">Политика конфиденциальности</a>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <a class="dropdown-item" href="#">Город</a>
                </li>
                <li>
                  <a class="dropdown-item" v-if="!isAuth" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Войти/Регистрация</a>
                </li>
                <li>
                  <a class="dropdown-item" v-if="isAuth" @click="logOut">Выйти</a>
                </li>
              </ul>
            </li>
          </ul>
          <div v-if="isAuth">
            <a href="http://localhost:3000/account.html">{{lastName}} {{firstName}}</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="tab-content" id="myTabContent">
    <appMain></appMain>
    <appToure></appToure>
    <appAction></appAction>
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
import appAction from  "./components/appComponents/action.vue"
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
    appAction,
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
    Api.getCities().then(res=>{
      let cities = res.split(' ') as String[]
      let text = ''
      cities.forEach(element => {
        text+=element+' '
      });
      console.log('cities: '+text)
    })
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
