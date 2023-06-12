const path = require('path')

const directory = path.resolve(__dirname, '..')+'\\dist'
const dbconnector = require('./db-connection/db.connector')
const media = path.resolve(__dirname, '..')+'\\media'
const videos = media+'/videos'
const photos = media+'/photos'

module.exports ={
    directory,
    dbconnector,
    media,
    videos,
    photos,
}
