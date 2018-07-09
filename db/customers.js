const { connect, ObjectId } = require('./mongodb');

const findAll = () => new Promise((resolve, reject) => {
    connect()
        .then(db => db
            .collection('customers')
            .find()
            .toArray())
        .then(resolve)
        .catch(err => {
            console.log(err);
            reject(err);
        });
});

const findOne = id => new Promise((resolve, reject) => {
    connect()
        .then(db => db
            .collection('customers')
            .findOne(new ObjectId(id)))
        .then(resolve)
        .catch(err => {
            console.log(err);
            reject(err);
        });
});

const insert = customer => new Promise((resolve, reject) => {
    connect()
        .then(db => db
            .collection('customers')
            .insert(customer))
        .then(resolve)
        .catch(err => {
            console.log(err);
            reject(err);
        });
});

const replaceOne = (id, customer) => new Promise((resolve, reject) => {
    connect()
        .then(db => db
            .collection('customers')
            .replaceOne({ _id: new ObjectId(id) }, customer))
        .then(resolve)
        .catch(err => {
            console.log(err);
            reject(err);
        });
});

const deleteOne = id => new Promise((resolve, reject) => {
    connect()
        .then(db => db
            .collection('customers')
            .deleteOne({ _id: new ObjectId(id) }))
        .then(resolve)
        .catch(err => {
            console.log(err);
            reject(err);
        });
});

module.exports = {
    findAll,
    findOne,
    insert,
    replaceOne,
    deleteOne
};