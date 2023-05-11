import { Component } from '@angular/core';
import { disableForms } from 'src/app/method';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register(){
    
    const loginR_ = document.getElementById('loginR') as HTMLInputElement;
    const firstName_ = document.getElementById('firstName') as HTMLInputElement;
    const lastName_ = document.getElementById('lastName') as HTMLInputElement;
    const email_ = document.getElementById('email') as HTMLInputElement;
    const passwordR_ = document.getElementById('passwordR') as HTMLInputElement;
    const politics_ = document.getElementById('politics') as HTMLInputElement;
    const infoR_ = document.getElementById('infoR') as HTMLElement;
    if(loginR_.value == ""){ infoR_.textContent = "Введите логин!";  return; }
    
    console.log('1')
    if(firstName_.value == "") { infoR_.textContent = "Введите имя!"; return; }
    if(lastName_.value == ""){ infoR_.textContent = "Введите фамилию!";  return; }
    if(email_.value == "") { infoR_.textContent = "Введите адрес элетронной почты!"; return; }
    if(passwordR_.value == "") { infoR_.textContent = "Введите пороль!"; return; }
    if(!politics_.checked) { infoR_.textContent = "Примите соглашение"; return; }

    disableForms('exampleModalToggle2');
  }
}

