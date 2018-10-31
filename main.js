document.addEventListener('DOMContentLoaded', init);

function init () {
  var calcButton = document.querySelector('#calc');

function insertText(text) {
  document.getElementById("textarea").innerHTML = text;
}
  calcButton.addEventListener ('click', function(event) {
    event.preventDefault();
    var massaElem = document.querySelector('#massa');
    var m = massaElem.value;
    var heightElem = document.querySelector('#height');
    var h = heightElem.value;
    var textareaElem = document.querySelector('#textarea');
    var indeks = +m / (+h/100*+h/100);

    if (indeks < 16) {
      var itog = 'дифицит веса';
    } else if (indeks < 18.5) {
         itog = 'недостаток веса';
      } else if (indeks < 25) {
           itog = 'нормальный вес';
        } else if (indeks < 30) {
               itog = 'избыток веса';
            } else if (indeks < 35) {
                 itog = 'ожирение первой степени';
              } else if (indeks < 40) {
                   itog = 'ожирение второй степени';
                } else if (40<=indeks ) {
                       itog = 'ожирение третей степени';
                    } 
    itog = 'Ваш вес: ' + m + ' кг.' + '\n' + 'Ваш рост: ' + h + ' см.' + '\n' +  'У Вас ' + itog + '!';
    insertText(itog);
  });
}
