<template>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">

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