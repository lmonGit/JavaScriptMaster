function quizzBoucles()
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
//indeCrement()
document.getElementById('bouton7').innerHTML = '<input type="button" name="bouton7" value="Opérateurs d\'incrémentation en JavaScript" onclick="indeCrement();"/>';
//testFor()
document.getElementById('bouton8').innerHTML = '<input type="button" name="bouton8" value="Test de For" onclick="popup();"/>';
}

function affiche1()
{
alert("L'incrémentation est importante au sein des boucles.Incrémenter ou décrémenter signifie ajouter ou soustraire une unité à une variable.");
}
function affiche2()
{
alert("Le comportement d'un opérateur d'incrémentation est différent s'il se place avant ou après la variable.");}
function affiche3()
{
alert("La boucle while permet de répéter une liste d'instructions tant que la condition est vérifiée.");
}
function affiche4()
{
alert("La boucle do while est une variante de while qui sera exécutée au moins une fois, peu importe la condition.");
}
function affiche5()
{
alert("La boucle for est une boucle utilisée pour répéter une liste d'instructions un certain nombre de fois. C'est donc une variante très ciblée de la boucle while.");
}

function indeCrement()
{
  var number = 0;
  var output = ++number;
  alert(" Précis sur utilisation des opérateurs d'incrémentation en JavaScript ");
  alert("  L'opération est output = ++number number vaut : " + number + " et output vaut : " + output);
  number=0;
  output=number++;
  alert("Remise à 0 de number et output");
  alert("  L'opération est output = number++ number vaut : " + number + " et output vaut : " + output);
  alert(" Voir sur wikipédia à l'adresse https://fr.wikipedia.org/wiki/Incrémentation");
  alert(" y = x++ équivaut à (y = x  puis  x = x + 1)   ==> y n\'a pas bougé");
  alert(" y = ++x équivaut à (x = 1 + x  puis  y = x)   ==> la valeur de y suit la modification de x ");
  alert(" Le placement des opérateurs d'incrémentation affecte la valeur de la variable réceptrice (y) pas de la variable (x) qui est décrémentée ou incrémentée de toute manière. ");
  alert("Ce principe s'applique à d'auters langages que le JavaScript");
}
function popup()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popup.html","","width=380,height=250");

}
