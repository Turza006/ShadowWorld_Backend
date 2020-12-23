var indexRouter = require('../routes/index');
const pic =require('../routes/pic')
const Admin = require('../routes/Admin')

var user = require('../routes/users');


module.exports = app => {

    app.use('/', indexRouter);
    app.use('/user',user);
    app.use('/pic',pic);
    app.use('/admin',Admin);

}
