const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const PicSchema = new Schema({
    links: String,
    priority: {
        type:Number,
        default:0
    },
    name:String,
    status: {
        type:String,
        default: "Active"
    }
})
PicSchema.plugin(timestamps)
PicSchema.index({createdAt: 1, updatedAt: 1})

module.exports = mongoose.model("Pic", PicSchema)