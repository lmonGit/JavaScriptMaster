Le CSS ==>
# menu . item span
Le HTML ==>
<div id=" menu ">
 <div class =" item ">
 <span >Êlément 1</ span >
 <span >Êlément 2</ span >
 </div >

 <div class =" publicite ">
 <span >Êlément 3</ span >
 <span >Êlément 4</ span >
 </div >

 </div >

 <div id=" contenu ">
 <span > Introduction au contenu de la page ... </ span >
 </div >
Le Javascript ==>
var query = document . querySelector ('# menu . item span '),
 queryAll = document . querySelectorAll ('# menu . item span ');

 alert ( query . innerHTML ); // Affiche : "Êlément 1"
 alert ( queryAll . length ); // Affiche : "2"
 alert ( queryAll [0]. innerHTML + ' - ' + queryAll [1]. innerHTML );
// Affiche : "Êlé ment 1 - Êlé ment 2"
