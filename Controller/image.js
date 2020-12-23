const busboy = require('busboy');
const moment = require('moment');
const mongoose = require('mongoose');
const s3Bucket = require('../config/AWSConfig');
var sizeOf = require('buffer-image-size');




module.exports = {
    imageUpload: async (req, res) => {
        const Busboy = new busboy({headers: req.headers});
        console.log("req------------------------------------",req.files);
        const time = Date.now()
        console.log(time);
        const fileName = time + ".jpg"

        console.log(fileName);

        Busboy.on('finish', async function () {
            const file = req.files.imageFile;
            console.log('file', file);
            const bucketParams = {
                Bucket: 'testbackenddev'

            };
            s3Bucket.getBucketLocation(bucketParams, function (err, data) {
                if (err) console.log(err);
                else console.log("S3BUCKET", data)
            })


            s3Bucket.createBucket(function () {
                // set bucket name, file name and file
                const params = {
                    Bucket: 'testbackenddev',
                    Key: fileName,
                    Body: file.data,
                    ContentType: 'image/jpeg',
                    ACL: 'public-read'

                };


                //upload file
                s3Bucket.upload(params, function (err, data) {
                    if (err) {
                        console.log('error in callback');
                        console.log(err);
                        res.render('response', {
                            title: 'Failed',
                            error: 'File upload Failed.\n\n ' + err
                        });
                    }

                    console.log('success', fileName);
                    console.log(data);

                    res.status(201).json({
                        imagelink: `http://testbackenddev.s3.ap-southeast-1.amazonaws.com/`+data.Key
                    });

                });
            });

        })


        req.pipe(Busboy);
    },


}