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
                            <input type="checkbox" class="btn-check" id="r9" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r9">
                                <img src="@/assets/comfort/childrens-aquapark.svg"  class="comfortImg" alt="">
                            </label>
                        </div>
                        <div class="features-item" data-bs-toggle="tooltip" data-bs-placement="top" title="Wi-Fi">
                            <input type="checkbox" class="btn-check" id="r10" autocomplete="off">
                            <label class="btn btn-outline-primary comfortLabel" for="r10">
                                <img src="@/assets/comfort/wi-fi.svg" class="comfortImg" alt="">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subMain">
                <div class="cardinfo">
                    <div class="select-country">
                        <label for="">Город</label>
                        <select class="form-control selectpicker" id="select-country" data-live-search="true">
                            <option value="0">China</option>
                            <option value="1">Malayasia</option>
                            <option value="2">Singapore</option>
                        </select>  
                    </div>
                    <div class="select-servise">
                        <label for="">Сервис</label>
                        <select class="form-control selectpicker" id="select-servise" :value="service" data-live-search="true">
                            <option value="0">Самообслуживание</option>
                            <option value="1">Завтрак</option>
                            <option value="2">Все включено</option>
                            <option value="3">Все включено ультра</option>
                        </select>
                    </div>
                    <div class="iprice">
                        <label for="">Цена</label><br>
                        <input type="number" class="editPrice" id="price" placeholder="цена" :value="price">
                    </div>
                </div>
                <div class="save">
                    <button type="button" @click="save" class="btn btn-outline-primary">Сохранить</button>
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
                        <ul class="ulInfo">
                            <div class="tComfort">
                                <input type="text" class="ulInfo-input title"  id="ulInfo-input-title" placeholder="Заголовок">
                                <button type="button" class="btn btn-outline-info btnComfort" data-bs-placement="top" title="Новый список" @click="plusTitle">+</button>
                            </div>
                        </ul>
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

    let chapters : {self: HTMLUListElement, title:HTMLInputElement, addContent: HTMLInputElement, contents:HTMLInputElement[]}[] = []

    let title_ : HTMLInputElement
