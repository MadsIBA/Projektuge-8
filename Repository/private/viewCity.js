/* myCities.js Home made experimental templating */
'use strict';

const listdb = function(obj) {
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
        <main>
          <button><a href="/viewcountry">View the Country Database</a></button>
          <button><a href="/viewcity">View the City Database</a></button>
          <button><a href="/viewlanguage">View the Language Database</a></button>
        </main>
        <div>`;

  let htmlbot = `        </div>
    </body>
    <footer>
      <p>&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller</p>
    </footer>
</html>`;

  let dynamic = '';
  for (var i = 0; i < `${obj.length}`; i++) {
    dynamic += `<p>By: <em>${obj[i].cityName},</em> Land: ${obj[i].cityCountry}, Befolkningstal: ${obj[i].cityPopulation}, Hovedestad: ${obj[i].cityCapital}</p>`;
  }
  //dynamic += `<p><em>${obj[0].name}</em></p>`;

  return htmltop + dynamic + `</br>` + htmlbot;
};

exports.listdb = listdb;
