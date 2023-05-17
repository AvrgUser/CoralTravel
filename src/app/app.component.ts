import { Component, OnInit } from '@angular/core';
import {Api} from '../coral-api/api'
import {Cookie} from '../cookie/cookieRW'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CoralTravel'
  get isAuth() { 
    return AppComponent.IsAuth
  }
  static IsAuth = false

  logOut(){
    Cookie.clear('login')
    Cookie.clear('password')
  }

  ngOnInit() {
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
        AppComponent.IsAuth = true
        console.log('yy')
      }
      
    })
  }
}
