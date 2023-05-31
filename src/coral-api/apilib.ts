export class Api {
    
    static getCities() {
        return fetch('/cities').
        then(res=>res.text())
    }
    
    //message: "authorized"/"not authorized"
    static tryAuth( login:string, password:string) : Promise<any>{
        return fetch('/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(
              {login:login, password:password})
          }).
        then(res=>res.json())
    }

    //message: "success"/"fail"
    static LogUp(login:string, password:string, name:string, lname:string, email: string,
      birthdate:string, gender:string, phone: string) : Promise<any>{
      return fetch("/adduser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(
          {login:login, password:password, name:name, lastname:lname, email:email, birthdate:birthdate, gender: gender=='male'?0:1, phone:phone})
    }).then(res=>res.json())
    }

    static getClientInfo(login:string, password:string){
      return fetch(`/account?login=${login}&password=${password}`).then(res=>res.json())
    }
}