const express = require('express')
const app = express()
const path = require('path')
const dbconnector = require('./db-connection/db.connector')
app.set('view engine', 'ejs')

let directory = path.resolve(__dirname, '..')+'\\dist'

// Указываем папку, в которой находятся статические файлы сайта (html, css, js и т.д.)
app.use(express.static(directory))

app.use(express.json())

console.log(directory)

app.get('/',(req,res)=>{
  res.sendFile(directory+'/index.html')
})

app.get('/admin',(req,res)=>{
  let login, password

  if(req.query.login&&req.query.password){

    login = req.query.login
    password = req.query.password

    dbconnector.getClientInfo(login, (err, result)=>{

      if(result&&result[0].password==password){
        res.sendFile(directory+'/adminPanel.html')
      }

      else{
        console.log('incorrect user')
        res.sendFile(directory+'/loginPanel.html')
      }
    })
  }
  else{
    console.log('no data')
    res.sendFile(directory+'/loginPanel.html')
  }
})

app.get('/cities',(req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end(dbconnector.getCitiesList())
})

app.get('/users',(request, response) => {
  response.setHeader('Content-Type', 'text/plain')
  dbconnector.getClientsList((error, result)=>{
    if(error)console.log(error)
    response.end(JSON.stringify(result))
  })
})

app.get('/account', (request, response)=>{
  if(request.query.login&&request.query.password){
    dbconnector.getClientInfo(request.query.login, (err, result)=>{
      if(err) console.log(err)
      if(request.query.password == result[0].password) response.end(JSON.stringify(result[0]))
      else response.end(`{"result": "fail", message: 'incorrect password'}`)
    })
  }
  else{
    response.sendFile(directory+'/account.html')
  }
})

app.get('/rrr', (req,res)=>{
  res.sendFile(directory+'/editToure.html')
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
    if(result!=undefined)if(result[0].password == password) answer = 'authorized'
    response.end(`{"message":"${answer}"}`)
  }, 'password')
})

app.post('/adduser', (request, response)=>{
  let login = request.body.login
  let password = request.body.password
  let name = request.body.name
  let lastname = request.body.lastname
  let email = request.body.email
  dbconnector.getClientInfo(login, (error, result)=>{
    if(error) {
      console.log(error)
      response.end(`{"result":"failed"}`)
      return
    }
    if(result.length==0){
      dbconnector.addUser(login, password, name, lastname, email, (error)=>{
        if(error) {
          // console.log(error)
          response.end(`{"result":"failed"}`)
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

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})