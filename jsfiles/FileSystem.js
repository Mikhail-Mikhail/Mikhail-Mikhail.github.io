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
//alert("FS supported");
/*
if(window.webkitRequestFileSystem) {
   alert("FS supported");
   //Создать файловую систему.
  // navigator.webkitRequestFileSystem(window.PERSISTENT, 1024, onInitFs, errorHandler);
}  
*/

var requestedBytes = 1024*2; 

navigator.webkitPersistentStorage.requestQuota (
    requestedBytes, function(grantedBytes) {  
       window.webkitRequestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);

    }, function(e) { alert("Error"+e); }
);

/*
window.storageInfo.requestQuota(PERSISTENT, 1024*1024, 
    function(grantedBytes) {
       //Создать файловую систему.
       window.webkitRequestFileSystem(window.PERSISTENT, grantedBytes, onInitFs, errorHandler);
    }, 
    errorHandler);
*/

/*
   //Создать файловую систему.
   window.webkitRequestFileSystem(window.PERSISTENT,
                                          1,  //Размер файловой системы = 10 Мбайт.
                                      function(fs) {  //В случае успешного создания файловой системы вызвать эту функцию.
                                       filesystem = fs; //Сохранить ссылку на файловую систему в глобальной переменной.
                                      },
                                      function(e) {  //В случае ошибки при создании файловой системы вызвать эту функцию.
                                       alert("При создании файловой системы произошла ошибка..."+e);
                                      } );
  */

 alert("Проверка");
   //   if(filesystem!=null) Display.innerHTML = "Файловая система создана успешно.";


       function errorHandler(e){
         alert("Error occured: "+e);
        }
        function onInitFs(fs){
         alert("Init OK!");
        }

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
