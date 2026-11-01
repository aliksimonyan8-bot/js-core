

// ARRAYS AND OBJECTS 

let arr = [1,4,2,3,6,"ss",5,4,7,8,9];
// // task 1 
// function getFirstAndLast(arr){
//     return [arr[0], arr[arr.length-1]];
// }
// console.log(getFirstAndLast(arr));

// // task2
// function getLength(arr){
//     return arr.length;
// }
// console.log(getLength(arr));

// // task 3

// function pushEl(arr,el){
//      arr.push(el);
//     return arr;
//     }
// console.log(pushEl([1,2,'ee','e'],'kk'));

// // task 4

// function pushFirst(arr,el){
//      arr.unshift(el);
//     return arr;
//     }
// console.log(pushFirst([1,2,'ee','e'],'kk'));

// // task 5

// function removeLast(arr){
//     arr.pop();
//     return arr;
// }
// console.log(removeLast(arr));

// // task 6

// function hesItem(arr,item){
//     return arr.includes(item);
// }
// console.log(hesItem(arr,'aa'));// false

// //task 7

// function findPosition(arr, el){
//     return arr.indexOf(el)
// }
// console.log(  findPosition(arr, 4) );

// // task 8 

// function joinWords(arr){
//     return arr.join(" ");
// } 
// console.log(joinWords(["I", "love", "JS"]));

// //task 9

// function sliceArr(arr){
    // return arr.join("").slice(0,3).split("");
// 
// }
// console.log(sliceArr(["I","love","JS"]));

// // task 10

// function middlElemInArr(arr){
//      return (arr.length % 2 ===  0)? "arr s mejtegh chuni ":  arr[(arr.length-1)/2];
// }
// console.log(middlElemInArr(arr));

arr = [1,4,2,3,6,"ss",5,4,7,8,9];

// //task 11

// function countWords(string){
//     return string.split(" ").length;
// }
// console.log(countWords("Today is a good day"));

// // task 12

// function replaceAt(arr, index, value){
//     arr[index] =value;
//     return arr;
// }
// console.log(replaceAt(arr, 5 , 5555));


                // objects //

// task 13

// function createStudent(name, age, city){
//     return {
//         "name" : name,
//         "age"  : age,
//         "city" : city
//     }
// }console.log(createStudent("Ashot", 43, "Yerevan"));

// // Task 14. 
// function getFullName(person){
//     return `${person.firstName} ${person.lastName}`
// }
// console.log(getFullName({ firstName: "Aram", lastName: "Petrosyan" })); 

// // Task 15.
// function isAdult(person){
//     return person.age >= 18;
// }
// console.log(isAdult({ name: "Lilit", age: 88 }));

//  //Task 16.
// function getProperty(obj, key){
    // return obj[key];
// 
// }
// console.log(getProperty({ color: "red", size: "M" }, "size"));
// 
// // task 17
// function updateAge(person, newAge){
//     person.age = newAge;
//     return person;
// }
// console.log(updateAge({ name: "Ani", age: 20 }, 21));
// // task 18
// function addEmail(person, email){
//     person.email = email;
//     return person
// }
// console.log(addEmail({ name: "Ani" }, "ani@mail.com"));

// // task 19

// function removeProperty(person, key){
//     delete person[key];
//     return person
// }
// console.log(removeProperty({ name: "Ani", age: 20 }, "age"));
// //  task 20
// function hasProperty(obj, key){
//     return  key in obj;
// }
// console.log(hasProperty({ name: "Ani" }, "name"));
// console.log(hasProperty({ name: "Ani" }, "age"));

// // task 21
// function countProperties(obj){
//     return Object.keys(obj).length;
// }
// console.log(countProperties({ a: 1, b: 2, c: 3 }));

// // task 22
// function describeCar(car){
//     return Object.values(car).join(" ")
// }
// console.log(describeCar({ brand: "Toyota", model: "Camry", year: 2020 }));

// task 23

function getCity(user){

}

// // task 24
// function getSecondName(matrix){
//     return matrix[1].name;
// }


// console.log(getSecondName([
//   { name: "Aram" },
//   { name: "Lilit" },
//   { name: "Davit" }
// ]));

// // task 25

// function getLastPrice(matrix){
//     return matrix[matrix.length-1].price
// }
// console.log(getLastPrice([
//   { title: "Pen", price: 200 },
//   { title: "Notebook", price: 900 },
// ]));

// // task 26

// function addSkill(person, skill){
//     if(person.skills === undefined){
//         person.skills = skill;
//     }else{
//         person.skills.push(skill);
//     }

//     return person;
// }
// console.log(addSkill({ name: "Ani", skills: ["HTML"] }, "CSS"));

// // task 27
// function countSkills(person, skill){
//     if(person.skills === undefined){
//         return 0;
//     }else{
//         return person.skills.length
//     }   
// }
// console.log(countSkills({ name: "Ani", skills: ["HTML", "CSS", "JS"] }));
    
// 28 chjogeci incha uzum 



// const a = [1, 2];
// const b = a;
// b.push(3);
// console.log(a); //[1,2,3]
