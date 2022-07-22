const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
            "mongodb+srv://lenhanhao209:ngocdung209@atlascluster.1pkaa.mongodb.net/?retryWrites=true&w=majority"
        )
        .then((client) => {
            console.log("connected!!!");
            callback(client);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = mongoConnect;