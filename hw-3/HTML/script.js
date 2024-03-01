function buttonFunction() {
    let quo = Number(prompt("Введите число"));
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
  
    let answ = Season(quo);
    alert(answ);
  };

  function gameRandom(massive) {
    for (let a = massive.length - 1; a > 0; a--) {
      const b = Math.floor(Math.random() * (a + 1));
      [massive[a], massive[b]] = [massive[b], massive[a]];
    }
    return massive;
  }
  
  function runGame() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const randomWords = gameRandom(words);
  
    alert('Запомните первый и последний элемент массива: ' + randomWords.join(', '));
  
    const first = prompt('Чему равнялся первый элемент массива?');
    const second = prompt('Чему равнялся последний элемент массива?');
  
     if (first === null || second === null) {
      alert('ввод отменен');
      
    } else if (first.toLowerCase() === randomWords[0].toLowerCase() && second.toLowerCase() === randomWords[randomWords.length - 1].toLowerCase()) {
      alert('Поздравляю, вы угадали оба элемента!');
    } else if (first.toLowerCase() === randomWords[0].toLowerCase() || second.toLowerCase() === randomWords[randomWords.length - 1].toLowerCase()) {
      alert('Вы были близки к победе!');
    } else {
      alert('Вы ответили неверно!');
    }
  }
