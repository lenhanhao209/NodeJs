const mongodb = require("mongodb");
const db = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    save() {
        const db = getDb();
        db.collection("users").insertOne(this);
    }

    static findByPk(userdId) {
        const db = getDb();
        return db
            .collection("user")
            .findOne({ _id: new ObjectId(userdId) })
            .next();
    }
}

module.exports = User;