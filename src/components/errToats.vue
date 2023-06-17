<template>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveErrToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Ошибка</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body" id="errToastbody">
            </div>
        </div>
    </div>
</template>
    
<script lang="ts">
    import { defineComponent } from 'vue';

export default defineComponent({
        
    name: "fullInfoToure",
        
    data(){
        
    },
    components: {
    },
    mounted(){
        
    },
    methods:{
    }
})
    </script>
    
    <style src=""></style>
    