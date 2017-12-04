function quizzTableau()
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
//popup2()
document.getElementById('bouton7').innerHTML = '<input type="button" name="bouton7" value="Start" onclick="popup2();"/>';

}

function affiche1()
{
alert("Un objet contient un constructeur, des propriétés et des méthodes.");
}
function affiche2()
{
alert("Les tableaux sont des variables qui contiennent plusieurs valeurs, chacune étant accessible au moyen d'un indice.");
}
function affiche3()
{
alert("Les indices d'un tableau sont toujours numérotés à partir de 0. Ainsi, la première valeur porte l'indice 0.");
}
function affiche4()
{
alert("Des opérations peuvent être réalisées sur les tableaux, comme ajouter des items ou en supprimer.");
}
function affiche5()
{
alert("Pour parcourir un tableau, on utilise généralement une boucle for, puisqu'on connaît, grâce à la propriété length, le nombre d'items du tableau.");
}
function affiche6()
{
alert("Les objets littéraux sont une variante des tableaux où chaque item est accessible via un identiant et non un indice.");
}


function popup2()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popup2.html","","width=380,height=250");

}
