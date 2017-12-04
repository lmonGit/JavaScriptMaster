function quizzPremiersPas()
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
//affiche7()
document.getElementById('bouton7').innerHTML = '<input type="button" name="bouton7" value="Réponse" onclick="affiche7();"/>';
//affiche8()
document.getElementById('bouton8').innerHTML = '<input type="button" name="bouton8" value="Réponse" onclick="affiche8();"/>';
//affiche9()
document.getElementById('bouton9').innerHTML = '<input type="button" name="bouton9" value="Réponse" onclick="affiche9();"/>';
//affiche10()
document.getElementById('bouton10').innerHTML = '<input type="button" name="bouton10" value="Réponse" onclick="affiche10();"/>';
}

function affiche1()
{
alert("Pour afficher une boîte de dialogue on utilise la fonction alert('Mon Message')");
}
function affiche2()
{
alert("La syntaxe du JavaScript n'est pas compliquée. De manière générale, les instructions doivent être séparées par un point-virgule que l'on place à la fin de chaque instruction.");
}
function affiche3()
{
alert("Le JavaScript n'est pas sensible aux espaces. Cela veut dire que vous pouvez aligner des instructions comme vous le voulez, sans que cela ne gêne en rien l'exécution du script.");
}
function affiche4()
{
alert("L'indentation, en informatique, est une façon de structurer du code pour le rendre plus lisible. Les instructions sont hiérarchisées en plusieurs niveaux et on utilise des espaces ou des tabulations pour les décaler vers la droite et ainsi créer une hiérarchie");
}
function affiche5()
{
alert("Ils servent à commenter une instruction. Un tel commentaire commence par deux slashs.");
}
function affiche6()
{
alert("Ce type de commentaires permet les retours à la ligne. Un commentaire multiligne commence par /* et se termine par */ .");
}
function affiche7()
{
alert("Une fonction se compose de deux choses : son nom, suivi d'un couple de parenthèses (une ouvrante et une fermante).");
}
function affiche8()
{
alert("Il est possible, et même conseillé, d'écrire le code JavaScript dans un fichier externe, portant l'extension .js .Ce fichier est ensuite appelé depuis la page Web au moyen de l'élément <script> et de son attribut src qui contient l'URL du fichier .js .");
}
function affiche9()
{
alert("Une page Web est lue par le navigateur de façon linéaire, c'est-à-dire qu'il lit d'abord le <head>, puis les éléments de <body> les uns à la suite des autres. Si vous appelez un fichier JavaScript dès le début du chargement de la page, le navigateur va donc charger ce fichier, et si ce dernier est volumineux, le chargement de la page s'en trouvera ralenti. Pour pallier ce problème, il est conseillé de placer les éléments <script> juste avant la fermeture de l’élément <body>.");
}
