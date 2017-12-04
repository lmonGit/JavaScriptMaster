function quizzConditions()
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
document.getElementById('bouton6').innerHTML = '<input type="button" name="bouton6" value="Tp Conditions" onclick="appliCondi();"/>';
//citations()
document.getElementById('bouton7').innerHTML = '<input type="button" name="bouton7" value="Citations du jour" onclick="appliCitations();"/>';
}

function affiche1()
{
alert("Une condition retourne une valeur booléenne : true ou false.");
}
function affiche2()
{
alert("De nombreux opérateurs existent afin de tester des conditions et ils peuvent être combinés entre eux.");}
function affiche3()
{
alert("La condition if else est la plus utilisée et permet de combiner les conditions.");
}
function affiche4()
{
alert("Quand il s'agit de tester une égalité entre une multitude de valeurs, la conditionswitchest préférable.");
}
function affiche5()
{
alert("Les ternaires sont un moyen concis d'écrire des conditions if else et ont l'avantage de retourner une valeur.");
}


function appliCondi()
{
  var txt='';

  txt=prompt("Quel est donc votre âge ?  ");
  age=parseInt(txt);
    if ((age>=0) && (age<=17)){
      alert("Vous n'êtes pas encore majeur.");
    }
    else if ((age>=18) && (age<=49)){
      alert("Vous êtes majeur mais pas encore senior");
    }
    else if ((age>=50) && (age<=59)){
      alert("Vous êtes senior mais pas encore retraité.");
    }
    else if ((age>=60) && (age<=120)){
      alert("Vous êtes retraité profitez de votre temps libre !");
    }
    else {
      alert("Erreur de saisie, vous avez écrit : " + txt);
      alert("Fermer cette boîte de dialogue et relancer le Tp en indiquant un nombre entier de 1 à 120 inclus");
    }
}



function appliCitations()
{
var choice = parseInt(prompt('Choisissez un personnage : Simone de Beauvoir ==> 1 Jean-Paul Sartre ==> 2 Stéphane Mallarmé ==> 3 Baudelaire ==> 4 :'));

    switch (choice) {
    case 1:
        alert('La beauté se raconte encore moins que le bonheur.');
    break;

    case 2:
        //LES APASTROPHES DOIVENT être échappées avec \
        alert('S\'il est vrai que le recours à la violence contre la violence risque de la perpétuer, il est vrai aussi que c\'est l\'unique moyen de la faire cesser. ');
    break;

    case 3:
        alert('Fuir ! là-bas fuir ! Je sens que des oiseaux sont ivres D’être parmi l’écume inconnue et les cieux !');
    break;

    case 4:
        alert('Homme libre, toujours tu chériras la mer !');
    break;

    default:
        alert("Un intellectuel assis va moins loin qu'un con qui marche.");
      }
}
