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

   //Ссылка на базу данных.
   var db;

    //Ссылки на хранилища объектов в базе данных.
    var PersonObjectStore, CarsObjectStore, OrdersObjectStore;

    //Реализации indexedDB в разных браузерах.
   // window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

//---------------------------------------------------------------------------------------

 // Запустить функцию сразу после загрузки страницы.
  window.onload = PostConstruct;

 //--------------------------------------------------------------------------------------
   
   // Функция, запускающаяся сразу после загрузки страницы.
   // Обработчик события "window.onload".
   
   function PostConstruct(){

    //Найти элемент для отображения информационных сообщений.
    Display = document.getElementById("Message");
   }

 //--------------------------------------------------------------------------------------

 //Обработчик кнопки "Создать БД версии Ver.1".
 

 function UpdateBtnHandlerVer1() {
  
    // Создать БД версии Ver.1
    // Если на компьютере пользователя уже есть БД версии Ver.1, то она будет просто открыта.
    InitDB("MyTestDatabase", 1);
 }
//--------------------------------------------------------------------------------------

 //Обработчик кнопки "Обновить БД до Ver.2".
 

 function UpdateBtnHandlerVer2() {
 	
    // Обновить БД до версии Ver.2
    // Если на компьютере пользователя есть БД версии Ver.1, то она будет обновлена до версии Ver.2
    // Если на компьютере пользователя уже есть БД версии Ver.2, то она будет просто открыта.
    InitDB("MyTestDatabase", 2);
 }
//--------------------------------------------------------------------------------------


 //Обработчик кнопки "Обновить БД до Ver.3".
 

 function UpdateBtnHandlerVer3() {
  
    // Обновить БД до версии Ver.3
    // Если на компьютере пользователя есть БД версии Ver.1 или Ver.2, то она будет обновлена до версии Ver.3
    // Если на компьютере пользователя уже есть БД версии Ver.3, то она будет просто открыта.
    InitDB("MyTestDatabase", 3);
 }
//--------------------------------------------------------------------------------------


 //Обработчик кнопки "Сохранить данные в БД".
 

 function SaveBtnHandler() {

    //Создать массив объектов для хранилища "Persons".
    var ManObj = [ {
                    TabelNumber: 1111,
                    name: "Mike",
                    surname: "Turner"
                   },
                   {
                    TabelNumber: 2222,
                    name: "Jack",
                    surname: "Williams"
                   },
                   {
                    TabelNumber: 3333,
                    name: "Josef",
                    surname: "Miller"
                   }
                  ];

      //Создать массив объектов для хранилища "Cars".
      var CarObj = [ {
                       StateNumber: 839,
                       model: "VW",
                       year: 1997
                     },
                     {
                       StateNumber: 840,
                       model: "Opel",
                       year: 2001
                     },
                     {
                       StateNumber: 841,
                       model: "Toyota",
                       year: 2009
                     }
                   ];   

        //Создать массив объектов для хранилища "Orders".
        var OrderObj = [ {
                          OrderNumber: 5001,
                          customer: "Bill Lawer",
                          price: 400
                         },
                         {
                          OrderNumber: 5002,
                          customer: "Steeve Smith",
                          price: 430
                         },
                         {
                          OrderNumber: 5003,
                          customer: "Max Brick",
                          price: 180
                         }
                       ];                   
  
    //Сохранить данные в БД любой версии.
    SaveData(PersonObjectStore, ManObj[0]);
     SaveData(PersonObjectStore, ManObj[1]);
      SaveData(PersonObjectStore, ManObj[2]);

      //Сохранить данные в БД версии Ver.2.
      if(db.version===2) {
       SaveData(CarsObjectStore, CarObj[0]);
        SaveData(CarsObjectStore, CarObj[1]);
         SaveData(CarsObjectStore, CarObj[2]);
      }

        //Сохранить данные в БД версии Ver.3.
        if(db.version===3) {
          SaveData(OrdersObjectStore, OrderObj[0]);
           SaveData(OrdersObjectStore, OrderObj[1]);
            SaveData(OrdersObjectStore, OrderObj[2]);
        }
 }
//--------------------------------------------------------------------------------------
  
   //Функция инициализации БД.

   function InitDB(name, version) {

    //Запросить создание/открытие БД указанной версии.
    var request = window.indexedDB.open(name, version);

      // Эта функция будет вызвана только в двух случаях:
      // 1. При первой загрузке страницы, когда у пользователя еще нет созданной БД.
      // 2. Если версия создаваемой БД отличается от версии БД, созданной ранее на компьютере пользователя.
      // После вызова этой функции будет еще вызвана и функция обработки события "request.onsuccess". 
      request.onupgradeneeded = function(event) { 

       // Получить ссылку на БД. 
       db = event.target.result;

          // Создать хранилище объектов "Persons" в БД версии Ver.1, Ver.2 или Ver.3.
         if (version===1 || (version>1 && event.oldVersion < 1)) {    
          PersonObjectStore = db.createObjectStore("Persons", { keyPath: "TabelNumber" });
         } 
        
          // Создать хранилище объектов "Cars" в БД версии Ver.2 или Ver.3
          if (version===2 || (version>2 && event.oldVersion < 2)) {   
            CarsObjectStore = db.createObjectStore("Cars", { keyPath: "StateNumber" });
          }

           // Создать хранилище объектов "Orders" в БД версии Ver.3
           if(version===3){
             OrdersObjectStore = db.createObjectStore("Orders", { keyPath: "OrderNumber" });
           }

        Display.innerHTML = "База данных успешно обновлена до версии Ver."+version;
      }


       // Эта функция будет вызвана при успешном создании исходной БД или при обновлении уже существующей
       // БД до более новой версии. 
       request.onsuccess = function(event) {
         // Получить ссылку на БД.
         db = event.target.result;

          Display.insertAdjacentHTML("beforeend"," <br> Событие 'onsuccess' - ok!");  
       }

    
       //Ошибка при выполнения запроса на создание БД.
       request.onerror = function(event) {
         Display.innerHTML = "Ошибка при создании БД: " + event.target.errorCode;
       }

   }

//--------------------------------------------------------------------------------------
  
   //Функция сохранения данных в БД.

   function  SaveData(ParObStore, obj){
   
   alert("TabelNumber = "+obj.TabelNumber+"  Name = "+obj.name+"  Surname = "+obj.surname);

    var transaction = db.transaction([ParObStore.name], "readwrite");
    var objectStore = transaction.objectStore(ParObStore.name);

     //Сохранить объект в БД.
     var request = objectStore.add(obj);

      request.onsuccess = function(event) {
        Display.innerHTML = "Записано успешно!";
      }

       request.onerror = function(event) {
        Display.innerHTML = "Ошибка записи в БД";
      }
   }
//--------------------------------------------------------------------------------------