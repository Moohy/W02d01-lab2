// claculateCube = (n) => {
//     return n**3
// }

// isAVowel = c => {
//     return c.toUpperCase() == ('A' || 'E' || 'O' || 'U' || 'I')? true:false
// }

// getTwoLengths = (a, b) => {
//     let lengths = [a.length, b.length]
//     return lengths
// }

// getMultipleLengths = arr => {
//     return arr = arr.map(word => {return word.length})
// }

// maxOfThree = (a,b,c) => {
//     return Math.max(a,b,c)
// }
printLongestWord = arr => {
    let len = arr.length
    let i = 0
    let j = 0
    let longestEle
    while (i < len-1) {
        while(j+1 < len ){
            if (arr[j].length > arr[i].length) {
                longestEle = arr[j]
            }
            j++
        }
        i++
    }
    return longestEle
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

transmogrify = (a,b,c) => {
    let product = a*b
    while(c-1 > 0){
        c--
        product *= product
    }
    return product
}
console.log(transmogrify(5, 3, 2));

// fibonacci = n => {
//     let counter = 0
//     let arr  = []
//     while(counter < n) {
//         if (counter % 2 == 0) {
//            arr.push(counter)  
//         }
//         counter ++ 
//     }
//     return arr.reduce((a,b)=>{return a+b})
// }

// console.log(fibonacci(4000000));

// findNeedle = arr => {
//     return `Found the needle at position ${arr.indexOf('needle')}`
// }

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
