export class Api {
    
    static getClientsList(...args : {name:string, value: string|number}[]){
      let query = ""
      args.forEach((element:any, i)=>{
        const key = Object.keys(element)[0]
        query+=key+'='+element[key]
        if(i<args.length-1) query+='&'
      })
      return fetch(`/users?${query}`).then(res=>res.json())
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
        method: "PUT",
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

    static addToFavourites(login:string, password:string, tourId:string){
      return fetch("/addfav", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(
          {login: login, password: password, tour: tourId})
      }).then(res=>res.json())
    }

    static removeFavourite(login:string, password:string, tourId:string){
      return fetch("/remfav", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(
          {login: login, password: password, tour: tourId})
      }).then(res=>res.json())
    }

    static getToursList(...args : {name:string, value: string|number}[]){
      let query = ""
      args.forEach((element:any, i)=>{
        if(!element) return
        const key = Object.keys(element)[0]
        query+=key+'='+element[key]
        if(i<args.length-1) query+='&'
      })
      return fetch(`/tours?${query}`).then(res=>res.json())
    }

    static updateTourInfo(id:Number, name:string, city:string, date: string, length:Number, service:Number, description:string, price:Number, comforts: string, info:string){
      return fetch("/updtour?id="+id, {
        method: "PUT",
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

    static deleteTour(id:number){
      return fetch('/deltour?id='+id,{
        method: 'DELETE'
      }).then(res=>res.json())
    }

    static uploadFile(file:File, name:string, id:number, category:string|number, type:string|number='photo'){
      const route = `/save/${type}/${((category==0||category=='tour')?'tour':'user')}/${id}`
      console.log(route)
      const data = new FormData()
      const ext = file.name.split('.')
      const filename = name+'.'+ext[ext.length-1]
      data.append('file', file, filename)
      console.log(data.get('file'))
      return fetch(route, {
        method: 'POST',
        body: data
      }).then(res => res.json())
    }

    static deleteFile(name:string, id:number, category:string|number, type:string|number='photo'){
      const route = `/remove/${type}/${((category==0||category=='tour')?'tour':'user')}/${id}/${name}`
      return fetch(route, {
        method: 'DELETE',
      }).then(res => res.json())
    }
}