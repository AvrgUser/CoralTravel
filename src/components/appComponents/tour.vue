<template>
    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        <search id="tour"></search>
        <div class="row col-lg-12 col.xs-12 col-sm-12 container-tour">
            <toureCard v-for="tour in idToure" :key="tour" :id="tour" :inFavourites="favTours&&favTours.split!=undefined&&favTours.split(';').includes(''+tour)" :onFav="(add = false, callback = ()=>{})=>changeFav(tour, add, callback)"></toureCard>
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import { Cookie } from "@/cookie/cookieRW";
import toureCard from "../toure-card/toure-card.vue";

import { Api } from "@/coral-api/apilib";
import search from "../search/search.vue";
export default defineComponent({
    name: "appTour",
    data(){
        return{
            idToure: [] as string[],
        }
    },
    methods:{
        changeFav(tour: string, add:boolean, callback:Function){
        if(add) Api.addToFavourites(Cookie.get("login"), Cookie.get("password"), tour).then(res=>{
          if(res.result=='success'){
            console.log('added')
          }
          callback(res.result)
        })
        else
        Api.removeFavourite(Cookie.get("login"), Cookie.get("password"), tour).then(res=>{
          if(res.result=='success'){
            console.log('deleted')
          }
          callback(res.result)
        })
      },
    },
    props:['favTours'],
    
    components: {
        toureCard,
        search
    },
    beforeCreate(){
        console.log(this.favTours)
        Api.getToursList().then(res=>{
            for(let i = 0; i < res.length;i++){
                this.idToure[i] = res[i].id
            }
        })
    },

})
</script>
  
<style src="./tour.css"></style>