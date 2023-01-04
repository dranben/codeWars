// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(string, ending){
    if (ending.length === 0) {
        return true
    } else {
        return string.slice(-ending.length) == ending
    }
  }