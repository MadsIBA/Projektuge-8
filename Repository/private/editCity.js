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

        db.collection('city').updateOne(
            { cityName: `${object.cityName}`, cityCountry: `${object.cityCountry}` },
            { $set: { cityPopulation: `${obj.POST.cityPopulation}`, cityCapital: `${obj.POST.cityCapital}` } },
            { upsert: true },
            function(err, collection) {
                if (err) {
                    throw err;
                }
                console.log('City edit Completed');
                con.close();
            }
        );
    });

    let html = `<!doctype html>
  <html>
      <head>
          <meta charset="utf-8"/>
          <title>City Edit Completed</title>
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
                      <h2>City Added: ${obj.POST.cityName}</h2><br>
                  
                      <div class="collectionDetails">
                        Land: ${obj.POST.cityCountry}<br>
                        Befolkningstal: ${obj.POST.cityPopulation}<br>
                        Hovedestad: ${obj.POST.cityCapital}<br>
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
