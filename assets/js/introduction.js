function quizzIntro()
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
}

function affiche1()
{
alert("Le JavaScript est un langage de programmation de scripts orienté objet.");
}
function affiche2()
{
alert("Le code source reste tel quel, et si on veut exécuter ce code, on doit le fournir à un interpréteur qui se chargera de le lire et de réaliser les actions demandées. Éventuellement, pour obtenir de significatifs gains de performances, le code peut-être compilé à la volée pendant son exécution. Chaque navigateur possède un interpréteur JavaScript");
}
function affiche3()
{
alert("Ce concept est assez compliqué à définir maintenant et sera approfondi par la suite notamment à la partie 2. Sachez toutefois qu'un langage de programmation orienté objet est un langage qui contient des éléments, appelés objets, et que ces différents objets possèdent des caractéristiques spécifiques ainsi que des manières différentes de les utiliser. Le langage fournit des objets de base comme des images, des dates, des chaînes de caractères… mais il est également possible de créer soi-même des objets pour se faciliter la vie et obtenir un code source plus clair (donc plus facile à lire) et une manière de programmer beaucoup plus intuitive (et donc plus logique).");
}
function affiche4()
{
alert("Le JavaScript est utilisé majoritairement au sein des pages Web mais son utilisation en guise de serveur ou d'application commence à se répandre.");
}
function affiche5()
{
alert("Tout comme le HTML, le JavaScript est généralement exécuté par le navigateur de l'internaute : on parle d'un comportement client-side, par opposition au server-side lorsque le code est exécuté par le serveur.");
}
function affiche6()
{
alert("Le JavaScript est standardisé par l'ECMA International sous le nom d'ECMAScript qui constitue la référence du langage.");
}
