const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String,
  description: String,
  contact_name: String,
  contact_email: String,
  contact_phone: Number,
  funding: Number,
  stage: String,
  medical_indication: String,
  category: String,
  technology: String
});

const Company = mongoose.model('company', CompanySchema);

module.exports = Company;
