/* myTemplater.js Home made experimental templating */
'use strict';

const fs = require('fs');

const receipt = function(obj) {
  let html = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>McKilroy's First Test Template</title>
    </head>
    <body>
        <h1>Contact Receipt</h1>
        <div>
            <h1>Thanks for contacting us "${obj.POST.name}"</h1>
            <p>You entered the following</p>
            <h3>Subject</h3>
            <p>${obj.POST.subject}</p>

            <h3>Message</h3>
            <p>${obj.POST.message}</p>
        </div>
        <div>
            <h3>We will get back to you at ${obj.POST.email}.</h3>
            <p><a href="/">Return to front page</a><p>
        </div>
    </body>
</html>`;
  return html;
};

exports.receipt = receipt;
