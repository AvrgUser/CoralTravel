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
            <span class="input-group-text" id="basic-addon1"><img src="" width="14px" alt=""></span>
            <input type="text" class="form-control" id="username" placeholder="Логин" aria-label="Login" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><img src="" width="14px" alt=""></span>
            <input type="password" class="form-control" id="password" placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1">
          </div>
          <a href="" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Забыл пароль</a><br>
          <strong id="info"></strong>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Регистрация</button>
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle" id="login">Войти</button>
        </div>
      </div>
    </div>
  </div>

</template>
  
  <script>
  
  export default {
    name: "loginComponent",
    components: { 
    }
  }
  </script>
  
  <style src=""></style>
  