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
                <h4>{{title}}</h4>
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
                    <h6>{{title}}</h6>
                    <p>{{description}}</p>
                    <div class="featuresWrap ">

                    </div>
                </div>
            </div>
        </div>
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
    
    <style src="./fullInfoToure.css"></style>
    