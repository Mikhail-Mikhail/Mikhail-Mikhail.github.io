//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий отображающий характеристики экрана.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------
  
 
   function getScreenProperties() {
   	
          //Найти элемент с id="ht". 
       var elem = document.getElementById("ht");
       //Вставить в найденный элемент высоту экрана.
       elem.innerHTML = window.screen.height;

          //Найти элемент с id="wd". 
         elem = document.getElementById("wd");
         //Вставить в найденный элемент ширину экрана.
         elem.innerHTML = window.screen.width;

              //Найти элемент с id="clr". 
             elem = document.getElementById("clr");
             //Вставить в найденный элемент глубину цветности.
             elem.innerHTML = window.screen.colorDepth;

   }
 
 //---------------------------------------------------------------------------------------  