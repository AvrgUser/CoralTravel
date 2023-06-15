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

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})