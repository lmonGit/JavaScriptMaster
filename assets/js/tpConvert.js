function tpConvertNtoL() {
  //tpconvert()
  document.getElementById('bouton1').innerHTML = '<input type="button" name="bouton1" value="TP Conversion nombres lettres" onclick="conversionNumberToLetter();"/>';
}


function conversionNumberToLetter() {
  var myNumber;
  var verif = -1;
  //alert("Nous sommes dans conversionNumberToLetter");
    //alert("Nombre saisi = " + myNumber);
  //Controle myNumber
	myNumber = dataInput();
  verif = isInt(myNumber);
  while (verif == -1) {
    //alert("Un erreur a été détectée " );
    verif = isInt(myNumber);
    myNumber = dataInput();
  }
  /*if (verif == myNumber) {
    //alert("myNumber est valide et vaut " + myNumber);
    //alert("nous sommes revenu dans conversionNumberToLetternous pouvons lancer tasty()");
    tasty(myNumber);
  }*/

}

function dataInput() {
  var myNumber = prompt("Saisir un nombre de 0 à 999");
  if (isNaN(myNumber) == false) {
    myNumber = parseInt(myNumber);
  }
  //alert("Nous sommes dans dataInput");
  //alert("myNumber est de type " + typeof myNumber + "  et contient " + myNumber);
  return myNumber;
}


function isInt(myNumber) {
  var testNumber = true;
  //alert("Nous sommes dans isInt myNumber vaut " + myNumber);

  //controle number n'est pas un nombre'
  if (isNaN(myNumber) == true) {
    //alert("myNumber est de type " + typeof myNumber + "  et contient " + myNumber);
    alert(myNumber + " a été saisi : La saisie est érronéee. Un nombre entier compris entre 0 et 999 compris doit etre saisi. ");
    testNumber = false;
    return -1;
  }
  /*var x = parseFloat(value);
  return (x | 0) === x;*/

  //controle number is float or double
  if (myNumber % 1 != 0) {
    alert(" Un entier n'a pas été saisi. La saisie est érronéee. Un nombre entier compris entre 0 et 999 compris doit etre saisi. ");
    testNumber = false;
    return -1;
  }

  //Controle number is an integer < 0 or >999
  if ((myNumber < 0) || (myNumber > 999)) {
    alert(myNumber + " a été saisi : La saisie est érronéee. Un nombre entier compris entre 0 et 999 compris doit etre saisi. ");
    testNumber = false;
    return -1;
  }
  if (testNumber == true) {
    alert(myNumber + " est valide : 1) C'est un nombre 2) C'est un entier 3) Il est compris entre 0 et 999 ");
    tasty(myNumber);
  }
}

function tasty(myNumber) {
  //alert("nous sommes dans tasty");
  var cuttedNumber = div = rest = 0;
  var hundred = decade = unit = 0;
  //slice = tranche;
  var sliceNumber = 0;
  var tabSlice = [100, 10, 1];
  var tabResult = [0, 0, 0];

  cuttedNumber = myNumber;
  //alert(" myNumber  vaut " + myNumber);
  //alert(" cuttedNumber  vaut " + cuttedNumber);


  for (i = 0; i < tabSlice.length; i++) {
    rest = parseInt(cuttedNumber % (tabSlice[i]));
    tabResult[i] = parseInt(cuttedNumber / (tabSlice[i]));
    cuttedNumber = rest;
  }
  for (i = 0; i < tabResult.length; i++) {
    sliceNumber = i + 1;
    //alert("La tranche " + sliceNumber + " vaut : " + tabResult[i]);
  }

  convertToLetter(tabResult);
}

