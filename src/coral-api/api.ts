export class Api {
    
    static getCities() {
        return fetch('/cities').
        then(res=>res.text())
    }
    
    //message: "authorized"/"not authorized"
    static tryAuth( login:string,password:string){
        return fetch('/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: `{"login": "${login}", "password": "${password}"}`
          }).
        then(res=>res.json())
    }

    //message: "success"/"fail"
    static LogUp(login:string,password:string){
      return fetch("/adduser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: `{"login": "${login}", "password": "${password}"}`
    }).then(res=>res.json())
    }

    //static getClientInfo()
}