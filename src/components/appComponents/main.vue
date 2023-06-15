<template>
    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
        <search></search>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1">
                </button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2">
                </button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3">
                </button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/corusel/travel1.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/corusel/travel2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/corusel/travel3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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
                        <div class="pop-tour" id="ПОПУЛЯРНОЕ СУКА!!!!!!!">

                        </div>
                    </div>
                </div>
            </div>

            <div class="section_2 s2">
                <div class="container">
                    <div class="row-advantages">
                    <div class="col-lg-12 col.xs-12 col-sm-12">
                        <h2 class="header-s text-center sh2 h2">
                        <span>Почему выбирают нас:</span>
                        </h2>
                    </div>
                    </div>
                    <!-- Блок с приемущиствами-->
                    <div class="feature text-center">
                        <div class="row row-advantages">
                            <div class="col-lg-3 col-md-6">
                                <div class="feature-box sd2">
                                    <img src="@/assets/Sadvantages/payment.svg" alt="BRANDING"><br>
                                    <p>Удобство и безопасность оплаты</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="feature-box sd2">
                                    <img src="@/assets/Sadvantages/discount.svg" alt="DESIGN"><br>
                                    <p>Акции и скидки</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="feature-box sd2">
                                    <img src="@/assets/Sadvantages/support.svg" alt="DEVELOPMENT"><br>
                                    <p>Поддержка — круглосуточно и без выходных.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent } from "vue";
import search from "../search/search.vue";
export default defineComponent({
    name: "appMain",
    methods:{
    
    },
    components: {
        search
    }
})
</script>
  
<style src=""></style>