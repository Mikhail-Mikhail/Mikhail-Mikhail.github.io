            //Функция на языке JavaScript.

             "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

            //Функция отображения времени. 
            function displayTime() {
              
              //Найти элемент с id="clock". 
              var elt = document.getElementById("clock");
                                             
               //Создать объект класса Date.
               var current_time = new Date();
            
                 // Преобразовать текущее время в строку и вставить его в элемент 'clock'.
                 elt.innerHTML = current_time.toLocaleTimeString();
            } 


         // Начать отображение времени после загрузки страницы. Вызывать функцию displayTime() с периодом = 1 секунда.  
         window.onload = setInterval(displayTime, 1000);
            