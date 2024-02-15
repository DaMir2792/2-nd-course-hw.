// /*первое*/
const peoples = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(peoples.sort(...name));

// /*второе*/
function isPositive(num) {
  return num > 0;
}

function isMale(human) {
  return human.gender === "male";
}

function filter(arr, callback) {
  return arr.filter(callback);
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(people, isMale));

/*третье*/
function date() {
  const currentDate = new Date();
  console.log(currentDate);
}

let counter = 0;
const intervalId = setInterval(() => {
  date();
  counter++;

  if (counter === 10) {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
  }
}, 3000);

/*четвертое*/
function delayForSeconds(callback) {
  setTimeout(callback, 1000);
}

delayForSeconds(function () {
  console.log("Привет, Глеб!");
});

/*пятое*/
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
    console.log("Прошла одна секунда");
    if (cb) {
      cb();
    }
  }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

delayForSecond(() => sayHi("Глеб"));
