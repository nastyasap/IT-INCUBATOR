function createPhoneNumber(numbers){
    inbrackets = numbers.splice(0,3).join('')
    secondPart = numbers.splice(0, 3).join('')
    return phoneN = `(${inbrackets}) ${secondPart}-${numbers.join('')}`

}

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}