function maskify(cc) {
    ccSymbols = cc.split('')
    ccFour = ccSymbols.splice(-4)
    return ccSymbols.map(sm => sm = '#').concat(ccFour).join('')
}


function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}