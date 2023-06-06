const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use(express.json())

const data = require('./server.data')
const directory = data.directory

const usermodule = require('./modules/user/user.module')
usermodule.init(app)

const adminmodule = require('./modules/admin-panel/admin.module')
adminmodule.init(app)

const tourmodule = require('./modules/tours/tours.module')
tourmodule.init(app)

const dbconnector = data.dbconnector

app.use(express.static(directory))



console.log(directory)



app.get('/',(req,res)=>{
  res.sendFile(directory+'/index.html')
})

app.get('/cities',(req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  res.end(dbconnector.getCitiesList())
})

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})