//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий, перемещение по дереву HTML-элементов.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

  var elem;// = document;
     
    //Функция перемещения по дереву HTML-элементов.

   function TreeSearch() {
   	
      elem = document.getElementById("bodyTag");

     //elem = elem.firstChild;    

     // alert("Узел="+elem+"  Тип узла="+elem.nodeType+"  Имя="+elem.nodeName+"  Значение="+elem.nodeValue);

     displayInfo(elem); 

       //if(elem.firstChild) elem = elem.firstChild; 

        //if(elem.nextSibling) elem = elem.nextSibling; 

        if(elem.childNodes) {
          for(var i=0; i<elem.childNodes.length; i++) {
             displayInfo(elem.childNodes[i]);
           }
        }   
  }
 
 //--------------------------------------------------------------------------------------- 
  
  //Функция отображения информации об узле дерева HTML-документа.

  function displayInfo(elem) {

      alert("Узел="+elem+"  Тип узла="+elem.nodeType+"  Имя="+elem.nodeName+"  Значение="+elem.nodeValue);    
  }
 
 //--------------------------------------------------------------------------------------- 

  