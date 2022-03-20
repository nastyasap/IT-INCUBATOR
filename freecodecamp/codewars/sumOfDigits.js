function digital_root(n) {
    let number = n.toString().split('').reduce((acc,n) => acc + Number(n), 0)
    return number > 9 ? digital_root(number) : number
}