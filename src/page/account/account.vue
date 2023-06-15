<template>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" alt="CoralTravel" width="140px">
        </a>
      </div>
      <div class="container user-c">
        <div class="user">
          <strong>Профиль: </strong>
          <strong>{{LastName}}</strong>&nbsp;
          <strong>{{firstName}}</strong>
        </div>
      </div>
    </nav>

    <div class="d-flex align-items-start">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Профиль</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Избранное</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Мои туры</button>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
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
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          
        </div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
          
        </div>
      </div>
    </div>





    <footerComponent></footerComponent>
    <toats></toats>
    <errToats></errToats>
</template>
  
  <script lang="ts">
  import toats from '@/components/toats.vue';
  import errToats from '@/components/errToats.vue';
  import footerComponent from '@/components/footer/footerComponent.vue';
  import { Api } from '@/coral-api/apilib';
  import { Cookie } from '@/cookie/cookieRW';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "accountPanel",
    components: { 
      footerComponent,
      errToats,
      toats
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
        
        let toastEl = document.getElementById('liveToast') as HTMLElement
        let toast = new  (window as any)["bootstrap"].Toast(toastEl)
        document.getElementById('toastBody')!.textContent = "Изминение успешно сохранены";
        toast.show()
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
  