const express = require('express')
const app = express()
const path = require('path')
const dbconnector = require('./db-connection/db.connector')
app.set('view engine', 'ejs')

// Указываем папку, в которой находятся статические файлы сайта (html, css, js и т.д.)
app.use(express.static(path.resolve(__dirname, '..')+'/dist/coral-travel'))

app.use(express.json())

// Обработка GET-запроса на главную страницу
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..')+'/dist/coral-travel/index.html')
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
    if(result[0].password == password) answer = 'authorized'
    response.end(`{"message":"${answer}"}`)
  }, 'password')
})

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})