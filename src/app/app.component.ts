import { Component, OnInit } from '@angular/core';
import {Api} from '../coral-api/api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'CoralTravel';
  get isAuth() { 
    return AppComponent.IsAuth
  }
  static IsAuth = false;
  ngOnInit() {
    Api.getCities().then(res=>{
      let cities = res.split(' ') as String[]
      let text = ''
      cities.forEach(element => {
        text+=element+' '
      });
      console.log('cities: '+text)
    })
    let cookies = document.cookie.split(';')
    let login = '', password = ''
    for(let i = 0;i<cookies.length;i++){
      let data = cookies[i].split('=')
      if(data[0].includes ('login'))login = data[1]
      else if(data[0].includes ('password'))password = data[1]
    }
    if(login!=''&&password!='')Api.tryAuth(login, password).then(result=>{
      if(result.message=='authorized') {
        AppComponent.IsAuth = true
        console.log('yy')
      }
      
    })
  }
}
