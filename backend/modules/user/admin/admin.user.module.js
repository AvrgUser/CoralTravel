const data = require('../../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/userinfo',(req,res)=>{
        let id
        if(req.query.id){
      
          id = req.query.id
      
          dbconnector.getUserInfo(id, (err, result)=>{
            if(result) res.end(JSON.stringify(result[0]))
          })
        }
        else{
          console.log('no data')
        }
      })
  }
}