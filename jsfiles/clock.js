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

                    //Вызывать эту функцию каждую секунду.
                    setTimeout(displayTime, 1000);
            } 


           window.onload = displayTime; // Начать отображение времени после загрузки страницы.   

            