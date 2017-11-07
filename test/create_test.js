const mongoose = require('mongoose');
const Company = require('../models/company');
const Outreach = require('../models/outreach');
const assert = require('assert');

describe('Creating records', () => {
  it('saves a company', (done) => {
    const companyX = new Company({
      name: 'Company X',
      description: 'Company X provides decision support to clinicians in the ER room, where they have limited information about each patient.',
      contact_name: 'Joe',
      contact_email: 'joe@test.com',
    });

    companyX.save()
      .then(() => {
        Company.find({})
          .then(companies => {
            assert(companies[0].name === 'Company X');
            done();
          });
      });
  });

  it('Saves an outreach subdocument and company record', (done) => {
    const companyX = new Company({
      name: 'Company X',
      description: 'Company X is a certain type of company.',
      contact_name: 'Joe',
      contact_email: 'joe@test.com'
    });

    const outreachX = new Outreach({
      year: 2017,
      cohort: 'Digital Health',
      outreach_date: new Date,
      outreach_method: 'Cold Outreach',
    });

    outreachX.company = companyX;

    Promise.all([companyX.save(), outreachX.save()])
      .then( () => {
        Outreach.find({})
          .populate('company')
          .then( outreaches => {
            assert(outreaches[0].company.name === 'Company X');
            done();
          })
      });
  });
});
