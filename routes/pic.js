var router = require('express-promise-router')();
const picController = require("../Controller/picController")
const imageController = require("../Controller/image")


router.route('/imageUpload')
    .post(imageController.imageUpload)
router.route('/createpic')
    .post(picController.addPhoto)
router.route('/allpic')
    .get(picController.allPhotos)
router.route('/editpic')
    .post(picController.deletePhotos)



module.exports =router