export default defineComponent({
        
    name: "fullInfoToure",
        
    data(){
        return{
            id: new URL(window.location.href).searchParams.get('id') as unknown as Number,
            isAuth: false,
            title: '',
            description: '',
            city: '',
            date: '',
            length: 0,
            hotel: 0,
            service: 0,
            price: 0,


            menu: document.getElementById("r1") as HTMLInputElement,
            pool: document.getElementById("r2") as HTMLInputElement,
            disco: document.getElementById("r3") as HTMLInputElement,
            indoorPool: document.getElementById("r4") as HTMLInputElement,
            miniClub: document.getElementById("r5") as HTMLInputElement,
            heatedSwimmingPool: document.getElementById("r6") as HTMLInputElement,
            pool88: document.getElementById("r7") as HTMLInputElement,
            aquapark: document.getElementById("r8") as HTMLInputElement,
            childrensAquapark:  document.getElementById("r9") as HTMLInputElement,
            wiFi: document.getElementById("r10") as HTMLInputElement,

        }
    },
    components: {
    },
    mounted(){
        title_ = document.getElementById("ulInfo-input-title") as HTMLInputElement
        Api.getTourInfo(new URL(window.location.href).searchParams.get('id') as unknown as Number).then(res =>{
                this.title = res.name;
                this.description = res.description;
                this.city = res.city;
                this.date = res.date;
                this.length = res.length;
                this.hotel = res.hotel;
                this.service = res.service;
                this.price = res.price;

                this.menu = document.getElementById("r1") as HTMLInputElement
                this.pool = document.getElementById("r2") as HTMLInputElement
                this.disco = document.getElementById("r3") as HTMLInputElement
                this.indoorPool = document.getElementById("r4") as HTMLInputElement
                this.miniClub = document.getElementById("r5") as HTMLInputElement
                this.heatedSwimmingPool = document.getElementById("r6") as HTMLInputElement
                this.pool88 = document.getElementById("r7") as HTMLInputElement
                this.aquapark = document.getElementById("r8") as HTMLInputElement
                this.childrensAquapark = document.getElementById("r9") as HTMLInputElement
                this.wiFi = document.getElementById("r10") as HTMLInputElement

                this.menu.checked = res.comforts.includes(`-kfood;`);
                this.pool.checked = res.comforts.includes(`-kpool;`);
                this.disco.checked = res.comforts.includes(`-disco;`);
                this.indoorPool = res.comforts.includes(`-cpool;`);
                this.miniClub.checked = res.comforts.includes(`-mclub;`);
                this.heatedSwimmingPool.checked = res.comforts.includes(`/nurse;`);
                this.pool88.checked = res.comforts.includes(`-hpool;`);
                this.aquapark.checked = res.comforts.includes(`-aqua;`);
                this.childrensAquapark.checked = res.comforts.includes(`-kaqua;`);
                this.wiFi.checked = res.comforts.includes(`-wifi;`);

                if(res.info){
                    let titles = (res.info as string).split('t/')
                    for(let t = 0;t<titles.length;t++){
                        let contents = titles[t].split(';')
                        this.plusTitle(contents[0])
                        for(let i =1; i<contents.length;i++){
                            if(contents[i].length>0)
                            this.plusContent(i-1, contents[i])
                        }
                    }
                }
        })
    },
    methods:{
        save(){
            let comforts = ''
            if(this.menu.checked) {
                if(! comforts.includes(`-kfood;`))comforts+=`-kfood;`
            }
            else comforts.replace(`-kfood;`,'')
            if(this.pool.checked) {
                if(! comforts.includes(`-kpool;`))comforts+=`-kpool;`
            }
            else comforts.replace(`-kpool;`,'')
            if(this.disco.checked) {
                if(! comforts.includes(`-disco;`))comforts+=`-disco;`
            }
            else comforts.replace(`-disco;`,'')
            if(this.indoorPool.checked) {
                if(! comforts.includes(`-cpool;`))comforts+=`-cpool;`
            }
            else comforts.replace(`-cpool;`,'')
            if(this.miniClub.checked) {
                if(! comforts.includes(`-mclub;`))comforts+=`-mclub;`
            }
            else comforts.replace(`-mclub;`,'')
            if(this.heatedSwimmingPool.checked) {
                if(! comforts.includes(`-nurse;`))comforts+=`-nurse;`
            }
            else comforts.replace(`-nurse;`,'')
            if(this.pool88.checked) {
                if(! comforts.includes(`-hpool;`))comforts+=`-hpool;`
            }
            else comforts.replace(`-hpool;`,'')
            if(this.aquapark.checked) {
                if(! comforts.includes(`-aqua;`))comforts+=`-aqua;`
            }
            else comforts.replace(`-aqua;`,'')
            if(this.childrensAquapark.checked) {
                if(! comforts.includes(`-kaqua;`))comforts+=`-kaqua;`
            }
            else comforts.replace(`-kaqua;`,'')
            if(this.wiFi.checked) {
                if(!comforts.includes(`-wifi;`))comforts+=`-wifi;`
            }
            else comforts.replace(`-wifi;`,'')

            let info = ''
            chapters.forEach(chapter=>{
                info+='t/'+chapter.title.value+';'
                chapter.contents.forEach(content => {
                    info+=content.value+';'
                });
            })
            Api.updateTourInfo(this.id, this.title, this.city, this.hotel, this.date, 
            this.length, this.service, this.description, this.price, comforts, info)
        },
        plusTitle(text = '') {
            let index = chapters.length;

            const general = document.getElementById("pills-general");

            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const div = document.createElement("div");
            const inputTitle = document.createElement("input");
            const inputContent = document.createElement("input");
            const btnTitle = document.createElement("button");
            const btnContent = document.createElement("button");
            
            chapters[index] = {
                self: ul,
                title: inputTitle,
                addContent: inputContent,
                contents: []
            }

            ul.id = 'ulId_' + index;
            ul.className = 'ulInfo'

            div.id = 'divId_' + index;
            div.className = 'titleComfort'
            ul.appendChild(div)

            inputTitle.id = 'inputTitleId_' + index;
            inputTitle.type = "text";
            inputTitle.placeholder = "Заголовок";
            inputTitle.className = 'ulInfo-input';
            if(typeof text != typeof String)inputTitle.value = title_.value;
            else inputTitle.value = text;
            inputTitle.style.fontWeight = "bold";

            title_.value = '';

            btnTitle.textContent = "-";
            btnTitle.id = 'btnTitle_' + index;
            btnTitle.className = 'btnComfort';
            btnTitle.onclick = () =>{
                chapters.slice(index, 1)
                ul.remove()
            }

            div.appendChild(inputTitle);
            div.appendChild(btnTitle);

            li.id = 'liId_' + index;
            li.className = 'ulInfo-item'

            inputContent.id = 'inputContentId_' + index;
            inputContent.type = "text";
            inputContent.placeholder = "Содержание";
            inputContent.className = 'ulInfo-input';

            btnContent.textContent = "+";
            btnContent.id = 'btnTitle_' + index;
            btnContent.className = 'btnComfort';
            btnContent.onclick = () =>{
                this.plusContent(index, inputContent.value);
            }
            li.appendChild(inputContent)
            li.appendChild(btnContent)

            ul.appendChild(li)

            general!.appendChild(ul);
        },
        plusContent(chapter: number, text: string = '') {
            let index = chapters[chapter].contents.length
            const ul = document.getElementById("ulId_" + chapter); 
            const li = document.createElement("li");
            const inputContent = document.createElement("input");
            const btnContent = document.createElement("button");
            chapters[chapter].contents[index] = inputContent

            li.id = 'contId_' + index;
            li.className = 'ulInfo-item'

            inputContent.id = 'inputContentId_' + index;
            inputContent.type = "text";
            inputContent.className = 'ulInfo-input';
            inputContent.placeholder = "Содержание";
            inputContent.value = text
            
            btnContent.textContent = "-";
            btnContent.id = 'btnContentId_' + index;
            btnContent.className = 'btnComfort';
            btnContent.onclick = () =>{
                chapters[chapter].contents.splice(index, 1)
                li.remove()
            }
            
            li.appendChild(inputContent);
            li.appendChild(btnContent);
            
            ul!.appendChild(li)
        }
    }
})
    </script>
    
    <style src="./editToure.css"></style>
    