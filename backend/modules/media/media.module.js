const data = require('../../server.data')
const fs = require('fs')
// const directory = data.directory
// const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/media/:type/:category/:id/:name',(req, res)=>{
  
        let d1 = req.params.type==='video'?data.videos:req.params.type==='photo'?data.photos:undefined
        let d2 = req.params.category==='tour'?'tours':req.params.type==='user'?'users':undefined
        
        let route = d1+`/{d2}/${req.params.id}/${req.params.name}`
        if(!d1||!d2) res.end(JSON.stringify({result: 'error', message: 'wrong request query'}))
        console.log(req.params)
        console.log(route)
        res.sendFile(route)
      })
      
      app.post('/save/:type/:category/:id',(req, res)=>{
  
        let d1 = req.params.type=='video'?data.videos:req.params.type=='photo'?data.photos:undefined
        let d2 = req.params.category=='tour'?'tours':req.params.type=='user'?'users':undefined
        
        console.log(req.body)
        let file = req.files.file
        let route = ''
        if(!d1||!d2) {
          res.end(JSON.stringify({result: 'error', message: 'wrong request query'}))
          return
        }
        
        console.log('saving')
        
        route = d1+`/${d2}/${req.params.id}/`
        let number = 0
        d1+`/${d2}/${req.params.id}/`
        let filename =file.name
        while(fs.existsSync(route+filename)){
          number++
          filename=`(${number})${file.name}`
        }
        route+=filename
        
        if(d2=='tours') {
          data.dbconnector.appendTourMedia(req.params.id, filename)
        }
        else if(d2=='users'){
          data.dbconnector.appendTourMedia(req.params.id, filename)
        }
        else{
          res.end(JSON.stringify({result: 'fail', message: 'wrong query'}))
          return
        }
        
        res.end(JSON.stringify({result: 'success', name: filename}))
        file.mv(route)
        console.log('saved ' + route)
      })

      app.delete('/remove/:type/:category/:id/:name',(req, res)=>{
  
        let d1 = req.params.type=='video'?data.videos:req.params.type=='photo'?data.photos:undefined
        let d2 = req.params.category=='tour'?'tours':req.params.type=='user'?'users':undefined
        
        console.log(req.body)
        let route = d1+`/${d2}/${req.params.id}/${req.params.name}`
        if(!d1||!d2||!req.params.name||!req.params.id) {
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
  }
}