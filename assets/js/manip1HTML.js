function manip1HTML()
{
//affiche1()
document.getElementById('bouton1').innerHTML = '<input type="button" name="bouton1" value="Réponse" onclick="affiche1();"/>';
//affiche2()
document.getElementById('bouton2').innerHTML = '<input type="button" name="bouton2" value="Réponse" onclick="affiche2();"/>';
//affiche3()
document.getElementById('bouton3').innerHTML = '<input type="button" name="bouton3" value="Réponse" onclick="affiche3();"/>';
//affiche4()
document.getElementById('bouton4').innerHTML = '<input type="button" name="bouton4" value="Réponse" onclick="affiche4();"/>';
//affiche5()
document.getElementById('bouton5').innerHTML = '<input type="button" name="bouton5" value="Réponse" onclick="affiche5();"/>';
//affichhe6()
document.getElementById('bouton6').innerHTML = '<input type="button" name="bouton6" value="Réponse" onclick="affiche6();"/>';
//affichhe7()
document.getElementById('bouton7').innerHTML = '<input type="button" name="bouton7" value="Réponse" onclick="affiche7();"/>';
//popupDOM1()
document.getElementById('bouton8').innerHTML = '<input type="button" name="bouton8" value="Accés aux éléments DOM Html " onclick="popupDOM1();"/>';
//popupDOM2()
document.getElementById('bouton9').innerHTML = '<input type="button" name="bouton9" value="Edition HTML via Element" onclick="popupDOM2();"/>';
//popupDOM3()
document.getElementById('bouton10').innerHTML = '<input type="button" name="bouton10" value="La classe, javaScript et le dom HTML" onclick="popupDOM3();"/>';
//popupDOM3()
document.getElementById('bouton11').innerHTML = '<input type="button" name="bouton11" value="innerText" onclick="popupDOM4();"/>';
}

function affiche1()
{
alert("Le DOM va servir à accéder aux éléments HTML présents dans un document afin de les modifier et d'interagir avec eux.");
}
function affiche2()
{
alert("L'objet window est un objet global qui représente la fenêtre du navigateur. document,quant à lui, est un sous-objet de window et représente la page Web. C'est grâce à lui que l'on va pouvoir accéder aux éléments HTML de la page Web.");}
function affiche3()
{
alert("Les éléments de la page sont structurés comme un arbre généalogique, avec l'élément <html> comme élément fondateur.");
}
function affiche4()
{
alert("Différentes méthodes comme getElementById() et getElementsByTagName() ou encore querySelector() et querySelectorAll() sont disponibles pour accéder aux éléments.");
}
function affiche5()
{
alert("Les attributs peuvent tous être modifiés grâce à setAttribute(). Certains éléments possèdent des propriétés qui permettent de modifier ces attributs.");
}
function affiche6()
{
alert("La propriété innerHTML permet de récupérer ou de définir le code HTML présent à l'intérieur d'un élément.");
}
function affiche7()
{
alert("De leur côté, textContent et innerHTML ne sont capables que de définir ou récupérer du texte brut, sans aucunes balises HTML.");
}


function popupDOM1()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popupDOM.html","","width=500,height=400");
}

function popupDOM2()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popupDOM2.html","","width=1900,height=900");
}

function popupDOM3()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popupDOM3.html","","width=1900,height=900");
}

function popupDOM4()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popupDOM4.html","","width=1900,height=900");
}
