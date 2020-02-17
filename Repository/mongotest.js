/*
 * File Name is  : insertCity12.js
 * demoes inserts into a mongo collection
 */
'use strict';

const mongo = require('mongodb');
const dbname = 'world';
const constr = `mongodb://localhost:27017`;

mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, con) {
  if (error) {
    throw error;
  }
  console.log(`Connected to server`);
  const db = con.db(dbname); // make dbname the current db
  /* Create,
   * inserts cities into the database
   */
  //let obj = { name: 'Aarhus', countrycode: 'DNK', district: 'Østjylland', population: 284846 };
  let obj = { name: 'Sønderborg', countrycode: 'DNK', district: 'Sydjylland', population: 20000 };

  db.collection('city').insertOne(obj, function(err, collection) {
    if (err) {
      throw err;
    }
    console.log('City inserted');
    con.close();
  });
});
