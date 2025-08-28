/*
2-problem:
2. Write a function that takes a sentence and returns a new string 
where each word is reversed, but the order of words remains the same.
function reverseWords(sentence) { }
console.log(reverseWords("Hello World"));
output:
olleH dlroW

*/
function reverseWords(sentence){
    let arr = sentence.split(" ").map(item=> item.trim())
    let res = []
    for (let key of arr){
            res.push(key.split('').reverse().join(''))
    }
    let result = res.join("  ")
    return result
}
console.log(reverseWords("Hello World"));