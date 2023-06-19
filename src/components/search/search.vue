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
        <div class="col">
          <h4>Период вылета:</h4>
        </div>
        <div class="col">
          <h4>Ночей:</h4>
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
                        <div class="row" id="cityGrid">
                          <button v-for="city in cities" :key="city" type="button" class="btn btn-secondary m-1" data-bs-dismiss="modal" @click="changeButtonText(city)">
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
                      <h5 class="modal-title" id="countryModalLabel">Выберите город</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="country" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="container">
                        <div class="row" id="cityGrid">
                          <button v-for="country in countryes" :key="country" type="button" class="btn btn-secondary m-1" data-bs-dismiss="country" @click="changeButtonText2(country)">
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
          <div class="mt-3">
            <div class="dropdown">
              <input class="form-control dropdown-toggle" type="text" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="off" placeholder="Введите период вылета">
              <div id="dropdown-menu1" class="dropdown-menu" aria-labelledby="dropdownMenuButton" @click="event=>event.stopPropagation()">
                <div class="d-block position-static p-2 mx-0 shadow rounded-3 w-340px" data-bs-theme="light">
                  <div class="d-grid gap-1">
                    <div class="cal">
                      <div class="cal-month">
                        <button class="btn cal-btn" type="button">
                          &lt;
                        </button>
                        <strong class="cal-month-name">июнь</strong>
                        <select class="form-select cal-month-name d-none">
                          <option value="January">Январь</option>
                          <option value="February">Февраль</option>
                          <option value="March">Март</option>
                          <option value="April">Апрель</option>
                          <option value="May">Май</option>
                          <option selected value="June">Июнь</option>
                          <option value="July">Июль</option>
                          <option value="August">Август</option>
                          <option value="September">Сентябрь</option>
                          <option value="October">октябрь</option>
                          <option value="November">Ноябрь</option>
                          <option value="December">Декабрь</option>
                        </select>
                        <button class="btn cal-btn" type="button">
                          &gt;
                        </button>
                      </div>
                      <div class="cal-weekdays text-body-secondary">
                        <div class="cal-weekday">ПН</div>
                        <div class="cal-weekday">ВТ</div>
                        <div class="cal-weekday">СР</div>
                        <div class="cal-weekday">ЧТ</div>
                        <div class="cal-weekday">ПТ</div>
                        <div class="cal-weekday">СБ</div>
                        <div class="cal-weekday">ВС</div>
                      </div>
                      <div class="cal-days">
                        <button class="btn cal-btn" disabled type="button">30</button>
                        <button class="btn cal-btn" disabled type="button">31</button>
                        <button class="btn cal-btn" type="button">1</button>
                        <button class="btn cal-btn" type="button">2</button>
                        <button class="btn cal-btn" type="button">3</button>
                        <button class="btn cal-btn" type="button">4</button>
                        <button class="btn cal-btn" type="button">5</button>
                        <button class="btn cal-btn" type="button">6</button>
                        <button class="btn cal-btn" type="button">7</button>
                        <button class="btn cal-btn" type="button">8</button>
                        <button class="btn cal-btn" type="button">9</button>
                        <button class="btn cal-btn" type="button">10</button>
                        <button class="btn cal-btn" type="button">11</button>
                        <button class="btn cal-btn" type="button">12</button>
                        <button class="btn cal-btn" type="button">13</button>
                        <button class="btn cal-btn" type="button">14</button>
                        <button class="btn cal-btn" type="button">15</button>
                        <button class="btn cal-btn" type="button">16</button>
                        <button class="btn cal-btn" type="button">17</button>
                        <button class="btn cal-btn" type="button">18</button>
                        <button class="btn cal-btn" type="button">19</button>
                        <button class="btn cal-btn" type="button">20</button>
                        <button class="btn cal-btn" type="button">21</button>
                        <button class="btn cal-btn" type="button">22</button>
                        <button class="btn cal-btn" type="button">23</button>
                        <button class="btn cal-btn" type="button">24</button>
                        <button class="btn cal-btn" type="button">25</button>
                        <button class="btn cal-btn" type="button">26</button>
                        <button class="btn cal-btn" type="button">27</button>
                        <button class="btn cal-btn" type="button">28</button>
                        <button class="btn cal-btn" type="button">29</button>
                        <button class="btn cal-btn" type="button">30</button>
                        <button class="btn cal-btn" type="button">31</button>
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
              <input class="form-control dropdown-toggle" type="text" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" autocomplete="new-data" placeholder="Ночей">
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" @click="event=>event.stopPropagation()">
                <div class="container">
                  <h5>Выберите кол-во дней</h5>
                  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" @click="event=>{
                    const trg = event.target
                    if (!trg.className.includes('btn-dis')) {
                      console.log('active')
                    }
                  }">
                      <button class="btn cal-btn" type="button">1</button>
                      <button class="btn cal-btn btn-dis" type="button">2</button>
                      <button class="btn cal-btn btn-dis" type="button">3</button>
                      <button class="btn cal-btn btn-dis" type="button">4</button>
                      <button class="btn cal-btn btn-dis" type="button">5</button>
                      <button class="btn cal-btn btn-dis" type="button">6</button>
                      <button class="btn cal-btn btn-dis" type="button">7</button>
                      <button class="btn cal-btn btn-dis" type="button">8</button>
                      <button class="btn cal-btn btn-dis" type="button">9</button>
                      <button class="btn cal-btn btn-dis" type="button">10</button>
                      <button class="btn cal-btn btn-dis" type="button">11</button>
                      <button class="btn cal-btn btn-dis" type="button">12</button>
                      <button class="btn cal-btn btn-dis" type="button">13</button>
                      <button class="btn cal-btn btn-dis" type="button">14</button>
                      <button class="btn cal-btn btn-dis" type="button">15</button>
                      <button class="btn cal-btn btn-dis" type="button">16</button>
                      <button class="btn cal-btn btn-dis" type="button">17</button>
                      <button class="btn cal-btn btn-dis" type="button">18</button>
                      <button class="btn cal-btn btn-dis" type="button">19</button>
                      <button class="btn cal-btn btn-dis" type="button">20</button>
                      <button class="btn cal-btn btn-dis" type="button">21</button>
                      <button class="btn cal-btn btn-dis" type="button">22</button>
                      <button class="btn cal-btn btn-dis" type="button">23</button>
                      <button class="btn cal-btn btn-dis" type="button">24</button>
                      <button class="btn cal-btn btn-dis" type="button">25</button>
                      <button class="btn cal-btn btn-dis" type="button">26</button>
                      <button class="btn cal-btn btn-dis" type="button">27</button>
                      <button class="btn cal-btn btn-dis" type="button">28</button>
                      <button class="btn cal-btn btn-dis" type="button">29</button>
                      <button class="btn cal-btn btn-dis" type="button">30</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="mt-3 search">
            <button class="btn btn-primary">Поиск</button> <!-- Кнопка "Поиск" -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Api } from "@/coral-api/apilib";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data(){
    return{
      countryes: ['Турция','Россия'],
      cities: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону'],
      selectedCity: '',
      selectedCountryes: ''
    }
  },
  props: ['id'],
  
  methods:{
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
    beforeCreate(){
      Api.getToursList();
    }
  }
})

</script>

<style src="./search.css"></style>
