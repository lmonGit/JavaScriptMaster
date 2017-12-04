function quizzDebog1()
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
}

/*Attention à ne pas prendre de ; qd on copie du texte ne pas faire entrée chariot*/

function affiche1()
{
alert("Dans ce chapitre, nous allons commencer à étudier quels sont les différents bugs que l'on peut généralement rencontrer en JavaScript et surtout comment les résoudre. Pour cela, nous allons utiliser les kits de développement fournis avec n'importe quel navigateur digne de ce nom. Plus particulièrement, nous allons nous pencher sur ceux de Chrome et de Firefox qui sont sensiblement similaires.");
}

function affiche2()
{
alert("Avant de parler de débogage, intéressons-nous d'abord aux bugs. Ces derniers sont des erreurs humaines que vous avez laissées dans votre code.Ils ne sont jamais le fruit du hasard.");
}

function affiche3()
{
alert("Il existe deux types principaux de bugs : ceux que l'interpréteur JavaScript saura vous signaler car ce sont des fautes de syntaxe, et ceux que l'interpréteur ne verra pas car ce sont des erreurs dans votre algorithme.");
}

function affiche4()
{
alert("Comme son nom l'indique, cette technique consiste à supprimer les bugs qui existent dans votre code. Pour chaque type de bug vous avez plusieurs solutions bien particulières.");
}

function affiche5()
{
alert("Les bugs syntaxiques sont les plus simples à résoudre, car l'interpréteur JavaScript vous signalera généralement l'endroit où l'erreur est apparue, cette signalisation peut être consultée dans la console de votre navigateur. Vous verrez comment vous servir de la console un peu plus loin.");
}

function affiche6()
{
alert("En ce qui concerne les bugs algorithmiques, là il va falloir faire travailler votre cerveau et chercher par vous-mêmes où vous avez bien pu vous tromper. La méthode la plus simple consiste à remonter les couches de votre code pour trouver à quel endroit s'est produit l'erreur.");
}

function affiche7()
{
alert("Pour ouvrir votre kit de développement, appuyez sur la touche F12");
}

function affiche8()
{
alert("La méthode console.log()vous permet d'afficher la valeur d'une variable sans bloquer l'exécution de votre code, contrairement à la fonction alert(). Mais l'intérêt de cette méthode va beaucoup plus loin car elle permet de visualiser le contenu des objets de manière relativement pratique. En plus de la méthode log(), l'objet console en propose d'autres qui permettent de modifier la manière dont vous affichez vos valeurs, vous pouvez ainsi choisir d'émettre des alertes ou des erreurs avec les méthodes warn() et error(), vous pouvez grouper des lignes de résultats avec group()etgroup End()");
}

function affiche9()
{
alert("");
}
