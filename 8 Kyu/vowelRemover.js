// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// function shortcut (string) {
//     return string.replace(/[a,e,i,o,u]/g, '')
// }

// console.log(shortcut("hello"))

//let's make it an arrow function

const shortcut = string => string.replace(/[a,e,i,o,u]/g, '')