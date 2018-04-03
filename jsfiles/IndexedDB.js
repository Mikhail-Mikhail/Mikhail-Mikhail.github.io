//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий:  Создание базы данных IndexedDB.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------
 
  //Глобальные переменные:

  //Ссылка на строку для отображения информации.
  var Display;

  //Реализации indexedDB в разных браузерах.
 // window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

//---------------------------------------------------------------------------------------


 //Обработчик кнопки "Создать БД".
 

 function CreateDB() {
 	
  //Найти элемент для отображения информационных сообщений.
  Display = document.getElementById("Message");
  
 if(window.indexedDB) alert("Ok1");
   if( window.IDBTransaction) alert("Ok2");
    if(window.IDBKeyRange) alert("Ok3");
    if ('indexedDB' in window) alert("ok4!");

    //Запросить создание БД.
    var request = window.indexedDB.open("MyTestDatabase", 1);

     //При успешном выполнении запроса на создание БД.
     request.onsuccess = function(event) {
//       var db = request.result; // Результатом запроса является база данных.
        Display.innerHTML = "Ок!";
     }

     //При ошибке выполнения запроса на создание БД.
     request.onerror = function(event) {
        Display.innerHTML = "Ошибка при создании БД.";
     }
   
 }
//--------------------------------------------------------------------------------------

 