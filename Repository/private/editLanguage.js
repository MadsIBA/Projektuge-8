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

        let object = {
            language: `${obj.POST.language}`,
            languageCountry: `${obj.POST.languageCountry}`,
            languagePercent: `${obj.POST.languagePercent}`,
            languageOfficial: `${obj.POST.languageOfficial}`
        };

        db.collection('language').updateOne(
            { language: `${object.language}`, languageCountry: `${object.languageCountry}` },
            { $set: { languagePercent: `${obj.POST.languagePercent}`, languageOfficial: `${obj.POST.languageOfficial}` } },
            { upsert: true },
            function(err, collection) {
                if (err) {
                    throw err;
                }
                console.log(object);
                console.log('Language edit Completed');
                con.close();
            }
        );
    });

    let html = `<!doctype html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>Language Edit Completed</title>
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
                        <h2>Language Added: ${obj.POST.language}</h2><br>

                        <div class="collectionDetails">
                            Country: ${obj.POST.languageCountry}<br>
                            % of the Country who speaks the language: ${obj.POST.languagePercent}<br>
                            Official Language of the Country: ${obj.POST.languageOfficial}<br>
                        </div>
                    </p>
                    <button><a href="/viewlanguage">Go to the language database</a></button>
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
