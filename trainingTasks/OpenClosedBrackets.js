function openClosedBrackets (str) {
    const arr = []
    for(let i = 0; i < str.length; i++ ) {
        if(str[i] === '(') {
            arr.push(str[i])
        }
        if(str[i] === ')') {
            const lastEl = arr.pop(str[i])
            if(!lastEl){
                return false
            }
        }
    }
    return !arr.length;
}

console.log(openClosedBrackets('((((()()()'))


function openClosedDiffBrackets (str) {
    const arr = []
    const obj = {
        '(': ')',
        '{':'}',
        '[':']'
    }
    for(let i = 0; i < str.length; i++ ) {
        const bracket = str[i]
        if(bracket === '(' || bracket === '{' || bracket === '[') {
            arr.push(bracket)
        } else {
            if(bracket === obj[arr[arr.length - 1]]){
                arr.pop()
            } else {
                arr.push(bracket)
            }
        }
    }
    return !arr.length
}

console.log(openClosedDiffBrackets('{()[()](())}'))


