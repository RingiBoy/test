// - створити функцію яка виводить масив



function ConsoleLog (date)
{
    console.log(date)
}

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


arr=[{name:'dima', age:35, sex:'men'},{name:'aliena', age:30, sex:'women'}, true, 0, {name:'Ivan', age:18, sex:'men'}];

function colichestvo (array){
    let k=0;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i]==='object'){
            for (const key in array[i]) {
                k=k+1;

            }

        }

    }
    return(k);
}

const count=colichestvo(arr);
console.log(count);






