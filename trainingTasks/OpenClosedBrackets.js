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
