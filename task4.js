// - створити функцію яка виводить масив



// function ConsoleLog (date)
// {
// console.log(date)
// }

// let string = prompt('write smth')
// let array = string.split(' ');
// arr(array);



// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function RamdomDate()
// {
//     let arr=[];
// for (let i = 0; i < 10; i++) {

//     arr.push(Math.random());
// }
// ConsoleLog(arr);
// }


// RamdomDate();

//
// створити функцію яка приймає три числа та виводить та повертає найбільше.


// function max (rem1, rem2, rem3)
// {
// if (rem1>rem2 && rem1>rem3){
//     // ConsoleLog(rem1);
//     return rem1;

// }
// if (rem2>rem1 && rem2>rem3){
//     // ConsoleLog(rem2);
//     return rem2;
// }if (rem3>rem2 && rem3>rem1){
//     // ConsoleLog(rem3);
//     return rem3;
// }

// }
// let maxFun= max (4,10,5);

// ConsoleLog(maxFun);






// створити функцію яка повертає найбільше число з масиву
// arr=[40, 50, 10, 1000, 1001]


// function max2(arr){

//     m=Math.max.apply(null, arr);


//     console.log(m)
// }



// max2(arr)
// arr=[40, 50, 10, 1000, 1001]



// let max_element = arr[0];
// for(let i = 0; i<arr.length; i++) {
//     if (arr[i] > max_element) {
//         max_element = arr[i]
//     }
// }
// console.log(max_element);



// // min

// arr=[40, 50, 10, 1000, 1001]



// let max_element = arr[0];
// for(let i = 0; i<arr.length; i++) {
//     if (arr[i] < max_element) {
//         max_element = arr[i]
//     }
// }
// console.log(max_element);


// створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.




// function summ (arr){


//     let sum=0;
// for (let i = 0; i < arr.length; i++)
// {
//      sum=sum+arr[i];

//     }
//     console.log(sum)
// return(sum)

// }



// summ([10,50,1,9])



// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//  function Srednee (arr){


//     let sum=0;
// for (let i = 0; i < arr.length; i++)
// {
//      sum=sum+arr[i];

//     }
//     console.log(sum);
// return(sum/2);

// }



// const SrednArifm = Srednee([10,50,8,2,50]);
// console.log(SrednArifm);


// Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// arr=[{name:'dima', age:35, sex:'men'},{name:'aliena', age:30, sex:'women'}, true, 0, {name:'Ivan', age:18, sex:'men'}];

// function colichestvo (array){

//     let temp=0;
//     console.log(array)
//     for (let i = 0; i < array.length; i++) {
//         if(typeof array[i]==='object'){
//             temp=temp+1

//         }


//     }
//     return(temp);
// }

// const count=colichestvo(arr);
// console.log(count);


// Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


// arr=[{name:'dima', age:35, sex:'men'},{name:'aliena', age:30, sex:'women'}, true, 0, {name:'Ivan', age:18, sex:'men'}];

// function colichestvo (array){
//         let k=0;
//         for (let i = 0; i < array.length; i++) {
//             if(typeof array[i]==='object'){
//               for (const key in array[i]) {
//                 k=k+1;

//               }

//             }

//         }
//         return(k);
//     }

//     const count=colichestvo(arr);
//     console.log(count);



// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// Приклад
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]


// function xxxx(arr1, arr2){
//   let arrSumm=[];
//   for (let i = 0; i < arr1.length; i++) {
//               arrSumm.push(arr1[i]+arr2[i]);

//   }
//   return(arrSumm);
//   }
//      const funcSumArr = xxxx([6,2,3,4], [2,3,7,5]);
//   console.log(funcSumArr);



// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function bodydiv(){
//   let toBodyText = document.createElement('div');
//   toBodyText.innerHTML='<h1>Hello World</h1>'
//   document.body.appendChild(toBodyText);
//   toBodyText.style.background='red';
// }
// bodydiv()


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function bodydiv(text, type){
//     let toBodyText = document.createElement(type);
//     toBodyText.innerHTML=text;
//     document.body.appendChild(toBodyText);
//     toBodyText.style.background='red';
//   }


//   let text='<h1>Hello world!</h1>';
//   let type='div'
//   bodydiv(text,type)



// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)




cons cars = ['kamaz', 'slavuta', 'mers', 'reno'];


function carToDiv(cars,id)
{
    for (let i = 0; i < cars.length; i++)
    {
        console.log(cars[i]);
        if (cars[i].name){
            let divka=document.createElement('div')
            divka.innerHTML=` Наименование:  ${cars[i].name}`;
            document.body.appendChild(divka);
            let ul=document.createElement('ul')
            divka.appendChild(ul);

            li.innerHTML=` Цвет:  ${cars[i].color}`;
        }
    }

}



carToDiv(cars)