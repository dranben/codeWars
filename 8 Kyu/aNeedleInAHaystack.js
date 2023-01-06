// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// // "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    for (let index = 0; index < haystack.length; index++) {
        if (haystack[index] === "needle") {
            return `found the needle at position ${index}`
        }
    }
  }