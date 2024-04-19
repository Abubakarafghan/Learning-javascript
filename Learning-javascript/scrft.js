// let marks= prompt("ENTER YOUR MARKS (0-100):");
// let grade;

// if (marks>=90 && marks<=100){
// grade="A1";
// } else if(marks>=80 && marks<=89){
// grade="A";
// } else if(marks>=70 && marks<=79){
// grade="B";
// } else if(marks>=60 && marks<=69){
// grade="C";
// } else if(marks>=50 && marks<=59){
// grade="D";
// } else if(marks>=0 && marks<=49){
// grade="F";
// }
// console.log("YOUR GRADE IS EQULE TO:",grade)

// loops in for loop
// for loop
// for (let i = 1; i <=3; i++ ){
//     console.log("akr");
// }
// console.log("loop is ended");
// calculate sum of 1 to n
// let sum = 0;
// let n = 15
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log ("sum",sum)

// print 1 to 5
// for(let i = 1; i <= 5; i++){
//     console.log("i =", i);
// }

// infinite loop : a loop that never end its stoping condistion is alywas true
// while loop :
// let i = 1;
// while(i <=5){
//     console.log("akr");
//     i++;
// }
// do-while loop
// let i = 1;
// do{
//     console.log("i=", i);
//     i++
// }while(i<=5);

// for-of loop
// let str = "buner-akr";
// let size = 0;
// for(let i of str){
//     console.log("i",i)
//     size++;
// }
// console.log("string size:",size)

// for in loop
// let student = {
//     name: "akr",
//     age:"20",
//     gpa:"3.4",
//     ispass: true,
// };
// for (let key in student){
//     console.log("key:", key, "value:", student[key]);
// }

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");
// while (userNum != gameNum) {
//     userNum = prompt ("you entered wrong number. Guess again : ");
// }
// console.log("congratulation, you entered the right number");

// strings
// strings  is a sequence of characters used to represent text
// create string
// let str = "akr";

// let num = [1,2,3,4,5,6,7];
// for(let i = 0; i <num.length; i++){
//     let
// }
// Create an array from 1 to 7
// let num = [1,2,3,4,5,6,7];
// console.log("numbers:", num);

// let numbers = 3;

// for(let i = 1; i <= 7; i++){
//         console.log("i =", i);
//     }

// let size = Math.ceil(num.length / numbers);
//     console.log("Divided Arrays:",size);

// let divid = [];
// for (let i = 0; i < num.length; i += size) {
//     divid.push(num.slice(i, i + size));
// }

// uses of Arrays
// push():add to end
// Pop(): delete from end and return
// toString(): convert array to strings
// concat(); to joins multiple arrays Result
// unshift():add to Start
// shift():delete from start and return
// slice():returns a pice of the arrays
// splice(): change original array (add , remove, replace)

// Create an array from 1 to 7
// let num = Array.from({ length: 7 }, (__, i) => i + 1);
// console.log("num:", num);
// let number = 3;
// let size = Math.ceil(num.length / number);
// // console.log("numberss",size)
// let Divide = [];
// for (let i = 0; i < num.length; i += size) {
//     Divide.push(num.slice(i, i + size));
// }
// console.log("Divided Array:", Divide);
// console.log("slice number ", num.slice(1, 5));

// const fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// const functionName = () =>{

// }

// Divide.forEach((num, index) => {
//     console.log(`Array ${index}:`, num);
// });

// let nums = Array.from({length: 41}, (___, n) =>n + 1)
// let numbers = 4;
// let sizes = Math.ceil(nums.length/numbers);
// let dev = [];
// for(let n = 0; n<nums.length; n += sizes){
//     dev.push(nums.slice(n, n + sizes));
// }
// console.log("dev:",dev)

// // let akr = Array.from({length:7},(__,i) =>i + 1);
// let akr =[1,2,3,4,5,6,7];
// console.log("akr",akr);

// function in js
// block of code that performs a spicific task, can be invocked whenever needed

// function definition
// function functionName(){ => (abc, xyz)=>parameter=>input
//    write your code
// redandancy=>repeat
// }
// function call
// functionName("if we call the abc then its callad argument"):

// arrow function => modrn js
// compact way of writing a function
// const functionName = (a,b) =>{
//     return a+b;
// }

// const countV = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//             ) {
//                 count++;
//               }
//     }
//     return count;
// }

// foreach loop in arrays / also called higher order function/methods
// callbackfunction : here, its a function to execute for element in the array

// a callback is a function passed as an argument to another function.
//  array.forEach((element) => {
//     console.log(element);
//  });

// let arr = [1,2,3,4,5,6];
// arr.forEach(function print(val){  // value at each indx
//     console.log(val)
// })

// let arrow = ["akr","hassan","maaz"]
// arrow.forEach((val, indx, array)=>{
//     console.log("arrow",val.toUpperCase(), indx,array);
// })

// let num = [2,3,4,5,6,7];
// num.forEach((num)=>{
//     console.log(num * num);
// });

// 2nd methods
// let num = [4,4,5,6,7,8,9,77];
// let calcSqire = (num)=>{
//     console.log(num*num);
// }
// num.forEach(calcSqire);

// some more array methods
// Map
// creates a new array with the results of some speration, the value its callback returns are used to form now array
// Array.map(callbackfnx(value, index, array))

// let num = [1,2,3,4,5,6,7,8,56,45];
// let newArr = num.map((val)=>{
//     return val * 6;
// })
// console.log(newArr)



//  countVowels
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o") 
//     {
//       count++;
//     }
//   }
//   console.log(count);
// }


// forEach loops in arrays

// array.forEach(callbackfunction)

// let arra= [1,1,1,1,23,234,234,3432,432];
// let a = ["str", "pak", ];

// arra.forEach((valp , indx , arr) => {
//     console.log(valp, arr, indx)
    
// });

// a.forEach(a => {
//     console.log(a.toUpperCase())

// });


// Map methord array but this alittle change this make a new array 
// its like foreach this more using for collection 
// let num = [12, 21,2]
// num.map((val) => {
//     console.log(val)
// });

// let newArr = num.map((value) => {
//     return value * 5;
// });

// console.log("numis", newArr)


// filter methord

// let values = [ 1,1,23,4,5,6,7,6,5,4,44,33,44,55,];
// let evenarray = values.filter((ok) => {
//     return ok % 2 === 0;
// }) 

// console.log(evenarray);



// reduce mathord
// let arr = [1,3,4,5,6 ,100]
// const newvalue = arr.reduce((prev, current) =>{
//     return prev > current ? prev : current; //agr hara prev current is bara to ? prev return kar do (nhi to) : current return kardo 
// }) 
// console.log(newvalue)




// solve questions
// let marks = [80,90,91,50];
// let topers = marks.filter((write_a_name_you_want)=>{//filter works like filter we used in hahahaa
//     return write_a_name_you_want >= 90;
// })
// console.log("topers",topers)

// let n = prompt("enter a number");
// let arr = [];
// for (let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// // add the above Number by reduce mathord

// let sum = arr.reduce((result, current)=>{
//     return result + current;
// })
// console.log("sum",sum)

// // multiplication
// let mul = arr.reduce((res, current)=>{
//     return res * current;
// })
// console.log("multiple",mul);

// new topic is dom part 1

