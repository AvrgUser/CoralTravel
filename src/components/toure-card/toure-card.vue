<template>
    <div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
        </div>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{city}} {{date}} {{ length}}</li>
            
            <li class="list-group-item">{{service}}</li>
            
            <li class="list-group-item"><b>{{price}}₽/Чел</b></li>
        </ul>
        <div class="card-body">
            <a :href="link">
              <button type="button" class="btn btn-outline-primary">Подробнее</button>
            </a>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from "vue";

import { Api } from "@/coral-api/apilib";

export default defineComponent({
    name: "tourCardComponent",
    components: { 
        
    },
    data(){
        return{
          name: '',
          hotel:'',
          city: '',
          date: '',
          length: '',
          service: '',
          price: '',
          link: 'http://localhost:3000/tour?id=' + this.id,
        }
    },
    methods:{
    },
    props:['id'],
    created(){

      Api.getTourInfo(this.id).then(res=>{
        this.name = res.name;
        this.city = res.city;
        this.date = res.date;
        this.length = res.length;
        switch(res.service){
          case 0:
            this.service = 'Самообслуживание'
            break;
          case 1:
            this.service = 'Завтрак'
            break;
          case 2:
            this.service = 'Все включено'
            break;
          case 3:
            this.service = 'Все включено ультра'
            break;
        }
        
        this.price = res.price;
        
      })
    }
  })
</script>
  
  <style src="./toure-card.css"></style>