const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');

const AdminSchema = new Schema({
    username:String,
    email:String,
    password:String
})
AdminSchema.plugin(timestamps);

// generating a hash
AdminSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(4), null);
};

// checking if password is valid
AdminSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

AdminSchema.index({ createdAt: 1, updatedAt: 1 });
module.exports = mongoose.model("Admin",AdminSchema);