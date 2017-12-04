function applis() {
  //affiche1()
  document.getElementById('bouton1').innerHTML = '<input type="button" name="bouton1" value="XFactorielle" onclick="facto();"/>';
  //affiche2()
  document.getElementById('bouton2').innerHTML = '<input type="button" name="bouton2" value="SuiteRecurent" onclick="recurente();"/>';
  //affiche3()
  document.getElementById('bouton3').innerHTML = '<input type="button" name="bouton3" value="Application 3" onclick="affiche3();"/>';

}

function facto() {
  var fact = prompt("Indiquer la factorielle à calculer");
  var result = 1;
  for (i = fact; i > 0; i--) {
    result = result * i;
  }
  alert(" Le résultat de factorielle " + fact + " est : " + result);
}

function recurente() {
  alert("Lancement fonction de calcul d'une suite récurente");
  dataInput();
}

function dataInput() {
  var term = prompt("Saisir le terme de la suite à calculer ");
  term = parseFloat(term);
  var u0 = prompt("Saisir le premier terme de la suite à calculer ");
  u0 = parseFloat(u0);
  var u1 = prompt("Saisir le second terme de la suite à calculer ");
  u1 = parseFloat(u1);
  var proceed1, proceed2, proceed3;
  //if myNumber was a string at the prompt() now is value is NaN
  //Value control
  //alert(" term est de type : " + typeof term);
  //alert(" term vaut : " + term);

  //input control
  contMyNumb(term);
  isOrSup2(term);
  contMyNumb(u0);
  contMyNumb(u1);
  mySuite(term,u0,u1);
}

function contMyNumb(myN4) {
  var myN4;
  var res1 = res2 = res3 = false;
  res1 = isNumber(myN4);
  alert(" res1 vaut " + res1);
  res2 = isInt(myN4);
  alert(" res2 vaut " + res2);
  res3 = isPositive(myN4);
  alert(" res3 vaut " + res3);
  if ((res1 == true) && (res2 == true) && (res3 == true)) {
    alert(myN4 + " est valide et de type " +  typeof myN4)
  }

}


function isNumber(myN) {
  var myN;
  if (isNaN(myN) == true) {
    alert(" Une chaîne a été saisie !!");
    alert("Saisir un entier positif ");
    dataInput();
  } else {
    return true;
  }
}

function isInt(myN2) {
  var myN2;
  if (myN2 % 1 > 0) {
    //Test myN is a float
    alert(" Le nombre décimal " + myN2 + " a été saisi !");
    alert("Saisir un entier positif ");
    dataInput();
  } else {
    return true;
  }
}

function isPositive(myN3) {
  var myN3;
  if (myN3 < 0) {
    //Test myN is positive
    alert(" Le nombre " + myN3 + " a été saisi !");
    alert("Saisir un entier positif ");
    dataInput();
  } else {
    return true;
  }
}

function isOrSup2(myN5) {
  var myN5;
  if (myN5 < 2) {
    //Test myN is positive
    alert(" Le terme à calculer ne peut être inférieur ou égal à 2 " + myN5 + " a été saisi !");
    alert("Saisir un entier positif supérieur ou égal à 2");
    dataInput();
  } else {
    return true;
  }
}

function mySuite(p1,p2,p3) {
  var p1,p2,p3;
  var n,uMoins1,uMoins2, uN;
  uN=0;
  termP=p1;
  uMoins1=p3;
  uMoins2=p2;
  alert("Calcul de la valeur de U" + termP);
  alert(" Le premier terme U0 de la suite vaut " + p2);
  alert(" Le second terme U1 de la suite vaut " + p3);
  //calculate of uN
  for (n=2;n<=termP;n++){
    uN=uMoins1+uMoins2;
    uMoins2=uMoins1;
    uMoins1=uN;
  }
  alert("U" + termP + " vaut " + uN);
}
