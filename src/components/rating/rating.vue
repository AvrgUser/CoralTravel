<template>
    <ul class="rating">
        <li data-value="1"><i class="fa fa-star-o"></i></li>
        <li data-value="2"><i class="fa fa-star-o"></i></li>
        <li data-value="3"><i class="fa fa-star-o"></i></li>
        <li data-value="4"><i class="fa fa-star-o"></i></li>
        <li data-value="5"><i class="fa fa-star-o"></i></li>
    </ul>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
        
    name: "ratingEdit",
        
    data(){
        
    },
    methods:{
    },
})
</script>
<style src="./rating.css"></style>
    