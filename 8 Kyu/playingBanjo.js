// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function isPlayingBanjo (name) {
    let result = name + " does not play banjo"
    if (name.charAt(0) == "r") {
        result = name + " plays banjo"
    } else if (name.charAt(0) == "R") {
        result = name + " plays banjo"
    }
    return result
}

console.log (isPlayingBanjo("ralph"))
console.log (isPlayingBanjo("Ralph"))
console.log (isPlayingBanjo("alph"))