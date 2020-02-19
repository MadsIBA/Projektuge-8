'use strict';

const handlers = require('../private/handlers'); // handlers module
const httpStatus = require('http-status-codes');
const contentTypes = {
    text: { 'Content-Type': 'text/plain; charset=utf-8' },
    start: { 'Content-Type': 'text/html; charset=utf-8' },
    js: { 'Content-Type': 'application/js' },
    css: { 'Content-Type': 'text/css' },
    png: { 'Content-Type': 'image/png' },
    jpg: { 'Content-Type': 'image/jpg' },
    gif: { 'Content-Type': 'image/gif' },
    ico: { 'Content-Type': 'image/x-icon' },
    svg: { 'Content-Type': 'image/svg+xml' }
};

const routes = {
    // register handles to routes
    GET: {
        '/start': handlers.getAndRespond,
        '/view': handlers.getAndRespond,
        '/viewcountry': handlers.findCountry,
        '/viewcity': handlers.findCity,
        '/viewlanguage': handlers.findLanguage,
        '/contact': handlers.getAndRespond,
        '/edit': handlers.countryFix,
        js: handlers.getAndRespond,
        css: handlers.getAndRespond,
        png: handlers.getAndRespond,
        jpg: handlers.getAndRespond,
        gif: handlers.getAndRespond,
        ico: handlers.getAndRespond,
        svg: handlers.getAndRespond
    },

    POST: {
        '/contact': handlers.receiveData,
        '/edit': handlers.editCountry,
        '/city': handlers.editCity,
        '/language': handlers.editLanguage
    }
};

exports.route = function(req, res, body) {
    // routing
    let asset;
    let type;
    let routedUrl;
    if (req.url.indexOf('.js') !== -1) {
        // check for asset types
        asset = 'js';
        routedUrl = 'public/javascripts' + req.url;
        type = contentTypes.js;
    } else if (req.url.indexOf('.css') !== -1) {
        asset = 'css';
        routedUrl = 'public/stylesheets' + req.url;
        type = contentTypes.css;
    } else if (req.url.indexOf('.png') !== -1) {
        asset = 'png';
        routedUrl = 'public/images' + req.url;
        type = contentTypes.png;
    } else if (req.url.indexOf('.jpg') !== -1) {
        asset = 'jpg';
        routedUrl = 'public/images' + req.url;
        type = contentTypes.jpg;
    } else if (req.url.indexOf('.gif') !== -1) {
        asset = 'gif';
        routedUrl = 'public/images' + req.url;
        type = contentTypes.gif;
    } else if (req.url.indexOf('.svg') !== -1) {
        asset = 'svg';
        routedUrl = 'public/images' + req.url;
        type = contentTypes.svg;
    } else if (req.url.indexOf('.ico') !== -1) {
        asset = 'ico';
        routedUrl = 'favicon.ico';
        type = contentTypes.ico;
    } else {
        if (req.url.charAt(req.url.length - 1) === '/') {
            asset = '/start';
            routedUrl = 'views/index.html';
            type = contentTypes.html;
        } else if (req.url === '/start') {
            asset = req.url;
            routedUrl = 'views/index.html';
            type = contentTypes.html;
        } else if (req.url === '/viewcountry') {
            asset = req.url;
            routes[req.method][asset](req, res);
            return;
        } else if (req.url === '/viewcity') {
            asset = req.url;
            routes[req.method][asset](req, res);
            return;
        } else if (req.url === '/viewlanguage') {
            asset = req.url;
            routes[req.method][asset](req, res);
            return;
        } else if (req.url === '/edit' && req.method === 'GET') {
            asset = req.url;
            routes[req.method][asset](req, res);
            return;
        } else if (req.url === '/view' && req.method === 'POST') {
            asset = req.url;
            routes[req.method][asset](req, res, body);
            return;
        } else if (req.url === '/contact' && req.method === 'POST') {
            asset = req.url;
            routes[req.method][asset](req, res, body);
            return;
        } else if (req.url === '/edit' && req.method === 'POST') {
            asset = req.url;
            routes[req.method][asset](req, res, body);
            return;
        } else if (req.url === '/city' && req.method === 'POST') {
            asset = req.url;
            routes[req.method][asset](req, res, body);
            return;
        } else if (req.url === '/language' && req.method === 'POST') {
            asset = req.url;
            routes[req.method][asset](req, res, body);
            return;
        } else {
            asset = req.url;
            routedUrl = 'views' + req.url + '.html';
            type = contentTypes.html;
        }
    }

    try {
        if (routes[req.method][asset]) {
            // does handler exist to this route
            routes[req.method][asset](routedUrl, type, res); // yes, call it with params
        } else {
            // no, return error msg
            res.writeHead(httpStatus.NOT_FOUND, contentTypes.text);
            res.end(`requested page: "${req.url}" not found`);
        }
    } catch (ex) {
        // routing exception
        console.log('Log: Routing exception: ' + ex);
    }
};
