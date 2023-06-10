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
                    <div class="featuresWrap" v-if="comforts">
                        <div v-if="comforts.includes(`-kfood;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детское меню в ресторане">
                            <img src="@/assets/comfort/menu.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-kpool;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детские бассейны">
                            <img src="@/assets/comfort/pool.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-disco;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Дискотека">
                            <img src="@/assets/comfort/disco.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-cpool;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Крытый Бассейн">
                            <img src="@/assets/comfort/Indoor-pool.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-mclub;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Мини-Клуб">
                            <img src="@/assets/comfort/mini-club.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-nurse;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Услуги няни">
                            <img src="@/assets/comfort/heated-swimming-pool.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-hpool;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Бассейн с подогревом">
                            <img src="@/assets/comfort/pool_88580.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-aqua;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Наличие аквапарка">
                            <img src="@/assets/comfort/aquapark.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-kaqua;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Детский аквапарк">
                            <img src="@/assets/comfort/childrens-aquapark.svg" alt="">
                        </div>
                        <div v-if="comforts.includes(`-wifi;`)" class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Wi-Fi">
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
                    <li class="nav-item" role="presentation" v-for="(sect, i) in sections" :key="sect">
                        <button :class="'nav-link ' + (i==0?'active':'')" data-bs-toggle="pill" :data-bs-target="'#pills-'+i" type="button" role="tab" aria-controls="pills-general" :aria-selected="i==0?'true':'false'">{{sect}}</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" :id="'pills-'+i" role="tabpanel" :aria-labelledby="'pills-'+i+'-tab'" :tabindex="i"
                    v-for="(sect, i) in sections" :key="sect">
                        
                        <dl class="ulInfo">
                            <div style="max-width: 268px;" v-for="(title, t) in chapters[i+1]" :key="title.title">
                                <dt >{{title.title}}</dt>
                                <dd style="margin-left: 14px;" v-for="content in chapters[i+1][t].contents" :key="content">{{ content }}</dd>
                            </div>
                            
                        </dl>
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


    let chapters : {title:string, contents:string[]}[][] = []

    import footerComponent from '@/components/footer/footerComponent.vue';
    export default defineComponent({
        
        name: "fullInfoToure",
        
        data(){
        return{
            isAuth: false,
            title: '',
            description: '',
            comforts: "",
            sections: ["Общее", "Услуги", "Номера", "Еда и напитки", "Концепция", "Рестораны", "Бары"],
            activeSection: 0,
            
            get chapters() : {title:string, contents:string[]}[][] {
                return chapters
            }
            
        }
        },
        components: {
            footerComponent,
        },
        beforeCreate(){
            Api.getTourInfo(new URL(window.location.href).searchParams.get('id') as unknown as Number).then(res =>{
                        this.title = res.name
                        this.description = res.description
                        this.comforts = res.comforts

                        if(res.info){
                    let sections = (res.info as string).split('s/')
                    this.activeSection--
                    for(let s = 0;s<sections.length;s++){
                        let section = sections[s]
                        console.log(section)
                        let titles = section.split('t/')
                        chapters[s] = []
                        if(section)for(let t = 1;t<titles.length;t++){                            
                            let contents = titles[t].split(';')
                            if(contents&&contents[0]){
                                chapters[s][t-1] = {title: contents[0], contents: []}
                                for(let i =1; i<contents.length;i++){
                                    if(contents[i].length>0)
                                    chapters[s][t-1].contents[chapters[s][t-1].contents.length] = contents[i]
                                }
                            }
                        }
                        this.activeSection++
                    }
                    console.log(chapters)
                }
            })
        },
    })
    </script>
    
    <style src="./fullInfoToure.css"></style>
    