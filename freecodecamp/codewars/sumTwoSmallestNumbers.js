function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b) => a-b).splice(0,2).reduce((acc,el)=> acc+el , 0)
}