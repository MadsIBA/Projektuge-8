/* myTemplater.js Home made experimental templating */
'use strict';

const fs = require('fs');

const receipt = function(obj) {
  let html = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Contact</title>
        <link rel="stylesheet" href="side.css" />
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/view">View the World Database</a></li>
                    <li><a href="/edit">Edit the World Database</a></li>
                    <li><a href="/contact" class="active">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="collection">
                <p>
                    <h2>Thanks for contacting us "${obj.POST.name}"</h2><br>

                    <div class="collectionDetails">
                        <h2>Emne: ${obj.POST.subject}</h2><br>
                        <textarea rows="10" cols="40" maxlength="256" disabled>${obj.POST.message}</textarea><br><br>
                        Vi sender et svar hurtigst muligt til: <b>${obj.POST.email}</b><br>
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
