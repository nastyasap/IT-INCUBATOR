function multiply(arr, n = arr.length) {
  if (n <= 0) {
    return 1
  } else {
    return multiply(arr, n - 1,) * arr[n-1]; 5 * multiply([2,4,5], 2) * multiply([2,4,5], 1) * 1
  }
}

// console.log(multiply([2,4,5]))

// Развернуть строку
console.log('nastya'.split('').reverse().join(''))
