const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/outreach_test', {
    useMongoClient: true
  });
  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Warning', error);
    })
});

beforeEach((done) => {
  const { companies, outreaches } = mongoose.connection.collections;
  companies.drop(() => {
    outreaches.drop(() => done());
  });
});
