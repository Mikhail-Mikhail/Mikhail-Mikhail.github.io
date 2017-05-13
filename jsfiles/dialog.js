//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий создающий окно диалога.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

 // function BeginScript() {

  //Сохранить параметры, переданные функцией вызова окна диалога "showModalDialog()" - см. сценарий CallDialogScript.js
//  var args = window.dialogArguments;


     alert("Значение переданное из вызывающей страницы: "+window.DialogArguments);

   // Сформировать строку HTML-кода, для вставки в элемент <fieldset id="fields"> </fieldset> 
   // в файле dialog.html.
  // var text = "<legend>" + args[0] + "</legend>"; //HTML-код для задания названия рамки в окне диалога.
                                                   // args[0] содержит строку ="Введите три числа".
 //var text = "<legend>wer</legend>"; 
 
     //Перебрать все параметры, указанные при вызове функции "showModalDialog()" - см. сценарий CallDialogScript.js
     //Это параметры: "x","y", "z".
 //    for(var i = 1; i < args.length; i++)
       // Добавить HTML-код, создающий три окна для ввода чисел с атрибутами id=f1, id=f2, id=f3.
//       text += "<label>" + args[i] + ": <input id='f" + i + "'></label><br>";


       //Вставить HTML-код в элемент <fieldset id="fields"> </fieldset>  в файле dialog.html.
//       document.getElementById("mfield").innerHTML = text;
 //      var elem = document.getElementById("mfield");//.innerHTML = '<legend>et</legend>'; //text;
//        elem.innerHTML = "<legend>we</legend>";  
//          elem.innerHTML = text;  

 //window.close();
//  }

  
   //Запустить функцию "BeginScript" по завершению загрузки HTML-страницы.

//  window.onload = BeginScript;
//---------------------------------------------------------------------------------------

   //Функция для закрытия окна диалога. 
  
   function cancel() {
   
    //Закрыть окно диалога.	
    window.close();
       
   }
//---------------------------------------------------------------------------------------  

   function okay() {
   	
     window.returnValue = [1,2,3]; // Возвращаемый массив.
       
//       for(var i = 1; i < 3; i++) // Значения элементов из полей ввода.
//         window.returnValue[i-1] = i;

          window.close(); // Закрыть диалог.       
   }

 //---------------------------------------------------------------------------------------  
