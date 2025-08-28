/*
3 - problem:
Write a function areAnagrams(str1, str2) that checks if 
two strings are anagrams (contain the same characters in a different order).
function areAnagrams(str1, str2){ }
console.log(areAnagrams("listen", "silent"));
output:
true
*/
function areAnagrams(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    else{
        for(let key of str1){
            if(str2.includes(key)){
                return true
            }
        }
    }
}
console.log(areAnagrams("listen", "silent"))