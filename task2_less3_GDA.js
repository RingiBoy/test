


//5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let packCars = [{name:'ford', color:'red', yer:1900}, {name:'reno', color:'green', yer:1800},{name:'mazda', color:'red', yer:1900},{name:'kamaz', color:'yellow', yer:2000},{name:'zapor', color:'black', yer:2020},{name:'zapor', color:'black', yer:2500},{name:'lamborj', color:'black', yer:2020},{name:'zapor', color:'black', yer:2555},{name:'gtrtr', color:'white', yer:5000}];
// console.log(packCars);
// console.log(packCars[0].name);
// console.log(packCars.length);









// //6 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [{name:'kiev', population:4, region:'center',country:'Ukraine'},{name:'kharkov', population:2, region:'Vostok',country:'Ukraine'},{name:'lvov', population:3, region:'zapad',country:'Ukraine'}]
// console.log(cities);



//7 coздать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars = [
//     {name:'ford', color:'red', yer:1900, driver:{sex:'men', age:44, staj:'4 years',fullName:'G.D.A'}},
//     {name:'reno', color:'green', yer:1800},
//     {name:'mazda', color:'red', yer:1900, driver:{sex:'men', age:18, staj:'1 years',fullName:'Ivanov Ivan Sidorovich'}},
//     {name:'kamaz', color:'yellow', yer:2000, driver:{sex:'women', age:58, staj:'10 years',fullName:'Prosto Marusya'}},
//     {name:'zapor', color:'black', yer:2020, river:{sex:'men', age:32, staj:'10 years',fullName:'Sergey Juravlev =)'}}
// ];

// console.log(cars);

//8 проитерировать каждый массив из задания 5,6,7 при помощи while.

// let packCars = [{name:'ford', color:'red', yer:1900}, {name:'reno', color:'green', yer:1800},{name:'mazda', color:'red', yer:1900},{name:'kamaz', color:'yellow', yer:2000},{name:'zapor', color:'black', yer:2020},{name:'zapor', color:'black', yer:2500},{name:'lamborj', color:'black', yer:2020},{name:'zapor', color:'black', yer:2555},{name:'gtrtr', color:'white', yer:5000}];
// let i=0;

// while ( i < packCars.length)
// {
//     console.log(packCars[i])
//     i++
// }



// let cities = [{name:'kiev', population:4, region:'center', country:'Ukraine'},{name:'kharkov', population:2, region:'Vostok',country:'Ukraine'},{name:'lvov', population:3, region:'zapad',country:'Ukraine'}]
// //  console.log(cities);

// let i=0;
//  while ( i < cities.length){

//     console.log(cities[i]);
//     i++

//  }

//  let cars = [
//      {name:'ford', color:'red', yer:NaN, driver:{sex:'men', age:44, staj:'4 years',fullName:'G.D.A'}},{name:'reno', color:'green', yer:1800},{name:'mazda', color:'red', yer:1900, driver:{sex:'men', age:18, staj:'1 years',fullName:'Ivanov Ivan Sidorovich'}},{name:'kamaz', color:'yellow', yer:2000, driver:{sex:'women', age:58, staj:'10 years',fullName:'Prosto Marusya'}},{name:'zapor', color:'black', yer:2020, river:{sex:'men', age:32, staj:'10 years',fullName:'Sergey Juravlev =)'}}
//  ];

// i=0;
// while (i<cars.length){
//     console.log(cars[i])
//     i++
// }
// console.log(cars.length)

// for (let index = 0; index < cars.length; index++) {
//    console.log(cars[index]);

// }


// проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const iterator of cars) {
//     console.log(iterator)
// }


// взять объекты из задания 1 и превратить каждый в json

//  let ArrJson = JSON.stringify(cars);
//  console.log(ArrJson);


//  let JsonToArr = JSON.parse(ArrJson);
//  console.log(JsonToArr);

//  взять массив из задания 5,в цикле перебрать его объекты превратив их в json
//   взять массив из задания 6,в цикле перебрать его объекты превратив их в json
//  взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// let cities = [{name:'kiev', population:4, region:'center', country:'Ukraine'},{name:'kharkov', population:2, region:'Vostok',country:'Ukraine'},{name:'lvov', population:3, region:'zapad',country:'Ukraine'}]

// for (let index = 0; index < cities.length; index++) {
//     const element = console.log(JSON.stringify(cities[index]));

// }


//let packCars = ['5555',{name:'ford', color:'red', yer:1900}, {name:'reno', color:'green', yer:1800},{name:'mazda', color:'red', yer:1900},{name:'kamaz', color:'yellow', yer:2000},{name:'zapor', color:'black', yer:2020},{name:'zapor', color:'black', yer:2500},{name:'lamborj', color:'black', yer:2020},{name:'zapor', color:'black', yer:2555},{name:'gtrtr', color:'white', yer:5000}];

// for (let i = 0; i < packCars.length; i++) {
//     const element = console.log(JSON.stringify (packCars[i]));

// }



// let cars = [
//           {name:'ford', color:'red', yer:NaN, driver:{sex:'men', age:44, staj:'4 years',fullName:'G.D.A'}},{name:'reno', color:'green', yer:1800},{name:'mazda', color:'red', yer:1900, driver:{sex:'men', age:18, staj:'1 years',fullName:'Ivanov Ivan Sidorovich'}},{name:'kamaz', color:'yellow', yer:2000, driver:{sex:'women', age:58, staj:'10 years',fullName:'Prosto Marusya'}},{name:'zapor', color:'black', yer:2020, river:{sex:'men', age:32, staj:'10 years',fullName:'Sergey Juravlev =)'}}
//       ];


//     //   for (let i = 0; i < cars.length; i++) {
//     //       const element = console.log(JSON.stringify(cars[i]));

//     //   }
//     for (const iter of cars) {
//         const element = console.log(JSON.stringify(iter));
//     }


//16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
//17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив



let users =[{name:'Semion',age:11,skills:['IT','run']},{name:'Ivan',age:17,skills:['sweem','footbol']}]
// console.log(users[0])



for (const iterator of users)
{




    let arr=iterator.skills;
    let skillsArr=[];
    for (const iterator2 of arr) {


        skillsArr.push(iterator2);



    }
    console.log(skillsArr);
}



