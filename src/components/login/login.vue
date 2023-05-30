<template>
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleModalToggleLabel">Вход:</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/login.svg" width="14px" alt=""></span>
            <input type="text" class="form-control" id="username" placeholder="Логин" aria-label="Login" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/password.svg" width="14px" alt=""></span>
            <input type="password" class="form-control" id="password" placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1">
          </div>
          <a href="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Забыл пароль</a><br>
          <strong id="info"></strong>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Регистрация</button>
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle" id="login" @click="login()">Войти</button>
        </div>
      </div>
    </div>
  </div>

</template>
  
  <script>
    import { Api } from '@/coral-api/apilib';
    import { User } from '@/userdata';
    import { disableForms } from '@/DOMserv';

  export default {
    name: "loginComponent",
    components: { 
    },
    methods:{
      login(){
        const username_ = document.getElementById('username');
        const password_ = document.getElementById('password');
        const info_ = document.getElementById('info');

        if(username_.value == ""){ info_.textContent = "Введите логин!";  return; }
        if(password_.value == "") { info_.textContent = "Введите пороль!"; return; }

        Api.tryAuth(username_.value, password_.value).then(response=>{
          if(response.message=='authorized') {
            console.log('y')
            document.cookie = `login=${username_.value}`
            document.cookie = `password=${password_.value}`
            disableForms('exampleModalToggle');
            User.isAuth = true
            this.$forceUpdate();
            
          }
          else info_.textContent = "Неверный логин или пароль!";
        })
      }
    }

    
  }
  </script>
  
  <style src="./login.css"></style>
  