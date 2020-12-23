var router = require('express-promise-router')();
const Admin = require('../Controller/admin')

router.route('/createAdmin')
    .post(Admin.createAdmin)
router.route('/login')
    .post(Admin.login)

module.exports = router