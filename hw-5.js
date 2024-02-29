/*ДЗ*/
/*первое задание*/
const dif = (a , b) => {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  alert(dif(8,4));
  alert(dif(6,6));


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
  const evenOdd = (a) => {
    if (a % 2 === 0) {
        return "число четное";
    } else {
    return "число нечетное"}
    }

console.log (evenOdd(4));

/*3.1 задание*/
function squarNumber(b) {
  let result = b ** 2;
  console.log(`Квадрат числа равен ${result}`);
}

console.log (squarNumber(4));

/*3.2 задание*/
function calcSquare(numb) {
  return numb ** 2;
}

let squareResult = calcSquare(5);
console.log(`Квадрат числа  ${squareResult}`);



/*задание четвертое*/
const printMessage = () => {
let age = prompt("Сколько Вам лет?", 18);
if (age < 0) {
    alert ("Вы ввели неправильное значение")    
}
else if (age > 0 && age <= 12) {
    alert("Привет,друг!");
}else {
alert ("Добро пожаловать")}


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


  alert(cubeNumb());


/*седьмое задание*/
const getArea = () => {
    return Math.PI * circle1.radius * circle1.radius; 
    
}

const getPerimeter = () => {
    return 2 * Math.PI * circle1.radius; 
    
}
let circle1 = {
  radius: 16, 
  
  getArea: getArea,
  
  getPerimeter: getPerimeter
};


let circle2 = {
  radius: 27, 
  
  getArea: getArea,
  
  getPerimeter: getPerimeter
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
