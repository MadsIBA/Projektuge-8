/* myCities.js Home made experimental templating */
'use strict';

const listdb = function(obj) {
    let htmltop = `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8" />
        <title>The World Databas (Edit)</title>
        <link rel="stylesheet" href="side.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script defer src="sortSelect.js"></script>
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
                            Name of Country:<br />
                            <input type="text" name="name" maxlength="100" onkeypress="return (event.charCode === 32) || (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" title="Special characters and numbers not allowed!" required />
                        </p>
                        <p>
                            Continent:<br />
                            <!--<input type="text" name="continent" required>-->
                            <select name="continent" id="continent" size="10" required>
                                <option disabled selected value> -- Select Continent -- </option>
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
                            Country Size (km&sup2;): <br />
                            <input type="number" name="areaSize" maxlength="25" required />
                        </p>
                        <p>
                            Population:<br />
                            <input type="number" name="population" maxlength="25" required />
                        </p>
                        <p>
                            Form of government:<br />
                            <input type="text" name="government" maxlength="100" onkeypress="return (event.charCode === 32) || (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" title="Special characters and numbers not allowed!" required />
                        </p>
                        <p>
                            <br />
                                <input type="submit" value="Edit/Add" />
                        </p>
                    </div>
                </form>
    
                <form method="post" action="/city">
                    <div>
                        <h2>City</h2>
                        <p>
                            Name of City:<br />
                            <input type="text" name="cityName" maxlength="100" onkeypress="return (event.charCode === 32) || (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode > 191 && event.charCode < 215) || (event.charCode > 215 && event.charCode < 247) || (event.charCode > 247 && event.charCode < 256)" title="Numbers not allowed!" required />
                        </p>
                        <p>
                            Country:<br />
                            <select name="cityCountry" size="10" id="my_select" required>
                                <option disabled selected value> -- Select Country -- </option>`;
    let htmlmiddle = `          
                            </select>        
                        </p>
                        <p>
                            City Population: <br />
                            <input type="number" name="cityPopulation" maxlength="25" required />
                        </p>
                        <p>
                            Country Capital:<br />
                            <label><input type="radio" name="cityCapital" value="Yes" required>Yes</label><br>
                            <label><input type="radio" name="cityCapital" value="No">No</label>
                        </p>
                        <p>
                            <br />
                                <input type="submit" value="Edit/Add" />
                        </p>
                    </div>
                </form>

                <form method="post" action="/language">
                    <div>
                        <h2>Language</h2>
                        <p>
                            Language Name:<br />
                            <input type="text" name="language" maxlength="100" onkeypress="return (event.charCode === 32) || (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode > 191 && event.charCode < 215) || (event.charCode > 215 && event.charCode < 247) || (event.charCode > 247 && event.charCode < 256)" title="Numbers not allowed!" required />
                        </p>
                        <p>
                            Country:<br />
                            <select name="languageCountry" size="10" id="my_select2" required>
                                <option disabled selected value> -- Select Country -- </option>`;
    let htmlbot = `
                            </select>
                        </p>
                        <p>
                            % of the Country who speaks<br>the language: <br />
                            <input type="number" name="languagePercent" maxlength="3" required />
                        </p>
                        <p>
                            Official Country Language:<br />
                            <label><input type="radio" name="languageOfficial" value="Yes" required>Yes</label><br>
                            <label><input type="radio" name="languageOfficial" value="No">No</label>
                        </p>
                        <p>
                            <br />
                                <input type="submit" value="Edit/Add" />
                        </p>
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
            <option>${obj[i].name.charAt(0).toUpperCase() + obj[i].name.slice(1).toLowerCase()}</option>`;
    }
    //dynamic += `<p><em>${obj[0].name}</em></p>`;

    return htmltop + dynamic + htmlmiddle + dynamic + htmlbot;
};

exports.listdb = listdb;
