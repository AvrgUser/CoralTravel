<template>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://cdn.coral.ru/content/logo-1e92b1a6.svg" style="cursor: pointer;" @click="main()" width="140px !important">
            </a>
            <div class="navbar-collapse" id="navbarTogglerDemo02">
                <div v-if="isAuth">
                    <a href="/account">{{firstName}} {{lastName}}</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="section1">
        <div class="row">
            <div class="title">
                <h4>{{title}}</h4> 
                <div class="option">
                    <Button class="btn btn-outline-primary" v-if="!inFavourites" @click="addFav">Добавить в избранное</Button>
                    <Button class="btn btn-outline-primary" v-else @click="remFav">Убрать из избранного</Button>
                    <strong class="btn btn-outline-primary" :data-clipboard-text="location" data-bs-placement="top" data-bs-title="Ссылка скопирована" @click="tooltipCopy()" id="copyLink">Поделиться</strong>
                </div>
            </div>
            <div class="main">
                <div class="galeryinfo">
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button v-for="(photo,i) in photos" :key="photo" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="i" :aria-label="'Slide '+i"
                            :class="i==0?'active':''" aria-current="false"></button>
                        </div>
                        <div class="carousel-inner">
                            <div :class="'carousel-item' + (i==0?' active':'')" v-for="(photo, i) in photos" :key="photo">
                                <img :src="'/media/photo/tour/'+id+'/'+photo" class="d-block w-100" alt="...">
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
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Забронировать</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">CoralTravel</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Cтоимость бронирования тура {{ title }} составляет {{ parseInt(''+0.2*parseFloat(price)*100)/100 }}₽ (20% от всей суммы)
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalSucces">Забронировать</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal fade" id="exampleModalSucces" tabindex="-1" aria-labelledby="exampleModalSuccesLable" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">CoralTravel</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Тур {{ title }} успешно забронирован и добавлен в личный кабинет.
                                    Ожидайте звонок консультаната в течении 2 часов.
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Готово</button>
                                </div>
                                </div>
                            </div>
                        </div>
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
                    <div :class="'tab-pane fade'+(i==0?' active show':'')" :id="'pills-'+i" role="tabpanel"
                    :aria-labelledby="'pills-'+i+'-tab'" :tabindex="i"
                    v-for="(sect, i) in sections" :key="sect">
                        <div class="fullInfoContent">
                            <dl class="ulInfo" v-for="(title, t) in chapters[i+1]" :key="title.title">
                                <div style="max-width: 268px;" 
                                >
                                    <dt >{{title.title}}</dt>
                                    <dd style="margin-left: 14px;" 
                                    v-for="content in chapters[i+1][t].contents" :key="content">{{ content }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <div class="coment">
                <strong>Отзывы</strong>
                <div class="coments" id="coments">
                    <div class="comentUser" v-for="(comment, i) in comments" :key="i">
                        <div class="name-rating">
                            <strong>{{ comment.name }} {{ comment.lastname }}</strong>
                        </div>
                        <p>{{ comment.message }}</p>
                    </div>
                </div>
                <div v-if="true/*showCommentField*/" class="addComent">
                    <textarea id="commentField" cols="30" rows="10" placeholder="Оставить отзыв"></textarea>
                    <div>
                        <button type="button" class="btn btn-outline-primary btnAddCom" @click="sendComment">Отправить</button>
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
    let photos: string[] = []

    let commentText : HTMLTextAreaElement

    import footerComponent from '@/components/footer/footerComponent.vue';

    import { Cookie } from '@/cookie/cookieRW';
    import { User } from '@/userdata';
    import ClipboardJS from 'clipboard';

    let tooltip_ : any
    let tooltip : any

    export default defineComponent({
        
        name: "fullInfoToure",
        
        data(){
        return{
            firstName: "f",
            lastName: "f",
            isAuth: false,
            title: '',
            description: '',
            comforts: "",
            sections: ["Общее", "Услуги", "Номера", "Еда и напитки", "Концепция", "Рестораны", "Бары"],
            activeSection: 0,
            id: 0,
            inFavourites: false,
            price: '',
            location: window.location.href,
            comments: [] as {name:string, lastname:string, mark:number, message:string, login:string}[],
            showCommentField: false,
            
            get chapters() : {title:string, contents:string[]}[][] {
                return chapters
            },
            
            get photos() : string[] {
                return photos
            }
        }
        },
        components: {
            footerComponent
        },
        methods:{
            main(){
                window.location.replace(`http://${window.location.host}/`);
            },
            tooltipCopy(){
                tooltip.delay = {
                    show: '100',
                    hide: '100'
                }
                tooltip.show()
                
                setTimeout(()=>tooltip.hide(), 2000)
            },
            addFav(){
                Api.addToFavourites(Cookie.get('login'), Cookie.get('password'), ''+this.id).then(res=>{
                    if(res.result=='success') this.inFavourites = true
                    this.$forceUpdate()
                })
            },
            remFav(){
                Api.removeFavourite(Cookie.get('login'), Cookie.get('password'), ''+this.id).then(res=>{
                    if(res.result=='success') this.inFavourites = false
                    this.$forceUpdate()
                })
            },
            sendComment(){
                commentText = document.getElementById('commentField') as HTMLTextAreaElement
                Api.postComment(Cookie.get('login'), Cookie.get('password'), this.id, 5, commentText.value).then(res=>{
                    if(res.result == 'success')
                    Api.getComments(this.id+'').then(res1=>{
                        commentText.value=''
                        this.comments = res1.comments
                        this.showCommentField = false
                        this.$forceUpdate()
                    })
                    else console.log('cant comment')
                })
            }
        },
        beforeCreate(){

            User.listen('isAuth', (value: any)=>this.isAuth = value)
            User.listen('firstName', (value: any)=>this.firstName = value)
            User.listen('lastName', (value: any)=>this.lastName = value)
            User.value('update-user-data', ()=>Api.getClientInfo(Cookie.get("login"), Cookie.get("password")).then(res=>{
                User.value('firstName', res.name)
                User.value('lastName', res.lastname)
                this.inFavourites = res.favourites&&res.favourites.length&&res.favourites.split(';').includes(this.id)
                this.$forceUpdate()
            }))
            User.value('update-user-data')()
            let login = Cookie.get('login')
            let password = Cookie.get('password')
            if(login!=''&&password!='')Api.tryAuth(login, password).then(result=>{
            if(result.message=='authorized') {
                User.value('isAuth', true)
                console.log('yy')
            }
            else{
                console.log('nn')
            }
        })
            
            this.id = (new URL(window.location.href).searchParams.get('id') as unknown as number)

            Api.getTourInfo(this.id).then(res =>{
                this.title = res.name
                this.description = res.description
                this.comforts = res.comforts
                this.price = res.price
                photos = []
                let media = res.media.split(';') as string[]
                media.forEach(file => {
                    if(file!='')photos.push(file)
                });
                console.log('ph: '+photos)

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
                this.$forceUpdate()
            })

            Api.getComments(this.id+'').then(res=>{
                this.comments = res.comments
                this.showCommentField = true
                this.comments.forEach(element => {
                    if(element.login.toUpperCase() == Cookie.get('login').toUpperCase()) this.showCommentField = false
                })
                this.$forceUpdate()
            })
        },
        mounted(){
            tooltip_ = document.getElementById("copyLink")
            tooltip = new (window as any)["bootstrap"].Tooltip(tooltip_, {
                trigger: 'click'
            })
            tooltip.hide()
            new ClipboardJS('.btn');
        }
    })
    </script>
    
    <style src="./fullInfoToure.css"></style>

    