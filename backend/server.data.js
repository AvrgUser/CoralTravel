const path = require('path')

const directory = path.resolve(__dirname, '..')+'\\dist'
const dbconnector = require('./db-connection/db.connector')

module.exports ={
    directory,
    dbconnector
}
