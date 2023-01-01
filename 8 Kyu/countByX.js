// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array

function countBy (counter, multiples) {
    let result = []
    let rollingCount = counter
    while (result.length < multiples - 1) {
        result.push(rollingCount)
        rollingCount = rollingCount + counter
    }
    return result
}