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
            <span class="input-group-text" id="basic-addon1"><img src="" width="14px" alt=""></span>
            <input type="text" class="form-control" id="loginR" placeholder="Логин" aria-label="Login" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <input type="text" class="form-control" id="firstName" placeholder="Имя" aria-label="FirstName">
            <span class="input-group-text">/</span>
            <input type="text" class="form-control" id="lastName" placeholder="Фамилия" aria-label="LastName">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" id="email" placeholder="Почта" aria-label="Email" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1"><img src="" width="14px" alt=""></span>
            <input type="password" class="form-control" id="passwordR" placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1">
          </div>

          <label for="basic-url" class="form-label">Пол:</label><br>
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1">Мужской</label>
          
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio3">Женский</label>
          </div>
          <br><br>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="politics">
            <label class="form-check-label" for="flexCheckDefault">
              Я принимаю условия <a href="">пользовательского соглашения</a> и <a href="">политики конфиденциальности</a>
            </label>
          </div>
          <strong id="infoR"></strong>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2">Зарегестрироваться</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  
  export default {
    name: "registerComponent",
    components: { 
    }
  }
  </script>
  
  <style src="./register.css"></style>