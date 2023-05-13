import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { disableForms } from 'src/app/method';
import { Api } from 'src/coral-api/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(){
    const username_ = document.getElementById('username') as HTMLInputElement;
    const password_ = document.getElementById('password') as HTMLInputElement;
    const info_ = document.getElementById('info') as HTMLElement;

    const exampleModalToggle_ = document.getElementById("exampleModalToggle") as HTMLElement;
    const shadow = document.getElementsByClassName("modal-backdrop fade show")[0];
    const body_ = document.getElementsByTagName("body")[0] as HTMLElement;

    if(username_.value == ""){ info_.textContent = "Введите логин!";  return; }
    if(password_.value == "") { info_.textContent = "Введите пороль!"; return; }

    Api.tryAuth(username_.value, password_.value).then(response=>{
      if(response.message=='authorized') {
        console.log('y')
        document.cookie = `login=${username_.value}`
        document.cookie = `password=${password_.value}`
        disableForms('exampleModalToggle');
        AppComponent.IsAuth = true
      }
      else info_.textContent = "Неверный логин или пароль!";
    })
  
  }
}
