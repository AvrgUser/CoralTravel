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
                <input type="text" class="editTitle" id="title" :value="title">
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
                    <textarea name="" id="description" class="editDescription" cols="30" rows="10" :value="description"></textarea>
                    <div class="featuresWrap ">

                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детское меню в ресторане">
                            <input type="checkbox" class="btn-check" id="r1" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r1">
                                <img src="@/assets/comfort/menu.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детские бассейны">
                            <input type="checkbox" class="btn-check" id="r2" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r2">
                                <img src="@/assets/comfort/pool.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Дискотека">
                            <input type="checkbox" class="btn-check" id="r3" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r3">
                                <img src="@/assets/comfort/disco.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Крытый Бассейн">
                            <input type="checkbox" class="btn-check" id="r4" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r4">
                                <img src="@/assets/comfort/Indoor-pool.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Мини-Клуб">
                            <input type="checkbox" class="btn-check" id="r5" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r5">
                                <img src="@/assets/comfort/mini-club.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Услуги няни">
                            <input type="checkbox" class="btn-check" id="r6" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r6">
                                <img src="@/assets/comfort/heated-swimming-pool.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Бассейн с подогревом">
                            <input type="checkbox" class="btn-check" id="r7" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r7">
                                <img src="@/assets/comfort/pool_88580.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Наличие аквапарка">
                            <input type="checkbox" class="btn-check" id="r8" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r8">
                                <img src="@/assets/comfort/aquapark.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детский аквапарк">
                            <input type="checkbox" class="btn-check" id="r10" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r10">
                                <img src="@/assets/comfort/childrens-aquapark.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Wi-Fi">
                            <input type="checkbox" class="btn-check" id="r11" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r11">
                                <img src="@/assets/comfort/wi-fi.svg" class="comfortImg" alt="">
                            </label>
                        </div>
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
        <footerComponent></footerComponent>
    </div>
  </template>
    
  <script lang="ts">
    import { defineComponent } from 'vue';
    import { Api } from '@/coral-api/apilib';

    export default defineComponent({
        
      name: "fullInfoToure",
        
      data(){
        return{
            isAuth: false,
            title: '',
            description: '',
        }
      },
      components: {
      },
      beforeCreate(){
          Api.getTourInfo(new URL(window.location.href).searchParams.get('id') as unknown as Number).then(res =>{
            this.title = res.name;
            this.description = res.description;
          })
      }
    })
    </script>
    
    <style src="./editToure.css"></style>
    