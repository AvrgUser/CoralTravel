const path = require('path')

const directory = path.resolve(__dirname, '..')+'\\dist'
const dbconnector = require('./db-connection/db.connector')
const media = path.resolve(__dirname, '..')+'\\media'

module.exports ={
    directory,
    dbconnector,
    media,
}
