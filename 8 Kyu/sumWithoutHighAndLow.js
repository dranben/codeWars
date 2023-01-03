// Sum all the numbers of a given array except the highest and the lowest element by value.

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray (array) {
    let result = 0
    if (array === undefined || array === null || array.length < 3) {
        return result
    } else {
        let resultArray = array.sort((a, b) => {
            if (a > b) return 1
            if (a < b) return -1
            return 0
        }).slice(1, -1)
        resultArray.map(number => result+=number)
        return result
    }
}