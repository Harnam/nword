const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
 
let UserSchema = new Schema({
    _id: {type: String, required: true},
    f_name: {type: String, required: true},
    m_name: {type: String},
    l_name: {type: String, required: true},
    email: {type: String, required: true},
    verified: {type: Boolean, default: false},
    dob: { type: Date, required: true}
});
  
module.exports = mongoose.model('User', UserSchema);
