//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий:  Передача сообщений между html-страницами.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

  // Запустить функцию сразу после загрузки страницы.
  window.onload = PostConstruct;

//--------------------------------------------------------------------------------------
   
   // Функция, запускающаяся сразу после загрузки страницы.
   // Обработчик события "window.onload".
   
   function PostConstruct(){  

     //Если загрузилась страница message1.html, то открыть страницу message2.html в новом окне.
     if(document.title==="Страница №1") {
       //Открыть новое пустое окно.
       //Переменная "w" будет ссылаться на объект "window" нового окна.
       var w = window.open();
      
        //Загрузить страницу message2.html в новое окно. 
        w.location = "message2.html"; 
    }


    //Зарегистрировать обработчик события приема сообщения.
    if (window.addEventListener) window.addEventListener("message", handleMessage, false);
   }
//--------------------------------------------------------------------------------------


  //Обработчик кнопки "Отправить сообщение на страницу №x".

  function SendMessage(page){

    //Найти элемент ввода сообщения по id.
    var InputElem = document.getElementById("message"); 
   
     //Если сообщение отправляется со страницы №2 на страницу №1.
     if(page==="ToFirstPage") {

        //Отправить сообщение.
        window.postMessage(InputElem.value, "*");
         alert("to First: "+InputElem.value);
     }
     //Если сообщение отправляется со страницы №1 на страницу №2.
     else if(page==="ToSecondPage") {
      //Отправить сообщение.
      window.postMessage(InputElem.value, "*");
       alert("to Second: "+InputElem.value);
     }
  }
//--------------------------------------------------------------------------------------

  //Обработчик события приема сообщения.
  
  function handleMessage(e){

    //Найти по id элемент параграфа для отображения принятого сообщения.
    var DisplayElem = document.getElementById("display"); 

      //Отобразить принятое сообщение.   
      DisplayElem.innerText = "Принято сообщение: "+e.data;

   //alert("Принято: "+e.data+"  Источник: "+e.source); 
  }
//--------------------------------------------------------------------------------------

