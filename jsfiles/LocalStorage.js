//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий: Сохранение данных в объекте LocalStorage.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

 // Запустить функцию сразу после загрузки страницы.
  window.onload = PostConstruct;

 //--------------------------------------------------------------------------------------
   
   // Функция, запускающаяся сразу после загрузки страницы.
   // Обработчик события "window.onload".
   
   function PostConstruct(){

      //Найти элемент заголовка по id.
      var HeaderElem = document.getElementById("Header"); 

       //Прочитать данные из объекта "localStorage" по ключу "name".
       var name = localStorage.getItem("name"); 
        //Прочитать данные из объекта "localStorage" по ключу "surname".
        var surname = localStorage.getItem("surname"); 

        //Если данные прочитаны и не равны пустой строке.
        if((name!==null)&&(surname!==null)) {
          if((name!=="")||(surname!=="")) {
             //Отобразить приветствие пользователю.
             HeaderElem.innerText = "Hello "+name+" "+surname+"!";
           }  
        }   
   }

 //--------------------------------------------------------------------------------------

  //Обработчик кнопки "Сохранить данные".

  function SaveButtonHandler(){

    //Найти окно для ввода имени по id.
    var NameElem = document.getElementById("NameInputText");

      //Найти окно для ввода фамилии по id.
      var SurnameElem = document.getElementById("SurnameInputText"); 

       //Сохранить введенные имя и фамилию в объекте localStorage.   
       localStorage.setItem("name", NameElem.value);
       localStorage.setItem("surname", SurnameElem.value);
  }
//--------------------------------------------------------------------------------------