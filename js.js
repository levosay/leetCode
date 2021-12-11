
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



const twoSum = (nums, target) => {
  return nums.map((item, index, arr) => {
    if (item + arr[index + 1] === target) {
      return [index, index + 1]
    }
    return false
  }).filter(a => a)
}


console.log(twoSum([2,7,11,15], 9))
