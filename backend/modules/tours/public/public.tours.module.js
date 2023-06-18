const data = require('../../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/tour', (req, res)=>{
      if(req.query.id) res.sendFile(directory+'/fullInfoToure.html')
      else{
        res.statusCode = 404
        res.end('you trying to access unexisting resource')
      }
    })
    
    app.get('/tourinfo',(req,res)=>{
        let id
        if(req.query.id){
      
          id = req.query.id
      
          dbconnector.getTourInfo(id, (err, result)=>{
            if(result) res.end(JSON.stringify(result[0]))
          })
        }
        else{
          console.log('no data')
        }
    })
      
    app.get('/tours',(req,res)=>{
        //let filters
        console.log(req.query)

        if(req.query != undefined){
          dbconnector.getToursList(req.query, (err, result)=>{
            if(result) res.end(JSON.stringify(result))
          })
        }
        else{
          console.log('no data')
        }
    })
  }
}
