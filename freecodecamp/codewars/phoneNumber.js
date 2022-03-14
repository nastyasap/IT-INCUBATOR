function createPhoneNumber(numbers){
    inbrackets = numbers.splice(0,3).join('')
    secondPart = numbers.splice(0, 3).join('')
    return phoneN = `(${inbrackets}) ${secondPart}-${numbers.join('')}`

}