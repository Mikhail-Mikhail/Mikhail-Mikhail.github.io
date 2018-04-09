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

  //Ссылка на созданную базу данных.
  var db;

  //Реализации indexedDB в разных браузерах.
 // window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
  window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

//---------------------------------------------------------------------------------------


 //Обработчик кнопки "Создать БД".
 

 function CreateBtnHandler() {
 	
  //Найти элемент для отображения информационных сообщений.
  Display = document.getElementById("Message");
  
    //Создать БД.
    InitDB("MyTestDatabase", 1);
 }
//--------------------------------------------------------------------------------------
  
   //Функция создания и инициализации БД.

   function InitDB(name, version) {

    //Запросить создание БД.
    var request = window.indexedDB.open(name, version);

     //При успешном выполнении запроса на создание БД.
     request.onsuccess = function(event) {
       //Сохранить ссылку на созданную базу данных.
       db = event.target.result;
     }

      request.onupgradeneeded = function(event) { 
       var db = event.target.result;

        // Создать хранилище объектов для этой базы данных.
        var objectStore = db.createObjectStore("Persons", { keyPath: "TabelNumber" });

        Display.innerHTML = "База данных создана успешно!";
      }

    
     //Ошибка при выполнения запроса на создание БД.
     request.onerror = function(event) {
        Display.innerHTML = "Ошибка при создании БД: "+event.target.errorCode;
     }

   }

//--------------------------------------------------------------------------------------
 