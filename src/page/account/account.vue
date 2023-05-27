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
          <strong id="uFirstName">Vladimir</strong>
          <strong id="uLastName">Rassamahin</strong>
        </div>
      </div>
    </nav>

    <div class="d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Профиль</button>
        <button class="nav-link" id="v-pills-tour-tab" data-bs-toggle="pill" data-bs-target="#v-pills-tour" type="button" role="tab" aria-controls="v-pills-tour" aria-selected="false">Мои туры</button>
        <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>
        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
      </div>

      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
          <div class="input-group mb-3">
            <span class="input-group-text">Имя:</span>
            <strong class="name">Vladimir</strong>
            <span class="input-group-text">Фамилия:</span>
            <strong class="famaly">Rassamahin</strong>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Почта</span>
            <strong class="uEmail">Rassamahin_vladimir</strong>
            <strong class="mail">@mail.ru</strong>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">Пол:</span>
            <strong class="male">Мужской</strong>
          </div>
          <button type="button" class="btn btn-primary">Изменить</button>
        </div>
    
        <div class="tab-pane fade" id="v-pills-tour" role="tabpanel" aria-labelledby="v-pills-tour-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
      </div>
    </div>
</template>
  
  <script lang="ts">
  
  export default {
    name: "accountPanel",
    components: { 
      
    }
  }
  </script>
  
  <style src="./account.css"></style>
  