<template>
    
<div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title fs-5" id="exampleModalToggleLabel3">Востановление пароля:</h3>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Почта" aria-label="Email" aria-describedby="basic-addon1">
                </div>
                <div id="passwordHelpBlock" class="form-text">
                        Ведите почту к которой привязан ваш профиль
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal">Продолжить</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title fs-5" id="exampleModalToggleLabel4">Востановление пароля:</h3>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <label for="inputCode" class="form-label">Код:</label>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping"></span>
                        <input type="text" class="form-control" placeholder="Код" aria-label="Code" aria-describedby="addon-wrapping">
                    </div>
                    <div id="passwordHelpBlock" class="form-text">
                        Введите код отправленый на почту....
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">Продолжить</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title fs-5" id="exampleModalToggleLabel4">Востановление пароля:</h3>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <label for="inputPassword5" class="form-label">Новый пароль:</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><img src="" width="14px" alt=""></span>
                        <input type="password" class="form-control" placeholder="Пароль" aria-label="Password" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><img src="" width="14px" alt=""></span>
                        <input type="password" class="form-control" placeholder="Подтвердите пароль" aria-label="Password" aria-describedby="basic-addon1">
                      </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal">Сбросить пароль</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
  
  <script>
  
  export default {
    name: "resetPasswordComponent",
    components: { 
    }
  }
  </script>
  
  <style src=""></style>