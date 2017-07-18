const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const DEFAULT_IMG_URL = "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250"

const UserSchema = new Schema({
  email      : {type: String, require: true, unique: true},
  username   : {type: String, require: true, unique: true},
  password   : String,
  description: String,
  imgUrl     : { type: String, default: DEFAULT_IMG_URL},
});

const User = mongoose.model("User", UserSchema);
module.exports = User;