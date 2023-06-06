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
      }),

      app.post('/updtour', (request, response)=>{
        let id = request.body.id
        let name = request.body.name
        let city = request.body.city
        let hotel = request.body.hotel
        let service = request.body.service
        let description = request.body.description
        let price = request.body.price
        dbconnector.getTourInfo(id, (error, result)=>{
          if(error) {
            console.log(error)
            response.end(`{"result":"failed", "message": "wrong auth  data"}`)
            return
          }
          if(result.length==1){
            dbconnector.updateTour(id, name, city, hotel, service, description, price, (error)=>{
              if(error) {
                console.log(error)
                response.end(`{"result":"failed", "message": "server error"}`)
                return
              }
              response.end(`{"result":"success"}`)
            })
          }
          else
          {
            console.log('result '+result)
            response.end(`{"result":"failed"}`)
            return
          }
        }, 'id')
      })
  }
}
