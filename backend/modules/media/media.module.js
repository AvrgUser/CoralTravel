const data = require('../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/media/:type/:category/:id/:name',(req, res)=>{
  
        let d1 = req.params.type=='video'?data.videos:req.params.type=='photo'?data.photos:undefined
        let d2 = req.params.category=='tour'?'tours':req.params.type=='user'?'users':undefined
        
        let route = d1+`/${d2}/${req.params.id}/${req.params.name}`
        if(!d1||!d2) res.end(JSON.stringify({result: 'error', message: 'wrong request query'}))
        
        console.log(route)
        res.sendFile(route)
      })
      
      app.post('/create/:id', (req, res)=>{
      
      })
  }
}