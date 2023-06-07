const data = require('../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/tour', (req, res)=>{
      res.sendFile(directory+'/fullInfoToure.html')
    }),
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
      }),
      
      app.get('/tours',(req,res)=>{
        //let filters
        console.log(req.query)

        if(req.query.filters != undefined){
      
          //filters = req.query.filters
      
          dbconnector.getToursList((err, result)=>{
            if(result) res.end(JSON.stringify(result))
          })
        }
        else{
          console.log('no data')
        }
      })
  }
}
