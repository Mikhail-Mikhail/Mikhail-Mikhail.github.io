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

      //Найти элемент заголовка <h2> по id.
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

         //Прочитать данные из объекта "localStorage" по ключу "MyObj" и
         //преобразовать их из формата JSON в объект JavaScript.
         var readObj = JSON.parse(localStorage.getItem("MyObj"));
         
          //Если данные прочитаны успешно.
          if(readObj!==null){
            //Найти элемент заголовка <h3> по id.
            var h3Elem = document.getElementById("h3_elem"); 

             //Отобразить прочитанные данные.
             h3Elem.innerText = "Mr. "+readObj.name+" "+readObj.surname+", your ID="+readObj.id+"!";
          }  
   }

 //--------------------------------------------------------------------------------------


  //Обработчик кнопки "Сохранить данные".


  function SaveButtonHandler(){

    //Найти окно для ввода имени по id.
    var NameElem = document.getElementById("NameInputText");

      //Найти окно для ввода фамилии по id.
      var SurnameElem = document.getElementById("SurnameInputText"); 

       //Сохранить введенные имя и фамилию в объекте "localStorage".   
       localStorage.setItem("name", NameElem.value);
       localStorage.setItem("surname", SurnameElem.value);

         //Создать объект.
         var obj = {
                      name: NameElem.value,
                      surname: SurnameElem.value,
                      id: 839
                     };
       
           //Преобразовать объект в формат JSON.
           var MyJsonObj = JSON.stringify(obj);         

           //Сохранить объект "MyJsonObj" в объекте "localStorage".   
           localStorage.setItem("MyObj", MyJsonObj);
  }
//--------------------------------------------------------------------------------------
 

  //Обработчик кнопки "Удалить данные".


  function ClearButtonHandler(){

    //Удалить все данные из объекта "localstorage".
    localStorage.clear();
  }
//--------------------------------------------------------------------------------------
