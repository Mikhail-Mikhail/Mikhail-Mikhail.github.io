//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий, перемещение по дереву HTML-элементов.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

     
    //Функция поиска и отображения всех дочерних узлов элемента <body>. Находит все 
    // дочерние элементы, включая комментарии и текст(в том числе состоящий из пробелов).

   function TreeSearch() {
  
     var elem;

      //Найти элемент <body>.   	
      elem = document.getElementById("bodyTag");
  
      //Отобразить информацию об элементе <body>.
      displayInfo(elem); 

          
        // Найти и отобразить все дочерние узлы элемента <body>, включая комментарии и 
        // текст(в том числе состоящий из пробелов).
        if(elem.childNodes) {
          for(var i=0; i<elem.childNodes.length; i++) {
             displayInfo(elem.childNodes[i]);
           }
        }   
  }
 
 //--------------------------------------------------------------------------------------- 
      
    // Функция поиска и отображения дочерних HTML-элементов для элемента <body>. Находит 
    // только дочерние HTML-элементы, пропускает комментарии и текст(в том числе 
    //состоящий из пробелов).

   function TreeElementSearch() {
 
     var elem;
     var qnt;

      //Найти элемент <body>.   	
      elem = document.getElementById("bodyTag");
  
      //Отобразить информацию об элементе <body>.
      displayInfo(elem);            
           
        // Определить количество дочерних элементов с помощью функции ChildsQuantity(), 
        // добавленной в объект-прототип класса Element.
        qnt = elem.ChildsQuantity();  
        alert("Количество дочерних элементов = "+ qnt);
          
         // Найти и отобразить все дочерние HTML-элементов для элемента <body>, пропуская 
         // комментарии и текст(в том числе состоящий из пробелов).
         if(elem.children) {
           for(var i=0; i<elem.children.length; i++) {
              displayInfo(elem.children[i]);
            }
         }   
  }
 
 //---------------------------------------------------------------------------------------  

   //Определить свою функцию "ChildsQuantity", как свойство объекта-прототипа для класса Element.
   // Функция возвращает количество дочерних HTML-элементов у данного элемента.

   Element.prototype.ChildsQuantity = function(){
                              
                                        return this.children.length;
   
                                      }

 //---------------------------------------------------------------------------------------  
  //Функция отображения информации об узле дерева HTML-документа.

  function displayInfo(elem) {

   alert("Узел="+elem+"  Тип узла="+elem.nodeType+"  Имя="+elem.nodeName+"  Значение="+elem.nodeValue);    
  }
 
 //--------------------------------------------------------------------------------------- 

  