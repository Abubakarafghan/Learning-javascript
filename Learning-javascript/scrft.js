let marks= prompt("ENTER YOUR MARKS (0-100):");
let grade;

if (marks>=90 && marks<=100){
grade="A1";
} else if(marks>=80 && marks<=89){
grade="A";
} else if(marks>=70 && marks<=79){
grade="B";
} else if(marks>=60 && marks<=69){
grade="C";
} else if(marks>=50 && marks<=59){
grade="D";
} else if(marks>=0 && marks<=49){
grade="F";
}
console.log("YOUR GRADE IS EQULE TO:",grade)