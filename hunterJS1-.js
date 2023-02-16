"use strict";


// 7 простое общение с пользователем
// alert('Hello');  // hello   OK Вывод вверху браузера

// const result = confirm("are you here?"); //вопрос? ок/отмена
// console.log(result); // true/false

// const answer = prompt(" вам есть 18?", "дефолтный ответ в строке для пользователя"); // вопрос?  строка для ввода ответа
// console.log(answer); // ответ пользователя в строковом типе данных
// console.log(typeof(answer));// тип данных переменной

// const ans = +prompt("heh", ''); //плюс превращает в числовой тип данных



//8 интерполяция

// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);// можно использовать +, но будет слишком грамостко, если каждый рах прописывать "переменная" + "/" + "переменная" + "/" и тд

// const user = 'Ivan';

// alert(`привет ${user}`);


//операторы

// let incr = 10;
// let dicr = 10;

// console.log(incr++); // 10, но потом изменится
// console.log(dicr--);// 10, но потом изменится
// console.log(++incr); // 11
// console.log(--dicr);// 9


// console.log('dc');

//цикл 16

// let nuv = 50;

// while(nuv <= 50){
//     console.log(nuv);
//     nuv++;
// }

// do{
//     console.log(nuv);
//     nuv++;
// }
// while(nuv <= 50){
//     console.log(nuv);
//     nuv++;
// }

// for(let i = 1; i<8;i++){
//     console.log(nuv);
//     nuv++;
// }
//цикл ы цикле 17

for(let i = 0; i < 3; i++){
    console.log(i);
    for(let j =0; j<3;j++){
        console.log(j);
    }
}
