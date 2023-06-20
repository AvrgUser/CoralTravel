<template>
  <div class="p-1 text-center bg-body-tertiary">
    <div class="container-lg">
      <div class="row">
        <div class="col">
          <h4>Откуда:</h4>
        </div>
        <div class="col">
          <h4>Куда:</h4>
        </div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mt-3">
            
            <div class="dropdown">
              <!-- Кнопка для открытия модального окна -->
              <input class="form-control" type="text" placeholder="Введите куда" data-bs-toggle="modal" :data-bs-target="'#cityModal'+id" autocomplete="off" :id="'citymodalinput'+id">
              <!-- Модальное окно -->
              <div class="modal fade" :id="'cityModal'+id" tabindex="-1" aria-labelledby="cityModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="cityModalLabel">Выберите город</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="container">
                        <div v-if="cities.length>0" class="row" id="cityGrid">
                          <button  v-for="city in cities" :key="city" type="button" class="btn btn-secondary m-1" data-bs-dismiss="modal" @click="changeButtonText(city)">
                            {{ city }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div class="col">
          <div class="mt-3">
            <div class="dropdown">
              <!-- Кнопка для открытия модального окна -->
              <input class="form-control" type="text" placeholder="Введите куда" data-bs-toggle="modal" :data-bs-target="'#countryModal'+id" autocomplete="off" :id="'countryModalinput'+id">
              <!-- Модальное окно -->
              <div class="modal fade" :id="'countryModal'+id" tabindex="-1" aria-labelledby="countryModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="countryModalLabel">Выберите страну</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="container">
                        <div v-if="countries.length>0" class="row" id="cityGrid">
                          <button v-for="country in countries" :key="country" type="button" class="btn btn-secondary m-1" data-bs-dismiss="modal" @click="changeButtonText2(country)">
                            {{ country }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="mt-3 search">
            <button class="btn btn-primary" @click="search">Поиск</button> <!-- Кнопка "Поиск" -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Api } from "@/coral-api/apilib";
import { User } from "@/userdata";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data(){
    return{
      countries: [] as string[],
      cities: [] as string[],
      selectedCity: '',
      selectedCountryes: ''
    }
  },
  props: ['id'],
  
  methods:{
    search(){
      let tours = [] as string[]
      let city = document.getElementById('citymodalinput'+this.id) as HTMLInputElement
      let country = document.getElementById('countryModalinput'+this.id) as HTMLInputElement
        Api.getToursList({city: city.value?city.value:undefined}, {country: country.value?country.value:undefined}).then(res=>{
            for(let i = 0; i < res.length;i++){
                tours[i] = res[i].id
            }
            User.value('tours', tours)
            document.getElementById('nav-home')!.setAttribute('class', 'tab-pane fade')
            document.getElementById('nav-profile')!.setAttribute('class', 'tab-pane fade active show')
        })
    },
    changeButtonText(city:any) {
      if (this.selectedCity == city) {
        this.selectedCity = ''
        const citymodalinput = document.getElementById('citymodalinput'+this.id) as HTMLInputElement
        citymodalinput.value=''
      }else{
        this.selectedCity = city;
        const citymodalinput = document.getElementById('citymodalinput'+this.id) as HTMLInputElement
        citymodalinput.value=city
      }
    },
    changeButtonText2(country:any) {
      if (this.selectedCountryes == country) {
        this.selectedCountryes = ''
        const countryModalinput = document.getElementById('countryModalinput'+this.id) as HTMLInputElement
        countryModalinput.value=''
      }else{
        this.selectedCountryes = country;
        const countryModalinput = document.getElementById('countryModalinput'+this.id) as HTMLInputElement
        countryModalinput.value=country
      }
    },
  },
  created(){
    Api.getCities().then(res=>{
        this.cities = [];
        (res.cities as {city:string}[]).forEach(element => {
          this.cities[this.cities.length] = element.city
          
        });
        console.log(this.cities, res)
        this.$forceUpdate()
      })
      Api.getCountries().then(res=>{
        this.countries = [];
        
        (res.countries as {country:string}[]).forEach(element => {
          this.countries[this.countries.length] = element.country
        });
        console.log(this.countries, res)
        this.$forceUpdate()
      })
  }
})

</script>

<style src="./search.css"></style>
