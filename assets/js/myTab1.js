  function testTablo()
  {
  //alert("Arrivée sur myTab1");

  document.write("Mon premier tableau JavaScript");
  document.write("<p> </p>");
  document.write("<TABLE border=16px ridge(5,10,1) bordercolor=blue><TR>");
  var myArray = ['Rimbaud ', 'Mallarmé ', 'Baudelaire ', 'Néruda ', ' Prévert'];
  
    for (var i=0,c=myArray.length; i<c; i++) {
         document.write("<TR>"+"<TD>"+ myArray[i] +"</TD>" + "</TR>"); 
    }
  
  document.write("</TR></TABLE>");
  }
