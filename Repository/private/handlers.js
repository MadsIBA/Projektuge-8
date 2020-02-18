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

  findCitiesOld(req, res) {
    const mongo = require('mongodb');
    const dbname = 'world';
    const constr = `mongodb://localhost:27017`;

    mongo.connect(constr, { useNewUrlParser: true, useUnifiedTopology: true }, function(error, con) {
      if (error) {
        throw error;
      }
      const db = con.db(dbname); // make dbname the current db
      /* Retrieve,
       * reads cities from the database
       */
      db.collection('country')
        .find()
        .toArray(function(err, country) {
          if (err) {
            throw err;
          }
          res.writeHead(httpStatus.OK, {
            // yes, write relevant header
            'Content-Type': 'text/html; charset=utf-8'
          });
          res.write(viewCountry.country(country)); // home made templating for native node
          res.end();
          con.close();
        });
    });
  },

  // ASK NIELS ABOUT THIS PART?
  findCities(req, res) {
    const mon = require('./monModelMod');
    const dbName = 'world';
    const coll = 'city';
    mon.monCon(dbName, function(err, db) {
      if (err) throw err;
      mon.monR(db, coll, null, function(err, result) {
        if (err) throw err;
        res.writeHead(httpStatus.OK, {
          // yes, write relevant header
          'Content-Type': 'text/html; charset=utf-8'
        });
        res.write(experimental1.cities(result)); // home made templating for native node
        res.end();
      });
    });
  }
};
