<template>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" alt="CoralTravel" width="140px">
        </a>
      </div>
      <div class="container user-c">
        <div class="user">
          <strong>Личный кабинет: </strong>
          <strong id="uFirstName">{{LastName}}</strong>&nbsp;
          <strong id="uLastName">{{firstName}}</strong>
        </div>
      </div>
    </nav>

    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Профиль</button>
        <button class="nav-link" id="v-pills-tour-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tour" type="button" role="tab" aria-controls="v-pills-tour" aria-selected="false">Мои туры</button>
        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-favourites" type="button" role="tab" aria-controls="v-pills-favourites" aria-selected="false">Избранное</button>
      </div>

      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">

          <div class="formContainer">
            <div class="content">
              <h4>Профиль</h4>
              <div class="fmale">
                <label for="basic-url" class="form-label">Пол:</label><br>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                  <label class="btn btn-outline-primary" for="btnradio1">Мужской</label>
                
                  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                  <label class="btn btn-outline-primary" for="btnradio3">Женский</label>
                </div>
              </div>
              <div class="row">
                <div class="input-group" >
                  <label for="">Фамилия</label>
                  <input type="text" class="form-last-name" :value="LastName">
                </div>
                <div class="input-group" >
                  <label for="">Имя</label>
                  <input type="text" class="form-first-name" :value="firstName">
                </div>
                <div class="input-group" >
                  <label for="">Почта</label>
                  <input type="email" class="form-email" disabled :value="email">
                </div>
                <div class="input-group" >
                  <label for="">Дата рождения</label>
                  <input id="startDate" class="form-date" type="date">
                </div>
                
                <div class="input-group number-group" >
                  <label for="">Мобильный телефон</label>
                  <div class="numb">
                    <select class="select-number number" aria-label="Default select example">
                      <option value="1">+7</option>
                      <option value="2">+375</option>
                      <option value="3">+380</option>
                      <option value="3">+374</option>
                      <option value="3">+994</option>
                      <option value="3">+995</option>
                      <option value="3">Другое</option>
                    </select>
                    <input type="text" class="form-number" :value="phone">
                  </div>
                </div>
                <div class="button-save " >
                  <button type="button" class="btn btn-primary">Сохранить</button>
                </div>

              </div>
            </div>
          </div>
          
        </div>
    
        <div class="tab-pane fade" id="v-pills-tour" role="tabpanel" aria-labelledby="v-pills-tour-tab" tabindex="0">

        </div>

        <div class="tab-pane fade" id="v-pills-favourites" role="tabpanel" aria-labelledby="v-pills-favourites-tab" tabindex="0">

        </div>
      </div>
    </div>
    <footerComponent></footerComponent>
</template>
  
  <script lang="ts">
  import footerComponent from '@/components/footer/footerComponent.vue';
  import { Api } from '@/coral-api/apilib';
  import { Cookie } from '@/cookie/cookieRW';
import { defineComponent } from 'vue';

  export default defineComponent({
    name: "accountPanel",
    components: { 
      footerComponent
    },
    data(){
      return{
        firstName: "",
        LastName: "",
        email: "",
        phone: ""
      }
     },
    beforeCreate(){
      Api.getClientInfo(Cookie.get("login"), Cookie.get("password")).then(res=>{
        this.firstName = res.name;
        this.LastName = res.lastname;
        this.email = res.email;
        this.phone = res.phone;
        this.$forceUpdate;
      })
      
    }
  
  })
  </script>
  
  <style src="./account.css"></style>
  