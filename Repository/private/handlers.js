'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the routing mechanism
 */
const fs = require('fs'); // file system access
const httpStatus = require('http-status-codes');
const lib = require('../private/libWebUtil'); // home grown utilities
const experimental = require('../private/myTemplater'); // highly experimental template
const experimental1 = require('../private/myCities'); // highly experimental template
const editCountry = require('../private/editCountry'); // edit Countries in the Database
const editCity = require('../private/editCity'); // edit City in the Database
const editLanguage = require('../private/editLanguage'); // edit Language in the Database
const viewCountry = require('../private/viewCountry'); // view Countries in the Database
const viewCity = require('../private/viewCity'); // view Cities in the Database
const viewLanguage = require('../private/viewLanguage'); // view Languages in the Database
const countryFix = require('../private/countryFix'); // view /edit

const goError = function(res) {
    res.writeHead(httpStatus.NOT_FOUND, {
        // http page not found, 404
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<h1>404 Not Found</h1>');
    res.end();
};

module.exports = {
    getAndRespond(path, contentType, res) {
        if (fs.existsSync(path)) {
            // does file exist, sync
            fs.readFile(path, function(err, data) {
                // read
                if (err) {
                    // if read error
                    console.log('nml: ' + err); // inform server
                    goError(res); // inform user
                    return; // back to caller
                }
                res.writeHead(httpStatus.OK, contentType); // prep header
                res.write(data); // prep body with read data
                res.end(); // send response
            });
        } else {
            goError(res); // doesnt exist error
        }
    },

    receiveData(req, res, data) {
        let obj = lib.makeWebArrays(req, data); // home made GET and POST objects
        res.writeHead(httpStatus.OK, {
            // yes, write relevant header
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.write(experimental.receipt(obj)); // home made templating for native node
        res.end();
    },

    editCountry(req, res, data) {
        let obj = lib.makeWebArrays(req, data); // home made GET and POST objects
        res.writeHead(httpStatus.OK, {
            // yes, write relevant header
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.write(editCountry.receipt(obj)); // home made templating for native node
        res.end();
    },

    editCity(req, res, data) {
        let obj = lib.makeWebArrays(req, data); // home made GET and POST objects
        res.writeHead(httpStatus.OK, {
            // yes, write relevant header
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.write(editCity.receipt(obj)); // home made templating for native node
        res.end();
    },

    editLanguage(req, res, data) {
        let obj = lib.makeWebArrays(req, data); // home made GET and POST objects
        res.writeHead(httpStatus.OK, {
            // yes, write relevant header
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.write(editLanguage.receipt(obj)); // home made templating for native node
        res.end();
    },

    findCountry(req, res) {
        const mongo = require('mongodb');
        const dbname = 'world';
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname); // make dbname the current db
            /* Retrieve,
             * reads collection from the database
             */

            db.collection('country')
                .find()
                .toArray(function(err, collection) {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(httpStatus.OK, {
                        // yes, write relevant header
                        'Content-Type': 'text/html; charset=utf-8'
                    });
                    console.log(collection);

                    res.write(viewCountry.listdb(collection)); // home made templating for native node
                    res.end();
                    con.close();
                });
        });
    },

    findCity(req, res) {
        const mongo = require('mongodb');
        const dbname = 'world';
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname); // make dbname the current db
            /* Retrieve,
             * reads collection from the database
             */

            db.collection('city')
                .find()
                .toArray(function(err, collection) {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(httpStatus.OK, {
                        // yes, write relevant header
                        'Content-Type': 'text/html; charset=utf-8'
                    });
                    console.log(collection);

                    res.write(viewCity.listdb(collection)); // home made templating for native node
                    res.end();
                    con.close();
                });
        });
    },

    findLanguage(req, res) {
        const mongo = require('mongodb');
        const dbname = 'world';
        const constr = `mongodb://localhost:27017`;

        mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, con) {
            if (error) {
                throw error;
            }
            const db = con.db(dbname); // make dbname the current db
            /* Retrieve,
             * reads collection from the database
             */

            db.collection('language')
                .find()
                .toArray(function(err, collection) {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(httpStatus.OK, {
                        // yes, write relevant header
                        'Content-Type': 'text/html; charset=utf-8'
                    });
                    console.log(collection);

                    res.write(viewLanguage.listdb(collection)); // home made templating for native node
                    res.end();
                    con.close();
                });
        });
    },

    countryFix(req, res) {
        const MongoClient = require('mongodb').MongoClient;
        const url = 'mongodb://localhost:27017/';

        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db('world');
            dbo.collection('country')
                .find({}, { projection: { _id: 0, name: 1 } })
                .toArray(function(err, result) {
                    if (err) throw err;
                    console.log(result);

                    res.write(countryFix.listdb(result)); // home made templating for native node
                    res.end();
                    db.close();
                });
        });
    }
};
