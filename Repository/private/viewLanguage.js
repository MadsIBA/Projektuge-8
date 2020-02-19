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
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/view" class="active">View the World Database</a></li>
                    <li><a href="/edit">Edit the World Database</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="viewGrid">
                <a href="/viewcountry"><button class="buttonView">View the Country Database</button></a>
                <a href="/viewcity"><button class="buttonView">View the City Database</button></a>
                <a href="/viewlanguage"><button class="buttonView active">View the Language Database</button></a>
            </div>
        </main>
        <div class="collection">`;

  let htmlbot = `        </div>
    </body>
    <footer>
      <p>&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller</p>
    </footer>
</html>`;

  let dynamic = '';
  for (var i = 0; i < `${obj.length}`; i++) {
    dynamic += `
    <p>
    Sprog: <em>${obj[i].language}</em><br>
      <div class="collectionDetails">
        Land: ${obj[i].languageCountry}<br>
        Procent del af landet der taler sproget: ${obj[i].languagePercent}<br>
        Er sproget det officielle sprog: ${obj[i].languageOfficial}<hr>
      </div>
    </p>`;
  }
  //dynamic += `<p><em>${obj[0].name}</em></p>`;

  return htmltop + dynamic + `</br>` + htmlbot;
};

exports.listdb = listdb;
