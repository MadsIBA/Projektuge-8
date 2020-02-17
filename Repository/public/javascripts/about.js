//CSS selecter body tag
var body = document.querySelector('body');
//Create header tag
var header = document.createElement('header');
header.setAttribute('id', 'header');
//append header into body as firstchild
body.insertBefore(header, body.firstChild);

//Menu Names
var menu = ['IBA Assignments', 'Projects', 'About me'];
var menuIdClass = ['headerLeft', 'headerMain', 'headerRight'];

for (var i = 0; i < 3; i++) {
  //Assign i divs to header
  var div = document.createElement('div');
  header.appendChild(div, header.firstChild);
  //Assign ID Class and Text to div tags
  div.setAttribute('id', menuIdClass[i]);
  div.setAttribute('class', menuIdClass[i]);

  if (i === 1) {
    var h1 = document.createElement('h1');
    var linkText = document.createTextNode(menu[i]);

    h1.appendChild(linkText);
    div.appendChild(h1, div.firstChild);
  } else if (i === 0 || 2) {
    var h3 = document.createElement('h3');
    var linkText = document.createTextNode(menu[i]);

    h3.appendChild(linkText);
    div.appendChild(h3, div.firstChild);
  } else {
    console.log('Error in creating main menu');
  }
}

//Menu Links
document.getElementById('headerMain').addEventListener('click', myFunction);
document.getElementById('headerLeft').addEventListener('click', myFunction);
document.getElementById('headerRight').addEventListener('click', myFunction);

function myFunction() {
  console.log('hi');
}
