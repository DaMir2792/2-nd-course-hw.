/*первое задание*/
let str="js"
console.log(str.toLocaleUpperCase());


/*второе без функции*/
const arrFruits= ['бананы', "мандаринины", "черешня", "банановые чипсы", "арбузы"];
const fruit= "банан";
arrFruits.forEach((findFruit) => {
    if (findFruit.toLocaleLowerCase().includes(fruit.toLocaleLowerCase())) {
        alert (findFruit)
        
    }
    
});

const funcarr = (a, b) => {
  return a.filter(c => c.toLowerCase().startsWith(b.toLowerCase()));
}

const arr = ["бананы", "черешня", "мандарины", "арбузы", "банановые чипсы"];
const check = 'банан';

const result = funcarr(arr, check);
console.log(result); 

/*третье задание */
let numb = 32.58884;
console.log(`До меньшего целого числа ${Math.floor(numb)}`);
console.log(`До большего целого числа ${Math.round(numb)}`);
console.log(`До ближайшего целого числа ${Math.ceil(numb)}`);


// /*четвертое задание*/
let numbArr=[ 52, 53, 49, 77, 21, 32]
console.log(`Самое больше число ${Math.max(...numbArr)}, Самое маленькое число ${Math.min (...numbArr)}` );

/*пятое задание*/
const numbFun = () => {
    return Math.floor (Math.random () * 10)+1;
    
}
let resultato= numbFun ()
console.log(resultato);

/*шестое задание*/
function randFun(number) {
    let masNumb = number / 2;
    let arrNumb = [];
  
    for (let i = 0; i < masNumb; i++) {
      let mathNumb = Math.floor(Math.random() * (number + 1));
      arrNumb.push(mathNumb);
    }
  
    return arrNumb;
  }
  
  let inputNumber = 16; 
  let resArr = randFun(inputNumber);
  console.log(resArr);

  /*седьмое*/
const имя = (first, second) => {
    return Math.floor(Math.random() * (second - first + 1)) + first;
  }
  
  let numbOne = 10;
  let numbTwo = 20;
  let res = имя(numbOne, numbTwo);
  console.log(res);

  /*восьмое*/
const currentDate = new Date();
console.log(currentDate);

/*девятое*/
const curentDate = new Date()
curentDate.setDate (curentDate.getDate () + 73)
console.log(curentDate);

/*деcятое*/
function foDate(date) {
    const params = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const ruDate = date.toLocaleDateString('ru-RU', params);
    return ruDate;
  }
  

  const inputDate = new Date();
  const rightRuDate = foDate(inputDate);
  console.log(rightRuDate);
