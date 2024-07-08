const mongoose = require('mongoose')

const Schema = mongoose.Schema

const menuSchema = new Schema({
    title: { type: String },
    price: { type: String },
    imge: { type: String },
})
const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu