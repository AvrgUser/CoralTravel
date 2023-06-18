<template>
    <div class="card" style="width: 18rem;">
        <img v-if="photo!=undefined" :src="'/media/photo/tour/'+id+'/'+photo" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
        </div>
        
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
              <div class="list-group-item-city">
                <img src="https://cdn.icon-icons.com/icons2/1642/PNG/512/airplanetakeoffboardtransportation_109793.png" width="10px" alt="">
                <!-- {{city}}  -->
                Екатеринбург
              </div>
              <div class="list-group-item-date">
                <img src="https://cdn.icon-icons.com/icons2/936/PNG/512/calendar-with-spring-binder-and-date-blocks_icon-icons.com_73645.png" width="10px" alt="">
                {{date}}
              </div>
              <div class="list-group-item-length">
                <label for="">{{length}}</label>
                Ночей
              </div>
            </li>
            
            <li class="list-group-item">{{service}}</li>
            
            <li class="list-group-item"><b>{{price}}₽/Чел</b></li>
        </ul>
        <div class="card-body">
            <a :href="link">
                <button type="button" style="margin-right: 5px;" class="btn btn-primary">Редактировать</button>
            </a>
            <button type="button" class="btn btn-danger" @click="deleteMe">Удалить</button>
        </div>
    </div>
</template>
  
  <script lang="ts">
  import { Api } from '@/coral-api/apilib';
import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: "cardAdmin",
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
          photo: '',
          link: 'http://localhost:3000/edtour?id=' + this.id,
        }
    },
    methods:{
      deleteMe(){
        console.log('trying delete')
        Api.deleteTour(this.id).then(res=>{
          if(res.result=='success') {
            this.ondelete()
            console.log('deleted tour')
          }
        })
      }
    },
    props:['id', 'ondelete'],
    created(){
      Api.getTourInfo(this.id).then(res=>{
        this.name = res.name;
        this.hotel = res.hotel;
        this.city = res.city;
        this.date = res.date;
        this.length = res.length;
        let photos = res.media.split(';')
        photos.forEach((photo: string) => {
          if(photo!=''){
            this.photo = photo
            return
          }
        });
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
  
  <style src="./cardAdmin.css"></style>
  