//------------------- --------------------------------------------------------------------
//
// JavaScript-сценарий создания AJAX-запросов с помощью библиотеки JQuery.
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
    
    //Регистрация обработчиков событий методами библиотеки JQuery.
    SetEventListeners();  
 
     //Инициализация при загрузке страницы.
     //Init();    
   }

//--------------------------------------------------------------------------------------


   //Инициализация при загрузке страницы.

  
   function Init() {
         
   }
//---------------------------------------------------------------------------------------

  
  //Функция регистрации обработчиков событий методами библиотеки JQuery.


  function  SetEventListeners(){

    // Найти в документе кнопку с id="ShowBtn" и назначить для нее обработчик
    // события "click".
    $("#LoadScriptBtn").click(LoadScriptBtnHandler);

     
  }  
//--------------------------------------------------------------------------------------- 


 //Обработчик события кнопки "Загрузить сценарий с GitHub".


 function LoadScriptBtnHandler(){
 
  // Загрузить файл сценария test.js, размещенный по заданному URL в моем репозитории на 
  // сайте GitHub и выполнить его.
  $.getScript("http://mikhail-mikhail.github.io/jsfiles/test.js");

    // Загрузить файл сценария MyScriptLibrary.js, размещенный по заданному URL в моем репозитории на 
    // сайте GitHub и после загрузки выполнить его функцию CallAlert().
    $.getScript("http://mikhail-mikhail.github.io/jsfiles/MyScriptLibrary.js", function() { CallAlert();});
 }
//---------------------------------------------------------------------------------------   

