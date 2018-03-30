//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий:  Создание файловой системы.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------
 
  //Глобальная переменные:

  //Ссылка на создаваемую файловую систему. 
  var filesystem = null;

  //Ссылка на строку для отображения информации.
  var Display;
//---------------------------------------------------------------------------------------


 //Обработчик кнопки "Создать файловую систему".
 

 function CreateFileSystem() {
 	
  //Найти элемент для отображения информационных сообщений.
  Display = document.getElementById("Message");

    //Название метода для создания файловой системы отличается в разных браузерах.
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

      //Размер создаваемой файловой системы в байтах.
      var requestedBytes = 1024*1024; //1Мб. 

       //Запросить квоту на создание файловой системы требуемого размера.
       //Браузер запросит у пользователя разрешение на создание файловой системы.
       //В случае успеха будет вызвана функция SuccessFunction, в случае ошибки - ErrorFunction.
       navigator.webkitPersistentStorage.requestQuota( requestedBytes, SuccessFunction, ErrorFunction);

          //Если разрешение на создание файловой системы получено.
          function  SuccessFunction(grantedBytes) {
            //Создать файловую систему.
            //В случае успеха будет вызвана функция onInitFs, в случае ошибки -  errorHandler.
            window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
          } 

           //Если разрешение на создание файловой системы не получено.
           function  ErrorFunction(e) {
            //Отобразить сообщение на странице.
            Display.innerHTML = "Разрешение на создание файловой системы не получено.";
           }

            //Если файловая система создана успешно.
            function  onInitFs(fs){
             //Сохранить ссылку на созданную файловую систему в глобальной переменной.
             filesystem = fs;

               if(filesystem!==null) Display.innerHTML = "Файловая система создана успешно.";
            }

             //Если при создании файловой системы произошла ошибка.
            function errorHandler(e){
              Display.innerHTML = "Ошибка при создании файловой системы: "+e;
            }
 }
//--------------------------------------------------------------------------------------

 //Обработчик кнопки "Создать файл".

 function CreateFileBtnHandler(){
   //Создать файл и записать в него строку.
   writeFile('n.txt', "Yes!")
 }

//--------------------------------------------------------------------------------------

 //Функция создания файла и записи в него данных.

  function writeFile(path, data) {

   filesystem.root.getFile(path, // Имя и путь к создаваемому файлу. 
                                 // Найти созданный файл на диске будет нельзя, т.к. он будет иметь совсем другое имя 
                                 // и будет доступен только через созданную файловую систему.
                           {create: true}, // Создать файл, если он не существует.
                            function(entry) { // Вызвать эту функцию, когда файл будет найден или создан.
                              Display.innerHTML = "Файл создан успешно!"+entry.fullPath;  
                                 entry.createWriter(function(writer) {
                                                        //Записать текстовую строку в файл.
                                                        var blob = new Blob([data], {type: 'text/plain'});
                                                         writer.write(blob); 
                                                          writer.onwrite = function(e) { Display.innerHTML = "Записано успешно!"; }
                                                    }, errorCreateWriter);
                            }, errorGetFile);   

   //Обработчики ошибок при создании файла.
   function  errorGetFile(e) {
     Display.innerHTML = "Ошибка errorGetFile:"+e;
   }

   function  errorCreateWriter(e) {
     Display.innerHTML = "Ошибка errorCreateWriter:"+e;
   }
  }
//--------------------------------------------------------------------------------------
 
 //Обработчик кнопки "Прочитать файл".

 function ReadFileBtnHandler(){
   //Прочитать файл и отобразить его содержимое на странице.
   readFile('n.txt');
 }

//--------------------------------------------------------------------------------------

//Функция чтения из файла.

function readFile(name){

   //Найти элемент для отображения данных из файла.
   var TxtArea = document.getElementById("TextArea");

     filesystem.root.getFile(name, {}, function(fileEntry) {                                 
                                              fileEntry.file(function(file) {
                                                               var reader = new FileReader();
                                                                 reader.onload = function() { 
                                                                                   //Отобразить прочитанные данные.
                                                                                   var text = reader.result;
                                                                                    TxtArea.innerHTML = text;             
                                                                                 };
                                                                //Прочитать файл.
                                                                reader.readAsText(file);
                                                              }, errorCreateReader);

                                          }, errorReadGetFile);
       
  //Обработчики ошибок при чтении файла.
  function  errorReadGetFile(e) { 
     Display.innerHTML = "Ошибка errorReadGetFile:"+e;
   }

   function  errorCreateReader(e) {
     Display.innerHTML = "Ошибка errorCreateReader:"+e;
   }   
}
//--------------------------------------------------------------------------------------

  
 