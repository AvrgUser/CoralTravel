<template>
    <div class="section1">
        <div class="row">
            <div class="title">
                <label for="">Название</label>
                <input type="text" class="editTitle" id="title">
            </div>
            <div class="main">
                <div class="galeryinfo">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button v-for="(photo,i) in photos" :key="photo.source" type="button" 
                            data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="i" 
                            :aria-label="'Slide '+i"
                            :class="i==0?'active':''" aria-current="false">
                            </button>
                        </div>
                        <div class="carousel-inner">
                            <div :class="'carousel-item' + (i==0?' active':'')" v-for="(photo, i) in photos" :key="photo.source">
                                <img :src="photo.source" class="d-block w-100" alt="...">
                                <button style="margin-top: 50%;" @click="()=>deletePhoto(i)">Удалить</button>
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
                        <div class="addImg">
                        <input id = 'filepick' class="imgFile" type="file">
                        <button class="btn btn-outline-primary" @click="addPhoto">Добавить</button>
                    </div>
                    </div>
                </div>

                <div class="hotelinfo">
                    <div>
                        <label for="">Описание</label>
                        <textarea name="" id="description" class="editDescription" cols="30" rows="10"></textarea>
                    </div>
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
                        <label for="">Город вылета</label>
                        <select class="form-control selectpicker" id="city" data-live-search="true">
                            <option :value="i" v-for="(citys,i) in cities" :key="citys">
                                {{citys}}
                            </option>
                        </select> 
                    </div>
                    <div class="icountry">
                        <label for="">Страна назначения</label><br>
                        <select class="form-control selectpicker" id="country" data-live-search="true">
                            <option :value="i" v-for="(country,i) in countries" :key="country">
                                {{country}}
                            </option>
                        </select> 
                    </div>
                    <div class="select-servise">
                        <label for="">Сервис</label>
                        <select class="form-control selectpicker" id="select-servise"  data-live-search="true">
                            <option value="0">Самообслуживание</option>
                            <option value="1">Завтрак</option>
                            <option value="2">Все включено</option>
                            <option value="3">Все включено ультра</option>
                        </select>
                    </div>
                    <div class="date">
                        <label for="">дата вылета</label><br>
                        <input type="date" class="editDate" id="date" placeholder="Ночей">
                    </div>
                    <div class="length">
                        <label for="">Ночей</label><br>
                        <input type="number" class="editlength" id="length" placeholder="Ночей">
                    </div>
                    <div class="iprice">
                        <label for="">Цена</label><br>
                        <input type="number" class="editPrice" id="price" placeholder="Цена">
                    </div>
                </div>
                <div class="save">
                    <button type="button" @click="addTour" class="btn btn-outline-primary">Добавить</button>
                </div>
            </div>
            <div class="fullInfo">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation" v-for="(sect, i) in sections" :key="sect">
                        <button :class="'nav-link ' + (i==0?'active':'')" data-bs-toggle="pill" :data-bs-target="'#pills-'+i" type="button" role="tab" aria-controls="pills-general" :aria-selected="i==0?'true':'false'"
                        @click="()=>switchSection(i)">{{sect}}</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade" :id="'pills-'+i" role="tabpanel" :aria-labelledby="'pills-'+i+'-tab'" :tabindex="i"
                        v-for="(sect, i) in sections" :key="sect">
                        <div class="fullInfoContent" :id="'tabcontent'+i">
                            <ul class="ulInfo">
                                <div class="tComfort">
                                    <input type="text" class="ulInfo-input title"  :id="'coreTitle'+i" placeholder="Заголовок">
                                    <button type="button" class="btn btn-outline-info btnComfort" data-bs-placement="top" title="Новый список" @click="plusTitle">+</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <toats></toats>
        <errToats></errToats>
    </div>

  </template>
    