function convertToLetter(tabResult) {
  var indice = myNumber = myModulo1 = 0;
  var myNumberStr = myNumberHundred = myNumberDecade = myNumberUnit = myModulo1Str = "";
  var normalNumb = true;

  var tabHundred = ["Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf"];
  var tabDecade = ["vingt", "trente", "quarante", "cinquante", "soixante"];
  var tabDecade70 = ["soixante-dix", "soixante et onze", "soixante-douze", "soixante-treize", "soixante-quattorze", "soixante-quinze", "soixante-seize", "soixante-dix-sept", "soixante-dix-huit", "soixante-dix-neuf"];
  var tabDecade80 = ["quatre-vingts", "quatre-vingt-un", "quatre-vingt-deux", "quatre-vingt-trois", "quatre-vingt-quatre", "quatre-vingt-cinq", "quatre-vingt-six", "quatre-vingt-sept", "quatre-vingt-huit", "quatre-vingt-neuf"];
  var tabDecade90 = ["quatre-vingt-dix", "quatre-vingt-onze", "quatre-vingt-douze", "quatre-vingt-treize", "quatre-vingt-quattorze", "quatre-vingt-quinze", "quatre-vingt-seize", "quatre-vingt-dix-sept", "quatre-vingt-dix-huit", "quatre-vingt-dix-neuf"];
  var tabUnit = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];
  var tabTenToSixteen = ["dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
  var tabSeventeenToNineteen = ["dix-sept", "dix-huit", "dix-neuf"];


  //alert("nous sommes dans convertToLetter et tabResult vaut " + tabResult);

  /*for (i = 0; i < tabResult.length; i++) {

    alert("tabResult[] de " + i + " vaut : " + tabResult[i]);
  }*/

  hundred = tabResult[0];
  decade = tabResult[1];
  unit = tabResult[2];

  myNumberHundred = hundred.toString();
  //alert("myNumberHundred vaut : " + myNumberHundred);
  myNumberDecade = decade.toString();
  //alert("myNumberDecade vaut :" + myNumberDecade);
  myNumberUnit = unit.toString();
  //alert("myNumberUnit vaut :" + myNumberUnit);
  myNumberStr = myNumberHundred + myNumberDecade + myNumberUnit;
  myNumber = parseInt(myNumberStr);
  //alert("myNumber vaut : " + myNumber);
  //myModulo1
  myModulo1Str = myNumberDecade + myNumberUnit;
  myModulo1 = parseInt(myModulo1Str);
  //alert("myModulo1 vaut : " + myModulo1);


  //data processing (traitement) for decade and unit




  // myModulo1<10

  if (myModulo1 < 10) {
    if (hundred == 0) {
      //document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
      alert(myNumber + " s'écrit en lettres : " + tabUnit[unit].charAt(0).toUpperCase() + tabUnit[unit].substring(1).toLowerCase());
    }
    if (hundred == 1) {
      alert(myNumber + " s'écrit en lettres : " + " Cent " + tabUnit[unit]);
    }
    if (hundred > 1) {
      alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabUnit[unit]);
    }
  }
  // myModulo1>9 and myModulo<17
  if (myModulo1 > 9 && myModulo1 < 17) {
    indice = myModulo1 - 10;
    if (hundred == 0) {
      //document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
      alert(myNumber + " s'écrit en lettres : " + tabTenToSixteen[indice].charAt(0).toUpperCase() + tabTenToSixteen[indice].substring(1).toLowerCase());
    }
    if (hundred == 1) {
      alert(myNumber + " s'écrit en lettres : " + " Cent " + tabTenToSixteen[indice]);
    }
    if (hundred > 1) {
      alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabTenToSixteen[indice]);
    }
  }
  // myModulo1>16 and myModulo<20
  if (myModulo1 > 16 && myModulo1 < 20) {
    indice = myModulo1 - 17;
    if (hundred == 0) {
      //document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
      alert(myNumber + " s'écrit en lettres : " + tabSeventeenToNineteen[indice].charAt(0).toUpperCase() + tabSeventeenToNineteen[indice].substring(1).toLowerCase());
    }

    if (hundred == 1) {
      alert(myNumber + " s'écrit en lettres : " + " Cent " + tabSeventeenToNineteen[indice]);
    }

    if (hundred > 1) {
      alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabSeventeenToNineteen[indice]);
    }


  }

  // myModulo1>19 and myModulo<70
  if (myModulo1 > 19 && myModulo1 < 70) {
    if (hundred == 0) {

      if (myModulo1 == 21) {
        alert(myNumber + " s'écrit en lettres : Vingt et un");
        normalNumb = false;
      }
      if (myModulo1 == 20) {
        alert(myNumber + " s'écrit en lettres : Vingt ");
        normalNumb = false;
      }

      if (myModulo1 == 31) {
        alert(myNumber + " s'écrit en lettres : Trente et un");
        normalNumb = false;
      }
      if (myModulo1 == 30) {
        alert(myNumber + " s'écrit en lettres : Trente ");
        normalNumb = false;
      }

      if (myModulo1 == 41) {
        alert(myNumber + " s'écrit en lettres : Quarante et un");
        normalNumb = false;
      }
      if (myModulo1 == 40) {
        alert(myNumber + " s'écrit en lettres : Quarante ");
        normalNumb = false;
      }

      if (myModulo1 == 51) {
        alert(myNumber + " s'écrit en lettres : Cinquante et un");
        normalNumb = false;
      }
      if (myModulo1 == 50) {
        alert(myNumber + " s'écrit en lettres : Cinquante ");
        normalNumb = false;
      }

      if (myModulo1 == 61) {
        alert(myNumber + " s'écrit en lettres : Soixante et un");
        normalNumb = false;
      }
      if (myModulo1 == 60) {
        alert(myNumber + " s'écrit en lettres : Soixante ");
        normalNumb = false;
      }

      if (normalNumb == true) {
        alert(myNumber + " s'écrit en lettres : " + tabDecade[decade - 2].charAt(0).toUpperCase() + tabDecade[decade - 2].substring(1).toLowerCase() + "-" + tabUnit[unit]);
      }

    }

    if (hundred == 1) {
      if (myModulo1 == 21) {
        alert(myNumber + " s'écrit en lettres : Cent vingt et un");
        normalNumb = false;
      }
      if (myModulo1 == 20) {
        alert(myNumber + " s'écrit en lettres : Cent vingt ");
        normalNumb = false;
      }

      if (myModulo1 == 31) {
        alert(myNumber + " s'écrit en lettres : Cent trente et un");
        normalNumb = false;
      }
      if (myModulo1 == 30) {
        alert(myNumber + " s'écrit en lettres : Cent trente ");
        normalNumb = false;
      }

      if (myModulo1 == 41) {
        alert(myNumber + " s'écrit en lettres : Cent quarante et un");
        normalNumb = false;
      }
      if (myModulo1 == 40) {
        alert(myNumber + " s'écrit en lettres : Cent quarante ");
        normalNumb = false;
      }

      if (myModulo1 == 51) {
        alert(myNumber + " s'écrit en lettres : Cent cinquante et un");
        normalNumb = false;
      }
      if (myModulo1 == 50) {
        alert(myNumber + " s'écrit en lettres : Cent cinquante ");
        normalNumb = false;
      }

      if (myModulo1 == 61) {
        alert(myNumber + " s'écrit en lettres : Cent soixante et un");
        normalNumb = false;
      }
      if (myModulo1 == 60) {
        alert(myNumber + " s'écrit en lettres : Cent soixante ");
        normalNumb = false;
      }

      if (normalNumb == true) {
        alert(myNumber + " s'écrit en lettres : Cent " + tabDecade[decade - 2] + "-" + tabUnit[unit]);
      }

    }

    if (hundred > 1) {
      if (myModulo1 == 21) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent vingt et un ");
        normalNumb = false;
      }
      if (myModulo1 == 20) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent vingt ");
        normalNumb = false;
      }

      if (myModulo1 == 31) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent trente et un ");
        normalNumb = false;
      }
      if (myModulo1 == 30) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent trente ");
        normalNumb = false;
      }

      if (myModulo1 == 41) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent quarante et un ");
        normalNumb = false;
      }
      if (myModulo1 == 40) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent quarante ");
        normalNumb = false;
      }

      if (myModulo1 == 51) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent cinquante et un ");
        normalNumb = false;
      }
      if (myModulo1 == 50) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent cinquante ");
        normalNumb = false;
      }

      if (myModulo1 == 61) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent soixante et un ");
        normalNumb = false;
      }
      if (myModulo1 == 60) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent soixante ");
        normalNumb = false;
      }

      if (normalNumb == true) {
        alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabDecade[decade - 2] + "-" + tabUnit[unit]);
      }
    }
  }

  // myModulo1>69 and myModulo<80
  if (myModulo1 > 69 && myModulo1 < 80) {
    indice = myModulo1 - 70;
    if (hundred == 0) {
      //document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
      alert(myNumber + " s'écrit en lettres : " + tabDecade70[indice].charAt(0).toUpperCase() + tabDecade70[indice].substring(1).toLowerCase());
    }
    if (hundred == 1) {
      alert(myNumber + " s'écrit en lettres : " + " Cent " + tabDecade70[indice]);
    }
    if (hundred > 1) {
      alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabDecade70[indice]);
    }
  }

  // myModulo1>79 and myModulo<90
  if (myModulo1 > 79 && myModulo1 < 90) {
    indice = myModulo1 - 80;
    if (hundred == 0) {
      //document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
      alert(myNumber + " s'écrit en lettres : " + tabDecade80[indice].charAt(0).toUpperCase() + tabDecade80[indice].substring(1).toLowerCase());
    }
    if (hundred == 1) {
      alert(myNumber + " s'écrit en lettres : " + " Cent " + tabDecade80[indice]);
    }
    if (hundred > 1) {
      alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabDecade80[indice]);
    }
  }


  // myModulo1>89 and myModulo<100

  if (myModulo1 > 89 && myModulo1 < 100) {
    indice = myModulo1 - 90;
    if (hundred == 0) {
      //document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
      alert(myNumber + " s'écrit en lettres : " + tabDecade90[indice].charAt(0).toUpperCase() + tabDecade90[indice].substring(1).toLowerCase());
    }
    if (hundred == 1) {
      alert(myNumber + " s'écrit en lettres : " + " Cent " + tabDecade90[indice]);
    }
    if (hundred > 1) {
      alert(myNumber + " s'écrit en lettres : " + tabHundred[hundred - 2] + " cent " + tabDecade90[indice]);
    }
  }
//Forcer la sortie de la fonction tpConvertNtoL()
throw new Error("");
}
