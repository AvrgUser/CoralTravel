<template>
    <div class="login-content">
    <div class="modal-header">
      <h3 class="modal-title fs-5" id="exampleModalToggleLabel">Вход:</h3>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/login.svg" width="14px" alt=""></span>
        <input type="text" class="form-control" id="login" placeholder="Логин" autofocus="autofocus" aria-label="Login" aria-describedby="basic-addon1">
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><img src="@/assets/auth/password.svg" width="14px" alt=""></span>
        <input type="password" class="form-control" id="password" autocorrect="off"
        placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" @click="logIn" data-bs-target="#exampleModalToggle" id="login" >Войти</button>
    </div>
  </div>
</template>
  
  <script lang="ts">
  
  export default {
    name: "loginPanel",
    methods:{
      logIn(){
        let url = window.location.href+
        `?login=${(document.getElementById('login') as HTMLInputElement).value}`
        + `&password=${(document.getElementById('password') as HTMLInputElement).value}`
        console.log(url)
        window.location.replace(url)
      }
    },
    components: { 
      
    }
  }
  </script>
  
  <style src="./loginPanel.css"></style>
  