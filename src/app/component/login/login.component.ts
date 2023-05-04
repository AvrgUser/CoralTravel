import { Component, Input } from '@angular/core';

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

    exampleModalToggle_.removeAttribute("role");
    exampleModalToggle_.removeAttribute("aria-modal");
    exampleModalToggle_.setAttribute('aria-hidden', 'true');
    exampleModalToggle_.style.display = "none";
    exampleModalToggle_.setAttribute('class','modal fade');

    shadow.remove()
    // body_.removeAttribute("class");
    body_.removeAttribute('class')
    body_.removeAttribute('style')
    body_.removeAttribute('wfd-invisible')
  }
}
