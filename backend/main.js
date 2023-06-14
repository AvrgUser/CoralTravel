const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(fileUpload({
  createParentPath: true
}));

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
  res.sendFile(directory+'/editUser.html')
})

app.post('/save/:type/:category/:id',(req, res)=>{
  
  let d1 = req.params.type=='video'?data.videos:req.params.type=='photo'?data.photos:undefined
  let d2 = req.params.category=='tour'?'tours':req.params.type=='user'?'users':undefined
  
  console.log(req.body)
  let file = req.files.file
  let route = d1+`/${d2}/${req.params.id}/${file.name}`
  if(!d1||!d2) res.end(JSON.stringify({result: 'error', message: 'wrong request query'}))
  
  console.log(route)

  file.mv(route)
})

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})