<template>
    <div class="tab-pane fade" id="tour-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
        <div class="sections options-tour">
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
                <label class="btn btn-outline-primary" for="btncheck1">Скидки</label>
            </div>
            <br>
            <button type="button" class="btn btn-primary btn-search">Найти</button>
        </div>

        <div class="row col-lg-8 col.xs-8 col-sm-8 container-tour" >
            <toureCard v-for="index in idToure" :key="index" :id="index"></toureCard>
        </div>

    </div>
</template>
  
<script>
import { defineComponent } from "vue";

import toureCard from "../toure-card/toure-card.vue";

import { Api
 } from "@/coral-api/apilib";
export default defineComponent({
    name: "appTour",
    data(){
        return{
            idToure: [],
        }
    },
    methods:{
        
    },
    
    components: {
        toureCard,
    },
    beforeCreate(){
        Api.getToursList().then(res=>{
            for(let i = 0; i < res.length;i++){
                this.idToure[i] = res[i].id
            }
        })
    }
})
</script>
  
<style src="./tour.css"></style>