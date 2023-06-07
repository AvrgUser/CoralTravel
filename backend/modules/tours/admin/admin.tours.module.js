const data = require('../../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.post('/updtour', (request, response)=>{
      let id = request.query.id
      let name = request.body.name
      let city = request.body.city
      let hotel = request.body.hotel
      let date = request.body.date
      let length = request.body.length
      let service = request.body.service
      let description = request.body.description
      let price = request.body.price
      let info = request.body.info
      let comforts = request.body.comforts
      console.log(id)
      dbconnector.getTourInfo(id, (error, result)=>{
        if(error) {
          console.log(error)
          response.end(`{"result":"failed", "message": "wrong auth  data"}`)
          return
        }
        if(result.length==1){
          dbconnector.updateTour(id, name, city, hotel, date, length, service, description, price, comforts, info, (error)=>{
            if(error) {
              console.log(error)
              response.end(`{"result":"failed", "message": "server error"}`)
              return
            }
            console.log('saved')
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
    app.post('/addtour', (request, response)=>{
      let name = request.body.name
      let city = request.body.city
      let hotel = request.body.hotel
      let date = request.body.date
      let length = request.body.length
      let service = request.body.service
      let description = request.body.description
      let price = request.body.price
      let info = request.body.info
      dbconnector.addTour(name, city, hotel, date, length, service, description, price, info, (error)=>{
        if(error) {
          console.log(error)
          response.end(`{"result":"failed", "message": "server error"}`)
          return
        }
        response.end(`{"result":"success"}`)
      })
    })
    app.get('/edtour', (req, res)=>{
      res.sendFile(directory+'/editToure.html')
    })
  }
}
