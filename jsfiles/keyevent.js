//---------------------------------------------------------------------------------------
//
// JavaScript-сценарий: Обработка событий клавиатуры.
//
//---------------------------------------------------------------------------------------

 "use strict" //Использовать строгий режим ECMAScript 5, если браузер поддерживает его.

//---------------------------------------------------------------------------------------

  // Запустить функцию сразу после загрузки страницы.
  window.onload = PostConstruct;

//---------------------------------------------------------------------------------------

   // Функция, запускающаяся сразу после загрузки страницы.
   // Обработчик события "window.onload".
   
   function PostConstruct(){
    
     // Создать объект, в котором в качестве полей указаны коды клавиш, а в качестве значений
     // имена функций-обработчиков событий нажатия этих клавиш.
     var ob = {
               S: ShowText, // 83 - код клавиши "S".
               H: HidText   // 72 - код клавиши "H". 
              };

       // Создать объект класса Keymap, передав конструктору коды клавиш и имена функций-обработчиков.  
       var KeymapObj = new Keymap(ob);  


         // Найти элемент с <body>.
         var elem = document.getElementById("BodyElem");

          // Зарегистрировать для элемента <body> обработчик события "keydown".
          KeymapObj.install(elem);


//alert("YES");
   }
//---------------------------------------------------------------------------------------
 
  //Функция-обработчик нажатия клавиши "S".

  function ShowText(){

    // Найти элемент с текстом.
    var el = document.getElementById("MyText");

     // Сделать видимым элемент с текстом.
     el.style.visibility="visible";
  }
//---------------------------------------------------------------------------------------

  //Функция-обработчик нажатия клавиши "H".

  function HidText(){

       // Найти элемент с текстом.
    var el = document.getElementById("MyText");

     // Сделать невидимым элемент с текстом.
     el.style.visibility="hidden"; 
  }
//---------------------------------------------------------------------------------------
 
  // Функция-конструктор класса Keymap.

  function Keymap(bindings) {
     
     //Создать объект в котором в качестве полей будут коды клавиш, а в качестве значений
     // имена функций-обработчиков событий нажатия этих клавиш.
     this.map = {}; 

       // Параметр bindings - это объект в котором в качестве полей заданы коды клавиш, а в качестве 
       //  значений - имена функций-обработчиков событий нажатия этих клавиш.
       if (bindings) { 
         // Скопировать содержимое объекта bindings в объект map.
         for(name in bindings) this.bind(name, bindings[name]); 
       }
  }
//--------------------------------------------------------------------------------------
 
 // Добавлениие метода "bind" в объект-прототип класса "Keymap".

 Keymap.prototype.bind = function(key, func) {
  // Добавить новое поле в объект "map".
  this.map[key] = func;
 };
//--------------------------------------------------------------------------------------

 // Добавлениие метода "install" в объект-прототип класса "Keymap".

 Keymap.prototype.install = function(element) {

  var obj = this;

  // Определить обработчик события "keydown" для HTML-элемента.
  function handler(event) { return obj.KeydownHandler(event, element); }
  
   // Зарегистрировать для элемента <body> обработчик события "keydown".
   if (element.addEventListener)
     element.addEventListener("keydown", handler, false);
 };
//--------------------------------------------------------------------------------------

  // Добавлениие метода "KeydownHandler" в объект-прототип класса "Keymap".
  // Выполняет обработку события "keydown" для HTML-элемента.

  Keymap.prototype.KeydownHandler = function(event, element){

   var keyname = null; 

    if (event.key) keyname = event.key;

alert("KeyCode="+keyname);



      var handler = this.map[keyname];

 alert("handler="+handler);


       if (handler) { 
         var retval = handler.call();

            if (retval === false) {
               if (event.stopPropagation) event.stopPropagation(); 
                else event.cancelBubble = true; 

               if (event.preventDefault) event.preventDefault(); 
                else event.returnValue = false; 
            }

        return retval;
      }  
  }
//--------------------------------------------------------------------------------------
 