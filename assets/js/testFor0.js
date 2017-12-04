  function testForInstruction()
  {
  //  alert("Arrivée sur testfor");

  document.write("Tirage aléatoire de 5 numéro + complémentaire ");
  //saut de ligne ==> "</BR>"
  document.write("<br>");
  document.write("<br>");
  document.write("<TABLE border=1><TR>");
  var numero;
    for (var i=0; i<5; i++) {
        numero=parseInt(Math.random()*50);
        document.write("<TR>"+"<TD>"+ "Numéro " + (i+1) + " : " + numero +"</TD>" + "</TR>");
        //controle numero
        while (numero==0){
        numero=parseInt(Math.random()*50);
        }

    }
  numero=0;
  numero=parseInt(Math.random()*10);
  document.write("<TR>"+"<TD>"+ "Complémentaire : "+ numero +"</TD>" + "</TR>");
  //controle numero
  while (numero==0){
  numero=parseInt(Math.random()*10);
  }
  document.write("</TR></TABLE>");
  }
