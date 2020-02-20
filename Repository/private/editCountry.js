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

        let object = {
            name: `${obj.POST.name}`,
            continent: `${obj.POST.continent}`,
            areaSize: `${obj.POST.areaSize}`,
            population: `${obj.POST.population}`,
            government: `${obj.POST.government}`
        };

        db.collection('country').updateOne({ name: `${object.name}` }, { $set: object }, { upsert: true }, function(err, collection) {
            if (err) {
                throw err;
            }
            console.log(object);
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
                            Continent: ${obj.POST.continent}<br>
                            Country Size (km&sup2;): ${obj.POST.areaSize.split(/(?=(?:...)*$)/)}<br>
                            Population: ${obj.POST.population.split(/(?=(?:...)*$)/)}<br>
                            Form of government: ${obj.POST.government}<br>
                        </div>
                    </p>
                    <button><a href="/viewcountry">Go to the country database</a></button>
                    <button><a href="/edit">Edit more in the World Database</a></button>
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
