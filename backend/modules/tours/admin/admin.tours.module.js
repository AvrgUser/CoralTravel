const data = require('../../../server.data')

const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.put('/updtour', (request, response)=>{
      let id = request.query.id
      let name = request.body.name
      let city = request.body.city
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
          dbconnector.updateTour(id, name, city, date, length, service, description, price, comforts, info, (error)=>{
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
      let date = request.body.date
      let length = request.body.length
      let service = request.body.service
      let description = request.body.description
      let price = request.body.price
      let info = request.body.info
      if(name)dbconnector.addTour(name, city, date, length, service, description, price, info, (error, result)=>{
        if(error) {
          console.log(error)
          response.end(`{"result":"failed", "message": "server error"}`)
          return
        }
        response.end(JSON.stringify({result:'success', id:result.insertId}))
      })
    })

    app.get('/addtour', (req, res)=>{
      res.sendFile(directory+'/addTour.html')
    })

    app.get('/edtour', (req, res)=>{
      if(req.query.id) res.sendFile(directory+'/editToure.html')
      else{
        res.statusCode = 404
        res.end('you trying to access unexisting resource')
      }
    })

    app.delete('/deltour', (req, res)=>{
      let id = req.query.id
      if(id){
        data.dbconnector.deleteTour(id, (err)=>{
          if(err){
            console.log(err)
            res.end(JSON.stringify({result:'fail', message: err.message}))
          }
          else res.end(JSON.stringify({result:'success'}))
        })
      }
    })
  }
}
