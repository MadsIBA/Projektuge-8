/* myCities.js Home made experimental templating */
'use strict';

const listdb = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>The World Database (View)</title>
        <link rel="stylesheet" href="side.css"/>
        <script defer src="search.js"></script>
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
                <a href="/viewcity"><button class="buttonView active">View the City Database</button></a>
                <a href="/viewlanguage"><button class="buttonView">View the Language Database</button></a>
            </div>
        </main>
        <div class="collection">
            <button id="sortBtn" class="sortBtn" onclick="sortList()">Sort list by city</button>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for city.." title="Type in a city">
            <ul id="myUL" class="myUL">`;
    let htmlbot = `        
            </ul>
        </div>
    </body>
    <footer>
        <p>&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller</p>
    </footer>
</html>`;

    let dynamic = '';
    for (var i = 0; i < `${obj.length}`; i++) {
        dynamic += `
        <li><a href="#"><em>${obj[i].cityName.charAt(0).toUpperCase() + obj[i].cityName.slice(1).toLowerCase()}</em></a>
            <div class="collectionDetails">
                Country: ${obj[i].cityCountry.charAt(0).toUpperCase() + obj[i].cityCountry.slice(1).toLowerCase()}<br>
                City Population: ${obj[i].cityPopulation.split(/(?=(?:...)*$)/)}<br>
                Country Capital: ${obj[i].cityCapital.charAt(0).toUpperCase() + obj[i].cityCapital.slice(1).toLowerCase()}
            </div>
        </li>`;
    }
    //dynamic += `<p><em>${obj[0].name}</em></p>`;

    return htmltop + dynamic + `</br>` + htmlbot;
};

exports.listdb = listdb;
