<template>
    <div class="footer">
      <div class="f-logo">
          <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" width="140px" alt=""><br>
          <strong>© 2023 CoralTravel Туроператор</strong>
      </div>
      <div class="f-contact">
          <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Вконтакте"><img src="@/assets/footer/vk.svg" width="45px" alt=""></a>
          <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Одноклассники"><img src="@/assets/footer/ok.svg" width="45px" alt=""></a>
          <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Ватсап"><img src="@/assets/footer/whatsapp.svg" width="45px" alt=""></a>
          <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Вайбер"><img src="@/assets/footer/viber.svg" width="45px" alt=""></a>
      </div>
      <div class="f-support">
          <strong><img src="@/assets/headphones.svg" alt="">+7 (495) 232 10 11</strong><br>
          <strong>Контакт-центр 24/7</strong>
      </div>
  </div>
  </template>
    
    <script>
import { defineComponent } from "vue"

    
    export default defineComponent({
      name: 'footerComponent',
      components: {
      }
    })
    </script>
    
    <style src="./footer.css"></style>
    