<script lang="ts">
    import toats from '@/components/toats.vue';
    import errToats from '@/components/errToats.vue';
    import { defineComponent } from 'vue';
    import { Api } from '@/coral-api/apilib';

    let input : HTMLInputElement

    let chapters : ({self: HTMLUListElement, title:HTMLInputElement, addContent: HTMLInputElement, contents:HTMLInputElement[]}|undefined) [][] = []
    let title_ : HTMLInputElement
export default defineComponent({
        
    name: "fullInfoToure",
        
    data(){
        return{
            cities: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону'] as string[],
            countries: [ "Турция ","Таиланд","Мальдивы","Куба","ОАЭ","Египет",] as string[],
            id: new URL(window.location.href).searchParams.get('id') as unknown as Number,
            activeSection: 0,
            sections: ["Общее", "Услуги", "Номера", "Еда и напитки", "Концепция", "Рестораны", "Бары"],
            photos: [] as {file: File, source:any}[],

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
        toats,
        errToats,
    },
    mounted(){
        input = document.getElementById('filepick') as HTMLInputElement
        this.switchSection(0)
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
    },
    methods:{
        switchSection(index: number){
            this.activeSection = index
            title_ = document.getElementById("coreTitle"+this.activeSection) as HTMLInputElement
        },
        addTour(){
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
            console.log(chapters)
            for(let i = 0; i<chapters.length;i++){
                let section = chapters[i]
                info+='s/'
                if(section)section.forEach(chapter=>{
                info+='t/'+chapter!.title.value+';'
                chapter!.contents.forEach(content => {
                    info+=content.value+';'
                });
            })
            }
            console.log(info)
            const title_ = document.getElementById('title') as HTMLInputElement;
            const city_ = document.getElementById('city') as HTMLSelectElement;
            const date_ = document.getElementById('date') as  HTMLInputElement;
            const length_ = document.getElementById('length') as  HTMLInputElement;
            const service_ = document.getElementById('select-servise')  as HTMLSelectElement;
            const description_ = document.getElementById('description') as HTMLInputElement;
            const price_ = document.getElementById('price') as HTMLInputElement;
            const country_ = document.getElementById('country') as HTMLSelectElement;

            const cityText = city_.options[city_.selectedIndex].textContent as string
            const countryText = city_.options[country_.selectedIndex].textContent as string

            const toats_ = document.getElementById('toast-body')
            if(title_.value == ""){toats_!.textContent = " Заполните название"; return;}
            if(description_.value == ""){ toats_!.textContent = " Заполните описание"; return;}
            if(price_.value == ""){ toats_!.textContent = "Укажите цену"; return;}

            Api.addTour(title_.value, cityText, countryText, date_.value, 
            new Number(length_.value),
            new Number(service_.value), description_.value, 
            new Number(price_.value), comforts, info).then(res=>{
                if(res.result=='success'){
                    this.photos.forEach((photo, i) => {
                        Api.uploadFile(photo.file, 'r'+i, res.id, 0)
                    });
                    let toastEl = document.getElementById('liveToast')
                    let toast = new  (window as any)["bootstrap"].Toast(toastEl)
                    document.getElementById('toastBody')!.textContent = "Тур успешно добавлен"
                    toast.show()
                }
                else{
                    let toastEl = document.getElementById('liveErrToast')
                    let toast = new (window as any)["bootstrap"].Toast(toastEl)
                    document.getElementById('errToastBody')!.textContent = "Оибка при добавке тура"
                    toast.show()
                }
            })
            window.location.replace(`http://${window.location.host}/admin?login=admin&password=admin`);
        },
        addPhoto(){
            let file = input.files![0]
            let reader = new FileReader()
            let source
            reader.onload = (ev)=>{
                source = ev.target?.result
                this.photos[this.photos.length] ={file: file, source: source}
                this.$forceUpdate()
                this.$nextTick().then(()=>{
                    let car = new (window as any)["bootstrap"].Carousel(document.querySelector('#carouselExampleIndicators'))
                    car.to(this.photos.length-1)
                })
            }

            reader.readAsDataURL(file)
        },
        deletePhoto(i:number){

            this.photos.splice(i, 1)
            this.$forceUpdate()
            let car = new (window as any)["bootstrap"].Carousel(document.querySelector('#carouselExampleIndicators'))
            car.next()
        },
        plusTitle(text : any = '') {
            if (!chapters[this.activeSection]) chapters[this.activeSection] = []
            let index = chapters[this.activeSection].length;

            const general = document.getElementById("tabcontent"+this.activeSection);

            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const div = document.createElement("div");
            const inputTitle = document.createElement("input");
            const inputContent = document.createElement("input");
            const btnTitle = document.createElement("button");
            const btnContent = document.createElement("button");
            
            chapters[this.activeSection][index] = {
                self: ul,
                title: inputTitle,
                addContent: inputContent,
                contents: []
            }

            ul.id = 'ulId_' + index+'of'+this.activeSection
            ul.className = 'ulInfo'

            div.id = 'divId_' + index+'of'+this.activeSection
            div.className = 'titleComfort'
            ul.appendChild(div)

            inputTitle.id = 'inputTitleId_' + index+'of'+this.activeSection
            inputTitle.type = "text";
            inputTitle.placeholder = "Заголовок";
            inputTitle.className = 'ulInfo-input';
            if(typeof text != 'string') {
                console.log('d')
                inputTitle.value = title_.value;
            }
            else inputTitle.value = text;
            console.log(title_.value)
            inputTitle.style.fontWeight = "bold";

            title_.value = '';

            btnTitle.textContent = "-";
            btnTitle.id = 'btnTitle_' + index;
            btnTitle.className = 'btnComfort';
            btnTitle.onclick = () =>{
                console.log('deleted:')
                console.log(chapters[index])
                chapters[this.activeSection].splice(index, 1)
                ul.remove()
            }

            div.appendChild(inputTitle);
            div.appendChild(btnTitle);

            li.id = 'liId_' + index+'of'+this.activeSection
            li.className = 'ulInfo-item'

            inputContent.id = 'inputContentId_' + index+'of'+this.activeSection
            inputContent.type = "text";
            inputContent.placeholder = "Содержание";
            inputContent.className = 'ulInfo-input';

            btnContent.textContent = "+"
            btnContent.id = 'btnTitle_' + index+'of'+this.activeSection
            btnContent.className = 'btnComfort'
            btnContent.onclick = () =>{
                this.plusContent(index, inputContent.value)
            }
            li.appendChild(inputContent)
            li.appendChild(btnContent)

            ul.appendChild(li)

            general!.appendChild(ul);
        },
        plusContent(chapter: number, text: string = '') {
            let index = chapters[this.activeSection][chapter]!.contents.length
            const ul = document.getElementById("ulId_" + chapter +'of'+this.activeSection)
            const li = document.createElement("li");
            const inputContent = document.createElement("input");
            const btnContent = document.createElement("button");
            chapters[this.activeSection][chapter]!.contents[index] = inputContent

            li.id = 'contId_' + index+'of'+this.activeSection
            li.className = 'ulInfo-item'

            inputContent.id = 'inputContentId_' + index +'of'+this.activeSection
            inputContent.type = "text"
            inputContent.className = 'ulInfo-input'
            inputContent.placeholder = "Содержание"
            inputContent.value = text
            
            btnContent.textContent = "-"
            btnContent.id = 'btnContentId_' + index +'of'+this.activeSection
            btnContent.className = 'btnComfort'
            btnContent.onclick = () =>{
                chapters[this.activeSection][chapter]!.contents.splice(index, 1)
                console.log(chapters)
                li.remove()
            }
            
            li.appendChild(inputContent);
            li.appendChild(btnContent);
            
            ul!.appendChild(li)
        }
    }
})
    </script>
    
    <style src="./addToure.css"></style>
    