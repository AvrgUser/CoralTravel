<template>
  <headerMobile v-if="mobile"></headerMobile>
  <headerComponent v-else></headerComponent>

  <div class="tab-content" id="myTabContent">
    <appMain></appMain>
    <appToure v-if="favTours.length>0" :favTours="favTours"></appToure>
    <appAction></appAction>
    <appContacts></appContacts>
  </div>

  <LoginComponent></LoginComponent>
  <RegisterComponent></RegisterComponent>
  <ResetPasswordComponent></ResetPasswordComponent>

  <privacyPolicy></privacyPolicy>
  <userAgreement></userAgreement>

  <FooterComponent></FooterComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterComponent from "./components/footer/footerComponent.vue";

import LoginComponent from "./components/login/login.vue"
import RegisterComponent from "./components/register/register.vue"
import ResetPasswordComponent from "./components/reset-password/reset-password.vue"

import privacyPolicy from "./components/privacy-policy/privacyPolicy.vue";
import userAgreement from "./components/user-agreement/userAgreement.vue";

import appMain from "./components/appComponents/main.vue"
import appToure from  "./components/appComponents/tour.vue"
import appContacts from  "./components/appComponents/contacts.vue"
import headerComponent from "./components/appComponents/header/headerComponent.vue"
import headerMobile from "./components/appComponents/header/headerMobyle/headerMobile.vue"

import { Cookie } from "./cookie/cookieRW";
import { Api } from "./coral-api/apilib";
import { User } from "./userdata";

export default defineComponent({
  name: "App",

  data(){
    return{
      isAuth: false,
      firstName: "f",
      lastName: "f",
      favTours: '',
      mobile: false,
    }
  },
  
  methods:{
    test(){
      
      this.$forceUpdate;
    },
  },

  components: { 
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    privacyPolicy,
    userAgreement,
    appMain,
    appToure,
    appContacts,
    headerComponent,
    headerMobile
  },
  beforeCreate(){
    const userAgent = navigator.userAgent;
    console.log(userAgent);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.mobile = true
    } else if (/Windows|Macintosh|Linux|Desktop|PC/i.test(navigator.userAgent)) {
      this.mobile = false;
    } else {
      console.log("Не удалось определить тип устройства");
    }
    console.log(this.mobile)
  },
  created(){
    User.listen('isAuth', (value: any)=>this.isAuth = value)
    User.listen('firstName', (value: any)=>this.firstName = value)
    User.listen('lastName', (value: any)=>this.lastName = value)
    User.value('update-user-name', ()=>Api.getClientInfo(Cookie.get("login"), Cookie.get("password")).then(res=>{
      User.value('firstName', res.name)
      User.value('lastName', res.lastname)
      this.$forceUpdate()
    }))
    User.value('update-user-name')()
    let login = Cookie.get('login')
    let password = Cookie.get('password')
    if(login!=''&&password!='')Api.tryAuth(login, password).then(result=>{
      if(result.message=='authorized') {
        User.value('isAuth', true)
        console.log('yy')
        Api.getClientInfo(login, password).then(res=>{
          this.favTours = res.favourites
          if(res.favourites.length==0)this.favTours+=' '
          console.log(this.favTours)
          this.$forceUpdate()
        })
      }
      else{
        this.favTours+='empty'
        console.log('nn')
        this.$forceUpdate()
      }
    })
    else{
        this.favTours+='empty'
        
        this.$forceUpdate()
      }
  }
})

</script>

<style src="./main.css"></style>
