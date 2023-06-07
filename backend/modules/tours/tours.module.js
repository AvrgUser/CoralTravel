const public = require('./public/public.tours.module')
const admin = require('./admin/admin.tours.module')

module.exports = {
  init(app){
    public.init(app)
    admin.init(app)
  }
}
