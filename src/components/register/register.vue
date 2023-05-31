<template>
    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Регистрация:</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/login.svg" width="14px" alt=""></span>
            <input type="text" class="form-control" id="loginR" placeholder="Логин" aria-label="Login" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control firstName" id="firstName" placeholder="Имя" aria-label="FirstName">
            <span class="input-group-text">/</span>
            <input type="text" class="form-control" id="lastName" placeholder="Фамилия" aria-label="LastName">
          </div>

          <div class="input-group mb-3 form-date-groupe">
            <label for="" style="width: inherit;">Дата рождения</label><br>
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/date.svg" width="14px" alt=""></span>
            <input type="date" class="form-control" id="date" placeholder="Фамилия" aria-label="LastName">
          </div>

          <div class="input-group mb-3 form-date-groupe">
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/phone.svg" width="14px" alt=""></span>
            <input type="text" class="form-control" id="phone" placeholder="Номер телефона" aria-label="phone">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" id="email" placeholder="Почта" aria-label="Email" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/password.svg" width="14px" alt=""></span>
            <input type="password" class="form-control" id="passwordR" placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1">
          </div>

          <label for="basic-url" class="form-label">Пол:</label><br>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="man" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="man">Мужской</label>
          
            <input type="radio" class="btn-check" name="btnradio" id="woman" autocomplete="off">
            <label class="btn btn-outline-primary" for="woman">Женский</label>
          </div>
          <br><br>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="politics">
            <label class="form-check-label" for="flexCheckDefault">
              Я принимаю условия 
              <a href="" data-bs-target="#userAgreement" data-bs-toggle="modal">обработки данных</a> и 
              <a href="" data-bs-target="#privacyPolicy" data-bs-toggle="modal">политики конфиденциальности</a>
            </label>
          </div>
          <strong id="infoR"></strong>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="logup" data-bs-target="#exampleModalToggle2">Зарегестрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import { Api } from '@/coral-api/apilib';
  import { User } from '@/userdata';
  import { Cookie } from '@/cookie/cookieRW';
  import { disableForms } from '@/DOMserv';

  export default {
    name: "registerComponent",
    methods:{
      logup(){
        const loginR_ = document.getElementById('loginR')
        const firstName_ = document.getElementById('firstName')
        const lastName_ = document.getElementById('lastName')
        const email_ = document.getElementById('email')
        const passwordR_ = document.getElementById('passwordR')
        const politics_ = document.getElementById('politics')
        const date_ = document.getElementById('date')
        const phone_ = document.getElementById('phone')
        const woman_ = document.getElementById('woman')
        const infoR_ = document.getElementById('infoR')
        
        let gender = "male";

        if(woman_.checked){ gender = "woman"}

        if(loginR_.value == ""){ infoR_.textContent = "Введите логин!";  return; }
        if(firstName_.value == "") { infoR_.textContent = "Введите имя!"; return; }
        if(lastName_.value == ""){ infoR_.textContent = "Введите фамилию!";  return; }
        if(date_.value == ""){ infoR_.textContent = "Введите дату рождения!";  return; }
        if(phone_.value == ""){ infoR_.textContent = "Введите номер телефона!";  return; }

        if(email_.value == "") { infoR_.textContent = "Введите адрес элетронной почты!"; return; }
        if(passwordR_.value == "") { infoR_.textContent = "Введите пороль!"; return; }
        if(!politics_.checked) { infoR_.textContent = "Примите соглашение"; return; }

        Api.LogUp(loginR_.value, passwordR_.value, firstName_.value, lastName_.value, email_.value, date_.value, gender, phone_.value).then(response=>{
            if(response.result=='success') {
              User.isAuth = true
              disableForms('exampleModalToggle2');
              Cookie.set('login', loginR_.value)
              Cookie.set('password', passwordR_.value)
              this.$forceUpdate();
            }
            else infoR_.textContent = "fail!";
        })
      }
    },
    components: {
    }
  }
  </script>
  
  <style src="./register.css"></style>