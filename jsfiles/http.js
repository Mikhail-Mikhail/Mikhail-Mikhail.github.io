//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий: HTTP-запросы.
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

    //Вывов функций, которые должны выполниться сразу после загрузки страницы.
    SetEventListeners();
   }
 //--------------------------------------------------------------------------------------

  //Функция регистрации обработчика событий для кнопки.
    
  function SetEventListeners() {

    //Найти кнопку по id.
    var btn = document.getElementById("btn1");
 
       //Зарегистрировать обработчик событий для кнопки.
       btn.addEventListener("click", BtnEventHandler, false);  
   } 
//---------------------------------------------------------------------------------------
 
  // Обработчик событий кнопки.

  function BtnEventHandler(){
//alert("YES!!!");
//document.getElementById("answer").innerHTML = "YES";
   var request = new XMLHttpRequest(); // Создать новый HTTP-запрос.
    
     // Задать тип запроса и URL-адрес ресурса которому адресован запрос.
     request.open("GET", "http://localhost:8080/hello2/greetin");
   
       //Назначить обработчик события получения ответа на запрос.
       request.onreadystatechange = function(){
         //Обработать ответ.
         ReqHandler(request);
       // document.getElementById("answer").innerHTML = request.responseText;
       };

    request.send(null); // Отправить запрос.
  }
//---------------------------------------------------------------------------------------
 
   // Обработчик события получения ответа на GET-запрос.
 
   function ReqHandler(request){
alert("Enter!!!");
     //Если GET-запрос выполнен успешно.
     //if (request.readyState === 4 && request.status === 200) {
    if (request.readyState === 4 ) {
      //Отобразить текст ответа на странице.
      document.getElementById("answer").innerHTML = request.status;
      //document.getElementById("answer").innerHTML = request.responseText;
       alert("request.status="+request.status);

     }  
  }
//---------------------------------------------------------------------------------------

 
