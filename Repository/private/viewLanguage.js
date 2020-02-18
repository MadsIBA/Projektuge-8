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
    dynamic += `<p>Sprog: <em>${obj[i].language},</em> Land: ${obj[i].languageCountry}, Procent del af landet der taler sproget: ${obj[i].languagePercent}, Er sproget det officielle sprog: ${obj[i].languageOfficial}</p>`;
  }
  //dynamic += `<p><em>${obj[0].name}</em></p>`;

  return htmltop + dynamic + `</br>` + htmlbot;
};

exports.listdb = listdb;
