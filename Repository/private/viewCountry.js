/* myCities.js Home made experimental templating */
'use strict';

const country = function(obj) {
  let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>The World Database (View)</title>
        <link rel="stylesheet" href="side.css"/>
    </head>
    <body>
        <header>
            <h1>The World Database (View)</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/view">View the World Database</a></li>
                    <li><a href="/edit">Edit the World Database</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div>`;

  let htmlbot = `        </div>
    </body>
    <footer>
      <p>&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller</p>
    </footer>
</html>`;

  let dynamic = '';
  for (var i = 0; i < `${obj.length}`; i++) {
    dynamic += `<p>Land: <em>${obj[i].name},</em> Kontinent: ${obj[i].continent}, Areal: ${obj[i].areaSize}, Befolkningstal: ${obj[i].population}, Styreform: ${obj[i].government},</p>`;
  }

  //dynamic += `<p><em>${obj[0].name}</em></p>`;

  return htmltop + dynamic + htmlbot;
};

exports.country = country;
