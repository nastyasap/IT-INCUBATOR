function digitize(n) {
    let arrStr = n.toString().split('').reverse();
    return arrStr.map(str => { return parseInt(str)});
    }