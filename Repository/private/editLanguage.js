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

    let object = { language: `${obj.POST.language}`, languageCountry: `${obj.POST.languageCountry}`, languagePercent: `${obj.POST.languagePercent}`, languageOfficial: `${obj.POST.languageOfficial}` };

    db.collection('language').updateOne({ language: `${object.language}` }, { $set: object }, { upsert: true }, function(err, collection) {
      if (err) {
        throw err;
      }
      console.log('Language edit Completed');
      con.close();
    });
  });

  let html = `<!doctype html>
  <html>
      <head>
          <meta charset="utf-8"/>
          <title>Language Edit Completed</title>
      </head>
      <body>
          <h1>Language Edit Completed</h1>
          <div>
              <p>You entered the following</p>
              <h3>Sprog</h3>
              <p>${obj.POST.language}</p>
  
              <h3>Land</h3>
              <p>${obj.POST.languageCountry}</p>

              <h3>Procent del af landet der taler sproget</h3>
              <p>${obj.POST.languagePercent}</p>

              <h3>Er sproget det officielle sprog</h3>
              <p>${obj.POST.languageOfficial}</p>
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
