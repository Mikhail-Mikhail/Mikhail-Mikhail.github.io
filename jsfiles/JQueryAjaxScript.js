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

    // Найти в документе кнопку с id="LoadScriptBtn" и назначить для нее обработчик
    // события "click".
    $("#LoadScriptBtn").click(LoadScriptBtnHandler);

     // Найти в документе кнопку с id="LoadJsonBtn" и назначить для нее обработчик
     // события "click".
     $("#LoadJsonBtn").click(LoadJsonBtnHandler);     

       // Найти в документе кнопку с id="GetRequestBtn" и назначить для нее обработчик
       // события "click".
       $("#GetRequestBtn").click(GetRequestBtnHandler);     
  }  
//--------------------------------------------------------------------------------------- 


 //Обработчик события кнопки "Загрузить сценарии".


 function LoadScriptBtnHandler(){
 
  // Загрузить файл сценария test.js, размещенный по заданному URL в моем репозитории на 
  // сайте GitHub и выполнить его.
  $.getScript("http://mikhail-mikhail.github.io/jsfiles/test.js");

    // Загрузить файл сценария MyScriptLibrary.js, размещенный по заданному URL в моем репозитории на 
    // сайте GitHub и после загрузки выполнить его функцию CallAlert().
    $.getScript("http://mikhail-mikhail.github.io/jsfiles/MyScriptLibrary.js", function() { CallAlert();});
 }
//---------------------------------------------------------------------------------------   



 //Обработчик события кнопки "Загрузить файл в формате JSON".


 function LoadJsonBtnHandler(){
 
    // Загрузить файл в формате JSON, размещенный по заданному URL в моем репозитории на 
    // сайте GitHub. После загрузки выполнить CallBack-функцию, которой в качестве параметра
    // 'data' передается объект, полученный в результате преобразования принятой текстовой строки
    // в формате JSON.
    $.getJSON("http://mikhail-mikhail.github.io/json/computer.json", function(data) { 
                                                                    var str;

                                                                      //Преобразовать объект в строку.
                                                                      str = ObjectToString(data);

                                                                    alert("Принято в формате JSON: "+str);  
                                                                  });
 }
//---------------------------------------------------------------------------------------   
 
  //Функция преобразования объекта в строку.

  function ObjectToString(obj){

    var str="{ ";

      //Перебрать все свойства объекта obj.
      for(var p in obj){
       str=str+p+":"+obj[p]+", ";
      }
       
      str+="}";      

   return str; 
  }
//---------------------------------------------------------------------------------------
 

 
 //Обработчик события кнопки "Загрузить текстовый файл с помощью GET-запроса".


 function GetRequestBtnHandler(){
 
    // Загрузить с помощью GET-запроса текстовый файл, размещенный по заданному URL в моем 
    // репозитории на сайте GitHub и после загрузки выполнить CallBack-функцию.
    $.get("http://mikhail-mikhail.github.io/txt/text.txt", function(data) { 
                                                                           alert(data);
                                                                          }, "text");
 }
//---------------------------------------------------------------------------------------   



   
