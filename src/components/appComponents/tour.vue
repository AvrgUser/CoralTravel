<template>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        <search id="tour"></search>
        <div class="row col-lg-12 col.xs-12 col-sm-12 container-tour">
            <toureCard v-for="index in idToure" :key="index" :id="index"></toureCard>
        </div>

    </div>
</template>
  
<script>
import { defineComponent } from "vue";

import toureCard from "../toure-card/toure-card.vue";

import { Api } from "@/coral-api/apilib";
import search from "../search/search.vue";
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
        search
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