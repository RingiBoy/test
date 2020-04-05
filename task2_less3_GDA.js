


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



// let users =[{name:'Semion',age:11,skills:['IT','run']},{name:'Ivan',age:17,skills:['sweem','footbol']}]
// // console.log(users[0])
// let resul=[];
// for (const user of users)
// {
//     // console.log(user);
//     for (const skillList of user.skills) {
//         console.log(skillList);
//         resul.push(skillList);
//     }
//        console.log(resul);

// }

// - За допомогою 2х  циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

//  console.log(users);
//  console.log('__________');
// for (const user of users) {
//     // console.log(user)
//     // console.log('__________');


//         for (const znach in user) {

//             // console.log( typeof user[znach]);

//             if ((typeof user[znach] ==='object') && Array.isArray(user[znach])){
//                 for (const arr of user[znach]) {
//                      console.log(arr)
//                 }
//             }
//     }

// }

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// let obj=[];
// //  console.log(users);
//  for (let i = 0; i < users.length; i++) {
//       const user = users[i];
//         // console.log(user.address)
//        let adr = user.address;
//         obj.push(adr);


//      }
//      console.log(obj)



//
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     console.log(user);
//     let usersDivMain = document.createElement('div');

//   document.body.appendChild(usersDivMain);
//   let UserName=document.createElement('div');
//   UserName.innerText=`${user.name}`;
//   usersDivMain.appendChild(UserName);
//   //age

//   let UserAge=document.createElement('div');
//   UserAge.innerText=`${user.age}`;
//   usersDivMain.appendChild(UserAge);
//   //status
//   let Userstat=document.createElement('div');
//   Userstat.innerText=`${user.status}`;
//   usersDivMain.appendChild(Userstat);
//   //address:
//   let Useradd=document.createElement('div');
//   Useradd.innerText=`${JSON.stringify(user.address)}`;

//   usersDivMain.appendChild(Useradd);

// }

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// !!!!не понял задания


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]


// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];


// for (const userID of usersWithId) {
//     for (const cityID of citiesWithId)
//     {

//         if( userID.id===cityID.user_id){

//             userID.address=cityID;
//              console.log(usersWithId);

//         }
//     }
// }





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу


let classXXX= document.getElementsByClassName('xxx');
console.log(classXXX);
let idTest=document.getElementById('test');
console.log(idTest);
let divAll=document.getElementsByTagName('div')
console.log(divAll[1].innerText);

//  змінити цей текст використовуючи селектори id, class,  tag


idTest.innerText='Был текст1 , а стал другим!! Главное, что все работает';

classXXX[0].innerText='good by!!!';
// змінити висоту та ширину блоку використовуючи селектори id, class,  tag

idTest.style.width='300px';
idTest.style.height='300px';
divAll[1].style.background='green';

// let tab=document.createElement('table');
// let strokaTAB=document.createElement('tr');
// let dataTAB=document.createElement('td');
// let dataTAB2=document.createElement('td');
// let dataTAB3=document.createElement('td');
// strokaTAB.appendChild(dataTAB);
// strokaTAB.appendChild(dataTAB2);
// strokaTAB.appendChild(dataTAB3);
// tab.appendChild(strokaTAB);
// document.body.appendChild(tab);
// dataTAB.innerText='yacheyka1';
// dataTAB2.innerText='yacheyka2';
// dataTAB3.innerText='yacheyka3';
// dataTAB3.style.background='red';
// tab.style.background='yellow';
// let tab=document.createElement('table');
// for (let i = 0; i < 10; i++) {

// let strokaTAB=document.createElement('tr');
// let dataTAB=document.createElement('td');
// let dataTAB2=document.createElement('td');
// let dataTAB3=document.createElement('td');
// strokaTAB.appendChild(dataTAB);
// strokaTAB.appendChild(dataTAB2);
// strokaTAB.appendChild(dataTAB3);
// tab.appendChild(strokaTAB);

// dataTAB.innerText=`stroka ${i} yach1`;
// dataTAB2.innerText=`stroka ${i} yacheyka2`;
// dataTAB3.innerText=`stroka ${i}  yacheyka3`;
// }
// document.body.appendChild(tab);





