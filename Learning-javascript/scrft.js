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

let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while (userNum != gameNum) {
    userNum = prompt ("you entered wrong number. Guess again : ");
}
console.log("congratulation, you entered the right number");