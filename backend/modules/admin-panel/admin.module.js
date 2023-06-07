const data = require('../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/admin',(req,res)=>{
        let login, password
      
        if(req.query.login&&req.query.password){
      
          login = req.query.login
          password = req.query.password
      
          dbconnector.getClientInfo(login, (err, result)=>{
      
            if(result){
              if(result[0].password==password)res.sendFile(directory+'/adminPanel.html')
            }
      
            else{
              console.log('incorrect user')
              res.sendFile(directory+'/loginPanel.html')
            }
          })
        }
        else{
          console.log('no data')
          res.sendFile(directory+'/loginPanel.html')
        }
      })
  }
}
