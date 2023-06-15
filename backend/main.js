const express = require('express')
const fileUpload = require('express-fileupload');
const fs = require('fs')
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

const mediamodule = require('./modules/media/media.module');
mediamodule.init(app)

app.use(express.static(directory))



console.log(directory)



app.get('/',(req,res)=>{
  res.sendFile(directory+'/index.html')
})

app.get('/eduser',(req, res)=>{
  res.sendFile(directory+'/editUser.html')
})

app.delete('/remove/:type/:category/:id/:name',(req, res)=>{
  
  let d1 = req.params.type=='video'?data.videos:req.params.type=='photo'?data.photos:undefined
  let d2 = req.params.category=='tour'?'tours':req.params.type=='user'?'users':undefined
  
  console.log(req.body)
  let route = d1+`/${d2}/${req.params.id}/${req.params.name}`
  if(!d1||!d2||!req.params.name||!req.params.id||!fs.existsSync(route)) {
    console.log(route)
    res.end(JSON.stringify({result: 'error', message: 'wrong request query'}))
    return
  }
  
  console.log('saved '+route)

  if(d2=='tours') {
    data.dbconnector.reduceTourMedia(req.params.id, req.params.name)
  }
  else if(d2=='users'){
    data.dbconnector.reduceTourMedia(req.params.id, req.params.name)
  }
  else{
    res.end(JSON.stringify({result: 'fail', message: 'wrong query'}))
  }
  res.end(JSON.stringify({result: 'success'}))
  fs.unlinkSync(route)
})

// Запускаем сервер на порту 3000
app.listen(3000, () => {
  console.log('Сервер запущен: http://localhost:3000')
})