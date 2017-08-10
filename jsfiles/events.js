//---------------------------------------------------------------------------------------
//
// JavaScript-сценарии: Обработка событий.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

  // Запустить функцию сразу после загрузки страницы.
  window.onload = SetEventListeners;

  // Зарегистрировать обработчик события закрытия окна или перехода на другую страницу.
  window.onbeforeunload = ConfirmExit;
 
 //--------------------------------------------------------------------------------------

  // Обработчик события кнопки. Вызывается при "всплытии" события в различных родительских 
  // элементах кнопки с разными параметрами.
    
  function Listener(str) {

   alert(str);
  } 
 //--------------------------------------------------------------------------------------

  //Функция регистрации обработчиков событий для кнопки.
    
  function SetEventListeners() {

    //Найти кнопку по id.
    var b = document.getElementById("btn1");

      //Зарегистрировать первый обработчик событий для кнопки.
      b.onclick = function() { alert("Это первый обработчик событий!!!"); };
 
       //Зарегистрировать второй обработчик событий для кнопки.
       b.addEventListener("click", function() { alert("Это второй обработчик событий!!!");}, false);  

         //Зарегистрировать третий обработчик событий для кнопки.
         b.addEventListener("click", function() { alert("Это третий обработчик событий!!!");}, false);  
   } 
//---------------------------------------------------------------------------------------
 
  //Функция вызывающая окно диалога при закрытии окна или переходе на другую страницу.
    
  function ConfirmExit() {
 
    var str='Quit?';
    
     return str; 
   } 
//---------------------------------------------------------------------------------------

  // Обработчик события гипертекстовой ссылки. 
    
  function CancelEvent(event) {
 
   //Отменить событие.
   event.preventDefault();

    alert("Перехода не будет, событие отменено в обработчике.");
  } 
 //--------------------------------------------------------------------------------------
  
  //Функция буксировки элемента.

  function drag(elementToDrag, event) {
   
    //Получить первоначальные координаты буксируемого элемента.
    var origX = elementToDrag.offsetLeft;
    var origY = elementToDrag.offsetTop;

      //Получить координаты точки нажатия кнопки мыши.
      var startX = event.clientX;
      var startY = event.clientY;


       // Найти расстояние между точкой события mousedown и верхним левым углом элемента.
       var deltaX = startX - origX;
       var deltaY = startY - origY;

         // Зарегистрировать обработчики событий mousemove и mouseup,
        // которые последуют за событием mousedown.
        if(document.addEventListener) { 
          document.addEventListener("mousemove", moveHandler, true);
          document.addEventListener("mouseup", upHandler, true);   
        }

         // Это событие обработано и не должно передаваться другим обработчикам.
         if(event.stopPropagation) event.stopPropagation();

            
           //Обработчик события "mousemove".
           function moveHandler(e) {
              elementToDrag.style.left = (e.clientX - deltaX) + "px";
              elementToDrag.style.top = (e.clientY - deltaY) + "px";
             
               //Прервать дальнейшее распространение события.
              if(e.stopPropagation) e.stopPropagation(); 
           }


             //Обработчик события "mouseup".
             function upHandler(e) {
              //Удалить обработчики событий "mousemove" и "mouseup".
              document.removeEventListener("mouseup", upHandler, true);
              document.removeEventListener("mousemove", moveHandler, true);
             }
  }
 //--------------------------------------------------------------------------------------

  //Функция перемещения элемента при вращении колесика мыши.

  function EnableMove() {

       //Найти прямоугольник по id.
       var rect = document.getElementById("Rectangle");

       //Зарегистрировать обработчик события колесика мыши.
       rect.onmousewheel = wheelHandler; 
        
       //Обработчик события колесика мыши.
       function wheelHandler(event){

        //Свойство wheelDelta=120, при повороте колесика на один щелчок вперед.
        //Свойство wheelDelta=-120, при повороте колесика на один щелчок назад.
        var delta = event.wheelDelta; 

         //Задать шаг изменения ширины прямоугольника = 6px при повороте колесика на один щелчок.
         delta = delta/20;

          //Получить текущую ширину прямоугольника.
          var w = parseInt(rect.style.width);

           //Изменить ширину.
           var NewWidth = w + delta;

           //Установить вычисленную ширину прямоугольника.
           rect.style.width = NewWidth+"px";

           //Запретить распостранение события.
           if (event.preventDefault) event.preventDefault();
           if (event.stopPropagation) event.stopPropagation(); 
            
          return false; 
         } 
  }
 //--------------------------------------------------------------------------------------
  