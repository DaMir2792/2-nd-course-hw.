/*первое задание */
let password = "пароль";
let ask =String (prompt ("введите пароль"));
if (ask === password) {
    alert ("Пароль введен верно")
    
} else {
    alert ("Пароль введен не верно");
    
}

/*второе задание первый способ, я вообще не понял, что именно требуется*/
let number =Number (prompt("Введите число:"));

if (number > 0 && number < 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

/*второе задание второй сопособ, ну может имеется ввиду вот это*/
let a = Number (prompt ("введите число"));

if (a > 0 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

a = 0;

if (a > 0 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

a = 10;

if (a > 0 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

a = 2;

if (a > 0 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

a = -3;

if (a > 0 && a < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

/*второе задание третий способ, здесь мы просто ручками ножками меняем значение переменной и проверяем*/
let c = 5; 
let message = (c > 0 && c < 10) ? "верно" : "не верно";
alert (message)
/*крч не явным является условия задачи*/


/*третье задание, это вот так будет выглядить решение, если следовать дословно заданию*/
let d = 5;
let e= 150; 

if (d > 100 || e > 100) {
    alert ('верно');
    
} else { 
    alert ("не верно");
    
}

/*третье задание как я его понял*/

let f = Number(prompt ("введи число"));
let g = Number (prompt ("введи число"));
if (f > 100 || g > 100) {
    alert ("верно");
    
} 
else if ( f === g) {
alert ("одинаково получается");
}
else if (f <100 || g < 100) {
alert ("меньше 100 получается оба числа");
}
else {
    alert ("не верно");
    
}

/*четвертое задание*/
let j = '2';
let h = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert (Number (j) + Number (h) );

/*пятое задание*/
let ass = prompt("Введите");
switch (ass) {
  case "12":
  case "декабрь":
    alert("12-ый месяц в году это декабрь и это у нас зима");
    break;
  case "1":
  case "январь":
    alert("1-ый месяц в году это январь и это у нас зима");
    break;
  case "2":
  case "февраль":
    alert("2-ый месяц в году это февраль и это у нас зима");
    break;
  case "3":
  case "март":
    alert("3-ый месяц в году это март и это у нас весна");
    break;
  case "4":
  case "апрель":
    alert("4-ый месяц в году это апрель и это у нас весна");
    break;
  case "5":
  case "май":
    alert("5-ый месяц в году это май и это у нас весна");
    break;
  case "6":
  case "июнь":
    alert("6-ый месяц в году это июньи и это у нас лето");
    break;
  case "7":
  case "июль":
    alert("7-ый месяц в году это июль и это у нас лето");
    break;
  case "8":
  case "август":
    alert("8-ый месяц в году это август и это у нас лето");
    break;
  case "9":
  case "сентябрь":
    alert("9-ый месяц в году это сентябрь и это у нас осень");
    break;
  case "10":
  case "октябрь":
    alert("1-ый месяц в году это октябрь и это у нас осень");
    break;
  case "11":
  case "ноябрь":
    alert("11-ый месяц в году это ноябрь и это у нас осень");
    break; 

  default:
    alert (`Давай по новой Миша все *уйня`)/*шалости*/
    break;
}

