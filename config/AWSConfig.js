const AWS = require('aws-sdk');
const s3bucket = new AWS.S3({
    accessKeyId: 'AKIAZGDZVRLM4G3IKXMX',
    secretAccessKey: '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',
    Bucket: 'testbackenddev',
    region: 'Asia Pacific (Singapore) ap-southeast-1',
    endpoint: 's3.ap-southeast-1.amazonaws.com'
});

module.exports = s3bucket