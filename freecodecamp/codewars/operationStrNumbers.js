function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}

//case_2

function basicOp_2(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        
    }
}

//case_3

function basicOp_3(operation, value1, value2) {
    let cases = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
    };
    return cases[operation]
}