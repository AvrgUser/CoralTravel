const data = require('../../../server.data')
const directory = data.directory
const dbconnector = data.dbconnector

module.exports = {
  init(app){
    app.get('/tour', (req, res)=>{
      if(req.query.id) res.sendFile(directory+'\\fullInfoToure.html')
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
            if(result) {
              res.end(JSON.stringify(result[0]))
            }
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

    app.put('/addfav', (req, res)=>{
      let login = req.body.login
      let password = req.body.password
      let tourId = req.body.tour
      dbconnector.getClientInfo(login, (error, result)=>{
        if(error) {
          console.log(error)
          return
        }
        console.log(result)
        if(result[0]!=undefined&&result[0].password == password&&!result[0].favourites.split(';').includes(""+tourId)) {
          dbconnector.addFavourite(result[0].id, tourId, (err)=>{
            if(err) {
              console.log(err)
              res.end(JSON.stringify({result: 'fail', message: 'wrong data'}))
            }
            else{
              res.end(JSON.stringify({result: 'success'}))
            }
          })
        } 
        else{
          res.end(JSON.stringify({result: 'fail', message: 'wrong data'}))
        }
      })
    })
    
    app.put('/remfav', (req, res)=>{
      let login = req.body.login
      let password = req.body.password
      let tourId = req.body.tour
      dbconnector.getClientInfo(login, (error, result)=>{
        if(error) {
          console.log(error)
          return
        }
        console.log(result)
        if(result[0]!=undefined)if(result[0].password == password) {
          dbconnector.removeFavourite(result[0].id, tourId, (err)=>{
            if(err) {
              console.log('error'+err)
              res.end(JSON.stringify({result: 'fail', message: 'wrong data'}))
            }
            else{
              res.end(JSON.stringify({result: 'success'}))
            }
          })
        }
      },)
    })

    app.post('/comment', (req, res)=>{
      let author = req.body.author
      let password = req.body.password
      let tour = req.body.tour
      let mark = req.body.mark
      let message = req.body.message
      if(tour&&author){
        dbconnector.getClientInfo(author, (err, result)=>{
          if(err) {
            console.log(err)
            res.end(JSON.stringify({result: 'fail', message: err.message}))
          }
          else if(result[0].password==password)dbconnector.addComment(result[0].id, tour, mark, message, (err)=>{
            if(err){
              console.log(err)
              res.end(JSON.stringify({result: 'fail', message: err.message}))
            }
            else{
              res.end(JSON.stringify({result: 'success'}))
            }
          })
          else{
            res.end(JSON.stringify({result: 'fail', message: 'incorresct user data'}))
          }
        })
      }
      else{
        res.end(JSON.stringify({result: 'fail', message: 'incorrect data'}))
      }
    })
    
    app.get('/comments', (req, res)=>{
      let tour = req.query.tour
      dbconnector.getComments(tour, (err, result)=>{
        if(err){
          console.log(err)
          res.end(JSON.stringify({result:'fail', message:err}))
        }
        else res.end(JSON.stringify({result:'success', comments: result}))
      })
    })
  }
}
