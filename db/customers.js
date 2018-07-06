const { connect } = require('./mongodb');

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

module.exports = {
    findAll
}