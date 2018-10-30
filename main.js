document.addEventListener('DOMContentLoaded', init);

function init () {
  var calcButton = document.querySelector('#calc');
  
  calcButton.addEventListener ('click', function(event) {
    var massaElem = document.querySelector('#massa');
    var m = massaElem.value;
    var heightElem = document.querySelector('#height');
    var h = heightElem.value;
    var textareaElem = document.querySelector('#textarea');
    var indeks = +m / (+h/100*+h/100);

    if (indeks < 16) {
      var itog = 'дифицит веса';
    } else {
      if (16 <= indeks && indeks < 18.5) {
        var itog = 'недостаток веса';
      } else {
        if (18.5 <= indeks && indeks < 25) {
          var itog = 'нормальный вес';
        }
          else {
            if (25 <= indeks && indeks < 30) {
              var itog = 'избыток веса';
            } else {
              if (30 <= indeks && indeks < 35) {
                var itog = 'ожирение первой степени';
              } else {
                if (35 <= indeks && indeks < 40) {
                  var itog = 'ожирение второй степени';
                } else {
                  {
                    if (40<=indeks ) {
                      var itog = 'ожирение третей степени';
                    } 
                  }}}}}}}

    function insertText(text) {
      document.getElementById("textarea").innerHTML = text;
    }
        
    itog = 'Ваш вес: ' + m + ' кг'  + 'Ваш рост: ' + h + ' см' +  'У Вас ' + itog;
    insertText(itog);

    event.preventDefault();
    
    
  });
 
}
