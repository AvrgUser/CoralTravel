const data = require('../../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/users',(req,res)=>{
        //let filters
        console.log(req.query)

        dbconnector.getClientsList(req.query, (err, result)=>{
          if(result) res.end(JSON.stringify(result))
        })
    })

    app.get('/account', (request, response)=>{
      if(request.query.login&&request.query.password){
        dbconnector.getClientInfo(request.query.login, (err, result)=>{
          if(err) console.log(err)
          if(result[0]){
          if(request.query.password == result[0].password) response.end(JSON.stringify(result[0]))
          else response.end(`{"result": "fail", "message": 'incorrect password'}`)
          }
          else response.end(`{"result": "fail", "message": 'wrong user data'}`)
        })
      }
      else{
        response.sendFile(directory+'/account.html')
      }
    })

    app.post('/auth', (request, response)=>{
      let login = request.body.login
      let password = request.body.password
      dbconnector.getClientInfo(login, (error, result)=>{
        if(error) {
          console.log(error)
          return
        }
        console.log(result)
        let answer = 'not authorized'
        if(result[0]!=undefined)if(result[0].password == password) answer = 'authorized'
        response.end(`{"message":"${answer}"}`)
      }, 'password')
    })
    
    app.post('/adduser', (request, response)=>{
      let login = request.body.login
      let password = request.body.password
      let name = request.body.name
      let lastname = request.body.lastname
      let email = request.body.email
      let birth = request.body.birthdate
      let gender = request.body.gender
      let phone = request.body.phone
      dbconnector.getClientInfo(login, (error, result)=>{
        if(error) {
          console.log(error)
          response.end(`{"result":"failed", "message": "wrong auth  data"}`)
          return
        }
        if(result.length==0){
          dbconnector.addUser(login, password, name, lastname, email, birth, gender, phone, (error)=>{
            if(error) {
              console.log(error)
              response.end(`{"result":"failed", "message": "server error"}`)
              return
            }
            // console.log(result)
            response.end(`{"result":"success"}`)
          })
        }
        else
        {
          console.log('result '+result)
          response.end(`{"result":"failed"}`)
          return
        }
      }, 'password')
    })

    app.put('/updateacc', (request, response)=>{
      let login = request.body.login
      let password = request.body.password
      let name = request.body.name
      let lastname = request.body.lastname
      let email = request.body.email
      let birth = request.body.birthdate
      let gender = request.body.gender
      let phone = request.body.phone
      dbconnector.getClientInfo(login, (error, result)=>{
        if(error) {
          console.log(error)
          response.end(`{"result":"failed", "message": "wrong auth  data"}`)
          return
        }
        if(result.length==1&&result[0].password == password){
          dbconnector.updateUser(login, name, lastname, email, birth, gender, phone, (error)=>{
            if(error) {
              console.log(error)
              response.end(`{"result":"failed", "message": "server error"}`)
              return
            }
            // console.log(result)
            response.end(`{"result":"success"}`)
          })
        }
        else
        {
          console.log('result '+result)
          response.end(`{"result":"failed"}`)
          return
        }
      }, 'password')
    })

    
  }
}
