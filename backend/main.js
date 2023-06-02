const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const dbconnector = require('./db-connection/db.connector')
const usermodule = require('./routing/user/user.module')
const data = require('./server.data')
const directory = data.directory



// Указываем папку, в которой находятся статические файлы сайта (html, css, js и т.д.)
app.use(express.static(directory))

app.use(express.json())

console.log(directory)

usermodule.init(app)

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

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})