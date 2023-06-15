<template>
    <div class="tab-pane fade contact-panel" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
        <div class="content-c">
            <div class="contacts">
                <strong>Мы в соцсктях</strong>
                <div class="f-contact fc">
                    <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Вконтакте">
                        <img class="set" src="/img/vk.ef869e2b.svg" width="45px" alt="">
                    </a>
                    <a href="" class="set" data-bs-toggle="tooltip" data-bs-placement="top" title="Одноклассники">
                        <img class="set" src="/img/ok.23ea0e35.svg" width="45px" alt="">
                    </a>
                    <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Ватсап">
                        <img class="set" src="/img/whatsapp.8b675dcb.svg" width="45px" alt="">
                    </a>
                    <a href="" data-bs-toggle="tooltip" data-bs-placement="top" title="Вайбер">
                        <img class="set" src="/img/viber.aed90a30.svg" width="45px" alt="">
                    </a>
                </div>
                <div class="mail">
                    <label for="">почта</label>
                    <strong>help.coraltravel@mail.ru</strong>
                </div>
            </div>
            <div class="frame">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2792aee8a61e3ddc9b543564d34798968da1b4fa27885273c7853d06692e0349&amp;source=constructor" width="450" height="450" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "appContacts",
    methods:{
    
    },
    components: {
    }
})
</script>
  
<style src="./contacts.css"></style>