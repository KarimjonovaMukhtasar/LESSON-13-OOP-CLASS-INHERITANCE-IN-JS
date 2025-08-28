/*
Write a function that takes an array of user objects and returns 
a new array with users whose ages are between 18 and 35.
function filterUserByAge(arr) {}

const users = [
     { name: "Alice", year: 2002},
     { name: "Bob", year: 1990},
     { name: "Charlie", year: 2008},
     { name: "David", year: 2010},
];
output: 
[
     { name: "Alice", year: 2002},
     { name: "Bob", year: 1990}
]  
*/
function filterUserByAge(arr){
    let d = new Date()
    let year = d.getFullYear()
    let arr1 = arr.filter((a)=> year - Number(a.year) >= 18 &&year - Number(a.year <= 35))
    return arr1
}
const users = [
     { name: "Alice", year: 2002},
     { name: "Bob", year: 1990},
     { name: "Charlie", year: 2008},
     { name: "David", year: 2010},
]
console.log(filterUserByAge(users))