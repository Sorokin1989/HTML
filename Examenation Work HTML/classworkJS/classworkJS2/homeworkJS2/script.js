 
// Задание 1: Обратный отсчет
// Создайте обратный отсчет от 10 до 0. Когда дойдет до 0, выведите "Пуск!" и остановите таймер.

let count=10;

// function test() {
//   console.log(count--);
//     if (count<0) {
//         clearInterval(id);
//         console.log('Пуск!');       
//     }
// }
//     let id=setInterval(test,1000);

    let id=setInterval(()=>{
         console.log(count--);
    if (count<0) {
        clearInterval(id);
        console.log('Пуск!');
    }
},1000
);
    


// Задание 2: Отложенное приветствие
// Напишите функцию delayedGreeting(name, delay), которая выводит приветствие с именем через заданное время.

// function delayedGreeting(name, delay) {
// setTimeout(()=>{
//     console.log('Привет, ' + name); 
// },delay)
// }

// delayedGreeting('DIMA',1000)


// Задание 3: Найти сумму всех чисел в массивеДан массив чисел. Найдите сумму всех элементов.
// let sum=0;
// let arr=[1,2,3,4,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]; 
// }

// console.log('Сумма: '+ sum);


// Задание 4: Удвоить все числа в массивеСоздайте новый массив, где каждое число увеличено в 2 раза.

// let arr=[1,2,3,4,5,6,7];
// let arrNew=[];
// for (let i = 0; i < arr.length; i++) {
//  arrNew.push(arr[i]*2) 
// }

// console.log(arr);

// console.log(arrNew);




// Задание 5: Найти самое большое число Найдите максимальное число в массиве.

// let arr=[1,2,3,4,5,6,7];
// let max=arr[0];

// for (let i = 0; i < arr.length; i++) {
//  if (arr[i]>max) {
//     max=arr[i]
//  }
// }
// console.log('Максимальное число: ' + max);


// Задание 6: Посчитать четные и нечетные Посчитайте сколько в массиве четных и нечетных чисел.

// let arr=[1,2,3,4,5,6,7]
// let countChet=0;
// let countNechet=0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]%2==0) {
//     countChet++;
//   }
//   else countNechet++;
    
// }

// console.log('Четные числа: ' + countChet);
// console.log('Нечетные числа ' + countNechet);


