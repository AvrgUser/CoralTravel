export class Api {
    
    static getClientsList() {
        return fetch('/users').
        then(res=>res.json())
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

    static updateClientInfo(login:string, password:string, name:string, lname:string, email: string,
      birthdate:string, gender:string, phone: string) : Promise<any>{
      return fetch("/updateacc", {
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

    static getUserInfo(id:Number){
      return fetch(`/userinfo?id=${id}`).then(res=>res.json())
    }

    static getTourInfo(id:Number){
      return fetch(`/tourinfo?id=${id}`).then(res=>res.json())
    }

    static getToursList(...args : string[]){
      let query = " "
      args.forEach(element=>{
        query+=element[0]+':'+element[1]+';'
      })
      return fetch(`/tours?filters=${query}`).then(res=>res.json())
    }

    static updateTourInfo(id:Number, name:string, city:string, date: string, length:Number, service:Number, description:string, price:Number, comforts: string, info:string){
      return fetch("/updtour?id="+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(
          {name: name, city: city, date: date, length: length, service: service, description: description, price: price, comforts: comforts, info: info})
    }).then(res=>res.json())
    }

    static addTour(name:string, city:string, date: string, length:Number, service:Number, description:string, price:Number, comforts: string, info:string){
      return fetch("/addtour", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(
          {name: name, city: city, date: date, length: length, service: service, description: description, price: price, comforts: comforts, info: info})
    }).then(res=>res.json())
    }
}