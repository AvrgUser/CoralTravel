<template>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" width="140px !important">
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div>
              <strong>Профиль: Name</strong>
            </div>
          </div>
        </div>
    </nav>
    <div class="section1">
        <div class="row">
            <div class="title">
                <h4>OTIUM FAMILY ECO CLUB</h4>
                <div class="option">

                    <strong >Добавить в избраное (0)</strong>
                    <strong>Поделиться</strong>
                </div>
            </div>
            <div class="main">
                <div class="galeryinfo">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="1.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="2.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="3.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="4.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="5.jpg" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="6.jpg" class="d-block w-100" alt="...">  
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div class="hotelinfo">
                    <h6>OTIUM FAMILY ECO CLUB</h6>
                    <p>
                        Отель входит в концепцию <strong>Otium Family Hotels</strong>
                        гарантирует высокие стандарты качества и идеальный отдых. Во всех отелях концепции 
                        гостей ждет русскоязычный персонал, комфортабельные номера, обилие развлечений.
                        Качество обслуживания под контролем Otium Hotels и Coral Travel.
                    </p>
                    <div class="featuresWrap ">
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детское меню в ресторане">
                            <img src="@/assets/comfort/menu.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детские бассейны">
                            <img src="@/assets/comfort/pool.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Дискотека">
                            <img src="@/assets/comfort/disco.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Крытый Бассейн">
                            <img src="@/assets/comfort/Indoor-pool.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Мини-Клуб">
                            <img src="@/assets/comfort/mini-club.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Услуги няни">
                            <img src="@/assets/comfort/heated-swimming-pool.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Бассейн с подогревом">
                            <img src="@/assets/comfort/pool_88580.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Наличие аквапарка">
                            <img src="@/assets/comfort/aquapark.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детский аквапарк">
                            <img src="@/assets/comfort/childrens-aquapark.svg" alt="">
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Wi-Fi">
                            <img src="@/assets/comfort/wi-fi.svg" alt="">
                        </div>
                    </div>
                    <div class="buy">
                        <button type="button" class="btn btn-outline-primary">Забронировать</button>
                        <button type="button" class="btn btn-outline-primary">Купить</button>
                    </div>
                </div>
            </div>
            <div class="fullInfo">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">Общее</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-services" type="button" role="tab" aria-controls="pills-services" aria-selected="false">Услуги</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-rooms" type="button" role="tab" aria-controls="pills-rooms" aria-selected="false">Номера</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-food" type="button" role="tab" aria-controls="pills-food" aria-selected="false">Еда и напитки</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-concept" type="button" role="tab" aria-controls="pills-concept" aria-selected="false">Концепция</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-restaurants" type="button" role="tab" aria-controls="pills-restaurants" aria-selected="false">Рестораны</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-bars" type="button" role="tab" aria-controls="pills-bars" aria-selected="false">Бары</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab" tabindex="0">
                        general
                    </div>

                    <div class="tab-pane fade" id="pills-services" role="tabpanel" aria-labelledby="pills-services-tab" tabindex="0">
                        services
                    </div>

                    <div class="tab-pane fade" id="pills-rooms" role="tabpanel" aria-labelledby="pills-rooms-tab" tabindex="0">
                        rooms
                    </div>

                    <div class="tab-pane fade" id="pills-food" role="tabpanel" aria-labelledby="pills-food-tab" tabindex="0">
                        food
                    </div>

                    <div class="tab-pane fade" id="pills-concept" role="tabpanel" aria-labelledby="pills-concept-tab" tabindex="0">
                        concept
                    </div>

                    <div class="tab-pane fade" id="pills-restaurants" role="tabpanel" aria-labelledby="pills-restaurants-tab" tabindex="0">
                        restaurants
                    </div>

                    <div class="tab-pane fade" id="pills-bars" role="tabpanel" aria-labelledby="pills-bars-tab" tabindex="0">
                        bars
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footerComponent></footerComponent>
  </template>
    
<script lang="ts">
    import footerComponent from '@/components/footer/footerComponent.vue';    
    export default {
      name: "fullInfoToure",
      data(){
      return{
        isAuth: false,


      }
    },
      components: {
        footerComponent,
      }
    }
    </script>
    
    <style src="./fullInfoToure.css"></style>
    