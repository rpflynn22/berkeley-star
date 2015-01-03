var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objectId = schema.ObjectId;

var auditionSchema = new schema({
  id: objectId,
  firstName: String,
  lastName: String,
  year: Number,
  email: String,
  phoneNumber: String,
  auditionLink: String
});

var Audition = mongoose.model('Audition', auditionSchema);

module.exports = Audition;