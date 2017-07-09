//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий, поиск атрибутов HTML-элементов.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

 var trig = false;

//---------------------------------------------------------------------------------------


   //Функция изменения атрибута Onclick для кнопки.
    
   function ChangeOnclickAttr() {
  
     var elem;
     var str;

      //Найти кнопку с id="myBtn".   	
      elem = document.getElementById("myBtn");

        //Прочитать значение пользовательского(т.е. нестандартного) атрибута "data-mystr" кнопки.
        str = elem.dataset.mystr;


       //Изменить название кнопки и ее атрибут "onclick". 
       if(trig) {

          //Изменить название кнопки. 
          elem.innerHTML = "Отобразить текст";


            //Изменить значение пользовательского(т.е. нестандартного) атрибута "data-mystr" кнопки.
            elem.dataset.mystr = "1 2 3 4 5 6 7 8 9 10";

                   
            // Изменить атррибут "onclick" кнопки. В качестве параметра функции WriteText()
            // задать значение атрибута "data-mystr" кнопки.
            elem.setAttribute("onclick", "WriteText('"+str+"')");

            trig = false;
       }
                
       else {

             //Изменить название кнопки. 
             elem.innerHTML = "Отобразить числа";

              //Изменить значение пользовательского(т.е. нестандартного) атрибута "data-mystr" кнопки.
              elem.dataset.mystr = "Это текстовая строка.";

                // Изменить атррибут "onclick" кнопки. В качестве параметра функции WriteDigits()
                // задать значение атрибута "data-mystr" кнопки.
                elem.setAttribute("onclick", "WriteDigits('"+str+"')");
         
                 trig = true;  
           }
  }
 
//---------------------------------------------------------------------------------------

   //Функция вставки текстовой строки в HTML-элемент.  

   function WriteText(str) {
  
     var elem;      

      //Найти элемент по id="txt".   	
      elem = document.getElementById("txt");

       //Вставить текстовую строку в HTML-элемент.  
       elem.innerHTML = "Сейчас кнопка вызывает функцию WriteText() и выводит текстовую строку: "+"<b>"+str+"</b>";
  
  }
 
//---------------------------------------------------------------------------------------

   //Функция вставки числовой строки в HTML-элемент.  

   function WriteDigits(str) {
  
     var elem;

      //Найти элемент по id="txt".   	
      elem = document.getElementById("txt");

       //Вставить числовую строку в HTML-элемент.  
       elem.innerHTML = "Сейчас кнопка вызывает функцию WriteDigits() и выводит числовую строку: "+"<b>"+str+"</b>";
  }
 
//---------------------------------------------------------------------------------------