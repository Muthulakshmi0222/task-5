var arrays = ['web', 'mom', 'honda', 'malayalam' , 'development' ];   
var b = arrays.filter(function(c,d,f){
var palin = c.split('').reverse().join('');
if(c == palin){
console.log("The palindrome are "+arrays[d]);
}
});
