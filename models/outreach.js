const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CompanySchema = require('./company');

const OutreachSchema = new Schema({
  year: Number,
  cohort: String,
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  outreach_date: Date,
  outreach_method: String,
  intro_call:Boolean,
  call_intro_date: Date,
  call_intro_interested:Boolean,
  interviewed:Boolean,
  interviewed_date: Date,
  owner: String,
  applied: Boolean,
  notes: String
});

const Outreach = mongoose.model('outreach', OutreachSchema);

module.exports = Outreach;
