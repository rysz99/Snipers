var numer = Math.floor(Math.random()*8)+1;
var numer2 = Math.floor(Math.random()*6)+1;
var numer3 = Math.floor(Math.random()*3)+1;
var numer4 = Math.floor(Math.random()*4)+1;
var numer5 = Math.floor(Math.random()*5)+1;
var numer6 = Math.floor(Math.random()*4)+1;

function zmien_slajd() 
{
   numer++; if(numer>8) numer=1;
   numer2++; if(numer2>6) numer2=1;
   numer3++; if(numer3>3) numer3=1;
   numer4++; if(numer4>4) numer4=1;
   numer5++; if(numer5>5) numer5=1;
   numer6++; if(numer6>4) numer6=1;
   
   var plik = "<img src=\"wojtowicz"+numer+".jpeg\" />";
   var plik2 = "<img src=\"kyle"+numer2+".jpeg\" />";
   var plik3 = "<img src=\"pawliczenko"+numer3+".jpeg\" />";
   var plik4 = "<img src=\"hetzenauer"+numer4+".jpeg\" />";
   var plik5 = "<img src=\"hayha"+numer5+".jpeg\" />";
   var plik6 = "<img src=\"zajcew"+numer6+".jpeg\" />";
   
   document.getElementById("wojtowicz").innerHTML = plik;
   document.getElementById("kyle").innerHTML = plik2;
   document.getElementById("pawliczenko").innerHTML = plik3;
   document.getElementById("hetzenauer").innerHTML = plik4;
   document.getElementById("hayha").innerHTML = plik5;
   document.getElementById("zajcew").innerHTML = plik6;
   
   
   setTimeout("zmien_slajd()",4500);
}
