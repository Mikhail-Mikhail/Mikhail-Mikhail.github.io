//JavaScript-сценарий, выполняющий обратный отсчет времени.

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.//----------------------------------------------------------------------------------------  
  
  var par=5; 

   function toPage() {

   	 //Найти элемент с id="TimeLabel". 
     var elem = document.getElementById("tlab");

       elem.innerHTML = par;
       par=par-1;

        //if(par==0) clearInterval(hpr);
   }
 

   function TimeDown() {
   	var h;
   	  h = setInterval(toPage, 1000);

   	  setTimeout( function(){clearInterval(h) }, 6000);
   }
 
   
   window.onload = TimeDown;
                         
