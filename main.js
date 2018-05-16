function myFunction() {
  var x = document.getElementById("myForm");
   var txt = "";
   var nm ="You have given following details:-<br><br>";
   var i;
 for (i = 0; i < (x.length-1); i++) {
     txt = txt + x.elements[i].name +": " + x.elements[i].value + "<br><br>";
   }
   document.open();
   document.write(nm);
   document.write(txt);
  document.close();
}
