/*ДЗ*/
/*первое задание*/
const mil = (a , b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  alert(mil(8,4));
  alert(mil(6,6));


/*первое задание с плавающими вводными*/
const wil = () => {
    let num1 = Number(prompt("Введите первое число"));
    let num2 = Number(prompt("Введите второе число"));
    if (num1 > num2) {
      alert("Первое число больше");
    } else if (num1 < num2) {
      alert("Второе число больше");
    } else {
      alert("Числа равны");
    }
  }
  
  wil();


  /*второе задание*/
  const evenOdd = () => {
    let numb=Number (prompt("введите число"));
    if (numb % 2 === 0) {
        return "число четное";
    } else {
    return "число нечетное"}
    }

alert (evenOdd());

/*3.1 задание*/
function squarNumber() {
  let numInput = Number(prompt("Введите число:"));
  let result = numInput ** 2;
  alert(`Квадрат числа равен ${result}`);
}

squarNumber();

/*3.2 задание*/
function calcSquare(numbbb) {
  return numbbb ** 2;
}

let squareResult = calcSquare(5);
alert(`Квадрат числа  ${squareResult}`);



/*задание четвертое*/
"use strict";
let age = prompt("Сколько Вам лет?", 18);

let printMessage;/*объявляем переменную снаружи*/

// в зависимости от условия объявляем функцию
if (age < 13) {/*здесь задаем условия для срабатывания*/

    printMessage = function () {/*объявляем что printMessage присваем к function*/
        alert("Привет!");
    }

} else {

    printMessage = function () {
        alert("Добро пожаловать");
    }

}

printMessage();

/*задание пятое*/
let input1 = Number(prompt('Введите первое число:'));
let input2 = Number(prompt('Введите второе число:'));

function multiplyNumbers(numbr1, numbr2) {
  if (isNaN(numbr1) || isNaN(numbr2)) {
    return 'Одно или оба значения не являются числом';
  }
  
  return numbr1 * numbr2;
}

let resultato = multiplyNumbers(input1, input2);

alert(resultato);

/*шестое задание*/
function cubeNumb() {
  let inputNumb = Number(prompt('Введите число:'));

  if (isNaN(inputNumb)) {
    return 'Переданный параметр не является числом';
  }

  let result = Math.pow(inputNumb, 3);/*тут я метод использовал*/
  return `${inputNumb} в кубе равняется ${result}`;
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {/*это я добавил чтобы остановилась после 5 итерации*/
    break;
  }
  alert(cubeNumb());
}


/*седьмое задание*/
let circle1 = {
  radius: 16, 
  
  getArea: function() {
    return Math.PI * this.radius * this.radius; 
  },
  
  getPerimeter: function() {
    return 2 * Math.PI * this.radius; 
  }
};


let circle2 = {
  radius: 27, 
  
  getArea: function() {
    return Math.PI * this.radius * this.radius; 
  },
  
  getPerimeter: function() {
    return 2 * Math.PI * this.radius; 
  }
};

let area1 = circle1.getArea(); 
let perimeter1 = circle1.getPerimeter(); 
alert(`Площадь круга circle1 ${area1}`);
alert(`Периметр окружности circle1 ${perimeter1}`);

let area2 = circle2.getArea(); 
let perimeter2 = circle2.getPerimeter(); 
alert(`Площадь круга circle2 ${area2}`);
alert(`Периметр окружности circle2 ${perimeter2}`);


/*восьмое задание*/
let quo=Number (prompt ("введи число"));
const Season = (month) => {
    if (month === 12 || month === 1 || month === 2) {
      return "Зима";
    } else if (month >= 3 && month <= 5) {
      return "Весна";
    } else if (month >= 6 && month <= 8) {
      return "Лето";
    } else if (month >= 9 && month <= 11) {
      return "Осень";
    } else {
      return "Неправильный номер месяца";
    }
  };
  
  let answ = Season (quo)
  alert (answ)