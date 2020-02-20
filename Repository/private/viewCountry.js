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
                <a href="/viewcountry"><button class="buttonView active">View the Country Database</button></a>
                <a href="/viewcity"><button class="buttonView">View the City Database</button></a>
                <a href="/viewlanguage"><button class="buttonView">View the Language Database</button></a>
            </div>
        </main>   
        <div class="collection">
            <button id="sortBtn" class="sortBtn" onclick="sortList()">Sort list by name</button>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for country.." title="Type in a country">
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
        <li><a href="#"><em>${obj[i].name.charAt(0).toUpperCase() + obj[i].name.slice(1).toLowerCase()}</em></a>
            <div class="collectionDetails">
                Continent: ${obj[i].continent.charAt(0).toUpperCase() + obj[i].continent.slice(1).toLowerCase()}<br>
                Country Size (km&sup2;): ${obj[i].areaSize.split(/(?=(?:...)*$)/)}<br>
                Population: ${obj[i].population.split(/(?=(?:...)*$)/)}<br>
                Form of government: ${obj[i].government.charAt(0).toUpperCase() + obj[i].government.slice(1).toLowerCase()}
            </div>
        </li>`;
    }
    //dynamic += `<p><em>${obj[0].name}</em></p>`;

    return htmltop + dynamic + `</br>` + htmlbot;
};

exports.listdb = listdb;
