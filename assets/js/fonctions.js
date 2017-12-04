function quizzFonctions()
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
//
//tenSum()
document.getElementById('bouton8').innerHTML = '<input type="button" name="bouton8" value="Ten summerizer" onclick="tenSum();"/>';
//hundredSum()
document.getElementById('bouton9').innerHTML = '<input type="button" name="bouton9" value="Hundred summerizer" onclick="hundredSum();"/>';
//thousandSum()mous
document.getElementById('bouton10').innerHTML = '<input type="button" name="bouton10" value="Thousand summerizer" onclick="thousandSum();"/>';
//summerizer()
document.getElementById('bouton11').innerHTML = '<input type="button" name="bouton11" value="Summerizer" onclick="summeriser();"/>';
//pnc()
document.getElementById('bouton12').innerHTML = '<input type="button" name="bouton12" value="Prime Number Check" onclick="pnc();"/>';
//pns()
document.getElementById('bouton13').innerHTML = '<input type="button" name="bouton13" value="Prime Number Summerise" onclick="pns();"/>';
//dispTTC()
document.getElementById('bouton14').innerHTML = '<input type="button" name="bouton14" value="Taux TVA avec 18.6 % par défaut" onclick="dispTTC();"/>';
//dispClu()
document.getElementById('bouton15').innerHTML = '<input type="button" name="bouton15" value="Plusieurs arguments" onclick="dispCli();"/>';
//dispClu()
document.getElementById('bouton16').innerHTML = '<input type="button" name="bouton16" value="Citation de Jules César, contemporain d\'Astérix" onclick="dispAnonymous();"/>';
}

function affiche1()
{
alert("Il existe des fonctions natives, mais il est aussi possible d'en créer, avec le mot-clé function.");
}
function affiche2()
{
alert("Les variables déclarées avec var au sein d'une fonction ne sont accessibles que dans cette fonction.");}
function affiche3()
{
alert("Il faut éviter le plus possible d'avoir recours aux variables globales.");
}
function affiche4()
{
alert("Une fonction peut recevoir un nombre défini ou indéfini de paramètres.");
}
function affiche5()
{
alert("Elle peut retourner une valeur ou ne rien retourner du tout.");
}
function affiche6()
{
alert("Des fonctions qui ne portent pas de nom sont des fonctions anonymes.");
}
function affiche7()
{
alert("Les fonctions anonymes servent à isoler une partie du code.");
}

function tenSum()
{
    var sum=0;
    for (number=0;number<=10;++number)
    {
      sum+=number;
    }
    alert("La somme des 10 premiers entiers est : " + sum);
}

function hundredSum()
{
    var sum=0;
    for (number=0;number<=100;++number)
    {
      sum+=number;
    }
    alert("La somme des 100 premiers entiers est : " + sum);
}

function thousandSum()
{
    var sum=0;
    for (number=0;number<=1000;++number)
    {
      sum+=number;
    }
    alert("La somme des 1000 premiers entiers est : " + sum);
}

function summeriser()
{
    alert(" ** SOMME DE NOMBRES ENTIERS ** \n Calcul de la sommme des 10 premiers entiers taper 1 \n Calcul de la somme des 100 premiers entiers taper 2 \n Calcul de la somme des 1000 premiers entiers taper 3");

  var choice = parseInt(prompt("Indiquer un choix : "));

  switch (choice) {
    case 1 : tenSum();
    break;

    case 2 :  hundredSum();
    break;

    case 3 : thousandSum();
    break;

    default : alert(" Il fallait donner un entier compris entre 1 et 3 !");
  }
}

function pnc()
{
  alert(" ** PNC (for Prime Number Check)** \n 0 et 1 ne sont pas des nombres premiers. 2 est le premier des nombres premiers.");

var number = parseInt(prompt("Indiquer un nombre supérieur à 2 : "));
var check=true;

  for (divisor=2;divisor<number;divisor++){
    if (number % divisor==0){
      check=false;
      //sortie de for
      break;
    }
  }
//number est bien premier
  if (check==true){
    alert(number + " est un nombre premier.");
  }
  else {
    alert(number + " n'est pas un nombre premier.");
  }

}
//Déclaration de la fonction appelée en premier
function pnc2(param1)
{
var number=param1;
var check=true;
var valRetour=0;

  for (divisor=2;divisor<number;divisor++){
    if (number % divisor==0){
      check=false;
      //sortie de for
      break;
    }
  }
//number est bien premier
  if (check==true){
    valRetour=number;
  }
return valRetour;
}

//PNS for primaryNumberSummerise
function pns(){
    alert("Wikipédia - Les vingt-cinq nombres premiers inférieurs à 100 sont : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 et 97.");
    alert(" ** PNS (for Prime Number Summerriser)** \n " + " \n " + " Calcul de la somme des nombres premiers jusqu'au rang n.");
  //nec for number in course
  //sum commence à 2
  var sum=2;
  var result=0;
  var limit = parseInt(prompt("Indiquer une limite de calcul supérieure à 2 : "));
  for (nec=3;nec<=limit;++nec)
  {
    result=pnc2(nec);
    sum+=result;
  }
  alert("La somme des nombres premiers jusqu'à " + limit + " est : " + sum);

}

function TTC(a, b) {
  b = (typeof b !== 'undefined') ?  b : 0.186;

  return a+(a*b);
}

function dispTTC(){
  //appel de TTC avec un seul paramètre
  alert(" 10 euros HT valent " + TTC(10) + " euros TTC si le taux est à 18,6 %");
  //appel de TTC avec les 2  paramètre
  alert(" 10 euros HT valent " + TTC(10,0.056) + " euros TTC si le taux est à 5,6 %");
}

function saisieClient(a,b,c,d,e,f){
  //Controles saisie des paramètres
  b = (typeof b !== 'undefined') ?  b : "";
  c = (typeof c !== 'undefined') ?  c : "";
  d = (typeof d !== 'undefined') ?  d : "";
  e = (typeof e !== 'undefined') ?  e : "";
  f = (typeof f !== 'undefined') ?  f : "";
  alert('Numéro client : ' + a + '\n' + 'Nom : ' + b + '\n'+ 'Prénom : ' + c + '\n' + 'Ville : ' + d + '\n' + 'Mobile : ' + e + '\n' +  'Mail : ' + f  );

}

function dispCli(){
  //appel de saisieClient avec un seul paramètre

  alert("Appel de saisieClient avec seulement le numéro de client ");
  saisieClient(112233);
  //appel de saisieclient avec le numéro, le nom et la ville
  alert("Appel de saisieclient avec le numéro, le nom et la ville");
  saisieClient(124578,'Martin','','Rouen');
}

//la fonction anonyme
var sayCitation = (function() {

    return 'Veni,Vidi,Vici - Jules César vers 47 av. J-C Contemporain d\'Astérix, Obélix et Idéfix.';

})();

function dispAnonymous(){
  alert(sayCitation); // Affiche : « Vin, Vidi, Vicci »
}



/*function popup()
{
//https://www.it-connect.fr/ouvrir-une-url-en-javascript-avec-lobjet-window%EF%BB%BF/
//https://www.w3schools.com/jsref/met_win_open.asp
window.open("popup.html","","width=380,height=250");

}*/
