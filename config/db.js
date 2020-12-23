const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb+srv://turza006:123456Ab@cluster0.z4deh.mongodb.net/ShadowWorld?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))

db.once('open', ()=>{
    console.log("Database Connected");
    console.log("Welcome to ShadowWorld");
    
})






