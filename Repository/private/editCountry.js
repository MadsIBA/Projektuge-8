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
          <link rel="stylesheet" href="side.css" />
      </head>
      <body>
          <header>
              <nav>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/view">View the World Database</a></li>
                      <li><a href="/edit" class="active">Edit the World Database</a></li>
                      <li><a href="/contact">Contact</a></li>
                  </ul>
              </nav>
          </header>
          <main>
              <div class="collection">
                  <p>
                      <h2>Country Added: ${obj.POST.name}</h2><br>
                      
                      <div class="collectionDetails">
                          Kontinent: ${obj.POST.continent}<br>
                          Areal: ${obj.POST.areaSize}<br>
                          Befolkningstal: ${obj.POST.population}<br>
                          Styreform: ${obj.POST.government}<br>
                      </div>
                  </p>
                      <button><a href="/">Return to front page</a></button>
              </div>  
          </main>
      </body>
      <footer>
        <p>&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller</p>
      </footer>
  </html>`;
  return html;
};
exports.receipt = receipt;

//Put in an External Document and set action on form to another html (remember routing)

const receipt2 = function(obj) {
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
exports.receipt2 = receipt2;
