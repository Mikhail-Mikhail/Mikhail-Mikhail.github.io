//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий:  Создание файловой системы.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------
 
  //Глобальная переменная - ссылка на создаваемую файловую систему. 
  var filesystem = null;

//---------------------------------------------------------------------------------------


 //Обработчик кнопки "Создать файловую систему".
 

 function CreateFileSystem() {
 	
  //Найти элемент для отображения информационных сообщений.
  var Display = document.getElementById("Message");

    //Название метода для создания файловой системы отличается в разных браузерах.
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

      //Размер создаваемой файловой системы в байтах.
      var requestedBytes = 1024*1024; //1Мб. 

navigator.webkitPersistentStorage.requestQuota (
    requestedBytes, SuccessFunction, function(e) { console.log('Error', e); } );

/*
navigator.webkitPersistentStorage.requestQuota (
    requestedBytes, function(grantedBytes) {  
        window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);

    }, function(e) { console.log('Error', e); }
);
*/

/*
       //Запросить квоту на создание файловой системы требуемого размера.
       //Браузер запросит у пользователя разрешение на создание файловой системы.
       //В случае успеха будет вызвана функция SuccessFunction, в случае ошибки - ErrorFunction.
       navigator.webkitPersistentStorage.requestQuota( requestedBytes, SuccessFunction, ErrorFunction);
*/
          //Если разрешение на создание файловой системы получено.
          function  SuccessFunction(grantedBytes) {
            //Создать файловую систему.
            //В случае успеха будет вызвана функция successHandler, в случае ошибки -  errorHandler.
   //       window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes, successHandler, errorHandler);
           window.requestFileSystem(window.PERSISTENT, grantedBytes, onInitFs, errorHandler);
          } 

           //Если разрешение на создание файловой системы не получено.
           function  ErrorFunction(e) {
            //Отобразить сообщение на странице.
            Display.innerHTML = "Разрешение на создание файловой системы не получено.";
           }

            //Если файловая система создана успешно.
            function  onInitFs(fs){
             //Сохранить ссылку на созданную файловую систему в глобальной переменной.
      // filesystem = fs;
             alert("Init OK!");
            }

             //Если при создании файловой системы произошла ошибка.
            function errorHandler(e){
             alert("Error occured: "+e);
            }

             //Отобразить сообщение на странице.
             if(filesystem!=null) Display.innerHTML = "Файловая система создана успешно.";


           alert("Проверка");   

/*
      //Обработчик события завершения загрузки выбранного файла.
      reader.onload = function() { 
        //Сохранить содержимое из файла в переменной.
        var text = reader.result;
         //Отобразить содержимое файла на странице. 
         Display.innerHTML = text;
      } */
 }
//--------------------------------------------------------------------------------------
