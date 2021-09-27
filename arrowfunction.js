//Print odd numbers in an array
const oddNumber = arr => arr. filter(num => num & 1);
console.log(oddNumber([1,2,3,4,5,6,24,13,16,17]));

//Convert all the strings to title caps in a string array

var str=["full","stack","web","development"].map(i => i.toUpperCase().trim()).join(" ");
var str1=" ";
str1+=" "+str;
console.log(str1);

//Sum of all numbers in an array
var number = sum => sum.reduce((x,y) => x+y,0);
console.log(number([1,2,3,10,20]));

//Return all the prime numbers in an array

primeOrNot = [1, 2, 3, 5, 7, 10, 120, 133, 151, 27];

function prime(arr){
    return "The Prime Numbers are: " + arr.filter((number) => {
 
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
}
console.log(prime(primeOrNot));



//palindrome



let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa']; 
let palindromes = arr.filter(w => { 
    let len = w.length; 
    for (let i = 0; i < len / 2; i++) { 
        if (w[i] == w[len - i - 1]) 
        { 
            return true; 
        } else 
        { return false; 
        } 
    } 
}); 
console.log(palindromes);