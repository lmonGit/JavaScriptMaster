function quizzVariables()
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
//affiche6()
document.getElementById('bouton6').innerHTML = '<input type="button" name="bouton6" value="Réponse" onclick="affiche6();"/>';
//appliVar1
document.getElementById('bouton7').innerHTML = '<input type="button" name="bouton7" value="Utiliser les variables de chaînes" onclick="appliVar1();"/>';
//appliVar2
document.getElementById('bouton8').innerHTML = '<input type="button" name="bouton8" value="Utiliser les variables numériques" onclick="appliVar2();"/>';
//appliVar3
document.getElementById('bouton9').innerHTML = '<input type="button" name="bouton9" value="Utiliser typeof" onclick="appliVar3();"/>';
//appliVar4
document.getElementById('bouton10').innerHTML = '<input type="button" name="bouton10" value="Utiliser prompt" onclick="appliVar4();"/>';
//appliVar5
document.getElementById('bouton11').innerHTML = '<input type="button" name="bouton11" value="Conversion chaîne vers nombre" onclick="appliVar5();"/>';
//appliVar6
document.getElementById('bouton12').innerHTML = '<input type="button" name="bouton12" value="Conversion nombre vers chaîne" onclick="appliVar6();"/>';
}

function affiche1()
{
alert("Pour faire simple, une variable est un espace de stockage sur votre ordinateur permettant d'enregistrer tout type de données, que ce soit une chaîne de caractères, une valeur numérique ou bien des structures un peu plus particulières.");
}
function affiche2()
{
alert("Pour déclarer une variable, il vous faut d'abord lui trouver un nom. Il est important de préciser que le nom d'une variable ne peut contenir que des caractères alphanumériques, autrement dit les lettres de A à Z et les chiffres de 0 à 9 ; l'underscore (_) et le dollar ($) sont aussi acceptés. Autre chose : le nom de la variable ne peut pas commencer par un chiffre et ne peut pas être constitué uniquement de mots-clés utilisés par le JavaScript.");
}
function affiche3()
{
alert("Le type numérique (alias number) : il représente tout nombre, que ce soit un entier, un nombre négatif, scientifique, etc. Bref, c'est le type pour les nombres. Les chaînes de caractères (alias string) : ce type représente n'importe quel texte. Les booléens (alias boolean) : les booléens sont un type bien particulier que vous n'étudierez réellement qu'au chapitre suivant. Dans l'immédiat, pour faire simple, un booléen est un type à deux états qui sont les suivants : vrai ou faux  ");
}
function affiche4()
{
alert("Pour tester l'existence d'une variable ou en vérifier son type, on utilise l'instruction typeof ");
}
function affiche5()
{
alert("Les variables sont typées dynamiquement, ce qui veut dire que l'on n'a pas besoin de spécifier le type de contenu que la variable va contenir.");
}
function affiche6()
{
alert("La fonction prompt() s'utilise comme alert() mais a une petite particularité. Elle renvoie ce que l'utilisateur a écrit sous forme d'une chaîne de caractères.");
}
function appliVar1()
{
//utilisation des variables
var text1 = "Si l'on me demande avec insistance de dire pourquoi je l'aimais, je sens que cela ne peut s'exprimer qu'en répondant : « Parce que c'était lui, parce que c'était moi.» (L1, XXVIII, p.233) Montaigne"; // Avec des guillemets
alert("Affichage d'une chaîne et concaténation d'une variable chaîne " + text1);
}
function appliVar2()
{
//utilisation des variables numériques
var price = 25.50;
var TVA = 0.196;
var TTC = 0;
TTC= price*0.196+price

alert(" Le prix de la Rollex de Sarkozy est de : " + TTC + " euros TTC");
}
function appliVar3()
{
  var nombre = 9;
  var text = "mon texte";
  var aBoolean = false;
  //nothing n'est pas déclarée

  alert("nombre est de type " + typeof nombre + " text est de type " + typeof text + " aBoolean est de type " + typeof aBoolean + " nothing est de type " + typeof nothing);
}

function appliVar4()
{
  var deb = 'Bonjour ', pnom, fin ='tu n\'est pas beau.';

pnom  = prompt('Quel est ton prénom ?');
presentation = deb + " " + pnom + ", " + fin;
alert(presentation);
}

function appliVar5()
{
  //Utilisation de prompt impose la conversion de text vers nombre
  //pour convertir la chaine renvoyer à prompt on utilise pour un entier parseInt()
var nb1, nb2, produit;
// les variables n'ont pas été initialisées

nb1 = prompt('Entrez le premier chiffre :');
nb2 = prompt('Entrez le second chiffre :');
produit = parseInt(nb1) * parseInt(nb2);

alert(nb1 + " * " + nb2 + " = " + produit);

}

function appliVar6()
{
  //chiffre1 et chiffre2 sont 2 variables numériques
  var nombre, chiffre1=3, chiffre2=5;
  chiffre1 = prompt('Entrez le premier chiffre :');
  chiffre2 =  prompt('Entrez le second chiffre :');
  nombre = chiffre1 + '' + chiffre2;
  alert(nombre);
  //Qu'avons-nous fait ? Nous avons juste ajouté une chaîne de caractères vide entre les deux nombres, ce qui aura eu pour effet de les convertir en chaînes de caractères.
}
