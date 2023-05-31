<template>
  <div class="header">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" width="140px !important">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Главная</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#tour-tab-pane" type="button"
                role="tab" aria-controls="tour-tab-pane" aria-selected="false">Туры</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#stock-tab-pane"
                type="button" role="tab" aria-controls="stock-tab-pane" aria-selected="false">Акции</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Контакты</button>
            </li>
            <li class="nav-item dropdown dropstart">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Меню
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a type="button" data-bs-target="#userAgreement" data-bs-toggle="modal" style="padding-left: 15px; padding-right: 15px;">Правила обработки данных</a></li>
                <li><a type="button" data-bs-target="#privacyPolicy" data-bs-toggle="modal" style="padding-left: 15px; padding-right: 15px;">Политика конфиденциальности</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Город</a></li>
                <li><a class="dropdown-item" v-if="!isAuth" data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal">Войти/Регистрация</a></li>
                <li><a class="dropdown-item" v-if="isAuth" @click="logOut">Выйти</a></li>
              </ul>
            </li>
          </ul>
          <div v-if="isAuth">
            <a href="http://localhost:3000/account.html">{{lastName}} {{firstName}}</a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../src/assets/corusel/travel1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../src/assets/corusel/travel2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../src/assets/corusel/travel3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="section_1">
        <div class="container">
          <div class="row-advantages">
            <div class="col-lg-12 col.xs-12 col-sm-12">
              <h2 class="header-s text-center sh2 h2">
                <span>Популярные туры</span>
              </h2>
            </div>
          </div>
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <PopularTourComponent></PopularTourComponent>
                <PopularTourComponent></PopularTourComponent>
                <PopularTourComponent></PopularTourComponent>
              </div>
              <div class="carousel-item">
                <PopularTourComponent></PopularTourComponent>
                <PopularTourComponent></PopularTourComponent>
                <PopularTourComponent></PopularTourComponent>
              </div>
              <div class="carousel-item">
                <PopularTourComponent></PopularTourComponent>
                <PopularTourComponent></PopularTourComponent>
                <PopularTourComponent></PopularTourComponent>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="section_2 s2">
          <div class="container">
            <div class="row-advantages">
              <div class="col-lg-12 col.xs-12 col-sm-12">
                <h2 class="header-s text-center sh2 h2">
                  <span>Почему выбирают нас</span>
                </h2>
                <h3 class="header-s text-center sh2 hi2">
                  <a class="Sadvantages" href="">Все приемущества 
                    <img src="@/assets/Sadvantages/right-arrow.svg" width="18px" wialt="">
                  </a>
                </h3>
              </div>
            </div>
            <!-- Блок с приемущиствами-->
            <div class="feature text-center">
              <div class="row row-advantages">
                <div class="col-lg-3 col-md-6">
                  <div class="feature-box sd2">
                    <img src="../src/assets/Sadvantages/payment.svg" alt="BRANDING"><br>
                    <p>Удобство и безопасность оплаты</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="feature-box sd2">
                    <img src="../src/assets/Sadvantages/discount.svg" alt="DESIGN"><br>
                    <p>Акции и скидки</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="feature-box sd2">
                    <img src="../src/assets/Sadvantages/support.svg" alt="DEVELOPMENT"><br>
                    <p>Поддержка — круглосуточно и без выходных.</p>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="feature-box sd2">
                    <img src="img/s2_4.png" alt="ROCKET SCIENCE"><br>
                    <strong>ROCKET SCIENCE</strong>
                    <p>Et harum quidem rerurm est
                      et expedita distinctio. Nam
                      libero tempore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </div>

    <div class="tab-pane fade" id="tour-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
      <div class="sections">
        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>От куда</option>
          <option value="1"></option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Куда</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Периуд вылета</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Ночей</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck1">Скидки</label>
        </div><br>
        <button type="button" class="btn btn-primary btn-search">Найти</button>
      </div>
      <div class="row col-lg-8 col.xs-8 col-sm-8">
        <ToureCardComponent></ToureCardComponent>
        <ToureCardComponent></ToureCardComponent>
        <ToureCardComponent></ToureCardComponent>
        <ToureCardComponent></ToureCardComponent>
        <ToureCardComponent></ToureCardComponent>
        <ToureCardComponent></ToureCardComponent>
      </div>

      <FooterComponent></FooterComponent>
    </div>

    <div class="tab-pane fade" id="stock-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
      <FooterComponent></FooterComponent>
    </div>

    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
      <FooterComponent></FooterComponent>
    </div>
  </div>

  <LoginComponent></LoginComponent>
  <RegisterComponent></RegisterComponent>
  <ResetPasswordComponent></ResetPasswordComponent>

  <privacyPolicy></privacyPolicy>
  <userAgreement></userAgreement>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "./components/footer/footerComponent.vue";
import LoginComponent from "./components/login/login.vue"
import RegisterComponent from "./components/register/register.vue"
import ResetPasswordComponent from "./components/reset-password/reset-password.vue"
import PopularTourComponent from "./components/popular-tour/popular-tour.vue"
import ToureCardComponent from "./components/toure-card/toure-card.vue"
import privacyPolicy from "./components/privacy-policy/privacyPolicy.vue";
import userAgreement from "./components/user-agreement/userAgreement.vue";
import { Cookie } from "./cookie/cookieRW";
import { Api } from "./coral-api/apilib";
import { User } from "./userdata";
// import { User } from "./userdata";

export default defineComponent({
  name: "App",

  data(){
    return{
      isAuth: false,
      firstName: "",
      lastName: ""
    }
  },
  
  methods:{
    logOut(){
        console.log('clearing')
        Cookie.clear('login')
        Cookie.clear('password')
        User.isAuth = false
      },
  },

  components: { 
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    PopularTourComponent,
    ToureCardComponent,
    privacyPolicy,
    userAgreement
  },
  beforeCreate(){
    User.isAuth = (value:boolean)=>{
      if(value==undefined)return this.isAuth
      else this.isAuth = value
      console.log('f')
    }
    Api.getClientInfo(Cookie.get("login"), Cookie.get("password")).then(res=>{
      this.firstName = res.name;
      this.lastName = res.lastname;
      this.$forceUpdate;
    })
    Api.getCities().then(res=>{
      let cities = res.split(' ') as String[]
      let text = ''
      cities.forEach(element => {
        text+=element+' '
      });
      console.log('cities: '+text)
    })
    let login = Cookie.get('login')
    let password = Cookie.get('password')
    if(login!=''&&password!='')Api.tryAuth(login, password).then(result=>{
      if(result.message=='authorized') {
        this.isAuth = true
        console.log('yy')
      }
      else{
        console.log('nn')
      }
    })
  }
})

</script>

<style src="./main.css"></style>
