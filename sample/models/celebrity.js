//Define product scheme

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const catSchema = new Schema({
  name : String,
  ocupation: String,
  cathPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;