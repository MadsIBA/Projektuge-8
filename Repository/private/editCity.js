'use strict';

const fs = require('fs');

//Put in an External Document and set action on form to another html (remember routing)

const receipt = function(obj) {
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
     * inserts countries into the database
     */

    let object = { cityName: `${obj.POST.cityName}`, cityCountry: `${obj.POST.cityCountry}`, cityPopulation: `${obj.POST.cityPopulation}`, cityCapital: `${obj.POST.cityCapital}` };

    db.collection('city').updateOne({ cityName: `${object.cityName}` }, { $set: object }, { upsert: true }, function(err, collection) {
      if (err) {
        throw err;
      }
      console.log('City edit Completed');
      con.close();
    });
  });

  let html = `<!doctype html>
  <html>
      <head>
          <meta charset="utf-8"/>
          <title>City Edit Completed</title>
      </head>
      <body>
          <h1>City Edit Completed</h1>
          <div>
              <p>You entered the following</p>
              <h3>By</h3>
              <p>${obj.POST.cityName}</p>
  
              <h3>Land</h3>
              <p>${obj.POST.cityCountry}</p>

              <h3>Befolkningstal</h3>
              <p>${obj.POST.cityPopulation}</p>

              <h3>Hovedestad</h3>
              <p>${obj.POST.cityCapital}</p>
          </div>
          <div>
              <p><a href="/">Return to front page</a><p>
          </div>
      </body>
      <footer>
        <p>&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller</p>
      </footer>
  </html>`;
  return html;
};
exports.receipt = receipt;
