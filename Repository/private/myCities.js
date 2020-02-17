/* myCities.js Home made experimental templating */
'use strict';

const cities = function(obj) {
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
</html>`;

  let dynamic = '';
  for (var i = 0; i < `${obj.length}`; i++) {
    dynamic += `<p><em>${obj[i].name}</em> ${obj[i].countrycode} ${obj[i].district} Population: ${obj[i].population}</p>`;
  }

  //dynamic += `<p><em>${obj[0].name}</em></p>`;

  return htmltop + dynamic + htmlbot;
};

exports.cities = cities;
