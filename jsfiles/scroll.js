//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий прокрутки документа.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

   //Функция прокрутки документа до указанных координат.
    
   function ScrollDoc() {

     //Прокрутить страницу по оси Y.
     window.scrollTo(0, 2000);
   }
  //---------------------------------------------------------------------------------------

    //Функция прокрутки документа до указанного элемента.
    
   function ScrollToElem(id) {
      
     //Найти элемент по id.
     var el = document.getElementById(id);
     
       //Прокрутить страницу до найденного элемента el.
       el.scrollIntoView();
   }
  //---------------------------------------------------------------------------------------