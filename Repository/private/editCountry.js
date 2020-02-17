'use strict';

const fs = require('fs');

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

    let object = { name: `${obj.POST.name}`, continent: `${obj.POST.continent}`, areaSize: `${obj.POST.areaSize}`, population: `${obj.POST.population}`, government: `${obj.POST.government}` };

    db.collection('country').updateOne({ name: `${object.name}` }, { $set: object }, { upsert: true }, function(err, collection) {
      if (err) {
        throw err;
      }
      console.log('Country edit Completed');
      con.close();
    });
  });

  let html = `<!doctype html>
  <html>
      <head>
          <meta charset="utf-8"/>
          <title>Country Edit Completed</title>
      </head>
      <body>
          <h1>Country Edit Completed</h1>
          <div>
              <p>You entered the following</p>
              <h3>Land</h3>
              <p>${obj.POST.name}</p>
  
              <h3>Kontinent</h3>
              <p>${obj.POST.continent}</p>

              <h3>Areal</h3>
              <p>${obj.POST.areaSize}</p>

              <h3>Befolkningstal</h3>
              <p>${obj.POST.population}</p>

              <h3>Styreform</h3>
              <p>${obj.POST.government}</p>
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
