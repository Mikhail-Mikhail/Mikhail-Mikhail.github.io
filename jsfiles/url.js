//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий, разбор URL-адреса.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------
  
 
   function URL_analyse() {
   	
       //Найти элемент с id="url". 
       var elem = document.getElementById("url");
       //Вставить URL-адрес текущей страницы в найденный элемент.
       elem.innerHTML = window.location;

          //Найти элемент с id="protocol". 
          var elem = document.getElementById("protocol");
          //Вставить протокол URL-адреса в найденный элемент.
          elem.innerHTML = window.location.protocol;

            //Найти элемент с id="host". 
            var elem = document.getElementById("host");
            //Вставить в найденный элемент.
            elem.innerHTML = window.location.host;

              //Найти элемент с id="hostname". 
              var elem = document.getElementById("hostname");
              //Вставить в найденный элемент.
              elem.innerHTML = window.location.hostname;

                 //Найти элемент с id="port". 
                 var elem = document.getElementById("port");
                 //Вставить в найденный элемент.
                 elem.innerHTML = window.location.port;

                   //Найти элемент с id="pathname". 
                   var elem = document.getElementById("pathname");
                   //Вставить в найденный элемент.
                   elem.innerHTML = window.location.pathname;

                       //Найти элемент с id="search". 
                       var elem = document.getElementById("search");
                       //Вставить в найденный элемент.
                       elem.innerHTML = window.location.search;

                          //Найти элемент с id="hash". 
                          var elem = document.getElementById("hash");
                          //Вставить в найденный элемент.
                          elem.innerHTML = window.location.hash;
   }
 
 //---------------------------------------------------------------------------------------  

   //Запустить функцию "URL_analyse()" по завершению загрузки HTML-страницы.

   window.onload = URL_analyse;
 //---------------------------------------------------------------------------------------
                         
