/* myCities.js Home made experimental templating */
'use strict';

const listdb = function(obj) {
    let htmltop = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8" />
        <title>The World Databas (Edit)</title>
        <link rel="stylesheet" href="side.css" />
    </head>
    
    <body>
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/view">View the World Database</a></li>
                    <li><a href="/edit" class="active">Edit the World Database</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    
        <main>
            <div class=" editGrid">
                <form method="post" action="/edit">
                    <div>
                        <h2>Country</h2>
                        <p>
                            Navn:<br />
                            <input type="text" name="name" required />
                        </p>
                        <p>
                            Kontinent:<br />
                            <!--<input type="text" name="continent" required>-->
                            <select name="continent" id="continent" required>
                                <option disabled selected value> -- Vælg et kontinent -- </option>
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="North America">Norht America</option>
                                <option value="South America">South America</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Europe">Europe</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </p>
                        <p>
                            Areal: <br />
                            <input type="text" name="areaSize" required />
                        </p>
                        <p>
                            Befolkningstal:<br />
                            <input type="text" name="population" required />
                        </p>
                        <p>
                            Styreform:<br />
                            <input type="text" name="government" required />
                        </p>
                        <p><br /><input type="submit" value="Send" /></p>
                    </div>
                </form>
    
                <form method="post" action="/city">
                    <div>
                        <h2>City</h2>
                        <p>
                            Navn:<br />
                            <input type="text" name="cityName" required />
                        </p>
                        <p>
                            Land:<br />
                            <select name="cityCountry" required>
                            <option disabled selected value> -- Vælg et Land -- </option>`;

    let htmlmiddle = `
    </select>        
    </p>
    <p>
        Befolkningstal: <br />
        <input type="text" name="cityPopulation" required />
    </p>
    <p>
        Hovedestad:<br /><br />
        <label><input type="radio" name="cityCapital" value="Ja" required>JA</label>
        <label><input type="radio" name="cityCapital" value="Nej">NEJ</label>
    </p>
    <p><br /><input type="submit" value="Send" /></p>
</div>
</form>

<form method="post" action="/language">
<div>
    <h2>Language</h2>
    <p>
        Sprog:<br />
        <input type="text" name="language" required />
    </p>
    <p>
        Land:<br />
        <select name="languageCountry" required>
        <option disabled selected value> -- Vælg et Land -- </option>`;

    let htmlbot = `
    </select>
    </p>
    <p>
        Procent der taler sproget: <br />
        <input type="text" name="languagePercent" required />
    </p>
    <p>
        Nationalt sprog:<br /><br />
        <label><input type="radio" name="languageOfficial" value="Ja" required>JA</label>
        <label><input type="radio" name="languageOfficial" value="Nej">NEJ</label>
    </p>
    <p><br /><input type="submit" value="Send" /></p>
</div>
</form>
</div>
</main>

<footer>
<p>
&copy; 2020 | Gruppe 4 - Casper Pedersen, Jacob Krag, Mads Møller
</p>
</footer>
</body>

</html>`;

    let dynamic = '';
    for (var i = 0; i < `${obj.length}`; i++) {
        dynamic += `

            <option>${obj[i].name}</option>`;
    }
    //dynamic += `<p><em>${obj[0].name}</em></p>`;

    return htmltop + dynamic + htmlmiddle + dynamic + htmlbot;
};

exports.listdb = listdb;
