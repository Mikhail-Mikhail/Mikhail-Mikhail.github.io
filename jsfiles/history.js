//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий:  Сохранение страниц в журнале посещений браузера.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

  // Запустить функцию сразу после загрузки страницы.
  window.onload = PostConstruct;

  //Зарегистрировать обработчик событий истории посещений.
  window.onpopstate = popState; 

  //Глобальная переменная, для сохранения текущего состояния.
  var obj = {
             x: 0,
             y: 0
            };
//--------------------------------------------------------------------------------------
   
   // Функция, запускающаяся сразу после загрузки страницы.
   // Обработчик события "window.onload".
   
   function PostConstruct(){  

    //Отобразить текущее состояние полей объекта.
    Display();
   }
//--------------------------------------------------------------------------------------


  //Обработчик кнопки "Изменить значения переменных".

  function ChangeState(){
   
   //Изменить значения полей объекта.
   obj.x +=1;
   obj.y +=1;

    //Отобразить текущие значения полей объекта.
    Display();
  }
//--------------------------------------------------------------------------------------


  //Обработчик кнопки "Сохранить страницу в журнале посещений браузера".

  function PushToHistory(){
   
   //Выдать сообщение, если браузер не поддерживает возможность сохранения страницы в журнал посещений.
   if(!history.pushState) alert("Ошибка: Функция \"pushState\" не поддерживается браузером.");
  
     //Сохранить страницу в журнале посещений браузера.
     //Функция сохраняет текущее значение объекта "obj".
     //Страница будет сохранена в журнале посещений браузера с относительным URL-адресом = #stateX, 
     //где X - текущее значение obj.x
     history.pushState(obj, "MyHistory"+obj.x, "#state"+obj.x);

     alert("Страница успешно сохранена!");
  }
//--------------------------------------------------------------------------------------

  //Функция запускается автоматически при нажатии пользователем кнопок "->"(Вперед)" и <-"(Назад) 
  // в браузере. По нажатию этих кнопок выполняется переход на страницы, сохраненные в журнале посещений.

  function popState(event) {

   //Параметр "event" содержит в своем поле "state" сохраненное значение объекта "obj".
   if (event.state){
    //Восстановить значения объекта "obj".
    obj = event.state;

     //Отобразить текущее состояние объекта.
     Display();
   }
  }
//--------------------------------------------------------------------------------------


  //Функция для отображения текущих значений полей объекта.

  function Display(){

    //Найти элемент по id.
    var ParElem = document.getElementById("display"); 

     //Отобразить текущие значения полей объекта.   
     ParElem.innerText = "Текущие значения переменных: x="+obj.x+" y="+obj.y;
  }
//--------------------------------------------------------------------------------------
