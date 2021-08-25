let mongoose = require('mongoose');

const mongoConnection = (url) => {
    return mongoose.connect(url, 
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    });

}

module.export = mongoConnection;