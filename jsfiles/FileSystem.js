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


//navigator.webkitPersistentStorage.requestQuota(requestedBytes, SuccessFunction, function(e) { console.log('Error', e); });

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

 //Обработчик кнопки "Create File".

 function CreateFileBtnHandler(){
   writeFile('n.txt', "Yes!")
 }

//--------------------------------------------------------------------------------------

  function writeFile(path, contents) {

   filesystem.root.getFile('n.txt', // Имя и путь к файлу.
                           {create: true}, // Создать файл, если он не существует.
                            function(entry) { // Вызвать эту функцию, когда файл будет найден или создан.
                              Display.innerHTML = "Файл создан успешно!"+entry.fullPath;  
                                 entry.createWriter( // Создать для файла объект FileWriter.
                                                      function(writer) {
                                                        var bb = new BlobBuilder(); 
                                                        bb.append('YES!');
                                                         writer.write(bb.getBlob('text/plain'));
                                                          Display.innerHTML = "Записано успешно!";  
                                                      },
                                                    errorCreateWriter
                                                   );
                            },
                            errorGetFile
                          );   


   function  errorGetFile(e) {
     Display.innerHTML = "Ошибка errorGetFile:"+e;
   }

   function  errorCreateWriter(e) {
     Display.innerHTML = "Ошибка errorCreateWriter:"+e;
   }
  }
//--------------------------------------------------------------------------------------


//Функция чтения из файла.

function readFile(){

   //Найти элемент для отображения данных из файла.
   var TxtArea = document.getElementById("TextArea");
   TxtArea.innerHTML = "проверка!!!";

    fs.root.getFile('n.txt', {}, function(fileEntry) {

                                              
           fileEntry.file(function(file) {
               var reader = new FileReader();

                 reader.onload = function(e) {                    
                                        TxtArea.innerHTML = this.result;             
                                    };

                reader.readAsText(file);
            }, errorCreateReader);

       }, errorReadGetFile);
  

  function  errorReadGetFile(e) {
     TxtArea.innerHTML = "Ошибка errorReadGetFile:"+e;
   }

   function  errorCreateReader(e) {
     TxtArea.innerHTML = "Ошибка errorCreateReader:"+e;
   }   

}

//--------------------------------------------------------------------------------------

  //Функция создания файла и записи в него данных.

  function writeTextFile(path, contents) {

   filesystem.root.getFile(path, // Имя и путь к файлу.
                           {create:true}, // Создать файл, если он не существует.
                            function(entry) { // Вызвать эту функцию, когда файл будет найден или создан.
                                entry.createWriter( // Создать для файла объект FileWriter.
                                    function(writer) {
                                      writer.seek(writer.length); // Переместить указатель в конец файла.
                                       // Преобразовать записываемые данные в объект Blob.
                                       var bb = new BlobBuilder();
                                       bb.append(contents);
                                       var blob = bb.getBlob();

                                         writer.write(blob);

                                           writer.onwrite = function(){
                                                                       Display.innerHTML = "Файл создан успешно.";
                                                                      }
                                    }
                                ); 
                            } 
                          );   

  }
//--------------------------------------------------------------------------------------
 function Info() {

  //Найти элемент для отображения информационных сообщений.
  var Disp = document.getElementById("Message");
 
   //Отобразить сообщение на странице.
   if(filesystem!==null) Disp.innerHTML = "filesystem not null";
    else  Disp.innerHTML = "filesystem = null";

 }
//--------------------------------------------------------------------------------------