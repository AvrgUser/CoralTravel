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
          <strong>{{LastName}}</strong>&nbsp;
          <strong>{{firstName}}</strong>
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
                  <input type="radio" class="btn-check" name="btnradio" id="man" autocomplete="off" :checked="man">
                  <label class="btn btn-outline-primary" for="man">Мужской</label>
                
                  <input type="radio" class="btn-check" name="btnradio" id="woman" autocomplete="off" :checked="woman">
                  <label class="btn btn-outline-primary" for="woman">Женский</label>
                </div>
              </div>
              <div class="row">

                <div class="input-group">
                  <label for="">Фамилия</label>
                  <input type="text" class="form-last-name" id="lastName" :value="LastName">
                </div>

                <div class="input-group">
                  <label for="">Имя</label>
                  <input type="text" class="form-first-name" id="firstName" :value="firstName">
                </div>

                <div class="input-group">
                  <label for="">Почта</label>
                  <input type="email" class="form-email" id="email" disabled :value="email">
                </div>

                <div class="input-group">
                  <label for="">Дата рождения</label>
                  <input id="startDate" class="form-date"  type="date" :value="date">
                </div>
                
                <div class="input-group">
                  <label for="">Мобильный телефон</label>
                    <input type="text" class="form-number" id="phone" :value="phone">
                </div>

                <div class="button-save">
                  <button type="button" class="btn btn-primary" id="liveToastBtn" @click="saveClientInfo()">Сохранить</button>
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

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">CoralTravel</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      <div class="toast-body">
        Данные успешно сохранены.
      </div>
    </div>
</div>
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
        phone: "",
        date: "",
        man: false,
        woman: false,
      }
     },
     methods:{
      saveClientInfo(){
        const firstName_ = document.getElementById('firstName') as HTMLInputElement;
        const LastName_ = document.getElementById('lastName') as HTMLInputElement;
        const email_ = document.getElementById('email') as HTMLInputElement;
        const date_ = document.getElementById('startDate') as HTMLInputElement;
        const phone_ = document.getElementById('phone') as HTMLInputElement;
        const man_ = document.getElementById('man') as HTMLInputElement;

        Api.updateClientInfo(Cookie.get("login"), Cookie.get("password"), firstName_!.value , LastName_!.value, email_!.value, date_!.value, man_.checked?'male':'female', phone_!.value).then(res=>{
          if(res.result=='success') this.update()
        })
      },
      update(){
      Api.getClientInfo(Cookie.get("login"), Cookie.get("password")).then(res=>{
        this.firstName = res.name;
        this.LastName = res.lastname;
        this.email = res.email;
        this.phone = res.phone;
        this.date = res.birthdate;
        if(res.gender == 0){ this.man = true; this.woman = false}
        if(res.gender == 1){ this.man = false; this.woman = true}
        this.$forceUpdate;
      })
    }
     },
    beforeMount(){
      this.update()
    }
  })

  
  </script>
  
  <style src="./account.css"></style>
  