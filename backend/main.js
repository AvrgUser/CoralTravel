const express = require('express')
const fileUpload = require('express-fileupload');

const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(fileUpload({
  createParentPath: true
}))

const data = require('./server.data')
const directory = data.directory
const dbconnector  = data.dbconnector

const usermodule = require('./modules/user/user.module')
usermodule.init(app)

const adminmodule = require('./modules/admin-panel/admin.module')
adminmodule.init(app)

const tourmodule = require('./modules/tours/tours.module')
tourmodule.init(app)

const mediamodule = require('./modules/media/media.module');
mediamodule.init(app)

app.use(express.static(directory))

console.log(directory)

app.get('/',(req,res)=>{
  res.sendFile(directory+'/index.html')
})

app.get('/eduser',(req, res)=>{
  if(req.query.id) res.sendFile(directory+'/editUser.html')
  else{
    res.statusCode = 404
    res.end('you trying to access unexisting resource')
  }
})

app.get('/orders', (req, res)=>{
  dbconnector.getOrders((err, result)=>{
    res.end(result)
  })
})

app.get('/countries', (req, res)=>{
  dbconnector.getCountries((err, result)=>{
    if(err) {
      console.log(err)
      res.end(JSON.stringify({result:'fail', message:err.message}))
    }
    else{
      res.end(JSON.stringify({result:'success', countries: result}))
    }
  })
})

app.get('/cities', (req, res)=>{
  dbconnector.getCities((err, result)=>{
    if(err) {
      console.log(err)
      res.end(JSON.stringify({result:'fail', message:err.message}))
    }
    else{
      res.end(JSON.stringify({result:'success', cities: result}))
    }
  })
})

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})