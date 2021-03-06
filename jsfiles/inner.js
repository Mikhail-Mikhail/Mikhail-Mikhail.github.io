//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий, вставка и чтение в(из) HTML-элементы(ов).
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------


   //Функция чтения содержимого HTML-элемента.
    
   function getHtml() {
  
    var elem;

      //Найти элемент с id="mytxt".   	
      elem = document.getElementById("mytxt");

        alert("Чтение методом innerHTML= "+elem.innerHTML);
        alert("Чтение методом outerHTML= "+elem.outerHTML);
  }
 
//---------------------------------------------------------------------------------------

   //Функция добавления содержимого в HTML-элемент.
    
   function CallinsertAdjacentHTML(str) {
  
    var elem;

      //Найти элемент с id="mytxt".   	
      elem = document.getElementById("mytxt");

       switch(str){

         case "begin": 
            //Вставить текст в начало элемента. 
            elem.insertAdjacentHTML("afterbegin","ВСТАВКА!!!"); 
          break;

         case "end": 
             //Вставить текст в конец элемента. 
             elem.insertAdjacentHTML("beforeend","ВСТАВКА!!!"); 
          break;                        
       }
  }
 
//---------------------------------------------------------------------------------------

   //Функция чтения и изменения текстового содержимого  HTML-элемента.
    
   function CalltextContent() {
  
    var elem;

      //Найти элемент с id="tlab".     
      elem = document.getElementById("tlab");

         alert("Свойство 'textContent' элемента ="+elem.textContent);

           alert("Свойство 'innerText' элемента ="+elem.innerText);  

           elem.textContent = "Изменено через свойство 'textContent'."
  }
 
//---------------------------------------------------------------------------------------
