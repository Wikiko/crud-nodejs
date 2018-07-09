const { MongoClient, ObjectId } = require('mongodb');

let connection = null;
let db = null;

const connect = () => new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost/workshoptdc')
        .then(conn => {
            if (connection) {
                return db;
            }
            connection = conn;
            db = conn.db('workshoptdc');
            return db;
        })
        .then(resolve)
        .catch(err => {
            console.log(err);
            reject(err);
        });
});

const disconnect = () => {
    if(!connection){
        return true;
    }
    connection.close();
    connection = null;
    return true;
}

module.exports = {
    connect,
    disconnect,
    ObjectId
}