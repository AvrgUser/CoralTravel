const public = require('./public/public.user.module')
const admin = require('./admin/admin.user.module')

module.exports = {
  init(app){
    public.init(app)
    admin.init(app)
  }
}
