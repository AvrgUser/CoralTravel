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

const mediamodule = require('./modules/media/media.module')
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

app.put('/addfav', (req, res)=>{
  let login = req.body.login
  let password = req.body.password
  let tourId = req.body.tour
  dbconnector.getClientInfo(login, (error, result)=>{
    if(error) {
      console.log(error)
      return
    }
    console.log(result)
    if(result[0]!=undefined&&result[0].password == password&&!result[0].favourites.split(';').includes(""+tourId)) {
      dbconnector.addFavourite(result[0].id, tourId, (err)=>{
        if(err) {
          console.log(err)
          res.end(JSON.stringify({result: 'fail', message: 'wrong data'}))
        }
        else{
          res.end(JSON.stringify({result: 'success'}))
        }
      })
    } 
    else{
      res.end(JSON.stringify({result: 'fail', message: 'wrong data'}))
    }
  })
})

app.put('/remfav', (req, res)=>{
  let login = req.body.login
  let password = req.body.password
  let tourId = req.body.tour
  dbconnector.getClientInfo(login, (error, result)=>{
    if(error) {
      console.log(error)
      return
    }
    console.log(result)
    if(result[0]!=undefined)if(result[0].password == password) {
      dbconnector.removeFavourite(result[0].id, tourId, (err)=>{
        if(err) {
          console.log('error'+err)
          res.end(JSON.stringify({result: 'fail', message: 'wrong data'}))
        }
        else{
          res.end(JSON.stringify({result: 'success'}))
        }
      })
    }
  }, )
})

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://local:3000')
})