export class Api {
    
    static getCities() {
        return fetch('/cities').
        then(res=>res.text())
    }
    
    static tryAuth(login:string,password:string){
        return fetch('/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: `login: ${login}, password: ${password}`
          }).
        then(res=>res.json())
    }
}