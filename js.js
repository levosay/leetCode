
// const compress = (str) => {
//   if (str) {
//     if (str.length % 2 === 0) {
//       return str.match(/.{1,2}/g)
//     } else {
//       const result = str.match(/.{1,2}/g)
//       result[result.length - 1] = result[result.length - 1] + '_'
//       return result
//     }
//   } else {
//     return []
//   }
// }
// const compress = (str) => {
//   return str.split("").map((e,i) => i % 2 === 0 ? e + (str[i+1] || "_") : false).filter(e => e)
// }
//
// console.log(compress('test1'))


// const str = 'abcdef'
// const array = str.split('')
//
// // 1 + 2 + 3 + 4
// console.log(array.reduce((previousValue, currentValue) => currentValue + previousValue))
// console.log(array.reverse().join(''))


// function formatStr(str) {
//   const result = []
//
//   for (let i = 0; i < str.length; i++) {
//     if (result[str[i]]) {
//       result[str[i]]++
//     } else {
//       result[str[i]] = 1
//     }
//   }
//   // return JSON.stringify(result) .reduce((prev, value) => prev + value.join(''))
//   // return Object.entries(result).map(item => item.join('')).join('')
//
//   // return result
// }
// //
// //
//
// console.log(formatStr('ffxxaaax')) //f2x3a3



// nums.forEach(function(item, i, nums) {
//   const x = 0;
//   item + item;
//   if(x == target) {
//     console.log(item);
//   }
// });



// const twoSum = (nums, target) => {
//   return nums.map((item, index, arr) => {
//     if (item + arr[index + 1] === target) {
//       return [index, index + 1]
//     }
//     return false
//   }).filter(a => a)
// }
//
//
// console.log(twoSum([2,7,11,15], 9))


// const twoSum = (nums, target) => {
//   return nums ? nums.reduce((acc, item, index) => {
//     if (item + nums[index + 1] === target) {
//       acc.push(index, index + 1)
//     }
//     return acc
//   }, []) : []
// }
//
//
// console.log(twoSum([2,7,11,15], 9))


// const decodeMorse = (morseCode) =>{
//   const alphabet = {
//     "-----":"0",
//     ".----":"1",
//     "..---":"2",
//     "...--":"3",
//     "....-":"4",
//     ".....":"5",
//     "-....":"6",
//     "--...":"7",
//     "---..":"8",
//     "----.":"9",
//     ".-":"a",
//     "-...":"b",
//     "-.-.":"c",
//     "-..":"d",
//     ".":"e",
//     "..-.":"f",
//     "--.":"g",
//     "....":"h",
//     "..":"i",
//     ".---":"j",
//     "-.-":"k",
//     ".-..":"l",
//     "--":"m",
//     "-.":"n",
//     "---":"o",
//     ".--.":"p",
//     "--.-":"q",
//     ".-.":"r",
//     "...":"s",
//     "-":"t",
//     "..-":"u",
//     "...-":"v",
//     ".--":"w",
//     "-..-":"x",
//     "-.--":"y",
//     "--..":"z",
//     "/":" ",
//     "-.-.--":"!",
//     ".-.-.-":".",
//     "--..--":","
//   };
//   const messageConverted = [];
//
//   morseCode.split("   ").map(function (word) {
//     word.split(" ").map(function (letter) {
//       messageConverted.push(alphabet[letter])
//     })
//     messageConverted.push(" ")
//   })
//
//   return messageConverted.join("").toUpperCase().trim()
// }
//
//
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))


// const findMissingLetter = (array) => {
//   let arr_en
//   if (array[0] === array[0].toUpperCase()) {
//     arr_en = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//   } else {
//     arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   }
//   let result = []
//   arr_en.forEach((item, index) => {
//     if (item === array[0]) {
//       return result = arr_en.splice(index, array.length + 1)
//     }
//   })
//
//   return result.filter((item, index) => item !== array[index])[0]
// }
//
//
// console.log(findMissingLetter(['a','b','c','d','f']))

// const findMissingLetter = (array) => {
//   const arr_en = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
//   const start = arr_en.indexOf(array[0])
//   return arr_en.splice(start, start + array.length).find(el => !array.includes(el))
//
//
//
// }
//
//
// console.log(findMissingLetter(['a','b','c','d','f']))


// const anagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('')
//
// console.log(anagram('лось', 'соль'))

// const onlyUnique = (array) => {
//   return array.filter((elem, index, self) => self.indexOf(elem) === index)
//
// }
//
//
// console.log(onlyUnique([0, 2, 1, 1, 11, 2, 6, 33, 2, 5, 1, 0]))


// const onlyUnique = (array) => [...new Set(array)]
//
// console.log(onlyUnique([0, 2, 1, 1, 11, 2, 6, 33, 2, 5, 1, 0]))

// const solution = (number) => {
//   let result = 0
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result += i
//     }
//   }
//   return result
// }
//
//
// console.log(solution(10))

// const factorial = (num) => {
//   let sum = 1
//   for (let i = 1; i <= num; i++) {
//     sum *= i
//   }
//   return sum
// }
//
// console.log(factorial(5))

// const factorial = (num) => {
//   if (num) {
//     return num * factorial(num - 1)
//   } return 1
// }
//
// console.log(factorial(5))

const sumNumbers = (arr) => {
  if (arr.length === 1) {
    return arr[0]
  } return arr.pop() + sumNumbers(arr)
}

console.log(sumNumbers([1, 3, 4, 2, 2]))
