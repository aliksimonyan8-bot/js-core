
//  //Task 1
// function capitalize(str){
//     let str1 = str[0].toUpperCase();
//     let st= str.slice(1).toLowerCase();
//     return str1+st;
// }
// console.log(capitalize("fhfhdjhfhdshJHGGHGJjkj"));

// //Task 2


// function getInitials(str){
//     let  arr = str.split(" ");
//     return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}.`
   
    
// }
// console.log(getInitials("anna petrosyan"));


// //task 6

// function getExtension(str){
//     let lastindex =  str.lastIndexOf(".");
//    return str.slice(lastindex);
// } 
// console.log(getExtension("dffdfdf.dffdgfdgdg.fdggf.jpg"));

// //task 3

// function getLastChar(str){
//     return str.slice(-1);
// }
// console.log( getLastChar("node"));
//// task 4
// function makeSlug(title){
//     return title.replaceAll(" ", "-").trim().toLowerCase();
// }
// console.log(makeSlug("Hy my JS"));

// //task 5

// function getUsername(email){
//     return (email.trim().split("@"))[0];
// } 
// function getDomain(email){
//     return (email.trim().split("@"))[1];
// }console.log(getUsername("alik@gmail.com") ,getDomain("alik@gmail.com"));

// //task 7

// function isImage(fileName){
//     let lastindex = fileName.lastIndexOf(".");
//     if( fileName.slice(lastindex)===".jpg"|| fileName.slice(lastindex)== ".png"){
//         return true;
//     }return false;
// }
// console.log(isImage("photo.final.dsd"));
// // task 8
// function maskCard(cardNumber){
//     let str1 = cardNumber.slice(-4);
//     return str1.padStart(cardNumber.length, "*");
// }
// console.log( maskCard("1522522544486668005"));
// // task 9

// function truncate(text , maxLength){
//     return (text.length > maxLength)? text.slice(0,maxLength)+"...": text;
// }
// console.log(truncate("hi" , 3));

// // task10
// function countChar(text, char){
//     return text.split(char).length
// }
// console.log(countChar("eeartllakt  a  kakijr", "a"));

// //task 11 

// function censor(text ,  word) {
//     return text.replaceAll(word, "".padStart(word.length, "*" ))
// }


// console.log(censor("bad day, bad mood", "bad") )

// // task 13 
// function sameText(a, b){
//     return a.trim().toUpperCase()===b.trim().toUpperCase()
// }
// console.log(sameText("yerevan","YersEvan"));

// // task 14

// function charCodeInfo(char){
//    return `${char} i kody  ${char.charCodeAt()} hjordy (${String.fromCharCode(char.charCodeAt()+1)})`
// }
// console.log(charCodeInfo("A"));


// NUMBERS
// // task 1

// function compareFinite(argument){
//    return  `isfinite ${isFinite(argument)}, number.isFinite ${Number.isFinite(argument)} ` 
// }
// console.log(compareFinite(15)); // 2 nel true verjavor tiv e u karum e hangist cast anel
// console.log("baaaaaa");

// console.log(compareFinite("15")); //
// console.log("baaaaaa");

// console.log(compareFinite(null)); // null poxum e 0 mek el null y object e type number chi 
// console.log("baaaaaa");

// console.log(compareFinite("")); // "" poxum e 0 mek el "" string e type number chi 
// console.log("baaaaaa");

// console.log(compareFinite(true));// eli nuynic
// console.log("baaaaaa");

// console.log(compareFinite("abc")); // voch aknhayt cast "abc" chi karum sarqi verjavor tiv  

// // task 2

// function compareNaN(value){
//     return`isNaN ${isNaN(value)} Number.IsNan ${Number.isNaN(value)}`
// }
// console.log(compareNaN("hello")); 

// // task 3
// function isValidAge(value){
//     return  (Number.isInteger(value) && (value < 150 && value > 0));  
// }
// console.log(isValidAge(185));

// areEqual(a, b)․ համեմատել թվերը Number.EPSILON-ով։
// areEqual(0.1 + 0.2, 0.3) → true, 0.1 + 0.2 === 0.3 → false
// Բոնուս․ փորձել areEqual(1000.1 + 1000.2, 2000.3) և բացատրել արդյունքը։

// // task 5
// function areEqual(a,b,c){
// return (((a+b) - c) < Number.EPSILON)
// }
// console.log(areEqual(0.1,0.2, 0.3));
 