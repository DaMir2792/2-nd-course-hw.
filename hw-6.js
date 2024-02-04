/*первое задание*/
const numb= [1, 5, 4, 10, 0, 3];
for (b of numb) {
console.log(b);
if (b === 10) {
    break;
    
}}

/*второе задание*/
const a = [1, 5, 4, 10, 0, 3];
const index = a.indexOf(4);
console.log(a[index]);

/*третье задание*/
const jojo=[1, 3, 5, 10, 20];
j= jojo.join(" ")
console.log(j);



/*четвертое задание*/
let mas=[];
for (let addMas = 0; addMas< 3; addMas++ ) {/*здесь указываю что нужно 3 массива*/
    mas[addMas]=[];/*здесь создал пустой массив и просвоил его*/
    for (anMas =0; anMas<3; anMas++){/*здесь указываю по 3 элемента*/
    mas[addMas][anMas]=1}/*здесь говорю чтобы элементы равнялись 1*/
}
console.log(mas);

// /*пятое задание*/
const added=[1,1,1];
added.push(2,2,2)
console.log(added);

/*шестое первый метод примитивный очень*/
const arr=[9, 8, 7, 'a', 6, 5];
arr.sort()
arr.pop();
console.log(arr);

// /*шестое перебор*/
let arg= [9, 8, 7, 'a', 6, 5];
for (b=arg.length; b>0; b--) {
if (arg[b]==="a") {
    arg.splice(b,1)
    
}
}
console.log(arg);

/*седьмое*/
const puzzle=[9, 8, 7, 6, 5];
for (answ of puzzle) {
answ=+prompt("угадай число")
if (!isNaN (answ) || answ===5) {
    alert ("угадал");
    break;
}else (
    alert ("не угадал"))
    
}


/*восьмое*/
const stroke = 'abcdef';
const revStroke = stroke.split('').reverse().join('');
console.log(revStroke);

/*деявтое*/
const ar = [[1, 2, 3], [4, 5, 6]];
const unitedAr = ar.reduce((aaa, bbb) => [...aaa, ...bbb], []);

console.log(unitedAr);

/*десятое*/
const over = [1, 4, 3, 5, 7, 8, 9, 2, 6, 0];

for (let i = 0; i < over.length - 1; i++) {
  const num = over[i];
  const num2 = over[i + 1];
  const sum = num + num2;
  console.log(`Сумма ${num} и ${num2} равна ${sum}`);
}



// /*11*/
  const numbi=[7, 15, 2, 35, 3];
  let = perfSquare =numbi.map(cc=>(cc ** 2))
  console.log(perfSquare);


// /*12*/
function wordsAny(arm) {
    return arm.map(aword => aword.length);
  }
  
  const words = ["git", "это", "шляпа"];
  const wordLeng = wordsAny(words);
  console.log(wordLeng);



/*13*/
function filterPositive(array) {
    return array.filter(number => number < 0);
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); 
  console.log(filterPositive([-25, 25, 0, -1000, -2])); 
 