// function fizzBuzz(num) {
//     if (num % 15 === 0) return 'fizzbuzz';
//     if (num % 3 === 0) return 'fizz';
//     if (num % 5 === 0) return 'buzz'
//     return num;
// }

// we then can refactor to this
function fizzBuzz(num) {
    let string = '';
    if (num % 3 === 0) string += 'fizz';
    if (num % 5 === 0) string += 'buzz'
    return string || num;
}

/*
if you wanna impress some people on codewars you can do : 🤯
const fizzBuzz = num => (num % 3 ? '' : 'fizz') + (num % 5 ? '' : 'buzz') || num
*/