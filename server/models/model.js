const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categories_model = new Schema({
  type: { type: String, default: "Investment" },
  color: { type: String, default: "#A45EE5" },
});

const transaction_model = new Schema({
    name: { type: String, default: "Anonymous" },
    amount: { type: Number, default: 0 },
    type: { type: String, default: "Investment" },
    date: { type: Date, default: Date.now },
})


const Categories = mongoose.model('Categories', categories_model);
const Transactions = mongoose.model('Transactions', transaction_model);

exports.default = Transactions;
module.exports = {
    Categories,
    Transactions
}